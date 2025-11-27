import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Todo-list-react/", // 👈 phải trùng tên repo của bạn trên GitHub
})
