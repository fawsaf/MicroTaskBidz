// actions.js

import axios from "axios";
export const signUpUser = (user) => (dispatch) => {
  return axios
    .post("https://microtaskbidz.cyclic.app/user/", { user })
    .then((response) => {
      dispatch({ type: "success" });
    })
    .catch((error) => {
      dispatch({ type: "failure" });
    });
};

export const signIn = (email, password) => (dispatch) => {
  return axios
    .post("https://microtaskbidz.cyclic.app/user/signin", { email, password })
    .then((response) => {
      dispatch({ type: "success" });
    })
    .catch((error) => {
      dispatch({ type: "failure" });
    });
};

export const resetPassword = (email) => (dispatch) => {
  return axios
    .post("https://microtaskbidz.cyclic.app/user/password", { email })
    .then((response) => {
      dispatch({ type: "RESET_PASSWORD_SUCCESS" });
    })
    .catch((error) => {
      dispatch({ type: "RESET_PASSWORD_FAILURE" });
    });
};
