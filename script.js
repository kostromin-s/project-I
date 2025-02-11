// Lấy phần tử modal
const modal = document.getElementById("customAlert");

// Lấy nút mở modal
const btn = document.getElementById("myButton");

// Lấy phần tử đóng modal
const closeBtn = document.querySelector(".close");

// Khi bấm nút, hiển thị modal
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Khi bấm vào nút đóng, ẩn modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Khi bấm ra ngoài modal, cũng ẩn đi
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
