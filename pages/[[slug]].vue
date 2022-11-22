<template>
  <div class="h-full grid place-items-center grow">
    <div class="h-full grid place-items-center grow">
      <div class="text-3xl font-bold">
        <i class="text-3xl fas text-purple-400 mr-2 fa-x-mark" /> Page Doesn't Exist
        <i class="kbd">
          {{ route.params.slug }}
        </i>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
