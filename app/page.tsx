import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright";
import Header from "./components/Header";
import Intro from "./components/intro";
import Location from "./components/Location";
import Services from "./components/Services/Services";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <section className="w-full mx-auto flex flex-col gap-6">
      <Header />
      <Intro />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <Skills />
        <Location />
      </div>
      <Services />
      <Contact />
      <Copyright />
    </section>
  );
}
