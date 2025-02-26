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
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl font-bold">
              Welcome to my Portfolio
            </h1>
          </div>
        </section>
        <section className="flex justify-center items-start w-screen h-screen relative overflow-hidden">
          <div className="w-screen h-screen bg-white">
            <div className="bg-black">
              <div>
                <h3 className="text-black">Video editing</h3>
              </div>
              <div>
                <p className="font-black">
                  Video editing has been <br />
                  my passion for over 4 years
                </p>
              </div>
            </div>
            <div className="text-black">
              <div>
                <h2>Video editing</h2>
              </div>
              <div>
                <p className="text-black">
                  Video editing has been <br />
                  my passion for over 4 years
                </p>
              </div>
            </div>
            <div className="text-black">
              <div>
                <h2>Video editing</h2>
              </div>
              <div>
                <p className="text-black">
                  Video editing has been <br />
                  my passion for over 4 years
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
