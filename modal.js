window.addEventListener('DOMContentLoaded', (event) => {
    // Book contructor
    function FormToTable(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    
    // UI contructor
    function UI() {}
    UI.prototype.addNewItem = function(book) {
        const list = document.getElementById("output");
        // create tr
        const row = document.createElement("div");
        row.classList.add("outputClass");
        // insert cols
        
        row.innerHTML = `
        <p class="newEl">${book.title}</p>
        <p class="newEl">${book.author}</p>
        <p class="newEl">${book.isbn}</p>
        <div class="remove"><p class="newEl2 pi">X</p></div>`;
        list.appendChild(row);

        
    }
    
    // Event Listeners
    document.getElementById("book-form").addEventListener("submit", function(e) {
        const title = document.getElementById("title").value,
              author = document.getElementById("author").value,
              isbn = document.getElementById("isbn").value

        // book
        const newItem = new FormToTable(title, author, isbn);
        // UI
        const ui = new UI();
        //add to list 
        ui.addNewItem(newItem);
        
        e.preventDefault();
    });

        
    });
