import { getSession } from "@/lib/auth";
import { AxiosService, config } from "./axios.config";

/**
 * Defines the type for HTTP request methods.
 */
export type RequestMethod = "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Represents options for making an HTTP request.
 * @template S The type of the request body.
 */
interface RequestOptions<S> {
  /** The endpoint URL for the request. */
  endpoint: string;
  /** The HTTP method for the request. */
  method: RequestMethod;
  /** The body of the request. */
  body: S;
  /** Query parameters for the request. */
  withHeaders?: boolean;
  /** Additional options for the request. */
  options?: {
    /** Custom headers for the request. */
    headers?: object;
    /** Indicates whether the request involves file upload. */
    isFileUpload?: boolean;
  };
}

/**
 * A service class for handling API requests.
 * @class
 */
class ApiService {
  /**
   * The AxiosService instance used for making API requests.
   * @private
   * @type {AxiosService}
   */
  private axiosService;

  /**
   * Creates an instance of the ApiService class.
   * @constructor
   */
  constructor() {
    this.axiosService = AxiosService.getInstance(config);
  }

  /**
   * Sends a GET request to the specified endpoint.
   * @async
   * @template T - The expected response type.
   * @param {string} endpoint - The API endpoint URL.
   * @param {Record<string, any>} [params] - Request parameters to be included in the query string.
   * @returns {Promise<T>} A promise that resolves with the response data.
   */
  async get<T>(endpoint: string, params?: Record<string, any>) {
    const headers = await this.getHeadersWithAccessToken();
    return this.axiosService.axios.get<T>(endpoint, { params, headers });
  }

  /**
   * Makes an asynchronous HTTP request.
   * @template T The expected response type.
   * @template S The type of the request body.
   * @param {RequestOptions<S>} params The options for the request.
   */
  async request<T, S>({
    options,
    method,
    endpoint,
    body,
    withHeaders
  }: RequestOptions<S>) {
    // Get headers with access token
    const headers = await this.getHeadersWithAccessToken();
    const customHeaders = withHeaders ? { ...headers, ...options?.headers } : { ...options?.headers };

    // Determine whether the request involves file upload
    if (options?.isFileUpload) {
      // Send file upload request
      return await this.axiosService.fileUpload.request<T>({
        url: endpoint,
        method,
        data: body,
        headers: customHeaders,
      });
    } else {
      // Send regular request
      return await this.axiosService.axios.request<T>({
        url: endpoint,
        method,
        data: body,
        headers: customHeaders,
      });
    }
  }


  /**
   * Retrieves the headers with the access token.
   * @private
   * @async
   * @returns {Promise<Record<string, string>>} A promise that resolves with the headers.
   */
  private async getHeadersWithAccessToken() {
    const token = await getSession();
    const customHeaders: Record<string, string> = {
      Authorization: `Bearer ${token}`,
    };
    return customHeaders;
  }
}

/**
 * The instance of the ApiService class.
 * @type {ApiService}
 */
export const api = new ApiService();
