const a=document.querySelector("#validation-input"),s=Number(a.dataset.length);a.addEventListener("blur",(function(i){i.currentTarget.value.length===s?(a.classList.contains("invalid")&&a.classList.remove("invalid"),a.classList.add("valid")):(a.classList.contains("valid")&&a.classList.remove("valid"),a.classList.add("invalid"))}));
//# sourceMappingURL=task-06.fadea733.js.map
