import { createApp } from 'vue'; // Use createApp instead of importing Vue
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$http = axios.create({
    baseURL: 'mongodb://0.0.0.0:27017/mevnonc', // Replace with your backend server URL
});

app.mount('#app');
