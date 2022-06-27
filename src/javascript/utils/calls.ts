import {getAuthenticatedJSONHeaders, getJSONHeaders} from "./utils";
// Strapi v4
export const API_URL = 'http://localhost:1337';


export const calls = {
  logInStrapi: (data: any): any => ({
    url: `${API_URL}/api/auth/local`,
    method: 'POST',
    headers: getJSONHeaders(),
    data: data,
  }),
  signUpStrapi: (data: any): any => ({
    url: `${API_URL}/api/auth/local/register`,
    method: 'POST',
    headers: getJSONHeaders(),
    data: data,
  }),
  getAllPosts: (locale: string, token?: string,): any => ({
    url: `${API_URL}/api/posts?locale=${locale}`,
    method: 'GET',
    headers: getAuthenticatedJSONHeaders(token, locale,),
  }),
  getAllCategories: (locale: string, token?: string, populate?: any): any => ({
    url: `${API_URL}/api/categories?locale=${locale}&populate=${populate}`,
    method: 'GET',
    headers: getAuthenticatedJSONHeaders(token, locale,),
  }),
  createPost: (data: any, locale: string, token?: string): any => ({
    url: `${API_URL}/api/posts?locale=${locale}`,
    method: 'POST',
    headers: getAuthenticatedJSONHeaders(token, locale),
    data: data,
  }),
  updatePost: (id: number, data: any, locale: string, token?: string): any => ({
    url: `${API_URL}/api/posts/${id}?locale=${locale}`,
    method: 'PUT',
    headers: getAuthenticatedJSONHeaders(token, locale),
    data: data,
  }),
  deletePost: (id: number, locale: string, token?: string): any => ({
    url: `${API_URL}/api/posts/${id}?locale=${locale}`,
    method: 'DELETE',
    headers: getAuthenticatedJSONHeaders(token, locale),
  }),
  getPostById: (id: string, locale: string, token?: string,): any => ({
    url: `${API_URL}/api/posts/${id}?locale=${locale}`,
    method: 'GET',
    headers: getAuthenticatedJSONHeaders(token, locale,),
  }),
  createCategory: (data: any, locale: string, token?: string): any => ({
    url: `${API_URL}/api/categories?locale=${locale}`,
    method: 'POST',
    headers: getAuthenticatedJSONHeaders(token, locale),
    data: data,
  }),
  getCategoryById: (id: string, locale: string, token?: string,): any => ({
    url: `${API_URL}/api/categories/${id}?locale=${locale}`,
    method: 'GET',
    headers: getAuthenticatedJSONHeaders(token, locale,),
  }),
  updateCategory: (id: number, data: any, locale: string, token?: string): any => ({
    url: `${API_URL}/api/categories/${id}?locale=${locale}`,
    method: 'PUT',
    headers: getAuthenticatedJSONHeaders(token, locale),
    data: data,
  }),
  validateTokenStrapi: (token: string): any => ({
    url: `${API_URL}/users/me`,
    method: 'GET',
    headers: getAuthenticatedJSONHeaders(token),
  }),
  verifyEmailStrapi: (confirmationToken: string): any => ({
    url: `${API_URL}/api/auth/email-confirmation?confirmation=${confirmationToken}`,
    method: 'GET',
    headers: getJSONHeaders(),
  }),
  requestResetPassword: (data: any): any => ({
    url: `${API_URL}/api/auth/forgot-password`,
    method: 'POST',
    headers: getJSONHeaders(),
    data: data
  }),
  resetPassword: (data: any): any => ({
    url: `${API_URL}/api/auth/reset-password`,
    method: 'POST',
    headers: getJSONHeaders(),
    data: data
  }),
  logInCustom: (data: any): any => ({
    url: `${API_URL}/login`,
    method: 'POST',
    headers: getJSONHeaders(),
    data: data,
  }),
  signUpCustom: (data: any): any => ({
    url: `${API_URL}/signup`,
    method: 'POST',
    headers: getJSONHeaders(),
    data: data,
  }),
};
