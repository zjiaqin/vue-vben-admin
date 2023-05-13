import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';

import type { VitePluginConfig } from '../type';

export default (config: VitePluginConfig) => {
  const langDir = path.resolve(config.root, 'src/lang');
  const autoImportDir = path.resolve(config.root, 'src/auto-import');

  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: ['vue', 'vue-router', 'pinia'],
    dirs: [langDir, autoImportDir],
  });
};
