import { useEffect, createContext, useReducer } from 'react'
import { searchResults, randomArticles } from '../services/QueryAPI'
import { trendingArticlesToday } from '../services/v1API'
import AppReducer from './AppReducer'

const initialState = {
  searchQuery: null,
  searchResults: {},
  trendingArticles: [],
  randomArticles: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    // CHEcK TO NOT TO FETCH AGAIN
    // USE MEMO
    const getTrendingArticles = async () => {
      const trendingList = await trendingArticlesToday()
      dispatch({ type: 'ADD_TRENDING_ARTICLES', payload: trendingList })
    }

    const getRandomResults = async () => {
      // ADD PICTURE ONLY ARTICLES VALIDATION?
      const randomList = await randomArticles()
      dispatch({ type: 'ADD_RANDOM_ARTICLES', payload: randomList })
    }

    getTrendingArticles()
    getRandomResults()
    
  }, [])

  const getSearchResults = async (searchQuery) => {
    const resultList = await searchResults(searchQuery)
    dispatch({ type: 'ADD_SEARCH_RESULTS', payload: resultList })
    dispatch({ type: 'ADD_SEARCH_QUERY', payload: searchQuery })
  }

  return (
    <GlobalContext.Provider value={{ ...state, getSearchResults }}>
      {children}
    </GlobalContext.Provider>
  )
}
