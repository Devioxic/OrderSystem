const menu = {
    "pizza_class_1": [
        { "name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
        { "name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
        { "name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
    ],
    "pizza_class_2": [
        { "name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
        { "name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner"], "price": 70 },
        { "name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor"], "price": 70 },
        { "name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas"], "price": 70 },
        { "name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs"], "price": 70 },
        { "name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk"], "price": 70 },
        { "name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök"], "price": 70 },
        { "name": "Napoli", "contents": ["Tomatsås", "Ost", "Räkor", "Champinjoner"], "price": 70 }
    ],
    "pizza_class_3": [
        { "name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "a:Ägg"], "price": 75 },
        { "name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner"], "price": 75 },
        { "name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner"], "price": 75 },
        { "name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan"], "price": 75 },
        { "name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner"], "price": 85 },
        { "name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "a:Räkor"], "price": 75 },
        { "name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "a:Crabfish", "a:Räkor"], "price": 75 },
        { "name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Ananas"], "price": 75 },
        { "name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)"], "price": 75 },
        { "name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika"], "price": 75 },
        { "name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök"], "price": 75 },
        { "name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan"], "price": 75 },
        { "name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "a:Nötter"], "price": 75 }
    ],
    "sauces": [
        { "name": "Bearnaisesås 10 cl ", "price": 10 },
        { "name": "Kebabsås mild 10 cl ", "price": 10 },
        { "name": "Kebabsås stark 10 cl ", "price": 10 },
        { "name": "Kebabsås blandad 10 cl ", "price": 10 },
        { "name": "Tzatzikisås 10 cl ", "price": 10 },
        { "name": "Vitlökssås 10 cl ", "price": 10 }
    ],
    "drinks": [
        { "name": "Coca-Cola 33 cl ", "price": 15 },
        { "name": "Coca-Cola light 33 cl ", "price": 15 },
        { "name": "Fanta 33 cl ", "price": 15 },
        { "name": "Sprite 33 cl ", "price": 15 },
        { "name": "Mineralvatten 33 cl ", "price": 15 },
        { "name": "Lättöl 33 cl ", "price": 15 },
        { "name": "Coca-Cola 50 cl ", "price": 20 },
        { "name": "Fanta 50 cl ", "price": 20 }
    ]
}

const newOrderButton = document.getElementById("newOrder");
const historyButton = document.getElementById("history");
const orderInfo = document.getElementById("orderInfo");
const orderConfirm = document.getElementById("orderConfirm");
const backButtons = document.querySelectorAll(".back-button");
const orderNavButtons = document.querySelectorAll(".order-nav-button");
const navBar = document.querySelector(".nav-bar");

const homeDiv = document.querySelector(".home");
const orderDiv = document.querySelector(".order");
const receiptDiv = document.querySelector(".kvitto");
const historyDiv = document.querySelector(".historik");

const pizzas = document.querySelector(".pizzas");
const sauces = document.querySelector(".sauces");
const soda = document.querySelector(".soda");

const orderSearch = document.getElementById("orderSearch");

const confirmDialog = document.querySelector(".confirm-dialog");
const confirmDialogConfirm = confirmDialog.querySelector(".button-primary");
const confirmDialogCancel = confirmDialog.querySelector(".button-danger");

const infoDialog = document.querySelector(".info-dialog");
const infoPrimary = document.getElementById("infoPrimary");
const infoSecondary = document.getElementById("infoSecondary");

let previousPage = null;
let currentPage = homeDiv;
let activeButton = document.querySelector(".selected");
let activeSection = document.querySelector(".menu-active");
let currentOrder = [];
let recentOrders = [];
/*
recentOrders = [
    {
        "Bord": "12",
        "Produkter": [
            { "name": "Margherita", "price": 65, "specialInstructions": "Ingen ost" },
            { "name": "Coca-Cola 33 cl", "price": 15 }
        ],
        "Datumn": "2021-09-01",
        "Tid": "12:00"
    }
]
*/
/*
currentOrder = [
    {
        "name": "Margherita",
        "price": 65,
        "specialInstructions": "Ingen ost"
    },
    {
        "name": "Coca-Cola 33 cl",
        "price": 15,
        "specialInstructions": "Ingen is"
    }
];
*/

function updateTotalPrice() {
    const priceElement = document.querySelector("#total-price");

    let totalPrice = 0;

    currentOrder.forEach(item => {
        totalPrice += item.price;
    });

    priceElement.textContent = `${totalPrice} :-`;
}

