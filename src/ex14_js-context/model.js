// fetch('https://rsu-library-api.herokuapp.com/books')  
//   .then(  
//     function(response) {  
//       if (response.status !== 200) {  
//         console.log('Looks like there was a problem. Status Code: ' +  
//           response.status);  
//         return;  
//       }

//       // Examine the text in the response  
//       response.json().then(function(data) {  
//         model.allBooks.push(data) ;
//         console.log(model.allBooks);
//       });  
//     }  
//   )  
//   .catch(function(err) {  
//     console.log('Fetch Error :-S', err);  
//   });
var model = {
    allBooks:[
       {"id":1,"title":"Jewels of Nizam","author":{"firstName":"Geeta","lastName":"Devi"},"rating":5,"cost":100,"categories":["must_read","best","non_fiction"],"createdAt":1506943763424,"updatedAt":1528046197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/JewelsOfNizam.jpg"},{"id":2,"title":"Cakes & Bakes","author":{"firstName":"Sanjeev","lastName":"Kapoor"},"rating":5,"cost":200,"categories":["best","classic"],"createdAt":1506943763424,"updatedAt":1525367797707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/CakesAndBakes.jpg"},{"id":3,"title":"Jamie\"s Kitchen","author":{"firstName":"Jamie","lastName":"Oliver"},"rating":4,"cost":300,"categories":["non_fiction"],"createdAt":1506943763424,"updatedAt":1530638197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/JamiesKitchen.jpg"},{"id":4,"title":"Inexpensive Family Meals","author":{"firstName":"Simon","lastName":"Holst"},"rating":3,"cost":50,"categories":[],"createdAt":1506943763424,"updatedAt":1520097397707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/InexpensiveFamilyMeals.jpg"},{"id":5,"title":"Paleo Slow Cooking","author":{"firstName":"Chrissy","lastName":"Gawer"},"rating":4,"cost":1000,"categories":["classic"],"createdAt":1506943763424,"updatedAt":1520097397707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/PaleoSlowCooking.jpg"},{"id":6,"title":"Cook Like an Italian","author":{"firstName":"Toble","lastName":"Puttock"},"rating":3,"cost":12,"categories":["non_fiction"],"createdAt":1506943763424,"updatedAt":1520097397707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/CookLikeAnItalian.jpg"},{"id":7,"title":"Suneeta Vaswani","author":{"firstName":"Geeta","lastName":"Devi"},"rating":5,"cost":504,"categories":["must_read","best","non_fiction"],"createdAt":1506943763424,"updatedAt":1517678197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/SuneetaVaswani.jpg"},{"id":8,"title":"Jamie Does","author":{"firstName":"Jamie","lastName":"Oliver"},"rating":3,"cost":100,"categories":[],"createdAt":1506943763424,"updatedAt":1538586997707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/JamieDoes.jpg"},{"id":9,"title":"Jamie\"s Italy","author":{"firstName":"Jamie","lastName":"Oliver"},"rating":5,"cost":100,"categories":["must_read","best"],"createdAt":1506943763424,"updatedAt":1528046197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/JamiesItaly.jpg"},{"id":10,"title":"Vegetables Cookbook","author":{"firstName":"Matthew","lastName":"Biggs"},"rating":3,"cost":100,"categories":["must_read","non_fiction"],"createdAt":1506943763424,"updatedAt":1522775797707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/VegetablesCookbook.jpg"}
    ],
    addBook: function(book){
        book.id = model.allBooks.length+1;
        model.allBooks.push(book)
        console.log(model.allBooks)
    }
}
