<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import * as CryptoJs from "crypto-js";
import { FormMessage } from "../interfaces/Message";
import lang from "../lang/index.json";

const router = useRouter();

const genders: string[] = lang['genders']['es'];
const formMessage = reactive<FormMessage>({
  from: {
    name: "",
    gender: null,
  },
  to: {
    name: "",
    gender: null,
  },
});

const rules = {
  name: [
      (v: string) => !!v || 'El nombre es requerido'
  ],
  gender: [
      (v: number | null) => v != null || 'El genero es requerido'
  ]
}

const form: any = ref(null);
const formValidate = ref(false);

const createMessageAction = async () => {
  
  const { valid } = await form.value.validate();
  formValidate.value = valid;

  if(!formValidate.value) return;

  const jsonString: string = JSON.stringify(formMessage);
  const jsonCypher: string = CryptoJs.AES.encrypt(
      jsonString, 
      import.meta.env.VITE_CRYPTO_PHRASE
    ).toString();

  router.push({
    path: "message",
    query: {
      value: jsonCypher,
    },
  });

};
</script>

<template>
  <v-container fluid>
    <v-row class="py-5 justify-center">
      <v-col md="8">
        <div class="d-flex align-items-center">
          <article>
            <h1>Hello World!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum numquam cum
              quae, molestias nam laboriosam ab aut sunt vitae optio sit, nulla reiciendis
              beatae amet.
            </p>
          </article>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col md="10">
        <v-card width="75%" class="mx-auto">
          <v-card-item class="p-4">
            <h2 class="text-center py-5">¡Escribe tu mensaje!</h2>
            <v-form 
              ref="form"
              v-model="formValidate"
              lazy-validation
            >
              <v-container>
                <v-row class="justify-space-around">
                  <v-col md="5">
                    <v-text-field
                      :rules="rules.name"
                      label="Tu nombre"
                      v-model="formMessage.from.name"
                      class="mb-3"
                      required
                    />
                    <v-radio-group 
                      label="Tu genero"
                      v-model="formMessage.from.gender"
                      :rules="rules.gender"  
                    >
                      <v-radio 
                        v-for="(gender, index) in genders"
                        :label="gender" 
                        :value="index"
                        :key="index" 
                      />
                    </v-radio-group>
                  </v-col>
                  <v-divider class="mx-4" vertical />
                  <v-col md="5">
                    <v-text-field
                      :rules="rules.name"
                      label="El de tu amor"
                      v-model="formMessage.to.name"
                      class="mb-3"
                      required
                    />
                    <v-radio-group 
                      label="Su genero"
                      v-model="formMessage.to.gender"
                      :rules="rules.gender"  
                    >
                      <v-radio 
                        v-for="(gender, index) in genders"
                        :label="gender" 
                        :value="index"
                        :key="index" 
                      />
                    </v-radio-group>
                  </v-col>
                </v-row>
                <v-row class="justify-center mt-4">
                  <v-col md="5">
                    <v-btn block color="primary" @click="createMessageAction">
                      Create Message
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
