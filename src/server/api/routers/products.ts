import { z } from "zod";
import { type Products } from "@prisma/client";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }): Promise<Products[]> => {
    return ctx.db.products.findMany();
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }): Promise<Products | null> => {
      return ctx.db.products.findUnique({
        where: { id: input.id },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        height: z.number(),
        width: z.number(),
        depth: z.number(),
        year: z.number(),
        artist_name: z.string(),
        material: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }): Promise<Products> => {
      return ctx.db.products.create({
        data: input,
      });
    }),
});
