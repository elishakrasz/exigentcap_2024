import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/lib/client"
import BusinessCard from "./components/BusinessCard";
import MeetTheTeam from "./components/MeetTheTeam";
import Investments from "./components/Investments";
import StrategicAdvisors from "./components/StrategicAdvisors";
import Firm from "./components/Firm";
import Contact from "./components/Contact";

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
      <div className="mt-12 w-[80%] text-[24px] md:text-[30px] mx-auto lg:max-w-2xl xl:max-w-3xl xl:text-[32px] items-center text-center font-bodoni text-gray-500">
        <h3>Exigent is a diversified financial services company with three
        distinct businesses.</h3>
        <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-6"></div>
      </div>

      <BusinessCard />
      <MeetTheTeam persons={persons}/>
      <Investments />
      <StrategicAdvisors />
      <Firm />
      <Contact />
    </div>
  );
}
