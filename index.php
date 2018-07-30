<?php
$isProduction = $_SERVER['SERVER_NAME'] === 'danwanderer.ru';
?>
<!DOCTYPE html>
<html lang="ru">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="yandex-verification" content="45765db049347b61"/>

    <meta name="keywords" content="Портфолио веб-разработчика, веб-программист PHP JS NodeJS, г. Москва" />

    <title>Сайт-портфолио | Никита Чурилов</title>
</head>

<body id="page-top">
<noscript id="included_styles">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet"
          type="text/css">
    <link rel="stylesheet" href="css/main.min.css" type="text/css">
</noscript>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Портфолио веб-разработчика</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button"
                data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto nav">
                <li class="nav-item mx-0 mx-lg-1 nav__item">
                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger nav__link"
                       href="#portfolio">Работы</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1 nav__item">
                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger nav__link" href="#about">Обо мне</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1 nav__item">
                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger nav__link"
                       href="#contact">Контакты</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- Header -->
<header class="masthead bg-primary text-white text-center">
    <div class="container skills">
        <img class="img-fluid mb-5 d-block mx-auto image image_main" src="img/main.jpg" alt="">
        <h1 class="text-uppercase mb-0">Чурилов Никита</h1>
        <hr class="star-light skills__star">
        <h2 class="font-weight-light mb-0 skills__list">Веб-разработчик, проектировщик, верстальщик. <br/>
            HTML5, CSS3, JS + jQuery, VueJS, Sass, Gulp, NodeJS, Yii(v1, v2), Symfony (v3, v4),<br/>
            Wordpress, Drupal, Bolt CMS
        </h2>
        <h3 class="font-weight-light mb-0 skills__list skills__list_sub">
            Git, Apache, Nginx, MySQL, XAMPP
        </h3>
    </div>
</header>

<!-- Portfolio Grid Section -->
<section class="portfolio section" id="portfolio">
    <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0 section__title">Проекты, в которых я участвовал</h2>
        <hr class="star-dark mb-5 section__star">
        <div class="row portfolio__row">
            <div class="col-md-6 col-lg-4 portfolio__item">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/online_s.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4 portfolio__item">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/visa.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4 portfolio__item">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/web.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4 portfolio__item">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/wp_inter.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4 portfolio__item">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/protres.png" alt="">
                </a>
            </div>
            <div class="col-md-6 col-lg-4 portfolio__item">
                <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                    <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/meinekurse.png" alt="">
                </a>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="bg-primary text-white mb-0 section" id="about">
    <div class="container">
        <h2 class="text-center text-uppercase text-white section__title">Обо мне</h2>
        <hr class="star-light mb-5 section__star">
        <div class="row">
            <div class="col-lg-4 ml-auto">
                <p class="lead">
                    Языки программирования: PHP, Javascript (jQuery), NodeJS. <br/><br/>

                    Фронтэнд: HTML5, CSS3, Sass, Gulp.<br/><br/>
                    Разработка сайтов на любой CMS или фрэймворке, используя современные технологии, для Вас и для
                    получения личного опыта.<br/>

                    Адаптация сайтов под различные разрешения.
                </p>
            </div>
            <div class="col-lg-4 mr-auto">
                <p class="lead">
                    Образование: МГУП им. Ивана Фёдорова.<br/><br/>
                    Знание языков: английский (средний уровень), немецкий (базовый уровень).
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section">
    <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0 section__title">Свяжитесь со мной</h2>
        <hr class="star-dark mb-5 section__star">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                <form name="sentMessage" id="contactForm" novalidate="novalidate" class="form">
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label class="form__label">Name</label>
                            <input class="form-control" id="name" type="text" placeholder="Ваше имя" required="required"
                                   data-validation-required-message="Пожалуйста, введите свое имя" name="name">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label class="form__label">Email Address</label>
                            <input class="form-control" id="email" type="email" placeholder="Эл. почта"
                                   required="required"
                                   data-validation-required-message="Пожалуйста, введите Ваш e-mail" name="email">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label class="form__label">Phone Number</label>
                            <input class="form-control" id="phone" type="tel" placeholder="Телефон"
                                   required="required"
                                   data-validation-required-message="Не введен номер телефона" name="phone">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label class="form__label">Message</label>
                            <textarea class="form-control" id="message" rows="5" placeholder="Сообщение"
                                      required="required"
                                      data-validation-required-message="Введите сообщение" name="message"></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <br>
                    <div class="g-recaptcha form__captcha"
                         data-sitekey="6LfgF04UAAAAAKNZebIMRTCWjCgId5zhS_vk9yuW"></div>
                    <div id="success"></div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-xl form__input form__input_submit"
                                id="sendMessageButton">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Расположение</h4>
                <p class="lead mb-0">Российская Федерация
                    <br>г. Москва</p>
            </div>
            <div class="col-md-6 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Я в социальных сетях</h4>
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light btn-social text-center rounded-circle"
                           href="https://www.facebook.com/nikita.churilov.758">
                            <i class="fa fa-fw fa-facebook"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light btn-social text-center rounded-circle"
                           href="https://vk.com/dan_rautskeggr">
                            <i class="fa fa-fw fa-vk"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<div class="copyright py-4 text-center text-white">
    <div class="container">
        <small>Copyright &copy; <?= date('Y')?> | <?= $_SERVER['SERVER_NAME'] ?></small>
    </div>
