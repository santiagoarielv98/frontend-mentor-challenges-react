import { Theme } from '../constants/app'
import type { Country } from '../types/api'

export const initialTheme = (): Theme => {
  const isDark = localStorage.theme === Theme.Dark
  const matches = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
  return isDark || matches ? Theme.Dark : Theme.Light
}

export const initialCountries = (): Country[] => {
  const data = localStorage.getItem('countries')
  const parsedData = JSON.parse(data ?? '[]')
  return Array.isArray(parsedData) ? parsedData : []
}
