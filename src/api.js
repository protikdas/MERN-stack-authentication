import axios from "axios";

const PORT = "http://localhost:8000/";

export default {
  user: {
    signUp: formBody => {
      axios.post(PORT + "api/auth/sign-up", formBody);
    },
    login: formBody => {
      axios.post(PORT + "api/auth/login", formBody);
    }
  }
};
