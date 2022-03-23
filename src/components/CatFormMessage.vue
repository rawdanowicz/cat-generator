<template>
  <div class="message">{{ message }}</div>
</template>

<script>
export default {
  name: 'CatFormMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {},
};
</script>

<style scoped>
.message {
  margin: 40px auto;
  font-size: 18px;
  text-align: center;
}
</style>
