import { RequestMethod, api } from "@/config/api.config";
import { useState } from "react";

interface UseMutationOptions {
  url: string;
  method: RequestMethod;
  initialData?: any;
}

const useMutation = <T, R>({
  url,
  method,
  initialData,
}: UseMutationOptions) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutate = async (requestData: T) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await api.request<R, T>({
        endpoint: url,
        method,
        body: requestData,
      });

      setData(response.data);
      return response;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, mutate };
};

export default useMutation;
