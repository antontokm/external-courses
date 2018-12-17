function setBookTime (){
    var timeOnWorld=new Date();
    var mounthOnWorld =Number(timeOnWorld.getMonth())+1;
    var timeAddBook = timeOnWorld.getDate()+"."+mounthOnWorld+"."
    +timeOnWorld.getFullYear()+" "
    + timeOnWorld.getHours() + ":" + timeOnWorld.getMinutes();
    return timeAddBook
}

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
        time:setBookTime (),
        free: true
    }    
    model.addBook(book);
    booksListBuilder([book]);
    historyListBuilder(book);
    console.log(book)
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
        <div id="box__mid-main-books-place-${books[i].id}" class="box__mid-main-books-place" >
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

function historyListBuilder(book){
    var historyList = `
        <div class="box__mid-sidebar-menu3-history">
            <div class="clock"><i class="far fa-clock"></i></div>
            You added ${book.name} by ${book.autor} in ${book.time}
        </div>`;
    boxMidSidebarMenu3.innerHTML += historyList ;
};

var sortByFreeBtn =  document.getElementById("sort_by_free_btn")
sortByFreeBtn.addEventListener("click",function(){sortByFree(books)});

function sortByFree(books){
    for(var i=0; i<books.length; i++){
        if(books[i].free===false){
            document.getElementById(`box__mid-main-books-place-${books[i].id}`).style.display = "none";
        }
    }
}
    
var showAllBooksBtn = document.getElementById("show_all_books")
showAllBooksBtn.addEventListener("click",function(){showAllBooks(books)});
function showAllBooks (books){
    for(var i=0; i<books.length; i++){
            document.getElementById(`box__mid-main-books-place-${books[i].id}`).style.display = "flex";
    }
}    

// var searchBookInput = document.getElementById("search-book-input");
// searchBookInput.addEventListener("input",function(){searchBook()});
// function searchBook(){
//     var word = document.getElementById('search-book-input').value;
//     for(var i=0; i<books.length; i++){
//         for(var j=0; j<word.length; j++){
//             if(word.charAt(j)===books.name.charAt(j)){
//                 document.getElementById(`box__mid-main-books-place-${books[i].id}`).style.display = "flex";
//             } else{
//                 document.getElementById(`box__mid-main-books-place-${books[i].id}`).style.display = "none";
//             }   
//         }
//     }    
// }
