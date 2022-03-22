<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent>
      <div class="form-block search-block">
        <label for="search" class="block-title">Text</label>
        <input
          id="search"
          class="search-input"
          @input="submit"
          type="text"
          v-model="form.search"
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
            />
            <label :for="color">{{ color }}</label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useCatForm } from '@/composables/catForm';

export default {
  name: 'CatsForm',
  setup() {
    const { form, availableColors, submit } = useCatForm();

    return {
      form,
      submit,
      availableColors,
    };
  },
};
</script>

<style scoped>
.form-wrapper {
  width: 95%;
  max-width: 520px;
  margin: 10% auto;
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

.search-block {
  width: 60%;
}

.color-block {
  width: 35%;
}

.search-input {
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
</style>
