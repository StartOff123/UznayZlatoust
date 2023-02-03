<?php 
    session_start();

    if (!isset($_SESSION["theme"])) {
        $_SESSION["theme"] = 'style';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" id="theme-link">
    <link rel="icon" href="img/icon.png" />
    <title></title>
</head>
<body>
    <!-- Шапка -->

    <header class="header">
        <div class="container">
            <div class="header-inner">
                <div class="logo">
                    <img src="img/icon.png" alt="" />
                    <h1>Узнай Златоуст</h1>
                </div>
                <nav class="nav">
                    <button class="visually-impaired-button btn" onclick="visuallyImpaired('')"><?php if ($_SESSION["theme"] == 'style') { echo 'Версия для <br> слабовидящих'; } else { echo 'Обычная версия'; } ?></button>
                    <ul class="nav-inner">
                        <li class="nav-link">
                            <a href="/" title="Златоуст" data-href="/">Главная</a>
                        </li>
                        <li class="nav-link">
                            <a href="#/categories?key=monuments" title="Памятники" data-href="#/categories">Памятники</a>
                        </li>
                        <li class="nav-link">
                            <a href="#/categories?key=water" title="Водные богатства  города" data-href="#/categories">Водные богатства города</a>
                        </li>
                        <li class="nav-link">
                            <a href="#/categories?key=relaxation" title="Отдых" data-href="#/categories">Отдых</a>
                        </li>
                        <li class="nav-link">
                            <a href="#/categories?key=enterprises" data-href="#/categories">Предприятия</a>
                        </li>
                        <li class="nav-link">
                            <a href="#/categories?key=attraction" data-href="#/categories">Достопримечательности</a>
                        </li>
                    </ul>
                    <div class="burger">
                        <div class="burger-inner">
                           <h1>Меню</h1>
                            <div class="burger-button" onclick="openMenu(this, document.querySelector('.burger-menu'))">
                                <span></span>
                            </div> 
                        </div>
                        <div class="burger-menu">
                            <ul class="nav-inner-burger">
                                <li class="nav-link">
                                    <a href="/" title="Златоуст" data-href="/">Главная</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=monuments" title="Памятники" data-href="#/categories">Памятники</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=water" title="Водные богатства  города" data-href="#/categories">Водные богатства города</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=relaxation" title="Отдых" data-href="#/categories">Отдых</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=enterprises" data-href="#/categories">Предприятия</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=attraction" title="Достопримечательности" data-href="#/categories">Достопримечательности</a>
                                </li>
                            </ul>
                            <button class="visually-impaired-button visually-menu btn" style="width: 100%;" onclick="visuallyImpaired()"><?php if ($_SESSION["theme"] == 'style') { echo 'Версия для <br> слабовидящих'; } else { echo 'Обычная версия'; }?></button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <!-- Контент -->

    <div class="root">
        <main class="main">
            <div class="menu">
                <div class="container">
                    <div class="header-inner">
                        <div class="logo" id="logo-menu">
                            <h1>Узнай Златоуст</h1>
                        </div>
                        <nav class="nav">
                            <ul class="nav-inner men">
                                <li class="nav-link">
                                    <a href="/" title="Златоуст" data-href="/">Главная</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=monuments" title="Памятники" data-href="#/categories">Памятники</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=water" title="Водные богатства  города" data-href="#/categories">Водные богатства города</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=relaxation" title="Отдых" data-href="#/categories">Отдых</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=enterprises" data-href="#/categories">Предприятия</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#/categories?key=attraction" data-href="#/categories">Достопримечательности</a>
                                </li>
                            </ul>
                            <div class="burger2">
                                <div class="burger-inner">
                                    <h1>Меню</h1>
                                    <div class="burger-button" onclick="openMenu(this, document.querySelector('.burger-menu2'))">
                                        <span></span>
                                    </div> 
                                </div>
                                <div class="burger-menu2">
                                    <ul class="nav-inner-burger">
                                        <li class="nav-link">
                                            <a href="/" title="Златоуст" data-href="/">Главная</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="#/categories?key=monuments" title="Памятники" data-href="#/categories">Памятники</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="#/categories?key=water" title="Водные богатства  города" data-href="#/categories">Водные богатства города</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="#/categories?key=relaxation" title="Отдых" data-href="#/categories">Отдых</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="#/categories?key=enterprises" data-href="#/categories">Предприятия</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="#/categories?key=attraction" title="Достопримечательности" data-href="#/categories">Достопримечательности</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="user-path">
                    <a href="/">Главная</a>
                    <div class="path-block-category">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                        <a href="" data-href="#/categories"></a>
                    </div>
                    <div class="path-block-infopage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                        <a href="" data-href=""></a>
                    </div>
                </div>
                <div class="main-inner">

                </div>
            </div>
        </main>
    </div>

    <!-- Подвал -->

    <footer class="footer">
        <div class="container">
            <div class="footer-inner">
                <h1>При поддержке <font style="font-weight: 400;">Златоустовского туристического агенства</font></h1>
                <h1>Разработчик:</h1>
                <h2 class="fio">Меньшиков Дмитрий Атрёмович</h2>
                <h1>О разработчике:</h1>
                <h2>Ученик ГБПОУ «ЗлатИК им. П.П.Аносова».</h2>
                <h2>Специальность: Информационные сисемы и программирование.</h2>
                <h2 class="group">Группа: ИС-41.</h2>
                <h3 class="city">Златоуст</h3>
                <h3>2022</h3>
            </div>
        </div>
    </footer>

    <!-- Модальные окна -->

    <div class="modal-bg"></div>
    <div class="modal-img">
        <div class="modal-inner">
            <div class="modal-close-button">
                <h1>Златоуст</h1>
                <div class="close-button-modal" onclick="closeImg()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            <div class="modal-content">
                <img src="" alt="" id="modal-img">
            </div>
        </div>
    </div>

    <!-- Скрипны -->

    <script type="module" src="js/route.js"></script>
    <script src="js/positionFooter.js"></script>
    <script src="js/openImg.js"></script>
    <script src="js/navbarScroll.js"></script>
    <script src="js/visually-impaired.js"></script>
</body>
</html>