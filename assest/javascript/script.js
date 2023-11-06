const inp = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector(".list");


document.body.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    btn.click();
  }
});


btn.addEventListener("click", function () {
  if (inp.value === "") {
    alert("Please add some tasks");
    return;
  }

  const li = document.createElement("li");
  const del = document.createElement("button");
  // const checkbox = document.createElement("input")
  // checkbox.type="checkbox";


  del.classList.add("delBtn");


  li.textContent = inp.value;
  del.textContent = "x";


  // li.appendChild(checkbox)
  list.append(li);
  li.append(del);

  
  inp.value = "";
  inp.focus();
  
  li.addEventListener("click", function () {
    li.classList.toggle("active");
  });


  del.addEventListener("click", function () {
    li.remove();
  });

  
});
