<script setup lang="ts">
import { computed, ref } from "vue";

const { data, refresh } = useFetch("/api/healthcheck");

const fetched = ref(data);
const valueA = ref("Altere este valor");
const valueB = ref("Altere este valor");
const toggle = ref(false);
const age = ref(10);

const doubleAge = computed(() => {
  return !isNaN(parseInt(`${age.value}`)) ? parseInt(`${age.value}`) * 2 : 0;
});

const updateApiData = async () => {
  // Pra atualizar os dados e executar um novo request, só precisa disso
  await refresh();
  fetched.value = data.value;
};

const valueList = [
  {
    name: "John",
    age: 21,
  },
  {
    name: "Claire",
    age: 24,
  },
  {
    name: "Velt",
    age: 41,
  },
];
</script>

<template>
  <atom-container>
    <h1>Test View</h1>

    <p>Teste com request de API e renderização server/client-side</p>

    <p><pre>{{JSON.stringify(fetched, null, 2)}}</pre></p>

    <p>
      <button @click="updateApiData">
        Atualizar dados
      </button>
    </p>

    <hr />

    <p>Teste de v-model com computed variables:</p>

    <p>
      <input type="text" v-model="age" />
    </p>

    <p>
      Duas vezes sua idade é: <strong>{{ doubleAge }}</strong>
    </p>

    <hr />

    <p>
      <label>
        <input type="checkbox" v-model="toggle" /> Alternar exibição
      </label>
    </p>

    <p v-if="toggle">
      Este parágrago exibe quanto <code>toggle</code> for <code>true</code>.
    </p>
    <p v-else>
      Este parágrago exibe quanto <code>toggle</code> for <code>false</code>.
    </p>

    <hr />

    <h3>Listagem de dados</h3>

    <ul>
      <li v-for="(person, i) in valueList" key="i">
        {{ person.name }}, {{ person.age }}
      </li>
    </ul>

    <hr />

    <p>Componente utilizando <strong>Options API</strong>:</p>

    <options-input label="Options Input" v-model="valueA" />

    <p>
      <code>{{ valueA }}</code>
    </p>

    <hr />

    <p>Componente utilizando <strong>Composition API</strong>:</p>

    <composition-input label="Options Input" v-model="valueB" />

    <p>
      <code>{{ valueB }}</code>
    </p>
  </atom-container>
</template>

<style lang="scss" scoped>
pre, code {
  background: #e0e0e0;
  border: 1px solid #a0a0a0;
  font-family: Iosevka, Monaco, Consolas, monospace;
  padding: 0 0.25rem;
}

pre {
  code {
    background: transparent;
    border: 0;
  }

  padding: .5rem;
}
</style>
