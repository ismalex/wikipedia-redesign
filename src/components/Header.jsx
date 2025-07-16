import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../hooks';
import Logo from './Logo';


export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(null);
  const { getSearchResultsList } = useGlobalContext();
   
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery === null) return;

    if(searchQuery.length > 80 || searchQuery.length < 2 ) return; 

    getSearchResultsList(searchQuery);
    navigate('/wikipedia-redesign/search');
  }

  return (
    <header className="flex flex-col md:flex-row">
      <div className="md:hidden sm:block">
        <Logo />
      </div>
      <form onSubmit={handleSearch} className="flex items-center w-full">
        <input
          id="search-box"
          type="text"
          autoFocus
          autoComplete="off"
          maxLength={80}
          placeholder="Search Wikipedia"
          className="text-input basis-11/12"
          onChange={handleInputChange}
          />
        <input 
          type="submit" 
          value="Search" 
          disabled={searchQuery === null || searchQuery === ""}
          className="button" />
      </form>
    </header>
  )
}
