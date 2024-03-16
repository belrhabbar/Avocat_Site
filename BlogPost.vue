<template>
  <v-card class="blog-post" outlined>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-text class="date">{{ post.date }} <v-icon>far fa-clock</v-icon></v-card-text>
    <v-card-text v-html="post.content"></v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.blog-post {
  padding: 1.5rem;
  margin: 1rem;
  transition: transform 0.3s;
}

.blog-post:hover {
  transform: scale(1.05);
}

.blog-post h2 {
  margin-bottom: 1rem;
  color: #333;
}

.blog-post .date {
  color: #888;
  font-size: 0.8rem;
}
</style>
