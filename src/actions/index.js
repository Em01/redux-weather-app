const API_KEY = '925cdbd0936279d4dce97283c7f21fef'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}
