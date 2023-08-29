const e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();const{email:t,password:s}=l.currentTarget.elements;if(""===t.value||""===s.value)alert("All fields must be completed!");else{const l={email:t.value,password:s.value};console.log(l),e.reset()}}));
//# sourceMappingURL=task-08.67a0837a.js.map
