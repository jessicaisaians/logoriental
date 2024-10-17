import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright";
import Header from "./components/Header";
import Intro from "./components/intro";
import Location from "./components/Location";
import Services from "./components/Services/Services";
import Skills from "./components/Skills";
import PageWrapperAnimation from "./PageWrapperAnimation";
import SectionAnimationWrapper from "./SectionAnimationWrapper";

export default function Page() {
  const components = [
    <Header />,
    <Intro />,
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
      <Skills />
      <Location />
    </div>,
    <Services />,
    <Contact />,
    <Copyright />,
  ];
  return (
    <PageWrapperAnimation>
      {components.map((component, i) => (
        <SectionAnimationWrapper key={`comp_${i}`}>
          {component}
        </SectionAnimationWrapper>
      ))}
    </PageWrapperAnimation>
  );
}
