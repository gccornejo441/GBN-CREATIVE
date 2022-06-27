/**
 * Regular JSON Headers - no authentication
 * @param language {String}
 * @returns {{'Content-type': {String}, Accept: {String}, 'Content-Language': {String}}}
 */
export const getJSONHeaders = (language = 'en') => ({
  'Content-type': 'application/json',
  'Accept': 'application/json',
  'Content-Language': language,
});


/**
 * JSON Header with authentication (if provided), otherwise just JSON Headers and the request will probably throw 401
 * @param token {String}
 * @param language {String}
 * @returns {{Authorization: {String}, 'Content-type': {String}, Accept: {String}, 'Content-Language': {String}}|{'Content-type': {String}, Accept: {String}, 'Content-Language': {String}}}
 */
export const getAuthenticatedJSONHeaders = (token: string | null | undefined = undefined, language = 'en') => {
  if (!token) {
    return {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Content-Language': language,
    };
  }
  return {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'Content-Language': language,
    'Authorization': `Bearer ${token}`,
  };
};

export const getLastListElement = <T>(list: Array<T>) => {
  return list[list.length - 1];
};

export const getIconAddress = (name: string) => {
  return '';
};
