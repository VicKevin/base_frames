export function objToStr (obj) {
  if (obj && typeof obj === 'object') {
    let urlQuery = ''
    for (const name in obj) {
      urlQuery += name + '=' + obj[name] + '&'
    }
    return urlQuery.slice(0, urlQuery.length - 1)
  } else {
    return ''
  }
}
