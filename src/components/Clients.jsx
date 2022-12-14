import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section
      id="client"
      className="flex justify-between items-center mb-10  -mt-3 md:-mt-6"
    >
      <div className="flex justify-center items-center flex-wrap w-full">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center flex-1 sm:min-w-[192px] min-w-[120px] my-2"
          >
            <img
              src={client.logo}
              alt={client.id}
              className="sm:w-[190px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients;
