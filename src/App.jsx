import React from "react";

import {
  NavBar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/*Navbar*/}
      <div className="px-6 flex justify-center items-center sm:px-16 ">
        <div className="w-full xl:max-w-[1280px]">
          <NavBar />
        </div>
      </div>
      {/*Hero Section*/}
      <div className="bg-primary flex justify-center items-start">
        <div className="w-full lg:max-w-[1280px] ">
          <Hero />
        </div>
      </div>
      {/*Main Content Section*/}
      <div className="bg-primary px-6 flex justify-center items-start sm:px-16">
        <div className="w-full lg:max-w-[1280px] ">
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
