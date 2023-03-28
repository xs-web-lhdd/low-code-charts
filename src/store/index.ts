/**
 * * 状态管理
 */

import type { App } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

export function setupStore(app: App<Element>) {
  app.use(pinia);
}

export { pinia };
