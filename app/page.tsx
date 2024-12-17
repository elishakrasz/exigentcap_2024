import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/lib/client"

const PERSON_QUERY = `*[_type == "person" && order < 12] | order(order asc) | { _id,name,title, subtitle, description, image, slug, order }`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const persons = await client.fetch<SanityDocument[]>(
    PERSON_QUERY,
    {},
    options,
  );
  return (
    <div>
      <div className="mt-12 w-[80%] text-2xl mx-auto items-center text-center font-bodoni text-slate-600">
        <h3>Exigent is a diversified financial services company with three
        distinct businesses.</h3>
      </div>
    </div>
  );
}
