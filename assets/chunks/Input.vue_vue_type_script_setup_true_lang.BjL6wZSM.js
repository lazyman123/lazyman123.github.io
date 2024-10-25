import{d as D,a9 as O,p,h as B,q as T,o as l,c as t,F as U,r as f,e as n,j as C,a2 as P,aa as j,K as F,k as I,b as y,Z as q,ab as E,n as K,P as S}from"./framework.BH2IEcjY.js";import{_ as h}from"./Icon.vue_vue_type_script_setup_true_lang.CCJQqvXi.js";const Z={key:0,class:"x-input__prepend"},G={class:"x-input__wrapper"},H={key:0,class:"x-input__prefix"},J=["type","disabled","readonly","autocomplete","placeholder","autofocus","form"],L={key:1,class:"x-input__append"},Q=["disabled","readonly","autocomplete","placeholder","autofocus","form"],Y=D({name:"xInput",inheritAttrs:!1,__name:"Input",props:{type:{default:"text"},modelValue:null,size:null,disabled:{type:Boolean},clearable:{type:Boolean},showPassword:{type:Boolean},placeholder:null,readonly:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},form:null},emits:["update:modelValue","input","change","focus","blur","clear"],setup(e,{expose:z,emit:M}){const u=e,o=M,x=O(),s=p(u.modelValue),i=p(!1),d=p(!1),r=p(),k=B(()=>u.clearable&&!u.disabled&&!!s.value&&i.value),m=B(()=>u.showPassword&&!u.disabled&&!!s.value),w=()=>{d.value=!d.value},A=()=>{},N=async()=>{await S(),r.value.focus()},b=()=>{o("update:modelValue",s.value),o("input",s.value)},g=()=>{o("change",s.value)},$=a=>{i.value=!0,o("focus",a)},V=a=>{console.log("blur triggered"),i.value=!1,o("blur",a)},R=()=>{console.log("clear triggered"),s.value="",o("update:modelValue",""),o("clear"),o("input",""),o("change","")};return T(()=>u.modelValue,a=>{s.value=a}),z({ref:r}),(a,c)=>(l(),t("div",{class:K(["x-input",{[`x-input--${e.type}`]:e.type,[`x-input--${e.size}`]:e.size,"is-disabled":e.disabled,"is-prepend":a.$slots.prepend,"is-append":a.$slots.append,"is-prefix":a.$slots.prefix,"is-suffix":a.$slots.suffix,"is-focus":i.value}])},[e.type!=="textarea"?(l(),t(U,{key:0},[a.$slots.prepend?(l(),t("div",Z,[f(a.$slots,"prepend")])):n("",!0),C("div",G,[a.$slots.prefix?(l(),t("span",H,[f(a.$slots,"prefix")])):n("",!0),P(C("input",F({class:"x-input__inner",type:e.showPassword?d.value?"text":"password":e.type,ref_key:"inputRef",ref:r},I(x),{disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":c[0]||(c[0]=v=>s.value=v),onInput:b,onChange:g,onFocus:$,onBlur:V}),null,16,J),[[j,s.value]]),a.$slots.suffix||k.value||m.value?(l(),t("span",{key:1,class:"x-input__suffix",onClick:N},[f(a.$slots,"suffix"),k.value?(l(),y(h,{key:0,icon:"circle-xmark",class:"x-input__clear",onClick:R,onMousedown:q(A,["prevent"])})):n("",!0),m.value&&d.value?(l(),y(h,{key:1,icon:"eye",class:"x-input__password",onClick:w})):n("",!0),m.value&&!d.value?(l(),y(h,{key:2,icon:"eye-slash",class:"x-input__password",onClick:w})):n("",!0)])):n("",!0)]),a.$slots.append?(l(),t("div",L,[f(a.$slots,"append")])):n("",!0)],64)):P((l(),t("textarea",F({key:1,class:"x-textarea__wrapper"},I(x),{ref_key:"inputRef",ref:r,disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":c[1]||(c[1]=v=>s.value=v),onInput:b,onChange:g,onFocus:$,onBlur:V}),null,16,Q)),[[E,s.value]])],2))}});export{Y as _};
