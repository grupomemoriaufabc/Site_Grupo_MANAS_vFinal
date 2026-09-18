import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Site_Grupo_MANAS_vFinal/",  // ← adicione esta linha
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
