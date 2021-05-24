function Task(chore, date, value) {
  return {
    chore,
    date,
    value,
  };
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// class UI {
//   static displayBooks() {
//     const books = Store.getBooks();

//     books.forEach((book) => UI.addBookToLibrary(book));
//   }
//   static addBooktoList(book) {
//     const list = document.getElementById("root");
//     const row = document.createElement("ul");
//     row.innerHTML = `
//             <li>${book.chore}</li>
//             <li>${book.date}</li>
//             <li>${book.value}</li>
//             <li><a href='' class='delete'>X</a></li>
//           `;
//     list.appendChild(row);
//     // const td = document.getElementById(book.id);
//     // td.addEventListener("click", (e) => change(e));
//   }

//   static deleteBook(target) {
//     if (target.className === "delete") {
//       target.parentElement.parentElement.remove();
//     }
//   }

//   static clearFields() {
//     document.getElementById("chore").value = "";
//     document.getElementById("date").value = "";
//     document.getElementById("value").value = "";
//   }
// }

// document.getElementById("task-form").addEventListener("submit", (e) => {
//   const task = Object.create(Task);

//   task.chore = document.getElementById("chore").value;
//   task.date = document.getElementById("date").value;
//   task.value = document.getElementById("value").value;

//   if (task.chore) {
//     UI.addBooktoList(book);
//     UI.clearFields();
//   }

//   e.preventDefault();
// });

document.getElementById("task-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  e.preventDefault();
});
