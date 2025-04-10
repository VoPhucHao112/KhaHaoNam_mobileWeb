document.addEventListener("DOMContentLoaded", function() {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const images = document.querySelectorAll(".slider-container img");
    let currentIndex = 0;

    // Hiển thị ảnh đầu tiên
    images[currentIndex].classList.add("active");

    // Hàm chuyển ảnh
    function changeImage(index) {
        images[currentIndex].classList.remove("active");
        currentIndex = (index + images.length) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Xử lý sự kiện mũi tên
    prev.addEventListener("click", () => changeImage(currentIndex - 1));
    next.addEventListener("click", () => changeImage(currentIndex + 1));

    // Tự động chuyển ảnh sau mỗi 2 giây
    setInterval(() => {
        changeImage(currentIndex + 1); // Chuyển đến ảnh tiếp theo
    }, 2000); // 2000ms = 2 giây
});
