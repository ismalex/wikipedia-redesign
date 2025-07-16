import { apiFunctions } from "../api";
import {
  QUERY_API_BASE_URL,
  RANDOM_ARTICLES_API_PARAMS,
  SEARCH_RESULTS_API_PARAMS,
} from "./constant-info";

//
export async function getSearchResults(searchQuery) {
  try {
    const params = new URLSearchParams({
      ...SEARCH_RESULTS_API_PARAMS,
      srsearch: searchQuery,
    });

    const response = await apiFunctions.get(QUERY_API_BASE_URL, params);

    return response.query;
  } catch (error) {
    console.error("Failed to fetch search results", error);
  }
}

//
export async function getRandomArticles() {
  try {
    const params = new URLSearchParams({
      ...RANDOM_ARTICLES_API_PARAMS,
    });

    const response = await apiFunctions.get(QUERY_API_BASE_URL, params);

    return response.query.pages;
  } catch (error) {
    console.error("Failed to fetch random articles:", error);
  }
}

//
export async function getRandomArticlesImages() {
  try {
    const params = new URLSearchParams({
      ...RANDOM_ARTICLES_API_PARAMS,
    });
    const response = await apiFunctions.get(QUERY_API_BASE_URL, params);

    const articlesWithImages = Object.values(response.query.pages).filter(
      (article) => article?.thumbnail && article?.extract
    );

    return articlesWithImages || [];
  } catch (error) {
    console.error("Failed to fetch random articles with images:", error);
  }
}
