export const getApiHeaders = (headers: Headers) => {
  const token = window.sessionStorage.getItem("access_token");
  token && headers.set("Authorization", `Bearer ${token}`);
  return headers;
};
