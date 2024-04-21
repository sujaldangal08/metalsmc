import axios, { AxiosInstance } from "axios";

interface Config {
  baseURL: string;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

let instance: AxiosInstance;
let fileUploadInstance: AxiosInstance;

const config: Config = {
  baseURL: `${process.env.VITE_REACT_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const fileInstanceConfig: Config = {
  baseURL: `${process.env.VITE_REACT_API_URL}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
};

// Use switch-case instead of if-else if you need to add more cases in the future
switch (process.env.VITE_REACT_VERSION) {
  case "dev":
    instance = axios.create(config);
    fileUploadInstance = axios.create(fileInstanceConfig);
    break;
  case "test":
    instance = axios.create(config);
    fileUploadInstance = axios.create(fileInstanceConfig);
    break;
  default:
    throw new Error("Invalid environment.");
}

export default instance;
export { fileUploadInstance };
