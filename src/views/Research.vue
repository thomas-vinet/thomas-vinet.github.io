<script setup>
  import { ref, computed } from 'vue'
  const research = ref([])
  fetch('/research.json')
    .then((response) => response.json())
    .then((r) => research.value = r)

  const preprints = computed(() => {
    return research.value.filter((v) => v.type === "preprint")
  })

  const workshops = computed(() => {
    return research.value.filter((v) => v.type === "workshop")
  })
</script>

<template>
  <span class="font-bold text-2xl pb-3 underline">Preprints</span> 
  <paper v-for="preprint in preprints" class="pl-2" :paper="preprint"/>

  <span class="pt-5 font-bold text-2xl pb-3 underline">Workshops</span> 
  <paper v-for="workshop in workshops" class="pl-2" :paper="workshop"/>
</template>
