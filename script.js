// Ждём загрузки DOM
document.addEventListener("DOMContentLoaded", function() {

  // === Обработка формы обратной связи (request.html) ===
  const feedbackForm = document.querySelector('.request-form');
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(e) {
      // Предотвращаем стандартное действие (переход на другую страницу)
      e.preventDefault();

      // Получаем элементы формы
      const nameField = document.getElementById('name');
      const questionField = document.getElementById('question');
      const phoneField = document.getElementById('phone');

      // Допустим, вы хотите добавить проверку и для email. Если поле не добавлено в форму,
      // можно добавить его в разметку или пропустить проверку.
      // const emailField = document.getElementById('email');

      // Валидация: проверяем, что поля не пустые
      if (!nameField.value.trim() || !questionField.value.trim() || !phoneField.value.trim()) {
        showModal("Ошибка", "Заполните, пожалуйста, все обязательные поля");
        return;
      }

      // Простейшая валидация номера телефона
      // Регулярное выражение: проверяет, что номер состоит из цифр, может начинаться с + и содержит минимум 7 символов
      const phoneRegex = /^\+?[0-9\s\-]{7,}$/;
      if (!phoneRegex.test(phoneField.value.trim())) {
        showModal("Ошибка", "Неверный формат номера телефона");
        return;
      }

      // Если вы добавили поле ввода email, можно проверить его формат:
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if (emailField && !emailRegex.test(emailField.value.trim())) {
      //   showModal("Ошибка", "Неверный формат email");
      //   return;
      // }

      // Выводим данные в консоль разработчика
      console.log("Имя:", nameField.value.trim());
      console.log("Запрос/вопрос:", questionField.value.trim());
      console.log("Телефон:", phoneField.value.trim());
      // console.log("Email:", emailField ? emailField.value.trim() : "нет данных");

      // Здесь можно добавить AJAX-запрос для передачи данных на сервер, если требуется.
      
      // Отображаем модальное окно с сообщением об успешной отправке
      showModal("Успешно", "Данные формы успешно обработаны и отправлены!");

      // По желанию можно очистить форму:
      // feedbackForm.reset();
    });
  }


  // === Функционал поиска на странице со списком объектов ===
  // Для корректной работы в HTML-разметке необходимо добавить input поиска с id="search-input"
  // и объекты с классом "data-item", которые будут фильтроваться.
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const filter = searchInput.value.toLowerCase();
      const items = document.querySelectorAll('.data-item');
      items.forEach(item => {
        // Получаем текст из элемента. Можно также искать по атрибутам, если требуется.
        const text = item.textContent.toLowerCase();
        // Скрываем или показываем элемент в зависимости от соответствия поисковому запросу
        if (text.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

});


/**
 * Функция для отображения модального окна с сообщением.
 * Используется Bootstrap Modal (для работы необходимы jQuery и Bootstrap JS).
 *
 * @param {string} title - Заголовок модального окна.
 * @param {string} message - Текст сообщения.
 */
function showModal(title, message) {
  // Формируем разметку модального окна. Если окно уже существует, его можно переиспользовать.
  const modalId = 'feedbackModal';

  // Если модальное окно уже добавлено в документ, удалим его перед новым созданием
  const existingModal = document.getElementById(modalId);
  if (existingModal) {
    existingModal.parentNode.removeChild(existingModal);
  }

  const modalHtml = `
  <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">${title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Закрыть">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ${message}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>`;

  // Добавляем модальное окно в конец body
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Инициализируем и отображаем модальное окно через jQuery/Bootstrap
  $('#' + modalId).modal('show');

  // После закрытия модального окна удаляем его из DOM, чтобы избежать накопления скрытых элементов
  $('#' + modalId).on('hidden.bs.modal', function () {
    $(this).remove();
  });
}


// === Веб-аналитика (пример Google Analytics) ===
// Вставьте ваш идентификатор отслеживания вместо 'UA-XXXXXXXXX-X'
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},
  i[r].l=1*new Date();
  a=s.createElement(o), m=s.getElementsByTagName(o)[0];
  a.async=1;
  a.src=g;
  m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXXX-X', 'auto');
ga('send', 'pageview');
