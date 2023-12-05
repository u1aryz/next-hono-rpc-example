import { AppType } from "@/app/api/[[...route]]/route";
import { env } from "@/env.mjs";
import { hc } from "hono/client";

export default async function Home() {
	const client = hc<AppType>(env.NEXT_PUBLIC_API_BASE_URL);
	const res = await client.api.hello.$get({ query: { name: "Hono!" } });
	const data = await res.json();
	return <div>{data.message}</div>;
}
