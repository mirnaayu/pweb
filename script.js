// Fungsi untuk menampilkan bagian berdasarkan tautan yang diklik
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('data-section');

    // Sembunyikan semua bagian
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
      section.classList.add('d-none');
    });

    // Hapus semua link yang aktif
    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));

    // Tampilkan bagian yang diklik
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('d-none');
    sectionToShow.classList.add('active');

    // Tambahkan kelas aktif pada link saat ini
    this.classList.add('active');
  });
});

// Tampilkan bagian "Tentang Saya" secara default
window.addEventListener('DOMContentLoaded', () => {
  const defaultSection = document.getElementById('about');
  if (defaultSection) {
    defaultSection.classList.add('active');
    defaultSection.classList.remove('d-none');
  }
});
