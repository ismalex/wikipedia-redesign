export default function AppReducer(state, action) {

  switch (action.type) {
    case 'ADD_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }

    case 'ADD_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload }

    case 'ADD_RANDOM_ARTICLES':
      let articleArray = Object.keys(action.payload).map(
        (key) => action.payload[key],
      )
      return { ...state, randomArticles: articleArray }

    case 'ADD_TRENDING_ARTICLES':
      let topTrendingArray = action.payload.slice(2, 7)
      topTrendingArray.forEach(
        (item) => (item.article = item.article.replaceAll(/_/g, ' ')),
      )
      return { ...state, trendingArticles: topTrendingArray }
      
    default:
      return;
  }
}
