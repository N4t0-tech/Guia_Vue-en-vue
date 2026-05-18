<script setup lang="ts">
import CodeBlock from '../components/CodeBlock.vue'

const codeBuild = `npm run build`

const codeNginx = `server {
  listen 80;
  server_name tudominio.com;
  root /var/www/beautyskin-front/dist;

  location / {
    try_files $uri $uri/ /index.html;
  }
}`
</script>

<template>
  <h1>Despliegue</h1>

  <p>
    Una vez que tenés tu app lista, el paso final es publicarla para que otros puedan usarla.
    Vue compila todo a archivos estáticos (HTML, CSS, JS) que podés servir desde cualquier
    servidor web o plataforma de hosting.
  </p>

  <section>
    <h2>Build de producción</h2>
    <p>El comando <code>npm run build</code> ejecuta TypeScript checking y luego Vite genera los archivos en la carpeta <code>dist/</code>:</p>

    <CodeBlock :code="codeBuild" lang="bash" title="Build" />

    <p>El resultado es algo como:</p>

    <div class="card">
<pre><code>dist/
├── index.html
├── assets/
│   ├── index-Bz7kBkkD.js      (JS compilado y minificado)
│   ├── index-DjwR06Zz.css     (CSS compilado y minificado)
│   └── vendor-*.js            (dependencias)
├── favicon.ico
└── ...</code></pre>
    </div>
  </section>

  <section>
    <h2>Opciones de despliegue</h2>

    <div class="card">
      <h3>Vercel (recomendado)</h3>
      <p>La opción más simple. Conectá tu repo de Git y Vercel detecta Vite automáticamente.</p>
      <ol>
        <li>Subí el proyecto a GitHub</li>
        <li>Andá a <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a></li>
        <li>Importá el repositorio</li>
        <li>Listo — se despliega solo en cada push</li>
      </ol>
    </div>

    <div class="card">
      <h3>Netlify</h3>
      <p>Similar a Vercel. También detecta Vite automáticamente.</p>
      <ol>
        <li>Subí el proyecto a GitHub</li>
        <li>Andá a <a href="https://netlify.com" target="_blank" rel="noopener">netlify.com</a></li>
        <li>Importá el repo y configurá: comando <code>npm run build</code>, carpeta <code>dist</code></li>
      </ol>
    </div>

    <div class="card">
      <h3>Servidor propio (NGINX, Apache, etc.)</h3>
      <p>Subí la carpeta <code>dist/</code> a tu servidor. Importante: configurá el servidor para que todas las rutas caigan en <code>index.html</code> (para que funcione Vue Router en modo history).</p>

      <CodeBlock :code="codeNginx" lang="nginx" title="Configuración NGINX" />
    </div>

    <div class="card">
      <h3>GitHub Pages</h3>
      <p>Gratuito y simple para proyectos chicos. Necesitás configurar Vite para rutas relativas:</p>
      <p>En <code>vite.config.ts</code>, agregá <code>base: '/nombre-del-repo/'</code>. Luego subí la carpeta <code>dist</code> a la branch <code>gh-pages</code>.</p>
    </div>
  </section>

  <section>
    <h2>Antes de desplegar</h2>
    <ul>
      <li>✅ Probá que <code>npm run build</code> no tenga errores</li>
      <li>✅ Verificá que las variables de entorno estén configuradas (VITE_API_URL, etc.)</li>
      <li>✅ Probá el build localmente con <code>npm run preview</code> (servidor local de la versión compilada)</li>
      <li>✅ Configurá el manejo de rutas 404 para que redirijan a <code>index.html</code></li>
      <li>✅ Optimizá imágenes y recursos grandes</li>
    </ul>
  </section>
</template>
