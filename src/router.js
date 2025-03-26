// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router';
import NordStage3Calculator from './components/NordStage3Calculator.vue';
import JunoCalculator from './components/JunoCalculator.vue';
import NordRackCalculator from './components/NordRackCalculator.vue';
import UltranovaCalculator from './components/UltranovaCalculator.vue';
import OpsixCalculator from './components/OpsixCalculator.vue';
import MicrofreakCalculator from './components/MicrofreakCalculator.vue';

const routes = [
  { path: '/', redirect: '/nord-stage-3' },
  { path: '/nord-stage-3', component: NordStage3Calculator },
  { path: '/juno', component: JunoCalculator },
  { path: '/nord-rack', component: NordRackCalculator },
  { path: '/ultranova', component: UltranovaCalculator },
  { path: '/opsix', component: OpsixCalculator },
  { path: '/mf', component: MicrofreakCalculator },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
