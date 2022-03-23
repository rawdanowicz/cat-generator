<template>
  <img class="cat-image" v-if="url" :src="url" alt="Funny cat image" />
</template>

<script>
export default {
  name: 'CatImage',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup() {},
};
</script>

<style scoped>
.cat-image {
  width: 100%;
}
</style>
