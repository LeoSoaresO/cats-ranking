<template>
    <li class="cat-item">
      <div class="cat-item__photo">
        <div class="ranking" :style="{ backgroundColor: colorOrder }">{{ rankOrder }}</div>
        <img :src="`https://leosoareso.github.io/apis/cats/api/imgs/${cat.photo}.jpeg`">
      </div>
      <div class="cat-item__info">
        <h4>{{ cat.name }}</h4>
      </div>
      <div class="cat-item__points">
        <img src="https://www.sicontis.com/codepen/cpc-rising/chevron.svg" @click="pointIncrement">
        <p>{{ cat.points }}</p>
        <img src="https://www.sicontis.com/codepen/cpc-rising/chevron.svg" @click="pointDecrement">
      </div>
    </li>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
    props: ['cat', 'rank'],
    setup(props) {
      const rankOrder = computed(() => props.rank + 1);
      const colors = ["#d6cd1e", "#bbbbbb", "#d6a21e"];
      const colorOrder = computed(() => colors[props.rank]);
  
      const pointIncrement = () => {
        props.cat.points++;
      };
  
      const pointDecrement = () => {
        props.cat.points--;
      };
  
      return { rankOrder, colorOrder, pointIncrement, pointDecrement };
    }
  };
  </script>
  
<style scoped lang="scss">
    .cat-item__photo {
        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;

        }
    }
</style>