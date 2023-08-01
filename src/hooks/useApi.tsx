import { useEffect, useState } from "react";
import { ApiService } from "../path/to/your/api/service";

type ApiHookResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type ApiMethod = "get" | "post" | "put" | "delete"; // Add other methods as needed

function useApi<T>(
  apiService: ApiService,
  method: ApiMethod,
  endpoint: string,
  payload?: any
): ApiHookResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await apiService[method](endpoint, payload);
        if (isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiService, method, endpoint, payload]);

  return { data, loading, error };
}

export default useApi;
