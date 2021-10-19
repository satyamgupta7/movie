document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#movie-list ul");
  const forms = document.forms;

  //delete movies
  list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  //add movie
  const addForm = forms["add-movie"];
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();

    //1. creating elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const movieName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //2. add text content
    movieName.textContent = value;
    deleteBtn.textContent = "delete";

    //3. add class
    movieName.classList.add("name");
    deleteBtn.classList.add("delete");

    //4. append DOM
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
});
