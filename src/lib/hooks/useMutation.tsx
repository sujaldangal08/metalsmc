import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { RequestMethod } from "@/config/api.config";

interface UseMutationOptions {
  url: string;
  method: RequestMethod;
  initialData?: any;
}

const useMutation = <T,>({ url, method, initialData }: UseMutationOptions) => {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutate = async (requestData: any) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response: AxiosResponse<T> = await axios.request({
        url,
        method,
        data: requestData,
      });

      setData(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, mutate };
};

export default useMutation;
