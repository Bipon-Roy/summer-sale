let total = 0;
let discount = 0;
function cartCalculation(target) {
    const itemContainer = document.getElementById("cart-list");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    itemContainer.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    floatTotal = total.toFixed(2);

    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = floatTotal;

    const discountValue = document.getElementById("discount");

    const makePurchase = document.getElementById("btn-purchase");
    if (floatTotal > 0) {
        makePurchase.removeAttribute("disabled");
        makePurchase.classList.remove("bg-text-gray");
        makePurchase.classList.add("bg-main-color");
    }

    const applyButton = document.getElementById("btn-discount");

    if (floatTotal >= 200) {
        let newDiscount;
        applyButton.removeAttribute("disabled");
        applyButton.classList.remove("bg-text-gray");
        applyButton.classList.add("bg-main-color");
        newDiscount = floatTotal * 0.2;
        discount = newDiscount.toFixed(2);
        discountValue.innerText = discount;
    }

    applyButton.addEventListener("click", function () {
        const discountField = document.getElementById("discount-field");
        let totalAfterDiscount = 0;
        if (discountField.value === "SELL200") {
            totalAfterDiscount = floatTotal - discount;
            grandTotal.innerText = totalAfterDiscount.toFixed(2);
            discountField.value = "";
        }
    });
    document.getElementById("total").innerText = floatTotal;
}
