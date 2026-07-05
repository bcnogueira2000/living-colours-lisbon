import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_amenities",
  title: "List amenities and common spaces",
  description: "List what's included in a stay and which common spaces are available (or planned).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          included: [
            "Furnished room",
            "Utilities (water, electricity, gas)",
            "High-speed internet",
            "Fortnightly room cleaning",
            "Bed linen",
            "Access to all common areas",
            "Community events",
          ],
          commonSpaces: [
            "Coworking and lounge (1st floor)",
            "Meeting rooms — 2 bookable (1st floor)",
            "Communal kitchen (1st floor, for events)",
            "Laundry (Miele, self-service)",
          ],
          futureVision: [
            "Cinema room (not confirmed, no timeline)",
            "Gym (not confirmed, no timeline)",
          ],
        }),
      },
    ],
  }),
});