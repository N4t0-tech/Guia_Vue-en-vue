import{t as e}from"./CodeBlock-DpXj1NaB.js";import{A as t,M as n,R as r,_ as i,a,d as o,f as s,g as c,h as l,j as u,m as d,o as f,p,s as m,u as h,v as g,w as _,y as v}from"./index-OKjGQV9p.js";var y={class:`demo`},b={key:0,style:{color:`#e74c3c`,"font-size":`0.85rem`,"margin-top":`0.2rem`}},x={key:0,style:{color:`#e74c3c`,"font-size":`0.85rem`,"margin-top":`0.2rem`}},S={style:{display:`flex`,"align-items":`center`,gap:`0.5rem`,cursor:`pointer`}},C=[`disabled`],w={key:1,class:`card`},T={style:{"margin-top":`0.5rem`,"font-size":`0.85rem`}},E=`<!-- Texto -->
<input v-model="name" placeholder="Nombre" />

<!-- Número -->
<input type="number" v-model.number="age" />

<!-- Checkbox -->
<input type="checkbox" v-model="agree" /> Acepto términos

<!-- Select -->
<select v-model="country">
  <option value="">Seleccioná...</option>
  <option value="ar">Argentina</option>
  <option value="mx">México</option>
</select>

<!-- Textarea -->
<textarea v-model="bio" />`,D=`const errors = reactive({
  name: '',
  email: ''
})

function validate() {
  let valid = true
  if (!form.name.trim()) {
    errors.name = 'El nombre es obligatorio'
    valid = false
  } else {
    errors.name = ''
  }
  // ...
  return valid
}`,O=`async function handleSubmit() {
  if (!validate()) return

  loading.value = true
  try {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    alert('Guardado con éxito')
  } catch (e) {
    error.value = 'Error al guardar'
  } finally {
    loading.value = false
  }
}`,k=v({__name:`11-Formularios`,setup(v){let k=u({name:``,email:``,age:null,country:``,agree:!1,bio:``}),A=u({name:``,email:``}),j=n(!1),M=n(!1);s(()=>k.name.trim().length>0&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(k.email)&&k.agree);function N(){let e=!0;return k.name.trim()?A.name=``:(A.name=`El nombre es obligatorio`,e=!1),k.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(k.email)?A.email=``:(A.email=`Email inválido`,e=!1):(A.email=`El email es obligatorio`,e=!1),e}function P(){N()&&(M.value=!0,setTimeout(()=>{j.value=!0,M.value=!1},1e3))}return(n,s)=>(_(),l(o,null,[s[20]||=p(`h1`,null,`Formularios`,-1),s[21]||=p(`p`,null,[i(` Vue hace que trabajar con formularios sea muy cómodo gracias a `),p(`code`,null,`v-model`),i(`. Con el modificador `),p(`code`,null,`.number`),i(` o `),p(`code`,null,`.trim`),i(` podés controlar el tipo de dato que se enlaza. `)],-1),p(`section`,null,[s[7]||=p(`h2`,null,`Binding con v-model`,-1),g(e,{code:E,lang:`html`,title:`Tipos de input con v-model`})]),p(`section`,null,[s[8]||=p(`h2`,null,`Validación básica`,-1),g(e,{code:D,lang:`typescript`,title:`Validación manual`})]),p(`section`,null,[s[9]||=p(`h2`,null,`Submit y petición`,-1),g(e,{code:O,lang:`typescript`,title:`Manejo del submit`})]),p(`section`,null,[s[19]||=p(`h2`,null,`Demo: Formulario completo`,-1),p(`div`,y,[s[18]||=p(`div`,{class:`demo-title`},`Formulario con validación`,-1),j.value?(_(),l(`div`,w,[s[17]||=p(`p`,null,`✅ Formulario enviado con éxito`,-1),p(`pre`,T,r(JSON.stringify(k,null,2)),1),p(`button`,{class:`secondary`,onClick:s[6]||=e=>j.value=!1,style:{"margin-top":`0.5rem`}},`Reiniciar`)])):(_(),l(`form`,{key:0,onSubmit:h(P,[`prevent`]),style:{display:`flex`,"flex-direction":`column`,gap:`1rem`}},[p(`div`,null,[s[10]||=p(`label`,{style:{display:`block`,"margin-bottom":`0.3rem`,"font-weight":`600`}},`Nombre`,-1),t(p(`input`,{"onUpdate:modelValue":s[0]||=e=>k.name=e,placeholder:`Tu nombre`,style:{width:`100%`}},null,512),[[m,k.name,void 0,{trim:!0}]]),A.name?(_(),l(`p`,b,r(A.name),1)):d(``,!0)]),p(`div`,null,[s[11]||=p(`label`,{style:{display:`block`,"margin-bottom":`0.3rem`,"font-weight":`600`}},`Email`,-1),t(p(`input`,{"onUpdate:modelValue":s[1]||=e=>k.email=e,type:`email`,placeholder:`email@ejemplo.com`,style:{width:`100%`}},null,512),[[m,k.email]]),A.email?(_(),l(`p`,x,r(A.email),1)):d(``,!0)]),p(`div`,null,[s[12]||=p(`label`,{style:{display:`block`,"margin-bottom":`0.3rem`,"font-weight":`600`}},`Edad`,-1),t(p(`input`,{"onUpdate:modelValue":s[2]||=e=>k.age=e,type:`number`,placeholder:`18`,style:{width:`100%`}},null,512),[[m,k.age,void 0,{number:!0}]])]),p(`div`,null,[s[14]||=p(`label`,{style:{display:`block`,"margin-bottom":`0.3rem`,"font-weight":`600`}},`País`,-1),t(p(`select`,{"onUpdate:modelValue":s[3]||=e=>k.country=e,style:{width:`100%`}},[...s[13]||=[c(`<option value="">Seleccioná...</option><option value="ar">Argentina</option><option value="mx">México</option><option value="es">España</option><option value="co">Colombia</option>`,5)]],512),[[f,k.country]])]),p(`div`,null,[s[15]||=p(`label`,{style:{display:`block`,"margin-bottom":`0.3rem`,"font-weight":`600`}},`Bio`,-1),t(p(`textarea`,{"onUpdate:modelValue":s[4]||=e=>k.bio=e,placeholder:`Contá algo sobre vos...`,rows:`3`,style:{width:`100%`,resize:`vertical`}},null,512),[[m,k.bio]])]),p(`div`,null,[p(`label`,S,[t(p(`input`,{type:`checkbox`,"onUpdate:modelValue":s[5]||=e=>k.agree=e},null,512),[[a,k.agree]]),s[16]||=i(` Acepto los términos y condiciones `,-1)])]),p(`button`,{type:`submit`,class:`primary`,disabled:M.value,style:{"align-self":`flex-start`}},r(M.value?`Enviando...`:`Enviar`),9,C)],32))])]),s[22]||=c(`<section><h2>Consejos</h2><ul><li>Usá <code>v-model.trim</code> y <code>v-model.number</code> para normalizar datos</li><li>Creá un <strong>composable useForm</strong> si tenés muchos formularios</li><li>Para validación compleja, considerá <a href="https://vee-validate.logaretm.com/v4/" target="_blank" rel="noopener">VeeValidate</a> o <a href="https://zod.dev" target="_blank" rel="noopener">Zod</a></li><li>Deshabilitá el botón de submit mientras se envía para evitar envíos duplicados</li></ul></section>`,1)],64))}});export{k as default};