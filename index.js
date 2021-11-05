let myLibrary = [];

const addBook = document.querySelector('#addBook');



function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.thing = function() {
      console.log(name, author, pages, read,);
    }
}

const book1 = new Book("lord of the rings,", "jr tolkein, ", "1 million,", "has read");
book1.thing();

function addBookToLibrary() {


  // do stuff here
}






$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
