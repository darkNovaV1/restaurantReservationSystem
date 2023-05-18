// <----------------------------- Menu ---------------------------------->

// selecting all food card buttons
const selectbtns = document.querySelectorAll('.btn');

//adding eventlistener to each button
// when button clicked then food card borderColor change and button's text and color 
selectbtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('selected');

        if (btn.textContent == 'select') {
            btn.textContent = 'selected'
            btn.style.backgroundColor = '#0dbb50'
        }
        else {
            btn.textContent = 'select'
            btn.style.backgroundColor = 'orangered'
        }


    }
    )
})
















// <--------------------------- Bill PopUP --------------------------------->

// selecting element for adding events
const wrapper = document.querySelector('.wrapper1');
const orderPopUp = document.querySelector('.confirmBtn');
const iconClose = document.querySelector('.icon-close');

// adding event for pop screen 
orderPopUp.addEventListener('click', () => {
    wrapper.classList.add('active-popup');

    generateBill();
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    let itemListElement = document.querySelector('.items-list');
    // clear the bill item container
    itemListElement.innerHTML = ""
})

// generate bill based on selected food card
function generateBill() {

    const selectedCard = document.querySelectorAll('.wrapper.selected');

    let selectFoods = []; 

    if (selectedCard != null) {
        selectedCard.forEach(selectedCard => {
            let foodName = selectedCard.children[1].children[0].textContent;
            let foodCost = selectedCard.children[1].children[2].textContent;
            
            // adding select food name and cost to selectfoods arry
            selectFoods.push({
                name: foodName,
                cost: foodCost
            });
        })
    }

    // selecting items list container than will contain all list items
    let itemListElement = document.querySelector('.items-list');
    
    // generating dynamic content for pop screen item list
    let itemListContent = ""

    selectFoods.forEach(item => {
        itemListContent = itemListContent + `     <div class="item">
            <div class="item-name">${item.name}</div>
            <div class="item-cost">${item.cost}</div>
    </div>`
    }
    )
    itemListElement.innerHTML = itemListContent;





    // calculating total cost from item list and updating total cost value
    let totalCostElement = document.getElementById('totalCost')
    let totalCostValue = 0;

    selectFoods.forEach(item => {
        totalCostValue = totalCostValue + parseInt(item.cost);
    })
    totalCostElement.textContent = totalCostValue;
}