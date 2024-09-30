import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getLabels = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("labels").collect();
  },
});