// function getBase64(file) {
//     var reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       console.log(reader.result)  
//       return reader.result;
//     };
//     reader.onerror = function (error) {
//       console.log('Error: ', error);
//     };
//  }
var showFormBtn=document.getElementById('show_form_btn')

var showForm = function (){
    document.getElementById("form").style.display = "block";
}
var addBookBtn=document.getElementById('add_book_btn');
var addBook = function(){
    var book = {
        name:document.getElementById('Name').value,
        autor:document.getElementById('Autor').value,
        img: "1.png",
        time:Date.now()
    }    
    model.addBook(book);
    booksListBuilder([book]);
    document.getElementById("form").style.display = "none";
}
showFormBtn.addEventListener("click",showForm);
addBookBtn.addEventListener("click",addBook)

var boxMidMainBooks= document.getElementById('box__mid');
var books = model.allBooks;
function booksListBuilder(books){
    var booksList = '';
    var currentItem = '';
    for(var i=0; i<books.length;i++){
        currentItem = `
        <div class="box__mid-main-books-place">
            <div class="box__mid-main-books-place-img">
                <img src="${books[i].img}" alt="" width="200px" height="275px">
            </div>
            <div class="box__mid-main-books-place-name">${books[i].name}</div>
            <div class="box__mid-main-books-place-autor">${books[i].autor}</div>
            <div class="box__mid-main-books-place-point">

            </div>
        </div>`;
        booksList = booksList + currentItem;
    }  
    boxMidMainBooks.innerHTML += booksList ;
};
booksListBuilder(books);

var boxMidSidebarMenu3 = document.getElementById('history');

function historyListBuilder(books){
    var historyList = '';
    var currentItem = '';
    for(var i=0; i<books.length;i++){
        currentItem = `
        <div class="box__mid-sidebar-menu3-history">
            <div class="clock"><i class="far fa-clock"></i></div>
            <div>You added ${books[i].name} by ${books[i].autor} in ${books[i].time}</div>
        </div>`;
        historyList = historyList + currentItem;
    }  
    boxMidSidebarMenu3.innerHTML += historyList ;
};
historyListBuilder(books)