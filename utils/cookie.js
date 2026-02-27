const setCookie = (data) => {
  document.cookie = `token=${data}; max-age=${24 * 60 * 60}; path=/`;
  // path in order to use in every page and max age is by second
};

const getCookie = () => {
  const cookie = document.cookie;

  if (cookie) {
    const cookieArray = cookie.split("=");
    return {
      [cookieArray[0]]: cookieArray[1],
    };
  } else {
    return false;
  }
};

// remove the token cookie by setting it to expired
const deleteCookie = () => {
  document.cookie = "token=; max-age=0; path=/";
};

export { setCookie, getCookie, deleteCookie };
