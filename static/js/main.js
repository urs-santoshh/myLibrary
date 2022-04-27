class Book{
    constructor(bookTitle, bookAuthor, bookGenre){
        this.title = bookTitle;
        this.author = bookAuthor;
        this.genre = bookGenre;
    }
}
class Display{
    displayBookInLibrary(book){
        let tableBody = document.getElementById('table-body');
        let tableBodyContent = `
                    <tr>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.genre}</td>
                    </tr>
                `;
        tableBody.innerHTML += tableBodyContent;
    }
    clearForm(){
        let formSubmit = document.getElementById('add-book-submit');
        formSubmit.reset();
    }
    validateBook(book){
        if(book.title === '' || book.author === ''){
            return false;
        }
        else{
            return true;
        }
    }
    showMessage(type, message){
        let messageElement = document.getElementById('message');
        let boldText;
        if(type === 'success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        messageElement.innerHTML = `
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}</strong> ${message}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        `;
    }
}
// submit event listener
let formSubmit = document.getElementById('add-book-submit');
formSubmit.addEventListener('submit', addBookToLibrary);
function addBookToLibrary(e){
    // prevent the default behaviour of submit button
    e.preventDefault();
    let bookTitle = document.getElementById('book-title').value;
    let bookAuthor = document.getElementById('book-author').value;
    let bookGenre;
    // get the checkbox element
    let genreFiction = document.getElementById('genre-fiction');
    let genreProgramming = document.getElementById('genre-programming');
    let genreCooking = document.getElementById('genre-cooking');
    // condition for the checkbox
    if(genreFiction.checked){
        bookGenre = genreFiction.value;
    }
    else if(genreProgramming.checked){
        bookGenre = genreProgramming.value;
    }
    else if(genreCooking.checked){
        bookGenre = genreCooking.value;
    }
    // create new book object
    let book = new Book(bookTitle, bookAuthor, bookGenre); 
    // create new display object
    let display = new Display();
    // display status of the work performed
    if(display.validateBook(book)){
        display.displayBookInLibrary(book);
        display.clearForm();
        display.showMessage('success','the book has beeen added to the library');
    }
    else{
        display.showMessage('danger','you cannot add this book to the library');
    }
}
