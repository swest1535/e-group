// add markup
(function() {

  const phones = {
    headline: 'Цены на ремонт телефонов',
    prices: [
      {
        title: 'Замена дисплейного модуля',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/1.jpg'
      },
      {
        title: 'Замена стекла дисплейного модуля',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/2.jpg'
      },
      {
        title: 'Замена аккумулятора',
        price: 25,
        picture: '/wp-content/themes/Divi/prices/img/3.jpg'
      },
      {
        title: 'Замена задней крышки',
        price: 20,
        picture: '/wp-content/themes/Divi/prices/img/4.jpg'
      },
      {
        title: 'Замена динамика',
        price: 15,
        picture: '/wp-content/themes/Divi/prices/img/5.jpg'
      },
      {
        title: 'Замена камеры',
        price: 25,
        picture: '/wp-content/themes/Divi/prices/img/6.jpg'
      },
      {
        title: 'Замена стекла камеры',
        price: 15,
        picture: '/wp-content/themes/Divi/prices/img/6.jpg'
      },
      {
        title: 'Замена шлейфа зарядки',
        price: 25,
        picture: '/wp-content/themes/Divi/prices/img/7.jpg'
      },
      {
        title: 'Замена кнопки громкости/включения/вибро',
        price: 25,
        picture: '/wp-content/themes/Divi/prices/img/8.jpg'
      },
      {
        title: 'Перепрошивка/обновление/восстановление ПО',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/9.jpg'
      },
      {
        title: 'Чистка от пыли/влаги',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      }
    ]
  }

  const tablets = {
    headline: 'Цены на ремонт планшетов',
    prices: [
      {
        title: 'Замена стекла дисплейного модуля',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/1.jpg'
      },
      {
        title: 'Замена дисплея',
        price: 110,
        picture: '/wp-content/themes/Divi/prices/img/2.jpg'
      },
      {
        title: 'Чистка от пыли/влаги',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/3.jpg'
      },
      {
        title: 'Замена аккумулятора',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/4.jpg'
      },
      {
        title: 'Ремонт материнской платы',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/5.jpg'
      },
      {
        title: 'Замена задней панели корпуса',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/6.jpg'
      },
      {
        title: 'Замена шлейфа кнопки включения',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/6.jpg'
      },
      {
        title: 'Замена динамика (полифонического)',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/7.jpg'
      },
      {
        title: 'Замена камеры (основной)',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/8.jpg'
      },
      {
        title: 'Замена камеры (фронтальной)',
        price: 70,
        picture: '/wp-content/themes/Divi/prices/img/9.jpg'
      },
      {
        title: 'Замена микрофона',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена шлейфа разъема наушников',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена шлейфа разъема зарядки',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена вибромотора',
        price: 50,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена кнопки громкости/включения/вибро',
        price: 50,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена GSM антенны',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена GPS антенны',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена Wi-Fi антенны',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена сим-лотка',
        price: 20,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Замена кнопки Home',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      },
      {
        title: 'Перепрошивка/обновление/восстановление ПО',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/10.jpg'
      }
		
		
    ]
  }

  const laptops = {
    headline: 'Цены на ремонт ноутбуков',
    prices: [
      {
        title: 'Замена матрицы стандартная 15.6" глянец 30/40pin LED стандартная/slim 1366x768',
        price: 210,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена матрицы 10.1" глянец/матовая',
        price: 180,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена матрицы 17.3" глянец/матовая',
        price: 180,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Установка операционной системы Windows с полным пакетом программ и драйверов',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Замена HDD на SSD 240 Гбайт (с установкой Windows)',
        price: 120,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена HDD на SSD 480 Гбайт (с установкой Windows)',
        price: 180,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Чистка и замена компонентов системы охлаждения',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Восстановление кабеля в зарядном устройстве',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Демонтаж и обратный монтаж BGA-микросхемы (реболл)',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Замена аккумулятора',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Замена видеокарты, видеочипа',
        price: 120,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Замена жесткого диска 500 Гбайт (с установкой Windows)',
        price: 120,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Замена кабеля в зарядном устройстве',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Замена клавиатуры',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
      {
        title: 'Замена кулера (вентилятора)',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена петель (кронштейнов)',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена разъема USB, HDMI, локальной сети',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена разъема питания',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена северного моста',
        price: 120,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена шлейфа матрицы',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Замена южного моста',
        price: 120,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Настройка Wi-Fi',
        price: 20,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Прошивка BIOS без выпаивания чипа',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Прошивка BIOS с выпаиванием чипа',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Ремонт зарядного устройства',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Ремонт звуковой карты',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Ремонт корпуса',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Ремонт материнской платы (цепи питания)',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Ремонт материнской платы после физического повреждения или попадания влаги',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Установка антивирусного ПО',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Установка драйверов',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Установка стороннего ПО',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Восстановление точек крепления матрицы, корпуса (с одной стороны)',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Ослабление петель (за 1 шт.)',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Сохранение Клиентских данных',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      },
		{
        title: 'Установка эксклюзивной матрицы без учета стоимости матрицы',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/laptop.svg'
      }
    ]
  }

  const iqos = {
    headline: 'Цены на ремонт IQOS',
    prices: [
      {
        title: 'Ремонт крышки',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      },
      {
        title: 'Замена нагревателя',
        price: 50,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      },
      {
        title: 'Замена аккумулятора стика',
        price: 45,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      },
      {
        title: 'Замена разъема',
        price: 45,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      },
      {
        title: 'Замена аккумулятора кейса',
        price: 45,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      },
      {
        title: 'Замена кнопки включения',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      },
      {
        title: 'Замена корпуса',
        price: 45,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      },
      {
        title: 'Чистка от влаги',
        price: 45,
        picture: '/wp-content/themes/Divi/prices/img/iqos.png'
      }
    ]
  }

  const appleWatch = {
    headline: 'Цены на ремонт Apple Watch',
    prices: [
      {
        title: 'Замена дисплейного модуля',
        price: 170,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена сенсорной панели дисплейного модуля',
        price: 120,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена стекла дисплейного модуля',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена аккумулятора',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена корпуса',
        price: 150,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Чистка после попадания влаги',
        price: 80,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Перепрошивка/обновление/восстановление ПО',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      }
    ]
  }

  const navigators = {
    headline: 'Цены на ремонт навигаторов',
    prices: [
      {
        title: 'Замена стекла дисплейного модуля',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена аккумулятора',
        price: 35,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена разъема зарядки',
        price: 45,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена кнопки включения',
        price: 35,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Установка навигационных карт',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена динамика (полифонического)',
        price: 20,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена микрофона',
        price: 20,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Перепрошивка/обновление/восстановление ПО',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Чистка от пыли/влаги',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Ремонт материнской платы',
        price: 35,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      }
    ]
  }
  
  const eBooks = {
    headline: 'Цены на ремонт электронных книг',
    prices: [
      {
        title: 'Замена аккумулятора',
        price: 35,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена разъема зарядки',
        price: 45,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена кнопки включения',
        price: 35,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Перепрошивка/обновление/восстановление ПО',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Чистка от пыли/влаги',
        price: 40,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена динамика (полифонического)',
        price: 20,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Замена микрофона',
        price: 20,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Ремонт материнской платы',
        price: 35,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      }
    ]
  }
  
  const software = {
    headline: 'Цены на прошивку',
    prices: [
      {
        title: 'Руссификация',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Разблокировка от оператора',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Удаление аккаунта Google (FRP блокировка)',
        price: 30,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Восстановление информации (только на телефонах на Android)',
        price: 65,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Удаление графического ключа',
        price: 35,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Восстановление IMEI',
        price: 85,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Удаление Huawei id',
        price: 120,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      },
      {
        title: 'Прошивка iOS/Android',
        price: 60,
        picture: '/wp-content/themes/Divi/prices/img/other.svg'
      }
    ]
  }

  const addMarkup = device => {
    const container = document.querySelector('.prices__container');

    const markup = `
      <h2 class="prices__headline text-reset">${device.headline}</h2>
      <ul class="prices__price-list list-reset serviceItem-content">
        ${device.prices.map(item => {
          return `
            <li class="price-list__item">
              <div class="price-list__picture-block">
                <img class="price-list__picture" src="${item.picture}" alt="${item.title}">
              </div>
              <div class="price-list__info-block">
                <span class="price-list__text">${item.title}</span>
                <div class="price-list__order-block">
                <span class="price-list__price">от ${item.price} руб.</span>

                 <div> <a class="price-list__order ord2 "  rel="nofollow">Заказать ремонт</a> </div>

                </div>
              </div>
            </li>
          `
        }).join('')}
      </ul>
      <button class="prices__button prices__button--open" type="button">
        Показать все услуги
        <span class="prices__icon prices__icon--open"></span>
      </button>
      <button class="prices__button prices__button--close" type="button">
        Свернуть все услуги
        <span class="prices__icon prices__icon--close"></span>
      </button>
    `;

    container.innerHTML = markup;
  }

  const URL = 'https://e-group.by/';

  switch (location.href) {
    case `${URL}phones/`:
      addMarkup(phones);
      break;
    case `${URL}tablets/`:
      addMarkup(tablets);
      break;
    case `${URL}laptops/`:
      addMarkup(laptops);
      break;
    case `${URL}iqos/`:
      addMarkup(iqos);
      break;
    case `${URL}apple-watch/`:
      addMarkup(appleWatch);
      break;
    case `${URL}navigators/`:
      addMarkup(navigators);
      break;
    case `${URL}e-books/`:
      addMarkup(eBooks);
      break;
    case `${URL}software/`:
      addMarkup(software);
      break;
  }

})();

// show/hide order links
(function() {

  const priceListItems = document.querySelectorAll('.price-list__item');

  const showOrderLink = evt => {
    evt.target.querySelector('.price-list__text').classList.add('price-list__text--hide');
    evt.target.querySelector('.price-list__price').classList.add('price-list__price--hide');
    evt.target.querySelector('.price-list__order').classList.add('price-list__order--show');
  }
  
  const showOrderLink3= evt => {
  }

  const showTextBlock = evt => {
    evt.target.querySelector('.price-list__order').classList.remove('price-list__order--show');
    evt.target.querySelector('.price-list__text').classList.remove('price-list__text--hide');
    evt.target.querySelector('.price-list__price').classList.remove('price-list__price--hide');
  }

  priceListItems.forEach(item => {
    item.addEventListener('mouseenter', showOrderLink3);
    item.addEventListener('mouseleave', showTextBlock);
  });

})();

// show/hide items
(function() {

  const priceListItems = document.querySelectorAll('.price-list__item');
  const openButton = document.querySelector('.prices__button--open');
  const closeButton = document.querySelector('.prices__button--close');

  const showList = () => {
    for (let i = 5; i < priceListItems.length; i++) {
      priceListItems[i].hidden = false;
    }

    openButton?.classList.remove('prices__button--show');
    closeButton?.classList.add('prices__button--show');
  }

  const hideList = () => {
    for (let i = 5; i < priceListItems.length; i++) {
      priceListItems[i].hidden = true;
    }

    closeButton?.classList.remove('prices__button--show');
    openButton?.classList.add('prices__button--show');
  }

  const resizeHandler = () => {
    const width = window.innerWidth
      || document.documen89yement.clientWidth
      || document.body.clientWidth;

    if (priceListItems.length > 5 && width < 992) {
      hideList();
    } else {
      showList();
      openButton?.classList.remove('prices__button--show');
      closeButton?.classList.remove('prices__button--show');
    }
  }

  openButton?.addEventListener('click', showList);
  closeButton?.addEventListener('click', hideList);
  window.addEventListener('resize', resizeHandler);
  resizeHandler();

})();