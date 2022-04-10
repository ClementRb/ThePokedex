<template>
  <div class="common-layout">
    <router-link :to="{ name: 'Home' }">
      <img alt="Pokedex logo" src="./assets/Pokedex.png"
    /></router-link>

    <el-row>
      <el-col :span="24">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.clearText {
  color: white;
}
</style>
