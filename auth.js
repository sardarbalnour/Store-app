import { postData } from "./utils/httpReq.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  // we got event in order to use preventDefault
  event.preventDefault();
  // we used this preventDefault in order not to reload the page after submit

  const username = inputBox[0].value;
  const password = inputBox[1].value;
  const data = { username, password };
  const response = await postData("auth/login", data);
};

loginButton.addEventListener("click", submitHandler);
