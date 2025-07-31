"use client";
import React from "react";
import { useTypeAhead } from "@/customHooks/useTypeAhead.jsx";
import { resultToBase64 } from "@/utils/utils";
import { debounce } from "@/utils/utils";

export default function SearchForm() {
    const { searchResults, isLoading, handleSearch, handleSelect } = useTypeAhead();

  return (
    <div className="relative w-[250px] h-[50px]">
        <form className="w-full h-full">
            <input type="text" onChange={(e)=>debounce(500, handleSearch)(e)} placeholder="Search" className="w-full h-full rounded-sm border-none outline-none p-2 bg-gray-100 text-md" />
        </form>
        <div style={{display: searchResults.length > 0 ? "block" : "none"}} className="absolute top-12 left-0 w-full bg-white shadow-md rounded-md p-2">
            <ul className="w-full">
                {
                    searchResults?.map((result)=>(
                        <li className="cursor-pointer hover:bg-gray-100 p-2 border-b border-gray-200" key={resultToBase64(result)} onClick={()=>handleSelect(result)}>
                            <p>{result}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
}