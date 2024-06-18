import React from "react";
import Banner from "./components/banner/Banner";
// import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {

  return (
    <div className="w-full h-auto text-lightText" style={{ backgroundColor: 'rgb(10,10,10)' }}>
        <>
          <Navbar />
          <div className="max-w-screen-xl mx-auto px-5">
            <Banner />
            <Features />
            <Projects />
            <Resume />
            {/* <Contact /> */}
          </div>
        </>
    </div>
  );
}

export default App;
