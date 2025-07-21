export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-07-20",
  runtimeConfig: {
    public: {
      supabaseUrl: "",
      supabaseAnonKey: "",
    },
  },
  plugins: ["~/plugins/supabase.client", "~/plugins/supabase.server"],
});
