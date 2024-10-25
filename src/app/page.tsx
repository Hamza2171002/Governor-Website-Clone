import Hero_Section from "./components/Hero/page";
import About from "./components/About/page";
import Core_Courses from "./components/Core_courses/page";
import Advance_corses from "./components/Advance_courses/page";

export default function Home() {
  return (
    <>
      <Hero_Section />
      <About />
      <Core_Courses />
      <Advance_corses />
    </>
  );
}