/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

//Call to API to get random user information
export default {
  getRandomEmployee: function () {
    return axios.get("https://randomuser.me/api/?results=50");
  },
};
