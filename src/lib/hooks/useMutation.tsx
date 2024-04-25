import { AxiosResponse } from "axios";
import { useState } from "react";

interface UseMutationOptions<T> {
  initialData?: any;
  mutateFn: (body: T) => Promise<AxiosResponse<any, any>>;
}

const useMutation = <T,>({ initialData, mutateFn }: UseMutationOptions<T>) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutate = async (body: T) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const responseData = await mutateFn(body);
      setData(responseData);
      return responseData;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, mutate };
};

export default useMutation;
