import '../css/hero.module.css';


document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
  
    // Напишемо просту дію: зміна тексту через 2 секунди
    setTimeout(() => {
      dynamicText.textContent = "Текст був змінений за допомогою JavaScript!";
    }, 2000);
  });
