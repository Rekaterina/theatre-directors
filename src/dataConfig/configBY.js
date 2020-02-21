const developers = [
  {
    id: 'D0',
    name: 'Кацярына Рудзенка',
    github: 'https://github.com/Rekaterina',
    telegram: 'https://t.me/rekaterina',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/rudenko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D1',
    name: 'Уладзімір Сярко',
    github: 'https://github.com/Vir45',
    telegram: 'https://t.me/Vova_Serko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/serko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D2',
    name: 'Кацярына Якубоўская',
    github: 'https://github.com/Katsiaryna31',
    telegram: 'https://t.me/KatsiarynaYa',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yakubovskaya.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D3',
    name: 'Антон Ясько',
    github: 'https://github.com/antonyasko',
    telegram: 'https://t.me/anton_yasko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yasko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D4',
    name: 'Кірыл Лёгкі',
    github: 'https://github.com/kirillleogky',
    telegram: 'https://t.me/KirillLeogky',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/leogky.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D5',
    name: 'Раман Ганчароў',
    github: 'https://github.com/RomaSRS',
    telegram: 'https://t.me/RomanSRS',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/goncharov.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
];

const directors = [
  {
    id: '0',
    url: 'mirovich',
    name: 'Еўсцігней Афінагенавіч Міровіч',
    born: '10 жніўня 1878',
    deceased: '16 лютага 1952',
    description: 'Беларускі драматург і тэатральны рэжысёр',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Mirovich_03.jpg',
    placeOfBirth: 'Санкт-Пецярбург',
    placeOfDeath: 'Мінск',
    shortBiography : 'Еўсцігней Афиногенович Міровіч (сапраўднае прозвішча - Дунаеў; 29 ліпеня [10 жніўня] 1878, Санкт-Пецярбург - 16 лютага 1952, Мінск) - расійскі і беларускі савецкі акцёр, рэжысёр, драматург, педагог, прафесар (1945). Народны артыст Беларускай ССР (1940). Адзін з заснавальнікаў беларускага тэатральнага мастацтва, беларускага тэатра ім. Янкі Купалы. Удзельнічаў у стварэнні Беларускага тэатральна-мастацкага інстытута (цяпер - Беларуская дзяржаўная акадэмія мастацтваў).',
    timeline: [
      {date: '1900', text: 'Пачаў працаваць у пецярбургскіх тэатрах акцёрам, затым рэжысёрам.'},
      {date: '1906', text: 'Стаў правадзейны членам Санкт-Пецярбургскага саюза драматычных і музычных пісьменнікаў.'},
      {date: '1919', text: 'Пачаў працаваць у тэатрах Беларусі.'},
      {date: '1921—1931', text: 'Працуе мастацкім кіраўніком у тэатрах Беларусі.'},
      {date: '1932—1935', text: 'Мастацкі кіраўнік Гомельскага тэатра рабочай моладзі.'},
      {date: '1937—1940', text: 'Мастацкі кіраўнік Беларускага тэатра юнага гледача імя Н. Крупскай.'},
      {date: '1941—1945', text: 'Працуе рэжысёрам Беларускага тэатра ім. Я. Купалы (БДТ-1).'},
    ],
    project: [
      {date: '1923', text: '«Кастусь Каліноўскі»'},
      {date: '1927', text: '«Мятеж» па Д. Фурманаву'},
      {date: '1929', text: '«Мост» Е. Романовіча'},
      {date: '1930', text: '«Гута» Кабеца'},
      {date: '1937', text: '«Як гартавалася сталь» па М. Астроўскаму'},
      {date: '1939', text: '«Цудоўная дудка» Вольскага'},
    ],
    // video: '',
    mapData: {
      center: [53.9226577, 27.6010486],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%B0%D0%BA%D1%82%D1%91%D1%80%D0%B0_%D0%95%D0%B2%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B5%D1%8F_%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0.JPG',
        // width: 4,
        // height: 3,
        // title: 'Магіла Міровіча',
        text: 'Магіла Міровіча на Вайсковых могілках Мінска.'
      },
      {
        num: 1,
        src: 'https://img.tyt.by/n/obshchestvo/0b/4/08_mirovich-1952_620.jpg',
        // width: 4,
        // height: 3,
        // title: 'Партрэт Міровіча',
        text: 'Партрэт пэндзля народнага мастака БССР Івана Ахрэмчыка.'
      },
      {
        num: 2,
        src: 'https://img.tyt.by/n/obshchestvo/06/0/09_mirovich_doska_620.jpg',
        // width: 4,
        // height: 3,
        // title: 'Барэльеф Міровіча',
        text: 'Барэльеф Міровіча на фасадзе Беларускай акадэміі мастацтваў.'
      },
    ],
  },
  {
    id: '1',
    url: 'galubok',
    name: 'Уладзіслаў Іосіфавіч Галубок',
    born: '15 мая 1882',
    deceased: '28 верасня 1937',
    description: 'Беларускі драматург, празаік, рэжысёр, акцёр, мастак.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Vladislav_Golubok.jpg',
    placeOfBirth: 'Ст. Лясная, Навагрудскі павет, Мінская губерня',
    placeOfDeath: 'Мінск',
    shortBiography : 'Уладзісла́ў Галубо́к, сапр.: Уладзісла́ў Іо́сіфавіч Го́луб (Го́лубеў) (3 (15) мая 1882, станцыя Лясная, Навагрудскі павет, Мінская губерня, цяпер Баранавіцкі раён, Брэсцкай вобласці — 28 верасня 1937, Мінск, НКУС) — беларускі драматург, празаік, рэжысёр, акцёр, мастак. Народны артыст Беларусі (1928)[1]. Член Саюза пісьменнікаў СССР (1934).',
    timeline: [
      {date: '1896', text: 'Упершыню трапіў у сапраўдны тэатр.'},
      {date: '1906', text: 'На старонках «Нашай Нівы» з\'явіліся яго першыя вершы і апавяданні.'},
      {date: '1913', text: 'У Пецярбургу выйшла першая кніжка «Апавяданні».'},
      {date: '1917', text: 'адроджана «Першае беларускае таварыства драмы і камедыі», раней забароненае ўладамі Расійскай Імперыі. Галубок уступае ў таварыства разам з жонкай і дзецьмі і робіць першыя спробы ў драматургіі. За адну толькі восень 1917 г. Галубок піша тры п\'есы, якія адразу ставіць яго трупа.'},
      {date: '1920', text: 'узначаліў Драматычную секцыю культурна-асветніцкай арганізацыі «Папараць-кветка» ў Слуцку.'},
      {date: '1924', text: 'выдадзены загад Наркамата асветы аб ператварэнні трупы Галубка ў Беларускую дзяржаўную трупу.'},
      {date: '1928', text: 'Прысвоена званне народнага артыста рэспублікі. Галубок стаў першым беларускім народным артыстам.'},
      {date: '1931', text: 'Тэатр Галубка рэарганізуюць, яго называюць БДТ-3 (Беларускі трэці дзяржаўны тэатр) і «прапісваюць» у Гомелі. Гастролі па акругах, тым не менш, працягваліся.'},
      {date: '1933', text: 'БДТ-3 ставіць п\'есу «Белая зброя». П\'еса апавядае пра шкодніцкую дзейнасць «ворагаў народа» на адным з заводаў.'},
      {date: '1935', text: 'шырока адзначаўся 15-гадовы юбілей тэатра Уладзіслава Галубка, многія акцёры атрымалі ганаровыя званні, Галубок быў узнагароджаны аўтамабілем і творчай камандзіроўкай у Маскву і Ленінград.'},
    ],
    project: [
      {date: '1917', text: '«Апошняе спатканьне»'},
      {date: '1920', text: '«Суд»'},
      {date: '1921', text: '«Белы вянок»'},
      {date: '1927', text: '«Краб»'},
      {date: '1933', text: '«Белая зброя»'},
    ],
    video: 'https://www.youtube.com/watch?v=FQ054q0969g',
    mapData: {
      center: [53.9032207, 27.5344804],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%A3%D0%BB%D0%B0%D0%B4%D1%8B%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA.jpg',
        // width: 4,
        // height: 3,
        // title: 'Афіша',
        text: 'Афіша 1929 года'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Haluboktheatre4.jpg',
        // width: 4,
        // height: 3,
        // title: 'Сцэна са спектаклю',
        text: 'Сцэна са спектаклю «Мой сябра» М. Пагодзіна, 1932 год.'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA._%D0%A4%D0%BE%D1%82%D0%B0.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотапартрэт',
        text: 'Уладзіслаў Галубок. Фотапартрэт'
      },
    ],
  },
  {
    id: '2',
    url: 'bujnicki',
    name: 'Ігнат Цярэнцьевіч Буйніцкі',
    born: '22 жніўня 1861',
    deceased: '22 верасня 1917',
    description: 'беларускі акцёр, рэжысёр, тэатральны дзеяч, стваральнік нацыянальнага прафесійнага тэатра, удзельнік літаратурнага жыцця.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ihnat_Bujnicki.jpg',
    placeOfBirth: 'фальварак Палівачы, Празароцкая воласць (цяпер Глыбоцкі раён), Дзісенскі павет',
    placeOfDeath: 'Палачаны, Маладзечанскі раён',
    shortBiography : 'Ігна́т Цярэ́нцьевіч Буйні́цкі (10 (22) жніўня 1861, в. Палівачы Празароцкай вол., цяпер Глыбоцкі раённ — 9 (22) верасня 1917) — беларускі акцёр, рэжысёр, тэатральны дзеяч, стваральнік нацыянальнага прафесійнага тэатра, удзельнік літаратурнага жыцця.\nЯшчэ пры жыцці яго называлі бацькам беларускага тэатра. Ігнат Буйніцкі ўпершыню вывеў «мужыцкі» танец на сцэну, як выканаўца і пастаноўшчык паказаў невычарпальныя магчымасці і прыгажосць беларускіх народных танцаў. Як драматычны акцёр выступаў пераважна ў характарных ролях, умела выяўляў гумар і тонкую іронію. У сваёй музычна-тэатральнай дзейнасці ён працягваў развіваць на больш высокім прафесійным узроўні традыцыі тэатра В. Дуніна-Марцінкевіча.',
    timeline: [
      {date: '1907', text: 'у сваёй сядзібе ў Палівачах (каля Празарокаў) заснаваў самадзейны тэатр, дзе спачатку прымалі ўдзел яго сваякі.'},
      {date: '1910', text: 'У Вільні 12 лютага тэатр Буйніцкага па адмысловым запрашэнні рэдакцыі «Нашай Нівы» прыняў удзел у прадстаўленні, якое ўвайшло ў гісторыю пад назвай «Першая беларуская вечарынка ў Вільні».'},
      {date: '1910—1913', text: 'тэатр гастраляваў па Беларусі (Мінск, Слуцк, Полацк, Дзісна, Свянцяны, Паставы, Нясвіж, Ляхавічы), двойчы выступаў у Пецярбургу (1911, 1912), а таксама ў Варшаве (1913).'},
      {date: '1913', text: 'З-за матэрыяльных цяжкасцей і ўціску царскіх уладаў у 1913 г. дзейнасць трупы была спыненая.'},
      {date: '1914', text: 'паспрабаваў стварыць новую трупу, аднак 1-я сусветная вайна перашкодзіла здзейсніць гэту задуму.'},
      {date: '1917', text: 'У час Першай сусветнай вайны адправіўся на Заходні фронт, быў на вайсковай службе ў Маладзечне.'},
    ],
    project: [
      {date: '1910', text: '«Першая беларуская вечарынка ў Вільні»'},
    ],
    video: 'https://www.youtube.com/watch?v=ACDGr4TUkvs&feature=emb_logo',
    mapData: {
      center: [55.2899866, 28.220279],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Buinicki.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотаздымак',
        text: 'І. Буйніцкі з дачкамі Вандай (злева) і Аленай'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bujnicki2.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотаздымак',
        text: 'І. Буйніцкі з дачкой Вандай у час выступлення на Першай беларускай вечарынцы ў Вільні. 1910 г.'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%9F%D1%80%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%BA%D1%96._%D0%9F%D0%BE%D0%BC%D0%BD%D1%96%D0%BA_%D0%86%D0%B3%D0%BD%D0%B0%D1%82%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%86%D0%BA%D0%B0%D0%BC%D1%83.jpg',
        // width: 4,
        // height: 3,
        // title: 'Помнік',
        text: 'Помнік на магіле І.Ц. Буйніцкага ў в. Празарокі'
      },
    ],
  },
  {
    id: '3',
    url: 'pinigin',
    name: 'Мікалай Мікалаевіч Пінігін',
    born: '6 жніўня 1957',
    deceased: 'нашы дні',
    description: 'Беларускі рэжысёр, заслужаны дзеяч мастацтваў Рэспублікі Беларусь.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinigin.JPG',
    placeOfBirth: 'Ізюм, Харкаўская вобласць, СССР',
    placeOfDeath: ' ',
    shortBiography : 'Мікала́й Мікала́евіч Піні́гін (6 жніўня 1957, Ізюм, Харкаўская вобласць, Украіна) — беларускі тэатральны рэжысэр, мастацкі кіраўнік Нацыянальнага акадэмічнага тэатру імя Янкі Купалы, заслужаны дзеяч мастацтваў Рэспублікі Беларусь.',
    timeline: [
      {date: '1979', text: 'Скончыў режысёрскі факультэт Беларускі тэатральна-мастацкі інстытут.'},
      {date: '1980—1982', text: 'працаваў у Рускім драматычным тэатры ім. М. Горкага (Мінск).'},
      {date: '1985', text: 'рэжысёр Нацыянальнага акадэмічнага тэатра імя Я. Купалы.'},
      {date: '1985-1987', text: 'выкладчык кафедры «Майстэрства акцёра і рэжысуры» у Беларускай акадэміі мастацтваў.'},
      {date: '1998', text: 'режысёр Вялікага драматычнага тэатра ім. Г. А. Таўстаногава (Санкт-Пецярбург)'},
      {date: '2008', text: 'прызначаны галоўным рэжысёрам Нацыянальнага акадэмічнага тэатру імя Я. Купалы.'},
    ],
    project: [
      {date: '1979', text: '«Начны дыліжанс»'},
      {date: '1984', text: '«Жанчына з мора»'},
      {date: '1990', text: '«Тутэйшыя» Я. Купалы'},
      {date: '1997', text: '«Сваволі Марыяны» А. Мюсэ'},
      {date: '1999', text: '«Каліфарнійская сюіта» Ніл Сайман'},
      {date: '2000', text: '«Хлусня на доўгіх нагах» Э. дэ Філіпа'},
      {date: '2001', text: '«Таленты і прыхільнікі» А. М. Астроўскага'},
    ],
    video: 'https://www.youtube.com/watch?v=lexVZsR-GF0',
    mapData: {
      center: [59.927614, 30.330527],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://minsknews.by/wp-content/uploads/2018/07/DSC_0237-copy-696x464.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотаздымак',
        text: 'Фотаздымак'
      },
      {
        num: 1,
        src: 'https://cdn12.img.sputnik.by/images/102328/96/1023289681.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотаздымак',
        text: 'Фотаздымак'
      },
      {
        num: 2,
        src: 'https://s13.stc.all.kpcdn.net/share/i/12/11199960/inx960x640.jpg',
        // width: 4,
        // height: 3,
        // title: 'Фотаздымак',
        text: 'Фотаздымак'
      },
    ],
  },
  {
    id: '4',
    url: 'aleksandrouskaja',
    name: 'Ларыса Пампееўна Александроўская',
    born: '15 лютага 1904',
    deceased: '23 мая 1980',
    description: 'Беларуская оперная спявачка (сапрана), тэатральны рэжысёр, рэжысёр і грамадскі дзеяч',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/%C5%81arysa_Aleksandro%C5%ADskaja._%D0%9B%D0%B0%D1%80%D1%8B%D1%81%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D1%9E%D1%81%D0%BA%D0%B0%D1%8F_%281937%29.jpg',
    placeOfBirth: 'Мінск',
    placeOfDe6ath: 'Мінск',
    shortBiography : 'Ларыса Пампееўна Аляксандраўская (2 (15) лютага 1902 г. (паводле афіцыйных дадзеных - 1904) Мінск - 23 мая 1980 г.) - беларуская савецкая оперная спявачка (сапрана), рэжысёр, публіцыст і грамадскі дзеяч. Народная артыстка СССР (1940).',
    timeline: [
      {date: '1919-1924', text: 'удзельніца арганізаванай ёю самадзейнай трупы пры Палітаддзеле Заходняга фронту.'},
      {date: '1927', text: 'выконвае беларускія народныя песні на Міжнароднай музычнай выстаўцы ў Франкфурце-на-Майне.'},
      {date: '1933', text: 'артыстка Беларускага тэатра оперы і балета.'},
      {date: '1946', text: 'Прызначаная старшынёй Беларускага тэатральнага аб\'яднання.'},
      {date: '1951—1960', text: 'галоўны рэжысёр Беларускага тэатра оперы і балета.'},
      {date: '1976', text: 'Прызначаная ганаровай старшынёй Беларускага тэатральнага аб\'яднання.'},
    ],
    project: [
      {date: '1951', text: '«Запарожац за Дунаем» С. Гулак-Арцямоўскага'},
      {date: '1952', text: '«Страшны двор» С. Манюшкі'},
      {date: '1953', text: '«Аіда» Джузэпэ Вердзі'},
      {date: '1954', text: '«Барыс Гадуноў» М. Мусаргскага'},
      {date: '1957', text: '«Міхась Падгорны» Я. Цікоцкага'},
      {date: '1960', text: '«Пікавая дама» П. Чайкоўскага'},
    ],
    video: 'https://www.youtube.com/watch?v=eDYuC8m5wsw&feature=youtu.be',
    mapData: {
      center: [53.9103046, 27.5615253],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/6/62/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%BF%D0%B5%D0%B2%D0%B8%D1%86%D1%8B_%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D1%8B_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9.JPG',
        // width: 4,
        // height: 3,
        // title: 'Магіла Александроўскай',
        text: 'Магіла Александроўскай на Усходніх могілках Мінска.'
      },
      {
        num: 1,
        src: 'https://minsknews.by/wp-content/uploads/2018/03/4-9.jpg',
        // width: 4,
        // height: 3,
        // title: 'Вобраз Кармэн',
        text: 'Спявачка ў вобразе Кармэн.'
      },
      {
        num: 2,
        src: 'https://www.sb.by/upload/medialibrary/377/3775af02273a590150a1e89012960225.jpg',
        // width: 4,
        // height: 3,
        // title: 'Юбілей',
        text: '70 год.'
      },
    ],
  },
  {
    id: '5',
    url: 'lutsenka',
    name: 'Барыс Іванавіч Луцэнка',
    born: '16 верасня 1937',
    deceased: '5 лютага 2020',
    description: 'Беларускі тэатральны рэжысёр, народны артыст Беларусі.',
    image: 'https://www.rustheatre.by/images/stories/administration/lutsenko_black.jpg',
    placeOfBirth: 'Майкоп, Адыгейская аўтаномная вобласць, СССР',
    placeOfDe6ath: 'Мінск',
    shortBiography : 'Барыс Іванавіч Луцэнка (16 верасьня, 1937, Майкоп, Краснадарскі край - 5 лютага 2020 ды Мінск) - савецкі і беларускі рэжысёр-пастаноўшчык тэатра і кіно. Народны артыст Рэспублікі Беларусь (1995). Заслужаны дзеяч мастацтваў Беларускай ССР (1975).',
    timeline: [
      {date: '1962—1967', text: 'вучыўся ў Беларускім тэатральна-мастацкім інстытуце.'},
      {date: '1967', text: 'прыняты ў Беларускі тэатр імя Я. Купалы.'},
      {date: '1970', text: 'Пачаў выкладаць у Беларускай акадэміі мастацтваў.'},
      {date: '1973-1981', text: 'галоўны рэжысёр Дзяржаўнага рускага драматычнага тэатра імя М. Горкага.'},
      {date: '1981-1982', text: 'рэжысёр Купалаўскага тэатра.'},
      {date: '1982—1991', text: 'галоўны рэжысёр Тэатра-студыі кінаакцёра.'},
      {date: '1991-2007', text: 'мастацкі кіраўнік Нацыянальнага акадэмічнага драматычнага тэатра імя М. Горкага.'},
    ],
    project: [
      {date: '1970', text: '«Памяць сэрца» Аляксандра Карнейчука'},
      {date: '1976', text: '«Трохграшовая опера» Бертальда Брэхта'},
      {date: '1979', text: '«Трагедыя чалавека» Імрэ Мадача'},
      {date: '1985', text: '«Не баюся Вірджыніі Вульф» Эдварда Олбі'},
      {date: '1990', text: '«Генералы ў спадніцах» Жана Ануя'},
    ],
    video: 'https://www.youtube.com/watch?v=C3TMCDZA2rY',
    mapData: {
      center: [53.898314, 27.5507955],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG',
        // width: 4,
        // height: 3,
        // title: 'Партрэт Барыса Луцэнка',
        text: 'Партрэт Барыса Луцэнка пэндзля беларускага мастака Аляксея Кузьміча, 2001 год.'
      },
      {
        num: 1,
        src: 'http://images.aif.by/007/667/03b8ec457923e6c67efae3f6275f67cd.JPG',
        // width: 4,
        // height: 3,
        // title: 'У тэатры',
        text: 'Рэжысёр у тэатры.'
      },
      {
        num: 2,
        src: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-02/TASS_18992976%20copy.jpg?itok=LmXoBDLI',
        // width: 4,
        // height: 3,
        // title: 'Фотаздымак',
        text: 'Фотаздымак'
      },
    ],
  },
  {
    id: '6',
    url: 'kryzanowski',
    name: 'Яўген Анатолевіч Крыжаноўскі',
    born: '6 чэрвеня 1955',
    deceased: 'нашы дні',
    description: 'беларускі акцёр і галоўны рэжысёр Мінскага тэатра сатыры і гумару «Хрыстафор», заслужаны артыст Рэспублікі Беларусь.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Kryzanowski.jpg',
    placeOfBirth: 'Мікалаеў, Мікалаеўская вобласць, УССР, СССР',
    placeOfDe6ath: ' ',
    shortBiography : 'Яўген Анатольевіч Крыжаноўскі (род. 6 чэрвеня 1955 гады, Нікалаеў, Украінская ССР, СССР) - савецкі і беларускі гумарыст, акцёр і галоўны рэжысёр Мінскага тэатра сатыры і гумару «Хрыстафор» (1986-2016). Мастацкі кіраўнік тэлевізійнага праекту «Юморинка» (2015-2019). Мастацкі кіраўнік "кінацэнтры Яўгена Крыжаноўскага". Заслужаны артыст Рэспублікі Беларусь (2015).',
    timeline: [
      {date: '1972', text: 'Скончыў школу ў Казельску (РСФСР).'},
      {date: '1973', text: 'паступіў у Беларускі тэатральна-мастацкі інстытут на акцёрскае аддзяленне.'},
      {date: '1977', text: 'прыняты ў трупу Акадэмічнага тэатра імя Янкі Купалы.'},
      {date: '1986', text: 'стварыў тэатр сатыры і гумару «Хрыстафор». Згуляў больш за 30 вялікіх і галоўных роляў.'},
    ],
    project: [
      {date: '1982', text: ' «Купальская ноч»'},
      {date: '1985', text: '«Ідзі і глядзі»'},
    ],
    video: 'https://www.youtube.com/watch?v=2q_HkfBF3AY',
    mapData: {
      center: [53.9008774, 27.5626722],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Jaugen_Kryzhanouski_and_his_daughter_-_on_an_International_book_exhibition_in_Minsk_city_-_14_February_2015_AD_-_1.JPG',
        // width: 4,
        // height: 3,
        // title: 'Яўген Крыжаноўскі і яго дачка',
        text: 'Яўген Крыжаноўскі і яго дачка — на XXII Міжнароднай кніжнай выстаўцы ў Мінску (Беларусь), 14 лютага 2015 г.'
      },
      {
        num: 1,
        src: 'http://kryzhanovski.tripod.com/images/photo/pic8.jpg',
        // width: 4,
        // height: 3,
        // title: 'З Анатолем Длускім',
        text: 'З Анатолем Длускім.'
      },
      {
        num: 2,
        src: 'http://kryzhanovski.tripod.com/images/photo/pic3.jpg',
        // width: 4,
        // height: 3,
        // title: 'З сям\'ёй.',
        text: 'З сям\'ёй.'
      },
    ],
  },
];

