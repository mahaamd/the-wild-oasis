import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  });
  console.log(settings);
  return { isLoading, settings, error };
}
