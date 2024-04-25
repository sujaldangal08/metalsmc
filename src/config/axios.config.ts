import axios, { AxiosInstance } from "axios";

/**
 * Interface representing the configuration options for Axios instances.
 * @interface
 * @property {string} baseURL - The base URL for the Axios instances.
 * @property {Record<string, string>} [headers] - The headers to be set for the Axios instances.
 * @property {boolean} [withCredentials] - Whether or not to send cookies with cross-site requests.
 */
interface Config {
  baseURL: string;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

/**
 * Class representing a service for creating and managing Axios instances.
 * @class
 */
export class AxiosService {
  /**
   * The singleton instance of the AxiosService class.
   * @private
   * @static
   * @type {AxiosService}
   */
  private static instance: AxiosService;

  /**
   * The Axios instance for regular requests.
   * @private
   * @type {AxiosInstance}
   */
  private axiosInstance: AxiosInstance;

  /**
   * The Axios instance for file upload requests.
   * @private
   * @type {AxiosInstance}
   */
  private fileUploadInstance: AxiosInstance;

  /**
   * Creates an instance of the AxiosService class with the provided configuration.
   * @private
   * @constructor
   * @param {Config} config - The configuration options for the Axios instances.
   */
  private constructor(config: Config) {
    this.axiosInstance = axios.create(config);
    this.fileUploadInstance = axios.create({
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * Gets the singleton instance of the AxiosService class.
   * @static
   * @param {Config} config - The configuration options for the Axios instances.
   * @returns {AxiosService} The singleton instance of the AxiosService class.
   */
  public static getInstance(config: Config): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService(config);
    }
    return AxiosService.instance;
  }

  /**
   * Gets the Axios instance for regular requests.
   * @returns {AxiosInstance} The Axios instance for regular requests.
   */
  public get axios(): AxiosInstance {
    return this.axiosInstance;
  }

  /**
   * Gets the Axios instance for file upload requests.
   * @returns {AxiosInstance} The Axios instance for file upload requests.
   */
  public get fileUpload(): AxiosInstance {
    return this.fileUploadInstance;
  }
}

export const config: Config = {
  baseURL: "http://20.192.30.237/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
};

