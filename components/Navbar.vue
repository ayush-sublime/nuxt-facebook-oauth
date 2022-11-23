<template>
  <nav class="px-16 bg-white">
    <div class="container flex items-center max-w-[1600px] mx-auto">
      <span class="mr-16">
        <NuxtLink to="/">
          <img width="128" height="32" src="~/assets/Logo.svg" alt="someli" />
        </NuxtLink>
      </span>
      <ul class="flex items-stretch">
        <NuxtLink to="/dashboard">
          <li class="text-sm nav-item 3xl:text-xl">
            <i class="fas fa-chart-pie" />
            Dashboard
          </li>
        </NuxtLink>
        <NuxtLink to="/content-planner">
          <li class="text-sm nav-item 3xl:text-xl">
            <i class="fas fa-calendar-check" />
            Content Planner
          </li>
        </NuxtLink>
        <NuxtLink to="/my-designs">
          <li class="text-sm nav-item 3xl:text-xl">
            <i class="fas fa-brush" />
            My Designs
          </li>
        </NuxtLink>
        <NuxtLink to="/industry-news">
          <li class="text-sm nav-item 3xl:text-xl">
            <i class="fas fa-bolt" />
            Industry News
          </li>
        </NuxtLink>
      </ul>

      <div class="flex gap-8 ml-auto">
        <button class="relative">
          <i class="z-10 fa-solid fa-bell" />
          <span
            class="absolute top-[8px] right-[-12px] bg-red-500 text-white text-xs w-5 h-5 font-bold rounded-full flex items-center justify-center"
          >
            2
          </span>
        </button>

        <button
          type="button"
          @click="() => (isUserLoggedIn ? signInWithFacebook() : signOut())"
          class="flex items-center gap-3 p-2 rounded-md c-border"
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <i v-if="!user" class="fas fa-user" />
            <img v-else :src="avatarUrl" alt="facebook-avatar-url" class="rounded-full" />
          </span>
          {{ isUserLoggedIn ? userName : "Login" }}
          <i class="fas fa-chevron-down" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const client = useSupabaseClient();

const isUserLoggedIn = reactive({
  value: false as any,
});

async function signInWithFacebook() {
  console.log("signing in with facebook");
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "facebook",
  });
}
async function signOut() {
  console.log("signing out");
  const { error } = await client.auth.signOut();
}

const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    isUserLoggedIn.value = true;
  } else {
    isUserLoggedIn.value = false;
  }
});

const avatarUrl = computed(() => user.value?.user_metadata.avatar_url);
const userName = computed(() => user.value?.user_metadata.name);
</script>

<style scoped>
.c-border {
  border: 1px solid rgb(220, 220, 220);
}

.fas {
  @apply text-gray-700;
}

.nav-item {
  @apply flex items-center gap-4 mr-8 text-gray-700 py-8;
  border-bottom: 4px solid transparent;
  white-space: nowrap;
}

.nav-item:hover {
  border-color: red;
}
</style>
