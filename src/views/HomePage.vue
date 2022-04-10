<template>
  <el-row>
    <el-col :span="12">
      <h1 class="clearText">See the list off all pokemons</h1>
      <el-scrollbar v-loading="loadingTable" height="500px">
        <el-table :data="pokemonList" stripe style="width: 100%">
          <el-table-column prop="name" label="Name" />
          <el-table-column label="See"
            ><template #default="scope">
              <router-link
                :to="{ name: 'Pokemon', params: { name: scope.row.name } }"
              >
                <el-button plain type="primary">
                  <i class="fa-regular fa-eye"></i
                ></el-button>
              </router-link> </template></el-table-column></el-table
      ></el-scrollbar>
      <el-pagination
        layout="prev, pager, next"
        :total="totalTab"
        :page-size="20"
        :current-page="currentPage"
        @update:current-page="pageUpdated($event)"
      />
    </el-col>
    <el-col :span="12">
      <h1 class="clearText">Or Search one by name</h1>
      <div>
        <el-input
          style="width: 50%"
          v-model="inputName"
          placeholder="Please input"
        />
        <el-button type="primary" @click="searchPokemon()">Search</el-button>
      </div>
      <div v-if="searchedPokemon" class="clearText">
        <img
          class="imgPokemon"
          alt="Pokedex logo"
          :src="searchedPokemon.sprites.front_default"
        />
        <h1>Name: {{ searchedPokemon.name }}</h1>
        <h3>Number : {{ searchedPokemon.id }}</h3>
        <router-link
          :to="{ name: 'Pokemon', params: { name: searchedPokemon.name } }"
        >
          <el-button plain type="primary">
            <i class="fa-regular fa-eye"></i
          ></el-button>
        </router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import POKEMON from "@/services/pokemonService";
export default {
  name: "HomePage",
  data() {
    return {
      pokemonList: [],
      params: { offset: 20, limit: 20 },
      totalTab: 0,
      currentPage: 1,
      inputName: null,
      searchedPokemon: null,
      loadingTable: false,
    };
  },
  async created() {
    await this.getPokemons();
  },
  methods: {
    async getPokemons() {
      this.loadingTable = true;
      const params = {
        limit: this.params.limit,
        offset: this.params.offset,
      };
      const result = await POKEMON.listPokemons({ params });
      this.pokemonList = result.results;
      this.totalTab = result.count;
      this.loadingTable = false;
    },
    async pageUpdated(event) {
      this.currentPage = event;
      this.params.offset = 20 * this.currentPage;
      await this.getPokemons();
    },
    async searchPokemon() {
      if (!this.inputName) {
        return;
      }
      const result = await POKEMON.get({ name: this.inputName });

      this.searchedPokemon = result;
    },
  },
};
</script>
