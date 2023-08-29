import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import url from "url";

import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: `${path.resolve(__dirname, "./src/")}`,
      api: `${path.resolve(__dirname, "./src/api/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      data: `${path.resolve(__dirname, "./src/data/")}`,
      entities: `${path.resolve(__dirname, "./src/entities/")}`,
      types: `${path.resolve(__dirname, "./src/types/")}`,
      features: `${path.resolve(__dirname, "./src/features/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      services: `${path.resolve(__dirname, "./src/services/")}`,
      stores: `${path.resolve(__dirname, "./src/stores/")}`,
      utils: `${path.resolve(__dirname, "./src/utils/")}`,
    },
  },
});
