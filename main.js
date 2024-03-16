import ServiceDetails from './components/ServiceDetails.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import vuetify from './avocat_site\node_modules\vuetify';
import '@fortawesome/fontawesome-free/css/all.css';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/services/:id',
    name: 'ServiceDetails',
    component: ServiceDetails
  },
  
];

const router = createRouter({
 history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(vuetify);
app.mount('#app');
