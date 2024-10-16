import Image from "next/image";
import MouseMove from "./MouseMove";

export default function Page() {
  return (
    <section className="rounded-[32px] bg-zinc-700/90 backdrop-blur-md p-4 min-h-[80vh] flex flex-col items-center justify-start gap-4">
      {/* <!--Gradient--> */}
      <MouseMove />
      <div className="blob"></div>
      <div className="h-32 w-32 rounded-full relative overflow-hidden">
        <Image
          src={"/images/logOriental.jpg"}
          fill
          className="object-cover"
          alt="Logoriental"
        />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        LogOriental
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
    </section>
  );
}
