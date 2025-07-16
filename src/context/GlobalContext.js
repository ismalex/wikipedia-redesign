import { useEffect, createContext, useReducer, useCallback } from "react";
import { getRandomArticlesImages,getSearchResults } from "../services/QueryAPI";
import { getSelectedOnThisDay, getTrendingArticlesToday } from "../services/v1API";
import AppReducer from "./AppReducer";

const initialState = {
  searchQuery: null,

  isLoadingSearch: false,
  isLoadingTrending: false,
  isRandomLoading: false,
  isOnThisDayLoading: false,

  searchResults: null,
  trendingArticles: [],
  randomArticlesImages: [],
  onThisDayArticles: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getSearchResultsList = useCallback(async (searchQuery) => {
    if (!searchQuery || !searchQuery.trim()) {
      console.warn("Invalid search query provided");
      return;
    }

    const trimmedQuery = searchQuery.trim();

    try {
      dispatch({ type: "SET_SEARCH_LOADING", payload: true });
      dispatch({ type: "ADD_SEARCH_RESULTS", payload: null });

      const resultList = await getSearchResults(trimmedQuery);

      dispatch({ type: "ADD_SEARCH_RESULTS", payload: resultList });
      dispatch({ type: "ADD_SEARCH_QUERY", payload: trimmedQuery });
    } catch (error) {
      console.error("Failed to search articles:", error);
    } finally {
      dispatch({ type: "SET_SEARCH_LOADING", payload: false });
    }
  }, []);

  const getTrendingArticlesList = useCallback(async () => {
    try {
      dispatch({ type: "SET_TRENDING_LOADING", payload: true });

      const trendingList = await getTrendingArticlesToday();

      dispatch({ type: "ADD_TRENDING_ARTICLES", payload: trendingList });
    } catch (error) {
      console.error("Failed to fetch trending articles:", error);
    } finally {
      dispatch({ type: "SET_TRENDING_LOADING", payload: false });
    }
  }, []);

  const getRandomArticlesImagesList = useCallback(async () => {
    try {
      dispatch({ type: 'SET_RANDOM_LOADING', payload: true });
      
      const randomList = await getRandomArticlesImages();
      
      dispatch({ type: 'ADD_RANDOM_ARTICLES', payload: randomList });
    } catch (error) {
      console.error('Failed to fetch random articles:', error);
    } finally {
      dispatch({ type: 'SET_RANDOM_LOADING', payload: false });
    }
  }, []);

    const getOnThisDayList = useCallback(async () => {
    try {
      dispatch({ type: 'SET_THIS_DAY_LOADING', payload: true });
      
        const selectedOnThisDay = await getSelectedOnThisDay();
      
      dispatch({ type: 'ADD_THIS_DAY_ARTICLES', payload: selectedOnThisDay });
    } catch (error) {
      console.error('Failed to fetch On This Day articles:', error);
    } finally {
      dispatch({ type: 'SET_THIS_DAY_LOADING', payload: false });
    }
  }, []);

  useEffect(() => {
    getTrendingArticlesList();
    getRandomArticlesImagesList();
    getOnThisDayList();
  }, [getTrendingArticlesList, getRandomArticlesImagesList, getOnThisDayList]);

  return (
    <GlobalContext.Provider value={{ ...state, getSearchResultsList }}>
      {children}
    </GlobalContext.Provider>
  );
};
