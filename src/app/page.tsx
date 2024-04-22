import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";
import { truck } from "./assets/images";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="flex flex-col pt-[155px]">
        <Hero />
        <div className="px-[316px] pt-16">
          <Image
            src={truck}
            alt="truck"
            width={969}
            height={690}
          />
        </div>
        <Content />
      </section>
    </main>
  );
}
