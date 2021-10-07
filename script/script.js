$(function(){
  $('.classHover').hover(
    function(e){
      $(this).find('.fourthBlockMainFirstImg').css('display', 'none');
      $(this).find('.fourthBlockMainFirstDiv').css('display', 'block');

    },function(e){
      $(this).find('.fourthBlockMainFirstImg').css('display', 'block');
      $(this).find('.fourthBlockMainFirstDiv').css('display', 'none');
    });
    $('.toUpButton').click(function(){
      $('html').animate({scrollTop: 0}, 500);
      return false;
    });
    if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
      // if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
        $('.parallax').css({'background-attachment':'inherit'})
      // }
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/media_mobile.css') );
      var winHeight = $(window).height();
      var target1 = $('#fourthBlockMainFirst');
      var targetPos1 = target1.offset().top + 400;
      var scrollToElem1 = targetPos1 - winHeight;
      var target2 = $('#fourthBlockMainSecond');
      var targetPos2 = target2.offset().top + 400;
      var scrollToElem2 = targetPos2 - winHeight;
      var target3 = $('#fourthBlockMainThird');
      var targetPos3 = target3.offset().top + 400;
      var scrollToElem3 = targetPos3 - winHeight;
      var target4 = $('#fourthBlockMainFourth');
      var targetPos4 = target4.offset().top + 400;
      var scrollToElem4 = targetPos4 - winHeight;


      $(window).scroll(function(){
        var winScrollTop = $(this).scrollTop();
        if(winScrollTop > scrollToElem1 && winScrollTop < scrollToElem1 + 400){
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
        if(winScrollTop > scrollToElem2 && winScrollTop < scrollToElem2 + 400){
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
        if(winScrollTop > scrollToElem3 && winScrollTop < scrollToElem3 + 400){
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
        if(winScrollTop > scrollToElem4 && winScrollTop < scrollToElem4 + 400){
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
  });
    }

      var translateToUkr = function(){
      $('.menu').css('display', 'none');
      console.log($('.languages').eq(1));
      $('.languages').children().eq(1).removeClass('blueLang');
      $('.languages').children().eq(0).addClass('blueLang');
      $('.container').css({'-webkit-filter': 'blur(0px)', 'filter': 'blur(0px)'})
      $('.firstBlockMain h1').css('max-width', '1000px')
      $('.firstBlockRightRus').removeClass('selectedLang');
      $('.firstBlockRightUkr').addClass('selectedLang');
      $('.firstBlockButtons').children().eq(0).text('Послуги');
      $('.firstBlockButtons').children().eq(1).text('Портфоліо');
      $('.firstBlockButtons').children().eq(2).text('Контакти');
      $('.firstBlockButtons').children().eq(3).text('Про нас');
      $('.firstBlockMain').children().eq(0).text('Збери свій бізнес разом з Puzzle Group');
      $('.firstBlockMainCenterFirst').children().eq(1).text('Послуги дизайну, створення сайтів');
      $('.firstBlockMainCenterSecond').children().eq(1).text('Просування в соціальних мережах');
      $('.firstBlockMainCenterThird').children().eq(1).text('Таргетована, контекстна реклама');
      $('.firstBlockMain').children().eq(2).text('Зберемо всі пазли разом: комплексно виведемо Ваш бізнес на новий рівень');
      $('.firstBlockMainButtons').children().eq(0).text('Послуги');
      $('.firstBlockMainButtons').children().eq(1).text('Хочу консультацію');
      $('#circleQuestion').text('З’ЯВИЛОСЯ ПИТАННЯ?');
      $('.secondBlockRight').children().eq(0).html('Наша мета - <span class="blue"> підвищити якість </span> Вашого бізнесу');
      $('.secondBlockRight01').children().eq(1).children().eq(0).text('Повний фарш!');
      $('.secondBlockRight01').children().eq(1).children().eq(1).text('Забезпечимо комплексний підхід та індивідуальний план розвитку бізнесу. Вичавимо всі соки: разом реализуємо стратегію й відсвяткуємо результати.');
      $('.secondBlockRight02').children().eq(1).children().eq(1).text('Креативна команда молодих спеціалистів не залишить ваш бізнес без уваги. Працюємо на результат и виконуємо работу якісно.');
      $('.secondBlockRight03').children().eq(1).children().eq(0).text('Цінник');
      $('.secondBlockRight03').children().eq(1).children().eq(1).text('Пропонуємо пакети послуг для будь-якої кишені. Отримаємо можливий максимум відповідно до бюджету.');
      $('.secondBlockRight04').children().eq(1).children().eq(0).text('А можна так?');
      $('.secondBlockRight04').children().eq(1).children().eq(1).text('Ми вас слушаємо и чуємо. Врахуємо всі побажання, проаналізуємо всі пропозиції і поєднаємо зі своїм професіоналізмом.');
      $('.thirdBlockRight').children().eq(0).text('Мы пропонуємо');
      $('.thirdBlockSmm li').eq(0).text('SMM-стратегія');
      $('.thirdBlockSmm li').eq(1).text('Ведення акаунту');
      $('.thirdBlockSmm li').eq(2).text('Таргетована реклама');
      $('.thirdBlockSmm li').eq(3).text('Аналітика');
      $('.thirdBlockSmm li').eq(4).text('Просування в социальних мережах');
      $('.thirdBlockDesign li').eq(0).text('UI/UX Дизайн');
      $('.thirdBlockDesign li').eq(1).text('Web-Дизайн');
      $('.thirdBlockDesign li').eq(2).text('Логотип');
      $('.thirdBlockDesign li').eq(3).text('Корпоративний дизайн');
      $('.thirdBlockDevelopment li').eq(0).text('Інтернет-магазин');
      $('.thirdBlockDevelopment li').eq(1).text('Корпоративні сайти');
      $('.thirdBlockDevelopment li').eq(2).text('Landing page');
      $('.thirdBlockDevelopment li').eq(3).text('Інтернет-портали');
      $('.thirdBlockDevelopment li').eq(4).text('Індивидуальні рішення');
      $('.thirdBlockDigital li').eq(0).text('E-mail маркетинг');
      $('.thirdBlockDigital li').eq(1).text('Контекстна реклама (PPC)');
      $('.thirdBlockDigital li').eq(2).text('Месенджери');
      $('.thirdBlockDigital li').eq(3).text('Просування сайту (SEO)');
      $('.thirdBlockDigital li').eq(4).text('Анализ ніші');
      $('.fourthBlockOurs').text('Наші проекти');
      $('.fourthBlockMainFirst .fourthBlockMainText').text('/Особистий бренд');
      $('.fourthBlockMainSecond .fourthBlockMainText').text('/Візитки');
      $('.fourthBlockMainThird .fourthBlockMainText').text('/Мобільні версії');
      $('.fourthBlockMainFourth .fourthBlockMainText').text('/Лендинг');
      $('.checkAllCases p').text('Дивитися всі кейсы');
      $('.fifthBlockRightUp h2').html('<span class="blue">Ми краща </span>команда для втілення ваших ідей');
      $('.fifthBlockRightUp p').text('Залиште ваш номер телефону і наш менеджер зв’яжеться з вами в протягом дня');
      $('.fifthBlockLeftContacts h2').text('Контакти');
      $('.fifthBlockLeftSocial h2').text('Социальні мережі');
      $('.inputPhone').html('<input type="phone" placeholder="Номер телефону" name="user_phone">');
      $('html').css('overflow-y','auto');
    };
    var translateToRus = function(){
    $('.menu').css('display', 'none');
    $('.languages').children().eq(0).removeClass('blueLang');
    $('.languages').children().eq(1).addClass('blueLang');
    $('.firstBlockMain h1').css('max-width', '1133px')
    $('.container').css({'-webkit-filter': 'blur(0px)', 'filter': 'blur(0px)'})
    $('.firstBlockRightUkr').removeClass('selectedLang');
    $('.firstBlockRightRus').addClass('selectedLang');
    $('.firstBlockButtons').children().eq(0).text('Услуги');
    $('.firstBlockButtons').children().eq(1).text('Портфолио');
    $('.firstBlockButtons').children().eq(2).text('Контакты');
    $('.firstBlockButtons').children().eq(3).text('О нас');
    $('.firstBlockMain').children().eq(0).text('Собери свой бизнес вместе с Puzzle Group');
    $('.firstBlockMainCenterFirst').children().eq(1).text('Услуги дизайна, создание сайтов');
    $('.firstBlockMainCenterSecond').children().eq(1).text('Продвижение в социальных сетях');
    $('.firstBlockMainCenterThird').children().eq(1).text('Таргетированная, контекстная реклама');
    $('.firstBlockMain').children().eq(2).text('Соберем все пазлы воедино: комплексно выведем Ваш бизнес на новый уровень');
    $('.firstBlockMainButtons').children().eq(0).text('Услуги');
    $('.firstBlockMainButtons').children().eq(1).text('Хочу консультацию');
    $('#circleQuestion').text('ПОЯВИЛСЯ ВОПРОС?');
    $('.secondBlockRight').children().eq(0).html('Наша цель - <span class="blue"> повысить качество </span> Вашего бизнеса');
    $('.secondBlockRight01').children().eq(1).children().eq(0).text('Полный фарш!');
    $('.secondBlockRight01').children().eq(1).children().eq(1).text('Обеспечим комплексный подход и индивидуальный план развития бизнеса. Выжмем все соки: вместе реализуем стратегию и отпразднуем результаты.');
    $('.secondBlockRight02').children().eq(1).children().eq(1).text('Креативная команда молодых специалистов не упустит ваш бизнес из виду. Работаем на результат и выполняем работу качественно.');
    $('.secondBlockRight03').children().eq(1).children().eq(0).text('Ценник');
    $('.secondBlockRight03').children().eq(1).children().eq(1).text('Предлагаем пакеты услуг на любой карман. Получим возможный максимум исходя из бюджета.');
    $('.secondBlockRight04').children().eq(1).children().eq(0).text('А можно так?');
    $('.secondBlockRight04').children().eq(1).children().eq(1).text('Мы вас слушаем и слышим. Учтем все пожелания, проанализируем все предложения и соединим со своим профессионализмом.');
    $('.thirdBlockRight').children().eq(0).text('Мы предлагаем');
    $('.thirdBlockSmm li').eq(0).text('SMM-стратегия');
    $('.thirdBlockSmm li').eq(1).text('Ведение аккаунта');
    $('.thirdBlockSmm li').eq(2).text('Таргетированная реклама');
    $('.thirdBlockSmm li').eq(3).text('Аналитика');
    $('.thirdBlockSmm li').eq(4).text('Продвижение в социальных сетях');
    $('.thirdBlockDesign li').eq(0).text('UI/UX Дизайн');
    $('.thirdBlockDesign li').eq(1).text('Web-Дизайн');
    $('.thirdBlockDesign li').eq(2).text('Логотип');
    $('.thirdBlockDesign li').eq(3).text('Корпоративний дизайн');
    $('.thirdBlockDevelopment li').eq(0).text('Интернет-магазин');
    $('.thirdBlockDevelopment li').eq(1).text('Корпоративные сайты');
    $('.thirdBlockDevelopment li').eq(2).text('Landing page');
    $('.thirdBlockDevelopment li').eq(3).text('Интернет-порталы');
    $('.thirdBlockDevelopment li').eq(4).text('Индивидуальные решения');
    $('.thirdBlockDigital li').eq(0).text('E-mail маркетинг');
    $('.thirdBlockDigital li').eq(1).text('Контекстная реклама (PPC)');
    $('.thirdBlockDigital li').eq(2).text('Мессенджеры');
    $('.thirdBlockDigital li').eq(3).text('Продвижение сайта (SEO)');
    $('.thirdBlockDigital li').eq(4).text('Анализ ниши');
    $('.fourthBlockOurs').text('Наши проекты');
    $('.fourthBlockMainFirst .fourthBlockMainText').text('/Личный бренд');
    $('.fourthBlockMainSecond .fourthBlockMainText').text('/Визитки');
    $('.fourthBlockMainThird .fourthBlockMainText').text('/Мобильные версии');
    $('.fourthBlockMainFourth .fourthBlockMainText').text('/Лендинг');
    $('.checkAllCases p').text('Смотреть все кейсы');
    $('.fifthBlockRightUp h2').html('<span class="blue">Мы лучшая </span>команда для воплощения ваших идей');
    $('.fifthBlockRightUp p').text('Оставьте ваш номер телефона и наш менеджер свяжется с вами в течении дня');
    $('.fifthBlockLeftContacts h2').text('Контакты');
    $('.fifthBlockLeftSocial h2').text('Социальные сети');
    $('.inputPhone').html('<input type="phone" placeholder="Номер телефона" name="user_phone">');
    $('html').css('overflow-y','auto')
  };
    $('.firstBlockRightUkr').click(translateToUkr);
    $('.firstBlockRightRus').click(translateToRus);
    $('.ukr').click(translateToUkr);
    $('.rus').click(translateToRus);

    $('.firstBlockRightMenu').click(function(){
      $('.menu').css('display', 'block');
      $('.container').css({'-webkit-filter': 'blur(5px)', 'filter': 'blur(5px)'})
      $('html').css('overflow-y','hidden');
    });
    $('.menuClose').click(function(){
      $('.menu').css('display', 'none');
      $('.container').css({'-webkit-filter': 'blur(0px)', 'filter': 'blur(0px)'})
      $('html').css('overflow-y','auto');
    });
})


function randomRotateAndOpacity() {

  coords = (Math.floor(Math.random() * (3 - 2 + 1)) + 2);
  document.getElementById('secodLineCircle').style.top =  document.getElementById('secodLineCircle').style.left =
  document.getElementById('firstLineCircle').style.top =  document.getElementById('firstLineCircle').style.left = -(coords - 1) + "px";
  document.getElementById('secodLineCircle').style.border = document.getElementById('firstLineCircle').style.border = coords + "px solid #3335CF";

   document.getElementById('firstLineCircle').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
   document.getElementById('secodLineCircle').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;

  setTimeout(randomRotateAndOpacity, 2500);
}


setTimeout(function(){
  let preloader = document.getElementById('preloaderLogo').style;
  console.log(document.documentElement.clientWidth);
  let width = document.documentElement.clientWidth;
  preloader.fontSize = '28px';
  if ( width > 1137 ) {
    preloader.marginLeft = '100px';
    console.log(3)
  }
  if (width > 1036 && width <= 1136){
    preloader.marginLeft = '103px';
    console.log(1)
  }
  if (width < 1036) {
    preloader.marginLeft = '63px';
    console.log(2)
  }
  if (width < 457) {
    preloader.marginLeft = '33px';
    console.log(2)
  }

  preloader.marginTop = '26px';
  preloader.top = '0';
  preloader.left = '0';
}, 2000);

setTimeout(function(){
  document.getElementById('preloader').style.opacity = '0';
}, 2500);

setTimeout(function(){
  document.getElementById('preloader').style.display = 'none';
}, 3000);
