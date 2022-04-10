<template>
  <el-row>
    <el-col :span="12">
      <img
        v-if="pokemonSprite"
        class="imgPokemon"
        alt="Pokedex logo"
        :src="pokemonSprite"
      />
    </el-col>
    <el-col :span="12">
      <div v-if="pokemonNumber" class="infos clearText">
        <h1>Name: {{ name }}</h1>
        <h3>Number : {{ pokemonNumber }}</h3>
        <h3>Types :</h3>
        <div v-for="type in pokemonTypes" :key="type" class="text item">
          <el-button type="primary">{{ type.type.name }}</el-button>
        </div>
      </div></el-col
    >
  </el-row>
</template>
<script>
import POKEMON from "@/services/pokemonService";
export default {
  name: "HomePage",
  props: {
    name: String,
  },
  data() {
    return {
      pokemonSprite: null,
      pokemonNumber: null,
      pokemonTypes: [],
    };
  },
  async created() {
    await this.getPokemon();
  },
  methods: {
    async getPokemon() {
      const result = await POKEMON.get({ name: this.name });
      this.pokemonSprite = result.sprites.front_default;
      this.pokemonNumber = result.id;
      this.pokemonTypes = result.types;
    },
  },
};
</script>

<style>
.imgPokemon {
  width: 300px;
}

.infos {
  float: left;
  text-align: left;
}

.item {
  margin: 20px;
}
</style>
