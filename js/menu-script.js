import {foodItem} from "./fooditem.js"

console.log(foodItem);

function displayItems(){
    var burger = document.getElementById('card1');
    var pizza = document.getElementById('card2');
    var pasta = document.getElementById('card3');
    var fries = document.getElementById('card4');
    var rice = document.getElementById('card5');

        const burgerData = foodItem.filter(item=> item.
            category=='burgerData');
            console.log(burgerData);
        const pizzaData = foodItem.filter(item=> item.
            category=='pizzaData');
            console.log(pizzaData);
        const pastaData = foodItem.filter(item=> item.
            category=='pastaData');
            console.log(pastaData);
        const friesData = foodItem.filter(item=> item.
            category=='friesData');
            console.log(friesData);
        const riceData = foodItem.filter(item=> item.
            category=='riceData');
            console.log(riceData);
    
        burgerData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','card1');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card_top_1');

        var star = document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');

        var circle = document.createElement('i');
        circle.setAttribute('class','fa fa-circle-o add-to-cart');
        circle.setAttribute(item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(circle);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('h1');
        itemName.setAttribute('id','food_name_1');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','food_cost_1');
        itemPrice.innerText = item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        burger.appendChild(itemCard);
        })

        pizzaData.map(item=> {
            var itemCard = document.createElement('div');
            itemCard.setAttribute('id','card2');
    
            var cardTop = document.createElement('div');
            cardTop.setAttribute('id','card_top_2');
    
            var star = document.createElement('i');
            star.setAttribute('class','fa fa-star');
            star.setAttribute('id','rating');
    
            var circle = document.createElement('i');
            circle.setAttribute('class','fa fa-circle-o add-to-cart');
            circle.setAttribute(item.id);
            
            cardTop.appendChild(star);
            cardTop.appendChild(circle);
    
            var img = document.createElement('img');
            img.src = item.img;
    
            var itemName = document.createElement('h1');
            itemName.setAttribute('id','food_name_2');
            itemName.innerText = item.name;
    
            var itemPrice = document.createElement('p');
            itemPrice.setAttribute('id','food_cost_2');
            itemPrice.innerText = item.price;
    
            itemCard.appendChild(cardTop);
            itemCard.appendChild(img);
            itemCard.appendChild(itemName);
            itemCard.appendChild(itemPrice);
    
            pizza.appendChild(itemCard);
        })

            pastaData.map(item=> {
                var itemCard = document.createElement('div');
                itemCard.setAttribute('id','card3');
        
                var cardTop = document.createElement('div');
                cardTop.setAttribute('id','card_top_3');
        
                var star = document.createElement('i');
                star.setAttribute('class','fa fa-star');
                star.setAttribute('id','rating');
        
                var circle = document.createElement('i');
                circle.setAttribute('class','fa fa-circle-o add-to-cart');
                circle.setAttribute(item.id);
                
                cardTop.appendChild(star);
                cardTop.appendChild(circle);
        
                var img = document.createElement('img');
                img.src = item.img;
        
                var itemName = document.createElement('h1');
                itemName.setAttribute('id','food_name_3');
                itemName.innerText = item.name;
        
                var itemPrice = document.createElement('p');
                itemPrice.setAttribute('id','food_cost_3');
                itemPrice.innerText = item.price;
        
                itemCard.appendChild(cardTop);
                itemCard.appendChild(img);
                itemCard.appendChild(itemName);
                itemCard.appendChild(itemPrice);
        
                pasta.appendChild(itemCard);
            })

                friesData.map(item=> {
                    var itemCard = document.createElement('div');
                    itemCard.setAttribute('id','card4');
            
                    var cardTop = document.createElement('div');
                    cardTop.setAttribute('id','card_top_4');
            
                    var star = document.createElement('i');
                    star.setAttribute('class','fa fa-star');
                    star.setAttribute('id','rating');
            
                    var circle = document.createElement('i');
                    circle.setAttribute('class','fa fa-circle-o add-to-cart');
                    circle.setAttribute('id',item.id);
                    
                    cardTop.appendChild(star);
                    cardTop.appendChild(circle);
            
                    var img = document.createElement('img');
                    img.src = item.img;
            
                    var itemName = document.createElement('h1');
                    itemName.setAttribute('id','food_name_4');
                    itemName.innerText = item.name;
            
                    var itemPrice = document.createElement('p');
                    itemPrice.setAttribute('id','food_cost_4');
                    itemPrice.innerText = item.price;
            
                    itemCard.appendChild(cardTop);
                    itemCard.appendChild(img);
                    itemCard.appendChild(itemName);
                    itemCard.appendChild(itemPrice);
            
                    fries.appendChild(itemCard);
                })

                    riceData.map(item=> {
                        var itemCard = document.createElement('div');
                        itemCard.setAttribute('id','card5');
                
                        var cardTop = document.createElement('div');
                        cardTop.setAttribute('id','card_top_5');
                
                        var star = document.createElement('i');
                        star.setAttribute('class','fa fa-star');
                        star.setAttribute('id','rating');
                
                        var circle = document.createElement('i');
                        circle.setAttribute('class','fa fa-circle-o add-to-cart');
                        circle.setAttribute('id',item.id);
                        
                        cardTop.appendChild(star);
                        cardTop.appendChild(circle);
                
                        var img = document.createElement('img');
                        img.src = item.img;
                
                        var itemName = document.createElement('h1');
                        itemName.setAttribute('id','food_name_5');
                        itemName.innerText = item.name;
                
                        var itemPrice = document.createElement('p');
                        itemPrice.setAttribute('id','food_cost_5');
                        itemPrice.innerText = item.price;
                
                        itemCard.appendChild(cardTop);
                        itemCard.appendChild(img);
                        itemCard.appendChild(itemName);
                        itemCard.appendChild(itemPrice);
                
                        rice.appendChild(itemCard);
    })
}
displayItems();


