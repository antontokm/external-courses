var model = {
    allBooks:[{name: "Jewels of Nizam", autor:"Geeta Devi", img:"1.png",time:"_"},
        {name: "Cakes & Bakes", autor: "by Sanjeev Kapoor", img:"2.png",time:"_"},
        {name: "Jamie's Kitchen", autor: "Jamie Oliver", img:"3.png",time:"_"},
        {name: "Inexpensive Family Meals", autor: "Simon Holst", img:"4.png",time:"_"},
        {name: "Paleo Slow Cooking", autor:"Chrissy Gower" , img:"5.png",time:"_"},
        {name: "Cook Like an Italian", autor: "Noble Puttock", img:"6.png",time:"_"},
        {name: "Saneeta Vaswani", autor: "Geeta Devi", img:"7.png",time:"_"},
        {name:"Jamie Does" , autor: "Jamie Oliver", img:"8.png",time:"_"},
        {name: "Jamie's italy", autor: "Jamie Oliver", img:"9.png",time:"_"},
        {name: "Vegetables Cookbooks", autor: "Matthew Biggs", img:"10.png",time:"_"}
    ],
    addBook: function(books){
        model.allBooks.push(books)
    }
}