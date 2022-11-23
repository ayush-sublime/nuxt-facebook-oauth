<template>
  <div class="px-16">
    <div
      class="h-full flex flex-col max-w-7xl 2xl:max-w-[1600px] container bg-0 mx-auto grow py-16"
    >
      <h1 class="flex items-center mb-16 text-3xl font-black">
        Posts for July
        <div
          @click="setActive"
          class="btn-group ml-10 bg-white rounded-xl p-1 border-[3px] border-solid border-slate-200"
        >
          <button
            :class="activeTab.tab === 'list' && 'active'"
            class="px-8 py-2 text-lg font-bold bg-white"
          >
            List
          </button>
          <button
            :class="activeTab.tab === 'calendar' && 'active'"
            class="px-8 font-bold"
          >
            Calendar
          </button>
        </div>
      </h1>
      <section class="mb-16">
        <h3 class="mb-4 text-2xl font-bold">July 8 - 14</h3>
        <div
          class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 gap-4"
        >
          <ContentPlannerCard status="draft" />
          <ContentPlannerCard
            v-for="(item, index) in Posts.map((item) => item).slice(0, 5)"
            :key="index"
            :datetime="item.datetime"
            :status="item.status"
            :keyword="item.keyword"
          />
        </div>
      </section>
      <section>
        <h3 class="mb-4 text-2xl font-bold">July 1 - 7</h3>
        <div
          class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 gap-4"
        >
          <ContentPlannerCard
            v-for="(item, index) in Posts.slice(5, 11)"
            :key="index"
            :datetime="item.datetime"
            :status="item.status"
            :keyword="item.keyword"
          />
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import posts from "@/static/posts.json";
import { ComputedRef, computed } from "vue";

const getImageByKeyword = async (keyword: string) => {
  return await useFetch(`/api/unsplash`, {
    method: "POST",
    body: { keyword },
  });
};

const Posts = computed(() =>
  posts.posts.map((item: any) => {
    return {
      ...item,
      image: (getImageByKeyword(item.keyword) as any).value,
    };
  })
) as ComputedRef<any[]>;

const activeTab = reactive({
  tab: "list",
});

function setActive() {
  activeTab.tab = activeTab.tab === "list" ? "calendar" : "list";
}

const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo("/");
    }
  });
});

definePageMeta({
  middleware: ["auth"],
});
</script>
<style scoped>
.active {
  @apply bg-gradient-to-r from-[#ED3F56] to-[#FC6C4D] text-white rounded-md;
}
</style>
