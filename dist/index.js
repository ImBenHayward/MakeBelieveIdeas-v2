"use strict";(()=>{function p(t,r){t==="success"?$(".alert-banner").css("background-color","#198754"):t==="error"&&$(".alert-banner").css("background-color","#dc3545"),$(".alert-banner > .alert-text-block > strong").text(r),$(".alert-banner").show(),setTimeout(function(){$(".alert-banner").hide()},5e3)}function h(){return Snipcart.store.getState().customer.status==="SignedIn"?Snipcart.store.getState().customer.email:""}function Y(){Snipcart.store.getState().customer.status==="SignedIn"?($(".nav-login-btn").html("Profile"),$(".select-character").show(),$(".new-character-button").show()):($(".nav-login-btn").html("Sign In"),$(".select-character").hide(),$(".new-character-button").hide())}function G(){$("form#character-creation-form :input").each(function(){let t=$(this).closest("label").find("span").html();$(this).val(t)})}function J(){$(".character-item").each(function(){let t=$(this).find(".character-item-preview-label").text(),r=$(this).find(".character-item-category").text().toLowerCase();$(this).find(".character-item-preview-image").addClass(t).addClass(r)})}function V(){$(".book-controls").each(function(){$(this).attr("id").slice(0,-9)===selectedBook?$(this).css("display","flex"):$(this).hide()})}function c(t){let{length:r}=$(t);return Math.floor(Math.random()*r)}function q(t){$("#step-"+formStep+"-button").prop("disabled",!1).removeClass("selected-form-step"),$(t).prop("disabled",!0).addClass("selected-form-step")}function v(){let t=h(),r=N(t),e=$(".w-dropdown-list");e.empty(),r.then(n=>{n=$.parseJSON(n),$.each(n.records,function(){e.append(`<a href="#" class="w-dropdown-link character-dropdown-link" tabindex="0" id="${this.id}">${this.fields.NAME}</a>`)})})}function C(){hairColour=$("input[name=hair-colour]:checked","#character-creation-form").val().toLowerCase(),sidekickColour=$("input[name=sidekick-colour]:checked","#character-creation-form").val().toLowerCase(),sidekickColour=sidekickColour.substr(3),console.log(sidekickColour),$(".hair-collection-wrapper").each(function(){$(this).attr("class").includes(hairColour)?$(this).show():$(this).hide()}),$(".sidekick-container :input").each(function(){$(this).val().includes(sidekickColour)?$(this).closest(".sidekick-container").show():$(this).closest(".sidekick-container").show().hide()})}function w(){styleColourId=hairstyleId+"-"+hairColour.toLowerCase(),sidekickColourId=sidekickId+"-"+sidekickColour.toLowerCase()}function M(t){w(),$('input[value="'+styleColourId+'"]').prop("checked",!0),t&&t()}function W(t){w(),$('input[value="'+sidekickColourId+'"]').prop("checked",!0),t&&t()}function N(t){var r=new Headers;r.append("Content-Type","application/json");var e={method:"get",headers:r,redirect:"follow"};return fetch(`https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters&filterByFormula=USER_EMAIL="${t}"&t=${Date.now()}`,e).then(o=>o.text()).then(o=>o).catch(o=>console.log("error",o))}function D(t){let r=t||sessionStorage.getItem("currentCharacterId"),e=new Headers;e.append("Content-Type","application/json");let n={method:"get",headers:e,redirect:"follow"};return fetch(`https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters&filterByFormula={RECORD_ID}="${r}"&t=${Date.now()}`,n).then(a=>a.json()).then(a=>a.records[0]).catch(a=>console.log("error",a))}function Z(){let t=[{CHARACTER_ID:sessionStorage.getItem("currentCharacterId"),BOOK_ID:window.selectedBook,SESSION_ID:localStorage.getItem("sessionId"),USER_EMAIL:h(),DEDICATION_MESSAGE:window.dedicationMessage}],r=new Headers;r.append("Content-Type","application/json");let e={method:"post",headers:r,redirect:"follow",body:JSON.stringify(t)};fetch("https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Previews",e).then(n=>n.json()).catch(n=>console.log("error",n))}function y(t){let r=[{NAME:$("#hero-name-input").val(),USER_EMAIL:h(),HAIR:styleColourId,EYES:eyesId,SKIN:skinToneId,COSTUME:costumeId,MASK:maskId,CAPE:capeId,SPECIAL:specialId,SIDEKICK:sidekickColourId,COVER_COLOUR:coverId,PRONOUNS:pronouns,LANGUAGE:language}],e=new Headers;e.append("Content-Type","application/json");let n={method:"post",headers:e,redirect:"follow",body:JSON.stringify(r)};return fetch("https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters",n).then(a=>a.json()).then(a=>(v(),sessionStorage.setItem("currentCharacterId",a[0].fields.RECORD_ID),t&&t(),a[0])).catch(a=>console.log("error",a))}function b(t){let r=[{id:sessionStorage.getItem("currentCharacterId"),fields:{NAME:$("#hero-name-input").val(),USER_EMAIL:h(),HAIR:styleColourId,EYES:eyesId,SKIN:skinToneId,COSTUME:costumeId,MASK:maskId,CAPE:capeId,SPECIAL:specialId,SIDEKICK:sidekickColourId,COVER_COLOUR:coverId,PRONOUNS:pronouns,LANGUAGE:language}}],e=new Headers;e.append("Content-Type","application/json");let n={method:"put",headers:e,redirect:"follow",body:JSON.stringify(r)};fetch("https://v1.nocodeapi.com/makebelieveme/airtable/nmeOnHAeFloOUpCL?tableName=Characters",n).then(o=>o.json()).then(t&&t()).catch(o=>console.log("error",o))}function Q(){document.getElementById("loading-screen").style.display="none"}var E,R,K,X;window.numberPerPage;var F;window.currentPage=1;window.numberOfPages;function de(){E=document.querySelectorAll(".hair-collection-wrapper.black .hair-style-container"),R=document.querySelectorAll(".hair-collection-wrapper.blonde .hair-style-container"),K=document.querySelectorAll(".hair-collection-wrapper.brown .hair-style-container"),X=E.length,window.numberOfPages=Math.ceil(X/window.numberPerPage)}function le(){window.hairColour==="black"&&E.forEach((t,r)=>{t.querySelector('input[name="hair-style"]').checked&&(F=r)}),window.hairColour==="blonde"&&R.forEach((t,r)=>{t.querySelector('input[name="hair-style"]').checked&&(F=r)}),window.currentPage=Math.ceil((F+1)/9)}function k(t){de(),t||le();let r=(window.currentPage-1)*window.numberPerPage,e=r+window.numberPerPage;var n=Array.prototype.slice.call(E,r,e),o=Array.prototype.slice.call(R,r,e),a=Array.prototype.slice.call(K,r,e);function i(u){[].forEach.call(u,function(m){m.style.display="block"})}function d(u){[].forEach.call(u,function(m){m.style.display="none"})}d(E),d(R),d(K),i(n),i(o),i(a)}function te(){let t=Snipcart.store.getState().customer.status==="SignedIn",r="";if(t){let e=h();N(e).then(o=>{if(o=$.parseJSON(o),v(),o.records.length>0){let a=o.records.reduce((i,d)=>i.fields.MODIFIED_AT>d.fields.MODIFIED_AT?i:d);T(a.fields)}else x()})}else r=D(),r.then(e=>{T(e.fields)})}function T(t){sessionStorage.setItem("currentCharacterName",t.NAME),sessionStorage.setItem("currentCharacterId",t.RECORD_ID);let r=t.HAIR.split("-"),e=t.SIDEKICK.split("-");$("input[value="+r[1]+"]").prop("checked",!0),$("input[value="+t.HAIR+"]").prop("checked",!0),$("input[value="+t.EYES+"]").prop("checked",!0),$("input[value="+t.SKIN+"]").prop("checked",!0),$("input[value="+t.COSTUME+"]").prop("checked",!0),$("input[value="+t.MASK+"]").prop("checked",!0),$("input[value="+t.CAPE+"]").prop("checked",!0),$("input[value="+t.SPECIAL+"]").prop("checked",!0),$("input[value="+t.SIDEKICK+"]").prop("checked",!0),$("input[value=sk-"+e[1]+"]").prop("checked",!0),$("input[value="+t.COVER_COLOUR+"]").prop("checked",!0),$("#hero-name-input").val(t.NAME),$("input[value="+t.PRONOUNS+"]").prop("checked",!0),$("input[value="+t.LANGUAGE+"]").prop("checked",!0),re()}function re(){window.getSelectedStyles(),C(),M(function(){k()}),s(function(){Q()})}function oe(){$(".name-input").val(""),x(),y()}function ne(){if(Snipcart.store.getState().customer.status==="SignedIn"){let r=sessionStorage.getItem("currentCharacterId");sessionStorage.setItem("currentCharacterName",$("#hero-name-input").val()),r===null?y(p("success",`${$("#hero-name-input").val()} was saved successfully!`)):b(p("success",`${$("#hero-name-input").val()} was saved successfully!`)),v()}else p("error","You must sign in to save a character.")}function x(){$(".name-input").val("");let t=c('input[name="hair-colour"]'),r=c('input[name="hair-style"]'),e=c('input[name="Eye-Colour"]'),n=c('input[name="skin-tone"]'),o=c('input[name="costume"]'),a=c('input[name="mask"]'),i=c('input[name="cape"]'),d=c('input[name="special"]'),u=c('input[name="sidekick-colour"]'),m=c('input[name="sidekick"]'),U=c('input[name="cover"]'),A=c('input[name="pronoun"]'),O=c('input[name="language"]');$('input[name="hair-colour"]').eq(t).prop("checked",!0),$('input[name="hair-style"]').eq(r).prop("checked",!0),$('input[name="Eye-Colour"]').eq(e).prop("checked",!0),$('input[name="skin-tone"]').eq(n).prop("checked",!0),$('input[name="costume"]').eq(o).prop("checked",!0),$('input[name="mask"]').eq(a).prop("checked",!0),$('input[name="cape"]').eq(i).prop("checked",!0),$('input[name="special"]').eq(d).prop("checked",!0),$('input[name="sidekick-colour"]').eq(u).prop("checked",!0),$('input[name="sidekick"]').eq(m).prop("checked",!0),$('input[name="cover"]').eq(U).prop("checked",!0),$('input[name="pronoun"]').eq(A).prop("checked",!0),$('input[name="language"]').eq(O).prop("checked",!0),sessionStorage.clear(),re()}function s(t){if(styleColourId)$(".hair:visible").first().hide(),$("."+styleColourId).show();else{let{length:r}=$(".hair").length,e=Math.floor(Math.random()*r);$(".hair").eq(e).show()}if(eyesId)$(".eyes:visible").first().hide(),$("."+eyesId).show();else{let{length:r}=$(".eyes").length,e=Math.floor(Math.random()*r);$(".eyes").eq(e).show()}if(skinToneId)$(".skintone:visible").first().hide(),$("."+skinToneId).show();else{let{length:r}=$(".skintone").length,e=Math.floor(Math.random()*r);$(".skintone").eq(e).show()}if(costumeId)$(".costume:visible").first().hide(),$(".sidekick-costume:visible").first().hide(),$("."+costumeId).show(),$(`.${sidekickId}-${costumeId}`).show();else{let{length:r}=$(".costume").length,e=Math.floor(Math.random()*r);$(".costume").eq(e).show()}if(maskId)$(".mask:visible").first().hide(),$(".sidekick-mask:visible").first().hide(),$("."+maskId).show(),$(`.${sidekickId}-${maskId}`).show();else{let{length:r}=$(".mask").length,e=Math.floor(Math.random()*r);$(".mask").eq(e).show()}if(capeId)$(".cape:visible").first().hide(),$(".sidekick-cape:visible").first().hide(),$("."+capeId).show(),$(`.${sidekickId}-${capeId}`).show();else{let{length:r}=$(".cape").length,e=Math.floor(Math.random()*r);$(".cape").eq(e).show()}if(specialId)$(".special:visible").first().hide(),$("."+specialId).show();else{let{length:r}=$(".special").length(),e=Math.floor(Math.random()*r);$(".special").eq(e).show()}if(sidekickColourId)$(".sidekick:visible").first().hide(),$("."+sidekickColourId).show();else{let{length:r}=$(".sidekick").length,e=Math.floor(Math.random()*r);$(".sidekick").eq(e).show()}if(coverId)$(".cover:visible").first().hide(),$("."+coverId).show();else{let{length:r}=$(".cover").length,e=Math.floor(Math.random()*r);$(".cover").eq(e).show()}t&&t()}function pe(){return localStorage.getItem("sessionId")}function ae(){if(pe()===null){let t=uuidv4();localStorage.setItem("sessionId",t)}}function P(){$(".book-preview-container").hide(),$(".book-selector-container").hide(),$(".book-container-large").hide(),$(".character-builder-container").show()}function j(){$(".book-preview-container").hide(),$(".book-selector-container").show(),$(".book-small-list-container").show(),$(".book-container-large").hide(),$(".character-builder-container").hide()}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{window.formStep=1,window.hairstyleId="",window.hairColour="",window.styleColourId=hairstyleId+"-"+hairColour,window.eyesId="",window.skinToneId="",window.costumeId="",window.maskId="",window.capeId="",window.specialId="",window.sidekickId="",window.sidekickColour="",window.sidekickColourId=sidekickId+"-"+sidekickColour,window.coverId="",window.userId="",window.sessionId="",window.sessionRow="",window.selectedBook="",window.currentCharacterName="",window.pronouns="",window.language="",window.dedicationMessage="",window.SnipcartSettings={publicApiKey:"NzAxOWMzODUtNmVjNS00NmEyLTlkNDktNDZhOTllYzIzMjkxNjM3OTc2MjY0NTYxOTc2NzY3",modalStyle:"side",currency:"gbp"},(()=>{var e,n;(n=(e=window.SnipcartSettings).version)!=null||(e.version="3.0");var o,a;(a=(o=window.SnipcartSettings).timeoutDuration)!=null||(o.timeoutDuration=2750);var i,d;(d=(i=window.SnipcartSettings).domain)!=null||(i.domain="cdn.snipcart.com");var u,m;(m=(u=window.SnipcartSettings).protocol)!=null||(u.protocol="https");var U=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,A=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=I,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",O):O();function O(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(A.forEach(l=>document.addEventListener(l,I)),setTimeout(I,window.SnipcartSettings.timeoutDuration)):I()}var _=!1;function I(){if(_)return;_=!0;let l=document.getElementsByTagName("head")[0],g=document.querySelector("#snipcart"),S=document.querySelector(`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`),f=document.querySelector(`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`);g||(g=document.createElement("div"),g.id="snipcart",g.setAttribute("hidden","true"),document.body.appendChild(g)),ie(g),S||(S=document.createElement("script"),S.src=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`,S.async=!0,l.appendChild(S)),f||(f=document.createElement("link"),f.rel="stylesheet",f.type="text/css",f.href=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`,l.prepend(f)),A.forEach(ce=>document.removeEventListener(ce,I))}function ie(l){!U||(l.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(l.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(l.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(l.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(l.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})(),$(document).ready(function(){document.addEventListener("snipcart.ready",()=>{Snipcart.events.on("customer.signedin",i=>{$(".nav-login-btn").html("Profile"),$(".select-character").show(),$(".new-character-button").show(),window.randomiseOrLoadCharacter()}),Snipcart.events.on("customer.signedout",i=>{sessionStorage.clear(),$(".nav-login-btn").html("Sign In"),$(".select-character").hide(),$(".new-character-button").hide(),window.randomiseOrLoadCharacter()}),Snipcart.events.on("snipcart.initialized",i=>{P(),Y(),q("#step-1-button"),G(),J(),randomiseOrLoadCharacter()});var e=200,n=!0,o=function(){n&&(window.innerWidth<=767?window.numberPerPage=3:window.numberPerPage=9,k(),n=!1)},a=setInterval(o,e);o(),$(window).resize(function(){n=!0})})});let t=new MasterPlan(document.getElementById("masterplan"),{clientID:"5140",jobID:"2000",theme:"light",embedType:"frame",thumbWidth:"300",autoFullscreen:!0,showLoginLink:!1,clientNameLink:!1,showSpreadNums:!1,customCss:{nestedToc:!0}});window.randomiseOrLoadCharacter=function(){let e=Snipcart.store.getState().customer.status==="SignedIn";$('input[name="fname"]').val()||(sessionStorage.getItem("currentCharacterId")===null&&!e?x():te())},window.getSelectedStyles=function(){let n=$("input[name=hair-style]:checked","#character-creation-form").val(),o=$("input[name=sidekick]:checked","#character-creation-form").val();hairstyleId=n.slice(0,5),eyesId=$("input[name=Eye-Colour]:checked","#character-creation-form").val().toLowerCase(),skinToneId=$("input[name=skin-tone]:checked","#character-creation-form").val().toLowerCase(),costumeId=$("input[name=costume]:checked","#character-creation-form").val().toLowerCase(),maskId=$("input[name=mask]:checked","#character-creation-form").val().toLowerCase(),capeId=$("input[name=cape]:checked","#character-creation-form").val().toLowerCase(),specialId=$("input[name=special]:checked","#character-creation-form").val().toLowerCase(),sidekickId=o.slice(0,5),coverId=$("input[name=cover]:checked","#character-creation-form").val().toLowerCase(),pronouns=$("input[name=pronoun]:checked").val().toLowerCase(),language=$("input[name=language]:checked").val().toLowerCase()},$("#next-pagination-button").click(function(){window.currentPage!==window.numberOfPages&&(window.currentPage+=1,k(window.currentPage))}),$("#prev-pagination-button").click(function(){window.currentPage!==1&&(window.currentPage-=1,k(window.currentPage))}),$(".save-character-button").click(function(e){e.stopPropagation(),e.preventDefault(),ne()}),$(".new-character-button").click(function(e){e.preventDefault(),e.stopPropagation(),oe()}),$(".w-dropdown-list").on("click",".character-dropdown-link",function(e){e.preventDefault(),e.stopPropagation();let n=$(this).attr("id");D(n).then(a=>{T(a.fields)})});function r(e,n){n.preventDefault();let o;switch(e){case"1":o="#F080B2";break;case"2":o="#01AFDA";break;case"3":o="#77B82A";break;case"4":o="#FCD100";break;case"5":o="#E84E10";break;case"6":o="#01A187";break;case"7":o="#E30613";break;case"8":o="#E30F6B";break;case"9":o="#0072BB";break}q(`#step-${e}-button`),$(`.form-step-${e}-container`).fadeIn("slow"),$(`.form-step-${formStep}-container`).css({display:"none"}),$(`<style>[type=radio]:checked + img { box-shadow: 0px 0px 0px 5px ${o};}</style>`).appendTo("head"),formStep=e}$(".step-button").click(function(e){let n=$(this).attr("id").match(/(\d+)/)[0];r(n,e)}),$('input[name="hair-colour"]').change(function(e){C(),M(),w(),s()}),$("input[name=hair-style]").change(function(e){getSelectedStyles(),w(),s()}),$("input[name=Eye-Colour]").change(function(e){eyesId=$("input[name=Eye-Colour]:checked","#character-creation-form").val().toLowerCase(),s()}),$("input[name=skin-tone]").change(function(e){skinToneId=$("input[name=skin-tone]:checked","#character-creation-form").val().toLowerCase(),s()}),$("input[name=costume]").change(function(e){costumeId=$("input[name=costume]:checked","#character-creation-form").val().toLowerCase(),s()}),$("input[name=mask]").change(function(e){maskId=$("input[name=mask]:checked","#character-creation-form").val().toLowerCase(),s()}),$("input[name=cape]").change(function(e){capeId=$("input[name=cape]:checked","#character-creation-form").val().toLowerCase(),s()}),$("input[name=special]").change(function(e){specialId=$("input[name=special]:checked","#character-creation-form").val().toLowerCase(),s()}),$('input[name="sidekick-colour"]').change(function(e){C(),W(),w(),s()}),$("input[name=sidekick]").change(function(e){getSelectedStyles(),w(),s()}),$("input[name=cover]").change(function(e){coverId=$("input[name=cover]:checked","#character-creation-form").val().toLowerCase(),s()}),$("textarea#dedication").change(function(){window.dedicationMessage=$(this).val()}),$("input[name=pronoun]").change(function(){window.pronouns=$(this).val()}),$("input[name=language]").change(function(){window.language=$(this).val()}),$(".pick-a-book").click(function(e){if(e.preventDefault(),!$("input[name=fname]").val())p("error","Please enter a character name before continuing.");else{let n=sessionStorage.getItem("currentCharacterId");sessionStorage.setItem("currentCharacterName",$("#hero-name-input").val()),n===null?y(p("success",`${$("#hero-name-input").val()} was saved successfully!`)):b(p("success",`${$("#hero-name-input").val()} was saved successfully!`)),j()}}),$(".edit-character-button").click(function(e){e.preventDefault(),$(".character-builder-container").show(),$(".book-selector-container").hide()}),$(".book-container").each(function(){let e=$(this).closest("div").find(".book-title").html().toLowerCase().replace(/ /g,"-");$(this).prop("id",e+"-book")}),$(".book-container").click(function(e){e.preventDefault(),selectedBook=$(this).prop("id").slice(0,-5),$(".book-small-list-container").hide(),$(".book-container-large").each(function(){let n="large-"+selectedBook;$(this).attr("id")===n?$(this).css("display","flex"):$(this).hide()})}),$(".book-container-large").each(function(){let e=$(this).closest("div").find(".book-title").html().toLowerCase().replace(/ /g,"-");$(this).prop("id","large-"+e)}),$(".story-back-button").click(function(e){e.preventDefault(),e.stopPropagation(),$(".book-small-list-container").css("display","flex"),$(".book-container-large").hide()}),$(".see-your-story-button").click(function(e){e.preventDefault(),ae(),V();let n={characterName:window.sessionStorage.getItem("currentCharacterName"),hairstyleId:window.styleColourId,eyesId:window.eyesId,skintoneId:window.skinToneId,costumeId:window.costumeId,maskId:window.maskId,capeId:window.capeId,specialId:window.specialId,sidekickId:window.sidekickColourId,coverId:window.coverId,pronouns:window.pronouns,language:window.language,dedicationMessage:window.dedicationMessage};$(".add-to-cart-btn").attr("data-item-custom1-value",window.sessionStorage.getItem("currentCharacterName")),$(".add-to-cart-btn").attr("data-item-custom2-value",window.sessionStorage.getItem("currentCharacterId")),$(".add-to-cart-btn").attr("data-item-custom3-value",JSON.stringify(n)),Z(),b(),$(".book-preview-container").css("display","flex"),$(".book-selector-container").hide()}),$(".edit-character").click(function(e){e.preventDefault(),P()}),$(".select-story").click(function(e){e.preventDefault(),j()}),$(".add-to-cart-btn").click(function(e){P(),x()}),$("#home-button").click(function(e){P()})});})();
