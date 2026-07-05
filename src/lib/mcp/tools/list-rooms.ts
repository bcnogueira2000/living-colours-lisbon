import { defineTool } from "@lovable.dev/mcp-js";

const ROOMS = [
  { type: "Smart", size: "~9 m²", bathroom: "shared", notes: "Compact and functional." },
  { type: "Standard", size: "11–13 m²", bathroom: "shared", notes: "Comfortable with workspace." },
  { type: "Premium", size: "15–20 m²", bathroom: "shared", notes: "Spacious, heritage details." },
  { type: "Suite", size: "~12 m²", bathroom: "private", notes: "More autonomy." },
  { type: "Master Suite", size: "18–25 m²", bathroom: "private", notes: "Some rooms have a balcony." },
];

export default defineTool({
  name: "list_rooms",
  title: "List room types",
  description:
    "List all available room typologies at Living Colours with size and bathroom info. Prices are not disclosed — direct pricing inquiries to hello@livingcolours.pt.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          rooms: ROOMS,
          pricing: "Available on request — contact hello@livingcolours.pt.",
        }),
      },
    ],
  }),
});