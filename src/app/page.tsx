import About from "./sections/About";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";

export default function Home() {
  return (
  <>
    <Hero/>
    <main id="main">
      <About/>
       <Menu/>
    </main>
   
  </>    
  );
}
