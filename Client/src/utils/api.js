import axios from "axios";

export default {
  saveMessage: function(messData) {
    console.log(messData);
    return axios
      .post("/api/messages", messData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        throw err;
      });
  }
};
