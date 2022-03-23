<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent>
      <div class="form-block text-input-block">
        <label for="text" class="block-title">Text</label>
        <input
          id="text"
          class="text-input"
          type="text"
          autocomplete="off"
          v-model="form.text"
        />
      </div>
      <div class="form-block color-block">
        <label for="color-picker" class="block-title">Color</label>
        <div id="color-picker" class="color-picker">
          <div v-for="color in availableColors" :key="color">
            <input
              class="color-radio"
              type="radio"
              name="color"
              v-model="form.color"
              :value="color"
            />
            <label :for="color">{{ color }}</label>
          </div>
        </div>
      </div>
    </form>
    <div class="message">{{ message }}</div>
    <CatImage :url="catUrl" />
  </div>
</template>

<script>
import { useCatForm } from '@/composables/catForm';

import CatImage from '@/components/CatImage';
import { watch } from '@vue/runtime-core';

export default {
  name: 'CatsForm',
  components: { CatImage },
  setup() {
    const { form, availableColors, catUrl, message, submit } = useCatForm();

    watch(form, submit);

    return {
      form,
      availableColors,
      catUrl,
      message,
      submit,
    };
  },
};
</script>

<style scoped>
.form-wrapper {
  width: 95%;
  max-width: 520px;
  margin: 5% auto;
}

.header {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-block {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.block-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.text-input-block {
  width: 60%;
}

.color-block {
  width: 35%;
}

.text-input {
  padding: 0 8px;
  height: 28px;
  border-radius: 8px;
  font-size: 18px;
  border-width: 1px;
}

.color-picker {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}

.color-radio {
  margin-right: 4px;
}

.message {
  margin: 40px auto;
  font-size: 18px;
  text-align: center;
}
</style>
