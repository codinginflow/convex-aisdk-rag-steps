import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  notes: defineTable({
    title: v.string(),
    body: v.string(),
    userId: v.id("users"),
  }).index("by_userId", ["userId"]),
});

export default schema;
