
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // اسم المستودع الخاص بك على GitHub
  // على سبيل المثال إذا كان عنوان المستودع هو https://github.com/username/edu-platform
  // فإن اسم المستودع هو "edu-platform"
  const repository = "coursebridge-connect"; // تم تحديث اسم المستودع

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: mode === 'production' && repository ? `/${repository}/` : '/',
  };
});
