<template>
  <v-container>
    <v-card class="service-details" outlined>
      <v-card-title>{{ service.title }}</v-card-title>
      <v-card-text class="description">{{ service.description }}</v-card-text>
      <v-card-text class="price">Tarif : {{ service.price }} $</v-card-text>
      <!-- Ajoutez d'autres informations détaillées au besoin -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      service: {} // Les détails du service seront remplis dynamiquement
    };
  },
  created() {
    // Utilisez le routeur pour obtenir le paramètre d'ID du service
    const serviceId = this.$route.params.id;

    // Chargez les détails du service depuis votre source de données (par exemple, services dans data)
    this.service = this.$store.state.services.find(s => s.id == serviceId);
  }
};
</script>

<style scoped>
.service-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  color: #333;
}

.description {
  color: #555;
}

.price {
  color: #8B4513; /* Marron */
}
</style>