function confirmOrder() {
    if (currentOrder.length === 0) {
        return;
    }

    const tableNumber = infoDialog.querySelector("select").value;

    recentOrders.push(
        {
            "Bord": tableNumber,
            "Produkter": currentOrder,
            "Datumn": new Date().toISOString().split("T")[0],
            "Tid": new Date().toLocaleTimeString().slice(0, 5)
        }
    );

    currentOrder = [];
    updateTotalPrice();

    backButtons[0].click();
    
    console.log(recentOrders);
}

infoPrimary.addEventListener("click", () => {
    if (infoPrimary.textContent === "Stäng") {
        infoDialog.classList.add("hidden");
        return;
    } else {
        infoSecondary.classList.add("hidden");
        infoDialog.classList.add("hidden");
        infoDialog.querySelector(".table-numbers").classList.add("hidden");
        confirmOrder();
    }
});

infoSecondary.addEventListener("click", () => {
    infoDialog.classList.add("hidden");
});

function fillInfoDialog() {
    clearElement(infoDialog.querySelector("ul"));
    let totalPrice = 0;
    currentOrder.forEach(item => {
        const newLi = document.createElement("li");
        const newDiv1 = document.createElement("div");
        const newDiv2 = document.createElement("div");
        const newDiv3 = document.createElement("div");
        const name = document.createElement("p");
        const price = document.createElement("p");
        const removeButton = document.createElement("button");
        const extraInfo1 = document.createElement("p");
        const extraInfo2 = document.createElement("p");

        newDiv1.classList.add("li-row");
        newDiv2.classList.add("li-right");
        newDiv3.classList.add("li-row");
        extraInfo2.classList.add("extra-info-actual");

        name.textContent = item.name;
        price.textContent = `${item.price} :-`;
        extraInfo1.textContent = "Extra info:";
        extraInfo2.textContent = item.specialInstructions;
        extraInfo2.style.marginRight = "0.25rem";
        removeButton.textContent = "x";
        removeButton.classList.add("info-remove");

        removeButton.addEventListener("click", () => {
            currentOrder.splice(currentOrder.indexOf(item), 1);
            newLi.remove();
            updateTotalPrice();
        });

        newDiv2.appendChild(price);
        newDiv2.appendChild(removeButton);

        newDiv1.appendChild(name);
        newDiv1.appendChild(newDiv2);

        newDiv3.appendChild(extraInfo1);
        newDiv3.appendChild(extraInfo2);

        newLi.appendChild(newDiv1);
        newLi.appendChild(newDiv3);

        infoDialog.querySelector("ul").appendChild(newLi);

        totalPrice += item.price;
    });

    document.getElementById("infoTotalText").textContent = `${totalPrice} :-`;
}

orderInfo.addEventListener("click", () => {
    fillInfoDialog();
    infoPrimary.textContent = "Stäng";
    infoDialog.querySelector(".table-numbers").classList.add("hidden");
    infoDialog.classList.remove("hidden");
});

orderConfirm.addEventListener("click", () => {
    fillInfoDialog();
    infoPrimary.textContent = "Bekräfta";
    infoDialog.querySelector(".table-numbers").classList.remove("hidden");
    infoSecondary.classList.remove("hidden");
    infoDialog.classList.remove("hidden");
});

confirmDialogConfirm.addEventListener("click", () => {
    confirmDialog.classList.add("hidden");
    currentOrder.push(
        {
            "name": confirmDialog.querySelector("h2").textContent,
            "price": findMenuItem(confirmDialog.querySelector("h2").textContent).price,
            "specialInstructions": confirmDialog.querySelector("textarea").value
        }
    );
    updateTotalPrice();
});

confirmDialogCancel.addEventListener("click", () => {
    confirmDialog.classList.add("hidden");
});

function parseAllergens(items) {
    if (!items.contents) {
        return "";
    }

    let allergens = ""

    items.contents.forEach(content => {
        if (content.startsWith("a:")) {
            const allergen = `<b>${content.slice(2)}</b>, `;
            allergens += allergen;
        } else {
            allergens += `${content}, `;
        }
    });

    allergens = allergens.slice(0, -2);

    return allergens;
}

function findMenuItem(item) {
    const pizzas = menu.pizza_class_1.concat(menu.pizza_class_2, menu.pizza_class_3);
    const sauces = menu.sauces;
    const drinks = menu.drinks;

    const allItems = pizzas.concat(sauces, drinks);

    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].name === item) {
            return allItems[i];
        }
    }

    return null;
}

