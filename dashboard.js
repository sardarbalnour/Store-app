import authHandler from "./utils/authorizathion.js";
import { getData } from "./utils/httpReq.js";

const mainContent = document.getElementById("container");

const renderUsers = (users) => {
  mainContent.innerHTML = "";
};

const initHandler = async () => {
  authHandler();
  const users = await getData("users");
  renderUsers(users);
};

document.addEventListener("DOMContentLoaded", initHandler);
