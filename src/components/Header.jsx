import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { BsGlobe } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState(null)
  const { getSearchResults } = useContext(GlobalContext)

  const handleSearch = (event) => {
    event.preventDefault()
    if (searchQuery === null) return

    getSearchResults(searchQuery)
    navigate('/wikipedia-redesign/search')
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <header className="flex flex-col gap-4 md:flex-row w-full ">
      <Link to={`/wikipedia-redesign`} className="flex w-[350px]">
        <BsGlobe className="text-6xl" />
        <h1 className="ml-2">WIKIPEDIA</h1>
      </Link>
      <form onSubmit={handleSearch} className="flex items-center w-[100%]">
        <input
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Type something"
          className="h-[50px] basis-11/12 
              border-b-2 border-black 
              hover:border-b-4
              focus:border-b-4 outline-0"
          onChange={handleInputChange}
        />
        <input type="submit" value="Search" className="button" />
      </form>
    </header>
  )
}
