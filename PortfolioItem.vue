<template>
  <v-card class="portfolio-item" outlined :hover="hover">
    <v-img :src="item.image" :alt="item.title" class="portfolio-image"></v-img>
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>{{ item.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.portfolio-item {
  margin: 1rem;
  max-width: 300px;
  cursor: pointer;
  transition: transform 0.3s;
}

.portfolio-item:hover {
  transform: scale(1.05);
}

.portfolio-image {
  border-radius: 5px 5px 0 0;
}

</style>
