import { AxiosResponse } from "axios";
import { useState } from "react";

interface UseMutationOptions<T, S> {
  initialData?: any;
  mutateFn: (body: T) => Promise<AxiosResponse<S, any>>;
}

function useMutation<T = unknown, S = any>({
  initialData,
  mutateFn,
}: UseMutationOptions<T, S>) {
  const [data, setData] = useState<AxiosResponse<S, any>>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutate = async (body: T) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const responseData = await mutateFn(body);
      setData(responseData);
      return responseData;
    } catch (error: any) {
      setIsError(true);
      throw new Error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, mutate };
}

export default useMutation;
