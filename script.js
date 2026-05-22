//your JS code here. If required.
const submit = document.querySelector("#submit");
const table = document.querySelector(".table");
const form = document.querySelector(".form");
const bookList = document.querySelector("#book-list");


submit.addEventListener("click", addTable);

function addTable(e) {
  e.preventDefault();
  table.style.display = "table";

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  const row = document.createElement("tr");
  row.innerHTML =  `
            <td>${title} </td>
            <td>${author} </td>
            <td>${isbn}</td>
            <td><button class='delete' style='background-color:red; color:white'>X</button></td>
  `;

  bookList.appendChild(row);
}

document.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }

    if(bookList.children.length==0){
        table.style.display='none';
    }
})
