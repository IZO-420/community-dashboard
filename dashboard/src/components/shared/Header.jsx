import React from "react";
import SearchForm from "./SearchForm";
export default function Header() {
  return (
    <div className="bg-white p-4 shadow-md fixed top-0 left-0 w-full flex justify-center items-center">
      <SearchForm />
    </div>
  );
}