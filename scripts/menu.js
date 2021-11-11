if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('order-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('addToCart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

// event for removing items from the cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal() // Updates the order total
}

// Event for not allowing the quantity to go below 0
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal() // Updates the order total
}

// Event for adding items to the cart
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('dish')[0].innerText
    var price = shopItem.getElementsByClassName('priceOverlay')[0].innerText
    // Closes overlays on pressing "add to cart"
    document.getElementById('myOverlay1').style.display = "none"
    document.getElementById('myOverlay2').style.display = "none"
    document.getElementById('myOverlay3').style.display = "none"
    document.getElementById('myOverlay4').style.display = "none"
    document.getElementById('myOverlay5').style.display = "none"
    document.getElementById('myOverlay6').style.display = "none"
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('order-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('order-item-title')

    var cartRowContents = `
      <div class="order-item cart-column">
        <input class="order-quantity-input" type="number" value="1">
        <span class="order-item-title">${title}</span>
        <span class="order-price cart-column">${price}</span>
        <button class="btn btn-danger" type="button"><span class="remove-text">REMOVE</span></button>
      </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('order-quantity-input')[0].addEventListener('change', quantityChanged)
}

// Updates the order total based on elements in shopping cart and quantity
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('order-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('order-price')[0]
        var quantityElement = cartRow.getElementsByClassName('order-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('kr', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('order-total-price')[0].innerText = total + 'kr'
}
