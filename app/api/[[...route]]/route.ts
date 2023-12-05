import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono().basePath("/api");

const route = app.get(
	"/hello",
	zValidator(
		"query",
		z.object({
			name: z.string(),
		}),
	),
	(c) => {
		const { name } = c.req.valid("query");
		return c.json({
			message: `Hi ${name}`,
		});
	},
);

export const GET = app.fetch;
export const POST = app.fetch;
export type AppType = typeof route;
