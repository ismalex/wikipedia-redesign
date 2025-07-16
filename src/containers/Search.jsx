import React from "react";
import { useGlobalContext } from '../hooks'
import { useNavigate } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import SearchResultItem from '../components/SearchResultItem'
import NoResultsMessage from '../components/NoResultsMessage';


export default function Search() {
  const navigate = useNavigate();
  const { searchQuery, searchResults, isLoadingSearch } = useGlobalContext();

  const handleBackButtonClick = (event) => {
    event.preventDefault();
    
    navigate('/wikipedia-redesign');
  }

  if (isLoadingSearch) return <section className='p-2'>Loading...</section>
  if (searchQuery === null && searchResults === null) return <section className='p-2'>Type something to start a new search.</section>

  const searchHits = searchResults !== null && `Results 1 – ${searchResults.search.length} of ${searchResults.searchinfo.totalhits}`

  return (
    <section>
      <SectionTitle title="Search results" />
      {(!isLoadingSearch && searchResults.search.length === 0)
        ? <NoResultsMessage notFoundQuery={searchQuery}/>
        : <div className="mx-8 mb-4 text-sm">{searchHits}</div>}
     
      {searchResults.search?.map(({ title, snippet, pageid }) => (
        <SearchResultItem
          key={pageid}
          query={searchQuery}
          title={title}
          smallDescription={snippet}
          pageLinkId={pageid}
        />
      ))}
      <div className="my-4 text-center">
        <button className="button" onClick={handleBackButtonClick}>
          Back
        </button>
      </div>
    </section>
  )
}
