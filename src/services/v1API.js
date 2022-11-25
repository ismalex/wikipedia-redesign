import moment from 'moment'
import { apiFunctions } from '../api'
import { v1APIBaseURL } from '../api/constant-info'

/* const trendingBaseURL = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/`

const articleOfTheDayBaseURL = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/` */

let yesterdaysDate = moment().subtract(1, 'days').format('YYYY/MM/DD')

export async function trendingArticlesToday() {
  try {
    const response = await apiFunctions.get(
      v1APIBaseURL.trendingToday + yesterdaysDate,
    )
    let [items] = response.items
    return items.articles
  } catch (error) {
    return console.error('Service error', error)
  }
}

export async function featuredArticlesToday() {
  try {
    const response = await apiFunctions.get(
      v1APIBaseURL.featuredToday + yesterdaysDate,
    )
    /* console.log('art of the day ', response) */
    return response
  } catch (error) {
    return console.error('Service error', error)
  }
}
