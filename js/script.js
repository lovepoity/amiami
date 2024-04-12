document.addEventListener("DOMContentLoaded", function () {
  // Xử lý hình ảnh slide
  const slideImages = [
    "./img/slide/1.jpg",
    "./img/slide/2.jpg",
    "./img/slide/3.jpg",
    "./img/slide/4.jpg",
    "./img/slide/5.jpg",
  ];
  let currentSlide = 0;
  const slideContainer = document.querySelector(".side2 .slide a img");
  const slideRowIcons = document.querySelectorAll(".side2 .slide-row i");
  let slideInterval; // Biến để lưu trữ interval của auto slide

  // Hiển thị ảnh slide đầu tiên khi trang được tải
  slideContainer.src = slideImages[currentSlide];
  slideInterval = setInterval(nextImage, 3000); // Lưu trữ interval vào biến slideInterval

  // Dừng interval khi hover vào slide
  slideContainer.addEventListener("mouseenter", function () {
    clearInterval(slideInterval); // Xóa interval
  });

  // Bắt đầu lại interval khi rời khỏi slide
  slideContainer.addEventListener("mouseleave", function () {
    slideInterval = setInterval(nextImage, 3000); // Khởi tạo lại interval
  });

  // Xử lý sự kiện khi nhấn vào các nút điều hướng
  slideRowIcons.forEach(function (icon, index) {
    icon.addEventListener("click", function () {
      currentSlide = index;
      slideContainer.src = slideImages[currentSlide];
      highlightCurrentSlideIcon();
    });
  });

  // Đánh dấu icon của slide hiện tại
  function highlightCurrentSlideIcon() {
    slideRowIcons.forEach(function (icon, index) {
      if (index === currentSlide) {
        icon.style.color = "black";
      } else {
        icon.style.color = "rgb(133, 142, 148)";
      }
    });
  }

  // Hàm chuyển đổi slide tự động
  function nextImage() {
    currentSlide = (currentSlide + 1) % slideImages.length;
    slideContainer.src = slideImages[currentSlide];
    highlightCurrentSlideIcon();
  }
});

let imagePaths = [
  "./img/slide/1.jpg",
  "./img/slide/2.jpg",
  "./img/slide/3.jpg",
  "./img/slide/4.jpg",
  "./img/slide/5.jpg",
];
let currentIndex = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  let path = imagePaths[currentIndex];
  document.getElementById("mainslide").setAttribute("src", path);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  let path = imagePaths[currentIndex];
  document.getElementById("mainslide").setAttribute("src", path);
}

//buton cart
document.addEventListener("DOMContentLoaded", function () {
  var shopBtn = document.getElementById("shop"); // Lấy thẻ button với id là 'shop'
  var cartSection = document.getElementById("cartSection"); // Lấy phần cart

  // Kiểm tra xem phần cart có được hiển thị hay không
  var isCartVisible = false;

  shopBtn.addEventListener("click", function () {
    // Đảo ngược trạng thái của phần cart khi nhấp vào nút shop
    if (!isCartVisible) {
      cartSection.style.display = "block"; // Hiển thị phần cart
      isCartVisible = true; // Cập nhật trạng thái
    } else {
      cartSection.style.display = "none"; // Ẩn phần cart
      isCartVisible = false; // Cập nhật trạng thái
    }
  });
});

//active menu
document.addEventListener("DOMContentLoaded", function () {
  var allItemsLink = document.querySelector(".side2-menu ul li:first-child a");
  allItemsLink.classList.add("active");
});
//blur nền
document.addEventListener("DOMContentLoaded", function () {
  var shopBtn = document.getElementById("shop");
  var cartSection = document.getElementById("cartSection");
  var blurBackground = document.querySelector(".blur-background1");
  var isCartVisible = false;

  shopBtn.addEventListener("click", function () {
    toggleCart();
  });

  function toggleCart() {
    if (!isCartVisible) {
      cartSection.style.display = "block";
      blurBackground.classList.add("active"); // Hiển thị phần mờ nền khi hiển thị cart
      isCartVisible = true;
    } else {
      cartSection.style.display = "none";
      blurBackground.classList.remove("active"); // Ẩn phần mờ nền khi ẩn cart
      isCartVisible = false;
    }
  }

  // Sự kiện click cho phần mờ nền để đóng cartSection
  blurBackground.addEventListener("click", function () {
    toggleCart();
  });
});

//đóng cart
document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var cartSection = document.getElementById("cartSection");
  var blurBackground = document.querySelector(".blur-background1");
  var shopBtn = document.getElementById("shop"); // Nút "shop" để mở/đóng cartSection
  var isCartVisible = false;

  // Hiển thị hoặc ẩn cartSection và phần mờ nền
  function toggleCart() {
    if (!isCartVisible) {
      // Hiển thị cartSection
      cartSection.style.display = "block";
      isCartVisible = true;
      // Hiển thị phần mờ nền
      blurBackground.classList.add("active");
    } else {
      // Ẩn cartSection
      cartSection.style.display = "none";
      isCartVisible = false;
      // Kiểm tra xem phần mờ nền đã hiển thị hay chưa
      if (blurBackground.classList.contains("active")) {
        // Nếu đã hiển thị, vẫn giữ nguyên trạng thái
        blurBackground.classList.add("active");
      } else {
        // Nếu chưa hiển thị, hiển thị phần mờ nền
        blurBackground.classList.remove("active");
      }
    }
  }

  // Sự kiện click cho nút "shop" để mở/đóng cartSection
  shopBtn.addEventListener("click", function (event) {
    toggleCart();
    event.stopPropagation(); // Ngăn chặn sự kiện click từ lan ra ngoài nút "shop"
  });

  // Sự kiện click cho phần mờ nền để đóng cartSection
  blurBackground.addEventListener("click", function () {
    toggleCart();
  });

  // Sự kiện click cho body để đóng cartSection khi click bên ngoài cart
  body.addEventListener("click", function (event) {
    // Kiểm tra xem người dùng có click vào cart hay không
    if (event.target !== cartSection && !cartSection.contains(event.target)) {
      // Nếu không phải là cartSection hoặc một phần tử con của cartSection
      if (isCartVisible) {
        toggleCart(); // Đóng cartSection nếu đang mở
      }
    }
  });
});
//hidden text
// Lấy ra các phần tử cần tương tác
const chevron = document.getElementById("chevron");
const upChevron = document.getElementById("up-chevron");
const hiddenText = document.getElementById("hiddenText");

// Định nghĩa hàm để hiển thị hoặc ẩn văn bản và chevron
function toggleText() {
  hiddenText.classList.toggle("hidden");
  chevron.classList.toggle("hidden");
  chevron.classList.toggle("show-icon");
  upChevron.classList.toggle("hidden");
}

// Thêm sự kiện click cho biểu tượng chevron
chevron.addEventListener("click", toggleText);
upChevron.addEventListener("click", toggleText); // Bổ sung sự kiện cho biểu tượng chevron ngược lại

const texts = [
  "Unleash your imagination with Figure's enchanting Nendoroid collection - Miniature wonders await!",
  "Captivate your world with Figure's Nendoroid figures - Tiny treasures, endless adventures!",
  "Embrace the magic of Nendoroid - Dive into Figure's whimsical universe and collect your favorite characters today!",
];
let currentIndex2 = 0;
const changingTextElement = document.getElementById("changingText");

function changeText() {
  changingTextElement.textContent = texts[currentIndex2];
  currentIndex2++;
  if (currentIndex2 === texts.length) {
    currentIndex2 = 0;
  }
}

function initText() {
  changeText();
  setInterval(changeText, 9000);
}

initText();
