import { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

export default async function Home() {
	const client = hc<AppType>("http://localhost:3000");
	const res = await client.api.hello.$get({ query: { name: "Hono!" } });
	const data = await res.json();
	return <div>{data.message}</div>;
}
