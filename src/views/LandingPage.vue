<template>
  <div class="about">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/fav-meme">Fav memes</router-link>
      | <router-link to="/meme-home">Meme Home</router-link> -->
    </nav>
    <div class="justify-center">
      <h1>Meme World</h1>
    </div>
    <div class="justify-center">
      <div class="home">
        <img alt="Vue logo" src="../assets/img-loader.gif" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    const token = sessionStorage.getItem("spring:access_token");
    if (token) {
      this.$router.push("/meme-home");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
