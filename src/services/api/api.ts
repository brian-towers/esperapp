import axios, { AxiosInstance } from "axios";
import { ApiConfig } from ".";

/**
 * Configuring the Axios instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: process.env.API_URL || "https://www.google.com",
  timeout: 10000,
};

export class Api {
  apiService: AxiosInstance;
  config: ApiConfig;

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apiService = axios.create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
        Bearer: authToken,
      },
    });
  }

  async apiRequest(method: string, endpoint: string, data = null) {
    const response = await this.apiService({
      method,
      url: endpoint,
      data,
    });

    // Return the response data if the request is successful
    return response.data;
  }
}

// Singleton instance of the API for convenience
export const api = new Api();
