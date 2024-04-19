// useUpdateSettings.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isEditing } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["setting"] });
    },
    onError: (err) => {
      console.error("Error updating settings:", err); // Log the error for debugging
      toast.error(
        `Failed to update settings: ${err.message || "Unknown error"}`
      );
    },
  });

  return { updateSetting, isEditing };
}
