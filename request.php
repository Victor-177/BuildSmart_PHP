<?php
// Файл: request.php
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>BuildSmart</title>
  <link rel="stylesheet" href="index.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</head>
<body>
  <header class="header">
    <div class="header-container">
      <div class="logo-block">
        <img src="photos/logo.png" alt="Логотип BuildSmart" class="logo">
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="index.php">Главная</a></li>
          <li><a href="about.php">О нас</a></li>
          <li><a href="contacts.php">Контакты</a></li>
          <li><a href="request.php">Обратная связь</a></li>
          <li><a href="services.php">Услуги</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="request-section">
      <div class="request-container">
        <h2 class="request-title">Форма обратной связи</h2>
        <form class="request-form" action="process_request.php" method="post">
          <!-- Поле для ввода имени -->
          <label for="name">Введите имя</label>
          <input type="text" id="name" name="name" placeholder="Иван И" required>
          <!-- Поле для ввода запроса/вопроса -->
          <label for="question">Введите ваш запрос или вопрос</label>
          <textarea id="question" name="question" placeholder="Хочу сделать ремонт" rows="4" required></textarea>
          <!-- Поле для ввода телефона -->
          <label for="phone">Введите ваш номер телефона</label>
          <input type="tel" id="phone" name="phone" placeholder="+7 975 764 75 75" required>
          <!-- Кнопка отправки -->
          <button type="submit" class="request-button">Отправить</button>
        </form>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="footer-container">
      <p class="footer-title">BuildSmart</p>
      <br><br>
      <p>8 (8442) 53-45-00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BuildSmart@yandex.ru</p>
    </div>
  </footer>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