</div>

<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-to-top d-lg-none position-fixed ">
    <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i class="fa fa-chevron-up"></i>
    </a>
</div>

<!-- Portfolio Modals -->

<!-- Portfolio Modal 1 -->
<div class="portfolio-modal mfp-hide project" id="portfolio-modal-1">
    <div class="portfolio-modal-dialog bg-white project__modal">
        <a class="close-button d-none d-md-block portfolio-modal-dismiss project__close-button" href="#">
            <i class="fa fa-3x fa-times project__close-button-icon"></i>
        </a>
        <div class="container text-center project__container">
            <div class="row project__row">
                <div class="col-lg-8 mx-auto project__row-block">
                    <h2 class="text-secondary text-uppercase mb-0 project__title">online-samsung.ru</h2>
                    <hr class="star-dark mb-5 project__star">
                    <p class="mb-5 project__description">
                        <a href="https://online-samsung.ru" target="_blank">Официальный магазин Samsung</a> в
                        России.<br/>
                        CMS Drupal. <br/>
                        Подключение сервисов доставки, онлайн-оплаты, создание интерактивной карты
                        точек самовывоза по всей России.
                    </p>
                    <div class="project__images">
                        <div class="project__images-item project__images-item_desktop">
                            <div class="project__resolution">
                                <i class="fa fa-desktop"></i>
                            </div>
                            <img class="img-fluid mb-5  project__screenshot project__screenshot_desktop"
                                 src="img/portfolio/online_s.png" alt="">
                        </div>
                    </div>
                    <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                        <i class="fa fa-close"></i>
                        Закрыть</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Portfolio Modal 2 -->
<div class="portfolio-modal mfp-hide project" id="portfolio-modal-2">
    <div class="portfolio-modal-dialog bg-white project__modal">
        <a class="close-button d-none d-md-block portfolio-modal-dismiss project__close-button" href="#">
            <i class="fa fa-3x fa-times project__close-button-icon"></i>
        </a>
        <div class="container text-center project__container">
            <div class="row project__row">
                <div class="col-lg-8 mx-auto project__row-block">
                    <h2 class="text-secondary text-uppercase mb-0 project__title">visamanаger.ru</h2>
                    <hr class="star-dark mb-5 project__star">
                    <p class="mb-5 project__description">
                        Сайт <a href="http://visamanager.ru" target="_blank">визового менеджера</a>.
                        CMS Drupal <br/>
                        Проектирование, разработка и реализация личного кабинета для заказа виз, загранпаспортов и<br/>
                        приглашений для иностранцев.
                    </p>
                    <div class="project__images">
                        <div class="project__images-item project__images-item_desktop">
                            <div class="project__resolution">
                                <i class="fa fa-desktop"></i>
                            </div>
                            <img class="img-fluid mb-5  project__screenshot project__screenshot_desktop"
                                 src="img/portfolio/visa.png" alt="">
                        </div>
                    </div>
                    <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                        <i class="fa fa-close"></i>
                        Закрыть</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Portfolio Modal 3 -->
