<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-layout row>
      <v-flex md3>
     
          <v-container :style="{ background: $vuetify.theme.themes.light.background }">
            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-avatar class="mt-n7" size="60" elevation="10">
                  <img src="img8.jpg" />
                </v-avatar>
                <v-card-title class="layout justify-center">Bes Wilis</v-card-title>
                <v-card-subtitle class="layout justify-center">24 year, California</v-card-subtitle>
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">Blood</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">height</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Weight</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>-B</v-list-item-subtitle>
                    <v-list-item-subtitle>170 cm</v-list-item-subtitle>
                    <v-list-item-subtitle>60 Kg</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
            <!-- Autres sections à ajouter ici -->
          </v-container>
      
      </v-flex>
      <v-flex md9>
          <v-container :style="{ background: $vuetify.theme.themes.dark.background }" class="rounded">
            <!-- Section "Articles Juridiques" -->
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-card-text>
                  <h2>Articles Juridiques</h2>
                  <p>Découvrez nos derniers articles sur divers sujets juridiques :</p>
                  <ul>
                    <li><a href="#">Comment se préparer pour un divorce</a></li>
                    <li><a href="#">Les droits des locataires</a></li>
                    <li><a href="#">Comment constituer une entreprise</a></li>
                    <!-- Ajoutez ici d'autres articles avec des liens -->
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
            <!-- Section "Actualités Juridiques" -->
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-card-text>
                  <h2>Actualités Juridiques</h2>
                  <p>Restez informé sur les dernières actualités juridiques :</p>
                  <ul>
                    <li><a href="#">Nouvelles lois en vigueur</a></li>
                    <li><a href="#">Cas judiciaires en cours</a></li>
                    <li><a href="#">Événements juridiques à venir</a></li>
                    <!-- Ajoutez ici d'autres actualités avec des liens -->
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
            <!-- Section "FAQ" -->
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-card-text>
                  <h2>FAQ</h2>
                  <p>Consultez nos réponses aux questions fréquemment posées :</p>
                  <ul>
                    <li><a href="#">Comment choisir un avocat?</a></li>
                    <li><a href="#">Quels sont les coûts associés aux services juridiques?</a></li>
                    <li><a href="#">Quels sont mes droits en tant que locataire?</a></li>
                    <!-- Ajoutez ici d'autres questions et réponses -->
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
            <!-- Section "Partenaires" -->
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-card-text>
                  <h2>Partenaires</h2>
                  <p>Découvrez nos partenaires de confiance :</p>
                  <ul>
                    <li><a href="#">Cabinet comptable XYZ</a></li>
                    <li><a href="#">Agence immobilière ABC</a></li>
                    <li><a href="#">Société de conseil en affaires DEF</a></li>
                    <!-- Ajoutez ici d'autres partenaires avec des liens -->
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-container>
        
      </v-flex>
    </v-layout>
  </v-app>
</template>


<script>
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,

    arrayEvents: null,
    date2: new Date().toISOString().substr(0, 10),
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  mounted () {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },
  methods: {
    functionEvents (date) {
      const [,, day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
      return false
    },
  },
};
</script>
<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>