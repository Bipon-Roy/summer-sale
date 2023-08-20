let total = 0;
let floatTotal = 0;
let discount = 0;
function cartCalculation(target) {
    //getting product name
    const itemContainer = document.getElementById("cart-list");
    const itemName = target.childNodes[3].childNodes[3].innerText;

    //create list of product name and adding to the container
    const li = document.createElement("li");
    li.innerText = itemName;
    itemContainer.appendChild(li);

    //getting product name from container
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

    //calculate total price
    total = parseFloat(total) + parseFloat(price);
    floatTotal = total.toFixed(2);

    //set total price value to total value
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = floatTotal;

    //activating Make-Purchase button
    const discountValue = document.getElementById("discount");

    const makePurchase = document.getElementById("btn-purchase");
    if (floatTotal > 0) {
        makePurchase.removeAttribute("disabled");
        makePurchase.classList.remove("bg-text-gray");
        makePurchase.classList.add("bg-main-color");
    }

    //activating apply button and updating discount value
    const applyButton = document.getElementById("btn-discount");

    if (floatTotal >= 200) {
        let newDiscount;
        applyButton.removeAttribute("disabled");
        applyButton.classList.remove("bg-text-gray");
        applyButton.classList.add("bg-main-color");
        newDiscount = floatTotal * 0.2;
        discount = newDiscount.toFixed(2);
    }

    discountValue.innerText = "0.00";
    //added apply button functionality with promo code
    applyButton.addEventListener("click", function () {
        const discountField = document.getElementById("discount-field");
        let totalAfterDiscount = 0;
        //calculating total price after applying promo code
        if (discountField.value === "SELL200") {
            discountValue.innerText = discount;
            totalAfterDiscount = floatTotal - discount;
            grandTotal.innerText = totalAfterDiscount.toFixed(2);
            discountField.value = "";
        }
    });
    // update total price after discount
    document.getElementById("total").innerText = floatTotal;
}
