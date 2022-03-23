import { reactive, ref } from 'vue';
import debounce from 'lodash.debounce';

import { fetchCat } from '@/api/cats';

export const useCatForm = () => {
  const availableColors = ['red', 'green', 'blue'];
  const form = reactive({ text: null, color: availableColors[0] });
  const catUrl = ref('');
  const message = ref('Use form to generate a cat');

  const setCatUrl = url => (catUrl.value = url);
  const setMessage = text => (message.value = text);

  const handleFetchCat = debounce(
    () =>
      fetchCat(form)
        .then(({ status, url }) => {
          if (status !== 200) {
            throw Error('Cat could not be generated');
          }
          setCatUrl(url);
          setMessage('');
        })
        .catch(({ message }) => {
          setCatUrl('');
          setMessage(message);
        }),
    1000,
  );

  const submit = () => {
    setCatUrl('');
    setMessage('Loading...');
    handleFetchCat();
  };

  return {
    availableColors,
    form,
    catUrl,
    message,
    submit,
  };
};
