import Contact from "./contact";
import Gallery from "./gallery";
import About from "./about";
import InsideTheLuxury from "./inside-the-luxury";
import Hero from "./hero";

function App() {
  return (
    <>
      <Hero/>
      <div className="spacer"/>
      <InsideTheLuxury/>
      <div className="spacer"/>
      <About/>
      <Gallery/>
      <Contact/>
    </>
  );
}

export default App;
