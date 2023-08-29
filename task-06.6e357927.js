const s=document.querySelector("#validation-input");Number(s.dataset.length);s.addEventListener("blur",(function(a){a.currentTarget.value.length===sumbolsNumber?(s.classList.contains("invalid")&&s.classList.remove("invalid"),s.classList.add("valid")):(s.classList.contains("valid")&&s.classList.remove("valid"),s.classList.add("invalid"))}));
//# sourceMappingURL=task-06.6e357927.js.map
