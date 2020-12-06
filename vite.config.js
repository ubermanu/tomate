import reactPlugin from 'vite-plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './src/manifest.json';

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin, VitePWA({ manifest })],
};

export default config;