<div class="portfolio-modal mfp-hide project" id="portfolio-modal-3">
    <div class="portfolio-modal-dialog bg-white project__modal">
        <a class="close-button d-none d-md-block portfolio-modal-dismiss project__close-button" href="#">
            <i class="fa fa-3x fa-times project__close-button-icon"></i>
        </a>
        <div class="container text-center project__container">
            <div class="row project__row">
                <div class="col-lg-8 mx-auto project__row-block">
                    <h2 class="text-secondary text-uppercase mb-0 project__title">rustex.ru</h2>
                    <hr class="star-dark mb-5 project__star">
                    <p class="mb-5 project__description">
                        Сайт <a href="https://rustex.ru" target="_blank">веб-студии</a>. Bolt CMS. <br/>
                        Разработка и реализация
                    </p>
                    <div class="project__images">
                        <div class="project__images-item project__images-item_mobile">
                            <div class="project__resolution">
                                <i class="fa fa-mobile"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_mobile"
                                 src="img/portfolio/web_320.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_tablet">
                            <div class="project__resolution">
                                <i class="fa fa-tablet"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_tablet"
                                 src="img/portfolio/web_768.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_desktop">
                            <div class="project__resolution">
                                <i class="fa fa-desktop"></i>
                            </div>
                            <img class="img-fluid mb-5  project__screenshot project__screenshot_desktop"
                                 src="img/portfolio/web.png" alt="">
                        </div>
                    </div>
                    <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                        <i class="fa fa-close"></i>
                        Закрыть</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Portfolio Modal 4 -->
<div class="portfolio-modal mfp-hide project" id="portfolio-modal-4">
    <div class="portfolio-modal-dialog bg-white project__modal">
        <a class="close-button d-none d-md-block portfolio-modal-dismiss project__close-button" href="#">
            <i class="fa fa-3x fa-times project__close-button-icon"></i>
        </a>
        <div class="container text-center project__container">
            <div class="row project__row">
                <div class="col-lg-8 mx-auto project__row-block">
                    <h2 class="text-secondary text-uppercase mb-0 project__title">wp-interiors.com</h2>
                    <hr class="star-dark mb-5 project__star">
                    <p class="mb-5 project__description">
                        <a href="http://wp-interiors.com" target="_blank">Сайт компании</a>, занимающейся
                        проектированием интерьеров квартир.
                        CMS Wordpress. <br/>
                        Проектирование, разработка и реализация, верстка фронтэнда в соответствии с требованиями
                        заказчика.
                    </p>
                    <div class="project__images">
                        <div class="project__images-item project__images-item_mobile">
                            <div class="project__resolution">
                                <i class="fa fa-mobile"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_mobile"
                                 src="img/portfolio/wp_inter_320.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_tablet">
                            <div class="project__resolution">
                                <i class="fa fa-tablet"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_tablet"
                                 src="img/portfolio/wp_inter_768.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_desktop">
                            <div class="project__resolution">
                                <i class="fa fa-desktop"></i>
                            </div>
                            <img class="img-fluid mb-5  project__screenshot project__screenshot_desktop"
                                 src="img/portfolio/wp_inter.png" alt="">
                        </div>
                    </div>
                    <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                        <i class="fa fa-close"></i>
                        Закрыть</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Portfolio Modal 5 -->
