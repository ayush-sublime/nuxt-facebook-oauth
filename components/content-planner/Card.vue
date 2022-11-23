<template>
  <div class="w-full font-medium rounded-xl" :class="`${cardStyles.primary} ${cardStyles.secondary} ${props.status === 'draft' ? 'border-dashed border-[3px]' : ''
  }`">
    <h5 class="px-6 py-3 text-lg text-inherit">{{ datetime }}</h5>
    <div class="relative" v-if="props.status !== 'draft'">
      <img
        class="flex items-center justify-center object-cover w-full text-4xl font-bold text-opacity-25 origin-center h-52"
        :class="cardStyles.primary" :src="props.image" alt="card-image" />
      <input v-if="props.status === 'needsApproval'" type="checkbox" class="absolute w-6 h-6 bg-white top-3 left-3" />
    </div>
    <div v-else class="grid h-52 place-items-center">
      <button class="fancybutton">Select Post</button>
    </div>

    <span v-if="props.status !== 'draft'" class="flex items-center gap-3 px-4 py-3 font-semibold text-inherit">
      <i class="text-inherit" :class="cardStyles.icon" />
      {{ cardMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type CardTypes = "scheduled" | "needsApproval" | "failedToPost" | "published" | "draft";
interface ICardProps {
  datetime?: string;
  status?: CardTypes;
  image?: string;
  keyword?: string;
}
interface ICardStyles {
  primary?: string;
  secondary?: string;
  icon?: string;
}

const MESSAGES: Record<CardTypes, string> = {
  failedToPost: "Failed to post",
  needsApproval: "Needs approval",
  published: "Published",
  scheduled: "Scheduled",
  draft: "Draft",
};
const STATUS_STYLES: Record<CardTypes, ICardStyles> = {
  scheduled: {
    primary: "text-[#ED8A17]",
    secondary: "bg-[#FFE5C7]",
    icon: "fas fa-clock",
  },
  needsApproval: {
    primary: "text-[#2A0C4E]",
    secondary: "bg-[#EADFF6]",
    icon: "fas fa-hand",
  },
  failedToPost: {
    primary: "text-[#EF4454]",
    secondary: "bg-[#FFD6D9]",
    icon: "fas fa-circle-exclamation",
  },
  published: {
    primary: "text-[#2F9876]",
    secondary: "bg-[#CFEFE5]",
    icon: "fas fa-check",
  },
  draft: {
    primary: "text-[#7B7B7B]",
    secondary: "bg-white",
    icon: "",
  },
};
const MONTHS: Record<number, string> = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const props = withDefaults(defineProps<ICardProps>(), {
  datetime: "July 8, 2021",
  status: "scheduled",
  icon: "fas fa-clock",
  keyword: "",
});

const cardMessage = computed(() => MESSAGES[props.status]);
const cardStyles = computed(() => {
  return STATUS_STYLES[props.status!];
});
const datetime = computed(() => {
  const time = new Date(props.datetime);
  const hours = time.getHours();
  return `${MONTHS[time.getMonth()]} ${time.getDate()}, ${hours > 12 ? hours - 12 : hours
    }:${time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()} ${hours > 12 ? "PM" : "AM"
    }`;
});
</script>

<style scoped>
.fancybutton {
  @apply bg-gradient-to-r from-[#ED3F56] to-[#FC6C4D] text-white rounded-md font-bold px-8 py-3;
}
</style>
