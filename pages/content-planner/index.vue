<template>
  <div class="px-16">
    <div class="h-full flex flex-col max-w-7xl 2xl:max-w-[1600px] container bg-0 mx-auto grow py-16">
      <h1 class="flex items-center mb-16 text-3xl font-black">
        Posts for July
        <div @click="setActive"
          class="btn-group ml-10 bg-white rounded-xl p-1 border-[3px] border-solid border-slate-200">
          <button :class="activeTab.tab === 'list' && 'active'" class="px-8 py-2 text-lg font-bold bg-white">
            List
          </button>
          <button :class="activeTab.tab === 'calendar' && 'active'" class="px-8 font-bold">
            Calendar
          </button>
        </div>
      </h1>
      <section class="mb-16">
        <h3 class="mb-4 text-2xl font-bold">July 8 - 14</h3>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
          <ContentPlannerCard status="draft" />
          <ContentPlannerCard v-for="(item, index) in Posts.data.map((item) => item).slice(0, 5)"
            :key="item.id + '-' + index" :datetime="item.datetime" :status="item.status" :keyword="item.keyword"
            :image="item.image" />
        </div>
      </section>
      <section>
        <h3 class="mb-4 text-2xl font-bold">July 1 - 7</h3>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
          <ContentPlannerCard v-for="(item, index) in Posts.data.slice(5, 11)" :key="item.id + '-' + index"
            :datetime="item.datetime" :status="item.status" :image="item.image" />
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";
const activeTab = reactive({
  tab: "list",
});

function setActive() {
  activeTab.tab = activeTab.tab === "list" ? "calendar" : "list";
}

const Posts = reactive({
  data: [] as any[],
});


await useFetch("/api/unsplash", {
  method: "GET",
  cache: "no-cache",
}).then((res) => {
  Posts.data = JSON.parse(JSON.stringify(res.data.value!.data)) as unknown as any[];
});

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