<div class="portfolio-modal mfp-hide project" id="portfolio-modal-5">
    <div class="portfolio-modal-dialog bg-white project__modal">
        <a class="close-button d-none d-md-block portfolio-modal-dismiss project__close-button" href="#">
            <i class="fa fa-3x fa-times project__close-button-icon"></i>
        </a>
        <div class="container text-center project__container">
            <div class="row project__row">
                <div class="col-lg-8 mx-auto project__row-block">
                    <h2 class="text-secondary text-uppercase mb-0 project__title">protres.ru</h2>
                    <hr class="star-dark mb-5 project__star">
                    <p class="mb-5 project__description">
                        <a href="https://protres.ru" target="_blank">Сайт</a> института белка РАН. CMS Drupal.<br/>
                        Верстка под все разрешения в соответствии с макетами.
                    </p>
                    <div class="project__images">
                        <div class="project__images-item project__images-item_mobile">
                            <div class="project__resolution">
                                <i class="fa fa-mobile"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_mobile"
                                 src="img/portfolio/protres_320.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_tablet">
                            <div class="project__resolution">
                                <i class="fa fa-tablet"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_tablet"
                                 src="img/portfolio/protres_768.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_desktop">
                            <div class="project__resolution">
                                <i class="fa fa-desktop"></i>
                            </div>
                            <img class="img-fluid mb-5  project__screenshot project__screenshot_desktop"
                                 src="img/portfolio/protres.png" alt="">
                        </div>
                    </div>
                    <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                        <i class="fa fa-close"></i>
                        Закрыть</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal mfp-hide project" id="portfolio-modal-6">
    <div class="portfolio-modal-dialog bg-white project__modal">
        <a class="close-button d-none d-md-block portfolio-modal-dismiss project__close-button" href="#">
            <i class="fa fa-3x fa-times project__close-button-icon"></i>
        </a>
        <div class="container text-center project__container">
            <div class="row project__row">
                <div class="col-lg-8 mx-auto project__row-block">
                    <h2 class="text-secondary text-uppercase mb-0 project__title">meinekurse.ru</h2>
                    <hr class="star-dark mb-5 project__star">
                    <p class="mb-5 project__description">
                        <a href="http://meinekurse.ru" target="_blank">Сайт</a> центра преподавания немецкого
                        языка (в данный момент на поддержке).<br/>
                        Yupe v1. <br/>
                        Добавление в систему дополнительных модулей, правки фронт-энда (Less + JS) <br/>
                        установка сервисов (гугл-капчи, метрики, онлайн-консультанта).
                    </p>
                    <div class="project__images">
                        <div class="project__images-item project__images-item_mobile">
                            <div class="project__resolution">
                                <i class="fa fa-mobile"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_mobile"
                                 src="img/portfolio/meinekurse_320.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_tablet">
                            <div class="project__resolution">
                                <i class="fa fa-tablet"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_tablet"
                                 src="img/portfolio/meinekurse_768.png" alt="">
                        </div>
                        <div class="project__images-item project__images-item_desktop">
                            <div class="project__resolution">
                                <i class="fa fa-desktop"></i>
                            </div>
                            <img class="img-fluid mb-5 project__screenshot project__screenshot_desktop"
                                 src="img/portfolio/meinekurse.png" alt="">
                        </div>
                    </div>
                    <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                        <i class="fa fa-close"></i>
                        Закрыть</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="js/main.min.js"></script>

<?php
if ( $isProduction ) {
	print "<!-- Yandex.Metrika counter -->" .
	      "<script>(function (d, w, c) { (w[c] = w[c] || []).push(function () {" .
	      "try { " .
	      "w.yaCounter48124475 = new Ya.Metrika({id: 48124475, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true});" .
	      "} catch (e) {}" .
	      "}); var n = d.getElementsByTagName(\"script\")[0], s = d.createElement(\"script\"), f = function () { n.parentNode.insertBefore(s, n); };" .
	      "s.type = \"text/javascript\"; s.async = true; s.src = \"https://mc.yandex.ru/metrika/watch.js\";" .
	      "if (w.opera == \"[object Opera]\") { d.addEventListener(\"DOMContentLoaded\", f, false); } else { f(); }" .
	      "})(document, window, \"yandex_metrika_callbacks\"); </script>";
	print "<noscript><div><img src=\"https://mc.yandex.ru/watch/48124475\" style=\"position:absolute; left:-9999px;\" alt=\"\"/></div></noscript>";
	print "<!-- /Yandex.Metrika counter -->";
	print "<script src='https://www.google.com/recaptcha/api.js' async></script>";
}
?>

</body>
</html>
