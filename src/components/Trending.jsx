import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import TrendingItem from './TrendingItem'

export default function Trending() {
  const { trendingArticles } = useContext(GlobalContext)

  return trendingArticles.map(({ article, views }) => 
      <TrendingItem key={`trend-${article}`} title={article} views={views} />
  )
}
