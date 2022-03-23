export const fetchCat = ({ text, color }) =>
  fetch(`https://cataas.com/cat/says/${text}?c=${color}`);
