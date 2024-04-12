// Lắng nghe sự kiện click trên tất cả các nút "Add to Cart"
const btns = document.querySelectorAll(".buy");
btns.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let btnItem = event.target;
    let product = btnItem.parentElement;
    let productPrice = product.querySelector(".price span").textContent.trim();
    let productImage = product.querySelector("img").src;
    let productName = product.querySelector(".name").textContent.trim();
    add_to_cart(productImage, productName, productPrice);
    updateCartQuantity(); // Cập nhật số lượng sản phẩm ở góc của nút "Cart"
  });
});

// Hàm thêm sản phẩm vào giỏ hàng
function add_to_cart(productImage, productName, productPrice) {
  let cartItems = document.querySelectorAll(".product");

  // Kiểm tra xem mặt hàng đã tồn tại trong giỏ hàng chưa
  let existingItem = Array.from(cartItems).find((item) => {
    return (
      item.querySelector(".product-img img").src === productImage &&
      item.querySelector(".product-name").textContent === productName
    );
  });

  // Nếu mặt hàng đã tồn tại, tăng số lượng và cập nhật giá, nhưng không vượt quá 99
  if (existingItem) {
    let quantityDisplay = existingItem.querySelector(".quantity-display");
    let currentValue = parseInt(quantityDisplay.textContent);
    if (currentValue < 99) {
      quantityDisplay.textContent = currentValue + 1;
      updatePrice(existingItem, productPrice, currentValue + 1);
      updateCartInfo(); // Cập nhật giỏ hàng sau khi thay đổi số lượng sản phẩm
      updateCartQuantity(); // Cập nhật số lượng sản phẩm ở góc của nút "Cart"
    }
  } else {
    // Nếu mặt hàng chưa tồn tại, thêm mới vào giỏ hàng
    let newProductDiv = document.createElement("div");
    newProductDiv.classList.add("product");
    newProductDiv.innerHTML = `
      <div class="product-row1">
        <div class="product-img">
          <img src="${productImage}" alt="" />
        </div>
        <div class="product-name">${productName}</div>
        <div class="product-price">${productPrice}<sub> JPY</sub></div>
      </div>
      <div class="product-row2">
        <div class="quantity-controls">
          <button class="decrease-quantity">-</button>
          <span class="quantity-display">1</span>
          <button class="increase-quantity">+</button>
        </div>
        <button class="delete">Delete</button>
      </div>
    `;

    // Thêm sự kiện click cho nút "Delete"
    let deleteButton = newProductDiv.querySelector(".delete");
    deleteButton.addEventListener("click", function (event) {
      event.stopPropagation();
      newProductDiv.remove();
      updateCartInfo();
      updateCartQuantity(); // Cập nhật số lượng sản phẩm ở góc của nút "Cart"
    });

    // Thêm sự kiện click cho nút - và +
    let decreaseBtn = newProductDiv.querySelector(".decrease-quantity");
    decreaseBtn.addEventListener("click", function (event) {
      let quantityDisplay = newProductDiv.querySelector(".quantity-display");
      let currentValue = parseInt(quantityDisplay.textContent);
      if (currentValue > 1) {
        quantityDisplay.textContent = currentValue - 1;
        updatePrice(newProductDiv, productPrice, currentValue - 1);
        updateCartInfo(); // Cập nhật giỏ hàng sau khi giảm số lượng sản phẩm
        updateCartQuantity(); // Cập nhật số lượng sản phẩm ở góc của nút "Cart"
      }
    });

    let increaseBtn = newProductDiv.querySelector(".increase-quantity");
    increaseBtn.addEventListener("click", function (event) {
      let quantityDisplay = newProductDiv.querySelector(".quantity-display");
      let currentValue = parseInt(quantityDisplay.textContent);
      if (currentValue < 99) {
        quantityDisplay.textContent = currentValue + 1;
        updatePrice(newProductDiv, productPrice, currentValue + 1);
        updateCartInfo(); // Chỉ gọi lại khi số lượng sản phẩm đã thay đổi
        updateCartQuantity(); // Cập nhật số lượng sản phẩm ở góc của nút "Cart"
      }
    });

    document.querySelector(".cart").appendChild(newProductDiv);
    updateCartInfo(); // Gọi updateCartInfo() sau khi thêm sản phẩm mới vào giỏ hàng
  }
}

// Hàm cập nhật giá sản phẩm khi thay đổi số lượng
function updatePrice(row, productPrice, quantity) {
  let priceElement = row.querySelector(".product-price");
  let priceValue = parseFloat(productPrice.replace(/[^0-9.]+/g, "")); // Lấy giá trị số từ chuỗi giá trị
  let totalPrice = priceValue * quantity;

  // Cập nhật giá trị số với định dạng tiền tệ
  priceElement.textContent = totalPrice.toLocaleString();
  // Thêm ký tự "JPY" sau giá tiền
  let subTag = document.createElement("sub");
  subTag.textContent = " JPY";
  priceElement.appendChild(subTag);

  return totalPrice; // Trả về giá trị tổng tiền để sử dụng trong tính toán tổng giá tiền
}

// Hàm cập nhật giỏ hàng
function updateCartInfo() {
  let cartItems = document.querySelectorAll(".product");
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((item) => {
    let quantity = parseInt(
      item.querySelector(".quantity-display").textContent
    );
    let priceText = item.querySelector(".product-price").textContent.trim();
    let priceValue = parseFloat(priceText.replace(/[^0-9.]+/g, ""));
    totalPrice += priceValue;
    totalQuantity += quantity;
  });

  // Cập nhật tổng số lượng sản phẩm
  document.querySelector(".quantity p").textContent = totalQuantity;

  // Cập nhật tổng giá tiền
  let totalPriceElement = document.querySelector(".total p");
  totalPriceElement.textContent = totalPrice.toLocaleString(); // Sử dụng toLocaleString() để định dạng tiền tệ

  // Thêm ký tự "JPY" sau tổng tiền
  let subTag = document.createElement("sub");
  subTag.textContent = " JPY";
  totalPriceElement.appendChild(subTag);

  // Kiểm tra nếu giỏ hàng trống, hiển thị thông báo
  let noItemMessage = document.querySelector(".no-item-message");
  if (totalQuantity === 0) {
    noItemMessage.textContent = "No item in cart";
    // Nếu giỏ hàng trống, xóa phần tử chứa số lượng sản phẩm ra khỏi DOM
    let cartQuantity = document.querySelector(".cart-quantity");
    if (cartQuantity) {
      cartQuantity.remove();
    }
  } else {
    noItemMessage.textContent = "";
  }
}

// Hàm cập nhật số lượng sản phẩm ở góc của nút "Cart"
function updateCartQuantity() {
  let cartItems = document.querySelectorAll(".product");
  let totalQuantity = 0;

  cartItems.forEach((item) => {
    let quantity = parseInt(
      item.querySelector(".quantity-display").textContent
    );
    totalQuantity += quantity;
  });

  let cartButton = document.getElementById("shop");
  let cartQuantity = cartButton.querySelector(".cart-quantity");

  if (!cartQuantity) {
    cartQuantity = document.createElement("span");
    cartQuantity.classList.add("cart-quantity");
    cartButton.appendChild(cartQuantity);
  }

  cartQuantity.textContent = totalQuantity;
}
