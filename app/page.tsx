import "core-js/stable"; // Polyfill ES6+ features
import "promise-polyfill/src/polyfill"; // Polyfill Promises
import "regenerator-runtime/runtime"; // Polyfill async/await
import Contact from "./components/Contact/Contact";
import Intro from "./components/intro";
import Location from "./components/Location";
import Services from "./components/Services/Services";
import Skills from "./components/Skills";
import SectionAnimationWrapper from "./SectionAnimationWrapper";
export default function Page() {
  const components = [
    <Intro />,
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Skills />
      <Location />
    </div>,
    <Services />,
    <Contact />,
  ];
  return (
    <>
      {components.map((component, i) => (
        <SectionAnimationWrapper key={`comp_${i}`}>
          {component}
        </SectionAnimationWrapper>
      ))}
    </>
  );
}
