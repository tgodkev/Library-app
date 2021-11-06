let myLibrary = [];
const pages = document.getElementById('pages');
const title = document.getElementById('title');
const author = document.getElementById('author');






function addedBook() {
  let book = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(book);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}




$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var addedBook = button.data('whatever') 
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + addedBook)
  modal.find('.modal-body input').val(addedBook)
  
  
  
  
  
  // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})};
