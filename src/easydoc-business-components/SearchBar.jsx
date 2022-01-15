import React from "react";
import { RiSearchLine } from "react-icons/ri";

function SearchBar() {
  return (
    <div className="relative searchBar p-2 rounded-md">
      <div className=" flex">
        <div className="searchAndBtn transform translate-y-1 ">
          <RiSearchLine />
        </div>
        <input
          className=" w-full ml-2 outline-none font-bold"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
