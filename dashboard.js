import authHandler from "./utils/authorizathion.js";

const initHandler = () => {
  authHandler();
};

document.addEventListener("DOMContentLoaded", initHandler);
