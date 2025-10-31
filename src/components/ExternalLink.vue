<script setup>
  import { computed } from 'vue'
  const props = defineProps(['href', 'content', 'hover'])

  const style = computed(() => {
    let hover = props.hover == true ? "hover:" : "";
    return `underline ${hover}text-primary`;
  })

  const content = computed(() => props.content);
</script>

<template>
  <a target="_blank" :class="style" :href="props.href">
    <span v-if="content">{{ props.content }}</span>
    <slot v-else></slot>
  </a>
</template>
