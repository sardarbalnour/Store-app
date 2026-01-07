import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorizathion.js";
import validateForm from "./utils/validation.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  // we got event in order to use preventDefault
  event.preventDefault();
  // we used this preventDefault in order not to reload the page after submit

  const username = inputBox[0].value;
  const password = inputBox[1].value;

  const validation = validateForm(username, password);
  if (!validation) return;

  const data = { username, password };
  const response = await postData("auth/login", data);
  setCookie(response.token);

  location.assign("./");
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
