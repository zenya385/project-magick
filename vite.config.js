import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  base: '/project-magick/',
  root: 'src',
  plugins: [
    createHtmlPlugin({
      minify: false,
      // pages: [
      //   {
      //     entry: 'main.js',
      //     filename: 'index.html',
      //     template: 'public/index.html',
          inject: {
            data: {
              header: fs.readFileSync('./src/partials/header.html', 'utf-8'),
              section: fs.readFileSync('./src/partials/section.html', 'utf-8'),
              footer: fs.readFileSync('./src/partials/footer.html', 'utf-8'),
            },
          },
        // },
      // ],
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
// base: '/project-magick/',