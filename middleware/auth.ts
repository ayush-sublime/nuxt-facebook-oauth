export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (!user.value && to.path === "/content-planner") {
    navigateTo("/");
  } else if (user.value && to.path === "/") {
    navigateTo("/content-planner");
  }
});
