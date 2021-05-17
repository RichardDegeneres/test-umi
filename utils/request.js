function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 *  Requests a URL, returning a promise
 * @param {string} url        request url
 * @param {boject} options    request params
 */
export default async function request(url, options) {
  const response = await fetch(url, options);

  checkStatus(response);

  return await response.json();
}
