import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import RequestConfig from './request-config';
import Cookies from 'universal-cookie';
import { TOKEN_KEY } from '../../data/auth/constants';
import { LOCALE_HEADER, NEXT_LOCALE } from '../../data/app/constants';

export interface IPageMeta {
  page: number;
  limit: number;
  itemsCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
export interface IBaseApiResponse<T> {
  isArray: boolean;
  path: string;
  duration: string;
  method: string;
  data: T;
  meta?: IPageMeta;
  statusCode: number;
  timestamp: string;
  message: Array<string>;
  success: boolean;
}

export default class ApiProvider {
  private api: AxiosInstance;

  public constructor(config: RequestConfig) {
    this.api = axios.create(config);
    this.api.interceptors.request.use(async (req: AxiosRequestConfig) => {
      const cookies = new Cookies(
        req.headers?.cookies ? req.headers?.cookies?.toString() : undefined
      );

      return {
        ...req,
        headers: {
          ...req.headers,
          Authorization: `Bearer ${cookies.get(TOKEN_KEY)}`,
          [LOCALE_HEADER]: cookies.get(NEXT_LOCALE),
        },
      };
    });
    this.api.interceptors.response.use((res: AxiosResponse) => {
      return res;
    });
  }

  public async request<T>(config: RequestConfig): Promise<any> {
    const response = await this.api.request<IBaseApiResponse<T>>(config);
    return response?.data;
  }
}
