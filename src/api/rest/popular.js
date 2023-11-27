import { DateTime } from 'luxon'
import { makeRequest } from '../requests'

export const getPopular = (lang = 'javascript') => {
  const params = new URLSearchParams()

  const date = DateTime.now().minus({ weeks: 1 }).toFormat('yyyy-MM-dd')

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  params.append('q', `language:${lang} created:>${date}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}
