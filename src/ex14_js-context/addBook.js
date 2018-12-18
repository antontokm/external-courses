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
    document.getElementById("form").style.display = "flex";
}
var addBookBtn=document.getElementById('add_book_btn');
var addBook = function(){
    var book = {
        title:document.getElementById('Name').value,
        author:{ firstName:document.getElementById('first_name').value, 
                  lastName:document.getElementById('last_name').value },
        image_url: "1.png",
        createdAt:setBookTime (),
        cost: 0
    }    
    model.addBook(book);
    booksListBuilder([book]);
    historyListBuilder(book);
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
                <img src="${books[i].image_url}" alt="" width="200px" height="275px">
            </div>
            <div id="box__mid-main-books-place-name-${books[i].id}" class="box__mid-main-books-place-name">${books[i].title}</div>
            <div class="box__mid-main-books-place-autor">${books[i].author.firstName +" "+ books[i].author.lastName}</div>
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
            You added ${book.title} by ${book.author.firstName +" "+ book.author.lastName} in ${book.createdAt}
        </div>`;
    boxMidSidebarMenu3.innerHTML += historyList ;
};

var sortByFreeBtn =  document.getElementById("sort_by_free_btn")
sortByFreeBtn.addEventListener("click",function(){sortByFree(books)});

function sortByFree(books){
    for(var i=0; i<books.length; i++){
        if(books[i].cost>0){
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
// searchBookInput.addEventListener("onchange",function() {searchBook()});

// function searchBook(){
//     var word = document.getElementById('search-book-input').value;
//     var filter = word.toUpperCase();
//     for(var i=0; i<word.length; i++){
//         var name = document.getElementById(`box__mid-main-books-name-${books[i].id}`)
//         console.log(word);
//         console.log(name);
//         var txtValue = word || name;
//         if(txtValue .toUpperCase().indexOf(filter) == -1){

//             document.getElementById(`box__mid-main-books-place-${books[i].id}`).style.display="none"
//         }
//     }    
// }
