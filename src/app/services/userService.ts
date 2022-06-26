import axios from "axios";

export const getUserData = () => 
  axios.get<any>("https://localhost:44346/api/User");
