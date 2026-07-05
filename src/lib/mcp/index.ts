import { defineMcp } from "@lovable.dev/mcp-js";
import getPropertyInfo from "./tools/get-property-info";
import listRooms from "./tools/list-rooms";
import listAmenities from "./tools/list-amenities";

export default defineMcp({
  name: "living-colours-mcp",
  title: "Living Colours MCP",
  version: "0.1.0",
  instructions:
    "Tools for Living Colours, a boutique coliving in Lisbon opening October 2026. Use these tools to answer questions about the property, room typologies, amenities, and common spaces. Prices are not disclosed — always refer pricing questions to hello@livingcolours.pt.",
  tools: [getPropertyInfo, listRooms, listAmenities],
});