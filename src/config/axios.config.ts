import axios, { AxiosInstance } from "axios";

interface Config {
  baseURL: string;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

let instance: AxiosInstance;
let fileUploadInstance: AxiosInstance;

const config: Config = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
};

const fileInstanceConfig: Config = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: false,
};

// Use switch-case instead of if-else if you need to add more cases in the future
instance = axios.create(config);
fileUploadInstance = axios.create(fileInstanceConfig);

export default instance;
export { fileUploadInstance };
