import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the virtual assistant for Living Colours AR, a boutique coliving residence opening in September in central Lisbon.

Here is what you know about the coliving:

**Concept:** A thoughtfully designed home for people in mobility — not a hotel, not a hostel, not a dormitory. Temporary living with permanent quality. Private spaces with shared values.

**Who it's for:** Students in mobility, young professionals, digital nomads, and people relocating to Lisbon.

**Room types:**
- Smart Room (from €650/month) — 10m², compact & efficient, shared bathroom
- Standard Room (from €750/month) — 14m², comfortable with workspace, shared bathroom
- Premium Room (from €900/month) — 18m², spacious with private bathroom
- Suite (from €1100/month) — 25m², large with sitting area, private bathroom
- Master Suite (from €1400/month) — 35m², premium with walk-in closet & balcony, private bathroom

**What's included:** Furnished rooms, utilities (water, electricity, internet), weekly cleaning, access to all shared spaces, community events.

**Shared spaces:** Coworking area, meeting rooms (reservable), shared kitchen, cinema room, gym.

**Location:** Central Lisbon, well-connected by public transport.

**Pre-launch:** Currently collecting expressions of interest for the September opening.

RULES:
- Answer in the same language the user writes in (Portuguese or English).
- Be friendly, concise, and helpful.
- If you don't know the answer or the question is outside your knowledge about Living Colours AR, say something like: "I don't have that information right now, but I'll pass your question to one of our managers who will get back to you shortly. Could you leave your email so we can contact you?"
- Never invent information that is not provided above.
- Keep answers short (2-4 sentences max).`;

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
