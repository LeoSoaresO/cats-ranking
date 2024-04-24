<template>
    <div class="leaders">
      <h2>Ranking de Gatos Mensal</h2>
      <ul>
        <li v-for="(cat, i) in topThreeCats" :key="cat.name">
          <div class="lead-cats">
            <img class="lead-cats__photo" :src="`/src/assets/${cat.photo}.jpeg`" :class="{ active: cat.name === newLeader }">
            <div class="podium" :class="`pod-${i + 1}`">
              <div class="ranking-lead" :style="{ backgroundColor: catRank[i].c }">{{ catRank[i].r + 1 }}</div>
              <h4>{{ cat.name }}</h4>
              <p>{{ cat.points }} Cat-Points</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['topThreeCats', 'newLeader'],
    data() {
      return {
        catRank: [
          { r: 2, c: "#d6a21e" },
          { r: 0, c: "#d6cd1e" },
          { r: 1, c: "#bbbbbb" }
        ]
      };
    }
  };
  </script>

<style scoped lang="scss">
    .lead-cats__photo{
        width: 108px;
        margin: 0 auto;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
</style>
  