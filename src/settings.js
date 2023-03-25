const appName = "Querious";
const backend = "http://localhost:5000";
const rooms = [
  {roomID: 1, name: "Microprocessors"}, 
  {roomID: 2, name: "Microelectronics"},
  {roomID: 3, name: "Signals and Systems"},
  {roomID: 4, name: "Control Systems"}
];

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
  return x; //true; // change this to x later 
};

const getUsername = () => {
  let x = localStorage.getItem("userInfo");
  x = JSON.parse(x);
  if (x) {
    return x.username;
  }
  else {
    return "DEFAULT";
  }
}

module.exports = { backend, appName, rooms, getToken, getUsername, isLoggedIn };