import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Join from "./components/Join";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import AnimationInit from "./components/AnimationInit";
import FloatingCTA from "./components/FloatingCTA";
// import A11yBar from "./components/A11yBar";

export default function Home() {
  return (
    <>
      <SkipLink />
      {/* <A11yBar /> */}
      <Nav />
      <main id="main-content">
        <Hero />
        <Mission />
        <Services />
        <Testimonials />
        <Join />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <AnimationInit />
    </>
  );
}
