import type { NuxtConfig } from "@nuxt/schema";
import { useEnv } from "./env";

export function createRuntimeConfig(): NuxtConfig["runtimeConfig"] {
  const { viteEnv } = useEnv();
  return {
    public: {
      apiBase: viteEnv.VITE_APP_BASE_URL,
      appTitle: viteEnv.VITE_APP_TITLE,
      googleClientId: "289230457674-jhbmsvfpr6n0mfockofkrad2d0bogn6n.apps.googleusercontent.com",
    },
  };
}
