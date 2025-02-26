import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <NavBar />

      <main className="overflow-hidden">
        <section className="flex justify-center items-start w-screen h-screen relative overflow-hidden">
          <img
            src="/illustration.svg"
            className="w-full h-full object-cover"
          ></img>
        </section>
        <section className="flex justify-center items-start w-screen h-screen relative overflow-hidden">
          <div className="w-screen h-screen bg-white"></div>
        </section>
      </main>
    </>
  );
}
