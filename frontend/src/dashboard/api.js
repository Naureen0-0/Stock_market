import axios from "axios";

import { API_BASE_URL } from "../api/config";

const AUTH_TOKEN_KEY = "token";
const AUTH_USER_KEY = "user";

function getStoredDashboardToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY) || "";
}

function getStoredDashboardUserName() {
  const storedUser = localStorage.getItem(AUTH_USER_KEY);

  if (!storedUser) {
    return "";
  }

  try {
    return JSON.parse(storedUser)?.name || "";
  } catch (error) {
    return "";
  }
}

function storeDashboardAuth({ token, name }) {
  if (token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  if (name) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ name }));
  }
}

function clearDashboardAuth() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
}

function getFrontendLoginUrl() {
  return "/login?logout=1";
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = getStoredDashboardToken();

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearDashboardAuth();
      window.location.assign(getFrontendLoginUrl());
    }

    return Promise.reject(error);
  }
);

export default API_BASE_URL;
export {
  apiClient,
  clearDashboardAuth,
  getFrontendLoginUrl,
  getStoredDashboardToken,
  getStoredDashboardUserName,
  storeDashboardAuth,
};
