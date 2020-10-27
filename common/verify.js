/**
 * validUrl
 *
 * checks data.url is a valid URL
 *
 * @param  {object} data
 */
const validUrl = (data) => {
  const pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/);
  return !!pattern.test(data.url);
}

/**
 * source
 *
 * check data.source matches our source string
 *
 * @param  {object} data
 */
const source = (data) => {
  return data.key === process.env.NEXT_PUBLIC_PEER_KEY
}

/**
 * verify default
 *
 * verify that the data provided is valid for our purposes
 *
 * @param  {object} data
 */
export default function verify(data) {
  return source(data) && validUrl(data)
}
