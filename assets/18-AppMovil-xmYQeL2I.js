import{t as e}from"./CodeBlock-DSd9V9-T.js";import{A as t,E as n,L as r,M as i,R as a,_ as o,a as s,d as c,h as l,p as u,v as d,w as f,y as p}from"./index-DuKBGh4e.js";var m={class:`demo`},h={style:{display:`flex`,"flex-direction":`column`,gap:`0.5rem`}},g=[`onUpdate:modelValue`],_=`npm install @capacitor/core @capacitor/cli`,v=`npx cap init com.beautyskin.app "BeautySkin" --webDir dist`,y=`npx cap add android
# npx cap add ios   # solo en macOS`,b=`npm run build
npx cap sync`,x=`npx cap open android`,S=`npm install @capacitor/camera
npm install @capacitor/geolocation
npm install @capacitor/splash-screen`,C=`import { Camera } from '@capacitor/camera'

const image = await Camera.getPhoto({
  quality: 90,
  allowEditing: true,
  resultType: CameraResultType.Uri
})`,w=`import { Geolocation } from '@capacitor/geolocation'

const position = await Geolocation.getCurrentPosition()
console.log(position.coords.latitude, position.coords.longitude)`,T=`# Android Studio → Build → Generate Signed Bundle / APK
# O por CLI:
cd android
./gradlew assembleRelease`,E=`// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.beautyskin.app',
  appName: 'BeautySkin',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
}

export default config`,D=p({__name:`18-AppMovil`,setup(p){i(1);let D=i([{label:`npm install @capacitor/core @capacitor/cli`,done:!1},{label:`npx cap init + npx cap add android`,done:!1},{label:`Configurar capacitor.config.ts`,done:!1},{label:`npm run build && npx cap sync`,done:!1},{label:`Personalizar icono y splash screen`,done:!1},{label:`npx cap open android`,done:!1},{label:`Build APK release`,done:!1}]);return(i,p)=>(f(),l(c,null,[p[18]||=u(`h1`,null,`Vue como App Móvil`,-1),p[19]||=u(`p`,null,[o(` Vue genera HTML/CSS/JS estático. Para convertirlo en una app instalable en Android o iOS, se usa `),u(`strong`,null,`Capacitor`),o(` — un framework de Ionic que envuelve la web app en un WebView nativo y permite acceder a APIs del dispositivo (cámara, GPS, notificaciones, etc.). `)],-1),p[20]||=u(`section`,null,[u(`h2`,null,`¿Cómo funciona?`),u(`div`,{class:`card`},[u(`pre`,null,[u(`code`,null,`App nativa (Android/iOS)
  └── WebView (pantalla completa)
        └── Tu app Vue compilada (dist/)
              └── APIs nativas vía plugins`)]),u(`p`,{style:{margin:`0`,"font-size":`0.85rem`}},`La app nativa es solo un contenedor. Todo el UI y la lógica sigue siendo tu app Vue.`)])],-1),u(`section`,null,[p[0]||=u(`h2`,null,`1. Instalación`,-1),d(e,{code:_,lang:`bash`,title:`Instalar Capacitor`})]),u(`section`,null,[p[1]||=u(`h2`,null,`2. Inicializar`,-1),p[2]||=u(`p`,null,[o(`Creá el archivo de configuración de Capacitor. El `),u(`code`,null,`webDir`),o(` apunta a la carpeta donde Vite genera el build.`)],-1),d(e,{code:v,lang:`bash`,title:`Inicializar Capacitor`})]),u(`section`,null,[p[3]||=u(`h2`,null,`3. Agregar plataforma`,-1),p[4]||=u(`p`,null,[o(`Esto crea una carpeta `),u(`code`,null,`android/`),o(` (o `),u(`code`,null,`ios/`),o(`) con un proyecto nativo completo.`)],-1),d(e,{code:y,lang:`bash`,title:`Agregar Android`})]),u(`section`,null,[p[5]||=u(`h2`,null,`4. Build + Sync`,-1),p[6]||=u(`p`,null,`Cada vez que cambies tu app Vue, compilala y sincronizá con las carpetas nativas:`,-1),d(e,{code:b,lang:`bash`,title:`Build y sync`})]),u(`section`,null,[p[7]||=u(`h2`,null,`5. Abrir en Android Studio`,-1),p[8]||=u(`p`,null,`Android Studio se abre automáticamente con el proyecto listo para compilar.`,-1),d(e,{code:x,lang:`bash`,title:`Abrir Android Studio`})]),u(`section`,null,[p[9]||=u(`h2`,null,`6. Configuración`,-1),p[10]||=u(`p`,null,[o(`Personalizá el ID, nombre y opciones en `),u(`code`,null,`capacitor.config.ts`),o(`:`)],-1),d(e,{code:E,lang:`typescript`,title:`capacitor.config.ts`})]),u(`section`,null,[p[11]||=u(`h2`,null,`7. Plugins nativos`,-1),p[12]||=u(`p`,null,`Capacitor ofrece plugins para acceder a funciones del dispositivo. Algunos comunes:`,-1),d(e,{code:S,lang:`bash`,title:`Instalar plugins`}),p[13]||=u(`h3`,{style:{"margin-top":`1.5rem`}},`Ejemplo: Cámara`,-1),d(e,{code:C,lang:`typescript`,title:`@capacitor/camera`}),p[14]||=u(`h3`,{style:{"margin-top":`1.5rem`}},`Ejemplo: Geolocalización`,-1),d(e,{code:w,lang:`typescript`,title:`@capacitor/geolocation`})]),u(`section`,null,[p[16]||=u(`h2`,null,`8. Build APK release`,-1),p[17]||=u(`p`,null,`Una vez que todo funciona en el emulador, generá el APK firmado para distribuir:`,-1),d(e,{code:T,lang:`bash`,title:`Build APK`}),u(`div`,m,[p[15]||=u(`div`,{class:`demo-title`},`Checklist para APK release`,-1),u(`div`,h,[(f(!0),l(c,null,n(D.value,e=>(f(),l(`label`,{key:e.label,style:{display:`flex`,"align-items":`center`,gap:`0.6rem`,cursor:`pointer`,"font-size":`0.9rem`}},[t(u(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.done=t,style:{width:`18px`,height:`18px`,cursor:`pointer`}},null,8,g),[[s,e.done]]),u(`span`,{style:r({textDecoration:e.done?`line-through`:`none`,opacity:e.done?.5:1})},a(e.label),5)]))),128))])])]),p[21]||=u(`section`,null,[u(`h2`,null,`Resumen del flujo completo`),u(`div`,{class:`card`},[u(`pre`,null,[u(`code`,null,`1. npm install @capacitor/core @capacitor/cli
2. npx cap init com.tuapp.app "TuApp" --webDir dist
3. npx cap add android
4. npm run build
5. npx cap sync
6. npx cap open android
7. Android Studio → Build APK`)])])],-1)],64))}});export{D as default};