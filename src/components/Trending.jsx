import React from 'react'
import { useGlobalContext } from '../hooks';
import TrendingItem from './TrendingItem'

export default function Trending() {
  const { isLoadingTrending, trendingArticles } = useGlobalContext();

  if (isLoadingTrending) return <div>Loading...</div>

  return trendingArticles.map(({ article, views }) => 
    <TrendingItem key={`trend-${article}`} title={article} views={views} />
  )
}
