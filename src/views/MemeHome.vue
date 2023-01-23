<template>
  <MemePageComponent :memeList="memeListM" :loader="loaderM" />
</template>
<script>
import MemePageComponent from "@/components/MemePageComponent.vue";
import { mapState } from "vuex";
export default {
  components: {
    MemePageComponent,
  },
  data() {
    return {
      loaderM: true,
    };
  },
  computed: {
    ...mapState({
      memeListM: (state) => state.Memes.memeList,
    }),
  },

  async mounted() {
    this.loaderM = true;
    await this.$store.dispatch("Memes/getMyFavMemeList");
    if (this.memeListM == 0) await this.$store.dispatch("Memes/getMemesList");
    //  console.log("hhhhhhhh", this.memeList);
    this.loaderM = false;
  },
};
</script>