function searchForThing(list, search) { // Searches for a p tag containing the search string
    list.querySelectorAll("p").forEach(p => {
        if (p.textContent.toLowerCase().includes(search.toLowerCase())) {
            p.parentElement.style.display = "flex";
        } else {
            if (!p.textContent.includes(":-")) { // Make sure that we don't hide items just because they have a price
                p.parentElement.style.display = "none";
            }
        }
    });
}

orderSearch.addEventListener("input", () => { // Search all so that if the user changes tab they can still see the search results
    searchForThing(pizzas.querySelector("ul"), orderSearch.value);
    searchForThing(sauces.querySelector("ul"), orderSearch.value);
    searchForThing(soda.querySelector("ul"), orderSearch.value);
});


function createMenuElement(item) {
    const li = document.createElement("li");
    const name = document.createElement("p");
    const price = document.createElement("p");

    name.textContent = item.name;
    price.textContent = `${item.price} :-`;

    li.appendChild(name);
    li.appendChild(price);

    li.classList.add("menu-item");

    return li;
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function loadMenu() {
    const pizzaUl = pizzas.querySelector("ul");

    clearElement(pizzaUl);

    const class1Li = document.createElement("li");
    const class1 = document.createElement("h2");
    class1.textContent = "Pizzor Klass 1";

    class1Li.appendChild(class1);
    pizzaUl.appendChild(class1Li);

    menu.pizza_class_1.forEach(pizza => {
        pizzaUl.appendChild(createMenuElement(pizza));
    });

    const class2Li = document.createElement("li");
    const class2 = document.createElement("h2");
    class2.textContent = "Pizzor Klass 2";

    class2Li.appendChild(class2);
    pizzaUl.appendChild(class2Li);

    menu.pizza_class_2.forEach(pizza => {
        pizzaUl.appendChild(createMenuElement(pizza));
    });

    const class3Li = document.createElement("li");
    const class3 = document.createElement("h2");
    class3.textContent = "Pizzor Klass 3";

    class3Li.appendChild(class3);
    pizzaUl.appendChild(class3Li);

    menu.pizza_class_3.forEach(pizza => {
        pizzaUl.appendChild(createMenuElement(pizza));
    });

    const sauceUl = sauces.querySelector("ul");

    clearElement(sauceUl);

    menu.sauces.forEach(sauce => {
        sauceUl.appendChild(createMenuElement(sauce));
    });

    const sodaUl = soda.querySelector("ul");

    clearElement(sodaUl);

    menu.drinks.forEach(drink => {
        sodaUl.appendChild(createMenuElement(drink));
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", () => {
            const itemName = item.querySelector("p").textContent;
            const menuItem = findMenuItem(itemName);

            const dialogName = confirmDialog.querySelector("h2");
            const dialogContents = confirmDialog.querySelector("p");

            dialogName.textContent = menuItem.name;

            dialogContents.innerHTML = parseAllergens(menuItem); // Not good, but it works

            confirmDialog.querySelector("textarea").value = "";
            confirmDialog.classList.remove("hidden");
        });
    });
}

newOrderButton.addEventListener("click", () => {
    loadMenu();

    homeDiv.classList.add("page-left");
    homeDiv.classList.remove("active");
    orderDiv.classList.add("active");
    orderDiv.classList.remove("page-right");

    previousPage = homeDiv;
    currentPage = orderDiv;
});

function fillReceipt(order) {
    const receiptUl = receiptDiv.querySelector("ul");
    clearElement(receiptUl);

    const h2 = receiptDiv.querySelector("h2");

    h2.textContent = `Bord ${order.Bord} ${order.Datumn} ${order.Tid}`;

    let totalPrice = 0;

    order.Produkter.forEach(item => {
        const li = document.createElement("li");
        const name = document.createElement("p");
        const price = document.createElement("p");
        const specialInstructions = document.createElement("p");
        const extraInfo = document.createElement("p");
        const extraInfoDiv = document.createElement("div");
        const priceDiv = document.createElement("div");

        specialInstructions.textContent = "Extra info:";
        extraInfo.textContent = item.specialInstructions;

        extraInfoDiv.appendChild(specialInstructions);
        extraInfoDiv.appendChild(extraInfo);

        name.textContent = item.name;
        price.textContent = `${item.price} :-`;

        priceDiv.appendChild(name);
        priceDiv.appendChild(price);

        li.appendChild(priceDiv);
        li.appendChild(extraInfoDiv);

        receiptUl.appendChild(li);

        totalPrice += item.price;
    });

    const totalP = receiptDiv.querySelector(".kvitto-total-p");

    totalP.textContent = `${totalPrice} :-`;
}

