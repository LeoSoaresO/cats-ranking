<template>
    <div class="container">
      <Leaders :topThreeCats="topThreeCats" :newLeader="newLeader"/>
      <Board :allCats="allCats" @updateCats="updateCats"/>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch, onMounted } from 'vue';
  import Leaders from './components/Leaders.vue';
  import Board from './components/Board.vue';
  import './main.scss'
  
  export default {
    components: { Leaders, Board },
    setup() {
      const cats = ref([
        { name: "Marshall", photo: "cat-1", points: 100 },
        { name: "Ted", photo: "cat-2", points: 100 },
        { name: "Mel", photo: "cat-3", points: 100 },
        { name: "Scott", photo: "cat-4", points: 100 },
        { name: "Safira", photo: "cat-5", points: 100 },
      ]);
  
      const catRank = ref([
        { r: 2, c: "#d6a21e" },
        { r: 0, c: "#d6cd1e" },
        { r: 1, c: "#bbbbbb" }
      ]);
      const newLeader = ref("");
  
      // Carregar gatos do localStorage ao inicializar
      onMounted(() => {
        const savedCats = localStorage.getItem('cats');
        if (savedCats) {
          cats.value = JSON.parse(savedCats);
        }
      });
  
      // Monitora mudanças nos gatos para salvar no localStorage
      watch(cats, (newCats) => {
        localStorage.setItem('cats', JSON.stringify(newCats));
      }, { deep: true });
  
      const allCats = computed(() => {
        return [...cats.value].sort((a, b) => b.points - a.points);
      });
  
      const topThreeCats = computed(() => {
        let topThree = [...cats.value].sort((a, b) => b.points - a.points).slice(0, 3);
        let order = [topThree[2], topThree[0], topThree[1]];
        return order;
      });
  
      watch(topThreeCats, (newValue, oldValue) => {
        if (newValue[1].name !== oldValue[1].name) {
          newLeader.value = newValue[1].name;
        } else {
          newLeader.value = "";
        }
      });
  
      // Função para atualizar os pontos dos gatos
      function updateCats(updatedCats) {
        cats.value = updatedCats;
      }
  
      return { topThreeCats, newLeader, allCats, updateCats };
    }
  };
  </script>
  