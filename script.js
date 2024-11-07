// Slideshow tự động chuyển đổi hình ảnh
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000); // Chuyển đổi hình ảnh sau mỗi 3 giây

// Xử lý gửi email với EmailJS
document.getElementById("booking-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;

    emailjs.send("service_fefrfwr", "template_gkdpf1h", {
        to_name: name,
        booking_date: date,
        service_type: service
    })
        .then((response) => {
            alert("Đặt lịch thành công! Cảm ơn bạn đã đặt lịch.");
            document.getElementById("booking-form").reset();
        })
        .catch((error) => {
            alert("Gửi email thất bại. Vui lòng thử lại sau.");
            console.error("FAILED...", error);
        });
});
