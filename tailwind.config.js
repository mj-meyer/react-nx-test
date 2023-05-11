// in apps/myapp/tailwind.config.js

const { join } = require('path');
const colors = require('tailwindcss/colors');

const {
  createGlobPatternsForDependencies,
} = require('@nrwl/workspace/src/utilities/generate-globs');

/**
 * Generates a set of glob patterns based off the source root of the app and its dependencies
 * @param dirPath workspace relative directory path that will be used to infer the parent project and dependencies
 * @param fileGlobPattern pass a custom glob pattern to be used
 */
function createGlobPatternsForDependenciesLocal(
  dirPath,
  fileGlobPattern = '/**/!(*.stories|*.spec).{html,ts}'
) {
  try {
    return createGlobPatternsForDependencies(dirPath, fileGlobPattern);
  } catch {
    console.warn(
      '\n[createGlobPatternsForDependencies] WARNING: There was no ProjectGraph available to read from, returning an empty array of glob patterns\n'
    );
    return [];
  }
}

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    // look for source files in the app folder
    join(__dirname, 'app/**/*.{html,ts}'),
    // but then also look for source files in all the libs that the app depends on
    ...createGlobPatternsForDependenciesLocal(__dirname),
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
