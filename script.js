// Mở form đặt lịch chụp
function openBookingForm() {
    document.getElementById("bookingForm").style.display = "flex";
}

// Đóng form đặt lịch chụp
function closeBookingForm() {
    document.getElementById("bookingForm").style.display = "none";
}

// Thêm Event Listener vào form để gửi email qua EmailJS
document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;

    var templateParams = {
        name: 'James',
        notes: 'Check this out!',
    };


    // Gửi email qua EmailJS
    emailjs.send("service_fefrfwr", "template_gkdpf1h", templateParams)
        .then((response) => {
            alert("Đặt lịch thành công! Cảm ơn bạn đã đặt lịch.");
            closeBookingForm();
        })
        .catch((error) => {
            alert("Gửi email thất bại. Vui lòng thử lại sau.");
            console.error("FAILED...", error);
        });
});
