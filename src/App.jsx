import React from "react";

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  NavBar,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/*Navbar*/}
      <div className="px-6 flex justify-center items-center sm:px-16 ">
        <div className="w-full max-w-[1280px]">
          <NavBar />
        </div>
      </div>
      {/*Hero Section*/}
      <div className="px-6 sm:px-16 bg-primary flex justify-center items-start">
        <div className="w-full max-w-[1280px] ">
          <Hero />
        </div>
      </div>
      {/*Main Content Section*/}
      <div className="bg-primary px-6 flex justify-center items-start overflow-hidden sm:px-16">
        <div className="w-full max-w-[1280px] ">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
