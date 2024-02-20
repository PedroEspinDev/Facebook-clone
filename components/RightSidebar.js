import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

export const RightSidebar = () => {
  return (
    <div
      className="hidden md:inline-flex flex-col pt-4 max-w-xl 
    md:min-w-[200px] lg:min-w-[250px]"
    >
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contats</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        src="https://images.pexels.com/photos/19039431/pexels-photo-19039431/free-photo-of-amanecer-paisaje-naturaleza-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Pedro Espín"
        status="Online"
      />
      <Contacts
        src="https://images.pexels.com/photos/17555047/pexels-photo-17555047/free-photo-of-coche-vehiculo-deporte-prisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Fernando Alonso"
        status="Online"
      />
      <Contacts
        src="https://images.pexels.com/photos/7955450/pexels-photo-7955450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="MC Money"
        status="Offline"
      />
      <Contacts
        src="https://images.pexels.com/photos/5727367/pexels-photo-5727367.jpeg?auto=compress&cs=tinysrgb&w=600://images.pexels.com/photos/19039431/pexels-photo-19039431/free-photo-of-amanecer-paisaje-naturaleza-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Travis Scott"
        status="Offline"
      />
      <Contacts
        src="https://images.pexels.com/photos/1194419/pexels-photo-1194419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Arthur Marley"
        status="Online"
      />
    </div>
  );
};
