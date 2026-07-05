import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_property_info",
  title: "Get property info",
  description: "Get an overview of Living Colours: concept, location, opening dates, and contact.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          name: "Living Colours",
          concept:
            "Boutique coliving in a heritage building in central Lisbon for master's students, young professionals, and digital nomads.",
          address: "Avenida Almirante Reis 142, Lisbon, Portugal",
          metro: "Green line — direct access",
          minimumStay: "3 months (typical stays 3–12 months)",
          softLaunch: "July 2026 (limited rooms)",
          hardLaunch: "October 2026",
          contact: "hello@livingcolours.pt",
        }),
      },
    ],
  }),
});