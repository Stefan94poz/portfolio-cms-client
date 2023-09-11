import axios from "axios";
import { CONTENT_TYPES } from "../constants";
import { User } from "globals";

interface Cred {
  username: string;
  password: string;
}
const axiosInstance = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    "Content-Type": CONTENT_TYPES.applicationJSON,
  },
});

const setBerrerToken = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const setContentType = (type: string) => {
  axiosInstance.defaults.headers.common["Content-Type"] = type;
};

// TODO: Set proper types
export async function me(token: string) {
  try {
    setContentType(CONTENT_TYPES.applicationJSON);
    setBerrerToken(token);

    const res = await axiosInstance.post("/me");

    return res.data.data.customer;
  } catch (e: any) {
    console.error(e);
  }
}
// TODO: Add proper types to promise
export async function login(credentials: Cred): Promise<any> {
  try {
    setContentType(CONTENT_TYPES.multipartFormData);

    const res = await axiosInstance.post("/login", credentials);
    const token = res.data.data.token;

    const user = await me(token);

    return { user, token };
  } catch (e: any) {
    console.error(e);
  }
}
