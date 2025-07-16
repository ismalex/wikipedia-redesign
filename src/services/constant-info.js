export const QUERY_API_BASE_URL = 'https://en.wikipedia.org/w/api.php?'

export const V1_API_BASE_URL = {
  trendingToday: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/',
  featuredToday: 'https://api.wikimedia.org/feed/v1/wikipedia/en/featured/',
  selectedOnThisDay: 'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/',
}

export const SEARCH_RESULTS_API_PARAMS = {
  origin: "*",
  format: "json",
  action: "query",
  inprop: "url",
  prop: "info",
  list: "search",
  srlimit: 12,
};

export const RANDOM_ARTICLES_API_PARAMS = {
  origin: "*",
  format: "json",
  action: "query",
  generator: "random",
  grnnamespace: 0,
  prop: "images|extracts|pageimages",
  piprop: "thumbnail",
  pilimit: "max",
  exintro: true,
  explaintext: 2,
  exsentences: 2,
  exlimit: "max",
  grnlimit: 60,
  pithumbsize: 300
};

