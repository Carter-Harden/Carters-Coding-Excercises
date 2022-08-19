const food = [
    {
        name: "Orange",
        price: 2.25
    },
    {
        name: "Peanut",
        price: 0.25
    },
    {
        name: "Banana",
        price: 5.25
        // banana prices are crazy right now
    }
]
for (const products of food) {
    let item = document.createElement("li");
    const mainlist = document.getElementById("foods");
    mainlist.appendChild(item);
    item.textContent = products.name;
    
};