/**
 * validUrl
 *
 * checks data.url is a valid URL
 *
 * @param  {object} data
 */
export default function validUrl(url) {
  const pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/)
  return !!pattern.test(url)
}
