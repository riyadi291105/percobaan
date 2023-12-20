document.querySelectorAll('.card-footer').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('You clicked on ' + this.parentElement.querySelector('.card-title').textContent);
    });
});

function redirectToWhatsApp(packageName, bonus, price) {
    // Ganti nomor telepon sesuai dengan nomor yang diinginkan
    var phoneNumber = '6287881965963';

    // Membentuk pesan untuk dikirim ke WhatsApp
    var message = 'Saya tertarik dengan paket ' + packageName + '\nBonus: ' + bonus + '\nHarga: ' + price;

    // Mengarahkan pengguna ke WhatsApp dengan membuka aplikasi WhatsApp
    window.location.href = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
}