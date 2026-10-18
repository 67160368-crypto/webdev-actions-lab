// ปุ่มเปลี่ยนข้อความ
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent =
    'Hello from GitHub Pages!';
});

// ปุ่มสลับธีมสว่างและธีมมืด
const themeBtn = document.querySelector('#themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = 'เปลี่ยนเป็นธีมสว่าง';
  } else {
    themeBtn.textContent = 'เปลี่ยนเป็นธีมมืด';
  }
});