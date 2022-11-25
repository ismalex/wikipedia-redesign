import { apiFunctions } from '../api'
import { queryAPIBaseURL } from '../api/constant-info'

const searchParams = {
  format: 'json',
  action: 'query',
  origin: '*',
  inprop: 'url',
  prop: 'info',
  list: 'search',
  srlimit: '20',
}

const randomArticlesParams = {
  format: 'json',
  action: 'query',
  origin: '*',
  generator: 'random',
  grnnamespace: 0,
  prop: 'pageimages|extracts',
  piprop: 'original',
  pilimit: 'max',
  exintro: 2,
  explaintext: 2,
  exsentences: 2,
  exlimit: 'max',
  grnlimit: 13,
}

export async function searchResults(searchQuery) {
  try {
    const generateSearchParams = { ...searchParams, srsearch: searchQuery }

    const response = await apiFunctions.get(
      queryAPIBaseURL,
      generateSearchParams,
    )

    return response.query
  } catch (error) {
    return console.error('Service error', error)
  }
}

export async function randomArticles() {
  try {
    const response = await apiFunctions.get(
      queryAPIBaseURL,
      randomArticlesParams,
    )

    return response.query.pages
  } catch (error) {
    return console.error('Service error', error)
  }
}
