import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// اسم المستودع الخاص بك على GitHub
const repository = "coursebridge-connect";

export default defineConfig(() => ({
  base: `/${repository}/`, // هذا يضمن أن الموقع يعمل بشكل صحيح على GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    process.env.NODE_ENV === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
