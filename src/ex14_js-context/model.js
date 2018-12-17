var model = {
    allBooks:[
        {name: "Jewels of Nizam", autor:"Geeta Devi", img:"1.png",time:"_", free:true, id: 1},
        {name: "Cakes & Bakes", autor: "by Sanjeev Kapoor", img:"2.png",time:"_", free:true, id: 2},
        {name: "Jamie's Kitchen", autor: "Jamie Oliver", img:"3.png",time:"_", free:true, id: 3},
        {name: "Inexpensive Family Meals", autor: "Simon Holst", img:"4.png",time:"_", free:true, id: 4},
        {name: "Paleo Slow Cooking", autor:"Chrissy Gower" , img:"5.png",time:"_", free:true, id: 5},
        {name: "Cook Like an Italian", autor: "Noble Puttock", img:"6.png",time:"_", free:false, id: 6},
        {name: "Saneeta Vaswani", autor: "Geeta Devi", img:"7.png",time:"_", free:false, id: 7},
        {name:"Jamie Does" , autor: "Jamie Oliver", img:"8.png",time:"_", free:false, id: 8},
        {name: "Jamie's italy", autor: "Jamie Oliver", img:"9.png",time:"_", free:false, id: 9},
        {name: "Vegetables Cookbooks", autor: "Matthew Biggs", img:"10.png",time:"_", free:false, id: 10}
    ],
    addBook: function(book){
        book.id = model.allBooks.length+1;
        model.allBooks.push(book)
    }
}