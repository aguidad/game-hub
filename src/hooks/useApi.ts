import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useToast } from "@chakra-ui/react";

import ApiResponse from "entities/ApiResponse";
import apiClient from "api/api-client";

const ERROR_TOAST_ID = "error-toast";

export default <T>(
  endpoint: string,
  params?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();

  function showErrorMessage() {
    if (error) {
      toast({
        id: ERROR_TOAST_ID,
        title: error,
        status: "error",
        isClosable: true,
        duration: null,
        position: "bottom",
        containerStyle: { mb: 10 },
      });
    } else if (toast.isActive(ERROR_TOAST_ID)) toast.close(ERROR_TOAST_ID);
  }

  function get() {
    setIsLoading(true);
    setError("");

    const controller = new AbortController();

    apiClient
      .get<ApiResponse<T>>(endpoint, { signal: controller.signal, ...params })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
        setIsLoading(false);
      });

    return controller;
  }

  useEffect(() => {
    const unsubscribe = get();
    return () => unsubscribe.abort();
  }, deps || []);

  useEffect(showErrorMessage, [error, toast]);

  return { data, setData, error, isLoading };
};
