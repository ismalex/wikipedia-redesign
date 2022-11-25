import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import SectionTitle from '../components/SectionTitle'
import SearchResultItem from '../components/SearchResultItem'

export default function Search() {
  const navigate = useNavigate()
  const { searchQuery, searchResults } = useContext(GlobalContext)

  const handleSearch = (event) => {
    event.preventDefault()
    navigate('/wikipedia-redesign')
  }

  let searchHits = searchResults.searchinfo
    ? `Results 1 – 20 of ${searchResults.searchinfo.totalhits}`
    : ' '

  if (searchResults.search?.length === 0) return 'Loading...'

  return (
    <section className="mt-14">
      <SectionTitle title="Search results" />
      <div className="mx-8 mb-4">{searchHits}</div>
      {searchResults.search?.length !== 0 &&
        searchResults.search?.map(({ title, snippet, pageid }) => (
          <SearchResultItem
            key={pageid}
            query={searchQuery}
            title={title}
            smallDescription={snippet}
            pageLinkId={pageid}
          />
        ))}
      <div className="my-4 flex justify-center">
        <button className="button" onClick={handleSearch}>
          Back
        </button>
      </div>
    </section>
  )
}
