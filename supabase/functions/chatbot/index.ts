import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the virtual assistant for Living Colours, a boutique coliving opening in October 2026 in central Lisbon.

Here is what you know about the coliving:

**Concept:** A quality shared house in a heritage building at Almirante Reis 142, Lisbon. Not a hotel, not a student residence, not a soulless apartment. A boutique coliving designed for people in motion — master's students, young professionals, digital nomads — who stay in Lisbon for months and want to live well while they're here.

**Who it's for:** Students in mobility, young professionals, digital nomads, and people relocating to Lisbon.

**Room types:**
- Smart (~9 m²) — compact and functional, shared bathroom
- Standard (11–13 m²) — comfortable with workspace, shared bathroom
- Premium (15–20 m²) — spacious with heritage details, shared bathroom
- Suite (~12 m²) — private bathroom, more autonomy
- Master Suite (18–25 m²) — space and private bathroom, some rooms have a balcony

**Pricing:** Prices are available on request. We do not share specific prices — please direct all pricing questions to the team: hello@livingcolours.pt

**What's included:** Furnished rooms, utilities (water, electricity, gas), high-speed internet, fortnightly room cleaning, bed linen, access to all common areas, community events.

**Common spaces (confirmed):** Coworking and lounge (1st floor), meeting rooms (2 bookable, 1st floor), communal kitchen (1st floor, for events), laundry (Miele, self-service).

**Common spaces (future vision — not part of current offer):** Cinema room and gym. These are being developed as a natural evolution of the building. No timeline confirmed.

**Minimum stay:** 3 months. Typical stays are 3 to 12 months.

**Location:** Avenida Almirante Reis 142, Lisbon. Direct access to the green metro line.

**Opening:** Hard Launch in October 2026. Soft Launch (limited rooms) in July 2026.

RULES:
- Answer in the same language the user writes in (Portuguese or English).
- Be friendly, concise, and helpful.
- Never share specific prices — always say prices are available on request and invite the user to fill in the interest form or contact hello@livingcolours.pt.
- Never describe the cinema room or gym as confirmed amenities — they are a future vision.
- If you don't know the answer, say: "I don't have that information right now — please contact us at hello@livingcolours.pt and our team will get back to you shortly."
- Keep answers short (2–4 sentences max).`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-lite",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chatbot error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
