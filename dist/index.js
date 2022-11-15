"use strict";(()=>{function s(t,r,e){if(t==="success"?$(".alert-banner").css("background-color","#198754"):t==="error"&&$(".alert-banner").css("background-color","#dc3545"),e){let a=$(".alert-list");a.empty(),e.forEach(o=>{a.append($("<li>").text(o))}),a.show(),$(".alert-text-block").hide()}else $(".alert-banner > .alert-text-block > strong").text(r),$(".alert-list").hide(),$(".alert-text-block").show();$(".alert-banner").show(),setTimeout(function(){$(".alert-banner").hide()},5e3)}function Z(){document.getElementById("loading-screen").style.display="none"}var x,M,T,R,q,k,K;window.numberPerPage;var Y;window.currentPage=1;window.numberOfPages;function $e(t){t==="hair"?(x=document.querySelectorAll(".hair-collection-wrapper.black .hair-style-container"),M=document.querySelectorAll(".hair-collection-wrapper.blonde .hair-style-container"),T=document.querySelectorAll(".hair-collection-wrapper.brown .hair-style-container"),R=document.querySelectorAll(".hair-collection-wrapper.red .hair-style-container"),q=document.querySelectorAll(".hair-collection-wrapper.white .hair-style-container"),K=x.length):(k=document.querySelectorAll(`.${t}-collection-wrapper .character-item-container`),K=k.length),window.numberOfPages=Math.ceil(K/window.numberPerPage)}function ve(t){let r;if(t==="hair"){switch(window.hairColour){case"black":r=x;break;case"blonde":r=M;break;case"brown":r=T;break;case"red":r=R;break;case"white":r=q;break}r==null||r.forEach((e,a)=>{e.querySelector('input[name="hair-style"]').checked&&(Y=a)})}else{let e;switch(t){case"skin":e="skin-tone";break;case"mask":e="mask";break;case"special":e="special";break}k==null||k.forEach((a,o)=>{a.querySelector(`input[name="${e}"]`).checked&&(Y=o)})}window.currentPage=Math.ceil((Y+1)/9)}function p(t,r){$e(r),t||ve(r);let e=(window.currentPage-1)*window.numberPerPage,a=e+window.numberPerPage;if(r==="hair"){var o=Array.prototype.slice.call(x,e,a),n=Array.prototype.slice.call(M,e,a),i=Array.prototype.slice.call(T,e,a),c=Array.prototype.slice.call(R,e,a),m=Array.prototype.slice.call(q,e,a);w(x),w(M),w(T),w(R),w(q),u(o),u(n),u(i),u(c),u(m)}else{var f=Array.prototype.slice.call(k,e,a);w(k),u(f)}function u(I){[].forEach.call(I,function(S){S.style.display="block"})}function w(I){[].forEach.call(I,function(S){S.style.display="none"})}}function g(){return Snipcart.store.getState().customer.status==="SignedIn"?Snipcart.store.getState().customer.email:""}function V(){Snipcart.store.getState().customer.status==="SignedIn"?($(".nav-login-btn").html("Profile"),$(".select-character").show(),$(".new-character-button").show(),$(".character-selector-mobile-controls").show(),$(".character-selector-container").show()):($(".nav-login-btn").html("Sign In"),$(".select-character").hide(),$(".new-character-button").hide(),$(".character-selector-mobile-controls").hide(),$(".character-selector-container").hide())}function A(t,r,e){let a=[];return(t.length>e||t.length<r)&&a.push(`Your input must be between ${r} and ${e} characters!`),/^([a-zA-Z0-9 !,.?]+)$/.test(t)||a.push("Invalid character detected! Allowed characters: [a-z, 0-9, !,.?]"),!Array.isArray(a)||!a.length?!0:(s("error","",a),!1)}function ee(){let t=Snipcart.store.getState().customer.status==="SignedIn",r="";if(t){let e=g();_(e).then(o=>{if(P(),o.length>0){let n=o.reduce((i,c)=>i.fields.MODIFIED_AT>c.fields.MODIFIED_AT?i:c);H(n.fields)}else B()})}else r=z(),r.then(e=>{H(e.fields)})}function H(t){sessionStorage.setItem("currentCharacterName",t.NAME),sessionStorage.setItem("currentCharacterId",t.RECORD_ID);let r=t.HAIR.split("-"),e=t.SIDEKICK.split("-");$("input[value="+r[1]+"]").prop("checked",!0),$("input[value="+t.HAIR+"]").prop("checked",!0),$("input[value="+t.EYES+"]").prop("checked",!0),$("input[value="+t.SKIN+"]").prop("checked",!0),$("input[value="+t.COSTUME+"]").prop("checked",!0),$("input[value="+t.MASK+"]").prop("checked",!0),$("input[value="+t.CAPE+"]").prop("checked",!0),$("input[value="+t.SPECIAL+"]").prop("checked",!0),$("input[value="+t.SIDEKICK+"]").prop("checked",!0),$("input[value=sk-"+e[1]+"]").prop("checked",!0),$("input[value="+t.COVER_COLOUR+"]").prop("checked",!0),$("#hero-name-input").val(t.NAME),$("input[value="+t.PRONOUNS+"]").prop("checked",!0),$("input[value="+t.LANGUAGE+"]").prop("checked",!0),te()}function te(){window.getSelectedStyles(),O(),j(function(){p(void 0,window.stepName)}),d(function(){Z()})}function re(){let t=$("#hero-name-input").val();if(!A(t,2,50))return;if(Snipcart.store.getState().customer.status==="SignedIn"){let a=sessionStorage.getItem("currentCharacterId");sessionStorage.setItem("currentCharacterName",t),a===null?F(s("success",`${t} was saved successfully!`)):L(s("success",`${t} was saved successfully!`)),P()}else s("error","You must sign in to save a character.")}function B(){$(".name-input").val("");let t=l('input[name="hair-colour"]'),r=l('input[name="hair-style"]'),e=l('input[name="Eye-Colour"]'),a=l('input[name="skin-tone"]'),o=l('input[name="costume"]'),n=l('input[name="mask"]'),i=l('input[name="cape"]'),c=l('input[name="special"]'),m=l('input[name="sidekick-colour"]'),f=l('input[name="sidekick"]'),u=l('input[name="cover"]');$('input[name="hair-colour"]').eq(t).prop("checked",!0),$('input[name="hair-style"]').eq(r).prop("checked",!0),$('input[name="Eye-Colour"]').eq(e).prop("checked",!0),$('input[name="skin-tone"]').eq(a).prop("checked",!0),$('input[name="costume"]').eq(o).prop("checked",!0),$('input[name="mask"]').eq(n).prop("checked",!0),$('input[name="cape"]').eq(i).prop("checked",!0),$('input[name="special"]').eq(c).prop("checked",!0),$('input[name="sidekick-colour"]').eq(m).prop("checked",!0),$('input[name="sidekick"]').eq(f).prop("checked",!0),$('input[name="cover"]').eq(u).prop("checked",!0),sessionStorage.clear(),te()}function d(t){if(styleColourId)$(".hair:visible").first().hide(),$("."+styleColourId).show();else{let{length:r}=$(".hair").length,e=Math.floor(Math.random()*r);$(".hair").eq(e).show()}if(eyesId)$(".eyes:visible").first().hide(),$("."+eyesId).show();else{let{length:r}=$(".eyes").length,e=Math.floor(Math.random()*r);$(".eyes").eq(e).show()}if(skinToneId)$(".skintone:visible").first().hide(),$("."+skinToneId).show();else{let{length:r}=$(".skintone").length,e=Math.floor(Math.random()*r);$(".skintone").eq(e).show()}if(costumeId)$(".costume:visible").first().hide(),$(".sidekick-costume:visible").first().hide(),$("."+costumeId).show(),$(`.${sidekickId}-${costumeId}`).show();else{let{length:r}=$(".costume").length,e=Math.floor(Math.random()*r);$(".costume").eq(e).show()}if(maskId)$(".mask:visible").first().hide(),$(".sidekick-mask:visible").first().hide(),$("."+maskId).show(),$(`.${sidekickId}-${maskId}`).show();else{let{length:r}=$(".mask").length,e=Math.floor(Math.random()*r);$(".mask").eq(e).show()}if(capeId)$(".cape:visible").first().hide(),$(".sidekick-cape:visible").first().hide(),$("."+capeId).show(),$(`.${sidekickId}-${capeId}`).show();else{let{length:r}=$(".cape").length,e=Math.floor(Math.random()*r);$(".cape").eq(e).show()}if(specialId)$(".special:visible").first().hide(),$("."+specialId).show();else{let{length:r}=$(".special").length(),e=Math.floor(Math.random()*r);$(".special").eq(e).show()}if(sidekickColourId)$(".sidekick:visible").first().hide(),$("."+sidekickColourId).show();else{let{length:r}=$(".sidekick").length,e=Math.floor(Math.random()*r);$(".sidekick").eq(e).show()}if(coverId)$(".cover:visible").first().hide(),$("."+coverId).show();else{let{length:r}=$(".cover").length,e=Math.floor(Math.random()*r);$(".cover").eq(e).show()}t&&t()}function ae(){oe().then(Ie).then(ie).then(window.randomiseOrLoadCharacter)}function oe(t){return fetch(`https://make-believe-final.webflow.io/character-items${t||""}`).then(r=>{if(r.status===404)throw new Error("Page could not be found.");return r.text()}).then(r=>{let e=document.createElement("div");e.innerHTML=r;let a=e.querySelectorAll(".character-items"),o=Array.from(a).map(i=>{let c={};return i.querySelectorAll("span").forEach(f=>{c[f.className]=f.textContent}),c});characterObjects=characterObjects.concat(o);let n=e.querySelector(".w-pagination-next");return n?oe(`?${n.href.split("?")[1]}`):characterObjects})}function Ie(){let t=document.querySelector(".character-preview");characterObjects.forEach(r=>{let e=document.createElement("div");e.classList.add("character-item");let a=document.createElement("div");a.classList.add("character-item-category");let o=document.createTextNode(r["character-item-category"]);a.appendChild(o);let n=document.createElement("div");n.classList.add("character-item-preview-label");let i=document.createTextNode(r["character-item-preview-label"]);n.appendChild(i);let c=document.createElement("img");c.classList.add("character-item-preview-image"),c.src=r["character-item-preview-image"],e.appendChild(a),e.appendChild(n),e.appendChild(c),t.appendChild(e)})}function se(){$("form#character-creation-form :input").each(function(){let t=$(this).closest("label").find("span").html();$(this).val(t)})}function ie(){$(".character-item").each(function(){let t=$(this).find(".character-item-preview-label").text(),r=$(this).find(".character-item-category").text().toLowerCase();$(this).find(".character-item-preview-image").addClass(t).addClass(r)})}function de(){$(".book-controls").each(function(){$(this).attr("id").slice(0,-9)===selectedBook?$(this).css("display","flex"):$(this).hide()})}function l(t){let{length:r}=$(t);return Math.floor(Math.random()*r)}function W(t){$("#step-"+formStep+"-button").prop("disabled",!1).removeClass("selected-form-step"),$(t).prop("disabled",!0).addClass("selected-form-step")}function P(){let t=g(),r=_(t),e=$(".character-selector-list"),a=$(".character-dropdown-list");e.empty(),a.empty(),r.then(o=>{$.each(o,function(){var n=$("<div/>",{class:"character-list-item-container"}),i=$("<div/>",{class:"character-list-item",id:this.id,text:this.fields.NAME}),c=$("<div/>",{class:"character-list-item-delete",id:this.id,text:"X"});n.append(i),n.append(c),n.clone().appendTo(e),n.clone().appendTo(a)}),$(".w-dropdown-list div").click(function(){console.log("hi"),$(".dropdown").triggerHandler("w-close.w-dropdown")}),$(".character-list-item").click(function(n){n.preventDefault(),n.stopPropagation();let i=$(this).attr("id");z(i).then(m=>{H(m.fields)})}),$(".character-list-item-delete").click(function(n){n.preventDefault(),n.stopPropagation();let i=$(this).attr("id"),c=$(this).parent().find(".character-list-item").text();if(sessionStorage.getItem("currentCharacterId")===i){s("error","You cannot delete a character that is currently loaded.");return}ue(i,c),$(`#${i}`).parent().remove()})})}function O(){hairColour=$("input[name=hair-colour]:checked","#character-creation-form").val().toLowerCase(),sidekickColour=$("input[name=sidekick-colour]:checked","#character-creation-form").val().toLowerCase(),sidekickColour=sidekickColour.substr(3),$(".hair-collection-wrapper").each(function(){$(this).attr("class").includes(hairColour)?$(this).show():$(this).hide()}),$(".sidekick-container :input").each(function(){$(this).val().includes(sidekickColour)?$(this).closest(".sidekick-container").show():$(this).closest(".sidekick-container").show().hide()})}function v(){styleColourId=hairstyleId+"-"+hairColour.toLowerCase(),sidekickColourId=sidekickId+"-"+sidekickColour.toLowerCase()}function j(t){v(),$('input[value="'+styleColourId+'"]').prop("checked",!0),t&&t()}function le(t){v(),$('input[value="'+sidekickColourId+'"]').prop("checked",!0),t&&t()}function _(t){var r=new Headers;r.append("Content-Type","application/json");var e={method:"get",headers:r,redirect:"follow"};return fetch(`https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters&filterByFormula=USER_EMAIL="${t}"&t=${Date.now()}`,e).then(o=>o.text()).then(o=>(o=JSON.parse(o),o.records.slice(Math.max(o.records.length-5,0)))).catch(o=>console.log("error",o))}function z(t){let r=t||sessionStorage.getItem("currentCharacterId"),e=new Headers;e.append("Content-Type","application/json");let a={method:"get",headers:e,redirect:"follow"};return fetch(`https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters&filterByFormula={RECORD_ID}="${r}"&t=${Date.now()}`,a).then(n=>n.json()).then(n=>n.records[0]).catch(n=>console.log("error",n))}function he(){let t=[{CHARACTER_ID:sessionStorage.getItem("currentCharacterId"),BOOK_ID:window.selectedBook,SESSION_ID:localStorage.getItem("sessionId"),USER_EMAIL:g(),PRONOUNS:window.pronouns,LANGUAGE:window.language,DEDICATION_MESSAGE:window.dedicationMessage}],r=new Headers;r.append("Content-Type","application/json");let e={method:"post",headers:r,redirect:"follow",body:JSON.stringify(t)};fetch("https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Previews",e).then(a=>a.json()).then(a=>{window.currentPreviewId=`1000${a[0].fields.PREVIEW_ID}`,fetch(`https://hook.eu1.make.com/0kxggab30625jvpqkvviz6fo9dvxzryf?string=P-${encodeURIComponent(a[0].fields.RECORD_ID)}-CHOSEN`)}).catch(a=>console.log("error",a))}function F(t){let r=[{NAME:$("#hero-name-input").val(),USER_EMAIL:g(),HAIR:styleColourId,EYES:eyesId,SKIN:skinToneId,COSTUME:costumeId,MASK:maskId,CAPE:capeId,SPECIAL:specialId,SIDEKICK:sidekickColourId,COVER_COLOUR:coverId}],e=new Headers;e.append("Content-Type","application/json");let a={method:"post",headers:e,redirect:"follow",body:JSON.stringify(r)};return fetch("https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters",a).then(n=>n.json()).then(n=>(fetch(`https://hook.eu1.make.com/0kxggab30625jvpqkvviz6fo9dvxzryf?string=C-${encodeURIComponent(n[0].fields.RECORD_ID)}-CREATED`),sessionStorage.setItem("currentCharacterId",n[0].fields.RECORD_ID),t&&t(),n[0])).catch(n=>console.log("error",n))}function L(t){let r=[{id:sessionStorage.getItem("currentCharacterId"),fields:{NAME:$("#hero-name-input").val(),USER_EMAIL:g(),HAIR:styleColourId,EYES:eyesId,SKIN:skinToneId,COSTUME:costumeId,MASK:maskId,CAPE:capeId,SPECIAL:specialId,SIDEKICK:sidekickColourId,COVER_COLOUR:coverId}}],e=new Headers;e.append("Content-Type","application/json");let a={method:"put",headers:e,redirect:"follow",body:JSON.stringify(r)};fetch("https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters",a).then(o=>o.json()).then(o=>{fetch(`https://hook.eu1.make.com/0kxggab30625jvpqkvviz6fo9dvxzryf?string=C-${sessionStorage.getItem(encodeURIComponent("currentCharacterId"))}-MODIFIED`),t&&t()}).catch(o=>console.log("error",o))}function ue(t,r){var e=new Headers;e.append("Content-Type","application/json");var a={method:"delete",headers:e,redirect:"follow",body:JSON.stringify([t])};fetch("https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=characters",a).then(o=>o.text()).then(s("success",`${r} was successfully deleted!`)).catch(o=>console.log("error",o))}function Se(){return localStorage.getItem("sessionId")}function pe(){if(Se()===null){let t=uuidv4();localStorage.setItem("sessionId",t)}}function D(){$(".book-preview-container").hide(),$(".book-selector-container").hide(),$(".book-large-container").hide(),$(".character-builder-container").show(),$(".book-preview-container").hide(),$(".basket-confirmation-container").hide()}function G(){$(".book-preview-container").hide(),$(".book-selector-container").show(),$(".book-small-list-container").show(),$(".book-large-container").hide(),$(".character-builder-container").hide(),$(".book-preview-container").hide(),$(".basket-confirmation-container").hide()}function me(){$(".book-preview-container").hide(),$(".book-selector-container").hide(),$(".book-small-list-container").hide(),$(".book-large-container").hide(),$(".character-builder-container").hide(),$(".book-preview-container").show(),$(".basket-confirmation-container").hide()}function we(){$(".book-preview-container").hide(),$(".book-selector-container").hide(),$(".book-small-list-container").hide(),$(".book-large-container").hide(),$(".character-builder-container").hide(),$(".book-preview-container").hide(),$(".basket-confirmation-container").show()}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{window.formStep=1,window.stepName="hair",window.hairstyleId="",window.hairColour="",window.styleColourId=hairstyleId+"-"+hairColour,window.eyesId="",window.skinToneId="",window.costumeId="",window.maskId="",window.capeId="",window.specialId="",window.sidekickId="",window.sidekickColour="",window.sidekickColourId=sidekickId+"-"+sidekickColour,window.coverId="",window.userId="",window.sessionId="",window.sessionRow="",window.selectedBook="",window.currentCharacterName="",window.pronouns="",window.language="",window.dedicationMessage="",window.characterObjects=[],window.currentPreviewId="",window.SnipcartSettings={publicApiKey:"NzAxOWMzODUtNmVjNS00NmEyLTlkNDktNDZhOTllYzIzMjkxNjM3OTc2MjY0NTYxOTc2NzY3",modalStyle:"side",currency:"gbp"},(()=>{var e,a;(a=(e=window.SnipcartSettings).version)!=null||(e.version="3.0");var o,n;(n=(o=window.SnipcartSettings).timeoutDuration)!=null||(o.timeoutDuration=2750);var i,c;(c=(i=window.SnipcartSettings).domain)!=null||(i.domain="cdn.snipcart.com");var m,f;(f=(m=window.SnipcartSettings).protocol)!=null||(m.protocol="https");var u=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,w=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=y,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",I):I();function I(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(w.forEach(h=>document.addEventListener(h,y)),setTimeout(y,window.SnipcartSettings.timeoutDuration)):y()}var S=!1;function y(){if(S)return;S=!0;let h=document.getElementsByTagName("head")[0],C=document.querySelector("#snipcart"),E=document.querySelector(`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`),b=document.querySelector(`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`);C||(C=document.createElement("div"),C.id="snipcart",C.setAttribute("hidden","true"),document.body.appendChild(C)),fe(C),E||(E=document.createElement("script"),E.src=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`,E.async=!0,h.appendChild(E)),b||(b=document.createElement("link"),b.rel="stylesheet",b.type="text/css",b.href=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`,h.prepend(b)),w.forEach(ge=>document.removeEventListener(ge,y))}function fe(h){!u||(h.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(h.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(h.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(h.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(h.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})(),$(document).ready(function(){document.addEventListener("snipcart.ready",()=>{window.location.pathname==="/"&&Snipcart.events.on("snipcart.initialized",i=>{V()}),window.location.href.indexOf("character-creation")>-1&&(Snipcart.events.on("customer.signedin",i=>{$(".nav-login-btn").html("Profile"),$(".select-character").show(),$(".new-character-button").show(),$(".character-selector-mobile-controls").show(),$(".character-selector-container").show(),window.randomiseOrLoadCharacter()}),Snipcart.events.on("customer.signedout",i=>{sessionStorage.clear(),$(".nav-login-btn").html("Sign In"),$(".select-character").hide(),$(".new-character-button").hide(),$(".character-selector-mobile-controls").hide(),$(".character-selector-container").hide(),window.randomiseOrLoadCharacter()}),Snipcart.events.on("snipcart.initialized",i=>{D(),V(),W("#step-1-button"),se(),ae()}));var e=200,a=!0,o=function(){a&&(window.innerWidth<=767?window.numberPerPage=3:window.numberPerPage=9,p(void 0,window.stepName),a=!1)},n=setInterval(o,e);o(),$(window).resize(function(){a=!0})})});let t=new MasterPlan(document.getElementById("masterplan"),{clientID:"5140",jobID:window.currentPreviewId,theme:"light",embedType:"frame",thumbWidth:"300",hideNavBar:!0,autoFullscreen:!0,showLoginLink:!1,clientNameLink:!1,showSpreadNums:!1,customCss:{nestedToc:!0}});window.randomiseOrLoadCharacter=function(){let e=Snipcart.store.getState().customer.status==="SignedIn";$('input[name="fname"]').val()||(sessionStorage.getItem("currentCharacterId")===null&&!e?B():ee())},window.getSelectedStyles=function(){let a=$("input[name=hair-style]:checked","#character-creation-form").val(),o=$("input[name=sidekick]:checked","#character-creation-form").val();hairstyleId=a.slice(0,5),eyesId=$("input[name=Eye-Colour]:checked","#character-creation-form").val().toLowerCase(),skinToneId=$("input[name=skin-tone]:checked","#character-creation-form").val().toLowerCase(),costumeId=$("input[name=costume]:checked","#character-creation-form").val().toLowerCase(),maskId=$("input[name=mask]:checked","#character-creation-form").val().toLowerCase(),capeId=$("input[name=cape]:checked","#character-creation-form").val().toLowerCase(),specialId=$("input[name=special]:checked","#character-creation-form").val().toLowerCase(),sidekickId=o.slice(0,5),coverId=$("input[name=cover]:checked","#character-creation-form").val().toLowerCase()},$(".pagination-down-arrow").click(function(){window.currentPage!==window.numberOfPages&&(window.currentPage+=1,p(window.currentPage,window.stepName))}),$(".pagination-up-arrow").click(function(){window.currentPage!==1&&(window.currentPage-=1,p(window.currentPage,window.stepName))}),$(".save-character-button").click(function(e){e.stopPropagation(),e.preventDefault(),re()}),$(".new-character-button, .new-character-button-large").click(function(e){e.preventDefault(),e.stopPropagation(),D(),B()}),$(".checkout-button").click(function(e){e.preventDefault(),e.stopPropagation(),window.location.hash||(window.location.hash="#/checkout")});function r(e,a){a.preventDefault();let o;switch(e){case"1":o="#F080B2",window.stepName="hair",p(void 0,"hair");break;case"2":o="#01AFDA";break;case"3":o="#77B82A",window.stepName="skin",p(void 0,"skin");break;case"4":o="#FCD100";break;case"5":o="#E84E10",window.stepName="mask",p(void 0,"mask");break;case"6":o="#01A187";break;case"7":o="#E30613",window.stepName="special",p(void 0,"special");break;case"8":o="#E30F6B";break;case"9":o="#0072BB";break}W(`#step-${e}-button`),$(`.form-step-${e}-container`).fadeIn("slow"),$(`.form-step-${formStep}-container`).css({display:"none"}),$(`<style>[type=radio]:checked + img { box-shadow: 0px 0px 0px 5px ${o};}</style>`).appendTo("head"),$("<style>[type=radio]:not(:checked) + img { box-shadow: none; }</style>").appendTo("head"),formStep=e}$(".step-button").click(function(e){let a=$(this).attr("id").match(/(\d+)/)[0];r(a,e)}),$('input[name="hair-colour"]').change(function(e){O(),j(),v(),d()}),$("input[name=hair-style]").change(function(e){getSelectedStyles(),v(),d()}),$("input[name=Eye-Colour]").change(function(e){eyesId=$("input[name=Eye-Colour]:checked","#character-creation-form").val().toLowerCase(),d()}),$("input[name=skin-tone]").change(function(e){skinToneId=$("input[name=skin-tone]:checked","#character-creation-form").val().toLowerCase(),d()}),$("input[name=costume]").change(function(e){costumeId=$("input[name=costume]:checked","#character-creation-form").val().toLowerCase(),d()}),$("input[name=mask]").change(function(e){maskId=$("input[name=mask]:checked","#character-creation-form").val().toLowerCase(),d()}),$("input[name=cape]").change(function(e){capeId=$("input[name=cape]:checked","#character-creation-form").val().toLowerCase(),d()}),$("input[name=special]").change(function(e){specialId=$("input[name=special]:checked","#character-creation-form").val().toLowerCase(),d()}),$('input[name="sidekick-colour"]').change(function(e){O(),le(),v(),d()}),$("input[name=sidekick]").change(function(e){getSelectedStyles(),v(),d()}),$("input[name=cover]").change(function(e){coverId=$("input[name=cover]:checked","#character-creation-form").val().toLowerCase(),d()}),$("textarea#dedication").change(function(){window.dedicationMessage=$(this).val()}),$("input[name=pronoun]").change(function(){window.pronouns=$(this).val()}),$("input[name=language]").change(function(){window.language=$(this).val()}),$(".pick-a-book").click(function(e){if(e.preventDefault(),!A($("input[name=fname]").val(),2,50))return;let o=sessionStorage.getItem("currentCharacterId");sessionStorage.setItem("currentCharacterName",$("#hero-name-input").val()),o===null?F(s("success",`${$("#hero-name-input").val()} was saved successfully!`)):L(s("success",`${$("#hero-name-input").val()} was saved successfully!`)),P(),G()}),$(".edit-character-button").click(function(e){e.preventDefault(),$(".character-builder-container").show(),$(".book-selector-container").hide()}),$(".basket-confirmation_book-item").each(function(){let e=$(this).closest("div").find(".book-title").html().toLowerCase().replace(/ /g,"-");$(this).prop("id",e+"-basket-book")}),$(".book-container").each(function(){let e=$(this).closest("div").find(".book-title").html().toLowerCase().replace(/ /g,"-");$(this).prop("id",e+"-book")}),$(".book-container").click(function(e){e.preventDefault(),selectedBook=$(this).prop("id").slice(0,-5),$(".book-small-list-container").hide(),$(".book-large-container").each(function(){let a="large-"+selectedBook;$(this).attr("id")===a?$(this).show():$(this).hide()})}),$(".book-large-container").each(function(){let e=$(this).closest("div").find(".book-title").html().toLowerCase().replace(/ /g,"-");$(this).prop("id","large-"+e)}),$(".story-back-button").click(function(e){e.preventDefault(),e.stopPropagation(),$(".book-small-list-container").css("display","flex"),$(".book-large-container").hide()}),$(".see-your-story-button").click(function(e){e.preventDefault(),e.stopPropagation();var a=!0;if($("form#wf-form-pronouns-form :input:radio:visible").each(function(){var n=$(this).attr("name");$("input:radio[name="+n+"]:checked").length===0&&(a=!1)}),$("form#wf-form-language-form :input:radio:visible").each(function(){var n=$(this).attr("name");$("input:radio[name="+n+"]:checked").length===0&&(a=!1)}),!a){s("error","Please enter values for both pronouns and language!");return}if($(".textarea:visible").val()&&!A($(".textarea:visible").val(),0,300))return;pe(),de();let o={characterName:window.sessionStorage.getItem("currentCharacterName"),hairstyleId:window.styleColourId,eyesId:window.eyesId,skintoneId:window.skinToneId,costumeId:window.costumeId,maskId:window.maskId,capeId:window.capeId,specialId:window.specialId,sidekickId:window.sidekickColourId,coverId:window.coverId,pronouns:window.pronouns,language:window.language,dedicationMessage:window.dedicationMessage};$(".add-to-cart-btn").attr("data-item-custom1-value",window.sessionStorage.getItem("currentCharacterName")),$(".add-to-cart-btn").attr("data-item-custom2-value",window.sessionStorage.getItem("currentCharacterId")),$(".add-to-cart-btn").attr("data-item-custom3-value",JSON.stringify(o)),he(),L(),me()}),$(".edit-character").click(function(e){e.preventDefault(),D()}),$(".select-story").click(function(e){e.preventDefault(),G()}),$(".add-to-cart-btn").click(function(e){$(".basket-confirmation_book-item").each(function(){$(".character-name-span").text(sessionStorage.currentCharacterName);let a=`${selectedBook}-basket-book`;$(this).attr("id")===a?$(this).show():$(this).hide()}),we()}),$("#home-button").click(function(e){D()})});})();
