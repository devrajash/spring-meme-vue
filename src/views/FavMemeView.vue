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
      memeListM: (state) => state.Memes.myFavMemesList,
    }),
  },

  async mounted() {
    this.loaderM = true;
    if (this.memeListM == 0)
      await this.$store.dispatch("Memes/getMyFavMemeList");
    this.loaderM = false;
  },
};
</script>
