<script setup lang="ts">
import { useRoute } from "vue-router";
import DefaultLayout from "./components/layouts/default.vue";
import CleanLayout from "./components/layouts/clean.vue";
import { computed } from "@vue/reactivity";

const route = useRoute();
const layoutName = computed(()=> route.meta.layout ?? 'default'); 

const layouts = {
  default: DefaultLayout,
  clean: CleanLayout
}
</script>

<template>
  <v-app>
    <component :is="layouts[layoutName]" >
      <router-view/>
    </component>
  </v-app>
</template>
