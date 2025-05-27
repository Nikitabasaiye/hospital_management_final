import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// // import path from "path";
// import * as path from "path"; // Ensures compatibility with some Node.js environments

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import * as path from "path"; // Ensures compatibility with some Node.js environments

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()], // React plugin for Vite
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"), // Alias for cleaner imports
//     },
//   },
// });
