<script setup lang="ts">
import * as Crypto from "crypto-js";
import { useRoute } from "vue-router";
import { FormMessage } from "../../interfaces/Message";
import { onMounted } from "vue";

const route = useRoute();

const valueCypher: any = route.query;
const valueString: string = Crypto.AES.decrypt(
  valueCypher.value,
  import.meta.env.VITE_CRYPTO_PHRASE
).toString(Crypto.enc.Utf8);

const valueMessage: FormMessage = JSON.parse(valueString);

onMounted(() => {
  console.log('Hello');
});
</script>

<template>
  <article class="text-center">
    <h2>
      {{ valueMessage.to.name }},
      {{ valueMessage.from.name }}
      cree que eres
      {{ valueMessage.to.gender ? "un chico grandioso" : "una chica grandiosa" }}
      y quiere con todo su corazón ser tu
      {{ valueMessage.from.gender ? "novio" : "novia" }}.
    </h2>
    <h3 class="my-5">¿Lo aceptaras?</h3>
  </article>
</template>
