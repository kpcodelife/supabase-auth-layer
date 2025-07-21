export default defineNuxtLayer({
  name: "supabase-auth-layer",
  config: () => import("./nuxt.config"),
});
