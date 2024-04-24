<template>
    <div class="board">
      <h2 style="color: #007eed;">Cat-abela</h2>
      <ul>
        <cat-list-item v-for="(cat, i) in allCats" :cat="cat" :rank="i" :key="cat.name">
        </cat-list-item>
      </ul>
    </div>
  </template>
  
  <script>
  import CatListItem from './CatListItem.vue';
  
  export default {
    components: { CatListItem },
    props: ['allCats']
  };
  </script>
  