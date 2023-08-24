<script setup lang="ts">
import { useModalStore } from "../../stores/modalStore";

const modalStore = useModalStore();
console.log(modalStore.existsMessage);
</script>


<template>
  <div class="d-flex justify-center flex-wrap">
    <v-btn color="error">
      ¡No!
      <v-icon end icon="mdi-emoticon-cry-outline" />
    </v-btn>
    <v-btn color="primary" class="ml-md-5">
      ¡Si!
      <v-icon end icon="mdi-emoticon-kiss-outline" />
    </v-btn>
  </div>
</template>
