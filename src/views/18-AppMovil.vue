<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeInstall = `npm install @capacitor/core @capacitor/cli`

const codeInit = `npx cap init com.beautyskin.app "BeautySkin" --webDir dist`

const codeAdd = `npx cap add android
# npx cap add ios   # solo en macOS`

const codeBuildSync = `npm run build
npx cap sync`

const codeOpen = `npx cap open android`

const codePlugins = `npm install @capacitor/camera
npm install @capacitor/geolocation
npm install @capacitor/splash-screen`

const codeCamera = `import { Camera } from '@capacitor/camera'

const image = await Camera.getPhoto({
  quality: 90,
  allowEditing: true,
  resultType: CameraResultType.Uri
})`

const codeGeolocation = `import { Geolocation } from '@capacitor/geolocation'

const position = await Geolocation.getCurrentPosition()
console.log(position.coords.latitude, position.coords.longitude)`

const codeApk = `# Android Studio → Build → Generate Signed Bundle / APK
# O por CLI:
cd android
./gradlew assembleRelease`

const codeConfig = `// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.beautyskin.app',
  appName: 'BeautySkin',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
}

export default config`

const step = ref(1)

const checklist = ref([
  { label: 'npm install @capacitor/core @capacitor/cli', done: false },
  { label: 'npx cap init + npx cap add android', done: false },
  { label: 'Configurar capacitor.config.ts', done: false },
  { label: 'npm run build && npx cap sync', done: false },
  { label: 'Personalizar icono y splash screen', done: false },
  { label: 'npx cap open android', done: false },
  { label: 'Build APK release', done: false }
])
</script>

<template>
  <h1>Vue como App Móvil</h1>

  <p>
    Vue genera HTML/CSS/JS estático. Para convertirlo en una app instalable
    en Android o iOS, se usa <strong>Capacitor</strong> — un framework de Ionic
    que envuelve la web app en un WebView nativo y permite acceder a APIs del
    dispositivo (cámara, GPS, notificaciones, etc.).
  </p>

  <section>
    <h2>¿Cómo funciona?</h2>
    <div class="card">
      <pre><code>App nativa (Android/iOS)
  └── WebView (pantalla completa)
        └── Tu app Vue compilada (dist/)
              └── APIs nativas vía plugins</code></pre>
      <p style="margin:0;font-size:0.85rem">La app nativa es solo un contenedor. Todo el UI y la lógica sigue siendo tu app Vue.</p>
    </div>
  </section>

  <section>
    <h2>1. Instalación</h2>

    <CodeBlock :code="codeInstall" lang="bash" title="Instalar Capacitor" />
  </section>

  <section>
    <h2>2. Inicializar</h2>
    <p>Creá el archivo de configuración de Capacitor. El <code>webDir</code> apunta a la carpeta donde Vite genera el build.</p>

    <CodeBlock :code="codeInit" lang="bash" title="Inicializar Capacitor" />
  </section>

  <section>
    <h2>3. Agregar plataforma</h2>
    <p>Esto crea una carpeta <code>android/</code> (o <code>ios/</code>) con un proyecto nativo completo.</p>

    <CodeBlock :code="codeAdd" lang="bash" title="Agregar Android" />
  </section>

  <section>
    <h2>4. Build + Sync</h2>
    <p>Cada vez que cambies tu app Vue, compilala y sincronizá con las carpetas nativas:</p>

    <CodeBlock :code="codeBuildSync" lang="bash" title="Build y sync" />
  </section>

  <section>
    <h2>5. Abrir en Android Studio</h2>
    <p>Android Studio se abre automáticamente con el proyecto listo para compilar.</p>

    <CodeBlock :code="codeOpen" lang="bash" title="Abrir Android Studio" />
  </section>

  <section>
    <h2>6. Configuración</h2>
    <p>Personalizá el ID, nombre y opciones en <code>capacitor.config.ts</code>:</p>

    <CodeBlock :code="codeConfig" lang="typescript" title="capacitor.config.ts" />
  </section>

  <section>
    <h2>7. Plugins nativos</h2>
    <p>Capacitor ofrece plugins para acceder a funciones del dispositivo. Algunos comunes:</p>

    <CodeBlock :code="codePlugins" lang="bash" title="Instalar plugins" />

    <h3 style="margin-top:1.5rem">Ejemplo: Cámara</h3>
    <CodeBlock :code="codeCamera" lang="typescript" title="@capacitor/camera" />

    <h3 style="margin-top:1.5rem">Ejemplo: Geolocalización</h3>
    <CodeBlock :code="codeGeolocation" lang="typescript" title="@capacitor/geolocation" />
  </section>

  <section>
    <h2>8. Build APK release</h2>
    <p>Una vez que todo funciona en el emulador, generá el APK firmado para distribuir:</p>

    <CodeBlock :code="codeApk" lang="bash" title="Build APK" />

    <div class="demo">
      <div class="demo-title">Checklist para APK release</div>
      <div style="display:flex;flex-direction:column;gap:0.5rem">
        <label
          v-for="item in checklist"
          :key="item.label"
          style="display:flex;align-items:center;gap:0.6rem;cursor:pointer;font-size:0.9rem"
        >
          <input
            type="checkbox"
            v-model="item.done"
            style="width:18px;height:18px;cursor:pointer"
          />
          <span :style="{ textDecoration: item.done ? 'line-through' : 'none', opacity: item.done ? 0.5 : 1 }">
            {{ item.label }}
          </span>
        </label>
      </div>
    </div>
  </section>

  <section>
    <h2>Resumen del flujo completo</h2>
    <div class="card">
      <pre><code>1. npm install @capacitor/core @capacitor/cli
2. npx cap init com.tuapp.app "TuApp" --webDir dist
3. npx cap add android
4. npm run build
5. npx cap sync
6. npx cap open android
7. Android Studio → Build APK</code></pre>
    </div>
  </section>
</template>
