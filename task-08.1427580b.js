!function(){var e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();var t=l.currentTarget.elements,a=t.email,r=t.password;if(""===a.value||""===r.value)alert("All fields must be completed!");else{var n={email:a.value,password:r.value};console.log(n),e.reset()}}))}();
//# sourceMappingURL=task-08.1427580b.js.map
