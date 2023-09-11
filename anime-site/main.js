let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
        menu.classList.toggle('fa-time');
        navbar.classList.toggle('active');
    } // Получаем элементы слайдера и слайдов
const slider = document.querySelector('.anime-slider');
const slides = document.querySelectorAll('.swiper-slide');



// // Инициализируем переменные для отслеживания перемещения мыши
// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let animationID = 0;
// let currentIndex = 0;

// // Добавляем обработчики событий для слайдера
// slides.forEach((slide, index) => {
//     // Начало перетаскивания
//     slide.addEventListener('mousedown', (e) => {
//         isDragging = true;
//         startPos = e.clientX;
//         currentTranslate = prevTranslate;
//         slider.classList.add('grabbing');
//     });

//     // Перемещение слайдера
//     slide.addEventListener('mousemove', (e) => {
//         if (!isDragging) return;
//         const currentPosition = e.clientX;
//         const diff = currentPosition - startPos;
//         currentTranslate = prevTranslate + diff;
//         applyTransform();
//     });

//     // Завершение перетаскивания
//     slide.addEventListener('mouseup', () => {
//         isDragging = false;
//         slider.classList.remove('grabbing');
//         const diff = currentTranslate - prevTranslate;
//         if (diff < -100 && currentIndex < slides.length - 1) {
//             currentIndex += 1;
//         } else if (diff > 100 && currentIndex > 0) {
//             currentIndex -= 1;
//         }
//         prevTranslate = currentTranslate;
//         setSlidePosition();
//     });

//     // Отмена перетаскивания при выходе за пределы слайдера
//     slide.addEventListener('mouseleave', () => {
//         isDragging = false;
//         slider.classList.remove('grabbing');
//         prevTranslate = currentTranslate;
//         setSlidePosition();
//     });
// });

// // Применяем CSS transform для перемещения слайдов
// function applyTransform() {
//     slider.style.transform = `translateX(${currentTranslate}px)`;
// }

// // Устанавливаем позицию слайдов после перемещения
// function setSlidePosition() {
//     currentTranslate = currentIndex * -slides[0].offsetWidth;
//     applyTransform();
// }

// // Добавляем обработчик события для изменения размеров окна
// window.addEventListener('resize', () => {
//     currentTranslate = 0;
//     currentIndex = 0;
//     prevTranslate = 0;
//     setSlidePosition();
// });

// // Предотвращаем контекстное меню при правом клике
// slider.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

// // Запускаем слайдер
// setSlidePosition();