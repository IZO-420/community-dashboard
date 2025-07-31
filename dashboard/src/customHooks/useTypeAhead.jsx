"use client";
import { searchKeywords } from "@/constants/constants";
import { useState } from "react";

export const useTypeAhead = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = (e) => {

        if(e.target.value.length < 2){
            setSearchResults([]);
            return;
        }
        setIsLoading(true);
        const filteredResults = searchKeywords.filter((word)=>{
            return word.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setSearchResults(filteredResults);
        setIsLoading(false);
    }

    const handleSelect = (result) => {
        alert(result);
    }

    return {
        isLoading,
        error,
        handleSearch,
        searchResults,
        handleSelect
    }
}