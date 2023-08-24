<script lang="ts" setup>
import MessageText from "../components/message/text.vue";
import MessageButtons from "../components/message/buttons.vue";
</script>

<template>
  <div class="vh-100 d-flex align-center">
    <v-container>
      <v-row class="justify-center">
        <v-col md="6" cols="8">
          <v-card class="pa-5">
            <v-card-text>
              <MessageText />
              <MessageButtons />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.vh-100 {
  min-height: 100vh;
}
</style>
