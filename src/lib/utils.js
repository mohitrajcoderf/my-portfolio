import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cache } from 'react'

/**
 * Combines and merges multiple CSS class names or values using the classix and tailwind-merge libraries.
 * This function takes any number of arguments and passes them to the cx function from classix,
 * which generates a combined class name string. The result is then passed to twMerge from tailwind-merge,
 * which merges any overlapping or duplicate classes into a final single string.
 *
 * @param args - The CSS class names or values to be combined and merged.
 * @returns - A merged string containing the combined CSS class names or values.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Checks whether a given link is an external link by evaluating its href attribute.
 * If the href is empty or null, it is considered an internal link.
 * Otherwise, if the href does not start with '/' or '#', it is regarded as an external link.
 *
 * @param href - The href attribute value of the link to be checked.
 * @returns - A boolean value indicating whether the link is an external link.
 */

export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}

/**
 * Formats a given date string into a localized date representation based on the 'en-US' locale.
 * The resulting date format includes the full month name, two-digit day, and the numeric year.
 * e.g. 'July 12, 2004'
 *
 * @param date - The date string to be formatted.
 * @returns - A localized date string representation formatted as 'Month Day, Year'.
 */

export const getDateTimeFormat = (date) => {
  const dateObj = new Date(date)
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC'
  }).format(dateObj)
}

export const dasherize = (text) => String(text).replace(/ +/g, '-').toLowerCase();

export const isDevelopment = process.env.NODE_ENV === 'development'

export const sortByProperty = cache((arr, prop) => {
  return arr?.sort((a, b) => {
    const itemA = a[prop].toUpperCase()
    const itemB = b[prop].toUpperCase()

    if (itemA < itemB) {
      return -1
    } else if (itemA > itemB) {
      return 1
    }
    return 0
  })
})

export const getSortedPosts = cache((posts) => {
  return posts.sort((a, b) => {
    const dateA = a.date || a.sys.firstPublishedAt
    const dateB = b.date || b.sys.firstPublishedAt
    return new Date(dateB) - new Date(dateA)
  })
})

export const dateWithMonthAndYearFormatter = Intl.DateTimeFormat('en-US', {
  month: '2-4digit',
  year: 'numeric',
  timeZone: 'UTC'
})

export const dateWithDayAndMonthFormatter = Intl.DateTimeFormat('tr-TR', {
  day: '2-digit',
  month: '2-digit',
  timeZone: 'UTC'
})

export const viewCountFormatter = new Intl.NumberFormat('nl-NL')

export const getItemsByYear = (items) => {
  return items.reduce((acc, item) => {
    const year = new Date(item.date || item.sys.firstPublishedAt).getFullYear()
    const yearArr = acc.find((item) => item[0] === year)
    if (!yearArr) {
      acc.push([year, [item]])
    } else {
      yearArr[1].push(item)
    }

    return acc
  }, [])
}