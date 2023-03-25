const appName = "Querious";
const backend = "http://localhost:5000";
const rooms = [{roomID: 1, name: "CS"}, {roomID: 2, name: "Electronics"}];

const getToken = () => {
    let token = JSON.parse(localStorage.getItem("userInfo")).token;
    let tokenString = "Bearer " + token;
    let config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": tokenString,
      }
    };
    return config;
  };

const isLoggedIn = () => {
  let x = localStorage.getItem("userInfo") !== null;
  return true; // change this to x later 
};

const getUsername = () => {
  let x = localStorage.getItem("userInfo")
  if (x) {
    return x.username;
  }
  else {
    return "DEFAULT";
  }
}

module.exports = { backend, appName, rooms, getToken, getUsername, isLoggedIn };