function moveToReceipt(order) {
    historyDiv.classList.add("page-left");
    historyDiv.classList.remove("active");
    receiptDiv.classList.add("active");
    receiptDiv.classList.remove("page-right");

    fillReceipt(order);

    previousPage = historyDiv;
    currentPage = receiptDiv;
}

function fillHistory() {
    const historyUl = historyDiv.querySelector("ul");
    clearElement(historyUl);
    recentOrders.forEach(order => {
        console.log(order);

        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        const items = {}

        order.Produkter.forEach(item => {
            if (items[item.name]) {
                items[item.name].count++;
            } else {
                items[item.name] = { "count": 1, "price": item.price };
            }
        });

        let orderString = "";

        for (const [key, value] of Object.entries(items)) {
            orderString += `x${value.count} ${key}, `;
        }

        orderString = orderString.slice(0, -2);

        h2.textContent = `Bord ${order.Bord} ${order.Datumn} ${order.Tid}`;

        p.textContent = orderString;

        li.appendChild(h2);
        li.appendChild(p);

        historyUl.appendChild(li);

        li.addEventListener("click", () => {
            moveToReceipt(order);
        });
    });
}

historyButton.addEventListener("click", () => {
    homeDiv.classList.add("page-left");
    homeDiv.classList.remove("active");
    historyDiv.classList.add("active");
    historyDiv.classList.remove("page-right");

    fillHistory();

    previousPage = homeDiv;
    currentPage = historyDiv;
});

function removeAllClasses(element) {
    element.className = "";
}

function resetOrderSection() {
    activeButton.classList.remove("selected");

    activeSection = pizzas;
    activeButton = document.querySelector("#pizza");
    activeButton.classList.add("selected");

    removeAllClasses(activeSection);
    activeSection.classList.add("menu-active");
    activeSection.classList.add("pizzas");

    removeAllClasses(soda);
    soda.classList.add("menu-right");
    soda.classList.add("soda");

    removeAllClasses(sauces);
    sauces.classList.add("menu-right");
    sauces.classList.add("sauces");

    updateNavBarPosition(false);
}

backButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentPage.classList.add("page-right");
        currentPage.classList.remove("active");

        if (button.classList.contains("history-back")) {
            previousPage = homeDiv;
        }

        previousPage.classList.add("active");
        previousPage.classList.remove("page-left");

        resetOrderSection();

        currentPage = previousPage;
    });
});

function updateNavBarPosition(skipAnimation = false) {
    if (skipAnimation) {
        navBar.style.transition = "none";
    } else {
        navBar.style.transition = "left 0.3s, width 0.3s";
    }
    navBar.style.width = `${activeButton.offsetWidth * 1.1}px`;
    navBar.style.left = `${activeButton.offsetLeft - (activeButton.offsetWidth * 0.05)}px`;
}

orderNavButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (activeButton === button) {
            return;
        }

        activeButton.classList.remove("selected");
        activeButton = button;
        activeButton.classList.add("selected");

        activeSection.classList.remove("menu-active");

        console.log(activeButton.id);

        if (activeButton.id === "pizza") {
            activeSection.classList.add("menu-right");

            pizzas.classList.add("menu-active");
            activeSection = pizzas;
        } else if (activeButton.id === "sauces") {
            activeSection.classList.add("menu-left");

            sauces.classList.add("menu-active");

            activeSection = sauces;
        } else if (activeButton.id === "drinks") {
            if (activeSection.classList.contains("pizzas")) {
                activeSection.classList.add("menu-left");
            } else {
                activeSection.classList.add("menu-right");
            }

            soda.classList.add("menu-active");
            activeSection = soda;
        }

        if (activeSection.classList.contains("menu-left")) {
            activeSection.classList.remove("menu-left");
        }
        if (activeSection.classList.contains("menu-right")) {
            activeSection.classList.remove("menu-right");
        }

        updateNavBarPosition(false);
    });
});

updateNavBarPosition(true);

window.addEventListener("resize", () => {
    updateNavBarPosition(true);
});