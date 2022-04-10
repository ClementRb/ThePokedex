<template>
  <el-row>
    <el-col :span="4"></el-col>
    <el-col :span="16">
      <el-scrollbar height="600px">
        <el-table :data="pokemonList" stripe style="width: 100%">
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="url" label="Url" /> </el-table
      ></el-scrollbar>
      <el-pagination
        layout="prev, pager, next"
        :total="totalTab"
        :page-size="20"
        :current-page="currentPage"
        @update:current-page="pageUpdated($event)"
      />
    </el-col>
    <el-col :span="4"></el-col>
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
    };
  },
  async created() {
    await this.getPokemons();
  },
  methods: {
    async getPokemons() {
      const params = {
        limit: this.params.limit,
        offset: this.params.offset,
      };
      const result = await POKEMON.listPokemons({ params });
      this.pokemonList = result.results;
      this.totalTab = result.count;
    },
    async pageUpdated(event) {
      this.currentPage = event;
      this.params.offset = 20 * this.currentPage;
      await this.getPokemons();
    },
  },
};
</script>
