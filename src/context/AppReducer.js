export default function AppReducer(state, action) {

  switch (action.type) {
    case 'ADD_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

    case 'SET_SEARCH_LOADING':
      return { ...state, isLoadingSearch: action.payload };

    case 'ADD_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    
    case 'SET_TRENDING_LOADING':
      return { ...state, isLoadingTrending: action.payload }

    case 'ADD_TRENDING_ARTICLES':
      const topTrendingArticles = action.payload.slice(2, 7);

      topTrendingArticles.forEach(
        (item) => (item.article = item.article.replaceAll(/_/g, ' ')),
      );

      return { ...state, trendingArticles: topTrendingArticles };
    
    case 'SET_RANDOM_LOADING':
      return { ...state, isRandomLoading: action.payload };

    case 'ADD_RANDOM_ARTICLES':
      return { ...state, randomArticlesImages: action.payload};

    case 'SET_THIS_DAY_LOADING':
      return { ...state, isOnThisDayLoading: action.payload };

    case 'ADD_THIS_DAY_ARTICLES':
      return { ...state, onThisDayArticles: action.payload};
    default:
      return;
  }
}
