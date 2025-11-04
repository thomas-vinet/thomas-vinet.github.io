<script setup>
  import { computed } from 'vue'
  const props = defineProps(['paper'])

  const titleLink = computed(() => {
    return "/pdfs/" + props.paper?.file + ".pdf";
  })
  const additional = computed(() => props.paper?.additional)
  const additionalFile = computed(() => titleLink.value.replace(".pdf", "-" + additional.value + ".pdf"))
  const additionalTitle = computed(() => additional.value.substring(0,1).toUpperCase() + additional.value.substring(1))


  const information = computed(() => {
    const type = props.paper?.type 
    if(type == "preprint") {
      return `Preprint, ${props.paper.date}`
    }
    if(type == "workshop") {
      return `At: ${props.paper.location}`
    }
    return ""
  })
</script>

<template>
  <div class="flex flex-col py-2">
    <div class="flex">
      <elink :href="titleLink" :content="paper.title"/>
      <span class="pl-1" v-if="additional">
        (<elink :href="additionalFile" :content="additionalTitle"/>)
      </span>
    </div>
    <span class="italic"> 
      {{ paper.authors }}
    </span>
    <span class="italic"> 
      {{ information }}
    </span>
  </div>
</template>
