import { reactive } from 'vue';

export const useCatForm = () => {
  const availableColors = ['red', 'green', 'blue'];
  const form = reactive({ search: null, color: availableColors[0] });

  const submit = () => {
    console.log(form);
  };

  return {
    availableColors,
    form,
    submit,
  };
};
