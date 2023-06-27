import { createClient } from "@/prismicio";

export default async function Page({ params }: any) {
    const client = createClient();
    console.log("==>", params)
    const page = await client.getByUID("page", params.uid);
    console.log("==>Page", page)

    return <div>{page.uid}</div>;
}