const mainText = 'Прафесія тэатральнага рэжысёра ў тым выглядзе, у якім мы прывыклі бачыць яе, развівалася ў другой палове XIX стагоддзя. Але канцэпцыя рэжысуры з\'явілася значна раней - у 1742 г. Рэжысёр тэатра вызначае агульную ідэю, якая будзе раскрыта падчас спектакля. Гэты творчы работнік аб\'ядноўвае намаганні ўсіх астатніх - дэкаратараў і акцёраў, кампазітараў і візажыстаў. Менавіта ён павінен аб\'яднаць усіх працаўнікоў тэатра, прымусіць іх пранікнуць сэнсам, укласці іх душу ў пастаноўку. Для гэтага рэжысёру трэба быць добрым псіхолагам, маючы магчымасць кантраляваць сябе. Рэжысёр тэатра - прафесія складаная. Каб стаць адным, трэба валодаць напорыстасцю, сур\'ёзнасцю, пісьменнасцю, кемлівасцю і арыгінальнасцю. Гэты чалавек інтэрпрэтуе п\'есы - зразумела, згодна са сваім бачаннем, каб яны гучалі па-новаму, цікавілі публіку.';

const directorOfTheDay = 'Рэжысёр дня';

export default {
  directors,
  developers,
  directorsLink: 'Рэжысёры',
  developersLink: 'Распрацоўшчыкі',
  homePageLink: 'Галоўная',
  worklogLink: 'Worklog',
  styleguideLink: 'Styleguide',
  searchLabel: 'Імя або месца нараджэння',
  directorsOfTheDayButton: 'Больш падрабязна',
  timelineTitle: 'Часовыя падзеі',
  otherInfo: {
    lang: 'by',
    title: 'Тэатральныя рэжысёры Беларусі',
    description: 'Тэатральныя рэжысёры Беларусі: біяграфія і іх працы.',
  },
  mainText,
  directorOfTheDay,
}