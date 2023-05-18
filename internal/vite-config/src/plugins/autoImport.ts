import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';

export function configAutoImportPlugin({ root }: { root: string }) {
  const langDir = path.resolve(root, 'src/lang');
  const autoImportDir = path.resolve(root, 'src/auto-import');

  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: ['vue', 'vue-router', 'pinia'],
    dirs: [langDir, autoImportDir],

    // eslint报错解决
    eslintrc: {
      enabled: true, // Default `false`
      // filepath: 'eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      // globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  });
}
