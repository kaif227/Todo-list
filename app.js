let mainBox = document.querySelector(".box3");
let inp = document.querySelector("input");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul")


btn.addEventListener("click",function(e){
    let item = inp.value;
    let list = document.createElement("li");
    list.innerHTML = item;
    ul.appendChild(list);
    

    let delBtn = document.createElement("button");
    delBtn.classList.add("del")
    delBtn.innerText = "Delete";
    list.appendChild(delBtn);
    inp.value = ""
    delBtn.addEventListener("click",function(){
        list.remove();
    });
});


