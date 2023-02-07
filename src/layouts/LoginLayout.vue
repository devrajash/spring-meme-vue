<template>
  <div>
    <slot />
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
