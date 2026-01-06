const setCookie = (data) => {
  document.cookie = `token=${data}; max-age=${24 * 60 * 60}; path=/`;
  // path in order to use in every page and max age is by second
};

export { setCookie };
