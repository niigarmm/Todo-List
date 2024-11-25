let input = document.querySelector("input");
let ul = document.querySelector("ul");
let form = document.querySelector("form");
let list = document.querySelector(".list");
let result = document.querySelector(".result-p");
let clear = document.querySelector(".clear");
form.onsubmit = (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("Fill the input");
  } else {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash");
    btn.setAttribute("class", "remove");
    li.innerHTML = input.value;
    btn.setAttribute("type", "button");
    clear.setAttribute("type", "button");
    li.setAttribute("data-aos", "flip-right");
    btn.append(icon);
    ul.appendChild(li);
    li.appendChild(btn);
    // let count = ul.querySelectorAll("li").length;
    input.value = "";
    // result.innerHTML = `You have ${count} task`;
    updateTaskCount();
    btn.onclick = () => {
      li.remove();
      btn.remove();
      updateTaskCount();
      // count -= 1;
      // result.innerHTML = `You have ${count} task`;
    };
    li.onclick = () => {
      // li.style.textDecoration = "line-through";
    };
    clear.onclick = () => {
      ul.innerHTML = "";
      updateTaskCount();
       // result.innerHTML = `You have ${count} tasks`;
    };
  }
};
function updateTaskCount() {
  const count = ul.querySelectorAll("li").length;
  result.innerHTML = `You have ${count} ${count === 1 ? "task" : "tasks"}`;
}
