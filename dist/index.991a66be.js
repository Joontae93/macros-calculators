var t=new class{state={};calcBMR(){let t;const e=12*this.state.person.heightFt+this.state.person.heightIn;t="Female"===gender?655+4.35*this.state.person.weight+4.7*e-4.7*this.state.person.age:66+6.23*this.state.person.weight+12.7*e-6.8*this.state.person.age,this.state.bmr=Math.round(t)}calcTDEE(){if(0===this.state.bmr)throw"Calculate BMR First!!";this.state.tdee=Math.round(this.state.bmr*this.state.modifiers.activity),this.state.calorieGoal=this.#t(this.state.tdee,this.state.modifiers.deficit),console.log(this.state)}#t(t,e){let r;if(e<1){if(Math.round(t-t*e)<this.state.bmr)return r="Too low!",r;r=Math.round(t-t*e)}else 1===e?r=t:e>1&&(r=Math.round(t*e));return r}calcMacros(t){if(0===this.state.tdee)throw"Do the rest of the form first!";let{macros:e,modifiers:r}=this.state;const{calorieGoal:s}=this.state;this.#e(e.proteins,r.protein),this.#r(e.fats),this.#s(e,s)}#e(t,e){let{grams:r,calories:s,percentage:o}=t;r=Math.round(this.state.person.weight*e),s=Math.round(4*r),o=Math.round(s/s*100),this.state.macros.proteins={grams:r,calories:s,percentage:o}}#r(t){let{grams:e,calories:r,percentage:s}=t;r=Math.round(s/100*this.state.calorieGoal),e=Math.round(r/9),this.state.macros.fats={grams:e,calories:r,percentage:s}}#s(t,e){let{carbs:{grams:r,percentage:s,calories:o},fats:{calories:a},proteins:{calories:n}}=t;o=Math.round(e-a-n),r=Math.round(o/4),s=Math.round(o/e*100),this.state.macros.carbs={calories:o,grams:r,percentage:s}}};class e{#o=".totals__";constructor(t){this.form=document.getElementById(t),this.output=document.querySelector(this.#o.concat(t)),this.macros=document.querySelector(".percents")}renderOutput(t){this.output.insertAdjacentHTML("beforeend",`<span>${t} calories</span>`)}}const r=new e("bmr-calculator"),s=new e("modifiers"),o=new e("calorie-goal");const a=new class extends e{#a="";label=this.form.querySelector("#protein--gender");constructor(t){super(t)}updateOptions(t){"Female"===t&&(this.#a=`\n\t\t\t<label for="protein">\n\t\t\t\t<strong>${t}</strong> Protein Modifier (grams per lb.)<br/>Recommended range is 0.6 &ndash; 1.0</label>\n\t\t\t\t\t<input type='number' step="0.1" name="protein" id="protein-modifier">`),"Male"===t&&(this.#a=`\n\t\t\t<label for="protein">\n\t\t\t\t<strong>${t}</strong> Protein Modifier (grams per lb.)<br/>Recommended range is 0.8 &ndash; 1.2</label>\n\t\t\t\t\t<input type='number' step="0.1" name="protein" id="protein-modifier">`),this.form.querySelector(".form__content").innerHTML=this.#a}renderMacros(t){this.macros.innerHTML=`\n\t\t<div class="percent__proteins">\n\t\t\t<h2>Protein:</h2>\n\t\t\t<span>${t.proteins.percentage}% | ${t.proteins.grams}g</span>\n\t\t</div>\n\t\t<div class="percent__fats">\n\t\t\t<h2>Fats:</h2>\n\t\t\t<span>${t.fats.percentage}% | ${t.fats.grams}g</span>\n\t\t</div>\n\t\t<div class="percent__carbs">\n\t\t\t<h2>Carbs:</h2>\n\t\t\t<span>${t.carbs.percentage}% | ${t.carbs.grams}g</span>\n\t\t</div>`}customMacros(){return'\n\t\t<label for="custom-macros">Custom Macro Selectors</label>\n\t\t\t<select name="custom-macros" id="custom-macros">\n\t\t\t\t<option value="0.6">0.6</option>\n\t\t\t\t<option value="0.7">.07</option>\n\t\t\t\t<option value="0.8" selected>0.8</option>\n\t\t\t\t<option value="0.9">0.9</option>\n\t\t\t\t<option value="1.0">1.0</option>\n\t\t\t</select>'}pregnancyMarkup(){return'<div class="radio__options">\n\t\t\t\t\t\t\t\t<h3>Pregnant?</h3>\n\t\t\t\t\t\t\t\t<div class="radio__options--option" id="pregnant-option-1">\n\t\t\t\t\t\t\t\t\t<input type="radio" name="pregnant" value="true">\n\t\t\t\t\t\t\t\t\t<label for="pregnant">Yes</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="radio__options--option" id="pregnant-option-2">\n\t\t\t\t\t\t\t\t\t<input type="radio" name="pregnant" value="false">\n\t\t\t\t\t\t\t\t\t<label for="pregnant">No</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>'}}("protein-calculator");var n=new class{forms=document.querySelectorAll("form");reset=document.getElementById("reset");mods=s;calorieGoal=o;bmr=r;proteins=a;submissionMessage="<span>Thanks! On to the next step.</span>";finalMessage="<span>All done! Check the breakdown</span>";constructor(){this.simpleProtection(),this.reset.addEventListener("click",this.resetForm)}simpleProtection=async function(){try{const t=await fetch("https://api.ipify.org/?format=json");if(!t.ok)throw new Error;const{ip:e}=await t.json();if("76.253.164.85"===e)return;const r=prompt("Password"),s='\n\t\t\t<main>\n\t\t\t\t<h1>You are not allowed to use this calculator.</h1>\n\t\t\t\t<span>If you have forgotten your password or feel you are being shown this message in error, please contact <a href="mailto:kj.roelke@gmail.com">KJ Roelke</a> and ask for help.</span>\n\t\t\t</main>';if("Elliecat29!"!=r)return void(document.querySelector("main").innerHTML=s)}catch(t){console.error(t)}this.#n(),this.renderConfirmation(),this.reset.addEventListener("click",(()=>this.resetForm()))};resetForm(){location.reload()}getBMRValues(t){const e=t.querySelector("#weight"),r=t.querySelector("#height--ft"),s=t.querySelector("#height--in"),o=t.querySelector("#age"),a=t.querySelectorAll('#gender input[type="radio"]'),n={weight:Number(e.value),age:Number(o.value),heightFt:Number(r.value),heightIn:Number(s.value)};return a.forEach(((t,e)=>{t.checked&&(n.gender=a[e].value)})),n}#i(t){return+t.options[t.selectedIndex].value}getModsValues(t){const e=t.querySelector("#tdee"),r=t.querySelector("#deficit");return{activity:this.#i(e),deficit:this.#i(r)}}getProteinValues(t){return Number(t.querySelector("#protein-modifier").value)}addHandlerRender(t){this.forms.forEach(((e,r)=>{e.addEventListener("submit",(e=>{e.preventDefault(),t(e),this.#l(e.target,r)}))}))}#l(t,e){const r=+t.dataset.step,s=e+1;t.querySelector(".form__submission").insertAdjacentHTML("beforeend",2!=e?this.submissionMessage:this.finalMessage),2!=r&&(this.#c([t,this.forms[s]]),this.#h(this.forms[e]))}#c(t){t.forEach((t=>t.classList.toggle("inactive")))}#h(t){for(let e=0;e<t.length;e++)t[e].disabled=!1}#n(){this.forms.forEach(((t,e)=>{if(0!==e)for(e=0;e<t.length;e++)t[e].setAttribute("disabled","")}))}handleOutput(t,e){0===t&&(this.bmr.renderOutput(e.bmr),this.proteins.updateOptions(e.person.gender)),1===t&&(this.mods.renderOutput(e.tdee),this.calorieGoal.renderOutput(e.calorieGoal)),2===t&&this.proteins.renderMacros(e.macros)}};new class{constructor(t,e){this.model=t,this.view=e,this.view.addHandlerRender(this.onFormSubmit)}onFormSubmit(e){switch(e.target.id){case"bmr-calculator":t.state.person=n.getBMRValues(e.target),t.calcBMR();break;case"modifiers":t.state.modifiers=n.getModsValues(e.target),t.calcTDEE();break;case"protein-calculator":t.state.modifiers.protein=n.getProteinValues(e.target),t.calcMacros()}n.handleOutput(+e.target.dataset.step,t.state)}}(t,n);!function(t,e,r){const s=document.getElementById("copyright"),o=(new Date).getFullYear(),a=`<a href="https://${r}?utm_source=${t.replace(/ /g,"")}&utm_medium=website_footer&utm_campaign=copyright" target ="_blank">${e}</a>`;s.insertAdjacentHTML("afterbegin",`<p>&copy; ${o} ${t} All Rights Reserved.<br/>Site built by ${a}</p>`)}("Macros by Sara","K.J. Roelke","kjroelke.online");
//# sourceMappingURL=index.991a66be.js.map