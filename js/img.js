document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các span trong mọi ranking-box
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Function để hiển thị thumbnail và blur background
  function showThumbnail(thumbnail) {
    thumbnail.style.display = "block";
    thumbnail.nextElementSibling.style.display = "block"; // Hiển thị blur background
  }

  // Function để ẩn thumbnail và blur background
  function hideThumbnail(thumbnail) {
    thumbnail.style.display = "none";
    thumbnail.nextElementSibling.style.display = "none"; // Ẩn blur background
  }

  // Lặp qua mỗi thumbnail và thêm sự kiện click
  thumbnails.forEach(function (thumbnail) {
    const span = thumbnail.previousElementSibling.querySelector("span");
    span.addEventListener("click", function () {
      showThumbnail(thumbnail);
    });
  });
});

// blur
document.addEventListener("DOMContentLoaded", function () {
  const itemBox = document.querySelectorAll(".ranking-box");
  const blurBackground = document.querySelector(".blur-background2");

  // Function để hiển thị thumbnail và blur background
  function showThumbnail(thumbnail) {
    thumbnail.style.display = "block";
    blurBackground.style.display = "block";
  }

  // Function để ẩn thumbnail và blur background
  function hideThumbnail(thumbnail) {
    thumbnail.style.display = "none";
    blurBackground.style.display = "none";
  }

  // Lặp qua từng ranking-box và thêm sự kiện click vào tất cả các span bên trong nó
  itemBox.forEach(function (rankingBox) {
    const thumbnail = rankingBox.querySelector(".thumbnail");
    const spans = rankingBox.querySelectorAll("span");
    spans.forEach(function (span) {
      span.addEventListener("click", function () {
        showThumbnail(thumbnail);
      });
    });
  });

  // Sự kiện nghe click bên ngoài thumbnail
  document.addEventListener("click", function (event) {
    const isClickInsideThumbnail = Array.from(itemBox).some(function (
      rankingBox
    ) {
      return rankingBox.contains(event.target);
    });

    if (!isClickInsideThumbnail) {
      itemBox.forEach(function (rankingBox) {
        const thumbnail = rankingBox.querySelector(".thumbnail");
        hideThumbnail(thumbnail);
      });
    }
  });
});

// Thay đổi ảnh khi di chuột qua các ảnh nhỏ
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach(function (thumbnail) {
    const pics = thumbnail.querySelectorAll(".pic");
    const mainImg = thumbnail.querySelector("#main-img");

    pics.forEach(function (pic) {
      pic.addEventListener("mouseover", function () {
        const imgSrc = pic.querySelector("img").src;
        mainImg.src = imgSrc;
        mainImg.style.display = "block";
      });
    });
  });
});

// Thay đổi ảnh khi click vào các span trong ranking-box
document.addEventListener("DOMContentLoaded", function () {
  const spans = document.querySelectorAll(".ranking-box span");
  const mainImg = document.getElementById("main-img");

  spans.forEach(function (span) {
    span.addEventListener("click", function () {
      const thumbnail = this.closest(".thumbnail");
      const imgSrc = thumbnail.querySelector(".pic img").src;
      mainImg.src = imgSrc;
      mainImg.style.display = "block";
    });
  });
});

// Chuyển ảnh sang trái/phải khi click vào nút
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach(function (thumbnail) {
    const mainImg = thumbnail.querySelector("#main-img");
    const leftButton = thumbnail.querySelector(".big-pic-left");
    const rightButton = thumbnail.querySelector(".big-pic-right");
    const images = thumbnail.querySelectorAll(".pic img");
    let currentImageIndex = 0;

    // Hiển thị ảnh hiện tại
    function displayCurrentImage() {
      const currentImageSrc = images[currentImageIndex].src;
      mainImg.src = currentImageSrc;
    }

    // Xử lý khi click nút left
    leftButton.addEventListener("click", function () {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      }
      displayCurrentImage();
    });

    // Xử lý khi click nút right
    rightButton.addEventListener("click", function () {
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      displayCurrentImage();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các span trong mọi ranking-box
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Function để hiển thị thumbnail và blur background
  function showThumbnail(thumbnail) {
    thumbnail.style.display = "block";
    thumbnail.nextElementSibling.style.display = "block"; // Hiển thị blur background
  }

  // Function để ẩn thumbnail và blur background
  function hideThumbnail(thumbnail) {
    thumbnail.style.display = "none";
    thumbnail.nextElementSibling.style.display = "none"; // Ẩn blur background
  }

  // Lặp qua mỗi thumbnail và thêm sự kiện click
  thumbnails.forEach(function (thumbnail) {
    const span = thumbnail.previousElementSibling.querySelector(".name");
    span.addEventListener("click", function () {
      showThumbnail(thumbnail);
    });
  });
});
// Hiển thị thumbnail và nền trắng khi click vào .name
document.addEventListener("DOMContentLoaded", function () {
  const names = document.querySelectorAll(".name");

  function showThumbnailAndWhiteBackground(thumbnail) {
    thumbnail.style.display = "block";
    thumbnail.nextElementSibling.style.display = "block"; // Hiển thị nền trắng
    thumbnail.nextElementSibling.style.backgroundColor = "white"; // Đặt màu nền trắng
  }

  names.forEach(function (name) {
    name.addEventListener("click", function () {
      const thumbnail = name.closest(".item").querySelector(".thumbnail");
      showThumbnailAndWhiteBackground(thumbnail);
    });
  });
});

// Hiển thị thumbnail và blur background khi click vào .name trong ranking-box
document.addEventListener("DOMContentLoaded", function () {
  const itemBox = document.querySelectorAll(".item");
  const blurBackground3 = document.querySelector(".blur-background3");

  function showThumbnail(thumbnail) {
    thumbnail.style.display = "block";
    blurBackground3.style.display = "block";
  }

  function hideThumbnail(thumbnail) {
    thumbnail.style.display = "none";
    blurBackground3.style.display = "none";
  }

  // Lặp qua từng ranking-box và thêm sự kiện click vào tất cả các span bên trong nó
  itemBox.forEach(function (rankingBox) {
    const thumbnail = rankingBox.querySelector(".thumbnail");
    const spans = rankingBox.querySelectorAll(".name");
    spans.forEach(function (span) {
      span.addEventListener("click", function () {
        showThumbnail(thumbnail);
      });
    });
  });
  document.addEventListener("click", function (event) {
    const isClickInsideThumbnail = Array.from(itemBox).some(function (
      rankingBox
    ) {
      return rankingBox.contains(event.target);
    });

    if (!isClickInsideThumbnail) {
      itemBox.forEach(function (rankingBox) {
        const thumbnail = rankingBox.querySelector(".thumbnail");
        hideThumbnail(thumbnail);
      });
    }
  });
});
