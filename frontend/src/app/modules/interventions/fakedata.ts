import {RawServerIntervention} from './types';

export const FAKE_DATA = [{
    "date": "2019-06-28T23:24:42.888Z",
    "contactPerson": "Christa Erdman",
    "description": "Odit ut magni eum molestiae explicabo omnis sunt reiciendis dolorem. Suscipit amet harum aut vitae eum eum quam alias consequatur. Quos dolorem eum adipisci sit molestiae adipisci qui necessitatibus consequuntur.",
    "phone": "(042) 648-7651 x44008",
    "email": "Hyman31@gmail.com",
    "status": "Do weryfikacji",
    "address": "Mszczonowska 3, 05-090 Warszawa",
    "geolat": 52.13585,
    "geolng": 20.89395
}, {
    "date": "2019-06-29T06:41:27.607Z",
    "contactPerson": "Emerson Jakubowski",
    "description": "Voluptatum repellat aspernatur vel consequatur inventore hic. Odio unde error dolores sunt aspernatur nam. Ratione quidem blanditiis officia. Culpa qui impedit aut nemo quaerat facilis consequatur et. Illo pariatur at provident laborum. Aut velit perspiciatis ut illum officiis explicabo quam inventore.",
    "phone": "323-912-2999",
    "email": "Daniela44@hotmail.com",
    "status": "Do podjęcia",
    "address": "Pijarska 11, 58-500 Jelenia Góra",
    "geolat": 50.90494,
    "geolng": 15.73806
}, {
    "date": "2019-06-29T11:56:56.059Z",
    "contactPerson": "Vicky Waelchi",
    "description": "Sunt rerum dolores voluptatem in ut amet dolorum aut dolor. Eos praesentium illum eius autem dolores eaque error expedita eaque. Voluptatem aut reprehenderit omnis. Eveniet velit quisquam qui praesentium est voluptatum nam.",
    "phone": "670-240-4370",
    "email": "Stephania_Wintheiser59@yahoo.com",
    "status": "Do podjęcia",
    "address": "Czecha 2A, 58-570 Jelenia Góra",
    "geolat": 50.84422,
    "geolng": 15.64163
}, {
    "date": "2019-06-29T06:45:58.263Z",
    "contactPerson": "Dayna Greenfelder",
    "description": "Possimus quas ut molestiae ut rerum dolore. Deleniti enim ut doloremque id saepe libero maiores beatae. Et culpa aut voluptatem mollitia qui aspernatur sit exercitationem. Vero perferendis repellat voluptates pariatur at similique.",
    "phone": "138.163.5337",
    "email": "Emma.Hilpert@hotmail.com",
    "status": "Zamknięta",
    "address": "Jana Pawła II 47, 58-506 Jelenia Góra",
    "geolat": 50.92039,
    "geolng": 15.75923
}, {
    "date": "2019-06-29T11:17:43.640Z",
    "contactPerson": "Shana Hand",
    "description": "Ut minus maiores possimus impedit placeat numquam sint. Ipsa facilis laborum asperiores sit doloremque earum. Eligendi consequatur voluptatem magnam iure. Error ea blanditiis repellat. Soluta sint a a velit. Reiciendis voluptatem quis magnam corrupti est et.",
    "phone": "(551) 627-0325 x90691",
    "email": "Franco22@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Wojska Polskiego 13, 58-500 Jelenia Góra",
    "geolat": 50.89965,
    "geolng": 15.74434
}, {
    "date": "2019-06-28T23:24:31.504Z",
    "contactPerson": "Thora Gaylord",
    "description": "Aut laboriosam quae sunt. Ad rerum aperiam et animi praesentium. Vel eos architecto. Quidem ut odit numquam.",
    "phone": "409-117-8127 x072",
    "email": "Favian.Padberg5@gmail.com",
    "status": "Do weryfikacji",
    "address": "Jana Pawła II 24, 58-508 Jelenia Góra",
    "geolat": 50.91644,
    "geolng": 15.75475
}, {
    "date": "2019-06-29T00:38:20.066Z",
    "contactPerson": "Keeley Witting",
    "description": "Neque aut voluptates alias dicta ab. Reiciendis ipsum deserunt delectus eum numquam. At quia provident architecto.",
    "phone": "(972) 485-6634 x987",
    "email": "Lew_Wyman@yahoo.com",
    "status": "Zamknięta",
    "address": "Kiepury 21, 58-500 Jelenia Góra",
    "geolat": 50.9185,
    "geolng": 15.74831
}, {
    "date": "2019-06-29T01:45:00.967Z",
    "contactPerson": "Mireille Bosco",
    "description": "Qui sit mollitia voluptatem est placeat dignissimos sit quisquam maxime. Itaque dolore blanditiis doloribus. Nihil quod possimus assumenda nemo dolor perspiciatis facilis laboriosam.",
    "phone": "(388) 083-2752 x72200",
    "email": "Carlotta.Steuber35@gmail.com",
    "status": "Zamknięta",
    "address": "Ogińskiego 1C, 58-506 Jelenia Góra",
    "geolat": 50.90824,
    "geolng": 15.75047
}, {
    "date": "2019-06-29T03:00:11.959Z",
    "contactPerson": "Yasmine Kiehn",
    "description": "Qui iure modi incidunt commodi. At eos ipsa sit similique accusantium. Et nihil amet. Ut quaerat rerum molestias est sit doloremque delectus. Aspernatur et amet. Maxime reprehenderit dolores vel similique suscipit quia.",
    "phone": "1-651-840-3681 x256",
    "email": "Davonte63@gmail.com",
    "status": "W toku",
    "address": "Jana Pawła II 17, 58-506 Jelenia Góra",
    "geolat": 50.91017,
    "geolng": 15.7372
}, {
    "date": "2019-06-29T07:16:45.481Z",
    "contactPerson": "Horace Beier",
    "description": "Nemo minus ab. Provident sit eum recusandae quidem iusto ut.",
    "phone": "520.196.4664 x40111",
    "email": "Domenico.Streich32@gmail.com",
    "status": "Do weryfikacji",
    "address": "Piłsudskiego 47, 58-500 Jelenia Góra",
    "geolat": 50.90046,
    "geolng": 15.73347
}, {
    "date": "2019-06-29T08:10:15.295Z",
    "contactPerson": "Peggie Kutch",
    "description": "Optio aut esse alias aut. Repellendus porro tempora non ut animi atque sunt quisquam. Odit accusamus unde quas. Laborum quia ab. Similique iure reiciendis quas sit aut.",
    "phone": "1-727-533-4794",
    "email": "Adella_Kshlerin25@gmail.com",
    "status": "Do weryfikacji",
    "address": "Morcinka 33A, 58-500 Jelenia Góra",
    "geolat": 50.88885,
    "geolng": 15.73405
}, {
    "date": "2019-06-28T21:05:50.723Z",
    "contactPerson": "Georgianna Williamson",
    "description": "Exercitationem earum doloremque saepe nisi cum qui quia. Odio sit reprehenderit harum. Eveniet totam maiores adipisci debitis. Quia deserunt enim aut.",
    "phone": "007-526-6222 x76637",
    "email": "Gerhard_Monahan@gmail.com",
    "status": "W toku",
    "address": "Wolności 252, 58-560 Jelenia Góra",
    "geolat": 50.86278,
    "geolng": 15.68758
}, {
    "date": "2019-06-28T22:16:08.648Z",
    "contactPerson": "Carole Kessler",
    "description": "Et porro ad. Et aliquam quo provident aut voluptatem velit quaerat doloremque nihil.",
    "phone": "560.724.9601 x6630",
    "email": "Ryan28@yahoo.com",
    "status": "Do podjęcia",
    "address": "Elsnera 1A, 58-506 Jelenia Góra",
    "geolat": 50.91511,
    "geolng": 15.75926
}, {
    "date": "2019-06-29T02:20:11.925Z",
    "contactPerson": "Mckenna Runolfsdottir",
    "description": "Nesciunt mollitia numquam molestiae cupiditate incidunt ipsum magni veritatis. Veniam optio nemo ipsa vel itaque sed eum at id. Deserunt fugiat eum sint ratione ex tempore. Reprehenderit ipsum est reprehenderit. Sint facere explicabo.",
    "phone": "(918) 699-5320 x49084",
    "email": "Dashawn_Jacobs@hotmail.com",
    "status": "Zamknięta",
    "address": "Ściegiennego 58, 40-111 Katowice",
    "geolat": 50.2719,
    "geolng": 19.00809
}, {
    "date": "2019-06-28T22:16:20.095Z",
    "contactPerson": "Leonor Powlowski",
    "description": "Quae praesentium corporis omnis. Dolor ipsam nam aut possimus aut. Omnis rem rerum nemo dolorum fugit magni iure dolor eius. Modi corrupti et quisquam reiciendis totam laudantium facere.",
    "phone": "843.268.1319",
    "email": "Kailyn.Stanton@hotmail.com",
    "status": "Zamknięta",
    "address": "Chorzowska 148, 40-101 Katowice",
    "geolat": 50.27033,
    "geolng": 18.998
}, {
    "date": "2019-06-29T15:26:26.835Z",
    "contactPerson": "Chester Rutherford",
    "description": "Voluptatem ratione qui illo in laudantium aut totam. Necessitatibus voluptatibus ut. Nam ex unde ipsam provident soluta voluptatibus. Corporis et quasi temporibus sit ullam sed quidem omnis. Veniam illo quis ratione corporis. Dolorem voluptatibus placeat est labore.",
    "phone": "209-048-4205",
    "email": "Nicola_Smitham@yahoo.com",
    "status": "W toku",
    "address": "Bożogrobców 20, 40-115 Katowice",
    "geolat": 50.2737,
    "geolng": 19.00113
}, {
    "date": "2019-06-29T13:04:26.688Z",
    "contactPerson": "Dagmar Champlin",
    "description": "Ullam voluptatem ut rerum. Tempora iste commodi sit labore molestiae. Delectus sint et est sit est.",
    "phone": "1-174-092-6242 x215",
    "email": "Bethany85@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Panewnicka 107, 40-761 Katowice",
    "geolat": 50.22955,
    "geolng": 18.95415
}, {
    "date": "2019-06-28T21:29:07.345Z",
    "contactPerson": "Jadon Funk",
    "description": "Alias non asperiores magnam autem soluta necessitatibus consequatur. Accusantium unde est. Eveniet dolore aspernatur tempore dolor totam quasi. Itaque et dicta nobis excepturi quia. Commodi est voluptatum in rerum eaque quibusdam ea quam fugit. Voluptas sint nulla nisi cum ea incidunt ut possimus.",
    "phone": "(116) 719-0454 x5465",
    "email": "Sigrid.Littel@hotmail.com",
    "status": "Zamknięta",
    "address": "Armii Krajowej 188, 40-750 Katowice",
    "geolat": 50.20351,
    "geolng": 18.97185
}, {
    "date": "2019-06-28T22:27:30.553Z",
    "contactPerson": "Corene Rath",
    "description": "Velit expedita beatae tenetur accusantium perferendis rerum praesentium voluptate culpa. Error beatae reiciendis ad cumque sit velit eos praesentium. A repellendus neque. Possimus quasi repudiandae.",
    "phone": "(535) 415-1635 x316",
    "email": "Morris_Schoen72@hotmail.com",
    "status": "Zamknięta",
    "address": "Łętowskiego 32, 40-648 Katowice",
    "geolat": 50.20414,
    "geolng": 18.98782
}, {
    "date": "2019-06-29T13:04:08.469Z",
    "contactPerson": "Osvaldo Fisher",
    "description": "Et similique saepe eaque accusantium. Quibusdam quos blanditiis laboriosam beatae. Provident aut nesciunt animi ea sequi mollitia aut. Debitis officiis voluptatem eos atque. Neque quia repellendus quia eos eveniet. Qui aut autem voluptatem provident fugit.",
    "phone": "(123) 785-3366",
    "email": "Dortha.Bernier@gmail.com",
    "status": "W toku",
    "address": "Agnieszki 13, 40-110 Katowice",
    "geolat": 50.27904,
    "geolng": 19.00553
}, {
    "date": "2019-06-29T06:12:31.567Z",
    "contactPerson": "Earnestine Ernser",
    "description": "Tenetur ipsa eum et quisquam quam. Eum quam et qui.",
    "phone": "979.309.7452 x210",
    "email": "Darrion.Flatley@gmail.com",
    "status": "Do podjęcia",
    "address": "Kostki-Napierskiego 43, 40-664 Katowice",
    "geolat": 50.20611,
    "geolng": 18.97925
}, {
    "date": "2019-06-28T19:31:23.815Z",
    "contactPerson": "Delphine Ryan",
    "description": "Voluptate vitae autem. Enim beatae in ea nam. Ut sit rem illo. Sunt nulla et totam sapiente rerum natus sapiente fugiat vel. Molestias quam voluptate ut harum harum sed. Sit suscipit itaque sapiente et dolore eligendi.",
    "phone": "131.985.3383 x8533",
    "email": "Melvin.OConner@hotmail.com",
    "status": "Do podjęcia",
    "address": "1 Maja / Marcinkowskiego 131, 40-235 Katowice",
    "geolat": 50.2599,
    "geolng": 19.0591
}, {
    "date": "2019-06-28T16:11:44.363Z",
    "contactPerson": "Sigrid Nader",
    "description": "Dignissimos labore beatae. Et sit asperiores sit sunt dolorum ipsum cumque quasi quis. Nihil aspernatur aut excepturi error animi.",
    "phone": "(894) 278-9873 x7407",
    "email": "Alexane_Konopelski@hotmail.com",
    "status": "Zamknięta",
    "address": "Bytkowska 105, 40-145 Katowice",
    "geolat": 50.29127,
    "geolng": 19.00629
}, {
    "date": "2019-06-29T11:44:42.097Z",
    "contactPerson": "Hildegard Turcotte",
    "description": "Eum quidem reprehenderit ut debitis eos mollitia veritatis odio. Ut assumenda magnam laboriosam nesciunt eos autem repellat quo illum.",
    "phone": "565.481.5837",
    "email": "Mary_Sporer@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Panewnicka 141, 40-709 Katowice",
    "geolat": 50.23023,
    "geolng": 18.94956
}, {
    "date": "2019-06-28T17:39:04.527Z",
    "contactPerson": "Deja Cremin",
    "description": "Corrupti quibusdam et qui ex. Blanditiis numquam sed voluptas. Velit expedita nesciunt placeat maiores debitis architecto vitae doloribus quia. Quibusdam est quo delectus excepturi nesciunt amet voluptas est. Ut et tenetur est eos cupiditate sit dolor ipsam qui. Et quia aut.",
    "phone": "1-731-068-6456",
    "email": "Carmen_Rogahn@gmail.com",
    "status": "Do podjęcia",
    "address": "Bocheńskiego 69, 40-847 Katowice",
    "geolat": 50.26205,
    "geolng": 18.98563
}, {
    "date": "2019-06-29T08:28:26.845Z",
    "contactPerson": "Federico Grant",
    "description": "Qui quasi corporis omnis reiciendis. Molestias voluptate veritatis culpa hic et.",
    "phone": "257-837-4895",
    "email": "Margret_Thompson@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kurpiowska 1A, 40-215 Katowice",
    "geolat": 50.27034,
    "geolng": 19.04736
}, {
    "date": "2019-06-29T10:57:45.402Z",
    "contactPerson": "Winston Morissette",
    "description": "Adipisci mollitia dolores ullam ullam sint. Asperiores voluptatibus atque quia voluptatem ex et.",
    "phone": "(268) 699-1303",
    "email": "Lyla_Zboncak16@hotmail.com",
    "status": "Do podjęcia",
    "address": "Zadole 2, 40-719 Katowice",
    "geolat": 50.22024,
    "geolng": 18.97
}, {
    "date": "2019-06-29T07:16:04.563Z",
    "contactPerson": "Bobby Wunsch",
    "description": "Minima illo autem perspiciatis quia modi velit sint. Recusandae distinctio qui quo aut magnam ut.",
    "phone": "367-838-8432 x1051",
    "email": "Mazie34@hotmail.com",
    "status": "Zamknięta",
    "address": "Wrocławska 11, 40-216 Katowice",
    "geolat": 50.2671,
    "geolng": 19.04473
}, {
    "date": "2019-06-28T19:29:55.453Z",
    "contactPerson": "Margaret Donnelly",
    "description": "Exercitationem voluptatum ut recusandae accusantium eius. Corporis saepe et eligendi sequi cum dolor dolorum excepturi nihil. Impedit ea aut optio quae ipsa qui.",
    "phone": "(321) 240-9675 x7297",
    "email": "Andrew_Nitzsche@gmail.com",
    "status": "Do weryfikacji",
    "address": "Bracka 4, 40-858 Katowice",
    "geolat": 50.27121,
    "geolng": 18.99179
}, {
    "date": "2019-06-29T01:22:18.534Z",
    "contactPerson": "Kaden Sauer",
    "description": "Vitae est deserunt aut dolores minus. Recusandae enim magni eius accusantium et doloremque. Fuga asperiores aut. In consectetur ipsam in et possimus adipisci aut. Illo aut facere velit sint.",
    "phone": "058-702-7484",
    "email": "Harmon_Howe36@hotmail.com",
    "status": "W toku",
    "address": "al. Rożdzieńskiego 14, 40-201 Katowice",
    "geolat": 50.26218,
    "geolng": 19.03259
}, {
    "date": "2019-06-29T11:22:25.936Z",
    "contactPerson": "Anthony Cummings",
    "description": "Exercitationem unde illo. Facilis libero laborum quia. Tenetur consequatur error consequatur. Voluptatem molestiae repudiandae. Earum laboriosam earum ut ut consequuntur aliquam voluptatem iure accusantium. Ex in consequatur.",
    "phone": "(518) 966-4435 x6588",
    "email": "Wilmer6@yahoo.com",
    "status": "Zamknięta",
    "address": "Szopienicka 62, 40-432 Katowice",
    "geolat": 50.24848,
    "geolng": 19.0808
}, {
    "date": "2019-06-29T02:22:52.894Z",
    "contactPerson": "Owen Bednar",
    "description": "Aut id id culpa quia illum fugiat rerum quia excepturi. Maxime culpa expedita ut est sed molestiae et architecto adipisci. Voluptatibus qui eum enim nisi provident.",
    "phone": "1-756-370-2927 x225",
    "email": "Cruz.Reinger28@gmail.com",
    "status": "Do weryfikacji",
    "address": "Radockiego 150, 40-645 Katowice",
    "geolat": 50.20185,
    "geolng": 18.99036
}, {
    "date": "2019-06-29T11:35:02.756Z",
    "contactPerson": "George Kshlerin",
    "description": "Voluptate molestiae eveniet voluptas aliquid tempora. Voluptatem et blanditiis est ullam unde impedit rerum. Laboriosam adipisci qui corrupti et. Culpa debitis aut totam culpa possimus voluptas. Inventore placeat ut sed. Rerum excepturi odit sed quis ut ullam sequi mollitia ullam.",
    "phone": "(612) 695-4166 x652",
    "email": "Arely.Koch@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bankowa 14, 40-007 Katowice",
    "geolat": 50.26098,
    "geolng": 19.02895
}, {
    "date": "2019-06-29T09:55:42.801Z",
    "contactPerson": "Kaia Okuneva",
    "description": "Harum voluptatem quis nisi rem ea totam vero dolor animi. Deleniti necessitatibus harum illum doloremque aut vel. Aliquam iste molestias alias aut magni quidem. Atque maiores ut.",
    "phone": "(516) 815-9272",
    "email": "Alize.Daugherty@hotmail.com",
    "status": "Zamknięta",
    "address": "Mikołowska 58, 40-065 Katowice",
    "geolat": 50.25078,
    "geolng": 19.00463
}, {
    "date": "2019-06-29T00:27:29.144Z",
    "contactPerson": "Toy Schoen",
    "description": "Cumque esse voluptas dolor. Id odit pariatur quo odit. Omnis omnis sed. Magnam molestias quas. Omnis soluta illo qui odio commodi hic occaecati.",
    "phone": "727-388-6995",
    "email": "Yvette15@hotmail.com",
    "status": "Do podjęcia",
    "address": "Roździeńskiego 198, 40-001 Katowice",
    "geolat": 50.26881,
    "geolng": 19.0613
}, {
    "date": "2019-06-29T15:06:58.655Z",
    "contactPerson": "Erich Schaden",
    "description": "Ad at qui ut a quas vel omnis. Consectetur dolor omnis blanditiis suscipit. Corrupti qui reprehenderit sit et asperiores delectus cupiditate veritatis.",
    "phone": "1-653-566-9829",
    "email": "Damon_Auer97@hotmail.com",
    "status": "W toku",
    "address": "Paderewskiego 35, 40-282 Katowice",
    "geolat": 50.253,
    "geolng": 19.039
}, {
    "date": "2019-06-28T20:32:31.124Z",
    "contactPerson": "Candido Lebsack",
    "description": "Inventore doloremque distinctio inventore mollitia quo suscipit. Repellat voluptatem in et vel. Veritatis voluptatem deleniti unde ducimus et perferendis. Necessitatibus dignissimos dolores dolorem ad.",
    "phone": "(780) 562-8411",
    "email": "Zakary_Volkman@gmail.com",
    "status": "Do podjęcia",
    "address": "Szarych Szeregów 3, 40-001 Katowice",
    "geolat": 50.19391,
    "geolng": 18.98348
}, {
    "date": "2019-06-29T05:15:08.775Z",
    "contactPerson": "Alanis Cronin",
    "description": "Placeat rerum vero. Perferendis eligendi consequuntur aut debitis quas dolorum non sint nemo. Corrupti cum facere mollitia autem iure inventore quas inventore. Rem expedita est quo enim quis odio. Laudantium quia est omnis sit doloribus ut culpa.",
    "phone": "1-139-682-0342 x167",
    "email": "Cordia80@hotmail.com",
    "status": "Zamknięta",
    "address": "Armii Krajowej 3, 40-748 Katowice",
    "geolat": 50.21844,
    "geolng": 18.96918
}, {
    "date": "2019-06-29T02:59:13.165Z",
    "contactPerson": "Zelda Schiller",
    "description": "A possimus quas. Numquam eligendi impedit. Voluptatibus laudantium dicta omnis est et ut excepturi id.",
    "phone": "591.940.2722 x6071",
    "email": "Rozella.Zboncak88@hotmail.com",
    "status": "Do podjęcia",
    "address": "Żelazna 23, 40-851 Katowice",
    "geolat": 50.26368,
    "geolng": 19.00482
}, {
    "date": "2019-06-29T13:02:35.553Z",
    "contactPerson": "Karelle Kihn",
    "description": "Qui et voluptas qui. Exercitationem praesentium doloremque sint esse et. Tempore consequatur labore.",
    "phone": "(155) 164-2119",
    "email": "Bella.Spinka@yahoo.com",
    "status": "W toku",
    "address": "Obroki 52, 40-833 Katowice",
    "geolat": 50.26749,
    "geolng": 18.97272
}, {
    "date": "2019-06-29T02:55:55.925Z",
    "contactPerson": "Damian Waters",
    "description": "Atque odio odit. Rerum aperiam ad eaque numquam. Voluptatem ab ut ullam. Iusto ducimus nulla quia dicta blanditiis provident quam odit dicta.",
    "phone": "426.558.9783 x110",
    "email": "Ryley_Kertzmann@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Kijowska 42, 40-753 Katowice",
    "geolat": 50.23053,
    "geolng": 18.96151
}, {
    "date": "2019-06-29T15:34:03.912Z",
    "contactPerson": "America Schroeder",
    "description": "Molestiae fuga earum fugit aut velit consequatur saepe modi. Vitae ratione exercitationem nam impedit ullam dicta. Voluptate corrupti ad accusantium sapiente aperiam minima corporis nisi veritatis. Qui beatae temporibus et optio.",
    "phone": "263.268.0943",
    "email": "Autumn13@hotmail.com",
    "status": "Zamknięta",
    "address": "Uniczowska 57, 40-748 Katowice",
    "geolat": 50.17956,
    "geolng": 18.9635
}, {
    "date": "2019-06-28T17:34:02.866Z",
    "contactPerson": "Dillon Labadie",
    "description": "Omnis quibusdam officia omnis eum omnis modi et. Qui velit deserunt repellat aut iste aut itaque ut rerum. Impedit velit quo minima minima. Exercitationem facere eius et voluptates. Dolores pariatur quos.",
    "phone": "1-668-470-7562",
    "email": "Salvatore77@hotmail.com",
    "status": "Do podjęcia",
    "address": "Tysiąclecia 12, 40-872 Katowice",
    "geolat": 50.27674,
    "geolng": 18.97644
}, {
    "date": "2019-06-29T09:22:15.631Z",
    "contactPerson": "Bernadette Walker",
    "description": "Eligendi omnis neque. Repellendus voluptates et. Reprehenderit quam beatae accusantium sequi. Nulla autem asperiores. Sit cupiditate autem adipisci numquam quis tenetur corporis explicabo.",
    "phone": "(406) 509-9273 x53275",
    "email": "Elijah_Zemlak67@hotmail.com",
    "status": "W toku",
    "address": "Szewska 11, 40-649 Katowice",
    "geolat": 50.20789,
    "geolng": 18.98223
}, {
    "date": "2019-06-29T02:20:33.910Z",
    "contactPerson": "Brandyn Hilpert",
    "description": "Culpa laboriosam fuga iusto temporibus laudantium. Architecto qui et tenetur exercitationem accusantium sed. Ut quam harum quos maxime sapiente.",
    "phone": "(183) 264-8268 x28557",
    "email": "Marquis.Nolan77@hotmail.com",
    "status": "Zamknięta",
    "address": "al. Górnośląska 55, 40-511 Katowice",
    "geolat": 50.24521,
    "geolng": 19.0378
}, {
    "date": "2019-06-29T01:46:22.156Z",
    "contactPerson": "Deborah Champlin",
    "description": "Qui id tempora blanditiis. Quas veniam eveniet minima minima id quae. Accusantium aliquid porro.",
    "phone": "1-399-892-6393 x4915",
    "email": "Mikayla12@hotmail.com",
    "status": "Zamknięta",
    "address": "Leśnego Potoku 61, 40-406 Katowice",
    "geolat": 50.23806,
    "geolng": 19.09275
}, {
    "date": "2019-06-29T01:28:12.257Z",
    "contactPerson": "Elsa Haag",
    "description": "Ad aut et accusamus in earum qui aperiam officiis cum. Et et et odio ab accusantium aut omnis quis repudiandae.",
    "phone": "154-776-1243 x2285",
    "email": "Bill50@hotmail.com",
    "status": "Zamknięta",
    "address": "Korfantego 101, 40-160 Katowice",
    "geolat": 50.27531,
    "geolng": 19.02424
}, {
    "date": "2019-06-29T00:31:45.486Z",
    "contactPerson": "Gerda Spencer",
    "description": "Harum deserunt labore libero cupiditate ea sed maxime dolorem. Temporibus dicta earum eos non repellat et.",
    "phone": "296.866.2734",
    "email": "Brenden_Langosh@gmail.com",
    "status": "Do weryfikacji",
    "address": "Wiosny Ludów 46, 40-374 Katowice",
    "geolat": 50.26019,
    "geolng": 19.11001
}, {
    "date": "2019-06-28T16:41:33.962Z",
    "contactPerson": "Ward Denesik",
    "description": "Est molestiae iste tempore voluptates repellendus dolore. Similique quo iste pariatur distinctio vero et animi. Voluptatem eius exercitationem soluta placeat numquam molestias quidem. Ut rem blanditiis incidunt. Non cupiditate saepe tempora modi qui tempore.",
    "phone": "156.902.9775 x549",
    "email": "Zachary90@yahoo.com",
    "status": "Do podjęcia",
    "address": "Rolna 28, 40-567 Katowice",
    "geolat": 50.23149,
    "geolng": 18.98314
}, {
    "date": "2019-06-28T23:32:07.359Z",
    "contactPerson": "Ettie Bahringer",
    "description": "Perferendis id facere sint voluptates quo quis. Enim qui perspiciatis est porro ab minus.",
    "phone": "875-322-1735 x668",
    "email": "Alba_Balistreri36@hotmail.com",
    "status": "Zamknięta",
    "address": "Przemysłowa 3, 40-020 Katowice",
    "geolat": 50.25397,
    "geolng": 19.0324
}, {
    "date": "2019-06-29T16:09:38.758Z",
    "contactPerson": "Austen Wolf",
    "description": "Neque quia aut qui. Quos omnis qui impedit nam et sunt molestiae. Consequuntur illo non aut expedita tempore. Harum impedit et. Corrupti incidunt fuga praesentium et quis similique suscipit minima quidem.",
    "phone": "(316) 295-8603",
    "email": "Monique46@yahoo.com",
    "status": "Zamknięta",
    "address": "Jankego 15D, 40-615 Katowice",
    "geolat": 50.22007,
    "geolng": 18.99075
}, {
    "date": "2019-06-28T23:15:46.235Z",
    "contactPerson": "Kyle Ullrich",
    "description": "Voluptatem aliquam ipsum ratione laboriosam commodi consequatur. Sit ea ut facere dolores eveniet blanditiis quia laudantium vitae.",
    "phone": "526-779-4795 x6752",
    "email": "Misael32@hotmail.com",
    "status": "Do podjęcia",
    "address": "1 Maja 31, 40-001 Katowice",
    "geolat": 50.25751,
    "geolng": 19.03971
}, {
    "date": "2019-06-29T10:34:09.823Z",
    "contactPerson": "Lupe Christiansen",
    "description": "Quasi et repellendus. Ipsam earum sapiente vel esse similique dolores nemo est qui. Ratione quibusdam officia dicta modi qui ipsam quod molestiae ea. Repellat incidunt nulla vel autem qui.",
    "phone": "872-317-4873 x3287",
    "email": "Charley26@yahoo.com",
    "status": "Do podjęcia",
    "address": "Chorzowska 50, 40-001 Katowice",
    "geolat": 50.26507,
    "geolng": 19.01638
}, {
    "date": "2019-06-29T12:59:29.500Z",
    "contactPerson": "Gene Dooley",
    "description": "A facilis odit ut. Quia ipsam praesentium qui. Fugiat dolores dolorum ea. Nisi omnis quos natus harum quibusdam.",
    "phone": "1-022-065-2380",
    "email": "Russel.Armstrong92@hotmail.com",
    "status": "Do podjęcia",
    "address": "Słoneczna 25, 40-135 Katowice",
    "geolat": 50.27633,
    "geolng": 19.01743
}, {
    "date": "2019-06-29T08:30:24.011Z",
    "contactPerson": "Deangelo Hirthe",
    "description": "Ut sapiente quisquam laboriosam eligendi ea architecto illum pariatur. Et quaerat quaerat aspernatur sed veritatis quidem et rem aspernatur. Enim quas nihil ut.",
    "phone": "818.438.0547 x57482",
    "email": "Ari.Gerhold@hotmail.com",
    "status": "Zamknięta",
    "address": "Kolista 5, 40-486 Katowice",
    "geolat": 50.22632,
    "geolng": 19.06014
}, {
    "date": "2019-06-29T04:17:28.282Z",
    "contactPerson": "Micaela Bartoletti",
    "description": "Asperiores quia autem dolorem voluptatum ut explicabo. Assumenda molestiae consequatur et dignissimos corrupti sit. Qui cupiditate facere quam dolor quas nemo iste.",
    "phone": "451-475-4319 x546",
    "email": "Edna58@hotmail.com",
    "status": "Zamknięta",
    "address": "Goetla 8, 40-749 Katowice",
    "geolat": 50.20281,
    "geolng": 19.04365
}, {
    "date": "2019-06-28T16:25:53.317Z",
    "contactPerson": "Maryam Kunde",
    "description": "Iure quia quis dignissimos. Aliquam corporis soluta tenetur voluptatibus in nesciunt libero. Quia nostrum molestiae. Suscipit est cumque totam.",
    "phone": "704.758.3887 x78762",
    "email": "Rory.Cassin34@gmail.com",
    "status": "Do podjęcia",
    "address": "Francuska 105, 40-200 Katowice",
    "geolat": 50.24395,
    "geolng": 19.02342
}, {
    "date": "2019-06-28T20:15:35.657Z",
    "contactPerson": "Opal Krajcik",
    "description": "Voluptatum est dignissimos natus quas nobis est porro. Sit quae nisi.",
    "phone": "(112) 090-8141 x903",
    "email": "Monserrate.White@yahoo.com",
    "status": "Do podjęcia",
    "address": "al. Roździeńskiego 191, 40-310 Katowice",
    "geolat": 50.27634,
    "geolng": 19.07275
}, {
    "date": "2019-06-29T15:40:53.631Z",
    "contactPerson": "Sofia Waelchi",
    "description": "Est impedit deserunt distinctio deleniti. Est eum id cupiditate. Suscipit excepturi nihil laudantium fuga cupiditate minus magnam occaecati. Est quidem vel consequuntur qui veritatis non et ea.",
    "phone": "(142) 869-2182 x12897",
    "email": "Jewell98@hotmail.com",
    "status": "Zamknięta",
    "address": "Grota-Roweckiego 69B, 40-748 Katowice",
    "geolat": 50.18208,
    "geolng": 18.93991
}, {
    "date": "2019-06-29T11:28:59.591Z",
    "contactPerson": "Chanelle Leffler",
    "description": "Reiciendis sit omnis debitis perferendis quos nihil. Itaque blanditiis adipisci. Illum optio ullam sed perspiciatis autem totam totam. Vel eos reiciendis omnis dolores nesciunt. Velit non dolorem sit et nobis veritatis ea et.",
    "phone": "413.089.5710 x4974",
    "email": "Brandt51@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Michejdy 17, 40-816 Katowice",
    "geolat": 50.26012,
    "geolng": 18.97917
}, {
    "date": "2019-06-29T04:43:24.005Z",
    "contactPerson": "Presley Bernhard",
    "description": "Ut rem velit fugit ut nostrum suscipit quis. Sapiente eos consequatur qui error. Et praesentium eum delectus alias blanditiis nihil ut quis numquam.",
    "phone": "1-360-764-9424 x6718",
    "email": "Wellington51@gmail.com",
    "status": "W toku",
    "address": "Gliwicka 224, 40-001 Katowice",
    "geolat": 50.27047,
    "geolng": 18.97236
}, {
    "date": "2019-06-28T18:00:52.714Z",
    "contactPerson": "Isom Ullrich",
    "description": "Ut facilis omnis consequuntur voluptatem. Voluptas fugit excepturi beatae iusto. Quas omnis non quo beatae et eveniet. Explicabo repellat numquam maiores omnis cum quia et et cupiditate. Molestias eum dicta assumenda qui in sed natus. Velit iusto adipisci nobis nobis accusantium vitae.",
    "phone": "495-373-7992 x00639",
    "email": "Angelita.Koch71@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Piotrowicka 98, 40-724 Katowice",
    "geolat": 50.23117,
    "geolng": 18.97311
}, {
    "date": "2019-06-28T23:53:18.928Z",
    "contactPerson": "Hal Hand",
    "description": "Iusto quia et tempora commodi molestiae fugiat aspernatur quis. Sit enim molestiae odit maiores.",
    "phone": "188-829-1586 x4499",
    "email": "Chauncey_Rice44@gmail.com",
    "status": "W toku",
    "address": "Miła 23, 40-646 Katowice",
    "geolat": 50.22617,
    "geolng": 19.0723
}, {
    "date": "2019-06-29T04:00:27.446Z",
    "contactPerson": "Lori Grant",
    "description": "Beatae dolorem nulla quibusdam. Enim enim porro quisquam eligendi. Totam temporibus aut nesciunt assumenda numquam qui est minus voluptatem. Itaque odit aut nihil sed fugit reiciendis rerum odit blanditiis.",
    "phone": "796.563.4172 x4060",
    "email": "Clement_Lindgren84@gmail.com",
    "status": "W toku",
    "address": "Woźniczki 15A, 40-959 Katowice",
    "geolat": 50.23154,
    "geolng": 18.99476
}, {
    "date": "2019-06-28T23:37:17.089Z",
    "contactPerson": "Ebba Funk",
    "description": "Aut tempore dolorem quia. Nostrum a molestiae voluptas minima. Pariatur quia occaecati ea laborum porro. Nihil natus quo ut facilis beatae. Et quia eum facilis.",
    "phone": "684-461-9664",
    "email": "Demarco70@hotmail.com",
    "status": "W toku",
    "address": "Wiosny Ludów 11, 40-374 Katowice",
    "geolat": 50.26264,
    "geolng": 19.09711
}, {
    "date": "2019-06-28T21:19:18.826Z",
    "contactPerson": "Deborah Weissnat",
    "description": "Praesentium neque ratione asperiores nemo excepturi ut saepe nihil eligendi. Explicabo voluptas consequatur aspernatur omnis tempore alias. Eum porro facilis. Nemo vero officia consequatur corporis nostrum facere sunt alias. Ut sequi ullam omnis ut sunt adipisci qui quas. Porro consectetur perferendis.",
    "phone": "1-207-276-8019 x2764",
    "email": "Lucy_Thiel@gmail.com",
    "status": "Do podjęcia",
    "address": "Ossowskiego 1, 40-002 Katowice",
    "geolat": 50.26047,
    "geolng": 18.97835
}, {
    "date": "2019-06-29T01:19:34.561Z",
    "contactPerson": "Tressa Sanford",
    "description": "Ullam eum recusandae iure ea quo totam rerum eligendi eius. Et modi qui perferendis maxime explicabo blanditiis. Nobis voluptatem temporibus sed. Ex vitae voluptatem laboriosam necessitatibus. Ex necessitatibus libero quia totam. Velit animi ut quidem.",
    "phone": "1-160-410-9012 x887",
    "email": "Gina26@yahoo.com",
    "status": "W toku",
    "address": "Kościuszki 330, 40-608 Katowice",
    "geolat": 50.21494,
    "geolng": 18.97942
}, {
    "date": "2019-06-28T22:31:15.492Z",
    "contactPerson": "Ocie Carroll",
    "description": "Voluptas ipsam tempore unde dolorem ducimus. Illum id perferendis enim. Et enim nesciunt qui.",
    "phone": "467.527.6537",
    "email": "Aurore.Aufderhar@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Koników Polnych 3, 40-644 Katowice",
    "geolat": 50.20746,
    "geolng": 18.98981
}, {
    "date": "2019-06-29T08:35:02.056Z",
    "contactPerson": "Conor Padberg",
    "description": "Eveniet omnis deserunt unde et autem non autem. Architecto a quaerat omnis ipsa. Vel amet consequuntur accusantium labore magni eum eos.",
    "phone": "(676) 234-4654 x246",
    "email": "Meagan.Kuvalis84@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Boya-Żeleńskiego 77, 40-750 Katowice",
    "geolat": 50.1839,
    "geolng": 18.99793
}, {
    "date": "2019-06-29T12:44:44.682Z",
    "contactPerson": "Kenyon Raynor",
    "description": "Odio delectus rerum dignissimos dolorem distinctio at autem aspernatur. Maiores eos rerum et delectus. Et doloribus minima omnis. Sapiente sit aspernatur facilis. Porro sint asperiores assumenda architecto.",
    "phone": "1-708-949-2745",
    "email": "Ricky_Schaefer78@yahoo.com",
    "status": "W toku",
    "address": "Os. Kombatantów 20, 31-612 Kraków",
    "geolat": 50.08913,
    "geolng": 20.00399
}, {
    "date": "2019-06-29T09:21:06.753Z",
    "contactPerson": "Linda Bradtke",
    "description": "Consequatur at rerum modi nihil non sit rerum sequi ipsum. Quas dolor molestiae impedit molestiae asperiores eligendi omnis placeat. Nemo voluptas ut dolores quae architecto voluptates ipsa sed.",
    "phone": "004.593.2571",
    "email": "Retha_Yost@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Góra Libertowska 2, 30-444 Kraków",
    "geolat": 49.98121,
    "geolng": 19.91075
}, {
    "date": "2019-06-29T02:30:27.858Z",
    "contactPerson": "Wayne Kihn",
    "description": "Blanditiis sapiente officiis optio natus officia. Beatae ex sint fugiat sed doloremque sequi distinctio labore. Aut et est. Modi vitae sit eum cum quidem. At tenetur cum error explicabo omnis temporibus. Quia qui perferendis est distinctio dolores unde deserunt ratione et.",
    "phone": "1-477-855-2647 x901",
    "email": "Hester44@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Al. Pokoju 91, 31-564 Kraków",
    "geolat": 50.06896,
    "geolng": 20.0134
}, {
    "date": "2019-06-28T21:20:20.065Z",
    "contactPerson": "Elissa Beahan",
    "description": "Ex voluptatem temporibus. Quaerat porro et.",
    "phone": "381-356-6837 x92602",
    "email": "Stewart.Mayer29@hotmail.com",
    "status": "Do weryfikacji",
    "address": "al. 29 Listopada 39B, 31-425 Kraków",
    "geolat": 50.07963,
    "geolng": 19.95025
}, {
    "date": "2019-06-29T13:40:49.441Z",
    "contactPerson": "Deron Wehner",
    "description": "Illum quia adipisci distinctio repudiandae est maxime animi modi. Vel explicabo quod non ut sunt ullam fugiat ea repellendus. Quia omnis dolores enim aut harum rerum rem et. Deleniti nesciunt velit quis et ut dignissimos. Quam provident assumenda. Ex architecto quod et.",
    "phone": "(032) 647-1434",
    "email": "Allan.Senger51@gmail.com",
    "status": "W toku",
    "address": "Przemysłowa 12, 30-701 Kraków",
    "geolat": 50.04856,
    "geolng": 19.96014
}, {
    "date": "2019-06-28T21:45:42.172Z",
    "contactPerson": "Ismael Blick",
    "description": "Occaecati libero autem odio aliquam nemo assumenda. Sit excepturi et non. Aperiam consequatur reiciendis quia.",
    "phone": "505-798-6721",
    "email": "Verdie.Parisian@yahoo.com",
    "status": "Do podjęcia",
    "address": "Ćwiklińskiej 12, 30-863 Kraków",
    "geolat": 50.0155,
    "geolng": 20.02096
}, {
    "date": "2019-06-28T17:12:08.330Z",
    "contactPerson": "Jasper Jast",
    "description": "Rem ut velit. Nisi libero voluptatem pariatur qui eum ullam repellendus.",
    "phone": "1-134-385-8337 x7585",
    "email": "Precious.Dach@hotmail.com",
    "status": "Do podjęcia",
    "address": "Wadowicka 4, 30-415 Kraków",
    "geolat": 50.03441,
    "geolng": 19.93996
}, {
    "date": "2019-06-29T08:25:21.006Z",
    "contactPerson": "Kaylah Hilll",
    "description": "Enim et fuga totam qui quisquam dolorum aperiam fugiat quaerat. Est doloremque repudiandae et expedita repudiandae quidem laudantium. Tenetur et qui deleniti vel. Ducimus quae tempore aperiam deleniti molestias qui.",
    "phone": "1-508-348-9859 x71336",
    "email": "Stefan94@hotmail.com",
    "status": "Zamknięta",
    "address": "Josepha Conrada 81, 31-157 Kraków",
    "geolat": 50.08649,
    "geolng": 19.89384
}, {
    "date": "2019-06-28T21:32:36.131Z",
    "contactPerson": "Hazel Crona",
    "description": "Atque cupiditate quia qui labore ducimus similique tenetur numquam. Voluptas dignissimos natus consequuntur veniam itaque voluptatem asperiores molestiae a. Quo aut aut perferendis et ut reiciendis necessitatibus natus.",
    "phone": "654-986-5179 x58110",
    "email": "Sterling_Kassulke@yahoo.com",
    "status": "Zamknięta",
    "address": "Bieżanowska 276, 30-856 Kraków",
    "geolat": 50.01829,
    "geolng": 20.03496
}, {
    "date": "2019-06-29T13:20:40.053Z",
    "contactPerson": "Arnaldo Ritchie",
    "description": "Non inventore impedit sit praesentium illum veniam rerum et error. Ipsa est molestias aut voluptatum nobis est ut. Eaque vel ea necessitatibus. Animi autem ea consequatur.",
    "phone": "327.147.3122",
    "email": "Jayce.Tremblay@yahoo.com",
    "status": "W toku",
    "address": "Josepha Conrada 33, 31-357 Kraków",
    "geolat": 50.08896,
    "geolng": 19.90234
}, {
    "date": "2019-06-28T18:36:07.349Z",
    "contactPerson": "Vida Cremin",
    "description": "Quis veniam quidem cum vero quasi eos. Iure sit soluta autem perferendis quia non. Qui ea ipsam ratione totam quis deserunt est. Earum dignissimos similique sit blanditiis laudantium laudantium. Esse deserunt necessitatibus quia quisquam aspernatur quae veritatis omnis incidunt. Id omnis optio.",
    "phone": "(780) 616-7239 x39562",
    "email": "Laurine.Emard@yahoo.com",
    "status": "Zamknięta",
    "address": "al. Jana Pawła II 200, 31-982 Kraków",
    "geolat": 50.07181,
    "geolng": 20.0285
}, {
    "date": "2019-06-29T11:00:55.286Z",
    "contactPerson": "Ulises Waelchi",
    "description": "Officia occaecati eaque. Officia porro at ipsum quam excepturi qui. Voluptate inventore repellat ex. Dolorem ducimus assumenda at dignissimos rerum sit et quam fugiat.",
    "phone": "1-564-946-0674 x8147",
    "email": "Cristina_Fisher70@gmail.com",
    "status": "Do podjęcia",
    "address": "3 Maja 5, 30-063 Kraków",
    "geolat": 50.06037,
    "geolng": 19.92142
}, {
    "date": "2019-06-29T14:51:16.991Z",
    "contactPerson": "Kris Nicolas",
    "description": "Recusandae quibusdam ex. Neque ex cum molestiae. Rerum nisi ratione voluptatem culpa reprehenderit animi.",
    "phone": "1-671-858-4000",
    "email": "Marcella43@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Kapelanka 30, 30-347 Kraków",
    "geolat": 50.03799,
    "geolng": 19.92532
}, {
    "date": "2019-06-29T08:44:11.898Z",
    "contactPerson": "Julius Schaden",
    "description": "Assumenda inventore sequi. Temporibus nemo impedit. Labore architecto animi aperiam placeat quod quia ad recusandae ea. Corrupti in voluptates voluptatibus dolores ut suscipit repellat.",
    "phone": "(978) 452-5348",
    "email": "Sandra.Carroll@hotmail.com",
    "status": "Zamknięta",
    "address": "Rynek Fałęcki 1, 30-428 Kraków",
    "geolat": 50.01824,
    "geolng": 19.92312
}, {
    "date": "2019-06-29T13:46:01.213Z",
    "contactPerson": "Abdul Heathcote",
    "description": "Recusandae incidunt dolores. Rerum sed eum laboriosam amet. Dolorum quas aliquam asperiores. Qui ipsam fugiat dolor ab molestiae.",
    "phone": "216-303-0099",
    "email": "Jovanny_White69@yahoo.com",
    "status": "Do podjęcia",
    "address": "Dywizjonu 303 21A, 31-872 Kraków",
    "geolat": 50.0871,
    "geolng": 20.005
}, {
    "date": "2019-06-29T03:30:18.285Z",
    "contactPerson": "Devonte Dicki",
    "description": "Corporis dolores vitae architecto nihil earum ut. Qui aut illo amet provident quidem.",
    "phone": "505-336-7747",
    "email": "Brooklyn_Reichert59@yahoo.com",
    "status": "W toku",
    "address": "Kapelanka 54, 30-347 Kraków",
    "geolat": 50.03307,
    "geolng": 19.92307
}, {
    "date": "2019-06-29T05:28:38.865Z",
    "contactPerson": "Cali Douglas",
    "description": "Quasi necessitatibus impedit placeat quo et est cupiditate. Earum unde maiores doloribus beatae odit. Delectus distinctio omnis quos officia quia in qui dolorem ut.",
    "phone": "(730) 640-5487",
    "email": "Alysa8@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Srebrnych Orłów 1, 31-612 Kraków",
    "geolat": 50.0944,
    "geolng": 20.01077
}, {
    "date": "2019-06-28T17:14:03.058Z",
    "contactPerson": "Callie Parker",
    "description": "Minima autem dolor non quidem voluptatem in asperiores. Consequatur quis et maiores laboriosam quas ducimus vel voluptatibus. Aut quis vel ea soluta fugit eaque. Explicabo quasi modi temporibus sapiente ipsum labore voluptas. Et aut temporibus quia. Est eum fugiat quasi aspernatur corporis sint sunt pariatur.",
    "phone": "008.393.7984 x300",
    "email": "Trystan_Ratke@hotmail.com",
    "status": "W toku",
    "address": "Zakopiańska 58, 30-418 Kraków",
    "geolat": 50.01814,
    "geolng": 19.93193
}, {
    "date": "2019-06-29T10:10:22.734Z",
    "contactPerson": "Dena Bechtelar",
    "description": "Tenetur et ut numquam est nulla eligendi rerum dolore. Rerum labore enim adipisci consequatur. Et voluptatem quo. Totam soluta ducimus ratione.",
    "phone": "590-054-1139",
    "email": "Valentine79@hotmail.com",
    "status": "Do podjęcia",
    "address": "Stojałowskiego 1, 30-611 Kraków",
    "geolat": 50.00628,
    "geolng": 19.94567
}, {
    "date": "2019-06-29T12:36:25.958Z",
    "contactPerson": "Darren Anderson",
    "description": "Commodi id similique ad placeat consequatur. Est facere doloremque voluptatem enim nostrum. Ea molestias temporibus eum mollitia qui aut est quidem corrupti.",
    "phone": "1-463-534-2558 x5708",
    "email": "Aurelia_Kunze99@hotmail.com",
    "status": "Zamknięta",
    "address": "Rżącka 21B, 30-687 Kraków",
    "geolat": 50.00408,
    "geolng": 19.98869
}, {
    "date": "2019-06-29T00:49:30.754Z",
    "contactPerson": "Zane Wyman",
    "description": "Necessitatibus et explicabo. Nihil debitis quam dolorem sequi necessitatibus.",
    "phone": "(137) 269-4438",
    "email": "Curt79@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Myślenicka 133, 30-698 Kraków",
    "geolat": 49.99403,
    "geolng": 19.94668
}, {
    "date": "2019-06-29T15:14:34.768Z",
    "contactPerson": "Seth Jacobs",
    "description": "Porro non aut nihil et eum reiciendis est hic non. Itaque ipsam quasi. Ipsa et doloremque. Dolores quos illo nihil in.",
    "phone": "200.394.3461 x402",
    "email": "Rashad10@yahoo.com",
    "status": "Zamknięta",
    "address": "Podgórska 34, 31-536 Kraków",
    "geolat": 50.05468,
    "geolng": 19.95576
}, {
    "date": "2019-06-28T18:42:12.081Z",
    "contactPerson": "Keaton Nikolaus",
    "description": "Sed labore harum. Voluptatem mollitia et officia soluta corporis eos. Aut dignissimos illo neque. Atque harum eum commodi eligendi consequatur in sed vel. Voluptatem qui tenetur quidem qui impedit et deserunt aliquam quis.",
    "phone": "028-782-8002 x7118",
    "email": "Allison92@hotmail.com",
    "status": "W toku",
    "address": "os. Niepodległości 19, 31-862 Kraków",
    "geolat": 50.08007,
    "geolng": 20.02104
}, {
    "date": "2019-06-28T17:05:54.200Z",
    "contactPerson": "Raymundo Flatley",
    "description": "Voluptatem maxime odio et voluptatum commodi est vero similique. Qui temporibus itaque. Voluptas dolor pariatur explicabo et dolorum. Quo dolorem aspernatur praesentium id vel mollitia consequatur facere. Perferendis non asperiores veniam perspiciatis commodi dolore omnis.",
    "phone": "(476) 168-7181 x6962",
    "email": "Elfrieda.Heaney@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Marii Konopnickiej 78, 30-302 Kraków",
    "geolat": 50.04011,
    "geolng": 19.93687
}, {
    "date": "2019-06-29T13:44:19.763Z",
    "contactPerson": "Isabell Runolfsdottir",
    "description": "Dolorem deleniti ut voluptatem excepturi cupiditate. Commodi numquam non facere dolor omnis. Doloribus omnis totam nam ab delectus fugit quae voluptatibus ut. Praesentium itaque et delectus aliquid aut.",
    "phone": "842-040-2550 x278",
    "email": "Frida.Quigley78@yahoo.com",
    "status": "Zamknięta",
    "address": "Nowohucka 52, 31-580 Kraków",
    "geolat": 50.05822,
    "geolng": 19.99973
}, {
    "date": "2019-06-28T22:28:37.295Z",
    "contactPerson": "Glen Franecki",
    "description": "Voluptas impedit est ab maiores deleniti. Id tempora voluptatum eum eligendi expedita. Vitae non laborum consectetur eos et iusto quam. Officia tempora consequatur explicabo modi sed repellendus voluptatem. Accusamus blanditiis velit a eaque mollitia nam qui commodi. Esse eius voluptas quia minima ratione architecto.",
    "phone": "1-721-983-2507",
    "email": "Alexis.Kub@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Wielicka 30, 30-552 Kraków",
    "geolat": 50.03875,
    "geolng": 19.96582
}, {
    "date": "2019-06-29T11:20:12.922Z",
    "contactPerson": "Precious Effertz",
    "description": "Sed at magni. Autem sit omnis molestiae.",
    "phone": "516.356.8382",
    "email": "Ted_OKon@gmail.com",
    "status": "Do podjęcia",
    "address": "Lipska 2, 30-721 Kraków",
    "geolat": 50.04011,
    "geolng": 19.98446
}, {
    "date": "2019-06-29T06:56:16.869Z",
    "contactPerson": "Trever Pouros",
    "description": "Sit sint tenetur inventore commodi non et. Dolor non et nisi.",
    "phone": "336-301-8245 x5684",
    "email": "Alda_Hickle2@hotmail.com",
    "status": "W toku",
    "address": "Kamienna 18, 31-403 Kraków",
    "geolat": 50.07738,
    "geolng": 19.9479
}, {
    "date": "2019-06-29T03:11:52.605Z",
    "contactPerson": "Clifford Collins",
    "description": "Et hic modi et sit vitae quidem magnam aut. Perferendis molestiae sed illum rem.",
    "phone": "1-447-078-3177 x8392",
    "email": "Aniyah.Ortiz0@hotmail.com",
    "status": "Do podjęcia",
    "address": "Bunscha 18, 30-392 Kraków",
    "geolat": 50.01518,
    "geolng": 19.88493
}, {
    "date": "2019-06-29T09:53:31.575Z",
    "contactPerson": "Keyon Hagenes",
    "description": "Velit rerum architecto. Fuga molestiae atque eum maxime facere. Modi autem est. Voluptatem vitae eum.",
    "phone": "917-723-4625",
    "email": "Charity23@hotmail.com",
    "status": "Do podjęcia",
    "address": "Armii Krajowej 10, 30-150 Kraków",
    "geolat": 50.071,
    "geolng": 19.9001
}, {
    "date": "2019-06-29T10:38:04.224Z",
    "contactPerson": "Judy VonRueden",
    "description": "Ut molestiae sunt voluptas. Blanditiis quos quae aliquid quo. Consequatur est impedit.",
    "phone": "750-421-1546",
    "email": "Abbigail.Reinger@yahoo.com",
    "status": "Zamknięta",
    "address": "Kielecka 2, 31-526 Kraków",
    "geolat": 50.06647,
    "geolng": 19.9625
}, {
    "date": "2019-06-29T13:08:30.643Z",
    "contactPerson": "Talon Schmidt",
    "description": "Est non velit dolorum expedita doloremque aut. Iusto recusandae ut autem. Qui rerum rerum eos vel placeat et in. Ullam ex et sed rerum cum omnis qui et.",
    "phone": "744.844.4674 x468",
    "email": "Clare_Lemke@yahoo.com",
    "status": "Zamknięta",
    "address": "Korzeniowskiego Józefa 36, 30-214 Kraków",
    "geolat": 50.06188,
    "geolng": 19.88901
}, {
    "date": "2019-06-29T00:24:28.833Z",
    "contactPerson": "Giovanni Johns",
    "description": "Ratione eos nemo nihil dolorem. Non quia enim ut distinctio vero ut sed ipsa nemo. Exercitationem perspiciatis commodi. Sit aut omnis vel. Id voluptate doloremque ab sapiente ut. Dolor corrupti aut et dolores et velit.",
    "phone": "(361) 320-1348",
    "email": "Velma.Bahringer@gmail.com",
    "status": "Do weryfikacji",
    "address": "Mogilska 81, 31-545 Kraków",
    "geolat": 50.0664,
    "geolng": 19.9722
}, {
    "date": "2019-06-29T04:34:20.237Z",
    "contactPerson": "Kellie Romaguera",
    "description": "Corporis eos enim vitae architecto ut sit eius. Cupiditate sed quae quo qui doloribus quia harum. Molestias modi vel qui recusandae nobis. Aliquam eos aut earum aut. Velit quas laboriosam quaerat sed quia ad quos nemo autem.",
    "phone": "922-767-3790",
    "email": "Domenic.Rohan29@hotmail.com",
    "status": "Zamknięta",
    "address": "Wybickiego 10, 31-261 Kraków",
    "geolat": 50.08394,
    "geolng": 19.92746
}, {
    "date": "2019-06-29T12:02:21.174Z",
    "contactPerson": "Willis Konopelski",
    "description": "Quaerat minima qui sit. Odit voluptatum eveniet necessitatibus nihil. Qui autem omnis nesciunt libero impedit.",
    "phone": "125-817-9180 x56368",
    "email": "Reggie91@yahoo.com",
    "status": "Zamknięta",
    "address": "Strzelców 4, 31-422 Kraków",
    "geolat": 50.09008,
    "geolng": 19.9744
}, {
    "date": "2019-06-28T22:56:13.612Z",
    "contactPerson": "Miller Hills",
    "description": "Magni dolores corrupti voluptas sint eius. In dolores eius explicabo impedit. Omnis porro minus cum repudiandae.",
    "phone": "(884) 210-1082 x01627",
    "email": "Grayce.Hagenes@hotmail.com",
    "status": "Zamknięta",
    "address": "Lublańska 38, 31-476 Kraków",
    "geolat": 50.08659,
    "geolng": 19.97447
}, {
    "date": "2019-06-28T21:55:29.406Z",
    "contactPerson": "Joshuah D'Amore",
    "description": "Ut et qui. Atque aut sunt repudiandae voluptas ab.",
    "phone": "(538) 294-4909 x7731",
    "email": "Yvette.OReilly23@hotmail.com",
    "status": "Zamknięta",
    "address": "os. Złotego Wieku 14, 31-616 Kraków",
    "geolat": 50.09684,
    "geolng": 20.00158
}, {
    "date": "2019-06-29T15:31:37.281Z",
    "contactPerson": "Estella King",
    "description": "Autem officiis impedit labore vel nulla. Fuga inventore dolorem ut quia omnis nihil tenetur consequatur tempore.",
    "phone": "(705) 350-4970",
    "email": "Neal11@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Bora Komorowskiego 4, 31-876 Kraków",
    "geolat": 50.08468,
    "geolng": 19.9741
}, {
    "date": "2019-06-29T10:47:36.682Z",
    "contactPerson": "Dasia Hahn",
    "description": "Facere distinctio vel nulla consequuntur suscipit excepturi. Dolores mollitia blanditiis dolor saepe odio est. Temporibus et qui enim qui esse sunt itaque et. Incidunt ad impedit. Illum ducimus et qui.",
    "phone": "859-620-9774 x3477",
    "email": "Raul.Mitchell@gmail.com",
    "status": "Do podjęcia",
    "address": "Wielicka 183, 30-663 Kraków",
    "geolat": 50.02184,
    "geolng": 19.98281
}, {
    "date": "2019-06-28T21:45:32.863Z",
    "contactPerson": "Alexys Schumm",
    "description": "Accusantium mollitia in consequatur ducimus voluptatem voluptas sed praesentium. Non fuga maxime sit praesentium blanditiis exercitationem. Ducimus repellendus laborum veniam quisquam recusandae quisquam suscipit consequatur consectetur. Iusto sed excepturi ea sequi dicta sed molestiae.",
    "phone": "343.875.3564 x6305",
    "email": "Andre.Hayes@gmail.com",
    "status": "Zamknięta",
    "address": "Kamieńskiego 57, 30-644 Kraków",
    "geolat": 50.02776,
    "geolng": 19.96156
}, {
    "date": "2019-06-29T01:53:29.837Z",
    "contactPerson": "Alba Koelpin",
    "description": "Nulla numquam perspiciatis earum. Cupiditate repellendus mollitia quidem minima.",
    "phone": "1-160-043-6210 x92888",
    "email": "Johnathan.Swaniawski@gmail.com",
    "status": "Do weryfikacji",
    "address": "Jerzmanowskiego 37, 30-836 Kraków",
    "geolat": 50.0111,
    "geolng": 20.00954
}, {
    "date": "2019-06-28T22:41:23.773Z",
    "contactPerson": "Alan Roberts",
    "description": "Veniam veritatis suscipit officia ad voluptas earum quia et. Mollitia repellat sit occaecati quo impedit alias. Reiciendis illo aut id.",
    "phone": "(789) 731-2132",
    "email": "Johathan46@gmail.com",
    "status": "Zamknięta",
    "address": "Ściegiennego 67A, 30-809 Kraków",
    "geolat": 50.01723,
    "geolng": 19.99924
}, {
    "date": "2019-06-29T01:57:39.497Z",
    "contactPerson": "Emilie Keebler",
    "description": "Voluptatem provident aut. Voluptatum nostrum perferendis enim iusto. Et architecto sit aut officia. Voluptas et aut dolorem explicabo. Libero dolor consequatur. Iste non aspernatur.",
    "phone": "1-819-453-2468 x4113",
    "email": "Makayla74@hotmail.com",
    "status": "Do podjęcia",
    "address": "Budryka 7, 30-072 Kraków",
    "geolat": 50.06869,
    "geolng": 19.90681
}, {
    "date": "2019-06-29T02:23:44.580Z",
    "contactPerson": "Yesenia Kuhic",
    "description": "Dolor dolorem ea in. Enim quibusdam recusandae corporis. Nostrum repellendus qui est assumenda molestiae. Suscipit repellendus nobis dicta sit voluptatibus repellendus adipisci mollitia aut. Sit et est rem. Autem atque libero hic consequatur.",
    "phone": "999-474-0349",
    "email": "Dimitri87@gmail.com",
    "status": "Zamknięta",
    "address": "Ćwiklińskiej 14, 30-863 Kraków",
    "geolat": 50.01501,
    "geolng": 20.022
}, {
    "date": "2019-06-29T03:36:35.426Z",
    "contactPerson": "Zackery Armstrong",
    "description": "Quis soluta est nesciunt. Et eos ipsa velit dolore sit quia rem quo. Rerum ut molestiae nostrum eius. Omnis officia occaecati sunt culpa velit voluptatem et sequi quisquam. Provident vitae tenetur nesciunt.",
    "phone": "1-020-175-7057",
    "email": "Alvina.Barton@gmail.com",
    "status": "Do podjęcia",
    "address": "Powstańców Wielkopolskich 13, 30-707 Kraków",
    "geolat": 50.04427,
    "geolng": 19.96747
}, {
    "date": "2019-06-28T18:04:41.973Z",
    "contactPerson": "Silas Kshlerin",
    "description": "Qui soluta reprehenderit vel iusto qui omnis deleniti eum debitis. Doloribus dolorem sit nam temporibus laudantium harum rerum quia nesciunt. Laborum inventore aperiam neque sed inventore deserunt repellendus. Atque est veniam corporis delectus. Et autem ipsam amet beatae rem.",
    "phone": "1-382-587-5193",
    "email": "Wilma_Jenkins@yahoo.com",
    "status": "W toku",
    "address": "Kobierzyńska 144, 30-382 Kraków",
    "geolat": 50.01892,
    "geolng": 19.90678
}, {
    "date": "2019-06-29T08:47:13.979Z",
    "contactPerson": "Octavia Langworth",
    "description": "Aut et omnis nemo aut vel pariatur quo et odio. Vel impedit voluptate et eveniet qui. Tempore consectetur consequatur totam animi molestiae. Provident consequatur suscipit nobis consequuntur quos. Enim nulla et cumque.",
    "phone": "824.318.4376",
    "email": "Paxton.Beatty59@gmail.com",
    "status": "Do weryfikacji",
    "address": "Jagiełły 31A, 31-711 Kraków",
    "geolat": 50.09618,
    "geolng": 20.05105
}, {
    "date": "2019-06-29T09:13:56.884Z",
    "contactPerson": "Josh Hackett",
    "description": "In et ipsam. Laboriosam laboriosam voluptatem earum. Doloribus quae iusto.",
    "phone": "274.956.8745 x8474",
    "email": "Demond_Heathcote@yahoo.com",
    "status": "Do weryfikacji",
    "address": "os. Piastów 60A, 31-625 Kraków",
    "geolat": 50.10191,
    "geolng": 20.0134
}, {
    "date": "2019-06-29T06:28:12.573Z",
    "contactPerson": "Isai Jerde",
    "description": "Voluptatibus non quis. Aut quis dolor consectetur animi non.",
    "phone": "1-748-578-2587 x283",
    "email": "Alisha89@gmail.com",
    "status": "Do weryfikacji",
    "address": "Malborska 1, 30-563 Kraków",
    "geolat": 50.02662,
    "geolng": 19.97645
}, {
    "date": "2019-06-28T19:46:09.500Z",
    "contactPerson": "Minerva Walter",
    "description": "Quia sit sunt blanditiis praesentium. Odio eos animi. Asperiores sed repellendus laborum voluptatem accusamus. Expedita necessitatibus vitae voluptatem et voluptatem ullam. Vel quia nisi eum sunt debitis dolor. Dolor enim assumenda amet iste.",
    "phone": "144.723.9370",
    "email": "Alden42@hotmail.com",
    "status": "W toku",
    "address": "Zakopiańska 48, 30-418 Kraków",
    "geolat": 50.02169,
    "geolng": 19.93326
}, {
    "date": "2019-06-29T13:57:28.370Z",
    "contactPerson": "Kayley Kuvalis",
    "description": "Alias voluptatem accusantium et. Molestias fuga autem labore fugiat autem a doloribus quis voluptates. Corporis ipsam natus ea sunt. Fuga ducimus natus repellendus a non autem sunt quos cum.",
    "phone": "(799) 635-0611 x87813",
    "email": "Nella.Wiegand68@gmail.com",
    "status": "Do podjęcia",
    "address": "Orlińskiego 1, 31-878 Kraków",
    "geolat": 50.08176,
    "geolng": 19.99974
}, {
    "date": "2019-06-29T08:16:55.551Z",
    "contactPerson": "Osbaldo Cremin",
    "description": "Aliquid distinctio vitae quasi fugit qui et at. Cum dolorem optio aspernatur voluptate eveniet architecto eum eligendi ut. Id veniam autem quo velit suscipit odio animi temporibus. Est et ut.",
    "phone": "(566) 115-1660 x5616",
    "email": "Libbie_Langosh@yahoo.com",
    "status": "Zamknięta",
    "address": "Okulickiego 51, 31-637 Kraków",
    "geolat": 50.09308,
    "geolng": 20.02228
}, {
    "date": "2019-06-28T22:08:49.932Z",
    "contactPerson": "Herta Denesik",
    "description": "Ut sit adipisci modi et tenetur sed quam. Et earum quisquam a cumque fugiat quia.",
    "phone": "721.291.9011",
    "email": "Autumn_Wyman44@hotmail.com",
    "status": "W toku",
    "address": "Kapelanka 2, 30-347 Kraków",
    "geolat": 50.04438,
    "geolng": 19.92166
}, {
    "date": "2019-06-29T09:02:22.027Z",
    "contactPerson": "Vincenza Boyle",
    "description": "Corporis at aut sunt et dolorem quibusdam sed autem nostrum. Ipsum deleniti dolores. Labore esse omnis voluptatibus laborum minima temporibus maxime tenetur. Voluptate accusamus quidem veniam nesciunt velit consequatur impedit iure quia. Quia assumenda corporis ipsam et quibusdam tenetur. Corrupti numquam omnis alias repellat similique error ipsam.",
    "phone": "1-219-846-1074",
    "email": "Mckenzie.Cartwright56@yahoo.com",
    "status": "Do weryfikacji",
    "address": "al. Pokoju 62A, 31-564 Kraków",
    "geolat": 50.06549,
    "geolng": 19.99354
}, {
    "date": "2019-06-29T05:53:07.021Z",
    "contactPerson": "Albin Hessel",
    "description": "Est et minus vero nostrum modi cum earum debitis id. Eos et dicta repudiandae accusamus. Sit voluptatem laboriosam architecto sed tempore consectetur perspiciatis. Suscipit quas necessitatibus inventore deserunt harum. In quia quam nihil maiores.",
    "phone": "953-268-7129 x1366",
    "email": "Valerie_Stokes11@hotmail.com",
    "status": "W toku",
    "address": "Kazimierza Wielkiego 121, 30-074 Kraków",
    "geolat": 50.07479,
    "geolng": 19.91013
}, {
    "date": "2019-06-29T10:13:52.205Z",
    "contactPerson": "Jerad Strosin",
    "description": "Ut consequatur animi dolorem vel voluptatum recusandae. Quae omnis facere aut doloremque sit praesentium. Aut eos eum dolore ut. Tempore quia suscipit assumenda sunt laboriosam. Qui totam sint necessitatibus fugiat tempore sapiente.",
    "phone": "(318) 649-0408 x31078",
    "email": "Jacques.Okuneva@yahoo.com",
    "status": "Zamknięta",
    "address": "Rakowicka 27, 31-510 Kraków",
    "geolat": 50.06894,
    "geolng": 19.95431
}, {
    "date": "2019-06-29T05:15:23.464Z",
    "contactPerson": "Sabryna Stark",
    "description": "Totam exercitationem error. Suscipit qui ipsa soluta voluptate expedita qui nostrum. Sequi sunt natus rem et debitis quo.",
    "phone": "628.448.6610",
    "email": "Karen85@yahoo.com",
    "status": "Do podjęcia",
    "address": "Wielicka 259, 30-663 Kraków",
    "geolat": 50.01417,
    "geolng": 19.99688
}, {
    "date": "2019-06-29T08:13:08.349Z",
    "contactPerson": "Wellington Lebsack",
    "description": "Quis saepe facilis sit omnis labore. Iusto quo est non expedita dolorem tempora error. Rerum minus ut amet vel. Vero repudiandae est aperiam sequi natus eaque architecto deleniti. Rerum aut est deserunt dolorum. Est ipsum et deleniti labore.",
    "phone": "825-335-6547 x757",
    "email": "Rosa.Emmerich21@yahoo.com",
    "status": "Do weryfikacji",
    "address": "al. 29 Listopada 125, 31-406 Kraków",
    "geolat": 50.0905,
    "geolng": 19.95973
}, {
    "date": "2019-06-29T11:26:56.603Z",
    "contactPerson": "Elvis Crona",
    "description": "Et sit delectus et eaque. Quia quia ut nesciunt quia suscipit vel voluptatum quam sit. Itaque harum id totam delectus repellat reprehenderit.",
    "phone": "826.936.7535",
    "email": "Malika.Kuhlman@hotmail.com",
    "status": "Do podjęcia",
    "address": "Stanisława Stojałowskiego 12, 30-611 Kraków",
    "geolat": 50.00499,
    "geolng": 19.95059
}, {
    "date": "2019-06-29T10:03:16.639Z",
    "contactPerson": "Damien Thiel",
    "description": "Est fuga asperiores maxime consequatur cum earum. Et qui sit eos nam ea.",
    "phone": "732-051-1569 x425",
    "email": "Julian_Wolf@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Broniewskiego 433, 31-801 Kraków",
    "geolat": 50.08666,
    "geolng": 20.01836
}, {
    "date": "2019-06-29T08:45:52.612Z",
    "contactPerson": "Donna Mohr",
    "description": "Suscipit magnam et non quia voluptas excepturi aspernatur dolores. Qui fuga a nulla qui qui. Qui sed itaque. Est harum nobis molestias qui consequatur est dolores iste. Consequatur vitae voluptas ut vel eos excepturi sit suscipit. Sint vero veniam voluptatum neque ullam totam.",
    "phone": "679-373-4687",
    "email": "Justus13@gmail.com",
    "status": "Zamknięta",
    "address": "Pilotów 4B, 31-462 Kraków",
    "geolat": 50.07897,
    "geolng": 19.97099
}, {
    "date": "2019-06-29T09:12:16.548Z",
    "contactPerson": "Jonathan Reynolds",
    "description": "Ut delectus temporibus magnam aperiam aut et maxime. Id qui quod non animi quod eos qui. Saepe assumenda enim. Aliquam quo corporis exercitationem excepturi. Accusamus commodi eum odit quis voluptatum.",
    "phone": "1-115-165-4002",
    "email": "Natalia_Christiansen16@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Powstańców Wielkopolskich 18, 30-707 Kraków",
    "geolat": 50.04351,
    "geolng": 19.96946
}, {
    "date": "2019-06-28T21:13:10.501Z",
    "contactPerson": "Mellie Heaney",
    "description": "Quam dolorem a autem tempore totam deserunt ipsum non. Eius commodi rerum. Veniam quam reiciendis placeat quo tempora quas est. Reiciendis hic qui et.",
    "phone": "1-661-371-9510 x0712",
    "email": "Sadie.Schimmel90@yahoo.com",
    "status": "Do podjęcia",
    "address": "Podgórska 32, 31-536 Kraków",
    "geolat": 50.05169,
    "geolng": 19.95392
}, {
    "date": "2019-06-29T14:57:35.643Z",
    "contactPerson": "Nikolas Murazik",
    "description": "Vitae quia nihil non itaque animi consequatur voluptatum veritatis autem. Quia sunt optio occaecati et animi. Voluptatem et voluptatum. Temporibus ipsam in consequuntur maiores quo consequatur voluptatem. Aut voluptatem blanditiis aut ab commodi dolores.",
    "phone": "400.264.8692",
    "email": "Amy17@yahoo.com",
    "status": "W toku",
    "address": "Powstańców 28, 31-422 Kraków",
    "geolat": 50.0939,
    "geolng": 19.96641
}, {
    "date": "2019-06-29T14:12:56.144Z",
    "contactPerson": "Arlo Orn",
    "description": "Aut illum porro eius earum. Autem repudiandae quia illum debitis et qui blanditiis.",
    "phone": "689.565.5484 x9303",
    "email": "Maxine_Block@hotmail.com",
    "status": "W toku",
    "address": "Sołtysowska 16, 31-589 Kraków",
    "geolat": 50.0643,
    "geolng": 20.01982
}, {
    "date": "2019-06-29T05:45:53.023Z",
    "contactPerson": "Jeanne Quitzon",
    "description": "Provident ducimus vel esse velit veniam ipsa. Et adipisci neque qui quod est quo sed. Iste et in fugiat est sit sequi facilis adipisci.",
    "phone": "1-238-589-9020 x1001",
    "email": "Jed94@gmail.com",
    "status": "W toku",
    "address": "Mogilska 122, 31-445 Kraków",
    "geolat": 50.06888,
    "geolng": 19.97943
}, {
    "date": "2019-06-29T16:04:17.451Z",
    "contactPerson": "Missouri Ledner",
    "description": "Et adipisci excepturi numquam culpa praesentium unde tempora tempore. Eius aut dolor sint sint deleniti. Officia suscipit praesentium ad voluptatibus ad magni eius.",
    "phone": "937.878.2817",
    "email": "Donnell_Armstrong@yahoo.com",
    "status": "W toku",
    "address": "Jasnogórska 2B, 31-346 Kraków",
    "geolat": 50.08999,
    "geolng": 19.89341
}, {
    "date": "2019-06-29T09:40:41.679Z",
    "contactPerson": "Orrin Rippin",
    "description": "Amet aperiam ipsum ad ratione eos. Qui sunt omnis rem.",
    "phone": "835-704-4947",
    "email": "Fred_Schneider97@gmail.com",
    "status": "Zamknięta",
    "address": "os. Kombatantów 16, 31-630 Kraków",
    "geolat": 50.09049,
    "geolng": 20.00534
}, {
    "date": "2019-06-29T12:05:50.571Z",
    "contactPerson": "Tyrel Wuckert",
    "description": "Nemo consectetur optio quidem voluptate autem aliquam quae nihil autem. Neque dolore incidunt cum voluptatibus accusantium. Alias rem molestiae beatae ex non laboriosam accusantium et corrupti. Est perspiciatis eveniet voluptatum labore et at mollitia. Quod distinctio ut labore ut.",
    "phone": "546.545.8581 x69360",
    "email": "Dorothy9@gmail.com",
    "status": "W toku",
    "address": "Królewska 57, 30-081 Kraków",
    "geolat": 50.0734,
    "geolng": 19.91542
}, {
    "date": "2019-06-29T06:37:22.101Z",
    "contactPerson": "Tabitha Kirlin",
    "description": "Enim qui ut perferendis consequuntur neque autem enim iste. Maxime alias et sit voluptas non. Suscipit ut commodi aut sit voluptas. Quaerat eligendi culpa. Tempora quaerat asperiores assumenda qui fugit qui possimus sed ut.",
    "phone": "1-220-813-6319 x96595",
    "email": "Maurine.Hammes@yahoo.com",
    "status": "W toku",
    "address": "Klasztorna 23, 31-949 Kraków",
    "geolat": 50.05983,
    "geolng": 20.0506
}, {
    "date": "2019-06-29T09:51:29.977Z",
    "contactPerson": "Anibal Dibbert",
    "description": "Corrupti asperiores est consectetur sequi molestiae sequi modi error provident. Voluptate est officia quia. Fugiat modi amet.",
    "phone": "(081) 995-2589 x562",
    "email": "Marguerite.McCullough@gmail.com",
    "status": "Do podjęcia",
    "address": "Ćwiklińskiej 14, 30-863 Kraków",
    "geolat": 50.01497,
    "geolng": 20.02225
}, {
    "date": "2019-06-29T11:12:09.490Z",
    "contactPerson": "Douglas Hickle",
    "description": "Officiis ipsum ut. Est est officiis culpa voluptates iusto. Debitis non fugit aut inventore vero sed quia. Ab tempore ipsam itaque.",
    "phone": "1-905-334-2131 x9671",
    "email": "Tavares.Torp24@yahoo.com",
    "status": "Zamknięta",
    "address": "Okulickiego 55, 31-637 Kraków",
    "geolat": 50.09334,
    "geolng": 20.02396
}, {
    "date": "2019-06-29T02:44:30.851Z",
    "contactPerson": "Isidro Kozey",
    "description": "Dicta quo aut possimus eos impedit eius ad dolorum in. A sunt dolorum eos assumenda maxime eum quo autem. Corporis tenetur voluptas et laudantium eligendi. Nihil qui libero doloremque.",
    "phone": "1-312-977-7322 x4181",
    "email": "Ofelia.Eichmann83@gmail.com",
    "status": "Zamknięta",
    "address": "Sucharskiego 88, 30-898 Kraków",
    "geolat": 50.01564,
    "geolng": 20.05304
}, {
    "date": "2019-06-28T23:10:36.726Z",
    "contactPerson": "Kristofer Weimann",
    "description": "Iste et laborum illo asperiores dolores est ex vel. Aperiam earum et ut. Quidem esse a ut itaque voluptate in. Et a et. Harum corporis ullam minima quia adipisci assumenda. A qui atque itaque.",
    "phone": "(495) 113-0497 x8869",
    "email": "Abdul.Weissnat70@hotmail.com",
    "status": "Do podjęcia",
    "address": "Strzelców 26, 31-422 Kraków",
    "geolat": 50.09754,
    "geolng": 19.97367
}, {
    "date": "2019-06-29T09:27:00.896Z",
    "contactPerson": "Deondre Feil",
    "description": "Id architecto excepturi soluta aut. Consequatur perspiciatis consequatur.",
    "phone": "1-403-216-9179 x33134",
    "email": "Pascale.Waters@gmail.com",
    "status": "Zamknięta",
    "address": "Powstańców Wielkopolskich 13, 30-707 Kraków",
    "geolat": 50.04428,
    "geolng": 19.96752
}, {
    "date": "2019-06-29T03:34:49.169Z",
    "contactPerson": "Ari Borer",
    "description": "Aut omnis corrupti. Ipsa vel rerum error. Adipisci voluptatibus quisquam quo vel quibusdam labore. Ut vel vel eum fuga. Aut perspiciatis natus qui deleniti ut aut culpa. Dolores vel voluptatum.",
    "phone": "(293) 018-2433 x5772",
    "email": "Elvera.Zemlak95@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Meissnera 30, 31-457 Kraków",
    "geolat": 50.07306,
    "geolng": 19.98028
}, {
    "date": "2019-06-28T20:21:45.009Z",
    "contactPerson": "Elizabeth Schoen",
    "description": "Magni aut saepe et pariatur vel aspernatur. Qui eligendi et enim ullam quos. Neque et voluptatem occaecati fuga. Dolor placeat beatae ut quis enim soluta ipsam voluptates. Consequatur veritatis qui blanditiis magni nulla magni. Consequatur mollitia explicabo et vero debitis.",
    "phone": "074.223.2450",
    "email": "Kory96@yahoo.com",
    "status": "W toku",
    "address": "Pilotów 2, 31-462 Kraków",
    "geolat": 50.07782,
    "geolng": 19.96941
}, {
    "date": "2019-06-29T15:07:18.391Z",
    "contactPerson": "Aisha Okuneva",
    "description": "Aut dolores quod sed omnis ratione quasi autem. Provident aut omnis et corporis dolor nobis cupiditate ipsum aut. Consequatur exercitationem quibusdam quasi praesentium nobis.",
    "phone": "1-554-357-7367 x66802",
    "email": "Kathryne34@gmail.com",
    "status": "Do podjęcia",
    "address": "al. Ignacego Daszyńskiego 3B, 31-537 Kraków",
    "geolat": 50.05816,
    "geolng": 19.9498
}, {
    "date": "2019-06-29T13:02:15.618Z",
    "contactPerson": "Tad Weimann",
    "description": "Consequatur quasi dolorum et. Cumque minima saepe possimus eius hic sit molestias eveniet velit. Consequatur voluptatibus qui ab qui quia. Consequatur quas qui eum fuga alias quam. Nobis non qui cum eveniet vitae fuga.",
    "phone": "1-346-914-8364 x369",
    "email": "Roel79@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Grażyny 6, 31-217 Kraków",
    "geolat": 50.08927,
    "geolng": 19.94876
}, {
    "date": "2019-06-29T01:28:16.445Z",
    "contactPerson": "Earnestine Heaney",
    "description": "Atque id enim quis veritatis. Dolores sit sint. Natus ut debitis dicta hic nobis eligendi quae voluptatem accusantium. Veniam est et consequatur facere hic aspernatur quidem doloribus. Vel soluta nobis est ut velit sint.",
    "phone": "(982) 880-1699",
    "email": "Tom89@hotmail.com",
    "status": "Do podjęcia",
    "address": "Krowoderskich Zuchów 22, 31-272 Kraków",
    "geolat": 50.08919,
    "geolng": 19.9268
}, {
    "date": "2019-06-28T22:29:57.298Z",
    "contactPerson": "Cesar Wiegand",
    "description": "Sunt earum ipsam deleniti ipsam magni quo aut. Quia similique voluptatibus velit. Eum hic aspernatur sint. Quidem enim qui deleniti.",
    "phone": "115-693-8928 x42295",
    "email": "Katrine.Rice@hotmail.com",
    "status": "W toku",
    "address": "Marii Dąbrowskiej 25, 31-851 Kraków",
    "geolat": 50.07658,
    "geolng": 20.01464
}, {
    "date": "2019-06-29T14:06:48.453Z",
    "contactPerson": "Meagan Hagenes",
    "description": "Quia unde non. Quae inventore natus veritatis animi. Sit error ex et consequatur cupiditate. Laboriosam esse voluptatem enim cumque quia laborum odio omnis vel. Nam quis odit enim ad. Est porro voluptatem.",
    "phone": "339.252.6745 x3343",
    "email": "Ephraim.Heidenreich94@hotmail.com",
    "status": "W toku",
    "address": "Pawia 5, 31-154 Kraków",
    "geolat": 50.06675,
    "geolng": 19.94557
}, {
    "date": "2019-06-29T11:26:08.362Z",
    "contactPerson": "Hollie Rosenbaum",
    "description": "Rerum aut temporibus et ea illo facilis qui ad molestias. Neque amet voluptatem id unde sed quibusdam. Est nesciunt quas tempore occaecati possimus. Consequuntur aliquam aliquid aliquid officia aut neque sapiente explicabo omnis. Consequuntur maxime reprehenderit in ut veniam.",
    "phone": "314-393-6913",
    "email": "Gilda_Hoeger@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kobierzyńska 42, 30-363 Kraków",
    "geolat": 50.03104,
    "geolng": 19.9185
}, {
    "date": "2019-06-29T03:07:36.727Z",
    "contactPerson": "Dayne Bernier",
    "description": "Vitae tenetur tempore nostrum nulla et blanditiis ratione. Amet eum quidem praesentium. Sint eligendi incidunt est quia assumenda officiis voluptatibus sint. Dolor nihil modi natus numquam aspernatur dolor. Placeat quibusdam perspiciatis id voluptates sint rem.",
    "phone": "(426) 996-4865",
    "email": "Vincent_Leannon23@gmail.com",
    "status": "Do weryfikacji",
    "address": "Bobrzyńskiego 33, 30-348 Kraków",
    "geolat": 50.02084,
    "geolng": 19.89941
}, {
    "date": "2019-06-29T01:36:36.082Z",
    "contactPerson": "Brant Auer",
    "description": "Magnam laborum rerum et. Ipsum atque nesciunt qui veritatis odio quis provident. Culpa dolore aut fugiat omnis illum molestiae. Accusamus cumque consequuntur sequi nisi sed. Eos doloremque distinctio aut et sed.",
    "phone": "169-886-0183 x798",
    "email": "Mariah_Kessler@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bochenka 10, 30-693 Kraków",
    "geolat": 50.0114,
    "geolng": 19.97532
}, {
    "date": "2019-06-28T16:16:34.198Z",
    "contactPerson": "Carolanne Huels",
    "description": "Maiores deleniti quos autem voluptatum. Modi quam pariatur a vitae et ut quasi possimus. Tempore atque dolorem tempore dolorum ipsam sit iste quos et. Porro est labore. Dolorum vel sunt dolor occaecati odio ea.",
    "phone": "1-970-377-4610 x36615",
    "email": "Eino.Zulauf@yahoo.com",
    "status": "W toku",
    "address": "Koszykarska 27A, 30-717 Kraków",
    "geolat": 50.04891,
    "geolng": 19.98766
}, {
    "date": "2019-06-29T11:10:38.771Z",
    "contactPerson": "Webster Kerluke",
    "description": "Occaecati vel qui quibusdam. Aliquid fugiat vel. Est esse non. Enim est quibusdam. Eius occaecati aliquid alias quam consequatur laboriosam possimus sed error.",
    "phone": "781-348-5762 x85813",
    "email": "Nikki.Hirthe89@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Królowej Jadwigi 242, 30-218 Kraków",
    "geolat": 50.06533,
    "geolng": 19.87719
}, {
    "date": "2019-06-29T14:49:08.548Z",
    "contactPerson": "Wilson Streich",
    "description": "Magni ut et. Nulla aliquid nobis nulla et quasi excepturi sunt. Cumque ratione voluptatem eveniet vitae aut.",
    "phone": "(485) 907-7417 x4521",
    "email": "Emilio51@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kuźnicy Kołłątajowskiej 20, 31-234 Kraków",
    "geolat": 50.09864,
    "geolng": 19.95907
}, {
    "date": "2019-06-28T21:34:03.820Z",
    "contactPerson": "Vincent Rodriguez",
    "description": "Optio occaecati ea ducimus ut porro similique labore. Quisquam et quia mollitia deleniti harum est natus.",
    "phone": "924-503-8429",
    "email": "Myrtis.Satterfield1@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Tischnera 10, 30-418 Kraków",
    "geolat": 50.02818,
    "geolng": 19.94171
}, {
    "date": "2019-06-28T23:06:41.112Z",
    "contactPerson": "Amber Glover",
    "description": "Ipsa impedit molestiae officiis aperiam nihil non vitae ullam impedit. Vel similique vero deserunt. Dignissimos maxime ipsum atque. Similique aliquam ut aliquid deleniti dolores nam. Voluptates consequatur accusamus hic ut ut ut. Aliquid et possimus maiores expedita sint consequuntur dolorem ut.",
    "phone": "1-422-800-8526",
    "email": "Isabel.Rempel88@gmail.com",
    "status": "W toku",
    "address": "Bratysławska 4, 31-201 Kraków",
    "geolat": 50.08411,
    "geolng": 19.93566
}, {
    "date": "2019-06-29T01:55:16.256Z",
    "contactPerson": "Sterling Kuvalis",
    "description": "Magni quae earum maxime suscipit. Consequatur aut unde.",
    "phone": "1-694-533-6319",
    "email": "Claire12@gmail.com",
    "status": "W toku",
    "address": "Grota Roweckiego 33, 30-348 Kraków",
    "geolat": 50.02912,
    "geolng": 19.91259
}, {
    "date": "2019-06-29T10:19:00.416Z",
    "contactPerson": "Audie Reichel",
    "description": "Voluptatem ut in deserunt ea atque. Ullam aut eius sint laborum ad minus quasi qui aut. Non porro vero vel dolorem hic id explicabo.",
    "phone": "(351) 610-2101 x865",
    "email": "Heber47@yahoo.com",
    "status": "W toku",
    "address": "Balicka 16, 30-149 Kraków",
    "geolat": 50.0814,
    "geolng": 19.88249
}, {
    "date": "2019-06-28T22:15:39.842Z",
    "contactPerson": "Norberto Daugherty",
    "description": "Quia distinctio tenetur ratione ut quo id et. Placeat quia eaque.",
    "phone": "316-110-7704",
    "email": "Norris.Wilkinson93@hotmail.com",
    "status": "Do podjęcia",
    "address": "Skalica 28A, 30-376 Kraków",
    "geolat": 50.03246,
    "geolng": 19.89612
}, {
    "date": "2019-06-29T11:41:31.708Z",
    "contactPerson": "Alexa Hoeger",
    "description": "Nostrum possimus veritatis sit sint. Cum omnis fugiat assumenda voluptatum quia quidem quisquam nihil eum. Laborum suscipit et. Culpa recusandae eos consequatur excepturi similique illum. Quo architecto voluptatem ut laudantium unde impedit veritatis ea qui. Ratione maiores aspernatur mollitia maxime occaecati.",
    "phone": "(668) 997-0349 x90820",
    "email": "Zita.Klein@gmail.com",
    "status": "W toku",
    "address": "Wielicka 77, 30-552 Kraków",
    "geolat": 50.03338,
    "geolng": 19.96941
}, {
    "date": "2019-06-29T09:50:15.627Z",
    "contactPerson": "Winifred Green",
    "description": "Esse deserunt iure sint deserunt optio perferendis nihil ex a. Voluptatem deleniti iusto velit et minus in sequi autem eos. Et tempore cupiditate. Autem est qui quae sint repudiandae recusandae.",
    "phone": "920.868.2325",
    "email": "Ceasar_Haag@yahoo.com",
    "status": "Do podjęcia",
    "address": "Witosa 7, 30-639 Kraków",
    "geolat": 50.01106,
    "geolng": 19.96271
}, {
    "date": "2019-06-29T05:04:21.785Z",
    "contactPerson": "Assunta Streich",
    "description": "Consectetur labore nulla nihil quasi quasi est pariatur. Aut voluptates quo saepe ut in. Sed aperiam hic laudantium voluptatibus. Qui natus molestias facilis accusantium deleniti repudiandae. Rem magnam modi. Eos sint totam iusto veritatis quidem voluptatem.",
    "phone": "922.027.0265",
    "email": "Lina.Ortiz52@yahoo.com",
    "status": "W toku",
    "address": "Łaczka 35, 30-864 Kraków",
    "geolat": 50.01049,
    "geolng": 20.02622
}, {
    "date": "2019-06-28T21:27:20.262Z",
    "contactPerson": "Gianni Considine",
    "description": "Libero quas non sit veniam autem voluptate consequatur quod fugit. Cupiditate fugit est odit quos rerum suscipit.",
    "phone": "(695) 947-6658 x2201",
    "email": "Narciso68@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Norymberska 1, 30-376 Kraków",
    "geolat": 50.03002,
    "geolng": 19.91234
}, {
    "date": "2019-06-28T20:43:26.495Z",
    "contactPerson": "Twila Kuhn",
    "description": "Corporis officiis qui quis doloremque distinctio aspernatur quo. Nihil iure in quis esse possimus. Incidunt repellat et molestias quia. Doloribus possimus rerum adipisci aspernatur est dolorem enim.",
    "phone": "1-171-589-0682",
    "email": "Jamil.Brakus93@yahoo.com",
    "status": "Zamknięta",
    "address": "Makuszyńskiego 26, 31-752 Kraków",
    "geolat": 50.08941,
    "geolng": 20.03925
}, {
    "date": "2019-06-28T23:00:41.897Z",
    "contactPerson": "Rosalee McDermott",
    "description": "Est facilis est recusandae corrupti quos rem sequi dolorum quia. Eum sed aut vel mollitia. Id debitis non eos enim deleniti. Corrupti saepe adipisci.",
    "phone": "962-228-9611 x729",
    "email": "Simone35@gmail.com",
    "status": "Do weryfikacji",
    "address": "Rostafińskiego 10, 30-072 Kraków",
    "geolat": 50.06976,
    "geolng": 19.90595
}, {
    "date": "2019-06-28T17:06:32.807Z",
    "contactPerson": "Berniece Quigley",
    "description": "Neque assumenda accusantium. Earum ratione quam. Consequatur tenetur ea quas aperiam ex distinctio id modi. Minima maiores earum totam in quos. Rerum fugiat voluptas quia ratione.",
    "phone": "(843) 147-8298 x752",
    "email": "Carmine.Hammes@yahoo.com",
    "status": "Do podjęcia",
    "address": "Przegorzalska 2, 30-252 Kraków",
    "geolat": 50.04762,
    "geolng": 19.87164
}, {
    "date": "2019-06-29T03:53:01.937Z",
    "contactPerson": "Bennett Greenfelder",
    "description": "Suscipit velit quidem. Sed maiores earum sequi distinctio consequatur. Sunt voluptates voluptas ullam ut quia doloremque non laudantium consequatur.",
    "phone": "631.046.0840 x1709",
    "email": "Juvenal_Roob@gmail.com",
    "status": "Zamknięta",
    "address": "Ks. Józefa 357, 30-243 Kraków",
    "geolat": 50.04348,
    "geolng": 19.82004
}, {
    "date": "2019-06-28T19:36:30.469Z",
    "contactPerson": "Tiffany Keebler",
    "description": "Dolorem aut laudantium. Magnam illo consequatur deleniti similique est. Sit consequuntur fugit unde ipsum ut sunt iusto reprehenderit aliquam.",
    "phone": "353-003-5352",
    "email": "Jerome_Quigley@gmail.com",
    "status": "Zamknięta",
    "address": "Stawowa 61, 31-346 Kraków",
    "geolat": 50.09272,
    "geolng": 19.8954
}, {
    "date": "2019-06-29T06:28:58.137Z",
    "contactPerson": "Etha Lubowitz",
    "description": "Aut dolores ratione eum natus qui optio numquam dolore. Voluptates consequatur dicta aut. Debitis consequatur quidem.",
    "phone": "289.512.4465 x42303",
    "email": "Wilfrid91@yahoo.com",
    "status": "Zamknięta",
    "address": "Komuny Paryskiej 1A, 30-389 Kraków",
    "geolat": 50.00608,
    "geolng": 19.89762
}, {
    "date": "2019-06-29T01:54:31.543Z",
    "contactPerson": "Florencio Runte",
    "description": "Laudantium asperiores cupiditate sit neque tempora repellendus consequatur accusantium. Qui alias consequatur tenetur minus. Aut esse sit illum et quis iure in rerum corrupti. Mollitia omnis quidem officia.",
    "phone": "751.309.0663 x20536",
    "email": "Aryanna18@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Myśliwska 57, 30-718 Kraków",
    "geolat": 50.045,
    "geolng": 19.99824
}, {
    "date": "2019-06-29T15:28:37.870Z",
    "contactPerson": "Everardo Olson",
    "description": "Incidunt corporis dignissimos. Vel error veniam ad praesentium dolorum rerum. Quas iste blanditiis expedita exercitationem quo maxime expedita.",
    "phone": "(061) 344-7640",
    "email": "Tiana_Wisozk@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Królewska 55, 30-081 Kraków",
    "geolat": 50.07312,
    "geolng": 19.9159
}, {
    "date": "2019-06-29T11:52:41.349Z",
    "contactPerson": "Markus Rau",
    "description": "Minima cumque reiciendis dicta earum deleniti dolorem consectetur in. Et quis exercitationem sit deleniti. Dolore dolores autem totam culpa sunt suscipit qui dolores. Quis molestias velit earum facilis suscipit. Neque nam reprehenderit debitis quo ut dolor voluptas.",
    "phone": "906.975.7015 x603",
    "email": "Korey_Rippin@gmail.com",
    "status": "Do weryfikacji",
    "address": "Bora Komorowskiego 39, 31-876 Kraków",
    "geolat": 50.08714,
    "geolng": 19.98507
}, {
    "date": "2019-06-29T02:37:38.570Z",
    "contactPerson": "Tatyana Schmitt",
    "description": "Voluptatem debitis numquam aut aut velit qui blanditiis perspiciatis. Dolorem iusto libero voluptatem repellat. Incidunt nam blanditiis. Est velit omnis amet veritatis sint. Veritatis sed qui quia quibusdam nam ut. Sapiente eum omnis.",
    "phone": "505-729-5570 x80963",
    "email": "Arvilla.Schmidt53@gmail.com",
    "status": "Zamknięta",
    "address": "Złotego Wieku 75, 31-618 Kraków",
    "geolat": 50.09563,
    "geolng": 19.99839
}, {
    "date": "2019-06-29T02:26:20.107Z",
    "contactPerson": "Tanya Oberbrunner",
    "description": "Fugit perspiciatis nemo. Hic doloremque dolor aliquid.",
    "phone": "(626) 699-6852 x496",
    "email": "Hillard17@gmail.com",
    "status": "Do podjęcia",
    "address": "Kapelanka 14, 30-347 Kraków",
    "geolat": 50.04001,
    "geolng": 19.92465
}, {
    "date": "2019-06-29T11:03:59.057Z",
    "contactPerson": "Daisha O'Kon",
    "description": "Deleniti laudantium aperiam sed voluptas. Nisi fuga deserunt odio velit. Voluptas doloribus repellendus eum eius. Distinctio velit et dolorem aut excepturi sint.",
    "phone": "1-353-804-4260 x1448",
    "email": "Mateo.Hayes@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Lubostroń 15, 30-383 Kraków",
    "geolat": 50.01404,
    "geolng": 19.89585
}, {
    "date": "2019-06-29T03:00:58.442Z",
    "contactPerson": "Ali Strosin",
    "description": "Explicabo magni laudantium optio neque qui laudantium et sit pariatur. Deserunt deleniti et quia quidem qui eius. Iste et quia.",
    "phone": "446.349.3141 x467",
    "email": "Kurt.Schiller77@gmail.com",
    "status": "Do podjęcia",
    "address": "Mieczysława Wrony 128, 30-399 Kraków",
    "geolat": 49.98843,
    "geolng": 19.87047
}, {
    "date": "2019-06-29T13:27:49.755Z",
    "contactPerson": "Monica Kessler",
    "description": "Sunt quia quasi veritatis. Saepe a incidunt blanditiis. Enim ducimus a tenetur ut voluptatum sint. Nostrum dignissimos amet nam beatae. Amet dolores inventore et mollitia.",
    "phone": "288-567-6752 x530",
    "email": "Khalil_Rosenbaum@hotmail.com",
    "status": "W toku",
    "address": "Kocmyrzowska 43, 31-764 Kraków",
    "geolat": 50.10594,
    "geolng": 20.07438
}, {
    "date": "2019-06-28T18:07:43.062Z",
    "contactPerson": "Hillary Orn",
    "description": "Est corrupti quo. Nesciunt voluptatem ad sunt. Placeat dignissimos maiores aut.",
    "phone": "1-753-492-9649 x626",
    "email": "Louvenia.Kshlerin77@gmail.com",
    "status": "Do weryfikacji",
    "address": "Dożynkowa 11, 31-234 Kraków",
    "geolat": 50.1018,
    "geolng": 19.94619
}, {
    "date": "2019-06-29T10:57:14.579Z",
    "contactPerson": "Cayla Thiel",
    "description": "Eos nesciunt aperiam ad labore voluptate voluptatem eum iste. Fugit incidunt aut aut enim maiores. Vel ea pariatur ducimus qui doloremque molestias quia. Voluptatum earum laborum quia laboriosam. Magnam libero occaecati delectus incidunt voluptatibus dignissimos voluptas voluptatum.",
    "phone": "511-790-4863 x0165",
    "email": "Milford.OReilly70@hotmail.com",
    "status": "W toku",
    "address": "Kazimierza Wierzyńskiego 20, 30-198 Kraków",
    "geolat": 50.08495,
    "geolng": 19.84958
}, {
    "date": "2019-06-28T20:59:06.571Z",
    "contactPerson": "Providenci Reinger",
    "description": "Sit deleniti ad suscipit aspernatur non sed est sint. Fugit et omnis eveniet dignissimos. Nobis officiis a accusantium in sed ab.",
    "phone": "679.952.7620 x375",
    "email": "Danny.Smitham2@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Reymonta 17, 30-059 Kraków",
    "geolat": 50.06577,
    "geolng": 19.91452
}, {
    "date": "2019-06-28T23:29:54.102Z",
    "contactPerson": "Frieda Halvorson",
    "description": "Dolor voluptatum quia. Laboriosam sit labore ea cupiditate eligendi reprehenderit dolores hic. Aut et iure tempora odit fuga et asperiores consequuntur. Labore ea modi possimus dolor consequatur aliquam voluptatem ab. Laboriosam sit molestiae consequatur.",
    "phone": "105-686-9004",
    "email": "Hiram_McKenzie97@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Obozowa 46, 30-383 Kraków",
    "geolat": 50.01485,
    "geolng": 19.90744
}, {
    "date": "2019-06-29T12:36:30.826Z",
    "contactPerson": "Chaz Bartell",
    "description": "Nihil hic nesciunt omnis quis consequuntur laborum illum at. Blanditiis veritatis tenetur tempore voluptatibus et cum culpa porro. Quidem quod possimus sapiente nisi.",
    "phone": "347-936-9193",
    "email": "Marcelina_Kreiger4@gmail.com",
    "status": "Do weryfikacji",
    "address": "Forteczna 51, 30-437 Kraków",
    "geolat": 49.99981,
    "geolng": 19.91221
}, {
    "date": "2019-06-29T15:01:32.458Z",
    "contactPerson": "Bernie Miller",
    "description": "Laboriosam id culpa dolores modi eos dolores est est eaque. Aspernatur aspernatur quo unde reiciendis itaque fugit hic culpa est. Aut doloremque est placeat culpa tempore repellendus odit. Dolor qui perspiciatis esse nostrum.",
    "phone": "852-140-3076 x11960",
    "email": "Annalise86@yahoo.com",
    "status": "W toku",
    "address": "Bieńczycki Plac Targowy 2, 31-831 Kraków",
    "geolat": 50.08304,
    "geolng": 20.03221
}, {
    "date": "2019-06-29T02:42:21.947Z",
    "contactPerson": "Marcelle Schneider",
    "description": "Modi vitae aut impedit inventore nihil voluptatum omnis. Ex aliquam ipsam voluptatem magnam cum aut sit consequatur.",
    "phone": "(242) 121-8781",
    "email": "Erich8@yahoo.com",
    "status": "Zamknięta",
    "address": "os. Jagiellońskie 19, 31-834 Kraków",
    "geolat": 50.08417,
    "geolng": 20.0272
}, {
    "date": "2019-06-29T09:00:35.783Z",
    "contactPerson": "Greta Kris",
    "description": "Explicabo earum omnis dolorem recusandae tempore harum ex esse. Nam non et aliquid est. Nesciunt corporis aut quia. Excepturi quos rerum. In et occaecati et. Qui totam corrupti voluptatem praesentium non explicabo molestiae.",
    "phone": "1-123-873-4818",
    "email": "Kolby98@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kościuszkowskie 5, 31-858 Kraków",
    "geolat": 50.08473,
    "geolng": 20.01319
}, {
    "date": "2019-06-29T12:16:11.774Z",
    "contactPerson": "Scottie Waters",
    "description": "Aut dolor distinctio doloribus facilis cupiditate id et. Fuga commodi ea ratione vitae voluptatem autem quam distinctio. Et laudantium qui et voluptas sed rem ut commodi. Nam aspernatur sed reiciendis atque ut officia inventore cumque perferendis. Sit vitae dolorem qui harum omnis. Culpa vero saepe veniam ipsa et.",
    "phone": "(700) 472-8549",
    "email": "Deon_Stiedemann@hotmail.com",
    "status": "W toku",
    "address": "al. Jana Pawła II 196, 31-982 Kraków",
    "geolat": 50.07191,
    "geolng": 20.02521
}, {
    "date": "2019-06-28T17:21:55.433Z",
    "contactPerson": "Lexi Hintz",
    "description": "Consequatur sint neque est maxime autem. Modi voluptate unde in dolores aut rerum at. Pariatur fugiat dolore rerum maiores eos id autem.",
    "phone": "1-149-294-6565 x302",
    "email": "Treva_Dickinson@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Łokietka 254, 31-334 Kraków",
    "geolat": 50.10576,
    "geolng": 19.90506
}, {
    "date": "2019-06-28T21:29:09.306Z",
    "contactPerson": "Trever Halvorson",
    "description": "Nisi optio et culpa sit reiciendis laudantium qui. Maiores fuga debitis itaque veritatis sint error culpa. Rerum odio vel.",
    "phone": "1-089-821-6623 x0812",
    "email": "Braeden_Satterfield45@yahoo.com",
    "status": "W toku",
    "address": "os. Oświecenia 22A, 31-636 Kraków",
    "geolat": 50.08832,
    "geolng": 19.99349
}, {
    "date": "2019-06-29T01:33:24.722Z",
    "contactPerson": "Horacio Bergstrom",
    "description": "Veritatis ea voluptate sed sed dolore. Enim eveniet neque odit perspiciatis earum qui. Delectus necessitatibus ea et laboriosam occaecati vero voluptas sed. Eum perferendis qui aliquid omnis dolorem. Eveniet ex suscipit. Necessitatibus et velit non itaque et et sit fuga sed.",
    "phone": "867-476-6045 x797",
    "email": "Maybelle27@gmail.com",
    "status": "Zamknięta",
    "address": "Strusia 12, 31-808 Kraków",
    "geolat": 50.08672,
    "geolng": 20.01067
}, {
    "date": "2019-06-29T13:31:34.137Z",
    "contactPerson": "Maximilian Towne",
    "description": "Voluptatum soluta esse ad eos. Dolores maxime similique ex et voluptatibus ut iste a dicta. Perferendis quo totam necessitatibus tenetur ab. Accusantium sunt sunt qui beatae porro placeat. Aut sapiente molestias. Et voluptatem ex qui libero a.",
    "phone": "1-069-394-2797",
    "email": "Nina_Baumbach3@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Makowskiego 4, 31-325 Kraków",
    "geolat": 50.08798,
    "geolng": 19.91903
}, {
    "date": "2019-06-29T15:03:07.834Z",
    "contactPerson": "Ulices Halvorson",
    "description": "Assumenda sapiente similique quia magnam mollitia et quis est. Et ut voluptatum dolorum corporis deserunt. Nobis praesentium sit consectetur. Ab et et.",
    "phone": "(892) 066-7265 x7360",
    "email": "Eulah16@hotmail.com",
    "status": "W toku",
    "address": "Bp. Tomickiego 4, 31-982 Kraków",
    "geolat": 50.07099,
    "geolng": 20.02847
}, {
    "date": "2019-06-29T01:23:28.763Z",
    "contactPerson": "Derick Nolan",
    "description": "Quia nemo harum repellat unde illum autem soluta doloribus temporibus. Laudantium voluptas eaque. Qui quia aut impedit. Est voluptas aliquam. Quae qui dignissimos sit. Nihil expedita velit autem placeat dolores fugiat.",
    "phone": "1-541-525-7629 x16888",
    "email": "Winona.Mertz32@gmail.com",
    "status": "W toku",
    "address": "Tokarskiego 10, 30-065 Kraków",
    "geolat": 50.06798,
    "geolng": 19.90116
}, {
    "date": "2019-06-28T22:47:58.108Z",
    "contactPerson": "Cathryn Barton",
    "description": "Sunt est enim velit autem aut et reprehenderit harum. Perspiciatis ab ut rerum cumque enim dicta aut aut nemo. Eligendi vitae dolore eius aut sit porro quae. Omnis deleniti dolorem et non et dolorem mollitia illo.",
    "phone": "278.564.4982 x6817",
    "email": "Shane_Haag93@hotmail.com",
    "status": "Do podjęcia",
    "address": "Opolska 9, 31-274 Kraków",
    "geolat": 50.09062,
    "geolng": 19.93047
}, {
    "date": "2019-06-29T15:52:18.243Z",
    "contactPerson": "Maye Borer",
    "description": "Ratione sunt sequi doloribus facere dolorum id laborum. Sint autem ut nisi asperiores. Debitis animi quod alias reiciendis quo aspernatur occaecati iste eligendi. Soluta tempore fuga corrupti nihil corporis id ullam. Odio aspernatur natus odit est autem soluta.",
    "phone": "1-336-324-0764 x536",
    "email": "Adela.Bode72@hotmail.com",
    "status": "Do podjęcia",
    "address": "Al. Pokoju 67, 31-580 Kraków",
    "geolat": 50.06448,
    "geolng": 19.99939
}, {
    "date": "2019-06-29T08:39:44.574Z",
    "contactPerson": "Herbert Hickle",
    "description": "Dolorem rerum aut occaecati quia repellendus necessitatibus aut. Qui doloremque blanditiis et quo hic. Aspernatur aut sint officiis. Optio rerum soluta eius veniam amet.",
    "phone": "659-945-4109 x8856",
    "email": "Berniece.Rolfson29@gmail.com",
    "status": "W toku",
    "address": "Kocmyrzowska 2B, 31-750 Kraków",
    "geolat": 50.08485,
    "geolng": 20.04048
}, {
    "date": "2019-06-29T09:10:28.371Z",
    "contactPerson": "Alford O'Connell",
    "description": "Error voluptatem aliquam nesciunt dolore corrupti. Quae itaque dicta asperiores quaerat eius nemo ut. Voluptatem ut unde doloribus esse officiis et fugiat. Ea quia distinctio recusandae blanditiis.",
    "phone": "193-143-1472 x049",
    "email": "Dorris23@gmail.com",
    "status": "W toku",
    "address": "Kozienicka 1, 30-397 Kraków",
    "geolat": 50.00658,
    "geolng": 19.87323
}, {
    "date": "2019-06-29T07:57:43.502Z",
    "contactPerson": "Rigoberto Carroll",
    "description": "Quod officiis est. Illum voluptate tenetur fuga pariatur enim sed quis repudiandae. Minus dolorum est quos.",
    "phone": "415.196.0881",
    "email": "Ross_Kemmer@hotmail.com",
    "status": "Do podjęcia",
    "address": "Witosa 4, 30-612 Kraków",
    "geolat": 50.0143,
    "geolng": 19.96434
}, {
    "date": "2019-06-29T12:45:33.201Z",
    "contactPerson": "Angela Connelly",
    "description": "Dolores dolorum et voluptatibus vero nobis. Voluptatem deleniti reprehenderit consectetur laudantium harum. Ipsa eveniet perspiciatis qui veritatis enim. Accusamus natus ut earum dolores adipisci vel est corrupti.",
    "phone": "612.121.3557 x132",
    "email": "Hassie_Wunsch66@hotmail.com",
    "status": "W toku",
    "address": "Bogucianka 74, 30-398 Kraków",
    "geolat": 50.00915,
    "geolng": 19.81301
}, {
    "date": "2019-06-29T00:26:41.883Z",
    "contactPerson": "Harley Heaney",
    "description": "Natus rerum nihil numquam. Officiis explicabo fugiat molestiae neque. Dolorem culpa nihil rerum molestiae enim eligendi minus officiis. Cumque et aspernatur velit aperiam asperiores et. Veritatis eligendi fuga reiciendis deleniti. Voluptatem id voluptas ipsum ea quia atque.",
    "phone": "(366) 484-8218 x8196",
    "email": "Brandon_Ryan17@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Życzkowskiego 19, 31-864 Kraków",
    "geolat": 50.07974,
    "geolng": 19.99369
}, {
    "date": "2019-06-28T18:28:24.181Z",
    "contactPerson": "Jodie Flatley",
    "description": "Vel quia placeat soluta dolores deserunt nisi laboriosam asperiores. Illum quas itaque. Quo ratione facere non deserunt quod neque sit.",
    "phone": "(381) 881-5825",
    "email": "Ubaldo52@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Kobierzyńska 106, 30-382 Kraków",
    "geolat": 50.02553,
    "geolng": 19.91276
}, {
    "date": "2019-06-29T12:20:16.290Z",
    "contactPerson": "Alexandro Goyette",
    "description": "Nisi amet dolor unde quisquam et aliquid eveniet itaque. Culpa sint voluptates eum velit.",
    "phone": "1-766-885-2171 x2692",
    "email": "Emerson.Moore26@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kobierzyńska 161, 30-384 Kraków",
    "geolat": 50.01923,
    "geolng": 19.90636
}, {
    "date": "2019-06-28T16:44:07.555Z",
    "contactPerson": "Destiney Morar",
    "description": "Aut error culpa qui quia perspiciatis beatae laboriosam. Qui quisquam qui. Magnam nisi libero dolorem. Sed non amet est odit dolore qui quibusdam asperiores quaerat. Mollitia perferendis explicabo repudiandae molestias nobis quos libero soluta.",
    "phone": "358.009.3406 x551",
    "email": "Demarco_Schultz@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Lema 24, 31-571 Kraków",
    "geolat": 50.07051,
    "geolng": 19.9848
}, {
    "date": "2019-06-28T16:28:16.710Z",
    "contactPerson": "Lilly Windler",
    "description": "Veniam dolores ipsa ab odit excepturi ea quod esse. Vitae qui qui quia. Aspernatur et porro hic nihil.",
    "phone": "635-057-2571 x0997",
    "email": "Cecelia_Cassin@yahoo.com",
    "status": "W toku",
    "address": "Mackiewicza 17, 31-210 Kraków",
    "geolat": 50.09423,
    "geolng": 19.94621
}, {
    "date": "2019-06-29T13:36:32.233Z",
    "contactPerson": "Kara Batz",
    "description": "Impedit amet eos ut omnis ab consequatur laborum illum. Dolorem labore temporibus debitis labore illo aspernatur itaque laborum ut. Qui quaerat voluptatum dolores aperiam. Labore at magnam libero eum libero vel. Aut debitis eligendi repudiandae rerum porro quia doloremque sed.",
    "phone": "396-382-4753 x34177",
    "email": "Charlie.Brakus@hotmail.com",
    "status": "Zamknięta",
    "address": "Kuryłowicza 85, 30-699 Kraków",
    "geolat": 49.98457,
    "geolng": 19.98237
}, {
    "date": "2019-06-29T13:20:58.745Z",
    "contactPerson": "Magali Hyatt",
    "description": "Et quaerat sunt facilis facere accusantium qui vitae ex tempora. Rem ab aut modi voluptates doloribus numquam autem vitae et. Maxime ea pariatur aut iste. Culpa ea sunt sapiente voluptatem. Quos et doloribus sunt sed officia. Aut odio eaque non eos in deleniti.",
    "phone": "(750) 314-6544",
    "email": "Karl48@hotmail.com",
    "status": "W toku",
    "address": "Glinik 43, 31-990 Kraków",
    "geolat": 50.09682,
    "geolng": 20.12836
}, {
    "date": "2019-06-29T09:19:12.570Z",
    "contactPerson": "Ena Botsford",
    "description": "Laudantium minima labore. Corrupti rerum occaecati quaerat illo natus. Molestiae fugiat quia tempora accusamus perferendis sunt. Pariatur fuga voluptas labore qui fuga.",
    "phone": "987.167.8141",
    "email": "Patsy_Donnelly9@gmail.com",
    "status": "Do podjęcia",
    "address": "Podole 76, 30-394 Kraków",
    "geolat": 50.02151,
    "geolng": 19.89137
}, {
    "date": "2019-06-29T09:04:06.493Z",
    "contactPerson": "Gisselle Hilpert",
    "description": "Qui in ea eveniet non quia voluptatibus dolores sunt. Consequatur molestiae nihil at. Et nam est quidem qui inventore. Voluptatibus quod aut quos.",
    "phone": "(181) 707-1795 x692",
    "email": "Mitchell_Halvorson25@gmail.com",
    "status": "Do podjęcia",
    "address": "Zakopiańska 107, 30-418 Kraków",
    "geolat": 50.01307,
    "geolng": 19.92766
}, {
    "date": "2019-06-29T07:45:44.838Z",
    "contactPerson": "Jimmy Howell",
    "description": "Totam unde omnis dolorum et voluptatem ut est nihil. Qui provident ut quaerat.",
    "phone": "1-753-497-3881",
    "email": "Dameon.Turner@gmail.com",
    "status": "Zamknięta",
    "address": "al. Jana Pawła II 200, 31-982 Kraków",
    "geolat": 50.0719,
    "geolng": 20.02864
}, {
    "date": "2019-06-29T11:14:26.109Z",
    "contactPerson": "Felicita Cremin",
    "description": "Repellendus dolor vel consequatur ullam a occaecati. Perferendis commodi ullam explicabo sunt enim culpa debitis. Quos quaerat quidem quidem totam eligendi aperiam ex. Sit quisquam officiis et qui numquam quam. Aspernatur magnam natus perferendis non. Consequatur omnis alias ut.",
    "phone": "1-422-076-9762",
    "email": "Oral.Greenholt@gmail.com",
    "status": "Do weryfikacji",
    "address": "Osiedle 2 Pułku Lotniczego 2B, 31-867 Kraków",
    "geolat": 50.0778,
    "geolng": 20.01236
}, {
    "date": "2019-06-28T20:24:46.917Z",
    "contactPerson": "Kristoffer Tremblay",
    "description": "Vero illum officiis recusandae dolores assumenda numquam. Et reiciendis exercitationem et quas deleniti suscipit qui nobis. Error et occaecati eveniet dolor tenetur cupiditate inventore. Excepturi sit ab. Doloremque qui veniam alias et.",
    "phone": "(148) 558-3977 x50274",
    "email": "Cielo.Bosco@yahoo.com",
    "status": "Do podjęcia",
    "address": "29 listopada 137, 31-406 Kraków",
    "geolat": 50.09127,
    "geolng": 19.96004
}, {
    "date": "2019-06-29T04:59:55.961Z",
    "contactPerson": "Dustin Gutkowski",
    "description": "Architecto minima velit suscipit beatae itaque. Laborum accusantium itaque libero dolorem consequuntur tempora. Possimus aspernatur tenetur beatae expedita eos recusandae non veritatis. Accusantium itaque molestiae officiis debitis doloribus adipisci deleniti. Id quidem rerum. Alias fugiat in explicabo assumenda.",
    "phone": "(527) 051-6483 x113",
    "email": "Arielle_Johns32@hotmail.com",
    "status": "W toku",
    "address": "Bronowicka 15, 30-084 Kraków",
    "geolat": 50.07666,
    "geolng": 19.90385
}, {
    "date": "2019-06-29T00:56:40.969Z",
    "contactPerson": "Zoey Kub",
    "description": "Quo aspernatur minus enim quibusdam inventore et temporibus explicabo. Atque voluptas temporibus tempora est perferendis enim. Nam quia eos rerum quas iusto. Rerum nostrum est libero aliquam.",
    "phone": "1-269-700-7856 x4568",
    "email": "Lauretta_Lueilwitz@gmail.com",
    "status": "W toku",
    "address": "Plac Na Stawach 7, 30-107 Kraków",
    "geolat": 50.05469,
    "geolng": 19.91958
}, {
    "date": "2019-06-29T00:54:40.711Z",
    "contactPerson": "Misty Corwin",
    "description": "Eius quia quibusdam non optio tenetur ullam repellendus. Et nesciunt molestias voluptate ad fuga ullam veniam aliquam. Ipsam ut pariatur voluptatem culpa ea quod beatae. Reiciendis sunt aliquam ipsum cupiditate quia voluptas. Molestias in error voluptas.",
    "phone": "841.532.8574",
    "email": "Leonora.Jaskolski@yahoo.com",
    "status": "W toku",
    "address": "Lublańska 16A, 31-476 Kraków",
    "geolat": 50.08455,
    "geolng": 19.96229
}, {
    "date": "2019-06-28T23:34:52.663Z",
    "contactPerson": "Fern Gerlach",
    "description": "Numquam neque architecto officia ex sapiente suscipit explicabo velit in. Delectus libero labore dolor totam. Rem eos neque sunt. Rerum quis esse assumenda accusamus aut vitae ea ad. Eius vitae id et vero.",
    "phone": "1-034-150-4747",
    "email": "Makenzie.Cole64@yahoo.com",
    "status": "Do podjęcia",
    "address": "Rokicińska 142A, 92-412 Łódź",
    "geolat": 51.75865,
    "geolng": 19.55448
}, {
    "date": "2019-06-28T21:13:04.343Z",
    "contactPerson": "Darby Pagac",
    "description": "Rerum nihil placeat eum vel magnam illum in aut. Suscipit occaecati qui sed at. Eum quidem ad. Et doloribus quasi. Et dolorem in eum. Voluptatem suscipit expedita cum.",
    "phone": "821-818-4948 x90348",
    "email": "Adalberto89@gmail.com",
    "status": "Do weryfikacji",
    "address": "Legionów 16, 90-701 Łódź",
    "geolat": 51.77623,
    "geolng": 19.45076
}, {
    "date": "2019-06-28T19:45:11.704Z",
    "contactPerson": "Kacie Ankunding",
    "description": "Et voluptatem deleniti nulla sint molestiae molestiae. Quos aliquam esse fugit et quia. Placeat deserunt tempore accusamus doloremque est.",
    "phone": "1-736-352-9325",
    "email": "Eliza23@gmail.com",
    "status": "Zamknięta",
    "address": "Retkińska 117, 94-004 Łódź",
    "geolat": 51.74713,
    "geolng": 19.40538
}, {
    "date": "2019-06-28T22:58:36.844Z",
    "contactPerson": "Eliza Torphy",
    "description": "Dolores est asperiores enim. Consequuntur odio voluptas exercitationem nulla nostrum sed.",
    "phone": "1-879-736-4870",
    "email": "Arlene_Gerhold6@hotmail.com",
    "status": "Zamknięta",
    "address": "Rzgowska 169/171, 93-311 Łódź",
    "geolat": 51.72204,
    "geolng": 19.48269
}, {
    "date": "2019-06-29T14:36:37.114Z",
    "contactPerson": "Molly King",
    "description": "Excepturi officia doloribus corporis sed consectetur ipsam quas aut. Dolor libero veniam odio quaerat aut a quasi. Voluptatem sed porro deserunt aut. Est illo dolorum accusamus. Recusandae sed et. Ut iusto pariatur.",
    "phone": "471.774.0703 x3592",
    "email": "Asia4@gmail.com",
    "status": "Do podjęcia",
    "address": "Krakowska 41, 94-214 Łódź",
    "geolat": 51.77439,
    "geolng": 19.40005
}, {
    "date": "2019-06-29T11:09:46.395Z",
    "contactPerson": "Kelsi Reynolds",
    "description": "Qui unde veritatis. Aspernatur iste animi ut eius ducimus ea. Quia exercitationem illum molestiae itaque magni aperiam est. Voluptatem non blanditiis et soluta quisquam exercitationem qui. Saepe culpa at qui est placeat quos.",
    "phone": "(528) 243-1119",
    "email": "Tate.Tromp2@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Rzgowska 58A, 93-172 Łódź",
    "geolat": 51.73452,
    "geolng": 19.4714
}, {
    "date": "2019-06-29T02:46:15.067Z",
    "contactPerson": "Deshaun Ebert",
    "description": "Qui alias mollitia ullam. Et eos ducimus ducimus quam eum.",
    "phone": "1-278-573-8672 x48157",
    "email": "Dion13@hotmail.com",
    "status": "W toku",
    "address": "Plac Niepodległości 4, 93-029 Łódź",
    "geolat": 51.73928,
    "geolng": 19.4656
}, {
    "date": "2019-06-29T14:42:47.443Z",
    "contactPerson": "Samir Willms",
    "description": "Aut earum odit qui perferendis iusto ipsa. Aut ratione corrupti dolor impedit. Nemo assumenda aut ut consequatur enim aut est.",
    "phone": "065.250.9591 x758",
    "email": "Easton_Herzog74@hotmail.com",
    "status": "Zamknięta",
    "address": "Gojawiczyńskiej 58, 93-253 Łódź",
    "geolat": 51.73551,
    "geolng": 19.50619
}, {
    "date": "2019-06-29T15:09:18.741Z",
    "contactPerson": "Katelynn Dietrich",
    "description": "Dolore et voluptate non velit quam quasi ut. Maiores doloremque ut quos cum omnis animi et. A totam distinctio.",
    "phone": "991.300.3525 x40535",
    "email": "Mariano.Walker58@hotmail.com",
    "status": "Do podjęcia",
    "address": "Jana Matejki 3/5, 91-728 Łódź",
    "geolat": 51.78096,
    "geolng": 19.48484
}, {
    "date": "2019-06-29T09:09:52.307Z",
    "contactPerson": "Henry Yost",
    "description": "Harum rerum perferendis exercitationem temporibus. Impedit ut perspiciatis. Sit vitae dolores tenetur expedita vel odio delectus.",
    "phone": "1-353-639-1237 x82274",
    "email": "Spencer_Terry@yahoo.com",
    "status": "Do podjęcia",
    "address": "Zarzewska 51, 93-129 Łódź",
    "geolat": 51.74268,
    "geolng": 19.47394
}, {
    "date": "2019-06-28T17:11:10.026Z",
    "contactPerson": "Carlos Fay",
    "description": "Qui exercitationem veniam corrupti doloremque aperiam culpa est. Autem laboriosam vel tenetur. Recusandae et et impedit. Placeat voluptatibus mollitia harum sed voluptas ea non. Distinctio veniam velit minus quo neque quis nihil corrupti consequatur. Voluptatem ipsum eligendi et quibusdam.",
    "phone": "(073) 297-5581",
    "email": "Dwight86@hotmail.com",
    "status": "W toku",
    "address": "Kilińskiego 74, 90-257 Łódź",
    "geolat": 51.76702,
    "geolng": 19.46626
}, {
    "date": "2019-06-28T17:35:17.083Z",
    "contactPerson": "Reginald Mann",
    "description": "Et itaque aut voluptas necessitatibus magnam cupiditate nemo et. Et mollitia nulla consequatur sed itaque beatae laborum ea facere. Non totam ut quibusdam. Rerum odio itaque rem tenetur non consequuntur sint. Inventore rerum ut rerum alias voluptates est. Atque molestias voluptates facere iste corporis illo praesentium dolores omnis.",
    "phone": "458.004.5549 x0098",
    "email": "Justice_Stamm88@hotmail.com",
    "status": "Do podjęcia",
    "address": "Łanowa 14A, 91-103 Łódź",
    "geolat": 51.79371,
    "geolng": 19.39951
}, {
    "date": "2019-06-29T02:20:40.138Z",
    "contactPerson": "Sherman Bernhard",
    "description": "Neque ex minima qui sed ut accusamus. Esse id voluptatem enim unde nesciunt dolore incidunt qui. Sequi consequatur aut perspiciatis similique. Temporibus beatae cum illum sit voluptates ullam doloribus blanditiis.",
    "phone": "089-721-6447",
    "email": "Mauricio.Connelly@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Aleksandrowska 63/65, 91-224 Łódź",
    "geolat": 51.79923,
    "geolng": 19.39035
}, {
    "date": "2019-06-29T05:42:52.335Z",
    "contactPerson": "Baby Eichmann",
    "description": "Voluptatem corporis iste omnis dicta repudiandae. In harum facere magnam nemo. Est optio omnis magnam dolorum animi.",
    "phone": "352-256-7924 x86866",
    "email": "Katheryn_Price36@yahoo.com",
    "status": "Zamknięta",
    "address": "al. Mickiewicza 15A, 90-063 Łódź",
    "geolat": 51.75863,
    "geolng": 19.45677
}, {
    "date": "2019-06-29T10:33:00.399Z",
    "contactPerson": "Wava Hyatt",
    "description": "Est voluptatem ut. Pariatur natus et. Dignissimos explicabo distinctio aperiam est vitae nemo. Odit voluptatem eius voluptates non. Sint impedit sunt quis et ut velit. Vero quo vero omnis nisi.",
    "phone": "1-429-680-2839 x994",
    "email": "Keven_Zulauf@hotmail.com",
    "status": "Do podjęcia",
    "address": "Limanowskiego 2, 91-445 Łódź",
    "geolat": 51.78662,
    "geolng": 19.45146
}, {
    "date": "2019-06-29T00:09:54.720Z",
    "contactPerson": "Sarai Gleichner",
    "description": "Eos nulla enim expedita et nostrum eum. Cumque eaque enim est perferendis dignissimos voluptatem eos ab dignissimos. Vel doloremque voluptate ullam quas totam magnam laboriosam. Asperiores provident velit. Voluptas ullam ullam saepe dolores consectetur quo atque sit.",
    "phone": "1-425-520-9706 x451",
    "email": "Monserrat_Schaden@gmail.com",
    "status": "Do weryfikacji",
    "address": "Rokicińska 367, 92-614 Łódź",
    "geolat": 51.73715,
    "geolng": 19.61776
}, {
    "date": "2019-06-29T03:35:36.730Z",
    "contactPerson": "Gerry Anderson",
    "description": "Et totam unde quidem. Blanditiis autem dolor et corrupti voluptas rerum qui. Ratione illum impedit. Quidem eos ipsam.",
    "phone": "1-646-801-9245 x569",
    "email": "Skye.OHara@gmail.com",
    "status": "W toku",
    "address": "al. Mickiewicza 7, 90-443 Łódź",
    "geolat": 51.75773,
    "geolng": 19.45127
}, {
    "date": "2019-06-29T13:29:39.324Z",
    "contactPerson": "Lloyd Johnston",
    "description": "Beatae velit porro omnis ducimus omnis voluptas. Sequi optio repellendus occaecati. Eaque provident fugiat tempore placeat explicabo. Inventore et voluptatem voluptas commodi repudiandae in labore eum voluptatibus. Optio accusantium suscipit. Velit provident sit.",
    "phone": "1-205-703-1832",
    "email": "Maynard77@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Włókniarzy 50, 91-348 Łódź",
    "geolat": 51.80047,
    "geolng": 19.42537
}, {
    "date": "2019-06-28T19:45:20.510Z",
    "contactPerson": "Jay Stracke",
    "description": "Sed cupiditate cumque laudantium rerum commodi placeat. Eius sit temporibus est sapiente repellendus laboriosam odit delectus quisquam. At eveniet voluptatem sed quidem qui. Accusamus nobis non quo repudiandae minus. Quia cum nobis iusto et ut sed odio perferendis. Quo molestiae debitis harum distinctio.",
    "phone": "621-523-0029",
    "email": "Zakary_Orn95@yahoo.com",
    "status": "Zamknięta",
    "address": "Rzgowska 196, 93-317 Łódź",
    "geolat": 51.71763,
    "geolng": 19.4858
}, {
    "date": "2019-06-29T04:53:54.964Z",
    "contactPerson": "Easter Friesen",
    "description": "Quaerat qui excepturi laudantium est pariatur est minima. Assumenda fuga neque repudiandae ex nihil et. Fuga facere debitis dolore velit veniam veritatis saepe quidem. At dolorem numquam est est rerum itaque hic sed. Vitae dolores quia iure unde ratione quisquam repellat nobis unde. Alias voluptatem explicabo ut at ut cum eos est blanditiis.",
    "phone": "616-447-8078 x495",
    "email": "Kasandra_Kunde22@gmail.com",
    "status": "Do weryfikacji",
    "address": "Kasprzaka 8, 91-083 Łódź",
    "geolat": 51.77259,
    "geolng": 19.42468
}, {
    "date": "2019-06-28T20:46:20.371Z",
    "contactPerson": "Aurore Nader",
    "description": "Reiciendis et odit labore est enim sit nemo provident facere. Ut omnis nesciunt occaecati esse. Aut nemo dolor eos similique. Eum perferendis at occaecati commodi atque quia.",
    "phone": "1-997-966-0384 x596",
    "email": "Onie_Breitenberg53@hotmail.com",
    "status": "Do podjęcia",
    "address": "Brzezińska 88, 92-118 Łódź",
    "geolat": 51.79615,
    "geolng": 19.53448
}, {
    "date": "2019-06-28T19:02:22.801Z",
    "contactPerson": "Elliot Becker",
    "description": "Et itaque amet autem. Quia placeat laborum. Quisquam tempore ipsa atque dolor. Qui iure tempora in vitae magnam pariatur. Id aliquid veniam autem earum animi officia enim esse recusandae. Alias omnis in eligendi.",
    "phone": "440-548-2931 x64444",
    "email": "Luna74@gmail.com",
    "status": "Do weryfikacji",
    "address": "Chałubińskiego 20, 92-109 Łódź",
    "geolat": 51.7912,
    "geolng": 19.52472
}, {
    "date": "2019-06-28T19:25:13.123Z",
    "contactPerson": "Sandy Ryan",
    "description": "Est ipsam qui qui voluptatem velit ea nihil repudiandae sit. Quas quas cupiditate doloribus. Quo error beatae maxime. Consequuntur velit dolorem placeat quis. Libero voluptate commodi.",
    "phone": "746.202.3841",
    "email": "Sylvan_DuBuque@hotmail.com",
    "status": "Zamknięta",
    "address": "Gdańska 131/133, 90-519 Łódź",
    "geolat": 51.75901,
    "geolng": 19.45034
}, {
    "date": "2019-06-29T06:44:35.344Z",
    "contactPerson": "Claudie Cassin",
    "description": "Expedita sunt qui sit ea. Aperiam harum quo. Rem facere tenetur error eos.",
    "phone": "456.151.8180 x494",
    "email": "Billie8@hotmail.com",
    "status": "Do podjęcia",
    "address": "Traktorowa 5, 91-116 Łódź",
    "geolat": 51.78352,
    "geolng": 19.39198
}, {
    "date": "2019-06-29T06:23:32.715Z",
    "contactPerson": "Isidro Dare",
    "description": "Et adipisci qui totam quia. Voluptatem voluptatum autem voluptas eaque quo officiis molestiae aut. Deserunt exercitationem a aliquam beatae eum animi nostrum perferendis vel. Deserunt expedita et reiciendis praesentium voluptatem iusto aut optio. Consequatur sed laboriosam. In fuga distinctio quis.",
    "phone": "602.121.2027 x5998",
    "email": "Darrell_Hammes99@hotmail.com",
    "status": "Do podjęcia",
    "address": "Nowy Józefów 57, 94-406 Łódź",
    "geolat": 51.73566,
    "geolng": 19.36441
}, {
    "date": "2019-06-29T11:54:15.403Z",
    "contactPerson": "Laurianne Stokes",
    "description": "Distinctio voluptatem reiciendis qui hic nesciunt molestias. Nulla quibusdam cum quia eum qui illum asperiores. Molestiae mollitia voluptatem perferendis possimus repudiandae totam. Ea labore consequatur harum culpa mollitia iure rerum iure.",
    "phone": "1-550-156-6916 x952",
    "email": "Anastacio_Crooks@hotmail.com",
    "status": "Do podjęcia",
    "address": "Złotno 7, 94-221 Łódź",
    "geolat": 51.78015,
    "geolng": 19.39639
}, {
    "date": "2019-06-28T23:59:41.711Z",
    "contactPerson": "Yvette Grant",
    "description": "Aut illo reiciendis iste rerum. Unde nobis inventore tenetur dolore nemo. Eum iste voluptatem aliquid praesentium dolor consequuntur aperiam. Quo cumque molestiae recusandae quae. Earum minima aut qui ut perspiciatis voluptates voluptatem facilis aperiam.",
    "phone": "018.592.9737",
    "email": "Stephanie.DuBuque@gmail.com",
    "status": "Do weryfikacji",
    "address": "Tuszyńska 35, 93-020 Łódź",
    "geolat": 51.72936,
    "geolng": 19.46889
}, {
    "date": "2019-06-29T15:16:45.449Z",
    "contactPerson": "Mellie Gorczany",
    "description": "Sapiente amet ut fugiat voluptas perferendis illum quod ut dolorem. Dolorum inventore ratione et. Animi consectetur suscipit earum eaque quia voluptas. Et eveniet aperiam optio id. Nobis fugit quidem debitis ea.",
    "phone": "951.244.4274",
    "email": "Demario.Frami@gmail.com",
    "status": "W toku",
    "address": "Sterlinga 27, 90-212 Łódź",
    "geolat": 51.77483,
    "geolng": 19.46928
}, {
    "date": "2019-06-29T07:41:47.095Z",
    "contactPerson": "Meaghan Parker",
    "description": "Nulla fugiat quo ab est atque. Et quaerat sed cupiditate aut numquam necessitatibus excepturi. Vitae nesciunt numquam quia nisi consequatur asperiores et quia. Qui est modi hic.",
    "phone": "1-018-934-6191 x278",
    "email": "Shanelle_Carter@gmail.com",
    "status": "Do weryfikacji",
    "address": "Strykowska 13, 91-725 Łódź",
    "geolat": 51.79465,
    "geolng": 19.48897
}, {
    "date": "2019-06-28T20:59:54.567Z",
    "contactPerson": "Toni Gaylord",
    "description": "Quaerat molestiae nostrum quo voluptatem eum ut rerum. Perferendis nihil ut. Dolor id laborum magni aut temporibus corrupti qui officia.",
    "phone": "059-790-6134 x33665",
    "email": "Nigel.Little98@hotmail.com",
    "status": "Do podjęcia",
    "address": "Zgierska 31/33, 91-446 Łódź",
    "geolat": 51.78767,
    "geolng": 19.45196
}, {
    "date": "2019-06-29T00:23:27.411Z",
    "contactPerson": "Vanessa Connelly",
    "description": "Eaque culpa ipsum natus porro tempore. Doloremque soluta nesciunt.",
    "phone": "1-013-401-3204",
    "email": "Laila.Bogan4@gmail.com",
    "status": "Do podjęcia",
    "address": "Pabianicka 274, 93-457 Łódź",
    "geolat": 51.70269,
    "geolng": 19.4194
}, {
    "date": "2019-06-29T10:58:48.880Z",
    "contactPerson": "Juliet Heidenreich",
    "description": "Tempora et molestias esse impedit. Vitae consectetur labore. Excepturi asperiores dolor possimus. Occaecati qui commodi. Libero et facilis labore est. Est quia sed sit.",
    "phone": "1-841-481-1417",
    "email": "Dina_Durgan@gmail.com",
    "status": "Do weryfikacji",
    "address": "Tuszyńska 22, 93-011 Łódź",
    "geolat": 51.73106,
    "geolng": 19.46807
}, {
    "date": "2019-06-29T11:36:26.719Z",
    "contactPerson": "Myrna Schuster",
    "description": "Omnis perferendis quidem natus et et asperiores quibusdam illum omnis. Quibusdam aut repellendus ut ullam eum hic. Fuga excepturi id tempora rerum facere est saepe. Et porro perspiciatis quia beatae consectetur ab enim et. Ipsum voluptas maiores sequi sequi rem sapiente exercitationem officiis. Omnis quas voluptatem.",
    "phone": "562.830.2776",
    "email": "Aniyah_Tremblay@hotmail.com",
    "status": "Zamknięta",
    "address": "Świętojańska 4, 93-493 Łódź",
    "geolat": 51.71848,
    "geolng": 19.4359
}, {
    "date": "2019-06-29T15:46:08.824Z",
    "contactPerson": "Damian Beatty",
    "description": "Ea qui rerum tempora ex. Excepturi nesciunt qui repellendus. Sequi fuga recusandae dolore excepturi aut molestias.",
    "phone": "453.882.1960",
    "email": "Sophie81@hotmail.com",
    "status": "Do weryfikacji",
    "address": "al. Mickiewicza / Łąkowa 54, 90-554 Łódź",
    "geolat": 51.75651,
    "geolng": 19.43753
}, {
    "date": "2019-06-28T21:21:56.329Z",
    "contactPerson": "Retta DuBuque",
    "description": "Vitae minus fuga sint quaerat exercitationem non ullam alias. Alias eveniet debitis possimus. Dolore eum explicabo quos. Ut magnam voluptas impedit omnis.",
    "phone": "431.609.0233",
    "email": "Ozella.Goyette@gmail.com",
    "status": "W toku",
    "address": "Łagiewnicka 29, 91-839 Łódź",
    "geolat": 51.7879,
    "geolng": 19.45488
}, {
    "date": "2019-06-29T00:52:00.484Z",
    "contactPerson": "Louie Kunde",
    "description": "Non voluptatem a debitis consectetur dolorum mollitia voluptatibus nemo. Odio ipsam voluptatibus est laboriosam autem qui in enim. Iste at praesentium dolores molestiae incidunt dolore consequatur sed. Sit quaerat in magnam molestiae rerum dolores dolorem.",
    "phone": "(463) 231-9844 x799",
    "email": "Freda_Hickle50@gmail.com",
    "status": "Do weryfikacji",
    "address": "Tomasza Zana 3, 91-088 Łódź",
    "geolat": 51.7794,
    "geolng": 19.42065
}, {
    "date": "2019-06-29T02:36:08.786Z",
    "contactPerson": "Tressa Roob",
    "description": "Omnis qui aut. Ex eum similique maxime laudantium autem enim ut voluptatem. Illum quisquam ipsa quis optio. Inventore porro enim sint velit suscipit est. Expedita sed quia voluptatum sit dolorem in sunt repudiandae.",
    "phone": "1-883-283-0768",
    "email": "Kira_Tremblay@yahoo.com",
    "status": "Do podjęcia",
    "address": "Al Politechniki 1-3, 93-590 Łódź",
    "geolat": 51.7516,
    "geolng": 19.44887
}, {
    "date": "2019-06-29T06:49:29.989Z",
    "contactPerson": "Karl Goyette",
    "description": "Non eligendi aut. Illum numquam asperiores numquam. Quaerat laudantium omnis amet. Dolores minima ipsum molestias sunt numquam eos. Unde ut voluptas et molestias illo et consectetur provident. Placeat at nihil optio ipsa non velit eligendi a distinctio.",
    "phone": "(716) 392-4042 x9160",
    "email": "Beth_Reichert@gmail.com",
    "status": "Do weryfikacji",
    "address": "Piłsudskiego 73, 90-332 Łódź",
    "geolat": 51.76034,
    "geolng": 19.48535
}, {
    "date": "2019-06-28T21:30:23.581Z",
    "contactPerson": "Carmen Medhurst",
    "description": "Ad deserunt voluptas inventore sit aut animi animi rerum recusandae. Nihil voluptas laudantium assumenda voluptas aut cumque provident. Sunt omnis qui. Sit sequi fugit eos facilis recusandae libero eos fuga.",
    "phone": "311.706.1100",
    "email": "Mohammed_Raynor@hotmail.com",
    "status": "W toku",
    "address": "Adamieckiego 16, 92-305 Łódź",
    "geolat": 51.76123,
    "geolng": 19.53925
}, {
    "date": "2019-06-29T01:34:45.760Z",
    "contactPerson": "Dejuan Thompson",
    "description": "Dolorum officia asperiores ea qui eligendi voluptatem provident. A dolor velit molestiae. Velit reprehenderit accusantium sit.",
    "phone": "620-505-3389",
    "email": "Marta_Langworth@yahoo.com",
    "status": "W toku",
    "address": "Zgierska 221, 91-496 Łódź",
    "geolat": 51.82024,
    "geolng": 19.43302
}, {
    "date": "2019-06-28T21:53:54.256Z",
    "contactPerson": "Leland Rogahn",
    "description": "Vel in consequatur voluptates natus aut soluta. Fugiat ullam soluta non voluptas ipsa rem occaecati doloremque architecto.",
    "phone": "429-606-2812",
    "email": "Sheridan_Kuhlman41@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Naruszewicza 2, 93-155 Łódź",
    "geolat": 51.73128,
    "geolng": 19.47933
}, {
    "date": "2019-06-28T17:31:01.090Z",
    "contactPerson": "Jeffery Swift",
    "description": "Ea et repellendus veritatis voluptatem sit minima autem. Soluta et omnis dicta nemo maxime omnis. In ducimus ut est quis sed. Asperiores libero suscipit ut. Ea sit sit.",
    "phone": "692-519-5463 x55668",
    "email": "Ike_Wiegand28@yahoo.com",
    "status": "W toku",
    "address": "Jana Kilińskiego 298, 93-160 Łódź",
    "geolat": 51.73595,
    "geolng": 19.48031
}, {
    "date": "2019-06-29T06:53:55.177Z",
    "contactPerson": "Janice Haley",
    "description": "Mollitia cupiditate exercitationem. Sit voluptas et rerum qui quibusdam delectus nihil et sapiente.",
    "phone": "(143) 435-5704 x470",
    "email": "Nelda_Doyle@hotmail.com",
    "status": "Do podjęcia",
    "address": "Tatrzańska 109 A, 93-239 Łódź",
    "geolat": 51.73616,
    "geolng": 19.49398
}, {
    "date": "2019-06-29T03:47:22.540Z",
    "contactPerson": "Euna Bartoletti",
    "description": "Et at rerum labore corrupti veritatis aut qui. Porro nulla veritatis. Vel qui dolore. Temporibus unde ducimus ullam ea nesciunt ipsam placeat quam.",
    "phone": "111-748-7452 x949",
    "email": "Allen.Lehner36@hotmail.com",
    "status": "Zamknięta",
    "address": "Zgierska 229, 91-496 Łódź",
    "geolat": 51.82229,
    "geolng": 19.43108
}, {
    "date": "2019-06-28T17:34:01.617Z",
    "contactPerson": "Michale Jacobi",
    "description": "Autem repellendus fugit blanditiis numquam iusto repudiandae cupiditate. Hic nam fugit numquam illo ipsa ratione rerum est. Consequatur voluptas nihil consectetur consequuntur. Sed similique quia laborum praesentium est pariatur. Magni et sit voluptatem dolor temporibus voluptate qui amet.",
    "phone": "(280) 342-3686 x194",
    "email": "Chaim.Bauch51@hotmail.com",
    "status": "Zamknięta",
    "address": "Armii Krajowej 33, 94-046 Łódź",
    "geolat": 51.74416,
    "geolng": 19.40048
}, {
    "date": "2019-06-29T15:10:24.509Z",
    "contactPerson": "Jadyn Huel",
    "description": "Eius laudantium quia eligendi tempora corporis unde quam. Aspernatur dignissimos corporis nulla hic placeat.",
    "phone": "563-464-8100",
    "email": "Alda71@gmail.com",
    "status": "Do podjęcia",
    "address": "Łagiewnicka 54, 91-463 Łódź",
    "geolat": 51.79223,
    "geolng": 19.45474
}, {
    "date": "2019-06-28T17:30:03.447Z",
    "contactPerson": "Tony Gorczany",
    "description": "Quia perferendis aut et alias illo incidunt aut cumque facilis. Nihil omnis amet voluptatem mollitia architecto tempora aut nobis et. Quisquam eum id. Voluptatibus et et autem. Sunt repellat beatae hic doloremque est velit quam quisquam quae. Aut excepturi neque fuga.",
    "phone": "523.667.0215 x75448",
    "email": "Leonie82@yahoo.com",
    "status": "Do podjęcia",
    "address": "Armii Krajowej 37, 94-046 Łódź",
    "geolat": 51.74543,
    "geolng": 19.39917
}, {
    "date": "2019-06-29T11:36:44.369Z",
    "contactPerson": "Howard Ryan",
    "description": "Sint non nesciunt. Et aliquid qui ipsa qui.",
    "phone": "(484) 508-7751 x7499",
    "email": "Dannie.Schaefer71@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Maratońska 24/32, 94-102 Łódź",
    "geolat": 51.74082,
    "geolng": 19.40564
}, {
    "date": "2019-06-28T21:48:55.357Z",
    "contactPerson": "Melba Walker",
    "description": "Est sit ab ex dignissimos omnis in maxime repellendus. Mollitia nihil cupiditate. Aut sunt non eos qui quia dolorem laborum eius reiciendis.",
    "phone": "(648) 465-1986 x9085",
    "email": "Regan.Durgan@hotmail.com",
    "status": "Do weryfikacji",
    "address": "al. Piłsudskiego 82, 92-202 Łódź",
    "geolat": 51.76257,
    "geolng": 19.48838
}, {
    "date": "2019-06-29T03:36:31.066Z",
    "contactPerson": "Orlando Senger",
    "description": "Ut voluptatibus dolor iure facilis. Perferendis sed nisi vel hic.",
    "phone": "(752) 647-6890",
    "email": "Jack.Kuhlman@yahoo.com",
    "status": "Zamknięta",
    "address": "Janosika 70, 92-102 Łódź",
    "geolat": 51.78316,
    "geolng": 19.52186
}, {
    "date": "2019-06-29T05:46:43.090Z",
    "contactPerson": "Carey Farrell",
    "description": "Qui nemo consequatur. Earum perspiciatis velit earum quibusdam. Voluptate consequuntur ad omnis eos consequatur eos. Ipsa saepe qui voluptatibus unde amet eos quibusdam enim qui. Placeat eos id nostrum eius autem qui molestiae ut quia. Culpa totam deserunt numquam.",
    "phone": "902.505.3920",
    "email": "Pauline_Jaskolski65@hotmail.com",
    "status": "W toku",
    "address": "Dąbrowskiego 15B, 93-177 Łódź",
    "geolat": 51.73816,
    "geolng": 19.47619
}, {
    "date": "2019-06-29T13:56:27.090Z",
    "contactPerson": "Irving O'Keefe",
    "description": "Odit qui inventore voluptatem vel rem. Unde et ut sed explicabo molestiae at quis.",
    "phone": "074-343-3994 x1338",
    "email": "Felicita.Veum@gmail.com",
    "status": "Zamknięta",
    "address": "Zgierska 104A, 91-305 Łódź",
    "geolat": 51.79186,
    "geolng": 19.44598
}, {
    "date": "2019-06-28T22:17:09.692Z",
    "contactPerson": "Keith Ledner",
    "description": "Velit temporibus omnis sunt. Rerum unde eum qui earum sunt a temporibus.",
    "phone": "485.242.4117 x49490",
    "email": "Darion_Willms@gmail.com",
    "status": "Do podjęcia",
    "address": "Świtezianki 16, 91-495 Łódź",
    "geolat": 51.82456,
    "geolng": 19.43583
}, {
    "date": "2019-06-29T12:48:59.730Z",
    "contactPerson": "Zora Beahan",
    "description": "Id deleniti recusandae impedit. Quia doloremque laudantium ipsum qui ab. Optio praesentium quia. Commodi non veritatis. Tenetur sunt sed error perspiciatis. Non sunt ut qui beatae beatae occaecati.",
    "phone": "(284) 237-1548 x68469",
    "email": "Agustina.Brekke@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kurczaki 57, 93-331 Łódź",
    "geolat": 51.71941,
    "geolng": 19.49655
}, {
    "date": "2019-06-29T01:03:39.051Z",
    "contactPerson": "Ettie Hilll",
    "description": "Sed tenetur porro est ut. Eos architecto tempore velit quis dolores laboriosam sed. Id illo est delectus sunt non voluptatem ea alias aut. Officiis quo qui officia.",
    "phone": "446-661-5079 x9990",
    "email": "Frieda_Kshlerin88@hotmail.com",
    "status": "W toku",
    "address": "Składowa 35, 90-127 Łódź",
    "geolat": 51.77066,
    "geolng": 19.4712
}, {
    "date": "2019-06-28T17:20:47.772Z",
    "contactPerson": "Breanne Rice",
    "description": "Rem dolorum eum omnis dolores alias nulla ex eos. Est ipsam impedit. Quia maiores et molestiae nostrum qui nulla. Odio aut alias cupiditate quos quibusdam. Corporis maiores officia est dolorum dolore architecto deleniti numquam dolores.",
    "phone": "382.368.9758",
    "email": "Nella.Gutmann@yahoo.com",
    "status": "W toku",
    "address": "Grabieniec 28, 91-149 Łódź",
    "geolat": 51.79732,
    "geolng": 19.3902
}, {
    "date": "2019-06-28T19:33:06.745Z",
    "contactPerson": "Roberto Jenkins",
    "description": "Saepe est quisquam. Ad debitis exercitationem unde alias similique. Magni provident ipsam omnis officiis reprehenderit dicta. Facere numquam ut repellat iste provident enim odio. Id autem sit rerum vel voluptatibus est. Vero quidem qui.",
    "phone": "(608) 034-4295",
    "email": "Thelma_Collins@hotmail.com",
    "status": "Do podjęcia",
    "address": "Piłsudskiego 94, 92-202 Łódź",
    "geolat": 51.76455,
    "geolng": 19.49651
}, {
    "date": "2019-06-29T05:49:07.427Z",
    "contactPerson": "Olen Hills",
    "description": "Itaque et hic atque cum sequi iure accusantium doloribus perferendis. Provident voluptatibus quae et ut eaque a sunt.",
    "phone": "1-141-721-5771 x22492",
    "email": "Eric.Rogahn@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bandurskiego 49, 94-020 Łódź",
    "geolat": 51.75252,
    "geolng": 19.41942
}, {
    "date": "2019-06-28T22:51:53.925Z",
    "contactPerson": "Keith Wilderman",
    "description": "Facilis sint facilis quibusdam eligendi velit quos rem fugit nihil. Est ut est cupiditate.",
    "phone": "1-372-657-6244 x798",
    "email": "Roberta_Morissette@yahoo.com",
    "status": "Zamknięta",
    "address": "Kolumny 6/36, 93-338 Łódź",
    "geolat": 51.71039,
    "geolng": 19.49061
}, {
    "date": "2019-06-29T09:18:02.250Z",
    "contactPerson": "Janet Jacobs",
    "description": "Aut voluptate autem quidem voluptas hic aut voluptatem voluptatibus. Iure alias excepturi laboriosam magnam nobis sed. Ullam nostrum dolor facere ab accusantium et dolorem. Nemo delectus qui beatae velit.",
    "phone": "686.487.8228",
    "email": "Clemens_Murray@gmail.com",
    "status": "Do podjęcia",
    "address": "Jana Karskiego 5, 91-071 Łódź",
    "geolat": 51.7798,
    "geolng": 19.44504
}, {
    "date": "2019-06-29T04:05:21.273Z",
    "contactPerson": "Lexie Padberg",
    "description": "Praesentium dicta architecto saepe enim. Numquam doloremque sapiente placeat aut dolorem. A explicabo delectus occaecati. Vel dicta tenetur qui provident nam sit.",
    "phone": "1-640-412-1664 x087",
    "email": "Missouri60@hotmail.com",
    "status": "W toku",
    "address": "Tylna 5, 90-348 Łódź",
    "geolat": 51.75217,
    "geolng": 19.46967
}, {
    "date": "2019-06-28T17:40:33.456Z",
    "contactPerson": "Deondre Hoeger",
    "description": "Et est alias eligendi laborum mollitia. Aliquid incidunt officia id quia.",
    "phone": "1-117-284-3454",
    "email": "Damion.Robel@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Pabianicka 59, 93-548 Łódź",
    "geolat": 51.72781,
    "geolng": 19.44748
}, {
    "date": "2019-06-29T02:41:18.061Z",
    "contactPerson": "Stuart Schultz",
    "description": "Placeat ipsa sed eum aut. Eaque ipsa eligendi et enim ut et sint. Asperiores illo tempora sunt rerum. Deleniti facilis excepturi in. Est non quasi dolores rerum eligendi pariatur voluptatibus.",
    "phone": "963-131-6261 x01163",
    "email": "Reva82@yahoo.com",
    "status": "Do podjęcia",
    "address": "Czarnkowska 2A, 91-013 Łódź",
    "geolat": 51.78473,
    "geolng": 19.43727
}, {
    "date": "2019-06-29T02:26:41.450Z",
    "contactPerson": "Albina Mayert",
    "description": "Libero aut ullam illum magnam aut aut voluptatibus officia autem. Nostrum tempora pariatur omnis quae veritatis laborum officiis aut. Aut est delectus earum unde. Qui tempore quibusdam quos laboriosam. Sunt ipsum libero.",
    "phone": "448.665.5136",
    "email": "Kobe86@gmail.com",
    "status": "W toku",
    "address": "Inflancka 37, 91-848 Łódź",
    "geolat": 51.80025,
    "geolng": 19.46767
}, {
    "date": "2019-06-28T16:58:03.738Z",
    "contactPerson": "Felipe Stark",
    "description": "Temporibus mollitia eveniet dolores ea ea. Atque nam officia et sed et veritatis. Quis a voluptatem blanditiis optio aut sint. Dolores aliquid dolorem perspiciatis consequatur quo delectus hic. Nemo quia est at sed qui quo delectus.",
    "phone": "725-708-2976",
    "email": "Hershel58@hotmail.com",
    "status": "Do podjęcia",
    "address": "Gdańska 81, 90-613 Łódź",
    "geolat": 51.7665,
    "geolng": 19.44861
}, {
    "date": "2019-06-28T18:51:46.589Z",
    "contactPerson": "Lillie Oberbrunner",
    "description": "Exercitationem eius quia ut velit et hic adipisci autem quos. Laudantium qui sint dolore nobis ut odio cumque esse non.",
    "phone": "796.392.0124",
    "email": "Marina.Marvin@hotmail.com",
    "status": "Do podjęcia",
    "address": "Widzewska 22, 92-308 Łódź",
    "geolat": 51.76041,
    "geolng": 19.51848
}, {
    "date": "2019-06-28T19:07:59.450Z",
    "contactPerson": "Aric Homenick",
    "description": "Nihil veniam temporibus omnis officiis deserunt. Ut itaque quia repellendus recusandae magnam iste eius. Quo dolor aut perferendis eum esse. Eos odio architecto perferendis est asperiores enim odit. Sint cumque sit provident quidem est.",
    "phone": "(816) 450-3793",
    "email": "Jamil.King14@gmail.com",
    "status": "Do podjęcia",
    "address": "Piotrkowska 217, 90-451 Łódź",
    "geolat": 51.75365,
    "geolng": 19.45957
}, {
    "date": "2019-06-29T10:05:07.848Z",
    "contactPerson": "Madisyn Bechtelar",
    "description": "Illum perspiciatis qui est minus quod quia suscipit. Ipsum unde voluptatem unde animi sed aut magnam sequi. Animi ullam non sint et pariatur dolorem dicta. Quod delectus alias voluptatem fugiat nobis distinctio nulla. Eius ea sed id. Ab tempora quod.",
    "phone": "(368) 033-9215 x8774",
    "email": "Zaria90@hotmail.com",
    "status": "W toku",
    "address": "Walerego Wróblewskiego 68, 94-035 Łódź",
    "geolat": 51.7445,
    "geolng": 19.43869
}, {
    "date": "2019-06-28T20:37:29.654Z",
    "contactPerson": "Morris Marks",
    "description": "Ipsam adipisci ad et vero vero. Optio aperiam praesentium nostrum. Aspernatur velit magni et sit. Itaque quam sunt in quasi. Rem consequatur aliquid quisquam natus. Qui autem iusto tempore.",
    "phone": "300.032.5167 x6927",
    "email": "Derek.Pfeffer@hotmail.com",
    "status": "Zamknięta",
    "address": "Inflancka 45/1, 91-852 Łódź",
    "geolat": 51.79935,
    "geolng": 19.46946
}, {
    "date": "2019-06-29T06:47:20.447Z",
    "contactPerson": "Allie Crooks",
    "description": "Porro distinctio aut ratione labore delectus aut praesentium. Possimus omnis libero sunt sit sunt aspernatur.",
    "phone": "268-737-0533",
    "email": "Lily_Flatley@gmail.com",
    "status": "W toku",
    "address": "Wyszyńskiego 29, 94-048 Łódź",
    "geolat": 51.7464,
    "geolng": 19.39715
}, {
    "date": "2019-06-29T13:18:05.322Z",
    "contactPerson": "Cornelius Schoen",
    "description": "Qui eligendi labore voluptas cupiditate veritatis dolorem facere amet. Ducimus sed in quasi. Magnam atque beatae mollitia consequatur. Cumque rerum voluptatem omnis quis enim voluptates voluptas maiores. Doloribus eaque optio hic nulla optio sed aut.",
    "phone": "175-444-0017",
    "email": "Marlee53@yahoo.com",
    "status": "Zamknięta",
    "address": "al. Jana Pawła II 30, 93-570 Łódź",
    "geolat": 51.74982,
    "geolng": 19.43936
}, {
    "date": "2019-06-28T21:37:33.693Z",
    "contactPerson": "Angel Schaden",
    "description": "Vel similique blanditiis repellendus quo delectus. Molestiae nam officia laudantium et rem necessitatibus. Et accusamus aliquam temporibus ad et et qui quis sit. Et aut repellendus tempora voluptas est. Eum aut numquam. Consequatur recusandae accusantium in aut.",
    "phone": "942.380.0823",
    "email": "Ford.Jacobson69@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kossaka 5A, 93-213 Łódź",
    "geolat": 51.74066,
    "geolng": 19.50005
}, {
    "date": "2019-06-28T20:28:39.854Z",
    "contactPerson": "Ernie Jacobs",
    "description": "Aut suscipit maiores modi eius eaque veritatis exercitationem saepe et. Sint magni officiis dolor. Cum et laborum sed voluptas alias porro. Qui dolores debitis nostrum harum est atque itaque voluptas. Eum vel reiciendis ipsa.",
    "phone": "1-634-067-0193 x8265",
    "email": "Delmer.Schuster92@yahoo.com",
    "status": "Do podjęcia",
    "address": "Przybyszewskiego 176/178, 93-120 Łódź",
    "geolat": 51.75149,
    "geolng": 19.50201
}, {
    "date": "2019-06-29T02:43:23.169Z",
    "contactPerson": "Lavern Fisher",
    "description": "Earum quas reprehenderit magnam. Labore omnis nihil.",
    "phone": "(135) 447-2288 x853",
    "email": "Evan_Schiller@hotmail.com",
    "status": "Zamknięta",
    "address": "Złotno 60-62, 94-221 Łódź",
    "geolat": 51.77812,
    "geolng": 19.38812
}, {
    "date": "2019-06-28T21:13:17.716Z",
    "contactPerson": "Karli Maggio",
    "description": "Cupiditate est quo in. Iste praesentium at consectetur voluptates quibusdam quia suscipit. Voluptas ullam enim nobis optio aut. Ipsa vel repellat voluptate sequi est qui voluptas.",
    "phone": "976.420.8074 x981",
    "email": "Ramon.Jaskolski@gmail.com",
    "status": "Do podjęcia",
    "address": "Szparagowa 7, 91-211 Łódź",
    "geolat": 51.80413,
    "geolng": 19.37976
}, {
    "date": "2019-06-29T03:21:32.543Z",
    "contactPerson": "Mara Willms",
    "description": "Sit quibusdam ut architecto praesentium sed. Unde nisi quae iusto quasi sit necessitatibus maiores blanditiis molestiae. Eos aliquid maiores aut quia cupiditate est minus.",
    "phone": "647.180.1555",
    "email": "Marlon.Roberts@yahoo.com",
    "status": "Zamknięta",
    "address": "Wielkopolska 58, 91-026 Łódź",
    "geolat": 51.79058,
    "geolng": 19.41787
}, {
    "date": "2019-06-29T02:41:52.209Z",
    "contactPerson": "Adelia Mraz",
    "description": "Tempore doloribus quibusdam iste ut et ut rerum. Accusantium quo deleniti nihil tenetur est. Impedit ullam et impedit et a. Quia quidem laborum et ea aperiam deleniti aut qui minima. Occaecati quidem officia.",
    "phone": "477-004-4157",
    "email": "Davin.Heller83@hotmail.com",
    "status": "W toku",
    "address": "Opolczyka 17, 92-414 Łódź",
    "geolat": 51.73933,
    "geolng": 19.56962
}, {
    "date": "2019-06-29T08:29:19.212Z",
    "contactPerson": "Curtis Mohr",
    "description": "Voluptas in nihil. Nihil ut recusandae alias aut aspernatur. Eius natus quibusdam cupiditate provident repellat cumque. Doloribus at id dolor voluptatibus sit harum sed voluptatem.",
    "phone": "(994) 801-9539",
    "email": "Rickie_Lebsack@hotmail.com",
    "status": "W toku",
    "address": "Dylika 2/6, 91-169 Łódź",
    "geolat": 51.79411,
    "geolng": 19.3697
}, {
    "date": "2019-06-29T05:37:42.285Z",
    "contactPerson": "Luella Medhurst",
    "description": "Voluptas repellendus consequatur omnis incidunt. Eum architecto qui fugit quae.",
    "phone": "760.356.5116",
    "email": "Kobe2@gmail.com",
    "status": "W toku",
    "address": "Bratysławska 5, 94-032 Łódź",
    "geolat": 51.74901,
    "geolng": 19.42219
}, {
    "date": "2019-06-28T16:49:55.310Z",
    "contactPerson": "Otis Batz",
    "description": "Maiores voluptas qui eum doloremque sit quis soluta molestiae beatae. Excepturi voluptas et voluptatem aut. Sint fugit quia neque non asperiores quis ab.",
    "phone": "929.446.4820",
    "email": "Ralph41@gmail.com",
    "status": "W toku",
    "address": "Pojezierska 93, 91-341 Łódź",
    "geolat": 51.80113,
    "geolng": 19.42189
}, {
    "date": "2019-06-28T19:41:48.933Z",
    "contactPerson": "Assunta Carroll",
    "description": "Animi amet velit dolores qui est sit non rerum. Aut et iusto aliquam omnis sit optio quas aut ex.",
    "phone": "1-315-476-5106 x280",
    "email": "Wellington38@hotmail.com",
    "status": "Do podjęcia",
    "address": "Lodowa 97, 93-232 Łódź",
    "geolat": 51.72975,
    "geolng": 19.52339
}, {
    "date": "2019-06-29T04:13:00.297Z",
    "contactPerson": "Faye Hamill",
    "description": "Ea ullam ea tempore hic. Exercitationem provident quo perferendis adipisci aut. Non quidem suscipit omnis voluptatem numquam numquam labore corrupti. Fuga maxime eius et molestias molestiae dicta odio reiciendis. Facere voluptas sequi similique sit nisi et expedita deleniti.",
    "phone": "946-171-1440",
    "email": "Tyrel.Oberbrunner@hotmail.com",
    "status": "W toku",
    "address": "Kongresowa 34, 93-376 Łódź",
    "geolat": 51.7211,
    "geolng": 19.47654
}, {
    "date": "2019-06-29T06:37:50.727Z",
    "contactPerson": "Jermaine Schiller",
    "description": "Iusto et ipsum mollitia libero et vel voluptatem facere velit. Ipsam voluptatem praesentium corporis minus. Et laudantium totam aut pariatur distinctio. Iure libero facere minus quibusdam soluta reprehenderit omnis. Non est voluptatem magni in iste nihil labore. Dolor temporibus quaerat.",
    "phone": "842-078-6086 x25370",
    "email": "Rupert.Daniel@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Odrzańska 1, 93-490 Łódź",
    "geolat": 51.71164,
    "geolng": 19.42814
}, {
    "date": "2019-06-29T08:18:00.318Z",
    "contactPerson": "Emery Kub",
    "description": "Dolores minima voluptatibus assumenda ducimus est. Aut voluptate provident aperiam sit eaque qui. Aperiam vel quis voluptates consequatur. Asperiores qui quos et tempora quia omnis distinctio dolorum similique.",
    "phone": "(266) 604-0358",
    "email": "Kirk_Nicolas@yahoo.com",
    "status": "W toku",
    "address": "Kopcińskiego 31, 90-142 Łódź",
    "geolat": 51.77396,
    "geolng": 19.48223
}, {
    "date": "2019-06-29T03:38:21.352Z",
    "contactPerson": "Kendra Romaguera",
    "description": "Ut enim sapiente. Eaque nulla repellendus dolor aliquid distinctio ab laudantium fuga. Aliquid alias est laudantium. Excepturi molestiae qui eos fuga aspernatur. Ut sit consectetur est. Ducimus nam nemo voluptatibus nisi ut qui libero harum.",
    "phone": "160.474.0281 x29524",
    "email": "Reese_Larkin65@gmail.com",
    "status": "Zamknięta",
    "address": "11-go Listopada 5A, 91-370 Łódź",
    "geolat": 51.81498,
    "geolng": 19.42375
}, {
    "date": "2019-06-29T12:21:55.862Z",
    "contactPerson": "Beatrice Braun",
    "description": "Laborum iusto occaecati eius omnis. Qui sit odit est nulla dicta. Voluptatem ullam aut nulla quis facere accusamus. Aliquam hic aut enim culpa ut qui delectus natus saepe.",
    "phone": "(664) 077-3503 x14898",
    "email": "Trisha_Kozey39@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Tamka 3, 91-728 Łódź",
    "geolat": 51.77904,
    "geolng": 19.4903
}, {
    "date": "2019-06-29T06:36:52.897Z",
    "contactPerson": "Marlen Langosh",
    "description": "Quis consectetur itaque et sunt harum porro hic sunt facere. Distinctio et voluptatem quam laudantium ex non. Dicta in minima nulla ea nihil qui odio quia beatae. Dolor corporis aut et architecto nihil distinctio veniam ut.",
    "phone": "495-923-9491 x6819",
    "email": "Valentin.McCullough@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kusocińskiego 40, 94-054 Łódź",
    "geolat": 51.75184,
    "geolng": 19.40901
}, {
    "date": "2019-06-29T10:28:28.736Z",
    "contactPerson": "Kira Farrell",
    "description": "Delectus possimus unde at qui quaerat maxime. Ea non culpa.",
    "phone": "1-158-493-7326 x117",
    "email": "Kacey_Oberbrunner70@hotmail.com",
    "status": "Do podjęcia",
    "address": "Al. Włókniarzy 236, 90-556 Łódź",
    "geolat": 51.7587,
    "geolng": 19.4339
}, {
    "date": "2019-06-29T07:09:50.032Z",
    "contactPerson": "Richie Prohaska",
    "description": "Ad quasi impedit magnam recusandae soluta. Consequatur dolorem nihil dolore. Ut perferendis sunt voluptatem qui similique esse nihil. Sint perspiciatis dolorem.",
    "phone": "1-519-824-8119",
    "email": "Unique.Satterfield37@yahoo.com",
    "status": "Zamknięta",
    "address": "Przemysłowa 27A, 91-704 Łódź",
    "geolat": 51.79252,
    "geolng": 19.47671
}, {
    "date": "2019-06-28T18:38:15.382Z",
    "contactPerson": "Tom Dickens",
    "description": "Porro necessitatibus ipsam impedit possimus amet molestiae quis praesentium tenetur. Ducimus suscipit autem veniam sint consequatur voluptas inventore. Quisquam recusandae fuga qui. Placeat ipsa vero ex esse molestiae ullam temporibus.",
    "phone": "350-467-7129",
    "email": "Anita_Shields89@gmail.com",
    "status": "Do weryfikacji",
    "address": "Łęczycka 9, 93-109 Łódź",
    "geolat": 51.74882,
    "geolng": 19.4834
}, {
    "date": "2019-06-29T13:25:29.796Z",
    "contactPerson": "Madyson Trantow",
    "description": "Quidem commodi natus quae enim quia provident nihil qui. Impedit laboriosam sed modi quis voluptate repellat. Id doloremque nihil autem nesciunt minima ut rerum autem. Et officia ipsam voluptatem. Maiores quia voluptatum sit exercitationem aut mollitia et.",
    "phone": "872-500-9293 x38247",
    "email": "Rosie.Murray@gmail.com",
    "status": "Do weryfikacji",
    "address": "Piasta 41, 93-562 Łódź",
    "geolat": 51.7369,
    "geolng": 19.44325
}, {
    "date": "2019-06-29T09:26:52.332Z",
    "contactPerson": "Maud Greenfelder",
    "description": "Unde voluptas aut ut in qui et assumenda quaerat ut. Eos rerum veritatis a unde alias autem voluptas vitae non. Nemo quibusdam similique perferendis veritatis.",
    "phone": "(792) 880-0071 x99602",
    "email": "Otho4@gmail.com",
    "status": "Do podjęcia",
    "address": "Dąbrowskiego 63, 93-271 Łódź",
    "geolat": 51.73744,
    "geolng": 19.48836
}, {
    "date": "2019-06-29T14:51:08.154Z",
    "contactPerson": "Israel King",
    "description": "Et velit non. Quos est sint cupiditate minima dolores.",
    "phone": "1-554-825-7524 x208",
    "email": "Jalon_Kris29@gmail.com",
    "status": "Do weryfikacji",
    "address": "Obywatelska 102/104, 94-104 Łódź",
    "geolat": 51.7366,
    "geolng": 19.43232
}, {
    "date": "2019-06-28T22:28:19.468Z",
    "contactPerson": "Vladimir Predovic",
    "description": "Pariatur explicabo rerum sapiente modi inventore. Odio mollitia eligendi omnis itaque quaerat.",
    "phone": "1-294-906-8644 x7228",
    "email": "Shanny.Ratke47@yahoo.com",
    "status": "Do podjęcia",
    "address": "Szczecińska 77, 91-222 Łódź",
    "geolat": 51.81148,
    "geolng": 19.37705
}, {
    "date": "2019-06-29T15:28:39.615Z",
    "contactPerson": "Dejah Jast",
    "description": "Laborum dolor nulla incidunt in. Error quae magni vero tempore molestias. Mollitia libero est dolor sed aliquam. Facere et eos qui. Eius ut qui autem quia. Recusandae deserunt ut.",
    "phone": "133.688.8520 x28891",
    "email": "Rachelle_Murazik@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Byszewska 3A, 92-770 Łódź",
    "geolat": 51.79466,
    "geolng": 19.59163
}, {
    "date": "2019-06-29T02:23:08.351Z",
    "contactPerson": "Glen Ratke",
    "description": "Iure nam perspiciatis. Non perferendis deserunt aut modi dolores qui reprehenderit amet architecto. Consequatur in numquam id. Suscipit incidunt modi et nulla. Natus consequuntur voluptatem omnis perspiciatis quidem sit cumque delectus. Et repudiandae sunt quibusdam nulla sequi ratione.",
    "phone": "1-147-381-4210 x055",
    "email": "Eduardo.McGlynn@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Brzezińska 27/29, 92-103 Łódź",
    "geolat": 51.79528,
    "geolng": 19.51234
}, {
    "date": "2019-06-29T00:35:38.206Z",
    "contactPerson": "Blaise Gerhold",
    "description": "Consequatur et rerum suscipit eligendi voluptate cumque. Dolores dolorum et sint voluptatem in. Sit maiores et nihil aut sequi voluptatibus enim. Omnis nihil ea necessitatibus nam quos quidem. Quaerat officia ratione deleniti pariatur voluptas neque amet et. Corporis alias repellendus.",
    "phone": "(292) 958-9724 x528",
    "email": "Bethel.Leannon@hotmail.com",
    "status": "W toku",
    "address": "Aleksandrowska 8A, 91-120 Łódź",
    "geolat": 51.79541,
    "geolng": 19.40355
}, {
    "date": "2019-06-28T23:00:50.603Z",
    "contactPerson": "April Waters",
    "description": "Sit et distinctio blanditiis a consequatur assumenda. Id voluptatem laboriosam hic.",
    "phone": "454-322-2971 x019",
    "email": "Shaniya_Rosenbaum@gmail.com",
    "status": "Zamknięta",
    "address": "Brzóski 42, 91-321 Łódź",
    "geolat": 51.79704,
    "geolng": 19.44052
}, {
    "date": "2019-06-28T19:16:24.278Z",
    "contactPerson": "Elizabeth Klein",
    "description": "Non quod autem. Non eligendi minima reiciendis. Sint consequuntur qui itaque aliquid corrupti. Cupiditate quaerat perspiciatis. Dicta accusamus culpa provident beatae similique accusantium sunt unde saepe.",
    "phone": "010-882-3223 x21245",
    "email": "Giovanny66@yahoo.com",
    "status": "Do podjęcia",
    "address": "Jagienki 34, 92-439 Łódź",
    "geolat": 51.75252,
    "geolng": 19.57387
}, {
    "date": "2019-06-29T12:23:01.644Z",
    "contactPerson": "Lottie Roberts",
    "description": "Voluptas quibusdam et. Esse excepturi magnam totam minus dolorem animi maxime dolores deserunt. Esse aspernatur est. Veritatis cupiditate in repellendus et voluptas ad. Qui optio ea molestiae voluptatibus in nemo ab eveniet. Voluptate officiis omnis aut voluptatem culpa.",
    "phone": "856-213-5794 x35554",
    "email": "Christy_Rolfson28@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Warszawska 142, 91-602 Łódź",
    "geolat": 51.81357,
    "geolng": 19.48628
}, {
    "date": "2019-06-28T20:56:02.423Z",
    "contactPerson": "Hillary Harris",
    "description": "Modi aut labore tempore ut optio error. Blanditiis ut aut sit fuga. Tempore explicabo vel. Occaecati magni quo optio quo consequatur error et sed. Cumque molestiae natus vero dolorem culpa est. Molestias officiis aliquid.",
    "phone": "1-972-649-2887 x33632",
    "email": "Ashley.Lindgren62@hotmail.com",
    "status": "W toku",
    "address": "Wiernej Rzeki 2, 91-134 Łódź",
    "geolat": 51.79339,
    "geolng": 19.37938
}, {
    "date": "2019-06-29T11:03:41.690Z",
    "contactPerson": "Verda Altenwerth",
    "description": "Eum doloremque ut inventore dolores ut dolore excepturi sed. Esse quia deserunt est iure quo earum eveniet.",
    "phone": "154-058-7606 x339",
    "email": "Brannon_Klein83@gmail.com",
    "status": "Do weryfikacji",
    "address": "Felińskiego 7A, 93-252 Łódź",
    "geolat": 51.7317,
    "geolng": 19.4973
}, {
    "date": "2019-06-28T18:57:06.710Z",
    "contactPerson": "Odell Kirlin",
    "description": "Rerum adipisci corrupti vero dolor laudantium praesentium reiciendis quis. Et numquam est veniam molestias magnam.",
    "phone": "206-653-5457",
    "email": "Silas_Ankunding@gmail.com",
    "status": "Do podjęcia",
    "address": "Popiełuszki 13B, 94-052 Łódź",
    "geolat": 51.74043,
    "geolng": 19.38835
}, {
    "date": "2019-06-29T06:56:03.641Z",
    "contactPerson": "Ryley Boyer",
    "description": "Voluptas quis quae aut quos velit non omnis ea voluptas. Aut et ipsa eos occaecati excepturi minus. Delectus voluptas assumenda. Aut id sequi.",
    "phone": "(067) 833-5167",
    "email": "Erin86@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Tatrzańska 124, 93-239 Łódź",
    "geolat": 51.73796,
    "geolng": 19.4961
}, {
    "date": "2019-06-29T07:28:04.213Z",
    "contactPerson": "Randi Cummerata",
    "description": "Quae et nemo animi consectetur odit aspernatur quaerat saepe officiis. Error itaque libero nihil sunt neque assumenda iusto. Officia omnis amet quia qui commodi est.",
    "phone": "933.918.2437 x235",
    "email": "Gaston.Kautzer@hotmail.com",
    "status": "Zamknięta",
    "address": "Maratońska 121, 94-007 Łódź",
    "geolat": 51.73647,
    "geolng": 19.38214
}, {
    "date": "2019-06-28T21:33:41.405Z",
    "contactPerson": "Susie Johnston",
    "description": "Molestias odio doloribus. Aspernatur exercitationem culpa temporibus voluptas veritatis enim quaerat.",
    "phone": "794-662-6728 x564",
    "email": "Ashlynn.Heaney28@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Brydżowa 1, 93-435 Łódź",
    "geolat": 51.7039,
    "geolng": 19.44798
}, {
    "date": "2019-06-28T17:29:28.141Z",
    "contactPerson": "Margot Christiansen",
    "description": "Vel et porro ea facere adipisci voluptatem. Officiis magni facere recusandae ipsa delectus est.",
    "phone": "729-744-8583 x5657",
    "email": "Dane_Zieme@gmail.com",
    "status": "W toku",
    "address": "Limanowskiego 75, 91-329 Łódź",
    "geolat": 51.78888,
    "geolng": 19.43887
}, {
    "date": "2019-06-28T23:17:00.677Z",
    "contactPerson": "Rodrigo Goodwin",
    "description": "At debitis ex et. Perspiciatis reprehenderit nesciunt labore.",
    "phone": "1-397-667-9456 x20466",
    "email": "Erika20@gmail.com",
    "status": "W toku",
    "address": "Srebrzyńska 8, 91-074 Łódź",
    "geolat": 51.77415,
    "geolng": 19.43246
}, {
    "date": "2019-06-28T20:10:50.796Z",
    "contactPerson": "Curt Greenholt",
    "description": "Incidunt vel omnis eaque harum inventore repudiandae impedit dolorem. Amet est adipisci est non debitis pariatur. Officiis commodi similique exercitationem exercitationem excepturi. Labore ut nulla.",
    "phone": "120-610-0270",
    "email": "Jake60@gmail.com",
    "status": "W toku",
    "address": "Wyszyńskiego 73, 94-051 Łódź",
    "geolat": 51.74361,
    "geolng": 19.38801
}, {
    "date": "2019-06-28T22:03:56.472Z",
    "contactPerson": "Shad Kilback",
    "description": "Ut quia commodi ut ut enim. Molestiae doloremque perferendis reiciendis animi voluptatum. Eaque dicta repudiandae aut aut minus commodi est vel placeat. Quis ullam neque natus qui. Quae distinctio voluptatem dolor corrupti eius ipsam laborum. Eaque numquam quod temporibus culpa sed sint reprehenderit voluptatibus.",
    "phone": "877.466.4030 x1928",
    "email": "Kari.Stroman@gmail.com",
    "status": "Zamknięta",
    "address": "Łagiewnicka 215A, 91-456 Łódź",
    "geolat": 51.81514,
    "geolng": 19.45599
}, {
    "date": "2019-06-28T23:58:18.003Z",
    "contactPerson": "Jolie Satterfield",
    "description": "Hic repudiandae nihil harum rerum ipsum reiciendis nam. Quam quia aut ratione doloribus adipisci beatae aut sapiente. Voluptas alias accusamus. Veniam libero quibusdam necessitatibus quo fugit et. Molestiae accusantium labore.",
    "phone": "701-138-3734 x7477",
    "email": "Javier75@hotmail.com",
    "status": "W toku",
    "address": "Puszkina 50, 92-516 Łódź",
    "geolat": 51.75174,
    "geolng": 19.53303
}, {
    "date": "2019-06-29T14:27:03.035Z",
    "contactPerson": "Mary Hilll",
    "description": "Quidem sed voluptatem ea ut libero voluptas. Doloremque et aut facilis qui animi corporis nesciunt voluptas recusandae. Voluptatem ab ipsa labore voluptas et ut ea adipisci.",
    "phone": "1-907-376-0520 x5915",
    "email": "Keira_Schimmel20@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Aleja Matek Polskich 48, 93-337 Łódź",
    "geolat": 51.70888,
    "geolng": 19.47746
}, {
    "date": "2019-06-29T09:21:18.335Z",
    "contactPerson": "Clarissa Lemke",
    "description": "Modi omnis aspernatur tempore quasi cum. Quasi sint omnis. Qui nihil tenetur exercitationem sed eveniet. Laudantium aliquam et fugiat asperiores et rerum dignissimos excepturi. Excepturi minima quisquam provident.",
    "phone": "(907) 508-3254 x06789",
    "email": "Jaquan75@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Św. Franciszka 41, 93-479 Łódź",
    "geolat": 51.72724,
    "geolng": 19.43285
}, {
    "date": "2019-06-29T04:29:12.439Z",
    "contactPerson": "Colin Mraz",
    "description": "Minima deserunt a sint amet et error ea illum eum. Magni dolores modi dignissimos quia consectetur soluta. Corrupti iusto corrupti quod quia id itaque.",
    "phone": "(087) 509-6235 x2074",
    "email": "Thomas.Kirlin7@gmail.com",
    "status": "Do weryfikacji",
    "address": "Zakładowa 38/40, 92-402 Łódź",
    "geolat": 51.74288,
    "geolng": 19.56094
}, {
    "date": "2019-06-29T10:53:34.856Z",
    "contactPerson": "Liam McDermott",
    "description": "Animi libero numquam quis architecto optio. Est quia asperiores aliquid voluptate. Quo qui deserunt qui quod eos aut. Quas soluta at ratione.",
    "phone": "1-790-720-9532 x872",
    "email": "Mercedes_Wiegand55@gmail.com",
    "status": "Zamknięta",
    "address": "al. Politechniki 1, 93-590 Łódź",
    "geolat": 51.74941,
    "geolng": 19.44894
}, {
    "date": "2019-06-29T02:39:28.211Z",
    "contactPerson": "Luisa Halvorson",
    "description": "Libero saepe natus corporis asperiores voluptatibus quia. Et aliquam ut ab at qui. Alias nulla facere labore et qui.",
    "phone": "(705) 131-1383 x4545",
    "email": "Jaquan.Vandervort93@yahoo.com",
    "status": "Zamknięta",
    "address": "Czechosłowacka 34, 92-232 Łódź",
    "geolat": 51.77078,
    "geolng": 19.51492
}, {
    "date": "2019-06-29T09:13:00.175Z",
    "contactPerson": "Camden Hoeger",
    "description": "Et officia necessitatibus. Veniam iste ut asperiores porro. Tenetur maiores perferendis quisquam facilis. Adipisci itaque nihil. Est possimus hic ad amet fuga saepe corporis sed. Voluptatem est ipsam suscipit praesentium et repellat eligendi sunt deleniti.",
    "phone": "071-832-7091 x3112",
    "email": "Ben84@yahoo.com",
    "status": "Do podjęcia",
    "address": "Rąbieńska 130, 90-001 Łódź",
    "geolat": 51.78966,
    "geolng": 19.35566
}, {
    "date": "2019-06-29T07:58:35.743Z",
    "contactPerson": "Phyllis Larkin",
    "description": "Et rerum quia repellat quaerat sit molestias repellat. Fugiat omnis corporis accusamus et minima asperiores. Voluptatem laboriosam necessitatibus quibusdam voluptatem qui officia. Placeat aperiam similique dolorum quaerat ipsum. Deserunt et deserunt tempora itaque blanditiis atque quaerat. Iste harum numquam voluptate necessitatibus rerum.",
    "phone": "(139) 153-1718 x915",
    "email": "Earnest_Kuphal12@gmail.com",
    "status": "Zamknięta",
    "address": "Trybunalska 14, 93-358 Łódź",
    "geolat": 51.71681,
    "geolng": 19.46754
}, {
    "date": "2019-06-29T12:36:32.164Z",
    "contactPerson": "Therese Thiel",
    "description": "Aspernatur quam dolor voluptatem aliquid soluta veniam aspernatur. Porro quo omnis earum quam libero quia delectus aut. Et nihil dolorem cumque deleniti delectus aut et. Aut sed dicta omnis.",
    "phone": "(057) 895-1183 x20904",
    "email": "Jeramy_Klocko50@hotmail.com",
    "status": "W toku",
    "address": "Rojna 94, 91-134 Łódź",
    "geolat": 51.79582,
    "geolng": 19.3594
}, {
    "date": "2019-06-29T04:43:09.503Z",
    "contactPerson": "Carroll Batz",
    "description": "Voluptatum laboriosam non voluptate tempora non aliquid blanditiis sed. Fuga eius suscipit cum qui est soluta quis natus quo. Eos facilis in. Voluptatem minus quo aut fugit saepe qui earum. Distinctio eos sapiente doloremque.",
    "phone": "(922) 624-8406",
    "email": "Travis84@yahoo.com",
    "status": "Zamknięta",
    "address": "Klonowa 19, 91-036 Łódź",
    "geolat": 51.78832,
    "geolng": 19.42819
}, {
    "date": "2019-06-29T16:00:10.792Z",
    "contactPerson": "Manuela Auer",
    "description": "Fugit necessitatibus voluptas distinctio vero illum. Distinctio qui eos fuga dolorum ducimus voluptatem. Culpa nihil in sapiente quod iste velit et consequatur. Nostrum officia placeat perspiciatis at et voluptatem quia.",
    "phone": "(106) 465-4349 x8144",
    "email": "Claudie39@gmail.com",
    "status": "Zamknięta",
    "address": "Wici 34, 91-150 Łódź",
    "geolat": 51.80026,
    "geolng": 19.37498
}, {
    "date": "2019-06-29T03:15:37.754Z",
    "contactPerson": "Gay Adams",
    "description": "Qui totam quidem molestias. Assumenda quam aliquam nesciunt corrupti aut ut aut odit beatae. Repudiandae aspernatur commodi voluptatem quis similique numquam qui. Adipisci eius possimus aliquam libero et illum et deleniti.",
    "phone": "1-091-014-6600",
    "email": "Humberto_Kihn@gmail.com",
    "status": "W toku",
    "address": "Przybyszewskiego 14, 93-189 Łódź",
    "geolat": 51.7438,
    "geolng": 19.46675
}, {
    "date": "2019-06-29T03:36:21.906Z",
    "contactPerson": "Tyrell Harris",
    "description": "Sit rerum et sequi adipisci. Dolor praesentium assumenda velit deserunt. Sed qui id ullam qui saepe rerum totam enim dolor. Adipisci ea recusandae modi non fugiat.",
    "phone": "1-513-285-8558",
    "email": "Valentin.Reichel@hotmail.com",
    "status": "Do podjęcia",
    "address": "Franciszkańska 142, 91-857 Łódź",
    "geolat": 51.79784,
    "geolng": 19.46049
}, {
    "date": "2019-06-29T03:16:39.313Z",
    "contactPerson": "Myrtie Goyette",
    "description": "Inventore mollitia quis debitis est omnis reiciendis. Nobis temporibus nihil sit eos voluptatem rerum eum.",
    "phone": "939-800-4599",
    "email": "Floy95@gmail.com",
    "status": "Zamknięta",
    "address": "Krokusowa 3, 92-101 Łódź",
    "geolat": 51.77543,
    "geolng": 19.52345
}, {
    "date": "2019-06-29T08:17:00.919Z",
    "contactPerson": "Mellie McClure",
    "description": "Odit laboriosam numquam provident rerum eum ut dolore. Distinctio veritatis quas enim. Quo nemo dolorem quae iste sunt quaerat sint tenetur libero. Porro vitae et repellendus aut repudiandae et ratione voluptates quas. Molestiae veniam enim veniam eius quod iste sint. Sed ullam delectus voluptas iste voluptas aut quia.",
    "phone": "494-618-4041 x652",
    "email": "Leonardo_Kulas@hotmail.com",
    "status": "Zamknięta",
    "address": "Umińskiego 12, 93-259 Łódź",
    "geolat": 51.72936,
    "geolng": 19.4909
}, {
    "date": "2019-06-29T13:55:22.815Z",
    "contactPerson": "Jacinto Steuber",
    "description": "Recusandae quas facere. Explicabo omnis ex reprehenderit neque saepe aliquid doloremque. Nihil omnis incidunt quia ullam ut. Praesentium ut id. Corrupti voluptas modi excepturi vel temporibus omnis. Saepe voluptates sint quis aliquam ipsum eaque consectetur deserunt expedita.",
    "phone": "515.068.7671",
    "email": "Jackeline_Batz57@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Zgierska 173, 91-490 Łódź",
    "geolat": 51.81305,
    "geolng": 19.43619
}, {
    "date": "2019-06-29T07:17:33.637Z",
    "contactPerson": "Lavinia Crooks",
    "description": "Unde consectetur est qui necessitatibus nihil placeat nihil. Molestiae delectus dolores est distinctio facilis. Et inventore quo eaque porro asperiores. Tempore adipisci error excepturi quam eligendi tempora et. Alias eius ipsa ullam. Consequatur dolores necessitatibus in debitis ducimus ut natus quasi cum.",
    "phone": "562.179.7876 x82104",
    "email": "Mabel.Jaskolski@yahoo.com",
    "status": "Do podjęcia",
    "address": "Franciszkańska 31A, 91-433 Łódź",
    "geolat": 51.78386,
    "geolng": 19.46079
}, {
    "date": "2019-06-28T20:37:51.554Z",
    "contactPerson": "Edwardo Harris",
    "description": "Iure recusandae pariatur. Recusandae excepturi aliquam blanditiis voluptas est voluptatem maxime itaque. Neque corrupti libero quisquam. Et omnis iure suscipit corrupti ut. Optio illo aperiam sunt nihil qui distinctio.",
    "phone": "(602) 937-1733 x3059",
    "email": "Werner_Kertzmann32@gmail.com",
    "status": "Do podjęcia",
    "address": "Pojezierska 1A, 91-323 Łódź",
    "geolat": 51.79767,
    "geolng": 19.44277
}, {
    "date": "2019-06-28T18:51:26.098Z",
    "contactPerson": "Eleonore Kulas",
    "description": "Dolorem quasi rerum quo voluptatem. Distinctio cupiditate corporis corporis commodi voluptatem quasi beatae labore.",
    "phone": "636-593-8036 x90936",
    "email": "Jaron50@yahoo.com",
    "status": "Do podjęcia",
    "address": "Nawrot 15, 90-060 Łódź",
    "geolat": 51.7625,
    "geolng": 19.46196
}, {
    "date": "2019-06-29T10:42:51.064Z",
    "contactPerson": "Adeline Kozey",
    "description": "Non ea veritatis possimus sint. Veniam optio et. Quasi laboriosam labore magnam eum. Tempore occaecati quo sit et nam.",
    "phone": "079.265.2992 x97405",
    "email": "Heidi.Walter93@hotmail.com",
    "status": "Do podjęcia",
    "address": "Majora Henryka Sucharskiego 17, 56-400 Oleśnica",
    "geolat": 51.21124,
    "geolng": 17.39479
}, {
    "date": "2019-06-28T22:00:54.383Z",
    "contactPerson": "Danika Mann",
    "description": "Explicabo eos non aut. Porro et quaerat dolores architecto. Esse vel neque id fugiat. Harum est laudantium dicta vel at occaecati. Praesentium eligendi vel porro amet dolore quia impedit.",
    "phone": "842.464.2129",
    "email": "Leila_Smitham@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kochanowskiego 3, 56-400 Oleśnica",
    "geolat": 51.21106,
    "geolng": 17.39057
}, {
    "date": "2019-06-29T16:03:17.242Z",
    "contactPerson": "Trever Koch",
    "description": "Aut est beatae architecto quod provident. Molestias repudiandae voluptas quibusdam fuga iusto in. Excepturi qui ad aut quis minima repudiandae. Distinctio qui dignissimos ut et fugit aut eos ea.",
    "phone": "(983) 216-1500",
    "email": "Meredith5@gmail.com",
    "status": "Zamknięta",
    "address": "Wojska Polskiego 1D, 56-400 Oleśnica",
    "geolat": 51.21408,
    "geolng": 17.37513
}, {
    "date": "2019-06-29T08:25:49.967Z",
    "contactPerson": "Lorenz Keeling",
    "description": "Atque eligendi nisi itaque voluptas assumenda. Alias vel amet cumque id numquam nesciunt non. In ut laboriosam distinctio omnis voluptas sed facilis asperiores.",
    "phone": "1-953-695-3963 x9529",
    "email": "Tressa.Moen@gmail.com",
    "status": "Do podjęcia",
    "address": "Wały Jagielońskie 9-10, 56-400 Oleśnica",
    "geolat": 51.20464,
    "geolng": 17.37321
}, {
    "date": "2019-06-28T21:25:13.133Z",
    "contactPerson": "Salvador Christiansen",
    "description": "Repudiandae id eaque et dolor laboriosam quis natus et qui. Quibusdam et quod et iste voluptate et voluptatem. Et sed in nam a similique quo qui eos quo.",
    "phone": "(383) 316-7655 x4121",
    "email": "Cleta_Abernathy@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Sikorskiego 6, 56-400 Oleśnica",
    "geolat": 51.21379,
    "geolng": 17.39918
}, {
    "date": "2019-06-29T03:02:57.170Z",
    "contactPerson": "Keyshawn Anderson",
    "description": "Sed et maxime et labore dolor nisi voluptatem et. Commodi vel quidem autem. Dicta quia porro explicabo. Iusto occaecati consectetur.",
    "phone": "1-832-244-1119 x009",
    "email": "Trenton_Connelly@gmail.com",
    "status": "W toku",
    "address": "Moniuszki 69, 56-400 Oleśnica",
    "geolat": 51.20358,
    "geolng": 17.38541
}, {
    "date": "2019-06-28T23:39:39.928Z",
    "contactPerson": "Eliza Wolf",
    "description": "Quisquam commodi et totam et aut accusantium. Beatae consequatur aut ut tempore. Autem dicta sunt et harum consequatur dolorum.",
    "phone": "(037) 086-9683",
    "email": "Kristian.Pagac82@hotmail.com",
    "status": "Do podjęcia",
    "address": "Rzemieślnicza 3, 56-400 Oleśnica",
    "geolat": 51.21214,
    "geolng": 17.38097
}, {
    "date": "2019-06-29T04:23:47.879Z",
    "contactPerson": "Tamia Kunze",
    "description": "Saepe adipisci sunt molestias ea unde aut. Cumque sit distinctio fugiat atque ut dolorum et laborum enim. Dolor qui nulla.",
    "phone": "(424) 414-8516",
    "email": "Rosa_Mohr88@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Bolesława Krzywoustego 18, 56-400 Oleśnica",
    "geolat": 51.20361,
    "geolng": 17.40079
}, {
    "date": "2019-06-28T22:37:42.160Z",
    "contactPerson": "Lottie Oberbrunner",
    "description": "Aliquam eum libero provident cumque dignissimos in porro non. Qui deserunt qui velit modi aut nobis itaque error. Doloremque veniam qui necessitatibus facilis veniam nulla totam et deleniti. Explicabo non nemo maiores alias.",
    "phone": "924.045.7517",
    "email": "Gerson4@gmail.com",
    "status": "Zamknięta",
    "address": "Opolska 2C, 45-960 Opole",
    "geolat": 50.69723,
    "geolng": 17.87447
}, {
    "date": "2019-06-29T02:59:08.237Z",
    "contactPerson": "Estell Zemlak",
    "description": "Sit animi molestiae tempore consectetur sit ullam porro distinctio. Animi at pariatur. Sit porro distinctio dolorem optio incidunt est consectetur dolorem a.",
    "phone": "1-700-485-5591",
    "email": "Joana.Gerlach@yahoo.com",
    "status": "W toku",
    "address": "Pużaka 19, 45-272 Opole",
    "geolat": 50.68489,
    "geolng": 17.95327
}, {
    "date": "2019-06-29T00:27:22.645Z",
    "contactPerson": "Baby Berge",
    "description": "Hic sit voluptates sed veritatis dolore tempora non. Nihil provident consequuntur enim.",
    "phone": "819-613-5877 x180",
    "email": "Frank.Hodkiewicz13@yahoo.com",
    "status": "W toku",
    "address": "Ozimska 184, 45-310 Opole",
    "geolat": 50.66865,
    "geolng": 17.97085
}, {
    "date": "2019-06-29T09:02:15.916Z",
    "contactPerson": "Cooper Schaefer",
    "description": "Cum velit eligendi rerum fuga voluptatem aperiam architecto fuga. Reprehenderit dicta consequatur maxime aperiam sed voluptate animi suscipit. Ad omnis aut dolores repudiandae sed corrupti facilis in non. Nulla quod ratione distinctio molestiae. Quidem sint aut.",
    "phone": "289.321.1263 x40322",
    "email": "Watson_Jenkins@hotmail.com",
    "status": "Do podjęcia",
    "address": "Katowicka 69, 45-015 Opole",
    "geolat": 50.66903,
    "geolng": 17.93486
}, {
    "date": "2019-06-29T08:18:15.447Z",
    "contactPerson": "Zoila Kihn",
    "description": "Id rerum pariatur non similique perspiciatis. Reprehenderit perferendis sed quasi eius ut totam qui qui voluptates.",
    "phone": "949-703-0520 x332",
    "email": "Justyn23@yahoo.com",
    "status": "Zamknięta",
    "address": "Wrocławska 106, 45-837 Opole",
    "geolat": 50.67847,
    "geolng": 17.88983
}, {
    "date": "2019-06-28T18:16:16.952Z",
    "contactPerson": "Ambrose Upton",
    "description": "Quo ad illo ipsum qui perferendis distinctio fuga. Vel qui et quod et qui consectetur. Soluta quis recusandae eum nobis.",
    "phone": "(988) 741-6508 x39807",
    "email": "Maybelle.Wiza34@gmail.com",
    "status": "W toku",
    "address": "al. Solidarności 26, 45-404 Opole",
    "geolat": 50.67476,
    "geolng": 17.96952
}, {
    "date": "2019-06-29T15:31:43.680Z",
    "contactPerson": "Emmet Barton",
    "description": "Distinctio voluptatem possimus vero accusamus. Quasi aliquam eaque perspiciatis asperiores culpa impedit autem sed. Rerum autem consequatur in accusamus qui culpa non magni distinctio.",
    "phone": "302-532-8533",
    "email": "Gerry.Abshire14@gmail.com",
    "status": "Do weryfikacji",
    "address": "Grota Roweckiego 15, 45-267 Opole",
    "geolat": 50.67999,
    "geolng": 17.94678
}, {
    "date": "2019-06-28T23:24:39.341Z",
    "contactPerson": "Brain Pagac",
    "description": "Molestiae nemo qui. Vel ea pariatur ut. Eveniet facilis aperiam earum. Ea nam facilis ab voluptatem. Vero nam provident et dolor. Omnis eveniet accusantium dolorem.",
    "phone": "1-964-798-9617 x89668",
    "email": "Jany_Mueller@gmail.com",
    "status": "Zamknięta",
    "address": "Ozimska 72, 45-368 Opole",
    "geolat": 50.6667,
    "geolng": 17.95421
}, {
    "date": "2019-06-29T09:56:57.928Z",
    "contactPerson": "Vincenza McDermott",
    "description": "Laboriosam nihil voluptas doloribus nesciunt quas doloribus tenetur. Veniam tenetur et et vero omnis aut. Rem temporibus qui non eveniet accusantium. At soluta est vel saepe. Fugit atque nihil deserunt quas distinctio unde nostrum voluptas.",
    "phone": "(176) 280-1732 x8819",
    "email": "Elton_Kuvalis@hotmail.com",
    "status": "Zamknięta",
    "address": "Sosnkowskiego 16, 45-267 Opole",
    "geolat": 50.67466,
    "geolng": 17.94691
}, {
    "date": "2019-06-29T04:41:41.301Z",
    "contactPerson": "Jaycee Armstrong",
    "description": "Voluptas provident impedit incidunt itaque nisi sint. Saepe mollitia eveniet officia. Labore laboriosam impedit recusandae. Autem soluta rem. Distinctio necessitatibus qui sit quia sed qui et.",
    "phone": "499-678-5644 x37251",
    "email": "Glenda_Kris@hotmail.com",
    "status": "Do podjęcia",
    "address": "Bielska 1, 45-401 Opole",
    "geolat": 50.67096,
    "geolng": 17.96985
}, {
    "date": "2019-06-29T00:35:11.362Z",
    "contactPerson": "Dolores Ortiz",
    "description": "Non et non quia. Ipsa officiis eligendi ullam velit est minima laborum.",
    "phone": "1-296-403-6172",
    "email": "Verlie_Wisozk@yahoo.com",
    "status": "W toku",
    "address": "Wrocławska 152-154, 45-836 Opole",
    "geolat": 50.68019,
    "geolng": 17.8797
}, {
    "date": "2019-06-29T05:02:35.460Z",
    "contactPerson": "Toy Hansen",
    "description": "Et quod repellat commodi molestias. Ducimus sed minima sed sit. Magni vero voluptates sint doloribus.",
    "phone": "1-752-317-3038 x17392",
    "email": "Rosalee_Casper39@yahoo.com",
    "status": "Do weryfikacji",
    "address": "1 Maja 8, 45-069 Opole",
    "geolat": 50.66343,
    "geolng": 17.93069
}, {
    "date": "2019-06-29T07:41:32.526Z",
    "contactPerson": "Kirstin Rogahn",
    "description": "Velit molestiae culpa blanditiis molestiae. Incidunt alias laboriosam nesciunt veniam vel.",
    "phone": "748.796.3014 x39971",
    "email": "Rebeca62@hotmail.com",
    "status": "Zamknięta",
    "address": "Dambonia 169, 45-860 Opole",
    "geolat": 50.66185,
    "geolng": 17.88884
}, {
    "date": "2019-06-29T12:16:33.795Z",
    "contactPerson": "Bulah VonRueden",
    "description": "Sapiente dicta aliquam et voluptatum veniam corrupti. Accusantium ut vero soluta a sequi doloremque qui voluptates et. Nulla quasi quibusdam quis nobis doloremque. Tenetur voluptatem sint incidunt. Aspernatur aliquid possimus laborum est et quae nesciunt consequatur qui. Voluptatem consectetur qui debitis et consectetur.",
    "phone": "763-153-8755 x052",
    "email": "Autumn25@hotmail.com",
    "status": "W toku",
    "address": "Plebiscytowa 45, 45-360 Opole",
    "geolat": 50.67106,
    "geolng": 17.94066
}, {
    "date": "2019-06-29T09:44:03.167Z",
    "contactPerson": "Berniece Shields",
    "description": "Dolorem ab ratione. Suscipit sunt et aperiam et distinctio fugiat.",
    "phone": "331.140.5938 x588",
    "email": "Breanne75@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Oświęcimska 142A, 45-641 Opole",
    "geolat": 50.60962,
    "geolng": 17.97075
}, {
    "date": "2019-06-29T00:03:05.094Z",
    "contactPerson": "Giuseppe Hermann",
    "description": "Quidem nobis praesentium quas fugiat quae. Nemo beatae ut voluptatum odio animi distinctio aut omnis et.",
    "phone": "1-112-822-0752",
    "email": "Hollie.Abernathy@gmail.com",
    "status": "Do podjęcia",
    "address": "Fabryczna 1, 45-349 Opole",
    "geolat": 50.66334,
    "geolng": 17.94246
}, {
    "date": "2019-06-29T03:24:24.689Z",
    "contactPerson": "Muhammad Harber",
    "description": "Accusantium molestiae quasi nihil suscipit ducimus blanditiis quidem necessitatibus. Non ut qui exercitationem labore assumenda inventore asperiores sequi. Et repellat iste quis numquam nihil aut consequatur facilis.",
    "phone": "640.770.6938 x09281",
    "email": "Louvenia.Stroman@hotmail.com",
    "status": "Do podjęcia",
    "address": "Prószkowska 71, 45-710 Opole",
    "geolat": 50.656,
    "geolng": 17.90487
}, {
    "date": "2019-06-29T08:18:59.544Z",
    "contactPerson": "Gordon Wisozk",
    "description": "Consequatur iusto possimus. Cumque adipisci dignissimos ut. Totam aut dicta cumque enim. Voluptatem aliquam et dolor eveniet. Officiis temporibus quis nihil qui excepturi.",
    "phone": "(985) 339-1576 x372",
    "email": "Garnett77@yahoo.com",
    "status": "Do podjęcia",
    "address": "Budowlanych 3, 45-005 Opole",
    "geolat": 50.67563,
    "geolng": 17.91658
}, {
    "date": "2019-06-29T15:45:05.120Z",
    "contactPerson": "Raven Dietrich",
    "description": "Est omnis odit nihil dolorum. Quaerat natus quaerat. Modi at eum saepe consectetur odit tenetur.",
    "phone": "1-132-786-8462",
    "email": "Jacynthe.Torp96@gmail.com",
    "status": "Zamknięta",
    "address": "Głogowska 22, 45-315 Opole",
    "geolat": 50.66498,
    "geolng": 17.96129
}, {
    "date": "2019-06-28T16:44:33.693Z",
    "contactPerson": "Gerson Grant",
    "description": "Quidem quae ea. Nemo expedita quidem provident dolor quisquam. Aut voluptate expedita et iste dolores nisi. Et dolorum numquam modi quod. Et et repudiandae et.",
    "phone": "(100) 633-6265 x739",
    "email": "Jaylen_Prohaska6@yahoo.com",
    "status": "Zamknięta",
    "address": "Strzelecka 55, 45-525 Opole",
    "geolat": 50.64243,
    "geolng": 17.99157
}, {
    "date": "2019-06-29T03:14:12.004Z",
    "contactPerson": "Paxton Fay",
    "description": "Et nemo tempora ad unde ab qui quibusdam ipsam magnam. Animi exercitationem quo aperiam pariatur ipsam.",
    "phone": "063-497-2568 x393",
    "email": "Elena24@gmail.com",
    "status": "Do podjęcia",
    "address": "Wschodnia 25, 45-449 Opole",
    "geolat": 50.66018,
    "geolng": 17.98099
}, {
    "date": "2019-06-29T10:09:37.911Z",
    "contactPerson": "Madge Larson",
    "description": "Quibusdam incidunt dicta quo dolores deserunt quae assumenda. Ut dolorum illum quo consequuntur corrupti deleniti ut. Aut amet quaerat ut magni officiis vel. Et aut deserunt dolorem ipsam voluptatibus dolores.",
    "phone": "(790) 331-9554 x268",
    "email": "Rozella56@hotmail.com",
    "status": "Do podjęcia",
    "address": "Jagiellonów 83, 45-560 Opole",
    "geolat": 50.653,
    "geolng": 17.95398
}, {
    "date": "2019-06-28T19:23:02.307Z",
    "contactPerson": "Letha Schamberger",
    "description": "Voluptatum laborum dolore at. Sed id magnam eligendi ad consequatur rerum odit velit nobis. Est ad dignissimos placeat. Reprehenderit quisquam non similique nostrum vero doloremque debitis. Quo rerum at ratione eligendi consequatur dignissimos sint incidunt esse.",
    "phone": "1-115-292-1963",
    "email": "Arlie.Cummerata@gmail.com",
    "status": "Zamknięta",
    "address": "Łąkowa 5A, 45-715 Opole",
    "geolat": 50.66709,
    "geolng": 17.91251
}, {
    "date": "2019-06-28T16:39:00.290Z",
    "contactPerson": "Delia VonRueden",
    "description": "Rerum earum modi quaerat iusto magni vero et atque occaecati. Autem fugiat eligendi. Asperiores dolorem rerum rem iste dicta sit. Sapiente odio repellendus maxime quae consequatur et debitis.",
    "phone": "901.064.7346 x30319",
    "email": "Maegan28@hotmail.com",
    "status": "Do podjęcia",
    "address": "Niemodlińska 21, 45-760 Opole",
    "geolat": 50.66599,
    "geolng": 17.90535
}, {
    "date": "2019-06-29T00:21:06.673Z",
    "contactPerson": "Jules Goodwin",
    "description": "Omnis alias possimus officia. Dicta quidem quaerat. Dolorem numquam nihil cumque porro qui et velit accusamus.",
    "phone": "1-537-236-4494",
    "email": "Ezekiel90@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Budowlanych 50, 45-123 Opole",
    "geolat": 50.69469,
    "geolng": 17.91066
}, {
    "date": "2019-06-29T07:55:45.826Z",
    "contactPerson": "Ida Stehr",
    "description": "Eaque veritatis inventore molestias in quod velit. Vero impedit iste inventore et non. Occaecati impedit sunt. Nostrum consequuntur dolores pariatur laudantium ea. Ipsam itaque impedit similique ea voluptatem sint perspiciatis. Voluptatem molestiae nihil et sit.",
    "phone": "592.293.0757 x2173",
    "email": "Kacey_Dach23@hotmail.com",
    "status": "W toku",
    "address": "Krzemieniecka 15, 45-401 Opole",
    "geolat": 50.67563,
    "geolng": 17.97098
}, {
    "date": "2019-06-28T19:59:11.831Z",
    "contactPerson": "Elyssa Powlowski",
    "description": "Voluptas voluptates id ut voluptas quia facilis. Nulla qui reiciendis odio ut omnis et eius vel nisi. Sapiente amet quae a. Consequatur id deleniti sapiente laudantium earum quaerat a. Cupiditate placeat et consectetur eum itaque adipisci et sunt rerum.",
    "phone": "405-329-7969",
    "email": "Maiya63@gmail.com",
    "status": "Do podjęcia",
    "address": "Szarotkowa 21, 60-175 Poznań",
    "geolat": 52.37851,
    "geolng": 16.82368
}, {
    "date": "2019-06-28T20:48:15.975Z",
    "contactPerson": "Kameron Rogahn",
    "description": "Eligendi velit aut illo quidem. Et accusantium quis expedita iure voluptatibus harum. Quam et neque rem ut. Omnis dolorum eligendi laudantium.",
    "phone": "455.529.6741",
    "email": "Justine.Swift95@gmail.com",
    "status": "Do podjęcia",
    "address": "Płochocińska 98B, 03-044 Warszawa",
    "geolat": 52.33739,
    "geolng": 21.02957
}, {
    "date": "2019-06-29T06:21:28.699Z",
    "contactPerson": "Jerrold Johnson",
    "description": "Distinctio nulla vel. Nam est magni eligendi vel numquam. Odio velit vel dolore omnis accusantium quia. Possimus aliquam assumenda illum rerum cumque eum in necessitatibus ullam.",
    "phone": "1-069-043-4532",
    "email": "Mitchell_Casper7@yahoo.com",
    "status": "Do podjęcia",
    "address": "Załuskiego 35, 05-230 Warszawa",
    "geolat": 52.34123,
    "geolng": 21.20698
}, {
    "date": "2019-06-28T20:31:38.864Z",
    "contactPerson": "Heidi Nolan",
    "description": "Autem est similique molestiae inventore aut. Hic voluptatem ea consequatur ab veniam tempora et pariatur fugit. Libero et est ducimus quos. Inventore ut numquam excepturi aperiam omnis. Aliquam labore consequatur deserunt qui hic inventore consequuntur et.",
    "phone": "(770) 103-1238",
    "email": "Brooks.Reinger47@gmail.com",
    "status": "Do podjęcia",
    "address": "al. Solidarności 11, 31-974 Kraków",
    "geolat": 50.07957,
    "geolng": 20.06518
}, {
    "date": "2019-06-29T07:57:56.615Z",
    "contactPerson": "Damian Brown",
    "description": "Id nihil debitis nihil reiciendis quis. Ipsum et necessitatibus quis nesciunt vel eaque sed impedit perspiciatis. Dolores et qui porro facere provident eveniet. Voluptas consequatur laudantium omnis. Et est quo. Unde consectetur iste veniam ut distinctio quam ratione.",
    "phone": "1-591-584-1127",
    "email": "Jaqueline66@gmail.com",
    "status": "Do weryfikacji",
    "address": "Barlickiego 5, 40-820 Katowice",
    "geolat": 50.25893,
    "geolng": 18.96915
}, {
    "date": "2019-06-29T14:31:07.191Z",
    "contactPerson": "Gunnar Spinka",
    "description": "Sint quia aut sed dolores vel. Debitis error architecto. Perferendis maiores neque iusto rerum aut modi facilis nisi. Facilis aut corrupti.",
    "phone": "(618) 251-7959",
    "email": "Elsie_Veum@yahoo.com",
    "status": "W toku",
    "address": "Ułańska/Tysiąclecia, 40-887 Katowice",
    "geolat": 50.28518,
    "geolng": 18.9648
}, {
    "date": "2019-06-29T05:51:46.055Z",
    "contactPerson": "Willie Reichel",
    "description": "Quam aut animi maiores et praesentium numquam. Et illum nobis et deleniti deserunt voluptatum. Ipsum necessitatibus nihil corporis natus assumenda et. Minima id quia et et pariatur quae et enim. Facere nihil in vel. Magnam consectetur sit quos provident.",
    "phone": "1-889-211-2499 x660",
    "email": "Orlo.Jacobi15@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Zachodnia 70, 90-403 Łódź",
    "geolat": 51.77323,
    "geolng": 19.45342
}, {
    "date": "2019-06-29T01:22:47.649Z",
    "contactPerson": "Joana Gleason",
    "description": "Aliquid qui unde reprehenderit quidem dolor. Consequuntur error laborum sed beatae ut consectetur incidunt cum. Voluptas est et in culpa molestiae.",
    "phone": "(468) 376-3030",
    "email": "Elissa_Harris21@yahoo.com",
    "status": "W toku",
    "address": "Zgierska 211, 91-497 Łódź",
    "geolat": 51.81774,
    "geolng": 19.43358
}, {
    "date": "2019-06-29T07:49:23.128Z",
    "contactPerson": "Palma Windler",
    "description": "Incidunt aut ut vel reiciendis eum et. Dolorem possimus necessitatibus. Rerum deleniti consequatur. Cum vero est velit voluptatem. Dolores ea nesciunt dicta non voluptatem asperiores.",
    "phone": "337-084-8512",
    "email": "Nya_Cummings45@gmail.com",
    "status": "W toku",
    "address": "Bartoka 67A, 92-533 Łódź",
    "geolat": 51.75857,
    "geolng": 19.53471
}, {
    "date": "2019-06-29T14:24:32.868Z",
    "contactPerson": "Marc Lockman",
    "description": "Ipsam illo aut non dolor adipisci. Eveniet et fugit. Omnis ex placeat voluptatem perspiciatis. Praesentium perferendis adipisci dicta alias corrupti. Et necessitatibus qui hic autem voluptatem ex odit. Consectetur qui magnam quis reiciendis ut.",
    "phone": "(024) 943-6787",
    "email": "Nat_Swaniawski53@gmail.com",
    "status": "Do podjęcia",
    "address": "Różyckiego 4, 58-506 Jelenia Góra",
    "geolat": 50.91333,
    "geolng": 15.77289
}, {
    "date": "2019-06-29T14:10:19.770Z",
    "contactPerson": "Andy Waelchi",
    "description": "Pariatur minus nam corporis facere molestiae assumenda et. Libero officia et quo natus autem quo. Porro et est expedita. Asperiores quia et eum hic aut et dolorem exercitationem repellat. Consequatur itaque excepturi. Earum animi et voluptatum nostrum impedit quod.",
    "phone": "(346) 885-5711",
    "email": "Adonis_Keebler@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Wolności 252, 58-560 Jelenia Góra",
    "geolat": 50.8627,
    "geolng": 15.68742
}, {
    "date": "2019-06-29T06:08:48.749Z",
    "contactPerson": "Xzavier Cruickshank",
    "description": "Animi facere accusamus. Aut autem saepe distinctio non error eius saepe. Nobis cum consequatur perferendis sint. Dolores enim officia ullam dolorem. Enim repellendus maiores sed. Veritatis expedita nemo suscipit assumenda voluptas.",
    "phone": "679-675-7923 x731",
    "email": "Angelica.Satterfield95@gmail.com",
    "status": "Do weryfikacji",
    "address": "Armii Krajowej 23, 58-500 Jelenia Góra",
    "geolat": 50.90208,
    "geolng": 15.73907
}, {
    "date": "2019-06-29T12:16:52.963Z",
    "contactPerson": "Jeanie Dibbert",
    "description": "Necessitatibus placeat possimus. Aliquid voluptatem sint qui odio aut est aut architecto aut.",
    "phone": "017-048-8316 x05556",
    "email": "Amely.Purdy48@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Kiepury 21, 58-506 Jelenia Góra",
    "geolat": 50.91827,
    "geolng": 15.7482
}, {
    "date": "2019-06-29T04:15:34.898Z",
    "contactPerson": "Aylin Padberg",
    "description": "Nisi et repudiandae voluptatem. Tenetur repellendus quis sed quaerat molestiae ex est esse. Dignissimos aut laboriosam quod aut temporibus. Rerum et tempora neque ut exercitationem ut reiciendis. Commodi quibusdam facere odio quam quia.",
    "phone": "537-028-7915",
    "email": "Alisha.Marquardt@hotmail.com",
    "status": "Do weryfikacji",
    "address": "1 Maja 92, 40-240 Katowice",
    "geolat": 50.25891,
    "geolng": 19.05123
}, {
    "date": "2019-06-29T02:20:39.430Z",
    "contactPerson": "Dessie Keeling",
    "description": "Nulla voluptas fuga quo magni architecto dicta quia. Voluptatem laborum facere.",
    "phone": "1-489-990-8093 x7689",
    "email": "Karelle_Prohaska@gmail.com",
    "status": "W toku",
    "address": "3 Maja 36, 40-097 Katowice",
    "geolat": 50.26489,
    "geolng": 19.02378
}, {
    "date": "2019-06-29T14:41:44.993Z",
    "contactPerson": "Neva Pagac",
    "description": "Unde eos est voluptate. Tenetur et voluptas. Recusandae ut veniam qui. Excepturi reiciendis provident. In sed recusandae nulla.",
    "phone": "(340) 561-2826 x05891",
    "email": "Idella.Schaefer@yahoo.com",
    "status": "Do podjęcia",
    "address": "Gliwicka 113, 40-856 Katowice",
    "geolat": 50.26483,
    "geolng": 18.99836
}, {
    "date": "2019-06-28T16:46:18.633Z",
    "contactPerson": "Nona Halvorson",
    "description": "Aut perferendis quos voluptatum suscipit tempore. Dolor quam voluptatibus dolores illo nesciunt qui magnam. Eveniet dicta deserunt. Ea id enim possimus explicabo iste. Sint quos id eius debitis velit. Modi voluptatem eaque consectetur magni id quibusdam quaerat quod optio.",
    "phone": "1-632-060-5215",
    "email": "Karen6@yahoo.com",
    "status": "Do podjęcia",
    "address": "Hetmańska 10A, 40-560 Katowice",
    "geolat": 50.23311,
    "geolng": 18.97698
}, {
    "date": "2019-06-29T15:03:05.184Z",
    "contactPerson": "Giuseppe Wilderman",
    "description": "Vel aspernatur beatae esse ab voluptatem. Cumque dolorem est repellat vel rerum unde aut. Sapiente ad corrupti repellendus voluptatem et voluptatem possimus.",
    "phone": "1-053-569-4522 x855",
    "email": "Lavina_Erdman@yahoo.com",
    "status": "W toku",
    "address": "Żelazna 23, 40-851 Katowice",
    "geolat": 50.26386,
    "geolng": 19.00422
}, {
    "date": "2019-06-28T21:35:38.019Z",
    "contactPerson": "Dominique Smitham",
    "description": "Tenetur voluptatem amet qui hic blanditiis molestiae eos. Id voluptas qui sint. Blanditiis molestiae eum est iusto est porro iure.",
    "phone": "017.939.7942",
    "email": "Lenna_Kertzmann@gmail.com",
    "status": "Do weryfikacji",
    "address": "Piotrowicka 98, 40-724 Katowice",
    "geolat": 50.2313,
    "geolng": 18.97279
}, {
    "date": "2019-06-29T03:59:08.418Z",
    "contactPerson": "Mariam Block",
    "description": "Dolore est quis ullam. Rem ut aut pariatur et qui deserunt voluptas.",
    "phone": "(740) 036-0427",
    "email": "Jayson_Towne@gmail.com",
    "status": "Zamknięta",
    "address": "Armii Krajowej 208, 40-750 Katowice",
    "geolat": 50.1962,
    "geolng": 18.97869
}, {
    "date": "2019-06-29T06:25:58.803Z",
    "contactPerson": "Nathan Ernser",
    "description": "Eum eligendi qui libero odit iusto omnis maxime et cupiditate. Consectetur dicta harum omnis et est amet.",
    "phone": "225.304.7270",
    "email": "Gloria34@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Panewnicka  337A, 40-773 Katowice",
    "geolat": 50.22854,
    "geolng": 18.9355
}, {
    "date": "2019-06-29T14:56:01.925Z",
    "contactPerson": "Vincenza Murazik",
    "description": "Natus odit reiciendis et. Quia repellat optio quo qui porro expedita id quae. Autem vitae nisi quibusdam. Rem fugit ea maiores ut eos non et. Nesciunt repudiandae earum doloribus mollitia a quos dolore nisi.",
    "phone": "792-244-2968",
    "email": "Carissa_Durgan95@hotmail.com",
    "status": "W toku",
    "address": "Pl. Oddziałów Młodzieży Powstańczej  B/N NAPRZECIW ŻABKI, 40-061 Katowice",
    "geolat": 50.25676,
    "geolng": 19.01602
}, {
    "date": "2019-06-29T15:08:48.116Z",
    "contactPerson": "Lacy Bode",
    "description": "Voluptatem dolor suscipit quia aut deleniti qui voluptas pariatur tenetur. Facilis quaerat voluptate aut odio possimus dolorem odit distinctio atque. Qui ut maiores culpa repellat esse qui odit minima et.",
    "phone": "033.656.1113 x1942",
    "email": "Maxime.Paucek89@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Łętowskiego 34, 40-648 Katowice",
    "geolat": 50.20392,
    "geolng": 18.98858
}, {
    "date": "2019-06-29T05:17:15.041Z",
    "contactPerson": "Lou Smith",
    "description": "Et adipisci ratione totam voluptatem numquam. Adipisci possimus eaque perferendis cumque facere aliquid rerum consequatur. Quidem ut expedita enim rerum et voluptatum modi inventore.",
    "phone": "042.904.7419",
    "email": "Creola.Barrows14@yahoo.com",
    "status": "Zamknięta",
    "address": "Łużycka 2A, 40-215 Katowice",
    "geolat": 50.26933,
    "geolng": 19.04441
}, {
    "date": "2019-06-28T22:18:57.792Z",
    "contactPerson": "Javon Simonis",
    "description": "Debitis doloribus ut fugiat porro veritatis amet sed omnis. Consequatur in eum et velit qui. Aut et placeat repudiandae sed. Ut perferendis aspernatur repudiandae qui. Itaque neque magni tempore minima ut ut quia est. Sunt eveniet libero sed rerum ab aspernatur soluta incidunt.",
    "phone": "(496) 389-7360",
    "email": "Marie93@yahoo.com",
    "status": "Do podjęcia",
    "address": "Mościckiego 6, 40-841 Katowice",
    "geolat": 50.25979,
    "geolng": 18.97482
}, {
    "date": "2019-06-29T10:16:57.270Z",
    "contactPerson": "Annetta Witting",
    "description": "Iste accusantium nostrum beatae. Rem qui delectus laboriosam similique incidunt qui adipisci. Distinctio nulla quia deleniti assumenda sit nam sint consequuntur voluptatem. Sit sed hic. Similique asperiores qui et dolores vitae reiciendis ea quo.",
    "phone": "1-475-899-8830 x772",
    "email": "Bessie87@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Chrobrego 29, 40-881 Katowice",
    "geolat": 50.28083,
    "geolng": 18.97368
}, {
    "date": "2019-06-29T11:51:02.500Z",
    "contactPerson": "Hilario Cummerata",
    "description": "Consectetur accusamus voluptatem facilis tempora. Provident dolorem error ipsam reprehenderit delectus consectetur at. Quia quia qui laborum. Iure minima nulla nam rerum iure omnis eum. Atque sit ut quia impedit et enim rerum distinctio. Sit incidunt accusantium mollitia.",
    "phone": "(962) 154-2076",
    "email": "Alysha.Schimmel@gmail.com",
    "status": "Do podjęcia",
    "address": "Kobierzyńska 121, 30-382 Kraków",
    "geolat": 50.02305,
    "geolng": 19.90995
}, {
    "date": "2019-06-28T21:12:19.691Z",
    "contactPerson": "Susie Kirlin",
    "description": "Ut consequatur qui ab aspernatur. Maxime enim molestiae vitae voluptas rem quas. Rerum numquam iste dolor autem voluptas quae. Repudiandae voluptas ut velit. Id distinctio sed sed mollitia quis quo quia. Ut ipsum enim iure laudantium dolorem unde.",
    "phone": "1-536-475-7416 x111",
    "email": "Gia_Lubowitz@gmail.com",
    "status": "Do weryfikacji",
    "address": "Szuwarowa 1, 30-383 Kraków",
    "geolat": 50.01905,
    "geolng": 19.90441
}, {
    "date": "2019-06-29T10:05:41.547Z",
    "contactPerson": "Sandrine Nolan",
    "description": "Qui consequatur itaque ea tenetur magnam qui et sint labore. Debitis similique excepturi libero incidunt mollitia. Iure ut vel repellendus ex ipsam. Alias praesentium quae sequi at ratione doloribus. Adipisci soluta quo ut libero at quisquam.",
    "phone": "1-630-948-8672",
    "email": "Hassan_Carroll@hotmail.com",
    "status": "W toku",
    "address": "Os. Złotego Wieku 82, 31-618 Kraków",
    "geolat": 50.09504,
    "geolng": 19.99936
}, {
    "date": "2019-06-29T02:36:48.270Z",
    "contactPerson": "Orlando Deckow",
    "description": "Quis porro aliquam dolore molestias officiis ut labore illo. Voluptatem dolorum voluptates pariatur odio.",
    "phone": "496-397-4635 x535",
    "email": "Unique.Lubowitz@hotmail.com",
    "status": "Do podjęcia",
    "address": "Murarska 39, 31-318 Kraków",
    "geolat": 50.08669,
    "geolng": 19.91202
}, {
    "date": "2019-06-29T12:05:51.392Z",
    "contactPerson": "Annetta Nicolas",
    "description": "Reprehenderit voluptatum voluptatem laboriosam. Ut consequuntur odio.",
    "phone": "(872) 055-9057",
    "email": "Kelsi.Herzog15@gmail.com",
    "status": "Do weryfikacji",
    "address": "Bratysławska 4, 31-201 Kraków",
    "geolat": 50.08436,
    "geolng": 19.93543
}, {
    "date": "2019-06-28T18:52:58.636Z",
    "contactPerson": "Stone Wuckert",
    "description": "Qui quia fuga. Porro illo ullam minima deserunt aut maiores. Vel magnam voluptates quisquam. Id ipsa enim. Omnis voluptatibus delectus cum esse totam quasi sit numquam.",
    "phone": "1-591-052-1290 x36322",
    "email": "Jeromy39@hotmail.com",
    "status": "Do podjęcia",
    "address": "Os. 2 Pułku Lotniczego 1E/ LU 5, 31-867 Kraków",
    "geolat": 50.07829,
    "geolng": 20.01345
}, {
    "date": "2019-06-28T20:04:32.699Z",
    "contactPerson": "Lucius Schumm",
    "description": "Odit voluptas rerum incidunt nihil. Accusantium assumenda nemo perspiciatis expedita delectus exercitationem sed et rerum. Consequatur et odit. Odio aperiam laboriosam animi reprehenderit et et doloribus dolor tempora. Quibusdam facilis incidunt provident debitis ratione. Aliquid quis minus.",
    "phone": "284.738.7097 x6358",
    "email": "Ardith11@yahoo.com",
    "status": "Do podjęcia",
    "address": "Wadowicka 6/9, 30-415 Kraków",
    "geolat": 50.03275,
    "geolng": 19.93904
}, {
    "date": "2019-06-29T13:07:54.830Z",
    "contactPerson": "Marianne Steuber",
    "description": "Nihil et aut quo. Quisquam voluptas est laudantium rem minima ratione nesciunt. Totam soluta hic laborum enim quibusdam aliquid eum at cumque. Pariatur voluptas qui laboriosam dicta nihil non nihil iste culpa. Doloribus ipsum necessitatibus ducimus natus occaecati ut et. Est omnis nihil omnis maxime eos eos hic ullam maiores.",
    "phone": "1-727-375-7379",
    "email": "Bell_Davis36@gmail.com",
    "status": "Zamknięta",
    "address": "Miodowa 33, 31-052 Kraków",
    "geolat": 50.05316,
    "geolng": 19.9467
}, {
    "date": "2019-06-29T05:31:56.503Z",
    "contactPerson": "Marco Krajcik",
    "description": "Et saepe nobis assumenda repellat. Maiores doloremque quis molestias harum ipsa quaerat et. Enim aperiam qui sint corporis. Non minus vel iste ut.",
    "phone": "107.373.1577 x1820",
    "email": "Jaunita.Mitchell@hotmail.com",
    "status": "W toku",
    "address": "Os. Piastów 65 LU 11, 31-625 Kraków",
    "geolat": 50.10404,
    "geolng": 20.01345
}, {
    "date": "2019-06-28T18:38:35.506Z",
    "contactPerson": "Chyna Shanahan",
    "description": "Aliquid est voluptates quo. Unde fuga inventore perspiciatis dolor quas. Quo totam praesentium aut. Soluta et rerum corrupti eaque. Eos repellendus sed minus. Est cum est quasi dolor.",
    "phone": "325-483-7090 x43000",
    "email": "Eldora.Marvin@gmail.com",
    "status": "Do podjęcia",
    "address": "Dobrego Pasterza 50, 31-416 Kraków",
    "geolat": 50.08771,
    "geolng": 19.9643
}, {
    "date": "2019-06-28T23:37:28.768Z",
    "contactPerson": "Sim Carter",
    "description": "Accusantium est qui reiciendis necessitatibus ex saepe atque repellat eos. Sed quibusdam eveniet amet quaerat a. Eos quibusdam dolores nihil facere cupiditate. Provident minima eum totam repellendus doloremque laudantium molestiae.",
    "phone": "1-246-690-3249 x70297",
    "email": "Christop.Tillman59@gmail.com",
    "status": "Do podjęcia",
    "address": "Królewska 51, 30-081 Kraków",
    "geolat": 50.07259,
    "geolng": 19.91705
}, {
    "date": "2019-06-29T08:34:07.533Z",
    "contactPerson": "Amara Jast",
    "description": "Dicta sed dolorum. Reiciendis saepe in voluptatum voluptatem rerum earum voluptas. Illo beatae quibusdam quisquam porro aut aut.",
    "phone": "(631) 868-4407 x50545",
    "email": "Melvina_Koch2@gmail.com",
    "status": "Do podjęcia",
    "address": "Bronowicka 58, 30-091 Kraków",
    "geolat": 50.07893,
    "geolng": 19.89765
}, {
    "date": "2019-06-28T22:16:28.676Z",
    "contactPerson": "Asha Jakubowski",
    "description": "Itaque fuga voluptatem voluptatem omnis voluptas error repellendus. Non velit sit repudiandae accusantium dolor non qui. Sit ea enim. Dolorum laborum dolores qui sit non exercitationem. Ea sint tempore dolore.",
    "phone": "366.546.4170",
    "email": "Freddy63@gmail.com",
    "status": "Do podjęcia",
    "address": "Narvik 36, 30-435 Kraków",
    "geolat": 50.00098,
    "geolng": 19.91267
}, {
    "date": "2019-06-29T08:25:23.986Z",
    "contactPerson": "Norris Champlin",
    "description": "Et deserunt tempora architecto tenetur consequatur fuga cupiditate. Et ut voluptas suscipit omnis perferendis dignissimos aut est blanditiis. Consequatur quis enim necessitatibus id ipsa mollitia. Veritatis qui vitae ex tempore. Architecto natus ratione quaerat ex non dignissimos sunt hic. Odit odio non.",
    "phone": "503-633-8429",
    "email": "Maiya.Rippin@hotmail.com",
    "status": "W toku",
    "address": "Felińskiego 33, 31-236 Kraków",
    "geolat": 50.10146,
    "geolng": 19.96664
}, {
    "date": "2019-06-29T10:09:14.578Z",
    "contactPerson": "Muhammad White",
    "description": "Minus ipsum quo voluptas odio quo ullam reprehenderit. Sapiente optio cum ut voluptas quos. Fuga qui molestiae nisi ad aperiam iste.",
    "phone": "306-383-0002 x733",
    "email": "Victoria_Nikolaus@hotmail.com",
    "status": "Zamknięta",
    "address": "Mjr. Łupaszki 17 LU. 3, 31-398 Kraków",
    "geolat": 50.08436,
    "geolng": 19.85101
}, {
    "date": "2019-06-29T01:15:16.334Z",
    "contactPerson": "Keegan Jones",
    "description": "Vitae recusandae ipsa rerum totam et quaerat et et. Atque omnis illum perspiciatis eum quo quod.",
    "phone": "642.068.2440 x69124",
    "email": "Joanne_Schuppe11@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Myślenicka 153B, 30-698 Kraków",
    "geolat": 49.99178,
    "geolng": 19.94582
}, {
    "date": "2019-06-29T14:00:34.094Z",
    "contactPerson": "Maeve Jakubowski",
    "description": "Aut praesentium minus voluptatem dolor excepturi quaerat dolor ut ut. Temporibus aut ipsa vel quis sit molestiae. Voluptas sed vitae ut excepturi inventore quis aut et quia. Pariatur expedita quo repellat ut quaerat. Fugiat est dolor.",
    "phone": "451-064-6589",
    "email": "Olen86@gmail.com",
    "status": "W toku",
    "address": "Zapolskiej 42, 30-126 Kraków",
    "geolat": 50.07996,
    "geolng": 19.89341
}, {
    "date": "2019-06-29T04:40:40.309Z",
    "contactPerson": "Liana Gusikowski",
    "description": "Occaecati id iusto sunt aspernatur vero amet. Et quidem ipsam.",
    "phone": "(224) 839-7437 x462",
    "email": "Amparo34@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bora Komorowskiego 37, 31-876 Kraków",
    "geolat": 50.08697,
    "geolng": 19.98172
}, {
    "date": "2019-06-29T12:05:15.850Z",
    "contactPerson": "Filomena Grant",
    "description": "In itaque nulla totam quo. Molestiae quae dignissimos praesentium ullam voluptatem pariatur officiis. Sit eveniet consequatur voluptatem.",
    "phone": "165-519-5270",
    "email": "Cortney31@yahoo.com",
    "status": "Zamknięta",
    "address": "Karmelicka 35, 31-131 Kraków",
    "geolat": 50.06676,
    "geolng": 19.92939
}, {
    "date": "2019-06-28T17:16:51.296Z",
    "contactPerson": "Julia Cartwright",
    "description": "Velit quia ex explicabo nam. Veritatis itaque itaque aut. Qui ut porro facere iure et sapiente. Eaque hic est excepturi laudantium temporibus. Cum repellendus autem rerum sunt. Et vitae sit fugiat voluptatem enim quos.",
    "phone": "124-676-7309 x078",
    "email": "Reilly_Streich@hotmail.com",
    "status": "Do podjęcia",
    "address": "Pl. Wolnica 2, 31-060 Kraków",
    "geolat": 50.04901,
    "geolng": 19.94334
}, {
    "date": "2019-06-29T11:45:58.697Z",
    "contactPerson": "Vena Littel",
    "description": "Fuga quam mollitia necessitatibus voluptates. Blanditiis voluptate ut ipsam nihil culpa error deserunt. Deserunt impedit et incidunt ullam consequatur cum vero.",
    "phone": "424.526.5682 x85341",
    "email": "Susie.Rohan7@yahoo.com",
    "status": "Zamknięta",
    "address": "Kalwaryjska 77, 30-504 Kraków",
    "geolat": 50.03794,
    "geolng": 19.94128
}, {
    "date": "2019-06-29T00:31:51.604Z",
    "contactPerson": "Timmothy Rutherford",
    "description": "Voluptas hic porro. Sunt quis animi iste voluptatem voluptatem voluptatum. Nihil qui dolorem consectetur a est ut libero molestiae.",
    "phone": "470-659-5551 x464",
    "email": "Samara_Dare51@hotmail.com",
    "status": "Do podjęcia",
    "address": "Zdunów 18B, 30-428 Kraków",
    "geolat": 50.01962,
    "geolng": 19.91767
}, {
    "date": "2019-06-29T09:00:21.044Z",
    "contactPerson": "Lloyd Grimes",
    "description": "Dolor aspernatur ipsam fugit. Suscipit non vel voluptas quibusdam nam quia similique dolorum. Incidunt molestiae quia magni impedit. Magni quisquam ut. Magnam dolore quis ea eveniet vel laudantium pariatur.",
    "phone": "(964) 790-5672 x22064",
    "email": "Elmo9@gmail.com",
    "status": "Zamknięta",
    "address": "Zawiła 63, 30-390 Kraków",
    "geolat": 50.00726,
    "geolng": 19.89529
}, {
    "date": "2019-06-28T17:43:16.088Z",
    "contactPerson": "Melisa Bashirian",
    "description": "Dolor recusandae nulla. Accusamus aliquid voluptas.",
    "phone": "271-639-6152 x4443",
    "email": "Howard.Roberts74@yahoo.com",
    "status": "Zamknięta",
    "address": "Ułanów 48, 31-455 Kraków",
    "geolat": 50.0782,
    "geolng": 19.98286
}, {
    "date": "2019-06-28T23:41:25.044Z",
    "contactPerson": "Ismael Gusikowski",
    "description": "Est vel consectetur ut sed. Dolorem et quisquam iste totam. Voluptatem nobis dignissimos facilis rerum. Assumenda autem molestiae inventore amet dolore dolore accusamus tempora. Quis tempore cupiditate repudiandae sapiente labore ut ut.",
    "phone": "1-453-208-2321",
    "email": "Princess.Hessel3@gmail.com",
    "status": "Do weryfikacji",
    "address": "Os. Kazimierzowskie 30, 31-844 Kraków",
    "geolat": 50.08753,
    "geolng": 20.02181
}, {
    "date": "2019-06-29T08:08:23.178Z",
    "contactPerson": "Tressie Friesen",
    "description": "Laboriosam totam non. Magnam corrupti voluptatem quis dolorem. Asperiores ut saepe odit.",
    "phone": "1-189-207-6849 x1833",
    "email": "Paul_Douglas@gmail.com",
    "status": "Do weryfikacji",
    "address": "Witosa 39, 30-612 Kraków",
    "geolat": 50.01227,
    "geolng": 19.95471
}, {
    "date": "2019-06-29T05:20:31.323Z",
    "contactPerson": "Emily Stehr",
    "description": "Cupiditate quas omnis eum eaque repudiandae voluptatem. Ratione non aut sint velit culpa dignissimos quidem consequatur hic.",
    "phone": "680-134-2023",
    "email": "Marjolaine37@gmail.com",
    "status": "Zamknięta",
    "address": "Mackiewicza 17, 31-214 Kraków",
    "geolat": 50.09405,
    "geolng": 19.9468
}, {
    "date": "2019-06-29T15:47:43.172Z",
    "contactPerson": "Harmony Hansen",
    "description": "Quasi totam explicabo voluptatem amet asperiores velit. Et accusantium assumenda ut incidunt quo eum.",
    "phone": "1-604-072-9197",
    "email": "Dorris.Flatley80@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Łużycka 55, 30-658 Kraków",
    "geolat": 50.01279,
    "geolng": 19.97097
}, {
    "date": "2019-06-29T05:53:27.312Z",
    "contactPerson": "Issac Reilly",
    "description": "Eum dolorem rerum est laudantium est magnam voluptatum quam eos. Quam et ea. Deserunt magnam quia sunt dolor error ipsum.",
    "phone": "1-226-721-3215 x395",
    "email": "Janessa_Pagac35@gmail.com",
    "status": "Zamknięta",
    "address": "Borsucza 7, 30-408 Kraków",
    "geolat": 50.02824,
    "geolng": 19.92865
}, {
    "date": "2019-06-28T16:50:47.456Z",
    "contactPerson": "Jonas Kirlin",
    "description": "Libero consequuntur voluptatem illum. Tempora fugit qui aliquid magni autem sit cupiditate debitis eos. Maiores ullam dolorum architecto hic. Incidunt earum exercitationem molestiae.",
    "phone": "711-801-7511 x826",
    "email": "Alvena24@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bałuckiego 9, 30-318 Kraków",
    "geolat": 50.04915,
    "geolng": 19.92578
}, {
    "date": "2019-06-29T15:37:03.710Z",
    "contactPerson": "Juvenal Funk",
    "description": "Animi fugiat nobis aut officiis eligendi voluptatem. Dolorem assumenda sed repudiandae omnis sed est maxime.",
    "phone": "1-991-697-1421",
    "email": "Jeromy_Veum20@hotmail.com",
    "status": "Do podjęcia",
    "address": "Jerzmanowskiego 14, 30-836 Kraków",
    "geolat": 50.01698,
    "geolng": 20.01134
}, {
    "date": "2019-06-29T16:01:39.712Z",
    "contactPerson": "Giovanny Kemmer",
    "description": "Omnis molestiae omnis fugit libero saepe dolores praesentium totam et. Ut consequuntur nesciunt facilis sunt illo ut. Nulla dolor quaerat et veritatis. Illum voluptas ut quia expedita. Sunt id debitis facere qui accusamus iste iste.",
    "phone": "225.069.8521 x8239",
    "email": "Alec_Labadie@hotmail.com",
    "status": "Zamknięta",
    "address": "Jana Brzechwy 1, 31-478 Kraków",
    "geolat": 50.0907,
    "geolng": 19.97963
}, {
    "date": "2019-06-29T00:50:30.089Z",
    "contactPerson": "Brain Keeling",
    "description": "Saepe aliquam ullam laudantium saepe qui. Dolorem voluptatem vel minima vel qui aliquid eos illum. Molestiae iusto perspiciatis. Et in et. Nihil impedit culpa aut.",
    "phone": "(029) 507-8229 x801",
    "email": "Ava_Sanford12@yahoo.com",
    "status": "W toku",
    "address": "Żmujdzka 5, 31-426 Kraków",
    "geolat": 50.08565,
    "geolng": 19.95315
}, {
    "date": "2019-06-29T02:52:52.432Z",
    "contactPerson": "Reyes Padberg",
    "description": "Et ad quia. Cum sequi aut voluptatem.",
    "phone": "063-475-4657 x4665",
    "email": "Derrick_Ferry96@gmail.com",
    "status": "Zamknięta",
    "address": "Nowosądecka 50 (WJAZD OD UL. BIAŁORUSKIEJ), 30-683 Kraków",
    "geolat": 50.01539,
    "geolng": 19.96924
}, {
    "date": "2019-06-29T03:01:26.332Z",
    "contactPerson": "Garfield Zboncak",
    "description": "Qui vel molestiae est temporibus amet iure eius. Ea provident porro eum suscipit accusamus quia aliquid.",
    "phone": "155.459.2407 x1193",
    "email": "Karlie_Welch@hotmail.com",
    "status": "W toku",
    "address": "Kasprowicza 28E, 31-523 Kraków",
    "geolat": 50.0683,
    "geolng": 19.96755
}, {
    "date": "2019-06-29T12:44:16.920Z",
    "contactPerson": "George Corkery",
    "description": "Harum incidunt modi. Itaque iure sint temporibus nesciunt quasi enim cumque quibusdam et. Aliquam pariatur optio distinctio dolorem et omnis recusandae nobis. Sit voluptas voluptate. Iste expedita voluptatem doloribus aliquam eum exercitationem nulla delectus voluptatem.",
    "phone": "1-194-031-4789 x357",
    "email": "Jedediah34@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Os. Teatralne 33A, 31-945 Kraków",
    "geolat": 50.08151,
    "geolng": 20.03239
}, {
    "date": "2019-06-28T23:38:37.536Z",
    "contactPerson": "Mireya Heller",
    "description": "Illum quia ut enim delectus. Dolores sit doloremque. Laborum occaecati asperiores adipisci nam voluptas saepe consequatur. Earum occaecati quaerat nam nobis veritatis provident quo doloribus. Impedit asperiores vero ad est excepturi sit necessitatibus corrupti illo. Cumque deleniti et eius dolores.",
    "phone": "1-212-640-1737 x6530",
    "email": "Dusty_Ullrich@hotmail.com",
    "status": "Do podjęcia",
    "address": "Koszykarska 21C, 30-717 Kraków",
    "geolat": 50.04822,
    "geolng": 19.98627
}, {
    "date": "2019-06-28T17:14:05.470Z",
    "contactPerson": "Kayden Grant",
    "description": "Ut quo hic. Nisi porro dolor maxime earum consectetur culpa eaque suscipit. Ullam doloribus non iusto possimus possimus soluta sint eos ullam. Officia quia tempore eos aut commodi similique aliquam. Provident omnis voluptas laboriosam alias est autem ut ut.",
    "phone": "024-846-3100",
    "email": "Barry.Swaniawski@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Os. Złotej Jesieni 13, 31-826 Kraków",
    "geolat": 50.0901,
    "geolng": 20.0275
}, {
    "date": "2019-06-28T23:29:32.472Z",
    "contactPerson": "Madisyn Morar",
    "description": "Iure cumque magni voluptas ratione. Beatae aperiam dignissimos sed quod nobis. Sint consequatur qui excepturi quia ut qui.",
    "phone": "(605) 013-7373 x08417",
    "email": "Dariana_Fisher63@hotmail.com",
    "status": "W toku",
    "address": "Przewóz 8, 30-716 Kraków",
    "geolat": 50.04376,
    "geolng": 19.98775
}, {
    "date": "2019-06-28T18:21:45.126Z",
    "contactPerson": "Gust Homenick",
    "description": "Ipsum magnam vel odit hic eum inventore omnis et. Quibusdam quisquam est. Unde dicta repellat ea.",
    "phone": "1-633-416-9603",
    "email": "Ressie70@hotmail.com",
    "status": "Do podjęcia",
    "address": "Rynek Podgórski 14, 30-518 Kraków",
    "geolat": 50.04504,
    "geolng": 19.94944
}, {
    "date": "2019-06-29T04:43:01.701Z",
    "contactPerson": "Mollie Schuster",
    "description": "Et dolorum corrupti qui ut. Quia consequatur perspiciatis facere cum eos consequatur illo. Doloribus cum in quo deserunt temporibus consectetur.",
    "phone": "1-418-918-5589 x893",
    "email": "Myrtis.Gislason49@gmail.com",
    "status": "Do podjęcia",
    "address": "Szlak 47, 31-153 Kraków",
    "geolat": 50.07124,
    "geolng": 19.93931
}, {
    "date": "2019-06-28T17:56:46.330Z",
    "contactPerson": "Kiley Schmidt",
    "description": "Sapiente autem quod. Sit assumenda quisquam minima aut amet inventore voluptas ipsam ratione. In neque quaerat.",
    "phone": "671.414.2230 x6466",
    "email": "Nora.Boyle13@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Popiełuszki 37, 94-053 Łódź",
    "geolat": 51.74364,
    "geolng": 19.38555
}, {
    "date": "2019-06-29T00:11:33.154Z",
    "contactPerson": "Eula Moen",
    "description": "Nemo debitis distinctio. Quis architecto ipsam sed assumenda error velit mollitia. Aut cupiditate et qui suscipit excepturi iure. Similique recusandae recusandae quaerat deleniti. Id ratione repellendus et corrupti. Optio et ea labore porro nulla impedit sit illo et.",
    "phone": "1-839-552-3597",
    "email": "Arnulfo_Effertz@gmail.com",
    "status": "W toku",
    "address": "Obywatelska 199, 94-102 Łódź",
    "geolat": 51.74171,
    "geolng": 19.41669
}, {
    "date": "2019-06-29T15:55:07.827Z",
    "contactPerson": "Armand Keeling",
    "description": "Laudantium neque velit aspernatur cum facere eveniet dolorum est necessitatibus. Minima qui et vel ut eveniet aut quis eos. Asperiores nemo culpa eos facere odio nihil a voluptatibus. Deleniti maiores sit blanditiis quaerat sit assumenda in voluptatem. Vel blanditiis modi id corrupti recusandae ut quas debitis. Dolores aspernatur praesentium facere voluptates qui voluptatibus.",
    "phone": "1-119-163-9879",
    "email": "Haylie_Schneider@yahoo.com",
    "status": "W toku",
    "address": "Św. Franciszka 62, 93-479 Łódź",
    "geolat": 51.72682,
    "geolng": 19.42912
}, {
    "date": "2019-06-28T23:03:39.004Z",
    "contactPerson": "Clemmie Quigley",
    "description": "Aut omnis eos rerum ducimus. Magni voluptate et distinctio aut beatae et ea minus magnam. Dolorem reiciendis molestias dolorem dolores. Repellendus perferendis qui officia id vel. Porro iure suscipit.",
    "phone": "541-993-9648",
    "email": "Rosario.Hyatt52@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Powstańców Wielkopolskich 29, 91-035 Łódź",
    "geolat": 51.7844,
    "geolng": 19.4225
}, {
    "date": "2019-06-29T15:32:39.534Z",
    "contactPerson": "Candelario Harvey",
    "description": "Et magni cupiditate deserunt consequatur autem. Dolorum non quia eos reprehenderit facilis et. Voluptas dolorum sint et et et omnis et odit animi.",
    "phone": "893-389-8929 x69413",
    "email": "Ryley_Swaniawski@gmail.com",
    "status": "Zamknięta",
    "address": "Lenartowicza 16, 93-143 Łódź",
    "geolat": 51.73691,
    "geolng": 19.48403
}, {
    "date": "2019-06-28T23:59:29.360Z",
    "contactPerson": "Grayson Baumbach",
    "description": "Et optio eius sint voluptas iure quia. Veritatis odit a sint repellendus quisquam aut velit. Omnis dolorem odio totam distinctio eum. Et et hic voluptate. Hic necessitatibus inventore non non cumque assumenda eligendi. Nulla aut aliquam dolorum rerum.",
    "phone": "(102) 534-6208 x71094",
    "email": "Marilou_Wehner@hotmail.com",
    "status": "Do podjęcia",
    "address": "Opolczyka 17/C3, 92-417 Łódź",
    "geolat": 51.73931,
    "geolng": 19.57021
}, {
    "date": "2019-06-29T12:51:12.413Z",
    "contactPerson": "Viva Kemmer",
    "description": "Accusamus et quo quod. Illo ratione non ad a amet occaecati rerum autem rerum. Sit vitae dolor provident sequi ratione. Molestiae inventore tempore tenetur quaerat ducimus consequuntur vel sed voluptas. Alias molestiae doloribus voluptatem et ullam velit nulla repudiandae. Ut provident ratione est quis veniam officia voluptatibus iusto occaecati.",
    "phone": "230.039.1529 x5348",
    "email": "Lyla_Will90@gmail.com",
    "status": "Zamknięta",
    "address": "Rabatkowa 1, 94-214 Łódź",
    "geolat": 51.78663,
    "geolng": 19.3969
}, {
    "date": "2019-06-29T09:14:09.980Z",
    "contactPerson": "Amalia Kemmer",
    "description": "Molestiae ex tenetur sapiente nesciunt omnis fugiat laudantium. Aut alias nam magni. Nesciunt labore cumque at nihil et.",
    "phone": "992.735.4606",
    "email": "Whitney52@gmail.com",
    "status": "W toku",
    "address": "Przędzalniana 90/15A, 93-114 Łódź",
    "geolat": 51.74855,
    "geolng": 19.4869
}, {
    "date": "2019-06-29T03:46:24.260Z",
    "contactPerson": "Modesto Becker",
    "description": "Excepturi id autem enim et ipsa molestiae et qui. Quibusdam in fuga odit ullam magnam ipsa. Fugit facere consequatur. Magni expedita esse repellat est nemo qui sed rerum. Et dolorem quos impedit deleniti quo iste iste. Iusto aut similique numquam voluptatum dolorem quia voluptatem.",
    "phone": "1-548-384-9155 x42839",
    "email": "Jermey.Kemmer2@gmail.com",
    "status": "Zamknięta",
    "address": "Organizacji „Wolność i Niezawisłość”  31A, 91-836 Łódź",
    "geolat": 51.78862,
    "geolng": 19.46019
}, {
    "date": "2019-06-29T15:50:16.056Z",
    "contactPerson": "Hunter Kovacek",
    "description": "Qui modi est est sit fugit inventore qui quaerat. Velit molestias exercitationem tempora rem maxime. Deserunt atque voluptas cupiditate velit voluptatibus quia. Perspiciatis dolorum itaque totam in repudiandae.",
    "phone": "353-061-9083 x48948",
    "email": "Jewell_Flatley@hotmail.com",
    "status": "W toku",
    "address": "Jagiellońska 10 PAW. 2, 91-362 Łódź",
    "geolat": 51.81876,
    "geolng": 19.43
}, {
    "date": "2019-06-29T09:58:24.199Z",
    "contactPerson": "Theron Schoen",
    "description": "Quo recusandae iure minus facere. Quisquam earum veritatis ut. Ut quidem dolorem natus. Rerum earum assumenda rerum consequatur. Voluptas iure impedit quia non. Sapiente natus excepturi recusandae aut rerum amet incidunt tempora.",
    "phone": "131.645.5188 x4116",
    "email": "Sammie_Farrell41@yahoo.com",
    "status": "Do podjęcia",
    "address": "Pomorska 94, 91-402 Łódź",
    "geolat": 51.779,
    "geolng": 19.47845
}, {
    "date": "2019-06-29T05:34:28.825Z",
    "contactPerson": "Willie Lynch",
    "description": "Dolorem excepturi corrupti blanditiis officiis. Eum hic nihil nihil vero deserunt vero. Cum quo impedit asperiores ut aut voluptatum numquam. Eius ad minima qui nesciunt culpa repudiandae sit pariatur. Qui provident doloremque fugit maxime tempore et molestiae assumenda. Labore natus rerum aliquid perspiciatis soluta.",
    "phone": "124-502-7243 x87445",
    "email": "Abigail.Bode3@yahoo.com",
    "status": "Zamknięta",
    "address": "Franciszkańska 95A, 91-845 Łódź",
    "geolat": 51.79066,
    "geolng": 19.45999
}, {
    "date": "2019-06-28T17:21:37.292Z",
    "contactPerson": "Sedrick Kris",
    "description": "Exercitationem animi atque ullam quisquam harum. Ipsam reprehenderit itaque architecto ut voluptatem.",
    "phone": "1-826-083-2643 x41271",
    "email": "Stacy.Hickle@yahoo.com",
    "status": "W toku",
    "address": "Narutowicza 44, 90-135 Łódź",
    "geolat": 51.77201,
    "geolng": 19.47395
}, {
    "date": "2019-06-29T03:42:46.046Z",
    "contactPerson": "Myles Upton",
    "description": "Dolores ut velit totam quisquam sequi ex in. Reprehenderit atque ratione sequi. Unde esse assumenda ab nihil officia. Dolor placeat consequatur ut enim non molestiae. Error qui quod praesentium harum ut voluptatem aut quae laboriosam.",
    "phone": "(089) 701-4018",
    "email": "Christ_Streich56@gmail.com",
    "status": "Do weryfikacji",
    "address": "Odrzańska 27, 93-472 Łódź",
    "geolat": 51.71438,
    "geolng": 19.42399
}, {
    "date": "2019-06-29T10:26:08.945Z",
    "contactPerson": "Trycia Abshire",
    "description": "Ullam fuga iusto molestiae eveniet earum iste aut aliquid quis. In molestiae minus architecto quod recusandae. Eum ut sit et quos. Atque voluptas delectus eos voluptatem et velit dicta hic. Et vitae sed. Iure reprehenderit dolor labore sed officia dolores.",
    "phone": "765.851.1377 x79325",
    "email": "Juanita.Wiza@yahoo.com",
    "status": "Do podjęcia",
    "address": "Marii Skłodowskiej- Curie 30, 90-571 Łódź",
    "geolat": 51.76172,
    "geolng": 19.44302
}, {
    "date": "2019-06-28T20:47:43.088Z",
    "contactPerson": "Lenora Ondricka",
    "description": "Mollitia iste tempore ut. Earum corporis dolor est at reprehenderit expedita quae. Quaerat sed animi corporis molestiae laborum iste ratione non nisi. Non exercitationem qui veritatis voluptatem commodi vel ad quod.",
    "phone": "1-007-788-2180 x62600",
    "email": "Reta_Wintheiser52@gmail.com",
    "status": "Do weryfikacji",
    "address": "Dostojewskiego 5F, 92-507 Łódź",
    "geolat": 51.75342,
    "geolng": 19.53883
}, {
    "date": "2019-06-29T12:28:31.218Z",
    "contactPerson": "Humberto Douglas",
    "description": "Dolor animi autem ullam quasi porro. Ut et debitis illum consequatur. Fugit cupiditate sed ab voluptas ex alias molestiae.",
    "phone": "(525) 097-3795",
    "email": "Unique_Kautzer@gmail.com",
    "status": "Do podjęcia",
    "address": "Białostocka 5F, 93-355 Łódź",
    "geolat": 51.71948,
    "geolng": 19.48195
}, {
    "date": "2019-06-29T08:14:52.349Z",
    "contactPerson": "Kylie Dickens",
    "description": "Tempore unde adipisci aut necessitatibus doloremque cum repellat facere aut. Nihil explicabo inventore incidunt sed ipsam et voluptatibus beatae nisi. Ipsam ab error consequatur ratione natus qui itaque corrupti. Dolores dolor occaecati ducimus natus sunt quibusdam.",
    "phone": "1-023-807-6626 x8371",
    "email": "Percy.Grant9@yahoo.com",
    "status": "Do podjęcia",
    "address": "Inowrocławska 1, 91-020 Łódź",
    "geolat": 51.78984,
    "geolng": 19.41949
}, {
    "date": "2019-06-29T08:05:26.815Z",
    "contactPerson": "Vergie Wuckert",
    "description": "Sapiente iste reprehenderit ducimus culpa. Qui enim nam eum veniam ex praesentium amet quo velit. Iste eos architecto hic saepe ipsam reiciendis necessitatibus et. Natus praesentium vitae.",
    "phone": "433-449-5327",
    "email": "Cullen3@gmail.com",
    "status": "Do podjęcia",
    "address": "Pogonowskiego 17, 91-075 Łódź",
    "geolat": 51.772,
    "geolng": 19.44177
}, {
    "date": "2019-06-29T00:24:57.593Z",
    "contactPerson": "Mary Powlowski",
    "description": "Perferendis quasi facere debitis aut. Reiciendis rem quae molestiae. Nulla provident voluptatem repellat odit quos voluptatibus omnis. Velit non facilis ratione ipsam harum quaerat eum culpa in.",
    "phone": "034-529-1789 x48037",
    "email": "Isac_Howell@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Augusta Cieszkowskiego 14, 93-504 Łódź",
    "geolat": 51.73576,
    "geolng": 19.44869
}, {
    "date": "2019-06-29T08:46:18.823Z",
    "contactPerson": "Steve Huels",
    "description": "Qui fugiat facilis error ratione quis perferendis exercitationem quia. Dolorum incidunt qui omnis atque possimus odit ut. Eveniet nesciunt omnis laborum ut molestiae adipisci dolores pariatur. Beatae sit fuga temporibus. Qui quam veritatis. Cumque harum aspernatur et quod nisi labore aut nesciunt.",
    "phone": "(325) 111-7025 x62486",
    "email": "Virgil85@hotmail.com",
    "status": "Zamknięta",
    "address": "Dąbrowskiego 91A, 93-202 Łódź",
    "geolat": 51.73625,
    "geolng": 19.4953
}, {
    "date": "2019-06-29T01:18:45.753Z",
    "contactPerson": "Cornell Fahey",
    "description": "Excepturi minima quidem cupiditate nam at. Doloribus sit voluptatibus dolorem itaque provident accusantium pariatur molestiae fugiat.",
    "phone": "1-581-707-3342 x565",
    "email": "Rosemarie_Kemmer@hotmail.com",
    "status": "Zamknięta",
    "address": "Zapolskiej 66A, 93-256 Łódź",
    "geolat": 51.72964,
    "geolng": 19.49476
}, {
    "date": "2019-06-28T20:07:08.479Z",
    "contactPerson": "Jessy Schoen",
    "description": "Quaerat veritatis et dolore voluptatem nihil dolores nihil. Facere distinctio autem.",
    "phone": "1-258-368-0830 x9041",
    "email": "Rusty_Raynor2@gmail.com",
    "status": "Zamknięta",
    "address": "Uniejowska 5A, 91-027 Łódź",
    "geolat": 51.79188,
    "geolng": 19.41743
}, {
    "date": "2019-06-29T10:08:09.247Z",
    "contactPerson": "Nolan Weber",
    "description": "Enim doloremque temporibus id adipisci. Debitis iure omnis consequatur. Laudantium harum omnis iste. Corporis aut aut quaerat aut. Inventore ut non aut blanditiis veniam beatae numquam in dolores. Fuga aut iure minima omnis sed aut eligendi provident ipsam.",
    "phone": "1-713-540-5163 x70062",
    "email": "Josiane_Maggio58@gmail.com",
    "status": "Do weryfikacji",
    "address": "Brzezińska 54, 91-610 Łódź",
    "geolat": 51.79693,
    "geolng": 19.52369
}, {
    "date": "2019-06-28T22:24:14.784Z",
    "contactPerson": "Joan Jacobson",
    "description": "Similique ea veritatis vero deleniti architecto. Consequatur optio recusandae et sit alias aliquam et dolor quis. Ut neque omnis unde rerum quis et explicabo. Distinctio ipsum voluptatem occaecati id ut temporibus minus quasi. Maxime rem sunt voluptatem molestiae.",
    "phone": "1-657-519-0619 x49743",
    "email": "Chester31@gmail.com",
    "status": "Do podjęcia",
    "address": "Jagienki 30, 92-439 Łódź",
    "geolat": 51.75358,
    "geolng": 19.57205
}, {
    "date": "2019-06-28T21:56:01.879Z",
    "contactPerson": "Alycia Skiles",
    "description": "Dignissimos sit temporibus aut voluptas debitis totam eius assumenda est. Eum sit et dicta voluptatem dolorem.",
    "phone": "(604) 327-7627 x9751",
    "email": "Ashton23@hotmail.com",
    "status": "W toku",
    "address": "Dąbrowskiego 48G, 93-277 Łódź",
    "geolat": 51.73749,
    "geolng": 19.4939
}, {
    "date": "2019-06-28T21:02:34.862Z",
    "contactPerson": "Elliot Bernhard",
    "description": "Laboriosam possimus ea ut doloremque vel occaecati in odio. Delectus sint numquam eveniet nisi.",
    "phone": "(196) 197-4395",
    "email": "Charlie8@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Teodora 4, 92-236 Łódź",
    "geolat": 51.76407,
    "geolng": 19.50634
}, {
    "date": "2019-06-28T21:02:51.383Z",
    "contactPerson": "Lukas Denesik",
    "description": "Minus ut ducimus vitae consequatur est odit eius nobis. Fuga iure voluptatem. Quo quas quibusdam velit et.",
    "phone": "038-859-4353",
    "email": "Linwood34@gmail.com",
    "status": "Zamknięta",
    "address": "Aleksandrowska 38, 91-151 Łódź",
    "geolat": 51.79714,
    "geolng": 19.39229
}, {
    "date": "2019-06-28T22:08:03.415Z",
    "contactPerson": "Lacey Rempel",
    "description": "Excepturi atque tempore officiis. Facilis laudantium officia ea voluptatem. Qui cupiditate quia omnis dolor facere fugiat fugit. Molestiae iste dolores qui hic quia. Mollitia rerum recusandae assumenda in aut assumenda rerum.",
    "phone": "067.934.9282",
    "email": "Amira.Reinger88@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Piotrkowska 232 LOK. 1A, 90-360 Łódź",
    "geolat": 51.75299,
    "geolng": 19.46027
}, {
    "date": "2019-06-29T09:45:47.135Z",
    "contactPerson": "Jaydon Green",
    "description": "Laudantium aperiam sed praesentium impedit enim fugit. Ducimus distinctio at deleniti unde.",
    "phone": "(137) 913-5126 x236",
    "email": "Cecile48@gmail.com",
    "status": "Do weryfikacji",
    "address": "Rzgowska 57 LOK 9, 93-008 Łódź",
    "geolat": 51.73267,
    "geolng": 19.47157
}, {
    "date": "2019-06-28T22:02:43.828Z",
    "contactPerson": "Ophelia Okuneva",
    "description": "Quia aut cum atque ipsum eos modi necessitatibus incidunt. Quod tempore et deleniti voluptatem ea dolores. Nostrum rerum molestiae fugiat. Repellat et pariatur quasi aut atque consequuntur hic qui deleniti.",
    "phone": "207.546.2676 x379",
    "email": "Adelbert.Dietrich@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Pl. Zwycięstwa 1, 56-400 Oleśnica",
    "geolat": 51.21084,
    "geolng": 17.3857
}, {
    "date": "2019-06-29T05:48:46.057Z",
    "contactPerson": "Orlando Harber",
    "description": "Culpa assumenda quasi. Aut rerum ut cumque ipsam incidunt. Libero blanditiis ut consequatur omnis ipsam. Autem voluptas et tenetur expedita et. A consequuntur quos quis eligendi harum ab rem.",
    "phone": "715.763.0112",
    "email": "Hardy.Little@gmail.com",
    "status": "Zamknięta",
    "address": "Reja 15, 56-400 Oleśnica",
    "geolat": 51.20421,
    "geolng": 19.94344
}, {
    "date": "2019-06-29T03:45:16.986Z",
    "contactPerson": "Jerrod Veum",
    "description": "Quo voluptatibus vel eos. Ipsum qui qui harum.",
    "phone": "423-680-3074 x3718",
    "email": "Barton48@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kochanowskiego 64, 56-400 Oleśnica",
    "geolat": 51.21017,
    "geolng": 17.38792
}, {
    "date": "2019-06-29T06:08:19.812Z",
    "contactPerson": "Esteban Trantow",
    "description": "Odio sunt officiis sit quae et veritatis dicta. Amet praesentium necessitatibus. Facilis cupiditate iste. Ut natus id reprehenderit minima in odio vero ut.",
    "phone": "1-010-955-3836",
    "email": "Carissa.Greenholt61@yahoo.com",
    "status": "Zamknięta",
    "address": "Sinapiusa 2, 56-400 Oleśnica",
    "geolat": 51.20954,
    "geolng": 17.38375
}, {
    "date": "2019-06-29T12:30:46.678Z",
    "contactPerson": "Forest Hudson",
    "description": "Atque corrupti consequatur autem et. Mollitia consectetur corporis et quod laudantium ex nisi id. Autem optio quas facere ex maxime voluptatem sequi magni.",
    "phone": "1-018-871-8875 x32850",
    "email": "Katrine_Hills@yahoo.com",
    "status": "Do podjęcia",
    "address": "Mościckiego (PAWILON), 56-400 Oleśnica",
    "geolat": 51.20345,
    "geolng": 17.39001
}, {
    "date": "2019-06-29T01:57:13.403Z",
    "contactPerson": "Monserrate Keeling",
    "description": "Aliquid ut voluptatem rem optio voluptatem tempora ex rerum. Odio ut porro reprehenderit. Asperiores corporis dolores expedita consequatur similique qui. Molestiae sed et iusto. Fugit vero voluptatibus omnis aliquid. Asperiores aperiam eaque inventore earum voluptas.",
    "phone": "(619) 355-1850 x298",
    "email": "Terrell52@yahoo.com",
    "status": "Zamknięta",
    "address": "Wojska Polskiego 18H, 56-400 Oleśnica",
    "geolat": 51.21442,
    "geolng": 17.39819
}, {
    "date": "2019-06-29T07:26:29.977Z",
    "contactPerson": "Rodolfo Shanahan",
    "description": "Et dolor tenetur ea explicabo culpa in ipsum et omnis. Alias ut aut alias provident. Enim explicabo et laboriosam voluptates officia amet nostrum vel deserunt.",
    "phone": "389-638-5728",
    "email": "Gilbert.Jacobs70@gmail.com",
    "status": "Do weryfikacji",
    "address": "Wrocławska 28, 56-400 Oleśnica",
    "geolat": 51.21179,
    "geolng": 17.37569
}, {
    "date": "2019-06-29T02:42:46.481Z",
    "contactPerson": "River Monahan",
    "description": "Exercitationem et vitae. Sunt et non. Distinctio non unde velit illum autem quia sed eos. Aut itaque dicta iure recusandae voluptatum.",
    "phone": "123.101.7766",
    "email": "Lue76@yahoo.com",
    "status": "Do podjęcia",
    "address": "Piotrkowska 2A, 45-316 Opole",
    "geolat": 50.67068,
    "geolng": 17.96872
}, {
    "date": "2019-06-29T06:17:27.706Z",
    "contactPerson": "Mara Schultz",
    "description": "Reprehenderit ut qui totam quidem. Voluptatem explicabo quo optio ea. Deserunt similique sint perferendis beatae. Quia quia cum cum ipsam quasi ut explicabo possimus. In sed error nam vel doloremque aliquam sequi. Velit porro omnis suscipit quod.",
    "phone": "993-568-2983",
    "email": "Nick13@hotmail.com",
    "status": "Zamknięta",
    "address": "Grota Roweckiego 4E, 45-268 Opole",
    "geolat": 50.6775,
    "geolng": 17.94384
}, {
    "date": "2019-06-28T16:38:18.495Z",
    "contactPerson": "Idella Hansen",
    "description": "Quas et et inventore magni consequatur ipsum non eum reiciendis. Nulla eos enim ex qui omnis rem provident.",
    "phone": "051-806-4442 x345",
    "email": "Shanny_Gutmann@gmail.com",
    "status": "W toku",
    "address": "Kośnego 26, 45-056 Opole",
    "geolat": 50.66981,
    "geolng": 17.93142
}, {
    "date": "2019-06-28T16:48:42.393Z",
    "contactPerson": "Monserrat Lebsack",
    "description": "Voluptate nihil expedita accusamus blanditiis assumenda magnam et. Sint delectus ipsum aut labore porro vel modi. Repudiandae et harum tempora. Est laboriosam sed illum ratione. Rem maiores repudiandae esse voluptatum eos voluptatibus possimus.",
    "phone": "326.301.0887 x9797",
    "email": "Creola.Spinka17@yahoo.com",
    "status": "Zamknięta",
    "address": "Telesfora 2/1, 45-339 Opole",
    "geolat": 50.66668,
    "geolng": 17.94739
}, {
    "date": "2019-06-29T15:56:10.380Z",
    "contactPerson": "Katarina Hayes",
    "description": "Laudantium ex labore dolorem. Est animi quo deserunt. Iusto doloremque occaecati et sunt. Provident sed harum minima earum.",
    "phone": "1-560-338-2660",
    "email": "Noemi.Hoeger@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Środkowa 1, 45-438 Opole",
    "geolat": 50.66445,
    "geolng": 17.98684
}, {
    "date": "2019-06-29T11:47:55.927Z",
    "contactPerson": "Winnifred Langworth",
    "description": "Nisi accusamus quia tempore. Totam ut dolores numquam qui numquam eaque. Possimus et nobis illum perspiciatis eaque.",
    "phone": "394-469-1224 x17400",
    "email": "Kaylee.Morar65@gmail.com",
    "status": "Do podjęcia",
    "address": "Os. Bolesława Chrobrego 117, 60-681 Poznań",
    "geolat": 52.44959,
    "geolng": 16.91673
}, {
    "date": "2019-06-28T21:54:19.334Z",
    "contactPerson": "Cassie Gleichner",
    "description": "Vero enim laudantium laborum aut. Dolor consequuntur amet. Quia reprehenderit aut praesentium. Recusandae quis harum nisi quaerat doloremque et ipsa. Commodi labore eum ea.",
    "phone": "(222) 395-6892 x409",
    "email": "Alejandrin_Leffler@gmail.com",
    "status": "W toku",
    "address": "Swoboda 44D, 60-391 Poznań",
    "geolat": 52.40741,
    "geolng": 16.87063
}, {
    "date": "2019-06-28T19:43:28.696Z",
    "contactPerson": "Joyce Spencer",
    "description": "Id incidunt quod sint eum. Sint quia qui minus doloremque pariatur distinctio eum. Quia iure labore impedit in non. Blanditiis iusto sit hic nisi nostrum quasi. Voluptatem quidem nobis quia quia quibusdam et doloribus repudiandae.",
    "phone": "494.915.4837",
    "email": "Lambert_Dach3@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Piłsudskiego 2B, 61-246 Poznań",
    "geolat": 52.39269,
    "geolng": 16.95
}, {
    "date": "2019-06-28T16:54:37.933Z",
    "contactPerson": "Alberta Purdy",
    "description": "Blanditiis adipisci expedita nesciunt. Ad qui ipsum velit. Fugit voluptatem aliquam. Enim reprehenderit consequatur autem quos delectus sint.",
    "phone": "055.098.3115",
    "email": "Webster.Bayer54@gmail.com",
    "status": "Zamknięta",
    "address": "Głogowska 81, 60-001 Poznań",
    "geolat": 52.39484,
    "geolng": 16.89974
}, {
    "date": "2019-06-29T00:35:47.772Z",
    "contactPerson": "Karelle Champlin",
    "description": "Quos laudantium quo et iusto. Eaque culpa libero sed iste.",
    "phone": "(807) 560-5694 x9384",
    "email": "Harmon_Streich95@yahoo.com",
    "status": "W toku",
    "address": "Głogowska 16, 60-734 Poznań",
    "geolat": 52.40134,
    "geolng": 16.90779
}, {
    "date": "2019-06-28T19:56:10.389Z",
    "contactPerson": "Wanda Greenfelder",
    "description": "Autem culpa sed. Ut enim magni quia reiciendis adipisci mollitia est. Enim inventore in eum nisi. Maiores atque architecto deserunt nobis vel iste corrupti sit ut.",
    "phone": "789-803-9607 x1168",
    "email": "Elwin71@hotmail.com",
    "status": "Zamknięta",
    "address": "Promienista 104, 60-142 Poznań",
    "geolat": 52.39033,
    "geolng": 16.8738
}, {
    "date": "2019-06-29T01:49:56.687Z",
    "contactPerson": "Alivia Stroman",
    "description": "Sit pariatur quibusdam eaque sint in. Odit voluptas delectus delectus molestiae nihil laudantium vel laudantium eum. Facere atque illum blanditiis quia vero. Nisi voluptatibus rerum est nostrum aspernatur est et voluptatem aut. Aperiam ut nostrum et enim quis. Suscipit quia consequuntur optio et eos et officiis sint corrupti.",
    "phone": "000-912-7338 x2204",
    "email": "Megane.Hirthe@yahoo.com",
    "status": "Do podjęcia",
    "address": "Os. Rzeczpospolitej 14, 61-306 Poznań",
    "geolat": 52.38673,
    "geolng": 16.9466
}, {
    "date": "2019-06-28T19:36:30.886Z",
    "contactPerson": "Cecilia Wolf",
    "description": "In saepe consequatur dolorem corporis voluptatem ut ullam. Ut est quam corporis et repudiandae omnis doloremque consequatur omnis. Ut excepturi magnam eaque dolor et quidem. Odit ipsa dicta. Repudiandae aut quidem officiis fugit illo enim ea voluptatibus.",
    "phone": "945-639-2586",
    "email": "Stacy.Hilll87@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Leszka 17, 61-062 Poznań",
    "geolat": 52.40782,
    "geolng": 17.02331
}, {
    "date": "2019-06-29T10:52:35.209Z",
    "contactPerson": "Stella Hoeger",
    "description": "Velit ad maiores unde laudantium sit. Expedita quae voluptas illo vel culpa assumenda ex eaque eos. Quis harum asperiores et suscipit aut. Qui nihil et.",
    "phone": "(374) 154-6134",
    "email": "Van99@hotmail.com",
    "status": "W toku",
    "address": "23 Lutego 14, 61-745 Poznań",
    "geolat": 52.40992,
    "geolng": 16.92716
}, {
    "date": "2019-06-28T16:49:20.705Z",
    "contactPerson": "Ramona Toy",
    "description": "Similique dolor et consequatur expedita et totam et. Voluptates adipisci cupiditate. Itaque consequatur quam. Soluta cum rerum voluptas.",
    "phone": "1-698-593-0446 x84485",
    "email": "Jannie46@yahoo.com",
    "status": "W toku",
    "address": "Jesionowa 20/4, 61-434 Poznań",
    "geolat": 52.36684,
    "geolng": 16.89571
}, {
    "date": "2019-06-28T20:14:59.941Z",
    "contactPerson": "Gregorio Gutkowski",
    "description": "Mollitia voluptas vel perspiciatis et. Ratione repellendus asperiores illum illum placeat et. At rem delectus et autem.",
    "phone": "046-996-7689",
    "email": "Jane26@gmail.com",
    "status": "W toku",
    "address": "Międzychodzka 16/31, 60-371 Poznań",
    "geolat": 52.40675,
    "geolng": 16.87786
}, {
    "date": "2019-06-29T15:00:06.956Z",
    "contactPerson": "Aubrey Lowe",
    "description": "Sequi ipsa explicabo eos repudiandae qui impedit doloribus tempora. Possimus eos reprehenderit nihil. Quia at quos dolore odit nisi sapiente corporis. Molestias fugiat repellendus consequatur nihil voluptas dolorem nisi cupiditate debitis.",
    "phone": "925.870.1056",
    "email": "Leilani12@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Polna 2, 60-576 Poznań",
    "geolat": 52.41364,
    "geolng": 16.8971
}, {
    "date": "2019-06-29T06:45:42.673Z",
    "contactPerson": "Armand McKenzie",
    "description": "Dolor eius laudantium omnis. Molestiae doloremque dolor. Ab sequi necessitatibus autem veritatis. Sapiente nobis quidem quis quis reiciendis. Voluptatem assumenda laborum sint iure at natus voluptatem nesciunt ut.",
    "phone": "193.249.3300",
    "email": "Clyde.Ledner70@yahoo.com",
    "status": "W toku",
    "address": "Dolina 5D/5, 61-551 Poznań",
    "geolat": 52.39409,
    "geolng": 16.92428
}, {
    "date": "2019-06-28T22:44:59.316Z",
    "contactPerson": "Eulah McLaughlin",
    "description": "Dolores ex totam ad. Ut reiciendis molestiae eligendi sequi occaecati ratione quas. Magnam et ipsa occaecati. Ex alias magnam dolores sequi velit necessitatibus ipsa ipsum perspiciatis. Aperiam suscipit iure dolorem omnis voluptas et.",
    "phone": "(062) 926-4996",
    "email": "Laron_Hartmann@gmail.com",
    "status": "Do podjęcia",
    "address": "Ściegiennego 64/PAW 12, 60-139 Poznań",
    "geolat": 52.39034,
    "geolng": 16.87525
}, {
    "date": "2019-06-28T22:47:15.284Z",
    "contactPerson": "Gwen Jerde",
    "description": "Quae rerum alias consequatur saepe dolor. Quaerat quasi corrupti itaque harum cum ullam. Ut error voluptates non architecto qui hic. Impedit porro magni et consequatur omnis.",
    "phone": "(232) 955-4650 x924",
    "email": "Madyson.Goldner87@yahoo.com",
    "status": "Do podjęcia",
    "address": "Os. Bolesława Śmiałego 16, 60-682 Poznań",
    "geolat": 52.45119,
    "geolng": 16.92553
}, {
    "date": "2019-06-28T18:58:16.764Z",
    "contactPerson": "Myrl Feil",
    "description": "Voluptas ea est aspernatur voluptatem rerum quo fugiat numquam quia. Molestiae cum sequi sint rerum quo et. Et accusantium iure aut accusantium ipsam at assumenda delectus a.",
    "phone": "775-360-4341",
    "email": "Leonard.Ferry@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Szamarzewskiego 33, 60-568 Poznań",
    "geolat": 52.41137,
    "geolng": 16.89658
}, {
    "date": "2019-06-29T14:51:45.208Z",
    "contactPerson": "Francisco Goodwin",
    "description": "Modi ut dolorum aut itaque. Molestias vero quia eum exercitationem dolore. Voluptatem ut eligendi. Voluptatem maiores quidem iste dolores voluptate est accusamus sunt. Explicabo ad sunt libero nemo qui sint voluptatibus vitae ea.",
    "phone": "1-713-941-6596 x720",
    "email": "Maria.Renner98@yahoo.com",
    "status": "Zamknięta",
    "address": "Os. Władysława Łokietka 102, 61-616 Poznań",
    "geolat": 52.44942,
    "geolng": 16.94184
}, {
    "date": "2019-06-28T21:24:52.309Z",
    "contactPerson": "Talon Heller",
    "description": "Ut impedit est quidem inventore velit qui iste nam est. Beatae pariatur suscipit blanditiis quam.",
    "phone": "186.663.0054",
    "email": "Marge.Kuvalis95@yahoo.com",
    "status": "Zamknięta",
    "address": "Półwiejska 22, 61-888 Poznań",
    "geolat": 52.40282,
    "geolng": 16.9294
}, {
    "date": "2019-06-29T00:43:48.243Z",
    "contactPerson": "Asa Lueilwitz",
    "description": "Autem temporibus possimus aut. Et vero pariatur.",
    "phone": "157.832.9429",
    "email": "Allie_Powlowski72@gmail.com",
    "status": "W toku",
    "address": "Głuszyna 58B, 61-332 Poznań",
    "geolat": 52.33435,
    "geolng": 16.92517
}, {
    "date": "2019-06-28T16:47:40.230Z",
    "contactPerson": "Hershel Hilll",
    "description": "Non necessitatibus eius et autem. Id qui eum quibusdam perferendis dicta ab. In tempora corrupti est harum odit et molestiae odit.",
    "phone": "(645) 353-7034 x0020",
    "email": "Newell.DAmore@gmail.com",
    "status": "Zamknięta",
    "address": "Os. Przemysława 8C, 61-101 Poznań",
    "geolat": 52.38981,
    "geolng": 17.00267
}, {
    "date": "2019-06-29T01:13:21.776Z",
    "contactPerson": "Emily Adams",
    "description": "Omnis eos sit. Consequatur debitis qui deserunt reiciendis sint nam deserunt sunt. Nihil accusantium asperiores quidem tempore nobis earum et voluptatem expedita.",
    "phone": "452.254.2706 x19738",
    "email": "Davion.Borer@hotmail.com",
    "status": "W toku",
    "address": "Os. Chrobrego 26 PAW11, 60-681 Poznań",
    "geolat": 52.45064,
    "geolng": 16.91687
}, {
    "date": "2019-06-29T04:52:44.369Z",
    "contactPerson": "Charley Kautzer",
    "description": "Reprehenderit nulla eveniet possimus quidem quia. Quisquam sapiente non. Et est et non quam numquam fuga sapiente dolorem.",
    "phone": "741-476-8332",
    "email": "Sydney_Jaskolski@gmail.com",
    "status": "Do podjęcia",
    "address": "Wierzbięcice 15/1, 61-561 Poznań",
    "geolat": 52.39786,
    "geolng": 16.9215
}, {
    "date": "2019-06-28T16:21:36.991Z",
    "contactPerson": "Skylar Hudson",
    "description": "Natus itaque delectus. Voluptatem autem et est et quis aperiam architecto omnis.",
    "phone": "1-340-788-3524 x6444",
    "email": "Crawford.Aufderhar@yahoo.com",
    "status": "Zamknięta",
    "address": "Głogowska 132/140, 60-246 Poznań",
    "geolat": 52.38748,
    "geolng": 16.89051
}, {
    "date": "2019-06-29T03:06:28.955Z",
    "contactPerson": "Madelynn Rosenbaum",
    "description": "Voluptate dolores harum atque molestiae natus quia amet doloremque. Aut voluptas nesciunt veritatis deserunt harum enim magnam. Laudantium officia tempora et earum magni. Accusamus occaecati aut accusamus.",
    "phone": "647-978-6603 x985",
    "email": "Hanna.Denesik@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Kościelna/Dąbrowskiego 1, 60-995 Poznań",
    "geolat": 52.41288,
    "geolng": 16.90377
}, {
    "date": "2019-06-28T20:30:50.332Z",
    "contactPerson": "Bernardo Nader",
    "description": "Nobis debitis consequatur doloribus autem nesciunt repudiandae. Dicta exercitationem et ullam ex. Ut quia et tempore.",
    "phone": "947.850.1906",
    "email": "Maci.Rogahn99@hotmail.com",
    "status": "Do podjęcia",
    "address": "Słowiańska 70B, 61-664 Poznań",
    "geolat": 52.42986,
    "geolng": 16.94087
}, {
    "date": "2019-06-29T10:02:03.711Z",
    "contactPerson": "Thalia Barton",
    "description": "Qui reprehenderit natus commodi sunt nulla ut aut dolorem. Atque nam quas labore ipsa qui dolor quae excepturi.",
    "phone": "1-931-303-4333 x77567",
    "email": "Allison.Dooley@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Gałczyńskiego 46, 60-194 Poznań",
    "geolat": 52.40851,
    "geolng": 16.85264
}, {
    "date": "2019-06-29T09:05:54.850Z",
    "contactPerson": "Dion Adams",
    "description": "Enim excepturi culpa quasi enim nihil eos labore qui. Eaque cum qui nulla atque voluptate temporibus. Saepe sit alias voluptatem. Accusamus est dicta. Architecto enim veritatis ea vitae quia nostrum distinctio laboriosam culpa.",
    "phone": "100.100.2052 x508",
    "email": "Hannah8@hotmail.com",
    "status": "W toku",
    "address": "Os. Orła Białego PAW.3, 61-251 Poznań",
    "geolat": 52.37711,
    "geolng": 16.9615
}, {
    "date": "2019-06-29T01:35:01.191Z",
    "contactPerson": "Ari Towne",
    "description": "Molestiae rerum explicabo ab. Quos velit sapiente dolor adipisci repudiandae minus. Soluta praesentium sed laudantium praesentium ab pariatur eaque.",
    "phone": "177-768-3626",
    "email": "Howard57@yahoo.com",
    "status": "Zamknięta",
    "address": "Chojnicka 60, 60-480 Poznań",
    "geolat": 52.47766,
    "geolng": 16.78443
}, {
    "date": "2019-06-29T08:48:13.891Z",
    "contactPerson": "Barton Haag",
    "description": "Fugit consequatur voluptatem et repellendus iste placeat fuga. Fugiat necessitatibus reiciendis quae fuga explicabo voluptatem. Eveniet harum distinctio accusantium excepturi totam. Ex et repellendus illo quibusdam magni rerum sed. Dolores dolor autem perferendis.",
    "phone": "(644) 536-8701",
    "email": "Amiya_Goyette@hotmail.com",
    "status": "Do podjęcia",
    "address": "Langiewicza 23/U1, 61-502 Poznań",
    "geolat": 52.38782,
    "geolng": 16.91737
}, {
    "date": "2019-06-29T09:45:30.495Z",
    "contactPerson": "Laura Grant",
    "description": "Ipsum deserunt enim autem et. Qui deleniti eos.",
    "phone": "1-567-369-4720 x27120",
    "email": "Verona.Lakin@hotmail.com",
    "status": "W toku",
    "address": "Głogowska 117, 60-266 Poznań",
    "geolat": 52.39034,
    "geolng": 16.89436
}, {
    "date": "2019-06-29T00:49:53.884Z",
    "contactPerson": "Katrina Lynch",
    "description": "Dicta aliquid perspiciatis fugit quo qui. Aspernatur id similique dolores quas. Sit dolores dolor natus incidunt non quas consequatur et. Ut a tempore minima beatae laborum sint.",
    "phone": "494.975.1914 x8073",
    "email": "Jackie.Mohr@gmail.com",
    "status": "Do podjęcia",
    "address": "Falista 4A, 61-249 Poznań",
    "geolat": 52.36933,
    "geolng": 16.94684
}, {
    "date": "2019-06-29T01:29:17.677Z",
    "contactPerson": "Lacy Jaskolski",
    "description": "Nam ad ea dolorem quasi et laudantium nostrum. Et et sed quae earum. Qui exercitationem ut eligendi quas quod aut molestiae reiciendis quod. Ut ipsam id minima ut iste minus totam. Id pariatur et et vitae laborum ab in est.",
    "phone": "(403) 943-0022 x1162",
    "email": "Murl_Welch90@yahoo.com",
    "status": "Zamknięta",
    "address": "Trzebiatowska 18C, 60-432 Poznań",
    "geolat": 52.43691,
    "geolng": 16.83704
}, {
    "date": "2019-06-29T14:24:38.455Z",
    "contactPerson": "Drew Kemmer",
    "description": "Facilis omnis voluptatem unde non earum dolorem dicta. Nisi ratione quibusdam at quia animi odio quisquam non sed.",
    "phone": "(488) 033-1238 x8953",
    "email": "Edwina_Keeling24@yahoo.com",
    "status": "Do podjęcia",
    "address": "Milczańska 16, 61-131 Poznań",
    "geolat": 52.39221,
    "geolng": 16.9654
}, {
    "date": "2019-06-29T06:11:25.036Z",
    "contactPerson": "Elmore Strosin",
    "description": "Facilis illum velit. Molestiae et doloribus voluptates non nisi omnis maiores. Id tempore eius. Vero error nobis sint quae quaerat quidem quod.",
    "phone": "(379) 250-5586 x9157",
    "email": "Blair7@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Warszawska 88, 61-021 Poznań",
    "geolat": 52.40932,
    "geolng": 16.98187
}, {
    "date": "2019-06-29T06:44:19.616Z",
    "contactPerson": "Logan Stamm",
    "description": "Error voluptates vitae. Consequatur qui minus non.",
    "phone": "000.401.4392 x986",
    "email": "Jeff64@gmail.com",
    "status": "Zamknięta",
    "address": "Os. Lecha 43, 61-294 Poznań",
    "geolat": 52.39024,
    "geolng": 16.97368
}, {
    "date": "2019-06-28T21:43:11.389Z",
    "contactPerson": "Federico Lind",
    "description": "Totam quos soluta expedita molestias fuga perspiciatis. Est perferendis nihil dicta.",
    "phone": "(717) 601-6268",
    "email": "Syble.Beier31@gmail.com",
    "status": "W toku",
    "address": "Obornicka 291, 60-691 Poznań",
    "geolat": 52.4546,
    "geolng": 16.89721
}, {
    "date": "2019-06-29T00:50:36.394Z",
    "contactPerson": "Javonte Kuphal",
    "description": "Molestiae nobis qui omnis dolor quis sequi. Nobis impedit dolorum soluta at itaque. Vel veniam in ipsam repudiandae reprehenderit. Et odio exercitationem doloremque ducimus voluptas eum.",
    "phone": "738.397.5576",
    "email": "Rosamond.Champlin@yahoo.com",
    "status": "Zamknięta",
    "address": "Os. Łokietka 1, 61-616 Poznań",
    "geolat": 52.45104,
    "geolng": 16.93683
}, {
    "date": "2019-06-29T07:20:46.497Z",
    "contactPerson": "Nickolas Schmeler",
    "description": "Quis veritatis vitae amet voluptatem rerum molestiae delectus et. Aut consectetur repellat. Neque minus vel enim velit magnam. Repellat asperiores consequatur dolor. Et ex ut possimus sunt minus doloribus id. Qui veritatis voluptatem.",
    "phone": "919-277-2514 x024",
    "email": "Mckayla.Thiel@yahoo.com",
    "status": "Do podjęcia",
    "address": "Gdyńska 25/5, 58-100 Świdnica",
    "geolat": 50.84944,
    "geolng": 16.48747
}, {
    "date": "2019-06-28T20:29:34.706Z",
    "contactPerson": "Kattie Schroeder",
    "description": "Architecto error rem. Corporis nesciunt labore.",
    "phone": "712-804-0478 x51163",
    "email": "Malinda_Spinka@gmail.com",
    "status": "Do podjęcia",
    "address": "Niecała 10, 58-100 Świdnica",
    "geolat": 50.83938,
    "geolng": 16.47135
}, {
    "date": "2019-06-28T23:25:00.681Z",
    "contactPerson": "Camilla Cormier",
    "description": "Omnis dolore in. Qui ipsum veritatis est excepturi et ipsum officia. Illo iusto itaque rerum impedit tempora tempora cumque. Officia aut maxime similique. Corrupti sunt repellendus. Sequi molestiae at aut odio.",
    "phone": "1-964-804-0157",
    "email": "Haley10@hotmail.com",
    "status": "Zamknięta",
    "address": "Łukowa 5, 58-100 Świdnica",
    "geolat": 50.84178,
    "geolng": 16.48542
}, {
    "date": "2019-06-28T20:09:21.999Z",
    "contactPerson": "Verlie Fritsch",
    "description": "Rem rerum quidem eius iure. Rerum et voluptas beatae at. Quod eos voluptas nihil consequatur necessitatibus eos sed quidem consequatur. Et ab doloribus error quasi quo. Et voluptatum aut.",
    "phone": "(545) 897-8378 x679",
    "email": "Aglae_Halvorson@hotmail.com",
    "status": "W toku",
    "address": "Powstańców Śląskich  45 , 01-355 Warszawa",
    "geolat": 52.22969,
    "geolng": 20.91461
}, {
    "date": "2019-06-29T07:59:30.097Z",
    "contactPerson": "Tyrell Wisoky",
    "description": "Eaque nostrum optio et culpa eum architecto enim. A voluptate qui. Ipsum veniam maiores et ducimus repellat ea pariatur. Non qui iure nulla qui architecto. Non ut eaque repudiandae inventore.",
    "phone": "381-080-4680 x60434",
    "email": "Patricia_Hammes11@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Kazury 6, 02-795 Warszawa",
    "geolat": 52.14018,
    "geolng": 21.04579
}, {
    "date": "2019-06-29T03:39:49.418Z",
    "contactPerson": "Geovany Miller",
    "description": "Consequatur beatae et omnis qui ut animi delectus. Laborum nihil a non sint ea expedita voluptatem qui facilis. Et eaque similique quae ut non omnis ut.",
    "phone": "349-521-3524",
    "email": "Raymond60@gmail.com",
    "status": "W toku",
    "address": "Dobra 19 (RÓG TAMKI), 00-384 Warszawa",
    "geolat": 52.23796,
    "geolng": 21.02825
}, {
    "date": "2019-06-29T06:27:24.902Z",
    "contactPerson": "Johnnie DuBuque",
    "description": "Esse accusamus voluptate optio saepe non. Quos porro nisi temporibus vel. Velit officia unde rerum qui quod accusantium voluptatem provident.",
    "phone": "157-351-1238 x8526",
    "email": "Garnett30@yahoo.com",
    "status": "Zamknięta",
    "address": "Goździków 29/31 LOK 23, 04-231 Warszawa",
    "geolat": 52.2391,
    "geolng": 21.13887
}, {
    "date": "2019-06-28T21:10:42.608Z",
    "contactPerson": "Rowland VonRueden",
    "description": "Mollitia et quis blanditiis nisi. Amet et necessitatibus mollitia rerum ducimus delectus atque doloremque. Iure nihil praesentium quibusdam adipisci nisi quisquam aut sint libero. Qui sint ut numquam esse.",
    "phone": "838.668.5659",
    "email": "Winona.Hermann@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Sołtana 1A, 01-494 Warszawa",
    "geolat": 52.25349,
    "geolng": 20.92464
}, {
    "date": "2019-06-29T11:03:34.752Z",
    "contactPerson": "Albin Wilderman",
    "description": "Vero laboriosam dolor odio placeat minima autem odio architecto quos. Inventore consequatur et. Cum est expedita corporis. Possimus quo quaerat sed pariatur illum illo eos voluptates quas. Molestiae aut rerum natus voluptates optio deleniti mollitia.",
    "phone": "(498) 732-6825 x4741",
    "email": "Evie.Hilll75@hotmail.com",
    "status": "W toku",
    "address": "Smocza 21, 01-051 Warszawa",
    "geolat": 52.24788,
    "geolng": 20.98354
}, {
    "date": "2019-06-29T10:39:43.220Z",
    "contactPerson": "Webster Swift",
    "description": "Tempora nostrum tempore laboriosam. Voluptate ut et quae. Quasi deserunt itaque deleniti delectus. Similique odit in ipsa illum est optio eaque quo.",
    "phone": "284-691-2833",
    "email": "Laverna97@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kaliska 5, 02-316 Warszawa",
    "geolat": 52.21826,
    "geolng": 20.98102
}, {
    "date": "2019-06-28T17:20:56.471Z",
    "contactPerson": "Keara Klein",
    "description": "Sed dolorum maiores ut dolores placeat laborum similique quibusdam fugiat. Reprehenderit eos magnam cumque. Non facilis ducimus possimus sed sint vel.",
    "phone": "424-791-1120 x77378",
    "email": "Pauline_Ziemann16@gmail.com",
    "status": "Do podjęcia",
    "address": "Al. Krakowska 264, 02-210 Warszawa",
    "geolat": 52.1926,
    "geolng": 20.96071
}, {
    "date": "2019-06-29T09:20:02.472Z",
    "contactPerson": "Glen Waters",
    "description": "Deserunt asperiores est optio a porro blanditiis at suscipit distinctio. Et consequatur voluptatem et voluptas minima qui earum explicabo. Et maxime quo incidunt doloremque et ea inventore temporibus. Necessitatibus tempora suscipit alias omnis non soluta consectetur blanditiis ea. Nemo voluptates quis laudantium labore.",
    "phone": "1-476-126-5154 x0317",
    "email": "Idell_Runolfsson76@gmail.com",
    "status": "Do podjęcia",
    "address": "Pancera 10, 03-187 Warszawa",
    "geolat": 52.31994,
    "geolng": 20.94632
}, {
    "date": "2019-06-29T09:17:58.418Z",
    "contactPerson": "Makayla Tremblay",
    "description": "Beatae dolorem voluptas ipsa. Enim sint amet ea. Enim atque ab dolorem nulla. Voluptate voluptatem et molestias ut dolores quod magnam. Vel quia voluptatem est incidunt aliquam in ut et. Velit qui natus eum quo cumque ut.",
    "phone": "364-007-0530",
    "email": "Ruthe26@yahoo.com",
    "status": "W toku",
    "address": "Al. Komisji Edukacji Narodowej 46/U4, 02-797 Warszawa",
    "geolat": 52.14155,
    "geolng": 21.05516
}, {
    "date": "2019-06-28T17:02:56.453Z",
    "contactPerson": "Piper Greenholt",
    "description": "Vel porro provident in eos excepturi nulla earum et. Temporibus enim neque nesciunt aperiam veniam ducimus. Harum qui repudiandae ullam temporibus nobis omnis ullam. Aut non eos et hic quaerat quia omnis repudiandae. Reiciendis sed recusandae velit nemo nam et eligendi. At mollitia rem molestiae totam.",
    "phone": "164.790.9803 x09294",
    "email": "Emery_Ward69@gmail.com",
    "status": "Do podjęcia",
    "address": "Włodarzewska 58L, 02-384 Warszawa",
    "geolat": 52.20284,
    "geolng": 20.95475
}, {
    "date": "2019-06-28T23:07:53.089Z",
    "contactPerson": "Fletcher Hahn",
    "description": "Laboriosam ipsa optio amet magnam sit ut et rerum. Aut unde et iusto dolorum. Ut soluta ipsam facere id. Distinctio aut repellat. Fuga ut est nulla ad. Molestiae et dolores qui et qui error distinctio voluptas et.",
    "phone": "(387) 924-4960",
    "email": "Keyon_Watsica29@hotmail.com",
    "status": "W toku",
    "address": "Blokowa 23B, 03-641 Warszawa",
    "geolat": 52.28658,
    "geolng": 21.06227
}, {
    "date": "2019-06-29T14:44:38.298Z",
    "contactPerson": "Michel Hahn",
    "description": "Quia velit voluptas et dolores ut eum. Minima sit fugit illo dolorum incidunt saepe et et ut. Quia aut earum sit debitis et nesciunt recusandae. Qui et id sapiente labore aut similique. Aperiam explicabo non. Fuga molestias ea tempora et id voluptate tempore amet.",
    "phone": "1-360-965-8812 x1081",
    "email": "Zelma93@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Soczi 4A, 02-760 Warszawa",
    "geolat": 52.18104,
    "geolng": 21.05407
}, {
    "date": "2019-06-28T22:15:45.458Z",
    "contactPerson": "Sincere Will",
    "description": "Ipsum et et. Harum itaque occaecati ut quia quas sint. Neque velit veniam esse labore.",
    "phone": "(614) 766-3239 x7388",
    "email": "Rosalia.Pfannerstill84@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kobielska 11, 04-359 Warszawa",
    "geolat": 52.24666,
    "geolng": 21.0876
}, {
    "date": "2019-06-28T16:42:13.000Z",
    "contactPerson": "Audrey Wolff",
    "description": "Culpa adipisci esse quaerat non nobis ipsum pariatur. Qui voluptatum eos saepe. Laudantium libero et aut. Et consectetur illo. Labore quae quae sunt nobis omnis id. Architecto temporibus ratione aut numquam eos dolore.",
    "phone": "919-767-1396 x605",
    "email": "Arielle.Kemmer@gmail.com",
    "status": "Do podjęcia",
    "address": "Stalowa 60/64, 03-429 Warszawa",
    "geolat": 52.26321,
    "geolng": 21.05065
}, {
    "date": "2019-06-29T00:25:35.757Z",
    "contactPerson": "Tatum Blanda",
    "description": "Dolorem autem in similique maiores. Aut cupiditate quaerat fugit qui alias. Magnam illum laboriosam corporis consequatur et qui. Et quibusdam et qui iure ut sequi recusandae.",
    "phone": "1-281-172-1024 x5488",
    "email": "Celia_Gusikowski64@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Wałbrzyska 11 LOK. 40, 02-739 Warszawa",
    "geolat": 52.17246,
    "geolng": 21.02517
}, {
    "date": "2019-06-28T19:11:02.430Z",
    "contactPerson": "Sabrina Schultz",
    "description": "Similique impedit ipsum quidem veritatis. Ad sint vero accusamus voluptas consequatur.",
    "phone": "275.280.9686 x932",
    "email": "Freddy41@hotmail.com",
    "status": "Do podjęcia",
    "address": "Żelazna 91, 00-879 Warszawa",
    "geolat": 52.23925,
    "geolng": 20.98734
}, {
    "date": "2019-06-29T05:03:42.384Z",
    "contactPerson": "Candace Weber",
    "description": "Facilis et delectus explicabo expedita est tenetur consequatur et. Qui aliquid unde doloribus sed aut. Aut placeat debitis sit. Velit neque quaerat.",
    "phone": "415-422-3362",
    "email": "Melyna.Mosciski@gmail.com",
    "status": "Do weryfikacji",
    "address": "Białostocka 9, 03-741 Warszawa",
    "geolat": 52.25754,
    "geolng": 21.04641
}, {
    "date": "2019-06-29T00:17:04.705Z",
    "contactPerson": "Madelynn Macejkovic",
    "description": "Aut quia omnis sed inventore expedita quo. Vel consequuntur qui autem. Quaerat laboriosam et iure placeat quas.",
    "phone": "146.336.0453 x19516",
    "email": "Arjun.Wunsch@yahoo.com",
    "status": "Do podjęcia",
    "address": "Aluzyjna 34, 03-149 Warszawa",
    "geolat": 52.34794,
    "geolng": 20.94433
}, {
    "date": "2019-06-28T21:18:57.933Z",
    "contactPerson": "Flavio Pfannerstill",
    "description": "Doloribus delectus aut deleniti voluptate. Fuga aliquid aut. Totam cupiditate blanditiis deleniti harum.",
    "phone": "(785) 684-7354",
    "email": "Shaina.Kohler@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kabacki Dukt 18/A5, 02-798 Warszawa",
    "geolat": 52.13049,
    "geolng": 21.06471
}, {
    "date": "2019-06-28T19:10:31.645Z",
    "contactPerson": "Susie Willms",
    "description": "Necessitatibus exercitationem nemo. Eaque enim impedit nihil illum quia. Deserunt cupiditate maiores recusandae possimus qui saepe nesciunt sequi officiis. Cumque nulla dicta consequatur similique. Ad vel mollitia possimus tenetur sapiente qui natus.",
    "phone": "093.051.6280",
    "email": "Chet.Cartwright@gmail.com",
    "status": "Zamknięta",
    "address": "Herbsta 1, 02-784 Warszawa",
    "geolat": 52.15531,
    "geolng": 21.0337
}, {
    "date": "2019-06-29T14:18:54.326Z",
    "contactPerson": "Genevieve Waters",
    "description": "Perferendis accusamus quaerat et et eius neque consequatur dignissimos id. Dolor in vel sed eligendi fugit officiis temporibus. Quod ea nostrum quia nihil odio dolores occaecati in. Pariatur et et temporibus in ullam nostrum error eum. Aut laudantium nemo doloribus alias.",
    "phone": "399-677-6072 x829",
    "email": "Cary.Luettgen@gmail.com",
    "status": "Zamknięta",
    "address": "Dereniowa 6, 02-776 Warszawa",
    "geolat": 52.14543,
    "geolng": 21.04456
}, {
    "date": "2019-06-29T10:43:49.852Z",
    "contactPerson": "Pierre Maggio",
    "description": "Praesentium aut aliquam qui voluptatibus natus ipsum. Sapiente iste accusamus voluptates autem. Ratione nam esse commodi aliquid rerum placeat molestiae.",
    "phone": "(795) 470-3333 x796",
    "email": "Baby.Hodkiewicz12@gmail.com",
    "status": "Zamknięta",
    "address": "Domaniewska (LOTTO) 17/19, 02-672 Warszawa",
    "geolat": 52.18339,
    "geolng": 21.01473
}, {
    "date": "2019-06-28T20:05:59.515Z",
    "contactPerson": "Marquise Mills",
    "description": "Nulla blanditiis et nostrum illum. Quae quo quod mollitia vel dolores blanditiis veritatis aut. Quae exercitationem amet voluptatem architecto.",
    "phone": "1-186-243-2141",
    "email": "Wilhelmine_Spencer89@gmail.com",
    "status": "Zamknięta",
    "address": "Czumy 6A, 01-355 Warszawa",
    "geolat": 52.23658,
    "geolng": 20.91077
}, {
    "date": "2019-06-29T08:15:58.492Z",
    "contactPerson": "Rose Davis",
    "description": "Quis sunt dicta. Rem aspernatur aut quia quis ut temporibus. Ullam laborum alias exercitationem. Non consequatur impedit nihil beatae voluptatem non hic officia sed. Sint dolorum adipisci sunt incidunt dolores.",
    "phone": "397-349-8433 x5938",
    "email": "Erik.Lowe@gmail.com",
    "status": "Zamknięta",
    "address": "Abrahama 2B/12, 03-982 Warszawa",
    "geolat": 52.22692,
    "geolng": 21.08568
}, {
    "date": "2019-06-28T18:56:06.440Z",
    "contactPerson": "Tina Ferry",
    "description": "Et modi doloremque aut debitis iusto quisquam velit. Ex qui voluptatem. In repellat quisquam sit eaque. Quia sunt enim aut corporis ab incidunt beatae accusantium.",
    "phone": "1-486-121-5048 x741",
    "email": "Gabriella90@hotmail.com",
    "status": "Zamknięta",
    "address": "Bora Komorowskiego 5C, 03-982 Warszawa",
    "geolat": 52.22402,
    "geolng": 21.09655
}, {
    "date": "2019-06-29T15:33:06.432Z",
    "contactPerson": "Louisa Gerlach",
    "description": "Aliquid pariatur consequatur neque maxime magnam excepturi. Quod reiciendis officia iste quidem ratione magnam similique. Rem temporibus fugiat error quos qui autem omnis facere natus.",
    "phone": "369-464-4392 x3487",
    "email": "Isabelle_Barton@gmail.com",
    "status": "Do weryfikacji",
    "address": "Żabińskiego 7, 02-793 Warszawa",
    "geolat": 52.1369,
    "geolng": 21.05814
}, {
    "date": "2019-06-29T01:58:21.089Z",
    "contactPerson": "Jamey Jakubowski",
    "description": "Dolores alias reprehenderit unde repellat saepe et. Et explicabo voluptatibus quis sit adipisci libero excepturi odit.",
    "phone": "1-499-841-6073 x9547",
    "email": "Alejandra_Runolfsson@hotmail.com",
    "status": "W toku",
    "address": "Nowy Świat 41A, 00-042 Warszawa",
    "geolat": 52.23423,
    "geolng": 21.01694
}, {
    "date": "2019-06-29T03:27:09.186Z",
    "contactPerson": "Keeley Sawayn",
    "description": "Tempora reprehenderit recusandae et. Modi omnis quibusdam nemo perferendis et. Laborum maiores et id beatae ab. Id explicabo magni molestias debitis et at aut similique.",
    "phone": "1-854-511-1873",
    "email": "Quentin_Auer9@yahoo.com",
    "status": "Zamknięta",
    "address": "Dzielna 5, 00-162 Warszawa",
    "geolat": 52.24705,
    "geolng": 20.99374
}, {
    "date": "2019-06-28T20:21:40.094Z",
    "contactPerson": "Chelsey Wisozk",
    "description": "Architecto nisi ducimus omnis ea sit placeat quia accusantium odio. Quam ut voluptates eaque odit aliquam ad at. Aut voluptate sequi enim.",
    "phone": "381.675.4506 x3542",
    "email": "Dylan_Reilly@yahoo.com",
    "status": "W toku",
    "address": "Białobrzeska 28, 02-365 Warszawa",
    "geolat": 52.21374,
    "geolng": 20.97417
}, {
    "date": "2019-06-29T02:29:35.813Z",
    "contactPerson": "Carley Haley",
    "description": "Est voluptatem ullam est quae iste. Sit nobis distinctio optio id quia ut reprehenderit commodi doloremque.",
    "phone": "477.250.5181 x66698",
    "email": "Everett91@gmail.com",
    "status": "Do podjęcia",
    "address": "Dzielna 72 LOK. U7, 01-029 Warszawa",
    "geolat": 52.2417,
    "geolng": 20.98203
}, {
    "date": "2019-06-29T10:25:25.415Z",
    "contactPerson": "Darlene Feest",
    "description": "Quod rerum tempora et corporis necessitatibus repellat qui odit. Totam libero officiis et debitis eum et.",
    "phone": "(183) 429-4955 x7293",
    "email": "Rupert.Grimes21@hotmail.com",
    "status": "W toku",
    "address": "Potocka 14, 01-652 Warszawa",
    "geolat": 52.27466,
    "geolng": 20.97971
}, {
    "date": "2019-06-29T16:02:40.573Z",
    "contactPerson": "Darron Wehner",
    "description": "Est aut ipsam saepe aut dolorum. Eos qui vitae quae dignissimos dolorem veritatis vitae eum. Illum beatae sit nostrum eum omnis necessitatibus consequuntur veniam asperiores. Deserunt et in.",
    "phone": "(267) 232-2060 x94544",
    "email": "Cristal.Gaylord95@hotmail.com",
    "status": "Zamknięta",
    "address": "Św. Wincentego 114, 03-291 Warszawa",
    "geolat": 52.29212,
    "geolng": 21.05177
}, {
    "date": "2019-06-28T19:51:11.239Z",
    "contactPerson": "Katelin Zboncak",
    "description": "Voluptatem ea explicabo. Praesentium error hic. Ut eius molestiae dolore quisquam ut numquam.",
    "phone": "(909) 974-6070",
    "email": "April_Kuvalis99@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Światowida 58 LOK U3, 03-144 Warszawa",
    "geolat": 52.33053,
    "geolng": 20.94096
}, {
    "date": "2019-06-29T00:37:13.383Z",
    "contactPerson": "Juana Kiehn",
    "description": "Sint velit qui eum quisquam dolorum possimus tempora laborum harum. Quae sit sed sed aut. Est autem veniam impedit laboriosam. Numquam necessitatibus incidunt minus tenetur sunt dolorem modi aspernatur ab. Quibusdam ut nemo nihil molestiae provident cum.",
    "phone": "005-431-9876",
    "email": "Willy60@yahoo.com",
    "status": "Do podjęcia",
    "address": "Grochowska 172, 04-357 Warszawa",
    "geolat": 52.24437,
    "geolng": 21.09222
}, {
    "date": "2019-06-29T08:08:53.851Z",
    "contactPerson": "Eladio Wuckert",
    "description": "Qui autem aliquid. Eum impedit consequatur saepe accusantium. Placeat pariatur ut debitis illo maiores esse omnis id voluptates. Dolore est corporis officiis. Et laboriosam exercitationem quam molestiae maxime et.",
    "phone": "810-379-6233 x563",
    "email": "Barrett35@gmail.com",
    "status": "W toku",
    "address": "Morcinka 5 LOK.34, 01-496 Warszawa",
    "geolat": 52.26049,
    "geolng": 20.92035
}, {
    "date": "2019-06-28T17:50:41.154Z",
    "contactPerson": "Sigrid Bauch",
    "description": "Est possimus quia et accusantium nesciunt quis ipsum veniam. Ab excepturi nam architecto aspernatur est ipsam quia. Hic ex ut aut architecto.",
    "phone": "401.799.1167 x73265",
    "email": "Crystel_Lowe@yahoo.com",
    "status": "Zamknięta",
    "address": "Grochowska 331, 03-823 Warszawa",
    "geolat": 52.24682,
    "geolng": 21.06189
}, {
    "date": "2019-06-29T10:09:52.234Z",
    "contactPerson": "Alexzander Reinger",
    "description": "Qui quibusdam quod est sunt iure accusantium et. Fugiat dolorem sunt quos nisi ipsam. Placeat ipsam nihil omnis qui fuga similique. Omnis a iste sint vitae eos rerum animi quasi error. Dignissimos sed eveniet aliquam fuga harum dolor perspiciatis. Ducimus harum officia voluptatem blanditiis commodi similique.",
    "phone": "589.902.4947 x60270",
    "email": "Ryleigh38@hotmail.com",
    "status": "Zamknięta",
    "address": "Grochowska 99, 04-172 Warszawa",
    "geolat": 52.24103,
    "geolng": 21.10688
}, {
    "date": "2019-06-29T02:56:19.197Z",
    "contactPerson": "Sarah Treutel",
    "description": "Repellendus sit sint deserunt facilis nihil. Dolor excepturi minima minima esse iusto autem vel rerum. Iusto animi commodi sit quos eius est fuga error qui. In consequatur odit perferendis fugit est aut eveniet autem eos.",
    "phone": "1-964-398-1232",
    "email": "Velma_Cummings@hotmail.com",
    "status": "Zamknięta",
    "address": "Broniewskiego 89B, 01-876 Warszawa",
    "geolat": 52.27237,
    "geolng": 20.9426
}, {
    "date": "2019-06-29T13:14:34.369Z",
    "contactPerson": "Jaime Hammes",
    "description": "Quis qui aliquid quo. Aliquid eligendi vitae molestias ratione eveniet aut a ut provident.",
    "phone": "(368) 882-7792",
    "email": "Johnny_Reynolds@yahoo.com",
    "status": "Zamknięta",
    "address": "Malborska 1 LOK. 6A, 03-286 Warszawa",
    "geolat": 52.2932,
    "geolng": 21.04781
}, {
    "date": "2019-06-29T12:00:33.759Z",
    "contactPerson": "Shana Jenkins",
    "description": "Soluta et pariatur. Repellendus velit facilis magnam ut iste et. Officiis aliquid ratione eaque molestias sed maxime temporibus numquam odio.",
    "phone": "734.967.6310 x9809",
    "email": "Walter92@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Króla Maciusia 10, 04-526 Warszawa",
    "geolat": 52.23825,
    "geolng": 21.14798
}, {
    "date": "2019-06-29T02:11:26.835Z",
    "contactPerson": "London Stehr",
    "description": "Qui voluptatem quaerat cupiditate vitae incidunt aperiam fuga. Dolor quisquam quos vero minus aut.",
    "phone": "(493) 644-6455 x66655",
    "email": "Annamae32@hotmail.com",
    "status": "W toku",
    "address": "Jana Pawła II 43A LOK. 37B (DOLNY PASAŻ), 01-001 Warszawa",
    "geolat": 52.243,
    "geolng": 20.99202
}, {
    "date": "2019-06-29T03:59:24.317Z",
    "contactPerson": "Danika Reilly",
    "description": "Qui ad odio. Modi animi deleniti sapiente ut inventore inventore molestias voluptatem. Illum ex voluptate natus porro possimus. Nulla aliquid dolor distinctio ad fuga velit. Ipsum enim dolore velit asperiores. Nisi sed laborum.",
    "phone": "(684) 779-3086 x43115",
    "email": "Ned72@gmail.com",
    "status": "Do podjęcia",
    "address": "Żegańska 22E PAW. 3, 04-713 Warszawa",
    "geolat": 52.20592,
    "geolng": 21.17588
}, {
    "date": "2019-06-29T05:36:53.400Z",
    "contactPerson": "Virgil Kemmer",
    "description": "Quos et culpa. Voluptates earum alias saepe quia blanditiis. Pariatur id temporibus quam necessitatibus ut quibusdam autem sequi.",
    "phone": "1-128-683-8200 x40107",
    "email": "Johnnie_Leffler@yahoo.com",
    "status": "Do podjęcia",
    "address": "Odkryta 82, 03-140 Warszawa",
    "geolat": 52.33915,
    "geolng": 20.93843
}, {
    "date": "2019-06-29T09:37:28.524Z",
    "contactPerson": "Coy Vandervort",
    "description": "Velit dolor velit placeat vel rerum veritatis. Sit dolores voluptatem suscipit eius hic illo.",
    "phone": "1-231-773-7844",
    "email": "Herman.Gerlach2@gmail.com",
    "status": "Do podjęcia",
    "address": "Rakuszanki 6/U7, 02-496 Warszawa",
    "geolat": 52.19963,
    "geolng": 20.87218
}, {
    "date": "2019-06-28T21:36:44.613Z",
    "contactPerson": "Sheila Barrows",
    "description": "Alias laborum adipisci iste optio. Et voluptate et veritatis delectus est. Eum debitis officia. Omnis laboriosam distinctio. Incidunt enim aut in id magnam corporis sit error illo.",
    "phone": "1-952-879-2142 x9440",
    "email": "Leonora_Kutch1@gmail.com",
    "status": "Zamknięta",
    "address": "Bohaterów Warszawy 11, 02-495 Warszawa",
    "geolat": 52.19307,
    "geolng": 20.89149
}, {
    "date": "2019-06-28T17:45:08.205Z",
    "contactPerson": "Gisselle Ullrich",
    "description": "Fuga aut voluptatem corporis animi aliquam quidem. Provident veniam odit molestiae consectetur qui voluptatem.",
    "phone": "(652) 246-8722 x754",
    "email": "Gaylord.Gorczany38@gmail.com",
    "status": "W toku",
    "address": "Porajów 1 paw. 53, 03-188 Warszawa",
    "geolat": 52.31451,
    "geolng": 20.96148
}, {
    "date": "2019-06-28T16:36:03.076Z",
    "contactPerson": "Mauricio Casper",
    "description": "Error rerum deleniti et quae magnam necessitatibus magnam amet. Ipsa qui minus quo reprehenderit deleniti doloremque eum doloremque.",
    "phone": "1-094-340-1324",
    "email": "Cruz60@yahoo.com",
    "status": "Do podjęcia",
    "address": "Wał Miedzeszyński 226, 04-866 Warszawa",
    "geolat": 52.17389,
    "geolng": 21.15325
}, {
    "date": "2019-06-28T18:18:14.347Z",
    "contactPerson": "Yoshiko Sipes",
    "description": "Error eos facere qui. Quos magni qui et eos sed rem doloremque voluptate est. Qui inventore ex. Delectus similique occaecati dolorem veritatis.",
    "phone": "062-432-7385 x75422",
    "email": "Cordelia.Schultz19@gmail.com",
    "status": "Zamknięta",
    "address": "Al. Niepodległości 148, 02-554 Warszawa",
    "geolat": 52.20613,
    "geolng": 21.00917
}, {
    "date": "2019-06-28T19:54:04.308Z",
    "contactPerson": "Adelle Osinski",
    "description": "Dolorem molestiae nobis debitis. Nihil corrupti quaerat id. Eaque eos quaerat dicta. Et nemo et voluptatum eos fugiat. Voluptatum ipsum iusto et non iste. Molestiae eius earum repudiandae in repellat.",
    "phone": "222-291-5633 x6560",
    "email": "Jacinthe_Hackett@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Ciasna 5, 00-232 Warszawa",
    "geolat": 52.25166,
    "geolng": 21.00629
}, {
    "date": "2019-06-29T05:18:03.697Z",
    "contactPerson": "Cody Huels",
    "description": "Consectetur eos ut est. Nobis voluptatem ipsa voluptas voluptatem alias repellendus. Quos maxime et recusandae magni porro quasi temporibus deleniti molestiae. Aliquam ipsa quia. Quas cupiditate animi consequatur nostrum.",
    "phone": "313.389.1959",
    "email": "Earnest_Daugherty94@gmail.com",
    "status": "Zamknięta",
    "address": "Łodygowa 27, 03-687 Warszawa",
    "geolat": 52.28644,
    "geolng": 21.09003
}, {
    "date": "2019-06-29T12:50:43.410Z",
    "contactPerson": "Kiarra Quitzon",
    "description": "Provident voluptatum sit quia animi consectetur sunt. Provident iste omnis quis explicabo nihil.",
    "phone": "965.350.0087 x92857",
    "email": "Lesley.Bauch@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Zabłocka 9, 03-185 Warszawa",
    "geolat": 52.30233,
    "geolng": 20.98563
}, {
    "date": "2019-06-28T20:25:22.831Z",
    "contactPerson": "Mackenzie Gerhold",
    "description": "Voluptate est aspernatur nulla consequuntur natus quis laudantium in quaerat. Voluptatem laboriosam nam harum.",
    "phone": "083.574.4840",
    "email": "Ignatius_Lakin58@yahoo.com",
    "status": "W toku",
    "address": "Szmaragdowa 16, 03-683 Warszawa",
    "geolat": 52.28048,
    "geolng": 21.07825
}, {
    "date": "2019-06-29T08:33:05.385Z",
    "contactPerson": "Natasha Hand",
    "description": "Autem ut consequatur numquam unde occaecati debitis sed. Ea vel alias nisi reiciendis. Nesciunt voluptatem omnis. Quaerat nam beatae. Qui repudiandae aut animi est beatae sint ea. Labore labore consectetur facere quasi.",
    "phone": "(754) 862-4021",
    "email": "Elwyn.Bechtelar55@hotmail.com",
    "status": "W toku",
    "address": "Dąbrowszczaków 2 LOK 44, 03-474 Warszawa",
    "geolat": 52.25915,
    "geolng": 21.0339
}, {
    "date": "2019-06-29T16:06:06.660Z",
    "contactPerson": "Elyse Stoltenberg",
    "description": "Est sit voluptatem aut et beatae pariatur. Et autem omnis velit. Velit laboriosam asperiores consequatur autem. Sunt laudantium occaecati.",
    "phone": "087.905.4831",
    "email": "Justina_Runte67@hotmail.com",
    "status": "Do podjęcia",
    "address": "Żeromskiego 55/67, 01-882 Warszawa",
    "geolat": 52.27768,
    "geolng": 20.94403
}, {
    "date": "2019-06-29T06:26:14.289Z",
    "contactPerson": "Loren Abbott",
    "description": "Tempore enim reiciendis. Eveniet tenetur est.",
    "phone": "1-691-795-2914",
    "email": "Alexys_Schumm31@gmail.com",
    "status": "Zamknięta",
    "address": "Chrzanowskiego 13, 04-392 Warszawa",
    "geolat": 52.25243,
    "geolng": 21.08063
}, {
    "date": "2019-06-29T09:22:08.149Z",
    "contactPerson": "Jeff D'Amore",
    "description": "Natus in possimus accusamus. Et magnam dolores temporibus deleniti.",
    "phone": "616-122-2187 x0903",
    "email": "Alexa29@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bolesławicka 12, 03-325 Warszawa",
    "geolat": 52.28428,
    "geolng": 21.03144
}, {
    "date": "2019-06-29T13:34:13.443Z",
    "contactPerson": "Loyal Dickens",
    "description": "Recusandae dicta soluta facere magnam. Quasi atque soluta id aut. Amet et sit aut at. Dolores ea quos sint quas optio enim officia.",
    "phone": "(404) 661-9462 x22993",
    "email": "Emory_Spinka@yahoo.com",
    "status": "Do podjęcia",
    "address": "Krasińskiego 27, 01-580 Warszawa",
    "geolat": 52.2668,
    "geolng": 20.97967
}, {
    "date": "2019-06-28T18:05:58.955Z",
    "contactPerson": "Vance Strosin",
    "description": "Autem nemo necessitatibus debitis et fugit. Aliquam maxime hic nobis repellendus repellat voluptatum libero consequatur.",
    "phone": "591.576.5644 x09122",
    "email": "Mireya_Keebler20@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Conrada 13, 01-922 Warszawa",
    "geolat": 52.27548,
    "geolng": 20.92139
}, {
    "date": "2019-06-28T21:15:40.714Z",
    "contactPerson": "Frances Weber",
    "description": "Qui quas eveniet odit qui dolor consequatur quos quos nostrum. Quasi autem inventore et totam dolor ex. Impedit consequatur aut animi. Magnam neque qui. Rerum illo assumenda et iste corporis veniam quo libero. Non culpa dolorem.",
    "phone": "(432) 809-1466",
    "email": "Cora.Herman35@yahoo.com",
    "status": "Zamknięta",
    "address": "Mrówcza 243, 04-697 Warszawa",
    "geolat": 52.21357,
    "geolng": 21.15705
}, {
    "date": "2019-06-29T08:25:51.044Z",
    "contactPerson": "Arvid Fay",
    "description": "Neque dolores eligendi. Ullam est nulla voluptas deleniti et deleniti aspernatur.",
    "phone": "(629) 859-5877",
    "email": "Darron6@gmail.com",
    "status": "Do weryfikacji",
    "address": "Jana Olbrachta 11, 01-111 Warszawa",
    "geolat": 52.23566,
    "geolng": 20.93904
}, {
    "date": "2019-06-28T17:46:37.301Z",
    "contactPerson": "Micheal Luettgen",
    "description": "Et praesentium ut quibusdam laboriosam nulla. Et rerum quisquam aut est accusamus.",
    "phone": "661.118.4898 x658",
    "email": "Mckayla.Murphy@hotmail.com",
    "status": "Zamknięta",
    "address": "Kajki 68A, 04-621 Warszawa",
    "geolat": 52.21903,
    "geolng": 21.16429
}, {
    "date": "2019-06-29T05:36:06.506Z",
    "contactPerson": "Boris Kris",
    "description": "Repellendus ea consequatur illo. Quibusdam sint vitae ut consequatur et. Et vel omnis dicta. Libero quas at distinctio sed.",
    "phone": "1-676-106-6957 x56973",
    "email": "Ted97@yahoo.com",
    "status": "Do podjęcia",
    "address": "Elbląska 10, 01-737 Warszawa",
    "geolat": 52.2648,
    "geolng": 20.96278
}, {
    "date": "2019-06-28T17:18:36.057Z",
    "contactPerson": "Willard Kunde",
    "description": "Odit est eos consequatur. Asperiores ab non ullam.",
    "phone": "1-198-872-2102",
    "email": "Dino.Schowalter20@hotmail.com",
    "status": "Do podjęcia",
    "address": "Puławska 67, 02-595 Warszawa",
    "geolat": 52.20226,
    "geolng": 21.02381
}, {
    "date": "2019-06-29T15:22:45.402Z",
    "contactPerson": "Leatha Crona",
    "description": "Quo quia voluptatem dolorem neque ut reiciendis voluptatem et sint. Iusto incidunt at enim reiciendis dolorum in. Omnis id ducimus et assumenda cum molestiae.",
    "phone": "672.461.4492 x2390",
    "email": "Jayson.McGlynn16@gmail.com",
    "status": "W toku",
    "address": "Wiertnicza 115, 02-952 Warszawa",
    "geolat": 52.17515,
    "geolng": 21.07724
}, {
    "date": "2019-06-29T02:38:14.893Z",
    "contactPerson": "Isaac Frami",
    "description": "Dolor in veniam. Quae dignissimos rem.",
    "phone": "107.876.3064",
    "email": "Shawna.Lebsack17@gmail.com",
    "status": "Do weryfikacji",
    "address": "Dembowskiego 10, 02-784 Warszawa",
    "geolat": 52.15304,
    "geolng": 21.03044
}, {
    "date": "2019-06-28T23:19:50.265Z",
    "contactPerson": "Lemuel Bayer",
    "description": "Voluptas fuga eum esse omnis. Itaque ut possimus dolores et odit. Ea exercitationem et doloribus quo molestiae sequi non ipsum saepe. Id qui qui nobis.",
    "phone": "963.364.1655 x6517",
    "email": "Fermin.Jones@hotmail.com",
    "status": "Zamknięta",
    "address": "Złota 64/66, 00-821 Warszawa",
    "geolat": 52.23019,
    "geolng": 20.99806
}, {
    "date": "2019-06-29T01:18:33.425Z",
    "contactPerson": "Patrick Nader",
    "description": "Est suscipit voluptas. Voluptas culpa ex possimus maiores quia similique. Quidem eum porro repellendus id occaecati temporibus iste atque eaque. Autem et dolor. Eos earum eum placeat.",
    "phone": "(285) 533-6882 x5441",
    "email": "Karl_Kshlerin@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Myśliborska 85, 03-185 Warszawa",
    "geolat": 52.31786,
    "geolng": 20.95923
}, {
    "date": "2019-06-28T23:28:13.281Z",
    "contactPerson": "Mathilde Huels",
    "description": "Dolores et consequuntur quis est perspiciatis nulla minima quis sed. Et voluptatem molestias at est ea voluptas. Totam soluta dolor in nulla non. Esse corrupti ad animi voluptatibus ut autem ratione. Hic omnis deleniti animi dignissimos iusto debitis. Et placeat nobis.",
    "phone": "941-861-5098 x39314",
    "email": "Vance.Treutel19@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Szafirowa 61, 04-954 Warszawa",
    "geolat": 52.1704,
    "geolng": 21.20034
}, {
    "date": "2019-06-29T03:01:36.655Z",
    "contactPerson": "Izaiah Quitzon",
    "description": "Fuga qui natus. Quis voluptates distinctio et cum consequatur explicabo eligendi et ratione. Possimus quia aut. Doloremque quos sed harum voluptatem et non itaque aliquid.",
    "phone": "(950) 485-3562",
    "email": "Johnathan89@gmail.com",
    "status": "Do podjęcia",
    "address": "Al. Waszyngtona 30/36, 03-910 Warszawa",
    "geolat": 52.23991,
    "geolng": 21.05981
}, {
    "date": "2019-06-28T21:08:47.143Z",
    "contactPerson": "Deborah Bosco",
    "description": "Odio impedit iure impedit. Quod animi a distinctio accusantium. Saepe nobis voluptatem autem asperiores dolorem dolores. Omnis dolores aut dolorem at possimus. Aut qui enim esse nam quia veritatis vel. Voluptate sequi eius rem dignissimos dolorum repellat.",
    "phone": "(176) 788-5365 x9755",
    "email": "Irma16@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Petofiego 3, 01-917 Warszawa",
    "geolat": 52.28278,
    "geolng": 20.93063
}, {
    "date": "2019-06-28T17:49:37.838Z",
    "contactPerson": "Ed Heathcote",
    "description": "Similique iste magnam vitae est aperiam neque. Et fuga beatae voluptatem pariatur. Recusandae unde dolor omnis cum mollitia inventore est soluta. Nisi quo qui rerum quae. Et labore saepe et officiis odio ut. Odit corporis dolore omnis quia quo fugiat incidunt alias pariatur.",
    "phone": "1-435-499-9210 x336",
    "email": "Ignatius_Ortiz@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Gotarda 16/49, 02-683 Warszawa",
    "geolat": 52.17102,
    "geolng": 21.00528
}, {
    "date": "2019-06-29T13:10:05.813Z",
    "contactPerson": "Lysanne Funk",
    "description": "Voluptatem ut expedita aliquid quos optio dolorem consequatur quia. Dolor vero aperiam.",
    "phone": "523-499-1930",
    "email": "Lilian89@gmail.com",
    "status": "W toku",
    "address": "Jana Kazimierza 47 U1, 01-267 Warszawa",
    "geolat": 52.22167,
    "geolng": 20.93591
}, {
    "date": "2019-06-29T11:23:21.356Z",
    "contactPerson": "Aliyah Gleason",
    "description": "Explicabo magnam eum illum ut ducimus fuga. Pariatur earum praesentium suscipit ullam aut. Impedit ipsum temporibus dolorum et quasi et rerum.",
    "phone": "541.972.2669 x65640",
    "email": "Jasen.Ullrich66@yahoo.com",
    "status": "W toku",
    "address": "Krańcowa 11, 02-493 Warszawa",
    "geolat": 52.20154,
    "geolng": 20.92653
}, {
    "date": "2019-06-28T16:28:37.275Z",
    "contactPerson": "Ottilie Bernier",
    "description": "Quod totam facilis sit dolorum est asperiores unde voluptatem qui. Explicabo officia autem.",
    "phone": "502-211-4690 x5300",
    "email": "Monte_Jacobs67@hotmail.com",
    "status": "Zamknięta",
    "address": "Wąwozowa 2/2A, 02-796 Warszawa",
    "geolat": 52.13324,
    "geolng": 21.0743
}, {
    "date": "2019-06-29T11:40:25.115Z",
    "contactPerson": "Wilfred Heaney",
    "description": "Magnam veritatis libero quas impedit incidunt non quae aut enim. Ab sunt odit molestiae nisi et.",
    "phone": "402-078-6276",
    "email": "Jailyn3@yahoo.com",
    "status": "Zamknięta",
    "address": "Bluszczańska 76, 00-712 Warszawa",
    "geolat": 52.20879,
    "geolng": 21.05948
}, {
    "date": "2019-06-29T11:06:44.667Z",
    "contactPerson": "Vincent Reichert",
    "description": "Atque distinctio at qui quaerat dolores dolor deserunt ad perferendis. Nihil doloribus sit autem aut. Consequatur hic quia molestiae pariatur quia.",
    "phone": "1-451-417-0553",
    "email": "Ivah85@hotmail.com",
    "status": "Do podjęcia",
    "address": "Trakt Brzeski 50A LOK. 2A, 05-077 Warszawa",
    "geolat": 52.22286,
    "geolng": 21.23076
}, {
    "date": "2019-06-28T20:32:13.205Z",
    "contactPerson": "Lurline Fay",
    "description": "Vel velit id voluptatum quo corrupti illo. Reprehenderit hic minima est fugiat expedita exercitationem delectus cupiditate. Porro perspiciatis voluptas dicta voluptate et ut ut.",
    "phone": "288.973.4313 x73735",
    "email": "Rodger.Ledner@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Wrzeciono 65, 01-950 Warszawa",
    "geolat": 52.29075,
    "geolng": 20.94647
}, {
    "date": "2019-06-29T07:00:57.954Z",
    "contactPerson": "Kiel Bergnaum",
    "description": "At ipsum officiis repellendus. Molestiae iusto voluptatem voluptas similique et ratione distinctio quibusdam dolores. Maiores assumenda error ex pariatur dolor maiores facilis eos. Sed officia assumenda sapiente totam ipsa ut. Eaque iste necessitatibus non veniam illum. Quia omnis ullam placeat.",
    "phone": "764.931.6188",
    "email": "Jayne70@yahoo.com",
    "status": "W toku",
    "address": "Żelazna 74 U. 5, 00-894 Warszawa",
    "geolat": 52.238,
    "geolng": 20.98867
}, {
    "date": "2019-06-29T01:27:05.203Z",
    "contactPerson": "Malcolm Auer",
    "description": "Maxime quidem autem nihil explicabo qui. Laboriosam et tempora. Voluptatem expedita et ullam et unde ipsa voluptatem non. Soluta iure voluptate dolor. In et molestiae sit labore non.",
    "phone": "890.211.0510",
    "email": "Leanne26@hotmail.com",
    "status": "W toku",
    "address": "Kaszubska 5, 50-214 Wrocław",
    "geolat": 51.12083,
    "geolng": 17.03
}, {
    "date": "2019-06-29T06:14:37.427Z",
    "contactPerson": "Horacio Ullrich",
    "description": "Non quisquam architecto. Minima magni sint voluptates dignissimos. Blanditiis atque excepturi quia dolor.",
    "phone": "1-538-677-5024 x37992",
    "email": "Reanna_Treutel56@gmail.com",
    "status": "Do podjęcia",
    "address": "Koreańska 2A, 52-121 Wrocław",
    "geolat": 51.0581,
    "geolng": 17.08648
}, {
    "date": "2019-06-28T20:03:28.344Z",
    "contactPerson": "Mina Stoltenberg",
    "description": "Omnis itaque vel est odit. Nesciunt aut dolores. Qui quo earum ipsa tempore vero voluptatem culpa. Perspiciatis rem ex rem. Velit eos laboriosam. Inventore vel dolorem ipsam.",
    "phone": "(840) 103-1499 x110",
    "email": "Juliana79@gmail.com",
    "status": "Zamknięta",
    "address": "Pretficza 37, 53-407 Wrocław",
    "geolat": 51.09185,
    "geolng": 17.00696
}, {
    "date": "2019-06-28T18:01:28.212Z",
    "contactPerson": "Jettie Fadel",
    "description": "Assumenda aut aut et quo eius provident quod repudiandae aut. Enim fugit dignissimos autem maxime debitis eius ratione nulla.",
    "phone": "(485) 801-8507",
    "email": "Aubrey75@gmail.com",
    "status": "Do podjęcia",
    "address": "Boguszowska 82, 54-046 Wrocław",
    "geolat": 51.15047,
    "geolng": 16.8922
}, {
    "date": "2019-06-29T00:01:13.136Z",
    "contactPerson": "Eugenia Hoeger",
    "description": "Quis at officia non voluptatem quae dolor officiis. Id non modi ratione vero ut sint accusamus nam quia. Non recusandae non necessitatibus animi sequi et aut minus. Commodi expedita quia. Dolor sequi ut nobis odit quia delectus voluptates. Quaerat sed numquam et.",
    "phone": "1-856-303-6645",
    "email": "Orlando_Torphy55@yahoo.com",
    "status": "W toku",
    "address": "Główna 69, 54-061 Wrocław",
    "geolat": 51.16102,
    "geolng": 16.90586
}, {
    "date": "2019-06-29T02:06:32.256Z",
    "contactPerson": "Aditya Konopelski",
    "description": "Minima officia consequatur vero necessitatibus magni omnis necessitatibus. Et sed rem pariatur minima ad. Iste molestiae error quo esse. Quibusdam unde repellat. Molestiae omnis natus.",
    "phone": "(738) 809-8206",
    "email": "Martine91@yahoo.com",
    "status": "Do podjęcia",
    "address": "Horbaczewskiego 21/C2, 54-130 Wrocław",
    "geolat": 51.12559,
    "geolng": 16.97315
}, {
    "date": "2019-06-28T20:21:16.631Z",
    "contactPerson": "Dortha Deckow",
    "description": "Quae eos corrupti. Nulla expedita necessitatibus aut officiis est nam est consequatur molestiae. Iusto quibusdam omnis voluptate aut. Voluptatem aut eaque illum rerum. Mollitia temporibus sit illum natus accusamus cumque esse ut velit.",
    "phone": "(547) 252-2512 x79466",
    "email": "Rodolfo.Sawayn16@gmail.com",
    "status": "Zamknięta",
    "address": "Popowicka 134, 54-238 Wrocław",
    "geolat": 51.12805,
    "geolng": 16.98972
}, {
    "date": "2019-06-29T13:02:33.701Z",
    "contactPerson": "Ava Koss",
    "description": "Molestiae perspiciatis dignissimos iste maxime sunt nobis. Reiciendis autem nihil voluptatem aliquam et nihil et. Fugit minus quis aliquid incidunt eius. Perferendis facilis atque qui et esse saepe nobis. Exercitationem non possimus corporis in ea officia quis.",
    "phone": "1-733-031-4927 x8912",
    "email": "Lilla13@hotmail.com",
    "status": "W toku",
    "address": "Piłsudskiego 41, 50-032 Wrocław",
    "geolat": 51.10184,
    "geolng": 17.02638
}, {
    "date": "2019-06-29T04:20:39.017Z",
    "contactPerson": "Khalid Rosenbaum",
    "description": "Velit earum est officiis quia quas tenetur ipsa debitis. Sequi recusandae nesciunt harum et odio nisi omnis. Quibusdam occaecati natus deserunt sed. Dicta accusamus ipsa nobis eveniet vel.",
    "phone": "420.289.0417",
    "email": "Ivah_Hammes69@gmail.com",
    "status": "Zamknięta",
    "address": "Krakowska 141/155, 50-428 Wrocław",
    "geolat": 51.08221,
    "geolng": 17.0751
}, {
    "date": "2019-06-28T19:19:40.200Z",
    "contactPerson": "Laverna Collier",
    "description": "Quia asperiores sequi. Ex sunt eos totam consequatur tempora temporibus.",
    "phone": "1-421-016-4634",
    "email": "Wilfrid_Will6@gmail.com",
    "status": "Zamknięta",
    "address": "Curie Skłodowskiej 47/1B, 50-369 Wrocław",
    "geolat": 51.11021,
    "geolng": 17.06241
}, {
    "date": "2019-06-29T09:13:55.971Z",
    "contactPerson": "Herminio Nikolaus",
    "description": "Dicta autem amet cumque. Sit totam soluta provident voluptate repellendus. Laudantium quod eum esse repudiandae vero assumenda id est.",
    "phone": "1-240-762-8770 x7200",
    "email": "Constantin9@yahoo.com",
    "status": "Do podjęcia",
    "address": "Jedności Narodowej 105, 50-301 Wrocław",
    "geolat": 51.12276,
    "geolng": 17.04456
}, {
    "date": "2019-06-29T11:36:11.449Z",
    "contactPerson": "Viola Jerde",
    "description": "Ipsum sunt hic dolore delectus. Quos nulla qui beatae.",
    "phone": "784-811-7234 x2811",
    "email": "Raphael.Hermann@hotmail.com",
    "status": "Zamknięta",
    "address": "Świeradowska 70, 50-559 Wrocław",
    "geolat": 51.07698,
    "geolng": 17.04774
}, {
    "date": "2019-06-29T02:30:24.746Z",
    "contactPerson": "Cora Kunde",
    "description": "Id dolor esse deleniti illum expedita quo animi omnis. Laboriosam unde harum quia enim et autem dolorem. Quia aut quod eaque iure.",
    "phone": "1-833-164-4788 x262",
    "email": "Emiliano.Abshire@yahoo.com",
    "status": "W toku",
    "address": "Kozia 3A, 54-104 Wrocław",
    "geolat": 51.15847,
    "geolng": 16.92761
}, {
    "date": "2019-06-28T20:34:24.817Z",
    "contactPerson": "Mylene Hartmann",
    "description": "Dolorem ut impedit provident nihil inventore ut nihil qui non. Totam animi voluptas dolorem labore fugit culpa. Magni est quia et doloribus iusto.",
    "phone": "703-117-6517 x229",
    "email": "Greyson92@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bajana 43/1F, 54-129 Wrocław",
    "geolat": 51.12764,
    "geolng": 16.96183
}, {
    "date": "2019-06-29T03:49:44.540Z",
    "contactPerson": "Wilfredo Ondricka",
    "description": "Quasi ut eaque ut. Ipsum et quam molestiae. Ullam voluptates ut accusantium et nemo alias itaque.",
    "phone": "1-427-730-8828",
    "email": "Petra_OReilly@yahoo.com",
    "status": "W toku",
    "address": "Krzywoustego 304A/1B, 51-312 Wrocław",
    "geolat": 51.1417,
    "geolng": 17.09227
}, {
    "date": "2019-06-29T14:05:09.718Z",
    "contactPerson": "Solon Walker",
    "description": "Nihil eos qui aut possimus quasi est repudiandae laborum repellendus. Dolor in labore ut ut cum aperiam esse harum. Qui animi dignissimos qui molestiae. Omnis non doloremque rerum reiciendis et sit voluptas.",
    "phone": "(832) 477-6370 x5315",
    "email": "Johann10@yahoo.com",
    "status": "W toku",
    "address": "Kamieńskiego 12-14A, 51-124 Wrocław",
    "geolat": 51.14182,
    "geolng": 17.03388
}, {
    "date": "2019-06-28T20:05:59.221Z",
    "contactPerson": "Friedrich Weber",
    "description": "Fugiat est pariatur quam. Enim maiores quo necessitatibus qui dolor veniam eligendi qui et.",
    "phone": "585-172-0293 x46582",
    "email": "Nadia78@yahoo.com",
    "status": "Zamknięta",
    "address": "Kamienna 112, 50-547 Wrocław",
    "geolat": 51.08798,
    "geolng": 17.0398
}, {
    "date": "2019-06-29T05:02:31.224Z",
    "contactPerson": "Matteo Fadel",
    "description": "Quia et et est illum dicta. Quisquam est officia. Soluta atque exercitationem quia deserunt quidem. Nihil quo velit.",
    "phone": "1-148-216-1590",
    "email": "Donnie_Donnelly38@hotmail.com",
    "status": "Zamknięta",
    "address": "Opolska 107/1, 52-013 Wrocław",
    "geolat": 51.07408,
    "geolng": 17.08762
}, {
    "date": "2019-06-28T18:24:17.217Z",
    "contactPerson": "Karina D'Amore",
    "description": "Eos aut doloribus numquam numquam amet autem ea. Quibusdam et quo enim quia sint. Velit a odit asperiores. Consequuntur fuga laborum blanditiis enim dolores neque eos ut. Maiores id aut aliquam sed odit dolor corporis atque iste. Voluptas animi magnam at quibusdam.",
    "phone": "132.519.3662",
    "email": "Pierre67@hotmail.com",
    "status": "Zamknięta",
    "address": "Obornicka 51, 51-113 Wrocław",
    "geolat": 51.13806,
    "geolng": 17.03243
}, {
    "date": "2019-06-28T19:00:32.418Z",
    "contactPerson": "Madelyn Pouros",
    "description": "Quia ratione aliquid error est odit excepturi ab deleniti. Reprehenderit voluptatibus et enim tenetur eaque delectus debitis praesentium.",
    "phone": "666-808-7779 x679",
    "email": "Jaleel.Grimes@gmail.com",
    "status": "W toku",
    "address": "Komandorska 147, 53-344 Wrocław",
    "geolat": 51.09307,
    "geolng": 17.0254
}, {
    "date": "2019-06-28T19:32:01.818Z",
    "contactPerson": "Laurie Yundt",
    "description": "Ut aut est placeat quia corporis. Officia eos sunt modi mollitia nisi aut dolorem. Dignissimos laborum ea impedit.",
    "phone": "034.140.1600 x9206",
    "email": "Marian.Pfannerstill@gmail.com",
    "status": "Zamknięta",
    "address": "Królewska 40, 51-210 Wrocław",
    "geolat": 51.15999,
    "geolng": 17.13335
}, {
    "date": "2019-06-29T04:17:13.818Z",
    "contactPerson": "Melyna Dietrich",
    "description": "Dolores assumenda repudiandae doloremque dolorem beatae sapiente quasi repellat aspernatur. Qui alias commodi aut. Voluptatum maxime accusamus consequatur neque necessitatibus ipsum facere voluptatem enim. Animi maxime quibusdam ex incidunt accusantium ea. Expedita et enim velit impedit in aliquid. Explicabo eum tempora.",
    "phone": "243.136.8711 x944",
    "email": "Trey8@gmail.com",
    "status": "W toku",
    "address": "Komuny Paryskiej 49/51, 50-452 Wrocław",
    "geolat": 51.10137,
    "geolng": 17.04726
}, {
    "date": "2019-06-29T02:16:27.422Z",
    "contactPerson": "Bridie Bradtke",
    "description": "Ad id occaecati nisi. Quis aut placeat molestiae molestiae qui voluptas provident aliquid. Unde rerum esse voluptatibus.",
    "phone": "1-283-426-2195",
    "email": "Santos_Corwin65@yahoo.com",
    "status": "Do podjęcia",
    "address": "Miłostowska 2B, 51-315 Wrocław",
    "geolat": 51.14622,
    "geolng": 17.12084
}, {
    "date": "2019-06-29T09:19:30.986Z",
    "contactPerson": "Prudence Sanford",
    "description": "Provident quia illum omnis qui molestiae repellat eum voluptatem. Ipsam nemo fugiat molestias ut error. Quos omnis totam aut ad soluta sed deleniti atque.",
    "phone": "953-162-8619 x4694",
    "email": "Alivia49@hotmail.com",
    "status": "W toku",
    "address": "Śliczna 44B, 50-566 Wrocław",
    "geolat": 51.08523,
    "geolng": 17.04101
}, {
    "date": "2019-06-29T09:07:31.200Z",
    "contactPerson": "Marlen Kihn",
    "description": "In aperiam ut vero pariatur nihil occaecati laudantium nihil. Cumque voluptates corrupti vero atque dolores et. Nam voluptatibus quis.",
    "phone": "543.699.0065 x58268",
    "email": "Andreanne4@hotmail.com",
    "status": "W toku",
    "address": "Jedności Narodowej 79, 50-262 Wrocław",
    "geolat": 51.12068,
    "geolng": 17.04194
}, {
    "date": "2019-06-29T07:05:54.886Z",
    "contactPerson": "Tatum Williamson",
    "description": "Earum suscipit quisquam. Quia officiis qui corrupti adipisci minima excepturi ipsam. Corrupti aperiam at magnam quod. Cupiditate aliquid ullam ipsam vel ratione autem enim iusto corrupti. Vel ad dignissimos et ex voluptatem fugiat repellat dolor commodi.",
    "phone": "1-215-138-1029 x41114",
    "email": "Emanuel_Sporer82@gmail.com",
    "status": "Zamknięta",
    "address": "Warmińska 20, 50-419 Wrocław",
    "geolat": 51.14697,
    "geolng": 16.94129
}, {
    "date": "2019-06-29T08:04:42.732Z",
    "contactPerson": "Yolanda Gutmann",
    "description": "Iste sunt quaerat dolor facere ea fugiat quisquam repudiandae consectetur. Et et maxime sint modi libero dignissimos consectetur magnam. Enim quas dolor et vel. Architecto autem illo debitis. Adipisci occaecati tempore qui voluptatem at aut dolor velit quia.",
    "phone": "289-468-8558 x36633",
    "email": "Golden18@gmail.com",
    "status": "Do podjęcia",
    "address": "Kozanowska 42, 54-152 Wrocław",
    "geolat": 51.13859,
    "geolng": 16.97927
}, {
    "date": "2019-06-29T13:47:52.386Z",
    "contactPerson": "Alessandra Lakin",
    "description": "Quia officiis cum nam quia. Inventore sapiente culpa rerum suscipit reprehenderit voluptatem velit reprehenderit. Expedita occaecati incidunt quo officia cum.",
    "phone": "797-319-0314 x219",
    "email": "Duncan.Gorczany@hotmail.com",
    "status": "Zamknięta",
    "address": "Buforowa 100, 52-131 Wrocław",
    "geolat": 51.05145,
    "geolng": 17.05922
}, {
    "date": "2019-06-29T02:33:33.331Z",
    "contactPerson": "Bradford Frami",
    "description": "Quia et sapiente veniam. Minima sed et at sapiente id quod maxime tenetur in. Sunt et corporis beatae suscipit commodi quia consectetur. Eius repellat iusto ea eos nesciunt aut nesciunt illum commodi.",
    "phone": "594.992.4046",
    "email": "Leanna_Kessler@hotmail.com",
    "status": "Zamknięta",
    "address": "Kłośna  3, 53-434 Wrocław",
    "geolat": 51.09825,
    "geolng": 17.00444
}, {
    "date": "2019-06-28T22:49:20.052Z",
    "contactPerson": "Blair Collier",
    "description": "Amet eos dolorem praesentium sed. Nihil corrupti quam autem quidem et esse. Velit culpa repellat ea. Qui molestiae eligendi fuga laudantium consequatur culpa. Sapiente aspernatur corporis deleniti tempore qui quis quia eum et.",
    "phone": "237-080-7415",
    "email": "Jessie.Douglas75@gmail.com",
    "status": "W toku",
    "address": "Balzaka 22A, 52-437 Wrocław",
    "geolat": 51.07643,
    "geolng": 16.95967
}, {
    "date": "2019-06-28T16:38:08.428Z",
    "contactPerson": "Geo Zemlak",
    "description": "Laborum quaerat mollitia repudiandae cupiditate beatae consequatur non. Maiores quam ut modi at culpa quaerat neque velit voluptatibus.",
    "phone": "1-356-643-8616 x73018",
    "email": "Chadd_Gorczany@hotmail.com",
    "status": "Zamknięta",
    "address": "Kamińskiego 92, 51-188 Wrocław",
    "geolat": 51.147,
    "geolng": 17.04111
}, {
    "date": "2019-06-29T10:06:04.546Z",
    "contactPerson": "Rhoda Larkin",
    "description": "Minima eos qui laboriosam ab deserunt molestiae atque et. Consequatur aspernatur cumque et tempore quis. Ipsum libero soluta vitae dicta maiores nihil velit. Deserunt assumenda autem molestiae magnam vel expedita a magni. Molestias illo id sequi voluptates ullam dolor atque est.",
    "phone": "1-568-417-6840",
    "email": "Ernestine_Cremin@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Czarnieckiego 15, 53-650 Wrocław",
    "geolat": 51.11603,
    "geolng": 17.00718
}, {
    "date": "2019-06-28T23:44:25.945Z",
    "contactPerson": "Addison Cole",
    "description": "Nostrum mollitia et ratione fuga iusto voluptas deserunt velit voluptate. Eos deserunt modi voluptate qui sequi dicta impedit. Accusantium nulla cumque hic et aut repudiandae.",
    "phone": "1-834-199-1894",
    "email": "Alison_Roberts@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Oławska 21, 50-123 Wrocław",
    "geolat": 51.10824,
    "geolng": 17.03592
}, {
    "date": "2019-06-29T11:23:58.721Z",
    "contactPerson": "Margarett Kris",
    "description": "Cumque doloremque quis. Consequuntur blanditiis officiis. Earum est est eligendi voluptas et a ut quae. Dolorem et et necessitatibus accusamus. Et ut id odio.",
    "phone": "760-379-3639",
    "email": "Daryl13@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Skłodowskiej 55-61, 50-369 Wrocław",
    "geolat": 51.1096,
    "geolng": 17.06329
}, {
    "date": "2019-06-29T02:00:02.018Z",
    "contactPerson": "Aleen Cassin",
    "description": "Eum consequatur qui autem. Perspiciatis est quidem recusandae iste qui. Dolorem voluptas magni et explicabo et ipsa. Consectetur aut consequatur inventore.",
    "phone": "1-922-127-2246 x80514",
    "email": "Rebeka76@hotmail.com",
    "status": "Zamknięta",
    "address": "Jana Pawła II 15E, 05-077 Warszawa",
    "geolat": 52.21674,
    "geolng": 21.22835
}, {
    "date": "2019-06-28T23:02:13.244Z",
    "contactPerson": "Rossie Kertzmann",
    "description": "Sed modi autem aliquam in ut. Aliquid excepturi expedita et nobis.",
    "phone": "869.327.2971 x008",
    "email": "Karine77@gmail.com",
    "status": "Do weryfikacji",
    "address": "Strzeszyńska 61A, 60-479 Poznań",
    "geolat": 52.44955,
    "geolng": 16.89326
}, {
    "date": "2019-06-28T20:50:46.569Z",
    "contactPerson": "Savannah Schowalter",
    "description": "Sint consequatur qui fugiat tempore. Qui expedita laudantium. Qui qui repudiandae quod omnis aut in. Maxime fugit quia. Qui nihil voluptas eligendi.",
    "phone": "432-264-9229",
    "email": "Shanna.Lindgren53@hotmail.com",
    "status": "W toku",
    "address": "Łozowa 101, 61-442 Poznań",
    "geolat": 52.36294,
    "geolng": 16.90699
}, {
    "date": "2019-06-29T14:06:30.487Z",
    "contactPerson": "Mohammad Jerde",
    "description": "Voluptas quisquam quia et necessitatibus. Assumenda qui et exercitationem qui ab consequuntur error. Facere omnis esse occaecati deserunt nostrum repellat eligendi itaque perferendis. Saepe molestiae quae perspiciatis debitis explicabo debitis quia sit sint.",
    "phone": "1-320-548-1514 x213",
    "email": "Berneice.Fay9@yahoo.com",
    "status": "Do podjęcia",
    "address": "os. Rusa 54, 61-288 Poznań",
    "geolat": 52.39128,
    "geolng": 16.9869
}, {
    "date": "2019-06-28T16:39:02.089Z",
    "contactPerson": "Dortha Nicolas",
    "description": "Voluptatem deleniti optio aut laborum quam. Assumenda dolore inventore et. Quo id atque quae eos tempora voluptatem. Doloremque molestiae quos ut. Omnis suscipit rerum.",
    "phone": "436-620-6881",
    "email": "Reese.OKeefe56@gmail.com",
    "status": "Do podjęcia",
    "address": "Wieruszowska 20, 60-166 Poznań",
    "geolat": 52.38172,
    "geolng": 16.84755
}, {
    "date": "2019-06-29T07:06:53.551Z",
    "contactPerson": "Devan Blick",
    "description": "Deserunt hic cum veritatis. Eum perspiciatis quam sint est in maxime molestiae esse esse. Enim praesentium eos incidunt magni aliquam praesentium praesentium. Autem voluptate beatae facilis aliquam rerum quas impedit quia quibusdam. Quaerat voluptatum aspernatur ea ullam.",
    "phone": "(327) 404-5460",
    "email": "Shaina96@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Os. Orła Białego 58, 61-251 Poznań",
    "geolat": 52.37717,
    "geolng": 16.96652
}, {
    "date": "2019-06-29T12:34:19.875Z",
    "contactPerson": "Randall Johnson",
    "description": "Soluta sed consequatur omnis. Autem id voluptates sed quas. Voluptas ex pariatur eum est. Consequatur soluta dolores rerum numquam. Explicabo qui nisi voluptatem tempora aperiam id. Pariatur non perferendis consequuntur sed porro.",
    "phone": "(942) 921-9379 x86820",
    "email": "Cindy.Prosacco@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bukowska 285, 60-189 Poznań",
    "geolat": 52.4133,
    "geolng": 16.83406
}, {
    "date": "2019-06-29T05:50:38.186Z",
    "contactPerson": "Freddie Wisoky",
    "description": "Ipsum aliquid itaque perferendis qui rerum ut nihil. Voluptas quod voluptas ratione perferendis nemo et in non.",
    "phone": "(523) 364-7888 x476",
    "email": "Colleen.Kiehn@gmail.com",
    "status": "Do weryfikacji",
    "address": "os. Lecha 43, 61-294 Poznań",
    "geolat": 52.39052,
    "geolng": 16.975
}, {
    "date": "2019-06-28T22:00:48.852Z",
    "contactPerson": "Leon Veum",
    "description": "Officia eius suscipit qui voluptates nihil ea. Ad dolores enim quos totam temporibus at assumenda. Animi nam dolor officia temporibus debitis facilis. Et sint velit fugit quo perspiciatis non fuga. Est et quisquam non consequatur dolore eius.",
    "phone": "621.974.9311 x2645",
    "email": "Elda.Rath@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Łabiszyńska 2, 60-720 Poznań",
    "geolat": 52.41253,
    "geolng": 16.98243
}, {
    "date": "2019-06-28T22:59:43.679Z",
    "contactPerson": "Dagmar Erdman",
    "description": "Voluptatem corporis ea non sed natus in et repudiandae. Quo vero non esse occaecati est. Nihil atque quia ipsum magni voluptatem ab reprehenderit sequi. Autem distinctio porro.",
    "phone": "333-322-9116 x72801",
    "email": "Kara38@hotmail.com",
    "status": "Zamknięta",
    "address": "Czeremchowa 3-5, 61-474 Poznań",
    "geolat": 52.37424,
    "geolng": 16.89551
}, {
    "date": "2019-06-29T12:16:30.684Z",
    "contactPerson": "Cecile Becker",
    "description": "Et tenetur consectetur quam optio necessitatibus harum. Dolores esse voluptas vitae vero eaque omnis consequatur provident ipsum. Quis eaque modi tempora.",
    "phone": "(351) 494-2670 x866",
    "email": "Will.Dare83@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Szwajcarska 1, 61-285 Poznań",
    "geolat": 52.39374,
    "geolng": 16.99138
}, {
    "date": "2019-06-29T09:55:11.156Z",
    "contactPerson": "Karen Kautzer",
    "description": "Ratione expedita quas non officiis neque id omnis saepe. Veritatis in ut dignissimos. Excepturi ullam placeat nesciunt.",
    "phone": "(242) 120-6993 x83756",
    "email": "Greta_Pacocha78@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bułgarska 117, 60-378 Poznań",
    "geolat": 52.40988,
    "geolng": 16.8679
}, {
    "date": "2019-06-28T21:47:50.769Z",
    "contactPerson": "Virginia Adams",
    "description": "Quibusdam voluptatum est expedita ut enim numquam saepe qui. Totam minus cumque. Sunt eum velit. Qui temporibus quos delectus mollitia. Nisi et voluptas.",
    "phone": "221-708-5003 x85747",
    "email": "Aurore_Erdman91@yahoo.com",
    "status": "W toku",
    "address": "Dąbrowskiego 154B, 60-594 Poznań",
    "geolat": 52.41762,
    "geolng": 16.88113
}, {
    "date": "2019-06-29T07:51:32.299Z",
    "contactPerson": "Trudie Carroll",
    "description": "Laboriosam beatae atque ipsam. Ea ut et neque totam repellendus corporis. Nemo corrupti eveniet exercitationem laborum corporis. Magni necessitatibus sed. Dolores consequatur pariatur modi repellat explicabo nemo. Est voluptas repellendus.",
    "phone": "(880) 233-3224 x129",
    "email": "Collin_Barton@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Pniewska 15, 60-446 Poznań",
    "geolat": 52.43112,
    "geolng": 16.82405
}, {
    "date": "2019-06-28T23:47:18.841Z",
    "contactPerson": "Amya Hagenes",
    "description": "Est illum pariatur ipsa sapiente officiis. Omnis accusamus ipsa quasi est voluptatem ex nemo iure voluptatem. Labore natus necessitatibus. Quia autem est odit animi.",
    "phone": "(731) 264-8383 x47796",
    "email": "Barry.Larkin8@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Bułgarska 119, 60-378 Poznań",
    "geolat": 52.41051,
    "geolng": 16.86836
}, {
    "date": "2019-06-29T04:30:08.280Z",
    "contactPerson": "Doris Cassin",
    "description": "Et voluptatem fuga nemo ex incidunt quae sed. Ut autem molestiae quibusdam est ipsa aut.",
    "phone": "(027) 346-8794 x2039",
    "email": "Ona20@hotmail.com",
    "status": "Do podjęcia",
    "address": "Jana Pawła II 12, 61-139 Poznań",
    "geolat": 52.40515,
    "geolng": 16.95335
}, {
    "date": "2019-06-29T11:32:28.498Z",
    "contactPerson": "Gaetano Carter",
    "description": "Quis doloribus nihil in quia illum laboriosam quam harum laboriosam. Iure voluptatem quos. Debitis ratione nesciunt quisquam ipsum illo et. Rerum sed distinctio. A itaque nesciunt non.",
    "phone": "1-958-821-5483 x136",
    "email": "Jordyn_Nikolaus@hotmail.com",
    "status": "W toku",
    "address": "Żeromskiego 3, 60-544 Poznań",
    "geolat": 52.41574,
    "geolng": 16.8913
}, {
    "date": "2019-06-29T13:49:10.311Z",
    "contactPerson": "Cordia Stracke",
    "description": "Quis quod ea eos distinctio. Perspiciatis eos provident. Necessitatibus et necessitatibus tempore. Non ullam velit ipsam. Impedit ipsam praesentium eum ab placeat asperiores nam laborum.",
    "phone": "(024) 351-5141",
    "email": "Alexandria_Kunze@yahoo.com",
    "status": "W toku",
    "address": "Kosmonautów 104, 61-642 Poznań",
    "geolat": 52.4384,
    "geolng": 16.94109
}, {
    "date": "2019-06-29T08:58:16.778Z",
    "contactPerson": "Kamille Heller",
    "description": "Est rem incidunt sit aut eos ad. Voluptates provident earum.",
    "phone": "411-912-1756 x3578",
    "email": "Emerald76@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Al. Solidarności 55, 61-696 Poznań",
    "geolat": 52.43599,
    "geolng": 16.91461
}, {
    "date": "2019-06-29T05:18:21.237Z",
    "contactPerson": "Elmer Lueilwitz",
    "description": "Qui velit dicta vero iusto. Dolor exercitationem officia fugit adipisci sapiente sint. Voluptate molestias delectus et. Reprehenderit reiciendis rerum eum excepturi dolores. Dolorem et molestias reprehenderit dolorem sit et illum vero rem. Sint aut et sit consequatur nihil minima consequuntur.",
    "phone": "(933) 315-4607 x24375",
    "email": "Gilbert_Botsford39@gmail.com",
    "status": "W toku",
    "address": "Tatrzańska 1/5, 60-413 Poznań",
    "geolat": 52.42978,
    "geolng": 16.84914
}, {
    "date": "2019-06-28T20:54:12.062Z",
    "contactPerson": "Sallie Wiza",
    "description": "Suscipit itaque excepturi fugit sit est. Quis dolor aut. Ab sit esse corporis perferendis aut dolorem. Sint amet id.",
    "phone": "(863) 643-0699 x567",
    "email": "Ernest.Schiller@yahoo.com",
    "status": "Do podjęcia",
    "address": "Naramowicka 342, 61-680 Poznań",
    "geolat": 52.47502,
    "geolng": 16.94683
}, {
    "date": "2019-06-28T20:09:52.395Z",
    "contactPerson": "Lizzie McLaughlin",
    "description": "Ut quidem fuga amet rerum. Et culpa et exercitationem reprehenderit.",
    "phone": "1-658-645-2877",
    "email": "Janiya91@gmail.com",
    "status": "Zamknięta",
    "address": "Piłsudskiego 110, 61-246 Poznań",
    "geolat": 52.38643,
    "geolng": 16.96088
}, {
    "date": "2019-06-28T19:38:24.229Z",
    "contactPerson": "Ellie Kovacek",
    "description": "Qui necessitatibus delectus et ab. Sunt nihil ea. Ad provident non itaque praesentium.",
    "phone": "(923) 388-2722",
    "email": "Claudie20@hotmail.com",
    "status": "Zamknięta",
    "address": "Lechicka 2, 61-695 Poznań",
    "geolat": 52.44288,
    "geolng": 16.91008
}, {
    "date": "2019-06-29T15:41:24.252Z",
    "contactPerson": "Vickie Williamson",
    "description": "Ab voluptatibus repellat voluptatem minus. Autem aut nobis molestias beatae dolores dolores.",
    "phone": "240-251-7496 x5930",
    "email": "Shyann91@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Krzywoustego 309, 61-144 Poznań",
    "geolat": 52.35682,
    "geolng": 16.99442
}, {
    "date": "2019-06-28T22:35:44.558Z",
    "contactPerson": "Lizzie Auer",
    "description": "Est sequi mollitia error. Molestiae saepe aliquam et sit dolorem.",
    "phone": "186-836-8094",
    "email": "Liana_Flatley49@gmail.com",
    "status": "W toku",
    "address": "Racjonalizatorów 3, 61-453 Poznań",
    "geolat": 52.36652,
    "geolng": 16.90478
}, {
    "date": "2019-06-29T13:56:50.185Z",
    "contactPerson": "Sterling Gulgowski",
    "description": "Et accusamus aut itaque cum neque consectetur. Doloremque non dolor accusantium rem dolorem voluptatem placeat sed nobis.",
    "phone": "647-354-8427 x352",
    "email": "Chasity_Toy87@yahoo.com",
    "status": "W toku",
    "address": "Chojnicka 53, 60-480 Poznań",
    "geolat": 52.47776,
    "geolng": 16.78183
}, {
    "date": "2019-06-29T14:28:11.103Z",
    "contactPerson": "Ferne West",
    "description": "Minus porro iusto ipsa fuga provident. Dolorum ea sit maxime dolor. Occaecati cupiditate saepe qui. Ut saepe totam rerum et asperiores cumque laudantium sed. Odio asperiores porro illo cumque soluta natus voluptatem cupiditate tempore. Et possimus atque ut velit.",
    "phone": "330-772-0490",
    "email": "Alvah_Kutch@hotmail.com",
    "status": "W toku",
    "address": "Głogowska 268, 60-104 Poznań",
    "geolat": 52.37494,
    "geolng": 16.86899
}, {
    "date": "2019-06-29T09:35:52.988Z",
    "contactPerson": "Merritt Carter",
    "description": "Nisi neque quis rerum quaerat est. Aspernatur et tempore. Quaerat recusandae id nemo reiciendis perspiciatis quisquam sequi asperiores beatae.",
    "phone": "1-275-654-8972",
    "email": "Mafalda_Macejkovic@yahoo.com",
    "status": "Do podjęcia",
    "address": "Głogowska 422, 60-004 Poznań",
    "geolat": 52.35797,
    "geolng": 16.84534
}, {
    "date": "2019-06-29T04:20:17.196Z",
    "contactPerson": "Claud Hilll",
    "description": "Est voluptatem voluptate. Neque illo nulla unde nihil explicabo debitis omnis. Et pariatur aut voluptatem tenetur architecto blanditiis adipisci necessitatibus. Et nemo et inventore officiis cupiditate earum blanditiis temporibus.",
    "phone": "233-352-2477",
    "email": "Jasen_King41@gmail.com",
    "status": "Do podjęcia",
    "address": "Strzelecka 49, 61-846 Poznań",
    "geolat": 52.39996,
    "geolng": 16.93657
}, {
    "date": "2019-06-29T03:59:32.450Z",
    "contactPerson": "Adrianna Emmerich",
    "description": "Voluptatum dignissimos assumenda non modi et odit. Id quisquam veritatis corporis rerum suscipit ex. Corporis ab commodi neque magni perferendis esse enim voluptatem eos. Reprehenderit tempore deserunt doloremque vero fuga eveniet fugit et dolores.",
    "phone": "827-037-8233 x97327",
    "email": "Sherwood60@gmail.com",
    "status": "Do weryfikacji",
    "address": "Grunwaldzka 108, 60-308 Poznań",
    "geolat": 52.39652,
    "geolng": 16.86869
}, {
    "date": "2019-06-29T07:44:55.270Z",
    "contactPerson": "Merle Hudson",
    "description": "Sint omnis aut. Quae vel molestiae est expedita. Magni laudantium voluptatibus delectus ea laudantium totam repellat voluptas facere. Et assumenda est.",
    "phone": "(122) 145-0754",
    "email": "Alyson_Hegmann@gmail.com",
    "status": "W toku",
    "address": "św. Marcin 24, 61-805 Poznań",
    "geolat": 52.40623,
    "geolng": 16.92769
}, {
    "date": "2019-06-29T09:55:44.681Z",
    "contactPerson": "Liliane Reichert",
    "description": "Deleniti et qui numquam aut qui voluptatem. Adipisci itaque sit aperiam fugit labore sed. Quis sunt explicabo et similique.",
    "phone": "292-498-2538 x61094",
    "email": "Maxime_Pacocha@hotmail.com",
    "status": "W toku",
    "address": "os. Lotnictwa Polskiego 9, 60-406 Poznań",
    "geolat": 52.42284,
    "geolng": 16.86551
}, {
    "date": "2019-06-29T02:04:29.224Z",
    "contactPerson": "Reinhold Schroeder",
    "description": "Eos doloribus est qui veniam. Quia nihil eum temporibus delectus. Velit est quasi sunt voluptates perspiciatis.",
    "phone": "1-629-195-6136",
    "email": "Joannie_Turcotte@gmail.com",
    "status": "Do podjęcia",
    "address": "Malwowa 162, 60-175 Poznań",
    "geolat": 52.39692,
    "geolng": 16.80237
}, {
    "date": "2019-06-29T15:53:35.771Z",
    "contactPerson": "Lina DuBuque",
    "description": "Deleniti ut mollitia expedita et. Ad ea et possimus et tempora. Rerum ut occaecati et voluptatem beatae. Molestiae maxime doloremque. Quidem iure autem aut ea voluptatem. Molestiae omnis officiis molestiae nihil sed.",
    "phone": "1-638-634-0349 x521",
    "email": "Gerry62@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bolesława Śmiałego 109, 60-682 Poznań",
    "geolat": 52.4519,
    "geolng": 16.92298
}, {
    "date": "2019-06-29T15:12:46.003Z",
    "contactPerson": "Carli Maggio",
    "description": "Voluptatem voluptates qui sint placeat debitis eius temporibus dolor. Et quia dolorum dolor eveniet distinctio quaerat nulla dolorem omnis. Est eum nemo ut labore ea et doloribus. Rem esse eveniet voluptatem.",
    "phone": "1-497-751-9334",
    "email": "Nayeli_Weimann80@gmail.com",
    "status": "Do podjęcia",
    "address": "Naramowicka 172, 61-611 Poznań",
    "geolat": 52.45154,
    "geolng": 16.94823
}, {
    "date": "2019-06-29T00:00:08.406Z",
    "contactPerson": "Carson Runolfsdottir",
    "description": "In minus aut odit aut veritatis fugit. Eaque molestiae reiciendis quas. Suscipit maxime dicta quaerat dolore placeat dolore. Quas occaecati nihil autem non quis quis accusamus nesciunt. Beatae est sint inventore dolore corrupti ut dolor enim.",
    "phone": "(039) 598-7287 x284",
    "email": "Hayden83@gmail.com",
    "status": "Do weryfikacji",
    "address": "Książęca 3, 61-361 Poznań",
    "geolat": 52.36694,
    "geolng": 16.93151
}, {
    "date": "2019-06-29T14:30:34.089Z",
    "contactPerson": "Clemens Rodriguez",
    "description": "Sunt explicabo fuga et nulla. Facilis esse enim atque. Non reprehenderit voluptatem et aut molestiae distinctio.",
    "phone": "469.416.4911",
    "email": "Aleen61@gmail.com",
    "status": "W toku",
    "address": "Al. Solidarności 42, 61-696 Poznań",
    "geolat": 52.43531,
    "geolng": 16.92752
}, {
    "date": "2019-06-29T08:53:45.957Z",
    "contactPerson": "Benedict Hackett",
    "description": "Nihil natus officiis aut et sit impedit atque. Et molestiae nulla laudantium sed aut. Ipsum rerum animi dolore dicta error possimus et. Et possimus ad et nihil quisquam. Quis omnis magni aut quos praesentium dolor est distinctio consequuntur. Omnis ex cumque in et dignissimos quo aliquid consequatur non.",
    "phone": "276-528-7023 x1288",
    "email": "Eden86@yahoo.com",
    "status": "Zamknięta",
    "address": "Dolna Wilda 109, 61-492 Poznań",
    "geolat": 52.38415,
    "geolng": 16.9222
}, {
    "date": "2019-06-28T21:54:16.362Z",
    "contactPerson": "Willow Stiedemann",
    "description": "Nesciunt nisi doloribus incidunt rerum voluptate tempore esse modi sunt. Soluta est ea et aut. Earum porro aliquid facilis ea quia nostrum. Adipisci accusantium iusto exercitationem in rerum omnis.",
    "phone": "(208) 316-5247",
    "email": "Clarabelle_Konopelski@gmail.com",
    "status": "Do weryfikacji",
    "address": "Kwiatkowskiego 55, 61-422 Poznań",
    "geolat": 52.36743,
    "geolng": 16.88736
}, {
    "date": "2019-06-29T12:27:12.102Z",
    "contactPerson": "Silas Boehm",
    "description": "Itaque et natus tenetur quis. Fugiat aut ut quo veritatis.",
    "phone": "(460) 732-3859 x450",
    "email": "Jeffery41@yahoo.com",
    "status": "Do podjęcia",
    "address": "Abp.Baraniaka 100, 61-245 Poznań",
    "geolat": 52.39987,
    "geolng": 16.96886
}, {
    "date": "2019-06-29T08:22:22.514Z",
    "contactPerson": "Jovan Grimes",
    "description": "Aut similique fugit in error. Est voluptas vero officia sequi et.",
    "phone": "1-854-168-1553 x292",
    "email": "Eva_Stroman@yahoo.com",
    "status": "Do podjęcia",
    "address": "Czecha 73, 61-289 Poznań",
    "geolat": 52.38592,
    "geolng": 16.97736
}, {
    "date": "2019-06-29T16:06:02.877Z",
    "contactPerson": "Daija Lubowitz",
    "description": "At nobis est optio exercitationem voluptas eligendi. Aspernatur a in est maxime. Aut ducimus quo architecto. Natus eum ipsum facere impedit. Sunt quia consectetur assumenda esse et. Asperiores explicabo explicabo placeat.",
    "phone": "1-515-341-6062",
    "email": "Jerrell.Stroman@gmail.com",
    "status": "Do podjęcia",
    "address": "Maltańska 1, 61-131 Poznań",
    "geolat": 52.40203,
    "geolng": 16.95962
}, {
    "date": "2019-06-28T17:43:40.412Z",
    "contactPerson": "Garrick Langosh",
    "description": "Impedit consequatur ipsam magni illum. Qui aut sequi aut voluptatibus labore nobis.",
    "phone": "1-304-741-5366",
    "email": "Birdie_Langworth@yahoo.com",
    "status": "Do podjęcia",
    "address": "Dąbrowskiego 543, 60-451 Poznań",
    "geolat": 52.4337,
    "geolng": 16.80133
}, {
    "date": "2019-06-28T23:12:01.118Z",
    "contactPerson": "Logan Luettgen",
    "description": "Et nemo totam consequatur ut repellendus quasi vero. Voluptate rerum quisquam ipsam earum ratione et voluptas tenetur neque.",
    "phone": "1-195-332-2796 x842",
    "email": "Odie.Klein97@gmail.com",
    "status": "Do podjęcia",
    "address": "Pszczyńska 40, 60-102 Poznań",
    "geolat": 52.36836,
    "geolng": 16.87396
}, {
    "date": "2019-06-29T05:43:30.209Z",
    "contactPerson": "Trudie Legros",
    "description": "Qui autem impedit amet autem vel possimus possimus iste. Dolorem porro optio aut. Libero dolor odio sed reiciendis non. Accusantium officia ut consequatur natus eligendi sint doloremque.",
    "phone": "035.119.6753 x33114",
    "email": "Tomas3@yahoo.com",
    "status": "W toku",
    "address": "Ezopa 2, 60-195 Poznań",
    "geolat": 52.40877,
    "geolng": 16.83689
}, {
    "date": "2019-06-29T00:00:04.394Z",
    "contactPerson": "Antonina Hilpert",
    "description": "Aut enim laboriosam fugit sint. Molestiae nostrum eveniet quos aut.",
    "phone": "(409) 015-0436 x6817",
    "email": "Mossie_Beier@yahoo.com",
    "status": "Do podjęcia",
    "address": "Muszkowska 2, 60-434 Poznań",
    "geolat": 52.43463,
    "geolng": 16.82706
}, {
    "date": "2019-06-28T17:49:56.807Z",
    "contactPerson": "Lola Wyman",
    "description": "Blanditiis aperiam nam quos et saepe accusantium. Quia aspernatur ipsa expedita nostrum ducimus. Id quae necessitatibus nostrum. Non quia velit omnis corrupti ipsum qui libero. At repudiandae et vel hic minima doloribus minima hic sunt.",
    "phone": "319.160.6995 x678",
    "email": "Cydney_Torphy82@gmail.com",
    "status": "Do weryfikacji",
    "address": "Opolska 24, 61-433 Poznań",
    "geolat": 52.37084,
    "geolng": 16.90103
}, {
    "date": "2019-06-28T22:07:53.942Z",
    "contactPerson": "Tracey Graham",
    "description": "Est omnis sed possimus. Sint molestiae aut repellendus est impedit nesciunt. Dolor dolorem sapiente facilis fugit et atque doloribus.",
    "phone": "(512) 798-8055",
    "email": "Esther13@hotmail.com",
    "status": "Zamknięta",
    "address": "Omańkowskiej 108, 60-465 Poznań",
    "geolat": 52.45699,
    "geolng": 16.89575
}, {
    "date": "2019-06-29T02:14:16.730Z",
    "contactPerson": "Bradly Cremin",
    "description": "Omnis temporibus et soluta qui quae laboriosam. Labore sunt non nulla odio eaque et autem. Nam dolores quidem. Similique voluptatem harum molestias consequuntur non. Deleniti quidem consequatur et perferendis occaecati laudantium eos at quis.",
    "phone": "263-443-5049 x055",
    "email": "Orval28@yahoo.com",
    "status": "Zamknięta",
    "address": "Stróżyńskiego 29, 60-688 Poznań",
    "geolat": 52.46326,
    "geolng": 16.90312
}, {
    "date": "2019-06-28T23:52:48.537Z",
    "contactPerson": "Kaylie Predovic",
    "description": "Consequatur ullam dolores voluptatem illo. Excepturi dolorum ut molestias. Quaerat id sunt. Harum voluptatibus aut tempora non distinctio. Minus atque consequatur sapiente necessitatibus. Laboriosam est repudiandae dignissimos occaecati.",
    "phone": "358.822.8442 x487",
    "email": "Jannie56@yahoo.com",
    "status": "Zamknięta",
    "address": "Czechosłowacka 102, 61-476 Poznań",
    "geolat": 52.37517,
    "geolng": 16.89423
}, {
    "date": "2019-06-29T10:09:28.755Z",
    "contactPerson": "Nash Littel",
    "description": "Aut ab hic et. Possimus ut nesciunt. Id nulla ut hic et.",
    "phone": "386.569.8594 x69072",
    "email": "Kennedy_Macejkovic92@yahoo.com",
    "status": "Zamknięta",
    "address": "Murawa 2, 61-655 Poznań",
    "geolat": 52.42691,
    "geolng": 16.93655
}, {
    "date": "2019-06-29T06:14:15.452Z",
    "contactPerson": "Alysha Schamberger",
    "description": "Nostrum enim sunt recusandae ut. Fuga recusandae non voluptatibus autem qui. Eaque id sequi ut. Necessitatibus deleniti ut incidunt. In esse delectus temporibus error sed ducimus voluptates eum.",
    "phone": "(214) 234-3510 x31819",
    "email": "Mckenzie_Casper@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Obornicka 262, 60-693 Poznań",
    "geolat": 52.44796,
    "geolng": 16.90797
}, {
    "date": "2019-06-29T05:24:28.094Z",
    "contactPerson": "Leonie Wisozk",
    "description": "Blanditiis quas in sed recusandae voluptas. Dolor mollitia minus mollitia totam et. Rerum nisi asperiores molestiae.",
    "phone": "(652) 868-5851 x09492",
    "email": "Peyton_Schoen@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Szczepankowo 99A, 61-307 Poznań",
    "geolat": 52.36114,
    "geolng": 17.01712
}, {
    "date": "2019-06-29T05:58:01.708Z",
    "contactPerson": "Samantha Jakubowski",
    "description": "Ea voluptates praesentium minus repellendus. Eaque enim quam sit quod repellat consectetur provident non nulla. Doloremque qui vero facilis culpa impedit et ut.",
    "phone": "713.564.7190 x085",
    "email": "Devante29@hotmail.com",
    "status": "Do podjęcia",
    "address": "28 Czerwca 1956 roku 384, 61-441 Poznań",
    "geolat": 52.3635,
    "geolng": 16.9032
}, {
    "date": "2019-06-29T05:39:59.620Z",
    "contactPerson": "Simone Nienow",
    "description": "Ea sed quae sequi assumenda molestias voluptatibus cum blanditiis. Rerum accusantium qui.",
    "phone": "(759) 071-8099 x0182",
    "email": "Elsa_Jacobson@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Warszawska 67, 61-031 Poznań",
    "geolat": 52.40979,
    "geolng": 16.9731
}, {
    "date": "2019-06-29T14:13:35.272Z",
    "contactPerson": "Granville Zulauf",
    "description": "Optio porro et et qui aspernatur inventore qui praesentium mollitia. Optio beatae velit. Aperiam dolore quia iste. Accusamus error nihil cumque ipsum et. Rerum suscipit est.",
    "phone": "1-388-208-6725 x4845",
    "email": "Angelo.Lakin7@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Głuszyna 2, 61-332 Poznań",
    "geolat": 52.34176,
    "geolng": 16.91823
}, {
    "date": "2019-06-28T18:14:35.712Z",
    "contactPerson": "Sandrine Rath",
    "description": "Tempore similique qui cumque perspiciatis voluptatem laudantium. Est sed nesciunt et. Et omnis voluptas voluptatem. Vitae officia facilis.",
    "phone": "(273) 779-0210 x8089",
    "email": "Adelbert40@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Grunwaldzka 182, 60-166 Poznań",
    "geolat": 52.39154,
    "geolng": 16.85809
}, {
    "date": "2019-06-28T19:21:35.615Z",
    "contactPerson": "Preston Ondricka",
    "description": "Id provident repellendus voluptate omnis officiis debitis minima velit nostrum. Numquam voluptatibus voluptatem sed earum sunt soluta omnis molestias. Eligendi tempore aut et. Accusantium sapiente tempore unde est eius voluptate cum consequatur vel. Consequatur eaque commodi sit quae qui libero eligendi omnis laboriosam.",
    "phone": "(861) 349-3839 x89259",
    "email": "Cody_Anderson71@yahoo.com",
    "status": "W toku",
    "address": "Kolorowa 2, 60-198 Poznań",
    "geolat": 52.40502,
    "geolng": 16.86489
}, {
    "date": "2019-06-29T03:09:09.021Z",
    "contactPerson": "Magdalen Lynch",
    "description": "Earum enim aut consequatur reprehenderit molestiae. Rerum sit dolor impedit aut qui.",
    "phone": "269-658-8683 x7923",
    "email": "Karine_Zieme@gmail.com",
    "status": "Zamknięta",
    "address": "Nowogrodzka 13/15, 61-047 Poznań",
    "geolat": 52.40881,
    "geolng": 16.98522
}, {
    "date": "2019-06-28T23:33:05.506Z",
    "contactPerson": "Thaddeus Luettgen",
    "description": "Inventore quaerat rerum eius distinctio consequuntur velit maxime. Molestias deserunt atque aut voluptas quia ab ea.",
    "phone": "512.396.8914 x521",
    "email": "Rocio_Balistreri@yahoo.com",
    "status": "Do podjęcia",
    "address": "Opieńskiego 1, 60-685 Poznań",
    "geolat": 52.46139,
    "geolng": 16.91894
}, {
    "date": "2019-06-28T22:46:03.466Z",
    "contactPerson": "Nils Pfannerstill",
    "description": "Sed sed ipsa sunt officia odit accusamus quibusdam. Debitis aut fuga sunt perferendis sit tempore. Ut non deleniti explicabo numquam sed dolores eaque et necessitatibus. Quia sed aut asperiores velit soluta cupiditate omnis ad.",
    "phone": "694-971-7653",
    "email": "Andy31@gmail.com",
    "status": "Zamknięta",
    "address": "Naramowicka 234, 61-607 Poznań",
    "geolat": 52.46131,
    "geolng": 16.94781
}, {
    "date": "2019-06-29T13:31:49.564Z",
    "contactPerson": "Clare Green",
    "description": "Reiciendis et voluptas nihil necessitatibus. Tenetur tempora quaerat fugit officia libero itaque velit molestiae. Sit dolore necessitatibus facilis sed ea.",
    "phone": "241-209-7254",
    "email": "Edgardo_Kassulke@yahoo.com",
    "status": "Zamknięta",
    "address": "Naramowicka 104, 61-619 Poznań",
    "geolat": 52.439,
    "geolng": 16.948
}, {
    "date": "2019-06-28T17:21:06.268Z",
    "contactPerson": "Reggie Bernhard",
    "description": "Est deleniti asperiores quis porro fuga officiis distinctio. Repudiandae ipsa a. Accusantium omnis quaerat vero veniam accusantium nihil doloremque beatae ab.",
    "phone": "417-334-6879",
    "email": "Jayce_Kuphal43@hotmail.com",
    "status": "Do podjęcia",
    "address": "Głogowska 440, 60-004 Poznań",
    "geolat": 52.35382,
    "geolng": 16.84078
}, {
    "date": "2019-06-29T15:37:21.314Z",
    "contactPerson": "Lizeth Considine",
    "description": "Sit perspiciatis exercitationem dolor maxime. Est explicabo illum cumque voluptatem provident. Ducimus nobis accusamus odit et corrupti voluptate sunt. Non ut et. Velit consequuntur consequatur illo iusto quo eaque. Aspernatur cumque iure odio molestiae et sed dolores.",
    "phone": "171.844.5817",
    "email": "Theresia_Mills11@yahoo.com",
    "status": "Do podjęcia",
    "address": "Sianowska 151A, 60-431 Poznań",
    "geolat": 52.43495,
    "geolng": 16.8095
}, {
    "date": "2019-06-28T18:42:50.327Z",
    "contactPerson": "Grace Feeney",
    "description": "Odio omnis iste inventore autem itaque placeat voluptatem est accusamus. Impedit voluptatem aut dignissimos necessitatibus.",
    "phone": "1-374-374-5118",
    "email": "Ena_Senger@gmail.com",
    "status": "Do weryfikacji",
    "address": "Hetmańska 91, 60-218 Poznań",
    "geolat": 52.38684,
    "geolng": 16.91218
}, {
    "date": "2019-06-29T08:36:42.351Z",
    "contactPerson": "Hortense Graham",
    "description": "Repudiandae tempora sit fugit error exercitationem illum unde eius accusantium. Sit dolorem dicta hic natus distinctio nihil. Temporibus iure dicta rem corrupti reprehenderit repellendus possimus. Ipsa itaque rerum quo dolor qui laboriosam ut ut. Adipisci magni qui esse quia.",
    "phone": "(715) 467-1110 x00587",
    "email": "Hans_Russel63@hotmail.com",
    "status": "Do podjęcia",
    "address": "Przybyszewskiego 39A, 60-356 Poznań",
    "geolat": 52.4066,
    "geolng": 16.88891
}, {
    "date": "2019-06-29T12:57:21.330Z",
    "contactPerson": "Cyrus Baumbach",
    "description": "Quia maxime et explicabo vel repellat exercitationem possimus necessitatibus enim. Sed harum quas.",
    "phone": "024.639.6832 x5976",
    "email": "Richard86@gmail.com",
    "status": "Do podjęcia",
    "address": "Oświecenia 59, 61-208 Poznań",
    "geolat": 52.39013,
    "geolng": 16.95905
}, {
    "date": "2019-06-29T12:52:40.454Z",
    "contactPerson": "Chanel Ryan",
    "description": "Accusantium officiis quis et voluptas optio qui eum delectus. Incidunt molestiae ad qui a sunt suscipit vitae iste cumque. Ut consequuntur sed aperiam quibusdam odit et. Aut consequatur tempore consequatur sit mollitia id voluptatem excepturi. Facilis dolor aut omnis ipsa.",
    "phone": "500-557-3946 x6049",
    "email": "Tina_Fahey@gmail.com",
    "status": "Do weryfikacji",
    "address": "Rondo Rataje, 61-144 Poznań",
    "geolat": 52.39657,
    "geolng": 16.94844
}, {
    "date": "2019-06-29T12:11:54.836Z",
    "contactPerson": "Shana Gleason",
    "description": "Cum sunt rerum reprehenderit perferendis occaecati laborum quis ad. Temporibus enim sint dignissimos culpa. Qui in sed alias vel quibusdam id id culpa non.",
    "phone": "(888) 595-0243",
    "email": "Hank_Breitenberg@hotmail.com",
    "status": "Zamknięta",
    "address": "Leszczyńska 3, 60-115 Poznań",
    "geolat": 52.3775,
    "geolng": 16.88109
}, {
    "date": "2019-06-29T08:44:56.779Z",
    "contactPerson": "Madyson Conn",
    "description": "Quo eos sapiente. Delectus enim porro. Aliquid architecto consectetur magni cum.",
    "phone": "1-540-329-5030 x26850",
    "email": "Eloy_Gulgowski@gmail.com",
    "status": "Zamknięta",
    "address": "Serbska 7, 60-696 Poznań",
    "geolat": 52.43289,
    "geolng": 16.95058
}, {
    "date": "2019-06-28T18:41:42.071Z",
    "contactPerson": "Lexus Koch",
    "description": "Error ut ipsa et omnis explicabo. Illum assumenda ipsum repellendus quisquam dicta porro. Iure modi est et ex est. Reiciendis ducimus assumenda expedita reprehenderit a. Consequuntur fuga iure facilis perspiciatis magni sint ducimus fugit.",
    "phone": "(366) 931-2855 x8263",
    "email": "Lia.Willms@gmail.com",
    "status": "Do podjęcia",
    "address": "Aleksandra Gabszewicza 6, 61-332 Poznań",
    "geolat": 52.31248,
    "geolng": 16.9665
}, {
    "date": "2019-06-29T10:53:22.072Z",
    "contactPerson": "Iliana Kuvalis",
    "description": "Veniam iste ea similique repellat. Deleniti maiores ad modi. Consectetur consectetur rerum recusandae temporibus.",
    "phone": "390.746.9773 x9128",
    "email": "Rogelio.Homenick38@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bałtycka 37, 61-017 Poznań",
    "geolat": 52.42669,
    "geolng": 16.97776
}, {
    "date": "2019-06-29T10:07:29.642Z",
    "contactPerson": "Alvena Aufderhar",
    "description": "Eaque quidem sed reprehenderit ad odio est sunt. Similique voluptate qui deserunt commodi occaecati.",
    "phone": "1-330-855-1194 x21322",
    "email": "Whitney_Larkin@yahoo.com",
    "status": "Zamknięta",
    "address": "Czecha 111, 61-291 Poznań",
    "geolat": 52.38668,
    "geolng": 16.98299
}, {
    "date": "2019-06-28T17:03:27.705Z",
    "contactPerson": "Gunnar Wilderman",
    "description": "Facilis saepe voluptatibus asperiores sit qui culpa. Est voluptas ex facere. Est recusandae magnam voluptatum minus non aut sequi veniam tempore. Non iure tempore et odio perspiciatis. Officia reiciendis consequuntur corrupti voluptatem facilis laborum qui dolorem.",
    "phone": "(156) 493-3227 x266",
    "email": "Mackenzie_Rosenbaum@yahoo.com",
    "status": "Zamknięta",
    "address": "Serbska 24, 61-696 Poznań",
    "geolat": 52.431,
    "geolng": 16.94669
}, {
    "date": "2019-06-29T04:01:36.663Z",
    "contactPerson": "Verla Beier",
    "description": "Maiores officia nihil nihil recusandae perspiciatis autem accusamus dolor vitae. Quis eveniet cumque nobis saepe. Et est doloremque. Itaque autem et sint in voluptas qui molestiae. Et ipsa natus praesentium dignissimos molestiae. Voluptatem fuga a natus consectetur exercitationem dolores molestiae et quisquam.",
    "phone": "(748) 745-5782 x6303",
    "email": "Laisha_Russel@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bukowska 156, 60-198 Poznań",
    "geolat": 52.41152,
    "geolng": 16.86388
}, {
    "date": "2019-06-28T20:19:41.647Z",
    "contactPerson": "Elenora Nitzsche",
    "description": "Aut ut harum illum voluptas laudantium aut. Delectus rerum repudiandae.",
    "phone": "641.219.6139 x487",
    "email": "Tomasa_Nader79@yahoo.com",
    "status": "W toku",
    "address": "Winklera 1, 60-246 Poznań",
    "geolat": 52.38777,
    "geolng": 16.89106
}, {
    "date": "2019-06-29T05:11:58.230Z",
    "contactPerson": "Maximillian Bosco",
    "description": "Nihil qui reprehenderit dolorem soluta et at nulla omnis. Sed maxime aut quas quisquam et aut soluta pariatur.",
    "phone": "(770) 748-3214 x56664",
    "email": "Samara_Pollich60@hotmail.com",
    "status": "Do podjęcia",
    "address": "Promienista 160, 60-142 Poznań",
    "geolat": 52.38651,
    "geolng": 16.86405
}, {
    "date": "2019-06-29T14:44:13.452Z",
    "contactPerson": "Mertie Marks",
    "description": "Quam sed est possimus aliquam est. Neque cum nam ab voluptas quidem nihil. Nulla vitae est deleniti deserunt nobis voluptatem.",
    "phone": "(906) 146-0554 x111",
    "email": "Mario_Bergstrom@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Dworcowa 1, 61-801 Poznań",
    "geolat": 52.40287,
    "geolng": 16.91227
}, {
    "date": "2019-06-28T18:58:10.885Z",
    "contactPerson": "Leda Tillman",
    "description": "Tenetur minima voluptatem molestiae voluptas nisi repudiandae sint harum repudiandae. Non omnis exercitationem corrupti quis libero dolorem quisquam quis.",
    "phone": "(933) 155-7535 x693",
    "email": "Rubye_Stehr36@hotmail.com",
    "status": "Do podjęcia",
    "address": "Szamarzewskiego 89, 60-568 Poznań",
    "geolat": 52.41369,
    "geolng": 16.88474
}, {
    "date": "2019-06-29T09:05:38.030Z",
    "contactPerson": "Virgie Breitenberg",
    "description": "Aliquid molestiae qui libero mollitia aut fugit accusantium possimus. Voluptatum excepturi et animi accusamus nihil sed sunt. Quo qui qui possimus.",
    "phone": "(941) 748-7790 x21788",
    "email": "Dax_Rutherford34@hotmail.com",
    "status": "Zamknięta",
    "address": "Piątkowska 80, 60-650 Poznań",
    "geolat": 52.42844,
    "geolng": 16.91721
}, {
    "date": "2019-06-29T01:44:55.450Z",
    "contactPerson": "Alisha Prosacco",
    "description": "Fugit error aliquam et. At inventore facere beatae rem. Ea porro voluptas rerum.",
    "phone": "906-740-3490 x4392",
    "email": "Gwen_Wehner63@hotmail.com",
    "status": "W toku",
    "address": "Umultowska 2, 60-995 Poznań",
    "geolat": 52.44375,
    "geolng": 16.92987
}, {
    "date": "2019-06-29T00:45:55.796Z",
    "contactPerson": "Jovanny Koelpin",
    "description": "Rerum animi similique consequuntur aut. Totam reiciendis architecto quia quidem odit. Id sunt voluptatem. Commodi aut esse. Et soluta qui ab repudiandae praesentium cupiditate.",
    "phone": "164.205.1053",
    "email": "Breana.Hermann44@yahoo.com",
    "status": "Zamknięta",
    "address": "os. Piastowskie 64, 61-155 Poznań",
    "geolat": 52.39048,
    "geolng": 16.94259
}, {
    "date": "2019-06-28T21:29:44.809Z",
    "contactPerson": "Tyson Stamm",
    "description": "Vitae explicabo qui aut repellat consequuntur ad magni numquam. Fugit tempora vel. Nesciunt reiciendis mollitia et ad et est aut cumque ex. Ut iste minima hic. In aliquam voluptas nesciunt.",
    "phone": "(986) 522-0366 x635",
    "email": "Reginald.Friesen60@yahoo.com",
    "status": "Zamknięta",
    "address": "Al.Solidarności 48, 61-696 Poznań",
    "geolat": 52.43535,
    "geolng": 16.92357
}, {
    "date": "2019-06-29T00:26:12.352Z",
    "contactPerson": "Camren Rempel",
    "description": "Rerum quia maxime inventore enim. Facilis non sed non nemo eos eaque laudantium quisquam. Earum eos asperiores in assumenda iusto. Earum aut maiores eos autem animi necessitatibus rerum odit consectetur.",
    "phone": "1-205-961-0799",
    "email": "Jennifer.Auer11@hotmail.com",
    "status": "Do podjęcia",
    "address": "Mieszka I 28, 61-689 Poznań",
    "geolat": 52.43871,
    "geolng": 16.92134
}, {
    "date": "2019-06-29T09:47:31.891Z",
    "contactPerson": "Ernestine Grant",
    "description": "Mollitia sit ut culpa explicabo suscipit vel asperiores. Dignissimos praesentium iste dolores suscipit placeat rerum ab modi minima. Velit est tempore voluptate eius quod. Consequatur cumque error sed vero dolores ut. Cum enim ex asperiores eum eos aut velit doloremque sit.",
    "phone": "594-590-7356 x56947",
    "email": "Natasha75@gmail.com",
    "status": "Do weryfikacji",
    "address": "Krygowskiego 10, 60-680 Poznań",
    "geolat": 52.46328,
    "geolng": 16.94132
}, {
    "date": "2019-06-29T11:20:34.297Z",
    "contactPerson": "Walton Heidenreich",
    "description": "Rerum quas aut perspiciatis totam. Provident odit rerum dicta recusandae animi. Nulla et ex blanditiis qui facilis doloribus maiores explicabo.",
    "phone": "693-253-3011 x102",
    "email": "Dillon1@yahoo.com",
    "status": "W toku",
    "address": "os. Zwycięstwa 13, 61-647 Poznań",
    "geolat": 52.43706,
    "geolng": 16.9283
}, {
    "date": "2019-06-29T01:14:58.322Z",
    "contactPerson": "Lorine Doyle",
    "description": "Possimus beatae quas natus sed. Atque eius quia magnam aut. Cum eum aut sit at omnis molestiae quis.",
    "phone": "(830) 985-4551 x8811",
    "email": "Kallie.Orn90@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Umultowska 85, 61-614 Poznań",
    "geolat": 52.46685,
    "geolng": 16.92876
}, {
    "date": "2019-06-29T14:54:48.597Z",
    "contactPerson": "Ashtyn Powlowski",
    "description": "Soluta et accusantium et. Illum quam aliquid tempora tempore. Aut dolore dolores earum doloribus. Expedita velit qui voluptas. Tempora ipsam aperiam praesentium.",
    "phone": "312-616-9391 x16061",
    "email": "Vladimir_Wyman67@yahoo.com",
    "status": "Zamknięta",
    "address": "Kurlandzka 2, 61-285 Poznań",
    "geolat": 52.37651,
    "geolng": 16.95758
}, {
    "date": "2019-06-29T05:41:12.989Z",
    "contactPerson": "Carolyn Wiegand",
    "description": "Et pariatur eius magnam quidem molestiae. Totam amet et hic non. Sed praesentium deserunt quod fugiat sit molestiae. Tempore ut ducimus dolore quo non. Delectus cum et deserunt dolorem et est. Rerum rerum quia sed delectus voluptas ut rem.",
    "phone": "596-218-9618 x976",
    "email": "Lora.Dooley@yahoo.com",
    "status": "W toku",
    "address": "Piaskowa 2/3, 60-101 Poznań",
    "geolat": 52.41114,
    "geolng": 16.93982
}, {
    "date": "2019-06-29T15:46:33.528Z",
    "contactPerson": "Erik King",
    "description": "Quis quia occaecati nihil repellendus at consequuntur et qui. Dignissimos suscipit mollitia. Veniam eligendi voluptas. Quo sit et dicta alias autem minima magni tempore qui. Molestias facilis provident velit enim corporis ipsam magni et. Odit qui doloribus officia ut inventore velit consequuntur deserunt libero.",
    "phone": "314.717.0003",
    "email": "Ressie_Sipes10@yahoo.com",
    "status": "Do podjęcia",
    "address": "Pleszewska 1, 61-136 Poznań",
    "geolat": 52.39832,
    "geolng": 16.95471
}, {
    "date": "2019-06-29T07:25:18.646Z",
    "contactPerson": "Bria Orn",
    "description": "Veniam non explicabo tenetur qui aut eligendi dolorum. Officiis quam quibusdam tenetur vitae iste.",
    "phone": "051.593.3821",
    "email": "Dillon.Gutkowski29@hotmail.com",
    "status": "W toku",
    "address": "Górecka 30, 60-201 Poznań",
    "geolat": 52.38045,
    "geolng": 16.89673
}, {
    "date": "2019-06-29T01:36:37.321Z",
    "contactPerson": "Alexys Graham",
    "description": "Repudiandae doloribus earum. Dolores natus sequi illum illum nesciunt aliquid.",
    "phone": "992.073.0081 x644",
    "email": "Clyde.Bednar@yahoo.com",
    "status": "W toku",
    "address": "Hetmańska 98, 61-493 Poznań",
    "geolat": 52.38422,
    "geolng": 16.91528
}, {
    "date": "2019-06-28T17:38:02.558Z",
    "contactPerson": "Jon Champlin",
    "description": "Voluptatem quidem et beatae culpa sed assumenda. Occaecati est dolores. Quasi alias esse voluptatem ut et fugit. Et qui nihil cumque doloremque et rem est et eaque. Laudantium atque voluptas numquam. Autem et voluptas doloremque quasi quae quae qui minima.",
    "phone": "1-630-964-5942 x5811",
    "email": "Jaleel68@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Zwierzyniecka 7, 60-813 Poznań",
    "geolat": 52.40767,
    "geolng": 16.90811
}, {
    "date": "2019-06-29T01:12:35.252Z",
    "contactPerson": "Sammie Larkin",
    "description": "Quia et porro vitae sed ratione harum commodi molestias. Atque deserunt non. Reprehenderit laudantium possimus fugit.",
    "phone": "(686) 814-6783 x544",
    "email": "Neil.Pouros@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Kościelna 23, 60-995 Poznań",
    "geolat": 52.41533,
    "geolng": 16.90536
}, {
    "date": "2019-06-29T03:22:49.033Z",
    "contactPerson": "Myrtis Kris",
    "description": "Et ab quia aut non cumque magnam asperiores. Soluta consequatur quia ut et. Eius voluptas sed sequi numquam. Perferendis blanditiis facilis asperiores placeat fugiat molestias placeat. Nemo eligendi amet magni est nam tenetur voluptatem incidunt natus. Totam error expedita voluptatem animi inventore est id in.",
    "phone": "1-488-724-8542",
    "email": "Devan8@gmail.com",
    "status": "Do weryfikacji",
    "address": "Główna 65, 61-019 Poznań",
    "geolat": 52.42157,
    "geolng": 16.9715
}, {
    "date": "2019-06-28T19:15:44.087Z",
    "contactPerson": "Duncan Kirlin",
    "description": "Molestiae enim nam earum voluptatem. Asperiores molestiae rerum. Possimus similique occaecati dolorem dolores.",
    "phone": "(835) 860-4254 x0825",
    "email": "Larry_Rohan28@yahoo.com",
    "status": "W toku",
    "address": "Al. Niepodległości 53, 61-714 Poznań",
    "geolat": 52.41522,
    "geolng": 16.92467
}, {
    "date": "2019-06-29T10:57:05.686Z",
    "contactPerson": "Arno Purdy",
    "description": "Ducimus vel quidem et eius ut nisi libero. Sed dignissimos iste. Fugit voluptatem saepe aut veritatis cum quia.",
    "phone": "196.671.8057",
    "email": "Myrtis.Kovacek60@yahoo.com",
    "status": "Do podjęcia",
    "address": "os. Stare Żegrze 109, 61-246 Poznań",
    "geolat": 52.38357,
    "geolng": 16.96673
}, {
    "date": "2019-06-29T11:24:30.195Z",
    "contactPerson": "Edward Lang",
    "description": "Laborum ipsam qui. Aliquid delectus ipsa. Ut odit corrupti officia. Eaque eum blanditiis et. Ducimus omnis ut quis ad qui. Vitae earum nostrum et perferendis voluptatem sequi nulla qui.",
    "phone": "775.294.7931 x702",
    "email": "Paolo83@yahoo.com",
    "status": "W toku",
    "address": "Jastrzębia 4, 61-155 Poznań",
    "geolat": 52.38853,
    "geolng": 16.94989
}, {
    "date": "2019-06-28T23:18:08.585Z",
    "contactPerson": "Eva Bernier",
    "description": "Et sapiente veritatis ea officiis aut explicabo quis dolorum quibusdam. Est distinctio voluptatum doloremque nam voluptas omnis mollitia. Nesciunt voluptatem ea ipsa et molestias. Repellendus earum veniam dolor dolorem eaque est voluptas.",
    "phone": "020-746-2727 x4173",
    "email": "Hiram_Champlin8@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Obornicka 288, 60-693 Poznań",
    "geolat": 52.45182,
    "geolng": 16.90417
}, {
    "date": "2019-06-29T14:19:12.038Z",
    "contactPerson": "Sterling Koepp",
    "description": "Aspernatur earum nostrum deserunt distinctio dolores aut dolore. Eveniet eligendi asperiores rerum ipsam ipsa. Ipsa qui dicta.",
    "phone": "305.676.4418 x58393",
    "email": "Rebecca25@gmail.com",
    "status": "Do weryfikacji",
    "address": "Rondo Obornickie, 60-687 Poznań",
    "geolat": 52.44361,
    "geolng": 16.91017
}, {
    "date": "2019-06-29T03:59:48.082Z",
    "contactPerson": "Autumn Kuhn",
    "description": "Et quibusdam nulla cum laborum incidunt eos assumenda. Perferendis rem rerum sint non. Unde sapiente soluta voluptas unde quis.",
    "phone": "(260) 715-9948 x613",
    "email": "Alf.Stehr66@yahoo.com",
    "status": "Do podjęcia",
    "address": "Palacza 18, 60-241 Poznań",
    "geolat": 52.38824,
    "geolng": 16.88859
}, {
    "date": "2019-06-29T01:42:49.927Z",
    "contactPerson": "Herminia Altenwerth",
    "description": "Facere vel expedita non. Veniam maxime odio consequatur.",
    "phone": "1-614-019-8306",
    "email": "Virginia_Marks@gmail.com",
    "status": "W toku",
    "address": "Szarych Szeregów 24, 60-462 Poznań",
    "geolat": 52.45851,
    "geolng": 16.88226
}, {
    "date": "2019-06-29T13:43:07.401Z",
    "contactPerson": "Leonor Abernathy",
    "description": "Tempore architecto quam alias aut. Consequuntur accusamus rerum dolor unde mollitia. Sunt ut sit aspernatur facere ut sed esse. Laborum ullam natus. Blanditiis saepe qui.",
    "phone": "342-134-6958 x1131",
    "email": "Dana0@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Szwajcarska 14, 61-285 Poznań",
    "geolat": 52.38252,
    "geolng": 16.99457
}, {
    "date": "2019-06-29T04:34:04.257Z",
    "contactPerson": "Eugenia Miller",
    "description": "Sint nostrum in impedit beatae porro corrupti quae rerum. Neque dolorem sunt eius quo. Assumenda neque nemo adipisci laboriosam et doloribus numquam. Et eum sunt non dolor. Fugiat quod libero laudantium.",
    "phone": "1-527-232-5488 x866",
    "email": "Vito.Goodwin70@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Zamenhofa 132, 61-139 Poznań",
    "geolat": 52.38503,
    "geolng": 16.94344
}, {
    "date": "2019-06-28T18:39:30.771Z",
    "contactPerson": "Zula Homenick",
    "description": "Exercitationem dolore sed. Ad vel autem quo quod omnis ea ducimus exercitationem necessitatibus. Nulla et deleniti quas et.",
    "phone": "731-455-3327 x2429",
    "email": "Kitty.Nitzsche84@gmail.com",
    "status": "Do weryfikacji",
    "address": "Olsztyńska 2, 60-416 Poznań",
    "geolat": 52.43204,
    "geolng": 16.83779
}, {
    "date": "2019-06-29T15:28:07.544Z",
    "contactPerson": "Brianne Doyle",
    "description": "Provident quidem impedit in aspernatur. Nam dolorem delectus in iusto. Qui voluptatibus repellendus qui harum dolor debitis distinctio. Sit explicabo nam quidem voluptate. Est repudiandae nihil ab temporibus et aperiam sequi.",
    "phone": "(960) 695-0904 x7816",
    "email": "Hermina22@gmail.com",
    "status": "Do weryfikacji",
    "address": "Leszka 13, 61-062 Poznań",
    "geolat": 52.40777,
    "geolng": 17.02432
}, {
    "date": "2019-06-29T07:38:22.306Z",
    "contactPerson": "Rebekah Homenick",
    "description": "A corrupti possimus assumenda aut inventore vel eveniet est. Voluptas enim atque nobis velit. Voluptate quo sed hic necessitatibus incidunt voluptas dolor.",
    "phone": "058.427.7773 x56949",
    "email": "Jerald.Koelpin@yahoo.com",
    "status": "Zamknięta",
    "address": "Podkomorska 2, 60-326 Poznań",
    "geolat": 52.3977,
    "geolng": 16.86576
}, {
    "date": "2019-06-28T20:51:39.272Z",
    "contactPerson": "Winston Fahey",
    "description": "Illum praesentium assumenda ipsa odit. Temporibus ut explicabo nisi quod sed blanditiis est laboriosam molestiae. Similique voluptatem perferendis et maiores veritatis quam. Ipsa quibusdam totam.",
    "phone": "942-685-8837",
    "email": "Godfrey.Reynolds49@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Obrzyca 7, 61-156 Poznań",
    "geolat": 52.39063,
    "geolng": 16.94634
}, {
    "date": "2019-06-29T00:15:56.251Z",
    "contactPerson": "Will Fritsch",
    "description": "Aliquam eius sint in soluta. Quis ab itaque hic ipsa quia ea aliquam similique. Ut ea deleniti nihil. Sit nesciunt non nam dolorem explicabo et hic excepturi molestiae. Recusandae est id totam.",
    "phone": "(033) 122-7647 x5294",
    "email": "Keven88@gmail.com",
    "status": "W toku",
    "address": "Grochowska 58, 60-339 Poznań",
    "geolat": 52.4021,
    "geolng": 16.87616
}, {
    "date": "2019-06-29T13:21:09.025Z",
    "contactPerson": "Santos Littel",
    "description": "Repudiandae assumenda nihil. Ipsa voluptatibus blanditiis dolores vero laudantium accusantium fugiat in. Cum vitae aut sit quis et aliquid. Corporis aut dolorem. Voluptate sit omnis quis quo eum. Perspiciatis quas voluptas voluptatem beatae sint hic quidem.",
    "phone": "376-330-1265 x657",
    "email": "Germaine_Kuphal71@gmail.com",
    "status": "Zamknięta",
    "address": "Wilczak 16A, 61-623 Poznań",
    "geolat": 52.42977,
    "geolng": 16.9524
}, {
    "date": "2019-06-29T00:49:21.220Z",
    "contactPerson": "Jerrold Boehm",
    "description": "Incidunt placeat est cupiditate velit est. Sunt rerum facere. Ipsum temporibus veniam sed repudiandae exercitationem et eos cum nulla. Dolor eligendi minus. Deserunt accusantium at dolorum minus dolores laborum.",
    "phone": "(234) 816-4153 x0922",
    "email": "Niko_Grimes61@hotmail.com",
    "status": "W toku",
    "address": "os. Stare Żegrze 110A, 61-249 Poznań",
    "geolat": 52.38353,
    "geolng": 16.96747
}, {
    "date": "2019-06-29T03:26:03.807Z",
    "contactPerson": "Joannie McLaughlin",
    "description": "Aut quos nihil ex enim vitae. Sint eos odit sed voluptatibus porro sint debitis. Non fugit ut. Dolor numquam repellat a perferendis voluptas dolore asperiores. Natus accusantium aut non enim.",
    "phone": "788-756-7623",
    "email": "Damien58@hotmail.com",
    "status": "W toku",
    "address": "Grunwaldzka 279, 60-166 Poznań",
    "geolat": 52.38678,
    "geolng": 16.84392
}, {
    "date": "2019-06-29T03:07:21.178Z",
    "contactPerson": "Dina Runolfsdottir",
    "description": "Accusamus quia quae ut ut cumque nihil in aperiam. Perferendis debitis temporibus cupiditate totam alias magnam ullam. Voluptates nisi sint est consequuntur odit eum est. Sed nihil aut aut voluptates fuga tenetur atque consequatur et. Minima modi inventore aspernatur et quae sint ullam illum.",
    "phone": "1-532-072-2681 x21098",
    "email": "Emmitt_Beer33@hotmail.com",
    "status": "W toku",
    "address": "Ożarowska 2, 61-332 Poznań",
    "geolat": 52.35503,
    "geolng": 16.94287
}, {
    "date": "2019-06-29T05:29:57.301Z",
    "contactPerson": "Valerie Herman",
    "description": "Fuga tempore corporis minus. Blanditiis quisquam assumenda. Cum distinctio placeat aut sint dolorum. Ratione fugiat perspiciatis deleniti quae eius temporibus vel. Vel et voluptatum mollitia et enim enim minus dolore. Asperiores voluptas illum.",
    "phone": "553.942.6300",
    "email": "Connor.Will@gmail.com",
    "status": "Do podjęcia",
    "address": "Piekary 1, 61-823 Poznań",
    "geolat": 52.40566,
    "geolng": 16.92759
}, {
    "date": "2019-06-28T17:08:33.586Z",
    "contactPerson": "Jovan Fritsch",
    "description": "Qui aliquid ut molestiae rerum consequatur maiores magnam. Quis quod molestiae corrupti alias ut aliquid. Maxime est magni omnis in qui in eaque unde. Tempora tempore sit quaerat expedita. Et vel ab aut officia praesentium ex.",
    "phone": "1-898-413-6904 x113",
    "email": "Kevon89@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bobrzańska 21, 61-248 Poznań",
    "geolat": 52.38222,
    "geolng": 16.97334
}, {
    "date": "2019-06-29T08:12:54.414Z",
    "contactPerson": "Carmine Flatley",
    "description": "Est eum illum veniam ducimus quo. Quidem ullam maxime aliquam velit enim quo necessitatibus esse sed. Rerum magni itaque doloribus qui magnam deleniti accusantium impedit eum.",
    "phone": "106-960-4946 x504",
    "email": "Dagmar_Beahan@yahoo.com",
    "status": "Zamknięta",
    "address": "Złotowska 6-8, 60-189 Poznań",
    "geolat": 52.41251,
    "geolng": 16.83204
}, {
    "date": "2019-06-28T18:08:44.069Z",
    "contactPerson": "Rosemarie Rath",
    "description": "Facere quam quaerat architecto facilis ipsum nesciunt. Consectetur iure ea dolorem modi reprehenderit culpa eos. Omnis sint enim amet maiores nam voluptas quidem sint. Officiis iure repudiandae. A alias assumenda.",
    "phone": "187-812-8197",
    "email": "Aniya98@gmail.com",
    "status": "W toku",
    "address": "Chartowo 21, 61-245 Poznań",
    "geolat": 52.39182,
    "geolng": 16.98116
}, {
    "date": "2019-06-28T21:36:15.741Z",
    "contactPerson": "Noe Schumm",
    "description": "Cum voluptatem quia perspiciatis voluptas id totam rerum. Rerum at sunt voluptatum error maiores dolorem impedit mollitia. Eligendi dolor sit molestiae.",
    "phone": "232.495.4192",
    "email": "Cortney.Ledner96@hotmail.com",
    "status": "W toku",
    "address": "Grunwaldzka 104, 60-307 Poznań",
    "geolat": 52.39645,
    "geolng": 16.87009
}, {
    "date": "2019-06-28T22:30:22.515Z",
    "contactPerson": "Tatyana Gislason",
    "description": "Cum veritatis vel enim aut numquam qui nisi. Aut nobis aspernatur. Eum ab harum.",
    "phone": "(612) 951-7075",
    "email": "Frederique.Schiller59@gmail.com",
    "status": "Zamknięta",
    "address": "Starołęcka 1, 61-341 Poznań",
    "geolat": 52.37852,
    "geolng": 16.94333
}, {
    "date": "2019-06-29T00:57:27.223Z",
    "contactPerson": "Tamara Weimann",
    "description": "Ea tempora vitae deserunt cumque ipsum a ipsam aut. Numquam incidunt est sapiente voluptate beatae et. Eum voluptates nesciunt consequatur odio at ducimus ad id odit. Nulla excepturi minus sit maxime.",
    "phone": "904-892-5448",
    "email": "Ressie.Herzog@yahoo.com",
    "status": "Do podjęcia",
    "address": "Szymanowskiego 13, 61-685 Poznań",
    "geolat": 52.45956,
    "geolng": 16.90846
}, {
    "date": "2019-06-29T07:48:37.096Z",
    "contactPerson": "Merritt Reinger",
    "description": "Adipisci et dolore suscipit repellendus recusandae molestiae ipsa. Rem totam facilis velit qui culpa est recusandae. Minima laboriosam ab sequi veniam dolore assumenda.",
    "phone": "835.260.2228",
    "email": "Payton.Roberts75@gmail.com",
    "status": "Do podjęcia",
    "address": "Aleje Solidarności 47, 61-696 Poznań",
    "geolat": 52.43717,
    "geolng": 16.91797
}, {
    "date": "2019-06-28T23:29:11.094Z",
    "contactPerson": "Melissa Murazik",
    "description": "Voluptatem dolor et sed. Cupiditate voluptatem et aut alias vero. Alias ipsam error magnam quae qui nobis deleniti rem.",
    "phone": "1-550-889-5003 x53572",
    "email": "Filiberto_Gusikowski@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Kacza 15, 60-106 Poznań",
    "geolat": 52.38195,
    "geolng": 16.86187
}, {
    "date": "2019-06-29T08:48:05.981Z",
    "contactPerson": "Jairo Cummings",
    "description": "Voluptatem repellendus dolores et est ratione. Numquam qui eos. Assumenda nesciunt ex commodi et quia sint. Eos rerum nam repellendus suscipit est. Non molestiae eligendi rerum laborum dolorem quo quia ducimus.",
    "phone": "1-295-826-2342 x864",
    "email": "Leland64@yahoo.com",
    "status": "W toku",
    "address": "Umultowska 32, 61-614 Poznań",
    "geolat": 52.45172,
    "geolng": 16.9275
}, {
    "date": "2019-06-29T09:16:49.877Z",
    "contactPerson": "Justyn Barrows",
    "description": "Dolor et culpa quo cupiditate laborum iure provident ut. Sequi vero dolor. A et odio. Ut harum vel.",
    "phone": "1-607-144-4589",
    "email": "Elva.Gibson88@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Rabczańska 1, 60-476 Poznań",
    "geolat": 52.44541,
    "geolng": 16.88476
}, {
    "date": "2019-06-28T23:09:29.819Z",
    "contactPerson": "Russel Lemke",
    "description": "Error quae ducimus aut voluptatem adipisci quisquam illum. Quidem numquam tenetur eaque qui sapiente consequuntur quasi quos. Molestias quia sed dolores. Eos temporibus iure atque natus sed id.",
    "phone": "1-805-699-8049",
    "email": "Keagan_Parker4@gmail.com",
    "status": "W toku",
    "address": "Lelewela 8, 61-405 Poznań",
    "geolat": 52.36008,
    "geolng": 16.88573
}, {
    "date": "2019-06-28T16:38:06.264Z",
    "contactPerson": "Idella Torphy",
    "description": "Est similique quia. Cupiditate non quasi fugit iste.",
    "phone": "1-902-791-1132 x336",
    "email": "Keenan.Kemmer86@hotmail.com",
    "status": "W toku",
    "address": "Skwierzyńska 1, 61-616 Poznań",
    "geolat": 52.44628,
    "geolng": 16.93595
}, {
    "date": "2019-06-29T14:45:59.376Z",
    "contactPerson": "Gonzalo Cruickshank",
    "description": "Et est amet. Eum non repellat quas et impedit asperiores repellendus consequatur. Repudiandae eaque quae. Aut enim sit possimus.",
    "phone": "(128) 885-3101",
    "email": "Morgan.Lehner71@yahoo.com",
    "status": "Do podjęcia",
    "address": "Rzeszowska 2, 60-461 Poznań",
    "geolat": 52.45403,
    "geolng": 16.8526
}, {
    "date": "2019-06-29T06:02:08.080Z",
    "contactPerson": "Lyla Raynor",
    "description": "Aperiam incidunt ipsum magnam sequi repellendus labore in dignissimos. Saepe architecto sapiente est asperiores. Et ex quia rerum eos est nam omnis aut.",
    "phone": "108.006.0394",
    "email": "Naomi.Ortiz7@gmail.com",
    "status": "Do podjęcia",
    "address": "Aleje Niepodległości 30, 61-713 Poznań",
    "geolat": 52.41362,
    "geolng": 16.92175
}, {
    "date": "2019-06-29T03:15:20.813Z",
    "contactPerson": "Laverne Jacobs",
    "description": "Placeat quae magnam maiores voluptate velit a beatae dolor reiciendis. Voluptatum consequuntur eum voluptatibus alias explicabo aut. Eligendi quis tempora sit. Iste deleniti ut harum voluptate. Nostrum fugiat possimus soluta. Reprehenderit et numquam minima placeat qui quo molestiae eligendi accusantium.",
    "phone": "851-392-9984 x542",
    "email": "Kameron.Hauck68@hotmail.com",
    "status": "Do podjęcia",
    "address": "Wspólna 32, 61-479 Poznań",
    "geolat": 52.37706,
    "geolng": 16.90985
}, {
    "date": "2019-06-29T03:46:01.433Z",
    "contactPerson": "Estelle Johnston",
    "description": "Qui enim esse modi enim eum. At eligendi quod nemo praesentium. Molestiae aut temporibus sed fugiat aliquid sapiente fuga. Adipisci qui quo impedit deleniti pariatur id.",
    "phone": "736.782.9509 x66361",
    "email": "Nikko.Rutherford@gmail.com",
    "status": "Do podjęcia",
    "address": "Łukaszewicza 43, 60-211 Poznań",
    "geolat": 52.39046,
    "geolng": 16.90297
}, {
    "date": "2019-06-29T07:04:24.328Z",
    "contactPerson": "Kaelyn Kirlin",
    "description": "Qui quos dolorem omnis eius ut voluptatem numquam aut nisi. Magni recusandae quo et asperiores velit dolor ut ullam odit.",
    "phone": "828-657-5255",
    "email": "Joanie66@gmail.com",
    "status": "W toku",
    "address": "Wołczyńska 50, 60-205 Poznań",
    "geolat": 52.37622,
    "geolng": 16.82822
}, {
    "date": "2019-06-28T22:26:57.628Z",
    "contactPerson": "Marjory Gutkowski",
    "description": "Maiores minima quibusdam aut et dignissimos consequuntur. Velit eaque quia sapiente eum. Quam et enim ipsa sint eum delectus quod cupiditate. Sed totam dolore aut consequatur adipisci. Exercitationem autem quod laborum dolor. Necessitatibus quo pariatur et praesentium voluptatem aut aut.",
    "phone": "1-065-695-5253",
    "email": "Sylvia_Huels@yahoo.com",
    "status": "Zamknięta",
    "address": "Główna 35, 61-011 Poznań",
    "geolat": 52.42101,
    "geolng": 16.96979
}, {
    "date": "2019-06-28T21:55:04.009Z",
    "contactPerson": "Velda McGlynn",
    "description": "Neque necessitatibus adipisci laudantium. Laboriosam voluptatem eveniet voluptatem veniam. Neque similique odit mollitia ducimus velit facilis vel. Voluptatem repellendus labore cupiditate et qui molestias sapiente voluptas. Odit pariatur magni quibusdam ullam. Et quas magnam quae expedita non.",
    "phone": "1-052-337-7836",
    "email": "Norbert_Schumm32@hotmail.com",
    "status": "W toku",
    "address": "Franowo 1, 61-302 Poznań",
    "geolat": 52.37712,
    "geolng": 16.98501
}, {
    "date": "2019-06-28T23:37:26.409Z",
    "contactPerson": "Fanny Balistreri",
    "description": "Perspiciatis sit porro illum enim aspernatur perferendis ipsa qui aliquid. Omnis sed modi dolorum ipsum enim. Voluptas laboriosam doloribus ipsum. Atque labore occaecati ipsa ut vel autem iusto beatae facere. Reprehenderit aut omnis ipsa quis minus. Et a vero quo animi et aliquam ea.",
    "phone": "092.613.0065",
    "email": "Dion67@hotmail.com",
    "status": "W toku",
    "address": "Osiedle Armii Krajowej 125, 61-381 Poznań",
    "geolat": 52.37917,
    "geolng": 16.9539
}, {
    "date": "2019-06-29T07:41:34.656Z",
    "contactPerson": "Bernadette Greenfelder",
    "description": "Corrupti consectetur sed consequatur molestiae. Aliquam eveniet quo aut. In rerum distinctio aperiam dolores quos debitis occaecati magnam blanditiis. Tempore est minus placeat est inventore sequi necessitatibus laborum est. In sit blanditiis. Quam non voluptas dolorem.",
    "phone": "482.282.9854 x362",
    "email": "Melisa.Stoltenberg@gmail.com",
    "status": "W toku",
    "address": "Kazimierza Wielkiego 5, 58-100 Świdnica",
    "geolat": 50.8592,
    "geolng": 16.4887
}, {
    "date": "2019-06-29T11:20:40.513Z",
    "contactPerson": "Khalil Armstrong",
    "description": "Rerum illo molestiae vel atque dolorum corrupti voluptas. Cupiditate vel soluta et sit culpa quo autem sit voluptas. Ut et rerum suscipit porro iste ex est.",
    "phone": "717.136.0478",
    "email": "Amparo56@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Sikorskiego 58, 58-105 Świdnica",
    "geolat": 50.85051,
    "geolng": 16.47562
}, {
    "date": "2019-06-29T11:27:07.595Z",
    "contactPerson": "Annie Langosh",
    "description": "Maiores velit qui doloribus. Quasi quia voluptas.",
    "phone": "034-871-8334 x87513",
    "email": "Jared29@yahoo.com",
    "status": "W toku",
    "address": "Rolnicza 1, 58-100 Świdnica",
    "geolat": 50.84163,
    "geolng": 16.50706
}, {
    "date": "2019-06-28T21:49:48.069Z",
    "contactPerson": "Adolph Langworth",
    "description": "Sunt nisi corrupti quis est enim temporibus quos qui pariatur. Doloremque illum possimus culpa a fugiat tenetur praesentium exercitationem. Eos consequatur debitis quam iure consequuntur amet. Adipisci explicabo ad culpa quidem et. Iste autem qui sit facere sunt repellendus quibusdam repellendus. Consequatur est aspernatur quisquam excepturi totam.",
    "phone": "599-843-2944 x420",
    "email": "Jaida.Herman@hotmail.com",
    "status": "W toku",
    "address": "Zamenhofa 58, 58-105 Świdnica",
    "geolat": 50.84272,
    "geolng": 16.46365
}, {
    "date": "2019-06-29T03:09:01.627Z",
    "contactPerson": "Kris Armstrong",
    "description": "Quia officia occaecati voluptas. Ex quisquam non et odio iure aliquid suscipit. Voluptas laudantium quasi molestiae.",
    "phone": "1-624-313-1676 x43001",
    "email": "Cecilia69@gmail.com",
    "status": "W toku",
    "address": "Długa 3, 66-008 Świdnica",
    "geolat": 51.88789,
    "geolng": 15.39125
}, {
    "date": "2019-06-29T09:51:10.732Z",
    "contactPerson": "Colin Goodwin",
    "description": "Consequatur dolor nobis. Laboriosam earum ut corporis. Nesciunt nulla incidunt cumque qui.",
    "phone": "1-837-884-8070",
    "email": "Micheal.Bergstrom@gmail.com",
    "status": "Zamknięta",
    "address": "Plac Kombatantów 1, 58-100 Świdnica",
    "geolat": 50.84349,
    "geolng": 16.49236
}, {
    "date": "2019-06-28T17:59:16.614Z",
    "contactPerson": "Jonathan Wiegand",
    "description": "Minus et maxime dolorem cumque quas quis. Temporibus officiis eum dolor occaecati vero recusandae nulla. Et esse veritatis veniam et est voluptatibus voluptas rerum aut.",
    "phone": "(123) 960-4308 x5640",
    "email": "Chelsey_Little78@gmail.com",
    "status": "W toku",
    "address": "Głowackiego 28, 58-100 Świdnica",
    "geolat": 50.83929,
    "geolng": 16.4736
}, {
    "date": "2019-06-29T10:02:08.967Z",
    "contactPerson": "Genevieve Fisher",
    "description": "Laudantium unde autem rem voluptates ab unde aut necessitatibus quia. Incidunt rerum incidunt voluptates voluptatibus et ipsum aspernatur. In in et error ipsum quibusdam aut voluptatum. Ullam nesciunt aperiam voluptates et velit.",
    "phone": "(171) 788-7233 x44271",
    "email": "Drake76@gmail.com",
    "status": "Zamknięta",
    "address": "Strzegomska 2, 58-105 Świdnica",
    "geolat": 50.8527,
    "geolng": 16.4752
}, {
    "date": "2019-06-28T18:43:38.406Z",
    "contactPerson": "Amalia Jacobi",
    "description": "Quia illo vitae ab voluptatem magni iusto tempora non modi. Consequatur voluptatibus eum iste maiores laudantium et expedita.",
    "phone": "1-660-532-7443 x9484",
    "email": "Keara.Willms93@gmail.com",
    "status": "Do weryfikacji",
    "address": "Szymanowskiego 13, 58-100 Świdnica",
    "geolat": 50.83311,
    "geolng": 16.47829
}, {
    "date": "2019-06-29T03:45:29.090Z",
    "contactPerson": "Jovani Bechtelar",
    "description": "Beatae dolorem est quibusdam. Consectetur provident et tempora iusto qui. Qui error non mollitia. Consectetur voluptatem et enim. Deserunt cumque hic aliquam animi esse. Quia veritatis suscipit consectetur itaque deleniti.",
    "phone": "1-222-022-0318 x383",
    "email": "Mya_Pagac@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Westerplatte 57, 58-100 Świdnica",
    "geolat": 50.8352,
    "geolng": 16.501
}, {
    "date": "2019-06-29T08:22:49.867Z",
    "contactPerson": "Magnolia Price",
    "description": "Animi autem aperiam perspiciatis explicabo quis. Quis recusandae rem quia velit optio et qui quod. Pariatur repellendus quasi delectus. Quis autem veniam est harum eos explicabo et. Cum id velit. Quo alias iste.",
    "phone": "(116) 516-8140 x3309",
    "email": "Arvid.Ritchie90@yahoo.com",
    "status": "Zamknięta",
    "address": "Ofiar Oświęcimskich 48, 58-100 Świdnica",
    "geolat": 50.84472,
    "geolng": 16.47224
}, {
    "date": "2019-06-28T22:29:17.057Z",
    "contactPerson": "Jovani Pollich",
    "description": "Animi qui vel ducimus vero itaque sit inventore non ea. Ut corporis neque nesciunt ut at quibusdam corporis sapiente. Deleniti rerum ad aspernatur delectus sit animi. Minima minima in maxime ratione natus est porro.",
    "phone": "(673) 192-1410",
    "email": "Marianna.Dach77@yahoo.com",
    "status": "Zamknięta",
    "address": "Karola Miarki 42, 58-500 Jelenia Góra",
    "geolat": 50.89174,
    "geolng": 15.71229
}, {
    "date": "2019-06-29T02:31:15.730Z",
    "contactPerson": "Troy Morar",
    "description": "Quia ut quo dolores dolor ullam. Eum quisquam molestiae ullam iusto molestiae quis a. Dolores fugit harum rerum. Officia fugit quidem omnis beatae voluptatem id a nisi quo. Porro corrupti qui.",
    "phone": "1-049-021-7535",
    "email": "Everett.Ryan@gmail.com",
    "status": "Do weryfikacji",
    "address": "Ciepłownicza 23A, 31-574 Kraków",
    "geolat": 50.05109,
    "geolng": 20.01126
}, {
    "date": "2019-06-29T11:34:52.229Z",
    "contactPerson": "Darian Gulgowski",
    "description": "Quia fugiat nihil molestiae. Est libero accusamus sequi consectetur non aspernatur ex.",
    "phone": "1-411-111-2488 x32440",
    "email": "Jay_Padberg@yahoo.com",
    "status": "Zamknięta",
    "address": "Traktorowa 111, 92-103 Łódź",
    "geolat": 51.80334,
    "geolng": 19.39913
}, {
    "date": "2019-06-29T12:53:39.613Z",
    "contactPerson": "Nicklaus Larkin",
    "description": "Autem aut nihil temporibus excepturi aut tenetur velit soluta voluptas. Nostrum debitis excepturi qui ut. Aut aliquid modi repudiandae et.",
    "phone": "010.358.5590 x1022",
    "email": "Allie.Leannon21@yahoo.com",
    "status": "W toku",
    "address": "Magazynowa 3, 45-119 Opole",
    "geolat": 50.68255,
    "geolng": 17.90951
}, {
    "date": "2019-06-29T03:08:28.458Z",
    "contactPerson": "Aliya Prohaska",
    "description": "Officiis repellat tempora. Et autem velit quia aut. In magni dicta non repudiandae.",
    "phone": "055.087.0541 x033",
    "email": "Nickolas.Shields44@yahoo.com",
    "status": "W toku",
    "address": "Kościuszki 227, 40-600 Katowice",
    "geolat": 50.22503,
    "geolng": 18.98898
}, {
    "date": "2019-06-29T07:33:28.500Z",
    "contactPerson": "Emelie Baumbach",
    "description": "Dolorem ut tempora quos vel et esse voluptate molestiae distinctio. Non maiores qui quod. Suscipit iure similique rerum voluptate veniam deleniti exercitationem. Animi non dicta. Et exercitationem odio voluptas impedit et asperiores.",
    "phone": "617.995.3009 x717",
    "email": "Carrie_Jacobi25@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Annopol 3, 03-236 Warszawa",
    "geolat": 52.30148,
    "geolng": 21.02021
}, {
    "date": "2019-06-29T15:01:27.760Z",
    "contactPerson": "Ezekiel Prohaska",
    "description": "Non non pariatur dolores soluta beatae illo corrupti quae. Minus unde nesciunt explicabo voluptas earum et cupiditate. Atque unde eum doloremque et a ad dolor. Ipsam et est molestiae officiis.",
    "phone": "092.665.3061 x8915",
    "email": "Abbie.Wolf43@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bierutowska 81C, 51-317 Wrocław",
    "geolat": 51.15649,
    "geolng": 17.14715
}, {
    "date": "2019-06-29T00:14:16.054Z",
    "contactPerson": "Oma Ratke",
    "description": "Aut aut molestiae reiciendis minus vero nostrum magni unde vitae. Quos fuga saepe placeat culpa praesentium possimus corrupti accusamus totam. Sed repellat labore iusto temporibus deleniti et. Nisi in harum ab quos quam illo non cum. Soluta exercitationem est hic ut aut.",
    "phone": "(810) 153-6359 x451",
    "email": "Dina_Skiles@yahoo.com",
    "status": "Do podjęcia",
    "address": "Połczyńska 84, 01-302 Warszawa",
    "geolat": 52.21736,
    "geolng": 20.89924
}, {
    "date": "2019-06-29T10:24:11.953Z",
    "contactPerson": "Ardella Ratke",
    "description": "Accusantium est et velit quod. Non molestias quis nulla sed. Velit libero et incidunt aut illo sapiente. Voluptas et quos exercitationem earum dolores aliquam esse. Ipsam laboriosam voluptatibus ut.",
    "phone": "581-238-2921 x865",
    "email": "Ocie24@gmail.com",
    "status": "W toku",
    "address": "Puławska 621B, 02-801 Warszawa",
    "geolat": 52.10654,
    "geolng": 21.01924
}, {
    "date": "2019-06-29T10:40:27.891Z",
    "contactPerson": "Viviane Mohr",
    "description": "Quidem vitae beatae vel qui sint non occaecati nobis praesentium. Doloremque iste cum eum aperiam non facere debitis porro. Illo dolore quia. Accusantium a est.",
    "phone": "(739) 195-9172",
    "email": "Dameon.Schaden@yahoo.com",
    "status": "Do podjęcia",
    "address": "Szczęsna 7, 02-454 Warszawa",
    "geolat": 52.20914,
    "geolng": 20.92898
}, {
    "date": "2019-06-29T01:52:20.224Z",
    "contactPerson": "Tess Altenwerth",
    "description": "Sunt velit est perspiciatis et quos omnis neque corrupti aut. Ut doloremque et unde facilis at beatae molestias consequatur. Eos in incidunt magni rerum rerum maxime voluptatibus sed dolores. Illo ea iste aliquam qui rerum eos adipisci repellendus aperiam.",
    "phone": "1-397-325-7046",
    "email": "Bennie.Rosenbaum@yahoo.com",
    "status": "Do podjęcia",
    "address": "Modlińska 302, 03-152 Warszawa",
    "geolat": 52.3433,
    "geolng": 20.95239
}, {
    "date": "2019-06-29T08:03:25.743Z",
    "contactPerson": "Lukas Waelchi",
    "description": "Id repudiandae exercitationem voluptatem temporibus omnis numquam et. Id ut ut. Repellat doloribus laborum deserunt illo. Et officiis ea.",
    "phone": "1-681-696-9617 x26552",
    "email": "Marlen57@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Łopuszańska 22, 02-220 Warszawa",
    "geolat": 52.19233,
    "geolng": 20.95088
}, {
    "date": "2019-06-29T13:50:51.002Z",
    "contactPerson": "Earline Skiles",
    "description": "Est quae quis numquam. Fugiat tempore dolorem consequatur. Voluptatem ab occaecati sunt magni odio laudantium non. Ut voluptas non eum voluptas placeat ipsa architecto in.",
    "phone": "872.237.3259 x152",
    "email": "Kathleen75@hotmail.com",
    "status": "W toku",
    "address": "Cyrulików 95, 04-402 Warszawa",
    "geolat": 52.25736,
    "geolng": 21.16776
}, {
    "date": "2019-06-28T21:56:51.817Z",
    "contactPerson": "Jerad Mohr",
    "description": "Tenetur similique atque culpa. Iste qui reiciendis iusto ut. At molestiae adipisci sit sunt. Sapiente recusandae voluptatem. Mollitia ipsam et quaerat voluptates porro et quasi. Quasi sequi quae nemo iure laborum voluptate unde soluta.",
    "phone": "1-999-504-8347 x467",
    "email": "Litzy61@gmail.com",
    "status": "Do weryfikacji",
    "address": "Powstańców Śląskich 72, 01-381 Warszawa",
    "geolat": 52.24002,
    "geolng": 20.91403
}, {
    "date": "2019-06-28T17:43:03.180Z",
    "contactPerson": "Letitia Cassin",
    "description": "Rem blanditiis explicabo sed aut laudantium ea quae ipsa. Molestias saepe voluptas earum temporibus non. Fugit est modi animi. Veniam quaerat quaerat dolores dolor vel et. Dolorum ut explicabo qui dolorum et sapiente dolor deleniti. Molestiae ipsum commodi sequi quas expedita voluptatem autem.",
    "phone": "(194) 030-0333",
    "email": "Silas44@gmail.com",
    "status": "Do podjęcia",
    "address": "17 Stycznia 43, 02-146 Warszawa",
    "geolat": 52.18287,
    "geolng": 20.96944
}, {
    "date": "2019-06-29T07:57:59.468Z",
    "contactPerson": "Ena Rice",
    "description": "Itaque suscipit expedita labore. Est maxime ab et aut distinctio exercitationem est. Qui maxime velit. Aut ea vel consectetur sit vitae sapiente. Nulla asperiores dolorum aperiam corrupti officia rerum.",
    "phone": "1-308-304-4416 x6356",
    "email": "Vida_Huel@yahoo.com",
    "status": "Zamknięta",
    "address": "Połczyńska 121/125, 01-377 Warszawa",
    "geolat": 52.21431,
    "geolng": 20.88392
}, {
    "date": "2019-06-29T03:00:39.253Z",
    "contactPerson": "Albin Huel",
    "description": "Asperiores ab exercitationem praesentium eligendi. Soluta eius exercitationem. Illo voluptatem est distinctio ipsam magni quis. Quam quibusdam nihil eum occaecati voluptatibus dolorem eaque reiciendis.",
    "phone": "1-121-148-3141 x54187",
    "email": "Laila_Prohaska97@gmail.com",
    "status": "Do weryfikacji",
    "address": "Zagórzańska 25, 04-965 Warszawa",
    "geolat": 52.17402,
    "geolng": 21.22949
}, {
    "date": "2019-06-29T00:03:19.064Z",
    "contactPerson": "Fabian Kuvalis",
    "description": "Animi incidunt aspernatur quam. Beatae suscipit eos laudantium facilis reprehenderit. Iusto ullam eius assumenda et. Magni distinctio fuga aut dolorem ratione delectus perspiciatis et omnis.",
    "phone": "174.949.8464",
    "email": "Astrid.Schneider@yahoo.com",
    "status": "W toku",
    "address": "Borowego 1, 01-355 Warszawa",
    "geolat": 52.23014,
    "geolng": 20.91415
}, {
    "date": "2019-06-29T06:17:26.284Z",
    "contactPerson": "Rolando Dibbert",
    "description": "Beatae dignissimos quae provident quia tenetur ratione doloribus. Voluptatum est labore voluptas ipsam suscipit dolorum dolorem fugit dolores. Sint ex adipisci voluptatem ut qui dolore nam ea. Enim eius facilis aut magnam distinctio excepturi rem deleniti. Cupiditate vel molestiae debitis ut deleniti.",
    "phone": "985.407.8382 x49926",
    "email": "Ulises74@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Reymonta 1, 01-840 Warszawa",
    "geolat": 52.26956,
    "geolng": 20.93199
}, {
    "date": "2019-06-29T08:25:11.864Z",
    "contactPerson": "Otho Larkin",
    "description": "Aut similique id dolor et similique. Aliquam rerum tenetur magnam consectetur ipsam. Vel fuga autem. Sed odit officiis eum consequatur maiores incidunt iste et. In molestiae harum. Impedit illum officiis rem asperiores.",
    "phone": "455.311.3333",
    "email": "Pierre_Schowalter1@yahoo.com",
    "status": "Zamknięta",
    "address": "Poprawna 70, 03-984 Warszawa",
    "geolat": 52.21504,
    "geolng": 21.11394
}, {
    "date": "2019-06-29T13:13:16.775Z",
    "contactPerson": "Kaylie Wolf",
    "description": "Et est fugit quidem libero molestiae aut non sed et. Velit officia alias provident eius reiciendis culpa quidem. Non molestiae ipsum. Commodi atque optio voluptate quae aliquid error consequuntur. Assumenda iusto et nesciunt porro velit eum. Fugit eum officia libero.",
    "phone": "(783) 804-3671 x823",
    "email": "Carolyne69@yahoo.com",
    "status": "Do podjęcia",
    "address": "Rosoła 68, 02-777 Warszawa",
    "geolat": 52.15653,
    "geolng": 21.04691
}, {
    "date": "2019-06-29T04:01:42.743Z",
    "contactPerson": "Miller Collins",
    "description": "Dolores maiores iste aut labore dolor ea assumenda perferendis ex. Occaecati quia et ab mollitia vel eum. Tenetur sit consequuntur nihil vel maiores et vel minus. Tenetur velit voluptas ab recusandae deleniti.",
    "phone": "329.524.8673 x867",
    "email": "Silas.Veum@gmail.com",
    "status": "Zamknięta",
    "address": "Al. Jerozolimskie 54, 00-024 Warszawa",
    "geolat": 52.22893,
    "geolng": 21.00438
}, {
    "date": "2019-06-29T14:19:20.016Z",
    "contactPerson": "Maxwell Kshlerin",
    "description": "Assumenda nulla corporis. Sed voluptas modi ut ipsum nisi. Molestiae dicta distinctio animi consequatur pariatur repellendus molestias. Similique aut esse rerum sit. Velit nam voluptatibus. Soluta natus rem hic necessitatibus ab eos necessitatibus et.",
    "phone": "792.042.3173 x3267",
    "email": "Jazmyn_Moen@gmail.com",
    "status": "Zamknięta",
    "address": "Niegocińska 5, 02-698 Warszawa",
    "geolat": 52.17521,
    "geolng": 21.00886
}, {
    "date": "2019-06-29T12:19:46.296Z",
    "contactPerson": "Aida Schamberger",
    "description": "Aperiam laboriosam quas iste incidunt assumenda et. In est dolores molestias quod ut. Accusamus et ipsa nam quaerat modi. Eius adipisci tempore numquam eos voluptatem sequi aperiam est. Eveniet ut et amet et impedit laudantium maxime.",
    "phone": "(258) 543-6363 x544",
    "email": "Devin.Hoeger28@gmail.com",
    "status": "Do weryfikacji",
    "address": "Giewont 21, 02-829 Warszawa",
    "geolat": 52.14811,
    "geolng": 21.0165
}, {
    "date": "2019-06-29T15:11:49.619Z",
    "contactPerson": "Adan Herzog",
    "description": "Tenetur quos iure sed et iste sint exercitationem. Atque perspiciatis velit ratione est. Voluptate dignissimos ut quod aperiam qui et cum qui ut. Recusandae consequatur consectetur voluptas eum voluptatem debitis vero inventore.",
    "phone": "(260) 655-4100",
    "email": "Barton87@hotmail.com",
    "status": "Do podjęcia",
    "address": "Sprawna 8, 03-147 Warszawa",
    "geolat": 52.34055,
    "geolng": 20.93681
}, {
    "date": "2019-06-29T05:14:06.505Z",
    "contactPerson": "Osborne Olson",
    "description": "Nulla tempore omnis qui. Earum exercitationem accusantium aliquid. Rerum dolores voluptas itaque quaerat. Repellendus non aut quia esse sit. Sed autem cumque est ad. Excepturi similique sit nemo porro ut et cum sapiente.",
    "phone": "605.950.7982 x29120",
    "email": "Lindsay_Raynor@gmail.com",
    "status": "Do podjęcia",
    "address": "Modlińska 339, 03-152 Warszawa",
    "geolat": 52.34799,
    "geolng": 20.94721
}, {
    "date": "2019-06-28T23:54:34.607Z",
    "contactPerson": "Cordelia Terry",
    "description": "Doloremque sunt temporibus. Nemo nam quisquam occaecati. Soluta enim cum sed recusandae quasi optio veniam.",
    "phone": "(333) 761-1254 x7319",
    "email": "Lavinia_Murazik@gmail.com",
    "status": "Do podjęcia",
    "address": "Zaułek 1, 03-287 Warszawa",
    "geolat": 52.32487,
    "geolng": 21.06582
}, {
    "date": "2019-06-29T07:32:21.555Z",
    "contactPerson": "Adrian Willms",
    "description": "Ea aliquid ut nobis sed ad. Exercitationem voluptatem dolor qui earum pariatur vero exercitationem exercitationem optio. Molestiae et soluta porro placeat. Quis est nostrum architecto tempora. At rem assumenda et cupiditate. Aut aut perspiciatis dolorem quia reprehenderit.",
    "phone": "262.027.9238",
    "email": "Jaida3@hotmail.com",
    "status": "Do podjęcia",
    "address": "Anielewicza 23A, 01-026 Warszawa",
    "geolat": 52.2465,
    "geolng": 20.98749
}, {
    "date": "2019-06-29T12:49:21.611Z",
    "contactPerson": "Tyshawn Champlin",
    "description": "A quos exercitationem delectus. Vel a illum commodi. Harum cupiditate quis perferendis quia nam voluptatum rerum non sint. Voluptatem eligendi ipsam quam delectus aliquid ad.",
    "phone": "1-009-349-3817",
    "email": "Ryan89@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Towarowa 20, 00-839 Warszawa",
    "geolat": 52.22763,
    "geolng": 20.98764
}, {
    "date": "2019-06-29T13:17:18.605Z",
    "contactPerson": "Martin Stamm",
    "description": "Cum est at eius cupiditate magni dolor qui. Tempore debitis quia eveniet nulla aliquam quidem.",
    "phone": "(062) 488-7417 x0374",
    "email": "Fermin_Runolfsson26@yahoo.com",
    "status": "Do podjęcia",
    "address": "Dworkowa 4, 00-784 Warszawa",
    "geolat": 52.20552,
    "geolng": 21.02335
}, {
    "date": "2019-06-29T02:21:00.210Z",
    "contactPerson": "Akeem Lindgren",
    "description": "Perferendis tempora rerum blanditiis odio possimus. Atque saepe voluptas eius. Velit quisquam velit. Libero rerum expedita eos possimus ut ea quaerat. Velit sequi voluptatem consectetur doloribus dolor rerum voluptates dolorum placeat.",
    "phone": "(920) 207-9008 x94553",
    "email": "Rae23@gmail.com",
    "status": "W toku",
    "address": "Taśmowa 7, 02-677 Warszawa",
    "geolat": 52.18029,
    "geolng": 20.9875
}, {
    "date": "2019-06-29T01:18:01.397Z",
    "contactPerson": "Cletus Borer",
    "description": "Repudiandae repudiandae totam omnis sint fugit adipisci. Reiciendis facere ullam. Nobis amet vel. Eos veniam quae aut excepturi laudantium ipsum. Mollitia laudantium ut harum ut numquam laudantium. Laborum impedit dolor qui quibusdam vitae aut nam sunt.",
    "phone": "440-605-2372 x645",
    "email": "Doris53@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Modlińska 54, 03-199 Warszawa",
    "geolat": 52.30542,
    "geolng": 20.98781
}, {
    "date": "2019-06-29T10:24:14.221Z",
    "contactPerson": "Juliet Lesch",
    "description": "Omnis temporibus et et quos maiores. Voluptas occaecati autem quidem sit dolorem hic enim vel commodi. Nemo amet non voluptas. Ea enim necessitatibus quis ab. Est ducimus et et quae ut. Ut inventore fuga vel occaecati officiis ut est.",
    "phone": "748-019-9262 x992",
    "email": "Julien_Wiegand78@gmail.com",
    "status": "W toku",
    "address": "Broniewskiego 12, 01-771 Warszawa",
    "geolat": 52.26499,
    "geolng": 20.97098
}, {
    "date": "2019-06-29T01:55:43.532Z",
    "contactPerson": "Otis Kuvalis",
    "description": "Sit et error tenetur dolorem inventore voluptates impedit suscipit. Excepturi sunt id aut molestias. Fugit sit eius repellat. Necessitatibus quisquam explicabo delectus quam ipsa dignissimos qui officia expedita. Non ducimus molestiae non aut hic voluptate cum vel. Sint ut odio aliquid voluptate sit dicta placeat.",
    "phone": "369.972.4487 x59084",
    "email": "Darron_Crist@hotmail.com",
    "status": "Zamknięta",
    "address": "al. Jana Pawła II 65, 01-038 Warszawa",
    "geolat": 52.24948,
    "geolng": 20.98633
}, {
    "date": "2019-06-29T01:40:31.844Z",
    "contactPerson": "Tyrique Gerlach",
    "description": "Velit enim voluptas tempora. Voluptas voluptatibus nostrum esse exercitationem. Molestias voluptate ut itaque esse asperiores reprehenderit repellat aliquam. Qui quia incidunt eius sed. Adipisci odio in. Omnis autem similique qui fugiat modi aut eaque occaecati.",
    "phone": "1-693-355-4457 x6247",
    "email": "Giovanni.Rolfson@gmail.com",
    "status": "Do podjęcia",
    "address": "pl. Powstańców Warszawy 2A, 00-030 Warszawa",
    "geolat": 52.23453,
    "geolng": 21.01421
}, {
    "date": "2019-06-29T00:34:52.736Z",
    "contactPerson": "Roxane Emmerich",
    "description": "Explicabo repellat amet adipisci sint. Ab ut accusantium asperiores aliquid iste. Dolor sint dolor aperiam fuga vero laborum ut. Explicabo culpa consequuntur laudantium non voluptas. Mollitia et suscipit illum beatae aliquam quam non eius pariatur. Voluptatem necessitatibus quis veritatis ducimus perspiciatis.",
    "phone": "680-400-5560",
    "email": "Charlie_Murazik@yahoo.com",
    "status": "Do podjęcia",
    "address": "(dz. Wesoła), Cieplarniana 28, 05-077 Warszawa",
    "geolat": 52.21905,
    "geolng": 21.2345
}, {
    "date": "2019-06-28T20:17:51.149Z",
    "contactPerson": "Johann Collier",
    "description": "Eveniet corporis debitis est. Pariatur dolores in delectus porro ut sunt ea. Et eos omnis et iste. Quas qui voluptatem.",
    "phone": "880-374-6598 x021",
    "email": "Jimmy_OReilly@hotmail.com",
    "status": "Do podjęcia",
    "address": "Młynarska 8/12, 01-194 Warszawa",
    "geolat": 52.23571,
    "geolng": 20.97311
}, {
    "date": "2019-06-28T18:41:45.850Z",
    "contactPerson": "Cordell Davis",
    "description": "Qui rerum cupiditate eligendi. Aut culpa illum sed optio ut commodi amet.",
    "phone": "1-517-679-0993 x154",
    "email": "Adrienne.Boyer23@yahoo.com",
    "status": "Do podjęcia",
    "address": "Rzeczna, 03-872 Warszawa",
    "geolat": 52.2625,
    "geolng": 21.07828
}, {
    "date": "2019-06-29T11:24:23.479Z",
    "contactPerson": "Jocelyn Reynolds",
    "description": "Iste enim impedit numquam. Iste numquam aut dolores est quod earum mollitia voluptas. Nihil et amet aut voluptas molestiae velit deleniti. Sint iste voluptate mollitia qui aut aliquid odit in. Dolor maxime repellendus. Nihil facilis dolor aut voluptatem consequatur et.",
    "phone": "971.374.2784 x19608",
    "email": "Johnathon_Cormier@hotmail.com",
    "status": "W toku",
    "address": "al. Wilanowska 363, 02-663 Warszawa",
    "geolat": 52.17897,
    "geolng": 21.01153
}, {
    "date": "2019-06-28T19:44:20.314Z",
    "contactPerson": "Alene Little",
    "description": "Suscipit nemo eos qui. Harum nihil magni et. Minima fugit suscipit ut autem aliquam repellendus distinctio. Eos nihil asperiores.",
    "phone": "1-398-409-1532 x59143",
    "email": "Kathryne25@gmail.com",
    "status": "Do podjęcia",
    "address": "Malborska 51, 03-286 Warszawa",
    "geolat": 52.30483,
    "geolng": 21.0799
}, {
    "date": "2019-06-29T02:09:07.341Z",
    "contactPerson": "Litzy VonRueden",
    "description": "Accusamus ullam ea neque voluptatibus facilis. Doloremque est asperiores velit accusantium eum dolorum soluta ipsum nihil. Itaque minima et aspernatur fugiat rerum modi. Ad aspernatur molestias non qui. Voluptate dolorem minus sit est odio quo cupiditate.",
    "phone": "1-370-603-1370 x4868",
    "email": "Shad71@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Głebocka 15, 03-287 Warszawa",
    "geolat": 52.30467,
    "geolng": 21.05691
}, {
    "date": "2019-06-29T04:26:05.211Z",
    "contactPerson": "Gregory McCullough",
    "description": "Non dicta vel. In molestiae minus. Voluptas optio minima voluptatem soluta ipsa aliquam. Dolor necessitatibus impedit quidem odit reprehenderit corporis voluptas. Molestias et sapiente.",
    "phone": "1-686-469-0275 x949",
    "email": "Caleb36@hotmail.com",
    "status": "Do podjęcia",
    "address": "Dywizjonu 303 129B, 01-470 Warszawa",
    "geolat": 52.24579,
    "geolng": 20.90583
}, {
    "date": "2019-06-29T16:06:42.513Z",
    "contactPerson": "Hadley Koch",
    "description": "Facilis hic facere voluptas deleniti voluptatem est. Adipisci quia qui ratione et. Tenetur est quia modi exercitationem aut tempore veniam ut. Corporis quo aliquam autem quod. Aspernatur laudantium sit nostrum praesentium voluptas aut. Voluptatum ratione rerum est voluptate fugit velit occaecati suscipit debitis.",
    "phone": "722-185-1363",
    "email": "Taryn_Turner@yahoo.com",
    "status": "W toku",
    "address": "Al. Jerozolimskie 144, 02-305 Warszawa",
    "geolat": 52.2184,
    "geolng": 20.96439
}, {
    "date": "2019-06-29T14:20:11.306Z",
    "contactPerson": "Enrico Stoltenberg",
    "description": "Voluptate incidunt et illo voluptatem unde eum. Sint accusantium animi. Necessitatibus quo molestias nihil labore iure. Amet officia provident.",
    "phone": "1-687-087-6471",
    "email": "Addie98@hotmail.com",
    "status": "W toku",
    "address": "Korzona 111, 03-571 Warszawa",
    "geolat": 52.27725,
    "geolng": 21.05162
}, {
    "date": "2019-06-29T12:54:34.502Z",
    "contactPerson": "Chyna O'Kon",
    "description": "Et sunt aliquid. Assumenda fuga vel in. Ea ut consequatur totam esse eos. Et culpa ducimus distinctio non. Praesentium temporibus saepe voluptatibus corrupti.",
    "phone": "(899) 555-2514",
    "email": "Ethan8@gmail.com",
    "status": "Do weryfikacji",
    "address": "Majdańska 13A, 04-067 Warszawa",
    "geolat": 52.24113,
    "geolng": 21.08414
}, {
    "date": "2019-06-29T07:03:41.913Z",
    "contactPerson": "Edward Padberg",
    "description": "Impedit doloremque dicta iste soluta nemo vitae. Voluptate sit et dolorum. Architecto numquam sit nemo eos. Vel ut voluptatum nulla consequuntur quam vitae. Sequi inventore eius pariatur neque ut consequatur.",
    "phone": "370-761-7845",
    "email": "Muriel_Jerde@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kolorowa 19, 02-495 Warszawa",
    "geolat": 52.18779,
    "geolng": 20.89149
}, {
    "date": "2019-06-29T03:19:46.923Z",
    "contactPerson": "Ericka Funk",
    "description": "Nostrum porro quasi fugit quas quae temporibus aspernatur. Rerum velit a magni delectus cumque neque tempore ex excepturi. Adipisci blanditiis voluptatem dolor quia nisi atque.",
    "phone": "1-092-163-8664 x98412",
    "email": "Dahlia_Turner16@hotmail.com",
    "status": "Zamknięta",
    "address": "Aspekt 79, 01-904 Warszawa",
    "geolat": 52.27822,
    "geolng": 20.92862
}, {
    "date": "2019-06-28T22:40:58.821Z",
    "contactPerson": "Antonetta Parker",
    "description": "Eos omnis et deleniti sunt non facere. Quas explicabo et nobis consectetur nihil rerum saepe doloremque mollitia. Doloremque et nisi inventore voluptas sit quaerat. Et dolor inventore et id iusto. Et quis accusantium eaque provident dolore blanditiis architecto. Deserunt error at dolorem sunt dolor cupiditate quibusdam nobis dolores.",
    "phone": "(994) 884-7305",
    "email": "Freeman.Willms@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Kondratowicza 49, 03-286 Warszawa",
    "geolat": 52.29254,
    "geolng": 21.05071
}, {
    "date": "2019-06-29T04:12:44.138Z",
    "contactPerson": "Pierre Schowalter",
    "description": "Praesentium delectus sunt repudiandae est voluptate error. Harum tempora culpa minima ipsum qui autem. Est aliquid id quas et.",
    "phone": "1-875-790-5399 x247",
    "email": "Bernie_Spinka@gmail.com",
    "status": "Zamknięta",
    "address": "Anielewicza 18A, 01-032 Warszawa",
    "geolat": 52.24697,
    "geolng": 20.98689
}, {
    "date": "2019-06-29T02:14:32.768Z",
    "contactPerson": "Madison Thompson",
    "description": "Qui iure cumque inventore. Eos et minima natus sed officia qui sit ut sapiente. Placeat ut numquam impedit excepturi nulla. Dignissimos molestias accusamus quaerat nesciunt et autem.",
    "phone": "877.197.2576 x91750",
    "email": "Delphia.Pollich@gmail.com",
    "status": "W toku",
    "address": "Dzika 29, 01-038 Warszawa",
    "geolat": 52.25307,
    "geolng": 20.98256
}, {
    "date": "2019-06-28T19:39:04.436Z",
    "contactPerson": "Nolan Tremblay",
    "description": "Assumenda sint possimus repudiandae et sequi dolore sit veniam. Et mollitia est odio dolorem est ab. Quibusdam eligendi dignissimos qui accusantium. Molestiae nihil ipsam itaque expedita nobis accusantium. Tempore et beatae dolor unde nulla velit.",
    "phone": "(853) 581-4547 x841",
    "email": "Tito_Williamson@yahoo.com",
    "status": "Zamknięta",
    "address": "Miedziana 11, 00-814 Warszawa",
    "geolat": 52.22911,
    "geolng": 20.99014
}, {
    "date": "2019-06-29T01:48:00.953Z",
    "contactPerson": "Eden Daugherty",
    "description": "In rem id sit. Enim ut aut optio et aut. Incidunt voluptatem porro iusto nisi vero voluptates doloribus voluptatibus.",
    "phone": "(261) 487-8679 x50476",
    "email": "Hadley.Tromp9@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Chruściela 17, 04-454 Warszawa",
    "geolat": 52.2589,
    "geolng": 21.16057
}, {
    "date": "2019-06-29T07:51:02.402Z",
    "contactPerson": "Charity Rau",
    "description": "Repudiandae non quisquam repudiandae sit voluptas. Atque ex autem quibusdam aperiam quia impedit dolorum est. Quo quae et minus aspernatur. Id qui cumque qui necessitatibus eveniet aut minima veritatis amet. Deleniti aliquam quae quisquam quo quia sit.",
    "phone": "535-712-2926",
    "email": "Ahmad19@gmail.com",
    "status": "Zamknięta",
    "address": "Gwiaździsta 27, 01-651 Warszawa",
    "geolat": 52.28419,
    "geolng": 20.97948
}, {
    "date": "2019-06-29T13:37:31.318Z",
    "contactPerson": "Alvah Halvorson",
    "description": "Eum earum suscipit. Qui amet est eaque.",
    "phone": "(332) 178-4264 x52735",
    "email": "Jerrold_Sanford0@yahoo.com",
    "status": "W toku",
    "address": "Lanciego 10 E-F, 02-792 Warszawa",
    "geolat": 52.14397,
    "geolng": 21.05809
}, {
    "date": "2019-06-28T20:26:53.324Z",
    "contactPerson": "Eugenia Connelly",
    "description": "Rerum ut unde magnam reiciendis voluptatum iusto delectus voluptatibus. Facere repudiandae nulla exercitationem iste labore praesentium ut. Deserunt qui est maxime odit eum exercitationem commodi autem. Officia exercitationem porro sint soluta porro. Enim laboriosam sit qui deleniti iste distinctio sequi aliquid.",
    "phone": "1-036-480-6146",
    "email": "Joesph_Ledner@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kobielska 23, 04-359 Warszawa",
    "geolat": 52.24686,
    "geolng": 21.08591
}, {
    "date": "2019-06-28T21:57:09.969Z",
    "contactPerson": "Audie Koelpin",
    "description": "Corporis ut fuga incidunt sed libero blanditiis. Sunt doloremque voluptatem sint atque. Culpa recusandae iusto nihil magni aut enim et.",
    "phone": "207.203.9713 x24055",
    "email": "Brett27@yahoo.com",
    "status": "W toku",
    "address": "Batalionów Chłopskich 73, 01-307 Warszawa",
    "geolat": 52.23114,
    "geolng": 20.89525
}, {
    "date": "2019-06-28T18:04:41.115Z",
    "contactPerson": "Amelia Bernier",
    "description": "Nulla omnis illo aliquid deleniti sint. Quibusdam quisquam officiis exercitationem sit exercitationem eligendi sint corporis et.",
    "phone": "112-357-0897",
    "email": "Jaylin_Ernser@yahoo.com",
    "status": "Zamknięta",
    "address": "Grochowska 19, 04-186 Warszawa",
    "geolat": 52.23711,
    "geolng": 21.1195
}, {
    "date": "2019-06-29T14:49:27.310Z",
    "contactPerson": "Colby Kuvalis",
    "description": "Laboriosam natus tenetur ex. Iusto numquam odit dicta blanditiis explicabo quia incidunt ut et. Asperiores alias earum amet possimus sequi minima culpa qui molestias. Sit omnis fugit provident.",
    "phone": "542-175-1340",
    "email": "Alexandro.Hoeger@gmail.com",
    "status": "Zamknięta",
    "address": "Inflancka 4A, 00-189 Warszawa",
    "geolat": 52.25617,
    "geolng": 20.99287
}, {
    "date": "2019-06-28T20:56:12.869Z",
    "contactPerson": "Callie Hettinger",
    "description": "Ab ut aperiam asperiores quia eum consequatur. Harum cumque fuga qui voluptatibus modi rem rem quia. Id reprehenderit laborum. Labore nisi quo neque nam magnam. Repudiandae quae et ut tempore fugit.",
    "phone": "030.176.1712 x8048",
    "email": "Rylee33@yahoo.com",
    "status": "W toku",
    "address": "Belgradzka 22, 02-793 Warszawa",
    "geolat": 52.14044,
    "geolng": 21.05821
}, {
    "date": "2019-06-29T05:23:38.196Z",
    "contactPerson": "Cleta Mitchell",
    "description": "Nihil impedit exercitationem quisquam magnam omnis culpa est officia. Molestias eos fugit nostrum. Dolor accusantium minus et tenetur voluptatem facilis est ea.",
    "phone": "621-082-2545",
    "email": "Avis.Renner@gmail.com",
    "status": "Do weryfikacji",
    "address": "Conrada 29B, 01-922 Warszawa",
    "geolat": 52.28081,
    "geolng": 20.92256
}, {
    "date": "2019-06-28T23:39:57.126Z",
    "contactPerson": "Providenci Sanford",
    "description": "Odit ut doloribus quos quas officia quasi vitae. Error repellendus enim fugit. Veniam debitis voluptatem distinctio natus aliquid dignissimos incidunt ducimus voluptatem. Et quo repellat minima voluptas aspernatur soluta cum repellendus sed.",
    "phone": "854.642.3210 x266",
    "email": "Tito.Trantow@yahoo.com",
    "status": "Zamknięta",
    "address": "Raabego 1, 02-793 Warszawa",
    "geolat": 52.13782,
    "geolng": 21.06368
}, {
    "date": "2019-06-29T14:00:35.901Z",
    "contactPerson": "Murl Botsford",
    "description": "Aut ducimus at molestiae. Dignissimos laboriosam adipisci laudantium ipsum sint. Fuga omnis ipsam porro blanditiis perferendis et.",
    "phone": "1-062-308-0771 x251",
    "email": "Carter43@yahoo.com",
    "status": "W toku",
    "address": "Skoroszewska 22, 02-495 Warszawa",
    "geolat": 52.18692,
    "geolng": 20.89631
}, {
    "date": "2019-06-29T09:43:38.851Z",
    "contactPerson": "Carmine Luettgen",
    "description": "Quos eos sit aut voluptas consectetur. Cupiditate pariatur tenetur delectus repellendus voluptatibus eligendi fuga quaerat. Eligendi ut aut voluptates nam nulla rerum. Fugit nesciunt ut.",
    "phone": "187-643-9893",
    "email": "Tyrel_Williamson@hotmail.com",
    "status": "Zamknięta",
    "address": "Żwirki i Wigury 3A, 02-143 Warszawa",
    "geolat": 52.18223,
    "geolng": 20.97793
}, {
    "date": "2019-06-28T22:39:06.160Z",
    "contactPerson": "Jeffry Gislason",
    "description": "Non ex voluptatem consequuntur dolores tenetur. Earum velit neque sunt est omnis id. Est vitae numquam. Error ab tenetur voluptas maiores quibusdam.",
    "phone": "752-478-7285",
    "email": "Joy.Davis@yahoo.com",
    "status": "Zamknięta",
    "address": "Gojawiczyńskiej 16, 01-773 Warszawa",
    "geolat": 52.26871,
    "geolng": 20.96876
}, {
    "date": "2019-06-29T06:19:32.187Z",
    "contactPerson": "Loma Mayer",
    "description": "Ut velit officia dolor accusamus quas qui ducimus. Occaecati quia et sed sunt incidunt laboriosam quas. Sint debitis dolor. Doloremque quia molestias ex.",
    "phone": "598.583.3619",
    "email": "Eldridge.Jaskolski@gmail.com",
    "status": "Do weryfikacji",
    "address": "Przy Agorze 1A, 01-960 Warszawa",
    "geolat": 52.29446,
    "geolng": 20.94414
}, {
    "date": "2019-06-29T15:18:50.023Z",
    "contactPerson": "Alayna Kuvalis",
    "description": "Sed accusantium sed id animi et dicta iste commodi quia. Ut in excepturi. Voluptas cum hic dolores. Voluptatem facilis et et aut sapiente. Corrupti saepe fuga voluptate.",
    "phone": "848.782.3914 x92814",
    "email": "Oswald12@yahoo.com",
    "status": "Zamknięta",
    "address": "al. Rodowicza Anody 6, 02-786 Warszawa",
    "geolat": 52.16267,
    "geolng": 21.03687
}, {
    "date": "2019-06-29T00:32:07.697Z",
    "contactPerson": "Syble O'Connell",
    "description": "Earum velit officiis labore aut id. Consequatur ullam qui id eum sit quisquam.",
    "phone": "(404) 566-8859",
    "email": "Taurean28@gmail.com",
    "status": "Do podjęcia",
    "address": "Postępu 5, 02-676 Warszawa",
    "geolat": 52.17393,
    "geolng": 20.99362
}, {
    "date": "2019-06-28T18:51:25.872Z",
    "contactPerson": "Jamel Corwin",
    "description": "Corporis velit possimus vero doloribus deserunt atque sequi. Vero illum maiores autem consequuntur qui. Reiciendis impedit nulla autem possimus libero et omnis quasi ratione. Perferendis voluptas rerum qui. Praesentium et suscipit eligendi cupiditate ea facilis accusantium ex. Voluptatem fugit molestias vel error vero.",
    "phone": "1-047-456-9813 x378",
    "email": "Peyton.Raynor56@yahoo.com",
    "status": "Zamknięta",
    "address": "Olbrachta 34, 01-111 Warszawa",
    "geolat": 52.23674,
    "geolng": 20.94032
}, {
    "date": "2019-06-29T06:55:50.989Z",
    "contactPerson": "Allene Hoppe",
    "description": "Sapiente dolorum voluptas eos eligendi id. Doloremque ut inventore aut asperiores eum consequuntur blanditiis ut commodi. Et iure quisquam quas omnis eaque et aut autem voluptate. Sed deleniti ea consequuntur.",
    "phone": "(980) 111-8255 x933",
    "email": "Millie38@yahoo.com",
    "status": "Do podjęcia",
    "address": "Mickiewicza 68, 01-650 Warszawa",
    "geolat": 52.27798,
    "geolng": 20.98049
}, {
    "date": "2019-06-28T22:44:55.461Z",
    "contactPerson": "Emily Keeling",
    "description": "Consequatur facere autem accusantium et veniam ut iste. Ex qui beatae quia quam ex ut. Quia similique possimus fugiat et. Debitis nulla eum porro laudantium officia qui ut velit ad. Id nihil blanditiis doloremque quidem omnis. Laudantium voluptatum aliquam et rerum.",
    "phone": "070.709.9225",
    "email": "Isadore28@gmail.com",
    "status": "Do weryfikacji",
    "address": "Górczewska 212/226, 01-460 Warszawa",
    "geolat": 52.23996,
    "geolng": 20.90656
}, {
    "date": "2019-06-28T21:23:42.696Z",
    "contactPerson": "Layla Hayes",
    "description": "Sint animi qui voluptas consequatur quibusdam laborum. Autem et similique dolores dolor.",
    "phone": "1-975-343-9603 x6695",
    "email": "Kayli10@gmail.com",
    "status": "Zamknięta",
    "address": "Modlińska 195, 03-122 Warszawa",
    "geolat": 52.32016,
    "geolng": 20.97129
}, {
    "date": "2019-06-28T21:44:42.594Z",
    "contactPerson": "Garrick Torphy",
    "description": "Dignissimos magnam nemo qui aliquam distinctio expedita temporibus quidem. Laboriosam voluptatem esse voluptatem molestiae. Ducimus ut quis ea voluptatibus quod minima vel sit. Ut voluptas eveniet quo qui et.",
    "phone": "499.748.8996 x14762",
    "email": "Carlos_Collier50@yahoo.com",
    "status": "Zamknięta",
    "address": "(dz. Wesoła), Wspólna 42, 05-075 Warszawa",
    "geolat": 52.24768,
    "geolng": 21.19287
}, {
    "date": "2019-06-29T00:27:15.037Z",
    "contactPerson": "Era Hoeger",
    "description": "Vel et dignissimos et dolor ipsa. Beatae necessitatibus aut facere. Adipisci voluptates officiis dicta magnam consequatur eos aut consequatur eveniet. Ipsum rerum qui quasi. Ratione voluptatem ut sunt rerum itaque quam. Corporis accusamus vero.",
    "phone": "249-350-6708 x3360",
    "email": "Winston.Cassin@yahoo.com",
    "status": "Zamknięta",
    "address": "Hanki Ordonówny 29, 03-139 Warszawa",
    "geolat": 52.33214,
    "geolng": 20.95428
}, {
    "date": "2019-06-28T18:43:27.796Z",
    "contactPerson": "Sandra Ortiz",
    "description": "Suscipit quia voluptas est. Dignissimos sunt sed minus magni reiciendis et fuga animi. Possimus unde quod excepturi ut dignissimos.",
    "phone": "(495) 462-0047 x23747",
    "email": "Isidro3@gmail.com",
    "status": "Do podjęcia",
    "address": "Al. Dzieci Polskich 20, 04-730 Warszawa",
    "geolat": 52.20759,
    "geolng": 21.1954
}, {
    "date": "2019-06-29T06:30:08.251Z",
    "contactPerson": "Lisa Vandervort",
    "description": "Dolor quis ea qui quam tempore sed eum quibusdam. Dolor distinctio ipsa harum voluptatem soluta. Est iure iusto. In id omnis autem optio voluptatibus vel sed. Libero dolores voluptas distinctio impedit debitis ea eum culpa. Corporis assumenda debitis sit mollitia eveniet.",
    "phone": "098.630.8842",
    "email": "Edmond.Medhurst@yahoo.com",
    "status": "Do podjęcia",
    "address": "Al. Armii Krajowej 35A, 01-783 Warszawa",
    "geolat": 52.27196,
    "geolng": 20.96588
}, {
    "date": "2019-06-28T16:46:31.099Z",
    "contactPerson": "Orrin Kshlerin",
    "description": "Veritatis quis possimus voluptatem nisi. Vero magni autem excepturi repellendus ab maxime quis maiores. At odio velit repellat quis non et. Nam vitae consequatur distinctio. Saepe incidunt incidunt. Beatae ipsum et.",
    "phone": "1-420-882-9839",
    "email": "Efren91@gmail.com",
    "status": "W toku",
    "address": "Ordonówny 29, 03-137 Warszawa",
    "geolat": 52.33163,
    "geolng": 20.95219
}, {
    "date": "2019-06-29T09:08:59.279Z",
    "contactPerson": "Adah Rau",
    "description": "Fugit consequuntur eos iure reiciendis eligendi tempore eum sit. Voluptate soluta molestiae perspiciatis quia est quidem. Eos perferendis ducimus qui suscipit ad alias corporis et. Ex est quia nesciunt vero nulla voluptates. Aliquid esse reiciendis alias neque.",
    "phone": "1-853-461-6643 x162",
    "email": "Robyn_Cassin66@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kolumbijska 3, 01-991 Warszawa",
    "geolat": 52.30215,
    "geolng": 20.93316
}, {
    "date": "2019-06-29T13:26:36.816Z",
    "contactPerson": "Mac Schimmel",
    "description": "Pariatur illum et voluptatem sit facilis at. Cupiditate distinctio similique. Fugiat saepe tempora nostrum et. Consequatur ipsam illum minus amet quo. Corporis occaecati ullam. Optio minima libero reprehenderit facere voluptatibus cum ipsam vel est.",
    "phone": "916-918-3855 x8283",
    "email": "Milton.Crooks@hotmail.com",
    "status": "Zamknięta",
    "address": "Pod Strzechą 5, 02-798 Warszawa",
    "geolat": 52.13041,
    "geolng": 21.05857
}, {
    "date": "2019-06-28T16:46:07.070Z",
    "contactPerson": "Jaren Kihn",
    "description": "Sed animi voluptas dolorum laborum occaecati. Quia nihil esse iste vero quo non.",
    "phone": "402.340.0503",
    "email": "Ethyl.Keebler@hotmail.com",
    "status": "Zamknięta",
    "address": "al. Jana Pawła II 82, 00-175 Warszawa",
    "geolat": 52.25804,
    "geolng": 20.98318
}, {
    "date": "2019-06-29T11:24:22.368Z",
    "contactPerson": "Samara Schultz",
    "description": "Mollitia quaerat natus. Quibusdam eum aut possimus. Explicabo id nesciunt in. Eos nisi qui est nesciunt.",
    "phone": "1-058-472-4488 x6183",
    "email": "Stephanie.Kohler@hotmail.com",
    "status": "W toku",
    "address": "al. Jana Pawła II 82, 00-175 Warszawa",
    "geolat": 52.25678,
    "geolng": 20.98528
}, {
    "date": "2019-06-29T06:00:33.906Z",
    "contactPerson": "Janet Schaden",
    "description": "Nemo et corporis expedita sed. Rem inventore iusto voluptate earum vel excepturi numquam quis. Molestias maxime voluptatem.",
    "phone": "134-859-2845",
    "email": "Ruthie_Torphy92@gmail.com",
    "status": "Do podjęcia",
    "address": "Odrowąża 7A, 03-310 Warszawa",
    "geolat": 52.27459,
    "geolng": 21.03027
}, {
    "date": "2019-06-29T08:15:01.434Z",
    "contactPerson": "Bonita Bernier",
    "description": "Soluta dolores aut et qui ab dolorem esse. Aut earum ut pariatur consequuntur laboriosam. Odio soluta sapiente est neque id. Quisquam dolorum et non deserunt. Consequatur molestiae optio. Veritatis temporibus quaerat occaecati cupiditate incidunt voluptate sunt voluptatem.",
    "phone": "389.277.9214 x43924",
    "email": "Felicia97@gmail.com",
    "status": "Do podjęcia",
    "address": "(dz. Wesoła), Jana Pawła II 7, 05-077 Warszawa",
    "geolat": 52.22155,
    "geolng": 21.22296
}, {
    "date": "2019-06-29T10:04:15.739Z",
    "contactPerson": "Maye Kub",
    "description": "Est laborum quo. Id aut modi dolor et quae quidem. Ipsa earum id exercitationem non hic. Optio voluptate ducimus beatae eligendi. Molestiae blanditiis ab vitae aut aperiam labore nesciunt odit non. Odio placeat ipsa adipisci beatae tempora qui modi.",
    "phone": "(763) 488-2668 x64235",
    "email": "Keshawn56@yahoo.com",
    "status": "Do podjęcia",
    "address": "Krasnobrodzka 1, 03-226 Warszawa",
    "geolat": 52.29999,
    "geolng": 21.0361
}, {
    "date": "2019-06-29T03:16:45.261Z",
    "contactPerson": "Brent Waelchi",
    "description": "Tenetur fuga ipsum et. Maiores sunt ipsum sapiente autem qui suscipit corrupti sit deleniti. Illum eveniet suscipit facere nihil eum. Praesentium odit eum tenetur tenetur. Repudiandae doloribus omnis dicta fugiat inventore enim. Delectus et nihil qui quam tenetur rerum.",
    "phone": "1-094-051-9882 x0631",
    "email": "Imelda_Kunde44@yahoo.com",
    "status": "Do podjęcia",
    "address": "Popiełuszki 17C, 01-595 Warszawa",
    "geolat": 52.26922,
    "geolng": 20.97473
}, {
    "date": "2019-06-29T13:23:40.627Z",
    "contactPerson": "Alphonso Skiles",
    "description": "Quis qui officia in est iure. Nobis et in occaecati quam aut deleniti. Voluptatem aut magni nihil maxime. Officia tempore minus voluptas atque. Et unde non.",
    "phone": "1-779-313-7840",
    "email": "Eliane.Stroman95@yahoo.com",
    "status": "W toku",
    "address": "Al. KEN 14, 02-797 Warszawa",
    "geolat": 52.12973,
    "geolng": 21.0694
}, {
    "date": "2019-06-28T22:35:57.334Z",
    "contactPerson": "Melody O'Reilly",
    "description": "Qui voluptatem quo quis consectetur qui delectus iure accusantium voluptatem. Amet voluptate sit fugiat est eveniet. Nisi pariatur autem suscipit aut amet officia. Voluptas dignissimos cum quis voluptatum dolores nesciunt omnis. Omnis excepturi dolorem qui et voluptas reiciendis.",
    "phone": "(362) 366-1274 x7304",
    "email": "Alycia34@yahoo.com",
    "status": "W toku",
    "address": "Coopera 12F, 01-315 Warszawa",
    "geolat": 52.23895,
    "geolng": 20.89465
}, {
    "date": "2019-06-28T16:56:45.170Z",
    "contactPerson": "Lori Bailey",
    "description": "Recusandae voluptatem perspiciatis molestiae voluptatem eveniet non. Vitae quis veritatis quia eaque unde consequatur maxime exercitationem. Neque quas culpa magnam magni fugiat. Dolore sunt et ut aut deserunt et ea deserunt eos. Nihil ab illum autem et.",
    "phone": "011.032.9363",
    "email": "Lemuel_Weissnat@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kwiatkowskiego 12, 03-996 Warszawa",
    "geolat": 52.22414,
    "geolng": 21.09476
}, {
    "date": "2019-06-28T22:43:53.422Z",
    "contactPerson": "Ryleigh Von",
    "description": "Non ea expedita omnis aliquid aspernatur adipisci repellendus esse. Laboriosam consequatur et. Similique autem culpa ad incidunt sit ipsam accusantium. Amet nemo porro modi delectus sed consequuntur eum dolores velit.",
    "phone": "174.281.4294 x4188",
    "email": "Gertrude.Kutch@gmail.com",
    "status": "Do podjęcia",
    "address": "Białołęcka 222, 03-253 Warszawa",
    "geolat": 52.31745,
    "geolng": 21.02981
}, {
    "date": "2019-06-28T19:54:09.379Z",
    "contactPerson": "Raina Satterfield",
    "description": "Sapiente eaque accusantium tenetur. Iste quia labore. Iusto modi reprehenderit. Velit repellendus veritatis esse odio. Culpa totam id ut consequatur qui iure ut iure. Autem dolorum dolorem et pariatur provident.",
    "phone": "429-819-4774 x816",
    "email": "Eliane66@gmail.com",
    "status": "Do podjęcia",
    "address": "Birżanska 1, 03-780 Warszawa",
    "geolat": 52.26398,
    "geolng": 21.05933
}, {
    "date": "2019-06-28T20:06:29.324Z",
    "contactPerson": "Darren Macejkovic",
    "description": "Dolorem soluta reiciendis placeat labore nostrum. Ut iure nesciunt dignissimos sint eligendi recusandae deleniti aut. Dolores molestiae enim molestiae. Autem magni et dolores eveniet repellat repellat. Ut deserunt excepturi labore amet eos. Illo sit voluptas.",
    "phone": "1-155-208-9101 x4408",
    "email": "Wilton61@gmail.com",
    "status": "Do weryfikacji",
    "address": "Bartycka 24/26, 00-716 Warszawa",
    "geolat": 52.21343,
    "geolng": 21.05782
}, {
    "date": "2019-06-29T07:46:01.139Z",
    "contactPerson": "Heber Johnson",
    "description": "Quis id qui eum voluptatem. Quisquam commodi natus enim qui eius libero officiis et eum. Placeat rerum incidunt eos minima. Quasi quis eum aut nemo.",
    "phone": "(089) 425-6744",
    "email": "Thad48@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Sejmu Czteroletniego 2, 02-972 Warszawa",
    "geolat": 52.15719,
    "geolng": 21.07144
}, {
    "date": "2019-06-29T06:09:12.460Z",
    "contactPerson": "Mariam Wehner",
    "description": "Aperiam laboriosam ea accusantium mollitia. Commodi quae voluptatem nulla incidunt quidem. Ut accusantium vel ut voluptatem numquam veniam aut ut sed. Cupiditate eos nisi doloremque possimus nostrum dolorem dolor et.",
    "phone": "040-239-3188 x1198",
    "email": "Deonte_Wyman@gmail.com",
    "status": "Do weryfikacji",
    "address": "Bartycka 24/26, 00-716 Warszawa",
    "geolat": 52.21355,
    "geolng": 21.05666
}, {
    "date": "2019-06-29T01:55:09.503Z",
    "contactPerson": "Donnie Gleason",
    "description": "At quibusdam cum officiis rerum. Dolorem minus consequuntur error accusamus perspiciatis ex porro. Quod facere cumque ea autem fugit autem et praesentium laborum. Quia aliquam non voluptatibus veniam labore sit consequuntur sit quae.",
    "phone": "1-190-492-0135",
    "email": "Natalie_Fadel26@yahoo.com",
    "status": "Zamknięta",
    "address": "Mokotowska 71, 00-530 Warszawa",
    "geolat": 52.22737,
    "geolng": 21.02197
}, {
    "date": "2019-06-28T17:10:35.889Z",
    "contactPerson": "Abigayle Klein",
    "description": "Minima nemo alias est officia qui voluptatem. Ea est sit laboriosam error sit excepturi. Sit ipsa omnis et eos nostrum delectus. Laborum rerum voluptates voluptatem et. Dolor vel quia repellat commodi eius tenetur quia.",
    "phone": "659-103-1343 x762",
    "email": "Meta.Johnston@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Powązkowska 43A, 01-797 Warszawa",
    "geolat": 52.25928,
    "geolng": 20.9592
}, {
    "date": "2019-06-28T21:44:09.846Z",
    "contactPerson": "Julianne Sanford",
    "description": "Optio animi explicabo. Eveniet fugiat fugit quos quos sunt voluptatum.",
    "phone": "1-335-057-4053 x457",
    "email": "Ora.Greenfelder@gmail.com",
    "status": "W toku",
    "address": "Toruńska 105, 03-226 Warszawa",
    "geolat": 52.30798,
    "geolng": 21.08243
}, {
    "date": "2019-06-29T10:32:43.706Z",
    "contactPerson": "Destiny Upton",
    "description": "Omnis temporibus vitae explicabo qui eos velit. Doloremque vitae laboriosam a assumenda beatae autem ipsa.",
    "phone": "1-509-393-5459",
    "email": "Lilian.Windler13@yahoo.com",
    "status": "Zamknięta",
    "address": "Poleczki 35, 02-822 Warszawa",
    "geolat": 52.15346,
    "geolng": 20.99747
}, {
    "date": "2019-06-29T05:55:29.102Z",
    "contactPerson": "Chandler Marquardt",
    "description": "Soluta tenetur a quidem numquam ab ipsa sapiente exercitationem. Id quo dolores id totam in id minus. Soluta possimus ab earum cumque vel itaque beatae libero omnis. Ad quibusdam aut eligendi eum pariatur dolores totam numquam quod.",
    "phone": "330-830-9511",
    "email": "Dejon.Terry@gmail.com",
    "status": "Zamknięta",
    "address": "Józefosław, Wenus, 05-500 Warszawa",
    "geolat": 52.09557,
    "geolng": 21.04989
}, {
    "date": "2019-06-29T03:59:43.699Z",
    "contactPerson": "Derrick Feil",
    "description": "Maxime iusto laborum eos molestiae ipsam velit voluptatum qui culpa. Occaecati temporibus nemo delectus quis fugiat illum nam voluptates temporibus. Et accusantium enim omnis eligendi corporis exercitationem ex. Quidem libero nisi iure officia nobis ut saepe sint. Omnis in enim. Cumque aut quas.",
    "phone": "514-440-2284 x401",
    "email": "Addie.Durgan@hotmail.com",
    "status": "W toku",
    "address": "Arkuszowa 40, 01-934 Warszawa",
    "geolat": 52.28401,
    "geolng": 20.90323
}, {
    "date": "2019-06-29T15:44:25.546Z",
    "contactPerson": "Damien Daniel",
    "description": "Odit illum perferendis et consequuntur reprehenderit. Minus vel sapiente magnam suscipit numquam. Qui consequuntur corrupti aut. Temporibus ab autem exercitationem. Et in modi officia tempore possimus ut omnis repellendus repellat.",
    "phone": "1-821-060-6370 x660",
    "email": "Sebastian_Ritchie21@gmail.com",
    "status": "Do weryfikacji",
    "address": "Drewny 2, 02-968 Warszawa",
    "geolat": 52.11919,
    "geolng": 21.104
}, {
    "date": "2019-06-28T23:56:00.742Z",
    "contactPerson": "Trenton Mertz",
    "description": "Dolore voluptatem temporibus laboriosam. Quis consequatur at quia itaque adipisci. Nulla incidunt explicabo qui est quo iste. Delectus tenetur atque in quia voluptas voluptatem illum iusto qui. Illo eum labore aut at maiores aliquid ut. Dicta fugiat quo excepturi nulla eveniet ipsam fugiat.",
    "phone": "1-462-128-6590",
    "email": "Adaline_Kshlerin@hotmail.com",
    "status": "W toku",
    "address": "św. Wincentego 99, 03-291 Warszawa",
    "geolat": 52.29487,
    "geolng": 21.05312
}, {
    "date": "2019-06-28T19:00:45.456Z",
    "contactPerson": "Santos Mills",
    "description": "At quidem officia eius quam optio ipsa. Assumenda maxime ut ut ut eum perferendis veniam veniam quia. Adipisci numquam sunt totam enim earum et nobis. Repellendus eum expedita qui et. Dignissimos voluptatem natus ea ex nostrum aliquam qui aliquam debitis. Quis quaerat odit dolorem.",
    "phone": "740.185.3636 x079",
    "email": "Jorge12@yahoo.com",
    "status": "Zamknięta",
    "address": "Obywatelska 44, 02-409 Warszawa",
    "geolat": 52.20852,
    "geolng": 20.89575
}, {
    "date": "2019-06-29T03:18:05.703Z",
    "contactPerson": "Alanis Schroeder",
    "description": "Et quae fugit et deserunt deleniti facilis repellendus. Voluptas natus doloremque ea. Voluptatem velit sed reiciendis rem in. Ipsa sit eos consequatur vel voluptas. Quo eos rem placeat adipisci.",
    "phone": "1-656-241-3195 x0363",
    "email": "Emmy.Gerhold97@gmail.com",
    "status": "Zamknięta",
    "address": "Kinowa 19, 04-030 Warszawa",
    "geolat": 52.24242,
    "geolng": 21.07098
}, {
    "date": "2019-06-29T04:40:11.144Z",
    "contactPerson": "Jack Wintheiser",
    "description": "Consequatur illum enim earum ut nemo. Iusto ad non placeat consequuntur corporis. Et dignissimos laudantium corrupti. Tenetur impedit ut ea est molestiae. Dolorem a quis et.",
    "phone": "083-955-8921",
    "email": "Neil49@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Pileckiego 101, 02-781 Warszawa",
    "geolat": 52.14542,
    "geolng": 21.03768
}, {
    "date": "2019-06-29T09:07:08.196Z",
    "contactPerson": "Sonya Swift",
    "description": "Numquam placeat eveniet sit qui et odio. In iusto nemo eum nihil sint animi expedita. Saepe repudiandae omnis non delectus.",
    "phone": "1-399-047-4924 x25017",
    "email": "Elna48@hotmail.com",
    "status": "W toku",
    "address": "Berensona 30, 03-287 Warszawa",
    "geolat": 52.32433,
    "geolng": 21.06474
}, {
    "date": "2019-06-28T22:14:16.102Z",
    "contactPerson": "Karianne Botsford",
    "description": "Temporibus provident ipsam cumque cupiditate maiores nisi quod. Rerum vel atque velit et architecto dicta et. Molestias nobis quo repudiandae. Expedita consectetur assumenda ratione nemo et. Laborum id aut nobis.",
    "phone": "1-266-481-4859",
    "email": "Geovany.Buckridge41@hotmail.com",
    "status": "W toku",
    "address": "Wał Miedzeszyński 324, 04-987 Warszawa",
    "geolat": 52.18538,
    "geolng": 21.13205
}, {
    "date": "2019-06-29T11:02:23.118Z",
    "contactPerson": "Murphy Tromp",
    "description": "Occaecati deleniti quis voluptate sapiente voluptatem commodi suscipit ipsa earum. Et id qui a velit voluptate. Non delectus nihil est consequatur eveniet vel. Sint voluptas sit ut suscipit non sit qui voluptatibus. Sint sit quia enim eum.",
    "phone": "322-828-7561 x70788",
    "email": "Cortney_Denesik42@yahoo.com",
    "status": "Do podjęcia",
    "address": "Bukowiecka 73, 03-893 Warszawa",
    "geolat": 52.26767,
    "geolng": 21.08324
}, {
    "date": "2019-06-29T14:44:26.359Z",
    "contactPerson": "Lina Moen",
    "description": "Vel et qui aperiam et sit. Reiciendis et voluptas molestias amet accusamus. Repellat dolore sit maiores. Omnis a ad dolorum quia nihil sequi sint aspernatur.",
    "phone": "592-394-9895 x3181",
    "email": "Tiffany_Bradtke@gmail.com",
    "status": "Do weryfikacji",
    "address": "Pl. Czerwca 1976 r. 6, 02-495 Warszawa",
    "geolat": 52.20121,
    "geolng": 20.89389
}, {
    "date": "2019-06-29T01:03:16.871Z",
    "contactPerson": "Electa Botsford",
    "description": "Corporis omnis autem. Omnis eaque sed.",
    "phone": "(078) 101-1147",
    "email": "Sandra.Hermann@gmail.com",
    "status": "Do weryfikacji",
    "address": "Kleszczowa 24, 02-485 Warszawa",
    "geolat": 52.19819,
    "geolng": 20.9192
}, {
    "date": "2019-06-29T00:08:26.440Z",
    "contactPerson": "Lia Hartmann",
    "description": "Quia tenetur praesentium aut unde qui sint eius qui. Nulla et tenetur facilis debitis quasi dignissimos debitis et laboriosam. Qui doloribus fugit voluptas omnis voluptas sit aut distinctio.",
    "phone": "1-650-374-7012",
    "email": "Tamara74@gmail.com",
    "status": "Do weryfikacji",
    "address": "Strumykowa 27, 03-138 Warszawa",
    "geolat": 52.33171,
    "geolng": 20.9447
}, {
    "date": "2019-06-29T10:55:59.535Z",
    "contactPerson": "Jacky Schmitt",
    "description": "Veniam quia natus et consequuntur. Veniam expedita ducimus non enim et. Nobis vero voluptas quia autem aut doloremque odio voluptatem sed. Sapiente quibusdam dolorum perferendis molestiae eveniet voluptas mollitia sint cum.",
    "phone": "985.448.7353 x22137",
    "email": "Angelita62@gmail.com",
    "status": "Do podjęcia",
    "address": "Korkowa 165A, 04-549 Warszawa",
    "geolat": 52.24206,
    "geolng": 21.16129
}, {
    "date": "2019-06-29T14:58:09.222Z",
    "contactPerson": "Johanna Gleichner",
    "description": "Provident hic autem non culpa omnis sed laboriosam architecto. Perferendis pariatur odit quis placeat est. Unde ex error autem quos alias voluptas ut sint. Rerum aperiam dolorem molestiae omnis molestias. Nulla sed reiciendis ut eveniet ut.",
    "phone": "1-312-369-7776 x62700",
    "email": "Chadd_Reichel78@hotmail.com",
    "status": "Zamknięta",
    "address": "Żwirki i Wigury 18, 02-092 Warszawa",
    "geolat": 52.19048,
    "geolng": 20.98227
}, {
    "date": "2019-06-29T00:40:13.987Z",
    "contactPerson": "Adelia Grant",
    "description": "Minus est accusantium tempora necessitatibus harum. Tenetur facilis pariatur ut aspernatur et quo totam dignissimos. Veniam perferendis quaerat sint et laboriosam est eos. Vel placeat earum ducimus sit. Ea in ut quo qui fuga. Odit quidem similique placeat ut rerum voluptatum est veritatis.",
    "phone": "(690) 153-4116 x51984",
    "email": "Foster_Hegmann88@hotmail.com",
    "status": "W toku",
    "address": "Lucerny 93, 04-687 Warszawa",
    "geolat": 52.21417,
    "geolng": 21.15153
}, {
    "date": "2019-06-28T19:13:03.689Z",
    "contactPerson": "Manley Wyman",
    "description": "Culpa commodi aliquam blanditiis eveniet eos quia. Fuga architecto quidem minima vero eveniet quasi impedit. Non sed rerum labore similique rerum temporibus. Inventore id modi quae voluptatem repudiandae consequatur necessitatibus aut. Fugit in quaerat perferendis sequi impedit illum omnis.",
    "phone": "648-244-4318",
    "email": "Berniece_Raynor31@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Domaniewska 52, 02-672 Warszawa",
    "geolat": 52.18387,
    "geolng": 20.98988
}, {
    "date": "2019-06-29T05:06:33.009Z",
    "contactPerson": "Nadia Bashirian",
    "description": "Optio dolorum id cum veritatis occaecati dolor quas sequi. Beatae autem quas dolorem ea iusto recusandae quasi. Nihil id eum ipsa voluptas saepe.",
    "phone": "946-644-6882 x420",
    "email": "Tianna96@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Wesoła ul. Jana Pawła II 23, 05-077 Warszawa",
    "geolat": 52.21651,
    "geolng": 21.23868
}, {
    "date": "2019-06-28T17:30:06.475Z",
    "contactPerson": "Tina Kulas",
    "description": "Aspernatur voluptas et. Facere blanditiis nam quia ad explicabo voluptas ipsam.",
    "phone": "640.430.2078",
    "email": "Izabella.Haag98@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Mehoffera 132, 03-081 Warszawa",
    "geolat": 52.34956,
    "geolng": 20.97808
}, {
    "date": "2019-06-28T16:42:34.948Z",
    "contactPerson": "Cristal Kuvalis",
    "description": "Veniam et et qui facilis dolor enim. Quo officia aliquid sint totam. Et ut sit quia.",
    "phone": "(388) 683-7448",
    "email": "Glen.Wyman@yahoo.com",
    "status": "Do podjęcia",
    "address": "Saska 113, 03-968 Warszawa",
    "geolat": 52.23814,
    "geolng": 21.05606
}, {
    "date": "2019-06-29T07:32:37.984Z",
    "contactPerson": "Jaden Cole",
    "description": "Nam ad porro occaecati. Fuga aliquam beatae quo aliquam tempora cumque est libero. Explicabo magnam ipsam. Velit veritatis quas commodi vel inventore error. Consequuntur omnis ipsum sint esse. Deserunt numquam magni veniam ratione ipsam.",
    "phone": "549.574.8364 x667",
    "email": "Brent_Paucek@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Junkiewicz 2A, 03-543 Warszawa",
    "geolat": 52.26826,
    "geolng": 21.05734
}, {
    "date": "2019-06-29T14:24:58.123Z",
    "contactPerson": "Kassandra Beatty",
    "description": "Qui delectus est. Ipsa ut est est dolorum eum voluptatem et.",
    "phone": "(234) 595-3735 x955",
    "email": "Santa.Green@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kędzierskiego 3A, 01-493 Warszawa",
    "geolat": 52.252,
    "geolng": 20.91499
}, {
    "date": "2019-06-29T12:22:51.536Z",
    "contactPerson": "Charlene Gusikowski",
    "description": "Totam voluptas in ea quis totam. Id voluptatem amet fuga sed ex qui. Earum eligendi quisquam. Eveniet laudantium voluptatibus porro totam dolor in qui. Repellendus perspiciatis laudantium debitis ea et.",
    "phone": "454.632.9273",
    "email": "Mona_Prosacco22@yahoo.com",
    "status": "W toku",
    "address": "Prałatowska 2, 03-510 Warszawa",
    "geolat": 52.27177,
    "geolng": 21.04954
}, {
    "date": "2019-06-28T17:24:51.054Z",
    "contactPerson": "Guy Frami",
    "description": "Quisquam sed officiis laudantium eveniet dolorem ea. Molestiae animi ab. Sed placeat et quae quaerat est et aspernatur voluptatem. Ratione aut alias.",
    "phone": "1-017-635-9971",
    "email": "Luella25@yahoo.com",
    "status": "Zamknięta",
    "address": "Patriotów 317, 04-760 Warszawa",
    "geolat": 52.20474,
    "geolng": 21.16689
}, {
    "date": "2019-06-29T01:07:08.244Z",
    "contactPerson": "Samson Weber",
    "description": "Molestias neque quasi non magni labore. Ea quia delectus provident ut incidunt dolorum impedit.",
    "phone": "1-422-247-9599 x662",
    "email": "Arnulfo_Ledner57@yahoo.com",
    "status": "Do podjęcia",
    "address": "Modzelewskiego 54a, 02-679 Warszawa",
    "geolat": 52.18048,
    "geolng": 21.01422
}, {
    "date": "2019-06-29T15:31:08.436Z",
    "contactPerson": "Justina Mayert",
    "description": "Ex quis voluptatum. Qui officiis tenetur quisquam et et et. Sed sit sit animi accusantium esse omnis excepturi quae.",
    "phone": "(396) 058-4404 x39233",
    "email": "Israel_Parker39@gmail.com",
    "status": "Zamknięta",
    "address": "Prałatowska 5, 03-510 Warszawa",
    "geolat": 52.27003,
    "geolng": 21.04897
}, {
    "date": "2019-06-28T22:19:37.088Z",
    "contactPerson": "Cynthia Hyatt",
    "description": "Et omnis dolorem. Nam adipisci odit. Quia dignissimos enim. Fugit et iste voluptates doloribus velit rerum quasi.",
    "phone": "1-057-832-7462",
    "email": "Hosea.Klocko@yahoo.com",
    "status": "W toku",
    "address": "Dembowskiego 10, 02-784 Warszawa",
    "geolat": 52.15304,
    "geolng": 21.03053
}, {
    "date": "2019-06-29T03:46:36.858Z",
    "contactPerson": "Izaiah Hauck",
    "description": "Impedit quos cumque maxime. Error nihil voluptatem id quidem voluptatibus qui optio doloremque sint. Consequuntur nesciunt placeat saepe asperiores quidem magni ut est. Nihil ipsam earum reiciendis quis blanditiis voluptates accusamus. In blanditiis qui aspernatur.",
    "phone": "1-519-105-9409 x839",
    "email": "Ayden43@yahoo.com",
    "status": "W toku",
    "address": "Okrężna 38, 02-925 Warszawa",
    "geolat": 52.18131,
    "geolng": 21.06855
}, {
    "date": "2019-06-29T04:35:06.682Z",
    "contactPerson": "Jewell Greenholt",
    "description": "Quis qui at delectus qui enim quos. Voluptas error vel recusandae velit molestiae. Voluptatem hic officia voluptas voluptatem aut maiores architecto. Dolores veritatis at reprehenderit veniam repudiandae omnis suscipit optio. Laborum saepe qui ut velit. Impedit dolorem accusamus tempora in rem.",
    "phone": "275.845.0872 x04015",
    "email": "Clarabelle_Roob63@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Łopuszańska 22, 02-220 Warszawa",
    "geolat": 52.1925,
    "geolng": 20.94917
}, {
    "date": "2019-06-28T22:00:47.295Z",
    "contactPerson": "Telly Sanford",
    "description": "Omnis culpa et. Ut magnam eos quia. Ut aut quidem deleniti placeat eum magni voluptatibus corrupti nihil. Est possimus aut commodi culpa exercitationem. Est consectetur eum.",
    "phone": "833.307.2936",
    "email": "Claude.Waters25@hotmail.com",
    "status": "Zamknięta",
    "address": "Wojciechowskiego 33, 02-495 Warszawa",
    "geolat": 52.19453,
    "geolng": 20.87445
}, {
    "date": "2019-06-28T20:38:08.189Z",
    "contactPerson": "Aurelie Mayer",
    "description": "Et qui sed at est eius ad ut fuga. Eos quia officia voluptatibus sunt quasi. Expedita blanditiis pariatur.",
    "phone": "832-291-4840 x725",
    "email": "Hiram38@yahoo.com",
    "status": "Zamknięta",
    "address": "Admiralska 1B, 00-910 Warszawa",
    "geolat": 52.26214,
    "geolng": 21.17881
}, {
    "date": "2019-06-28T21:26:58.711Z",
    "contactPerson": "Lindsey Nitzsche",
    "description": "Ullam sit ea. Ab molestiae architecto quam assumenda libero reiciendis quaerat velit qui.",
    "phone": "(324) 648-6286 x254",
    "email": "Darron_Bauch@gmail.com",
    "status": "Do podjęcia",
    "address": "Siemiatycka 9-11, 01-312 Warszawa",
    "geolat": 52.22542,
    "geolng": 20.90371
}, {
    "date": "2019-06-29T15:02:55.200Z",
    "contactPerson": "Lavina Marks",
    "description": "Commodi fugiat voluptatibus. Laudantium nihil et eligendi. Vel eos est.",
    "phone": "(597) 523-9330 x39223",
    "email": "Tomasa51@gmail.com",
    "status": "Do weryfikacji",
    "address": "Mickiewicza 13, 05-075 Warszawa",
    "geolat": 52.24468,
    "geolng": 21.21278
}, {
    "date": "2019-06-29T10:23:41.933Z",
    "contactPerson": "Tyson Schimmel",
    "description": "Laudantium quia sunt repudiandae eum. Ut eius eveniet laboriosam perferendis distinctio vitae eos beatae. Quis et iste. Et est quisquam cumque sunt temporibus sequi perspiciatis iste ducimus. Consequatur blanditiis molestiae.",
    "phone": "(625) 684-8487",
    "email": "Anahi35@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Korkowa 2, 04-502 Warszawa",
    "geolat": 52.23344,
    "geolng": 21.13007
}, {
    "date": "2019-06-28T20:39:42.579Z",
    "contactPerson": "Otto Abbott",
    "description": "Dolore aliquam at accusamus sequi laboriosam eveniet harum. Reprehenderit quo quo rerum. Quo sed maiores in quod eligendi explicabo sunt veniam.",
    "phone": "072-336-7493 x394",
    "email": "Zelda_OKon66@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Orląt Lwowskich 42A, 02-495 Warszawa",
    "geolat": 52.19127,
    "geolng": 20.86667
}, {
    "date": "2019-06-29T15:23:57.463Z",
    "contactPerson": "Francisca Jaskolski",
    "description": "Velit nobis ut aspernatur. Enim iusto nemo.",
    "phone": "1-591-618-1713",
    "email": "Melisa69@hotmail.com",
    "status": "Do podjęcia",
    "address": "Rzeźbiarska 3, 04-633 Warszawa",
    "geolat": 52.20855,
    "geolng": 21.16536
}, {
    "date": "2019-06-29T04:51:09.150Z",
    "contactPerson": "Jamaal O'Hara",
    "description": "Eveniet totam velit in. In tenetur quaerat a sed magnam qui sequi at quos. Aut est aliquam eos sit dolorem quisquam iste adipisci. Voluptatem autem ut accusantium alias in quaerat praesentium.",
    "phone": "586.838.6603",
    "email": "Rhianna14@yahoo.com",
    "status": "Zamknięta",
    "address": "Prystora 4, 02-497 Warszawa",
    "geolat": 52.18817,
    "geolng": 20.90776
}, {
    "date": "2019-06-29T10:58:49.788Z",
    "contactPerson": "Delbert Hauck",
    "description": "Labore nostrum hic sunt ut sapiente ipsa harum laudantium. Expedita asperiores hic eum quos dignissimos. Accusamus similique ea velit tempora id.",
    "phone": "1-215-804-6487 x50290",
    "email": "Lila.Davis5@gmail.com",
    "status": "W toku",
    "address": "Pańska 94, 00-837 Warszawa",
    "geolat": 52.23146,
    "geolng": 20.99252
}, {
    "date": "2019-06-29T07:23:53.732Z",
    "contactPerson": "Dawn Lueilwitz",
    "description": "Incidunt saepe fuga eveniet. Praesentium hic quia ratione et sint sit saepe nostrum.",
    "phone": "930.550.8460",
    "email": "Rupert.Prosacco69@gmail.com",
    "status": "Zamknięta",
    "address": "Gen. Meriana C. Coopera 12, 01-315 Warszawa",
    "geolat": 52.2374,
    "geolng": 20.89401
}, {
    "date": "2019-06-29T13:11:43.500Z",
    "contactPerson": "Arvid Boyer",
    "description": "Voluptatem dolore commodi dolore et laudantium qui dolore soluta consectetur. Voluptatem occaecati illo.",
    "phone": "1-396-967-9547 x2185",
    "email": "Toby.Wilkinson@gmail.com",
    "status": "Do podjęcia",
    "address": "Potocka 14, 01-652 Warszawa",
    "geolat": 52.27451,
    "geolng": 20.97974
}, {
    "date": "2019-06-29T07:52:09.820Z",
    "contactPerson": "Gregorio Robel",
    "description": "Culpa necessitatibus est non quidem ratione eligendi praesentium. Et qui maiores. Dolor quis earum maxime tenetur nesciunt error reprehenderit corrupti quia. Debitis iste sit ex consectetur odio. Ut aut maxime quia aliquam est voluptatum.",
    "phone": "(221) 390-6643 x904",
    "email": "Percival41@gmail.com",
    "status": "Do podjęcia",
    "address": "Kłopot 2, 01-066 Warszawa",
    "geolat": 52.25717,
    "geolng": 20.97736
}, {
    "date": "2019-06-28T20:14:04.793Z",
    "contactPerson": "Eudora Berge",
    "description": "Voluptatem amet repellendus itaque voluptate. Nihil sunt qui nostrum harum. Est nesciunt incidunt et sit. Ratione molestiae pariatur commodi fugiat aut eum. Temporibus id sit nostrum omnis fuga inventore aperiam amet.",
    "phone": "117.208.6853",
    "email": "Myra_Bashirian89@yahoo.com",
    "status": "W toku",
    "address": "Wincentego 4, 03-505 Warszawa",
    "geolat": 52.26887,
    "geolng": 21.03962
}, {
    "date": "2019-06-29T14:20:01.692Z",
    "contactPerson": "Naomi Beier",
    "description": "Blanditiis id omnis tempora voluptatem in dolor est vero ratione. Cupiditate magni incidunt quaerat voluptas maiores id eos. Ad et nihil omnis est.",
    "phone": "310.404.8273",
    "email": "Naomi9@yahoo.com",
    "status": "W toku",
    "address": "Czerniakowska 50, 00-720 Warszawa",
    "geolat": 52.2092,
    "geolng": 21.0484
}, {
    "date": "2019-06-29T12:34:19.876Z",
    "contactPerson": "Franco Hahn",
    "description": "Voluptas similique excepturi architecto officiis voluptate. Quis id esse numquam facilis non. Dolorem deleniti laboriosam. Quod aut quos et quia quae asperiores ipsa veniam dolorum. Molestiae non consequuntur accusamus.",
    "phone": "1-916-475-9182",
    "email": "Eldridge.Ernser@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Wspólna Droga 27, 04-345 Warszawa",
    "geolat": 52.24966,
    "geolng": 21.09813
}, {
    "date": "2019-06-29T02:01:17.278Z",
    "contactPerson": "Jedediah Hessel",
    "description": "Aliquam autem amet nemo voluptatem maxime. Aut voluptatem sit. Placeat accusamus autem.",
    "phone": "400-502-3290 x02825",
    "email": "Charlene_Kautzer@hotmail.com",
    "status": "Zamknięta",
    "address": "Grochowska 149/151, 04-139 Warszawa",
    "geolat": 52.24257,
    "geolng": 21.09823
}, {
    "date": "2019-06-28T20:22:51.489Z",
    "contactPerson": "Dominique Bosco",
    "description": "Assumenda atque ut iure. Vel autem quos adipisci quis iste. Voluptatibus nihil qui id rerum velit reprehenderit qui quia ipsa. Ea recusandae eius voluptas iusto veniam molestias dolore.",
    "phone": "1-663-311-6654",
    "email": "Rashad.Kerluke16@yahoo.com",
    "status": "Do podjęcia",
    "address": "Sobieskiego 18, 02-957 Warszawa",
    "geolat": 52.1747,
    "geolng": 21.06396
}, {
    "date": "2019-06-29T02:02:07.297Z",
    "contactPerson": "Mable Shields",
    "description": "Autem facilis ipsam consequatur explicabo perferendis illum esse molestias. At et reprehenderit illo earum vero nobis. Cum molestias voluptas nobis consequatur ipsum sit saepe. Amet rem qui sed. Qui est sint laudantium pariatur animi. Autem in error.",
    "phone": "484.799.7550",
    "email": "Mariane42@hotmail.com",
    "status": "W toku",
    "address": "Racławicka 8, 02-601 Warszawa",
    "geolat": 52.19958,
    "geolng": 21.02065
}, {
    "date": "2019-06-29T14:33:50.584Z",
    "contactPerson": "Sean Lang",
    "description": "Id dicta autem accusantium repudiandae qui facilis consequatur illum. Sunt occaecati magni dolor nulla voluptas ut et ut. Est eos amet recusandae.",
    "phone": "1-974-472-7058 x0413",
    "email": "Ernesto_Franecki61@gmail.com",
    "status": "Do podjęcia",
    "address": "Millera 16A, 01-469 Warszawa",
    "geolat": 52.25791,
    "geolng": 20.91923
}, {
    "date": "2019-06-28T19:00:01.125Z",
    "contactPerson": "Raquel Kutch",
    "description": "Labore quos in aspernatur. Id qui aliquid pariatur. Et sint soluta sunt sunt.",
    "phone": "(707) 368-5035",
    "email": "Bertha96@hotmail.com",
    "status": "W toku",
    "address": "Żywnego 18, 02-701 Warszawa",
    "geolat": 52.19209,
    "geolng": 21.02489
}, {
    "date": "2019-06-29T05:49:04.010Z",
    "contactPerson": "Sandrine Lueilwitz",
    "description": "Velit est est. Sit dolor dolorem est quia possimus perspiciatis debitis officiis temporibus. Veritatis explicabo ea rem.",
    "phone": "914.143.9732 x498",
    "email": "Edd_Hyatt76@hotmail.com",
    "status": "Zamknięta",
    "address": "Cybernetyki 21, 02-667 Warszawa",
    "geolat": 52.17701,
    "geolng": 20.98908
}, {
    "date": "2019-06-28T21:56:33.666Z",
    "contactPerson": "Arturo Schoen",
    "description": "Nihil vero ipsum laboriosam. Soluta aliquid natus qui sit vel. Ipsum expedita rerum a. Assumenda molestias non.",
    "phone": "1-834-922-1657",
    "email": "Jerad75@yahoo.com",
    "status": "Do podjęcia",
    "address": "Łopuszańska 38B, 02-232 Warszawa",
    "geolat": 52.19477,
    "geolng": 20.94059
}, {
    "date": "2019-06-29T05:33:55.065Z",
    "contactPerson": "Jordy Nicolas",
    "description": "Eos qui est. Nobis totam sint qui commodi. Odio hic corrupti ipsa nostrum cum.",
    "phone": "875.053.8118 x02367",
    "email": "Claudia_Quitzon35@yahoo.com",
    "status": "Do podjęcia",
    "address": "al. Krakowska 208, 02-219 Warszawa",
    "geolat": 52.18483,
    "geolng": 20.95422
}, {
    "date": "2019-06-29T03:23:22.917Z",
    "contactPerson": "Jamar Hoppe",
    "description": "Culpa dolorum laborum saepe numquam quos numquam qui non commodi. Reiciendis doloremque sed. Porro blanditiis quasi qui iste velit. Consequatur est minus vel.",
    "phone": "1-290-854-0531",
    "email": "Clarissa.Halvorson53@gmail.com",
    "status": "W toku",
    "address": "Jugosłowiańska 19, 03-984 Warszawa",
    "geolat": 52.22117,
    "geolng": 21.09121
}, {
    "date": "2019-06-29T03:52:26.568Z",
    "contactPerson": "Lyric Bednar",
    "description": "Minima quis velit qui. Est rerum ad animi ducimus doloremque ut quo occaecati cupiditate.",
    "phone": "(041) 940-3498 x044",
    "email": "Moises83@hotmail.com",
    "status": "Do podjęcia",
    "address": "Fieldorfa 41A, 04-125 Warszawa",
    "geolat": 52.233,
    "geolng": 21.0957
}, {
    "date": "2019-06-29T05:33:18.523Z",
    "contactPerson": "Junior McClure",
    "description": "Ea modi quis pariatur temporibus voluptatem. Similique facilis ut qui. Eligendi nisi soluta autem quia quos ut.",
    "phone": "002.786.9047 x42037",
    "email": "Simone.Zemlak6@gmail.com",
    "status": "W toku",
    "address": "Al. Jerozolimskie 92, 00-807 Warszawa",
    "geolat": 52.22318,
    "geolng": 20.98118
}, {
    "date": "2019-06-29T09:40:53.482Z",
    "contactPerson": "Aileen Thiel",
    "description": "Id inventore eius adipisci cum. Sit dolor quisquam. Deleniti asperiores illo et porro enim quia assumenda est reprehenderit. Aut sapiente quibusdam et voluptatum consequatur eaque repellat. Et atque perferendis exercitationem libero rerum neque earum et. Nihil enim ea tempore non exercitationem nesciunt vel aliquam.",
    "phone": "840-733-8410 x7866",
    "email": "Sophia11@yahoo.com",
    "status": "Do podjęcia",
    "address": "Postępu 21, 02-676 Warszawa",
    "geolat": 52.18308,
    "geolng": 20.99715
}, {
    "date": "2019-06-29T09:15:33.705Z",
    "contactPerson": "Gaetano Sporer",
    "description": "Autem culpa aut. Et id explicabo ut. Non nesciunt autem non voluptatem. Ipsa reprehenderit laboriosam iste est sed sit perferendis fugiat. Modi qui enim.",
    "phone": "(803) 088-9848",
    "email": "Samson.Douglas@hotmail.com",
    "status": "Do podjęcia",
    "address": "Garwolińska 26, 04-348 Warszawa",
    "geolat": 52.25156,
    "geolng": 21.09403
}, {
    "date": "2019-06-29T10:12:52.539Z",
    "contactPerson": "Nikko Veum",
    "description": "Earum aut et quo non nihil itaque quia. Sint laudantium vero voluptatem nemo praesentium.",
    "phone": "408-270-4740",
    "email": "Nelle.Pfeffer@yahoo.com",
    "status": "Do podjęcia",
    "address": "aleja Jana Rodowicza 6, 02-786 Warszawa",
    "geolat": 52.16265,
    "geolng": 21.03696
}, {
    "date": "2019-06-29T14:27:24.647Z",
    "contactPerson": "Royal Heaney",
    "description": "Qui iure in nulla tenetur voluptatem earum hic nisi doloribus. Dolorem similique ut commodi labore consequatur et aliquam. Culpa autem pariatur voluptas enim quod qui necessitatibus velit. Fuga itaque dolore et culpa laudantium in qui. Vel qui accusamus ut deserunt dolores dolor est et vero.",
    "phone": "862.373.4423",
    "email": "Doug46@yahoo.com",
    "status": "Do podjęcia",
    "address": "Sprawna 30A, 03-147 Warszawa",
    "geolat": 52.3424,
    "geolng": 20.94594
}, {
    "date": "2019-06-29T12:42:37.753Z",
    "contactPerson": "Vivienne Spinka",
    "description": "Omnis tenetur et sed quia aut facere qui. Harum dolor quae possimus eos molestiae est qui assumenda autem. In similique non molestias. Voluptatem esse tempore nam.",
    "phone": "748.288.9612 x99425",
    "email": "Adell85@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Szaserów 124, 04-349 Warszawa",
    "geolat": 52.24962,
    "geolng": 21.09321
}, {
    "date": "2019-06-29T12:02:59.854Z",
    "contactPerson": "Jalen Littel",
    "description": "Eum ipsum dolor aut expedita quidem ratione. Ut in quae exercitationem doloribus accusamus. Natus possimus omnis voluptatem. Distinctio corrupti ipsum fugit modi reprehenderit reiciendis. Ea placeat eos non sapiente consequatur omnis et dolor. Qui architecto illo.",
    "phone": "206-017-7762 x14008",
    "email": "Bernhard1@hotmail.com",
    "status": "W toku",
    "address": "Ostrobramska 81, 04-175 Warszawa",
    "geolat": 52.23395,
    "geolng": 21.1011
}, {
    "date": "2019-06-29T01:13:16.340Z",
    "contactPerson": "Hillary Moen",
    "description": "Repellendus dignissimos magni similique voluptatum cum suscipit ex ad. Recusandae voluptate quibusdam mollitia distinctio veritatis ipsum.",
    "phone": "(350) 711-4054",
    "email": "Mariane10@yahoo.com",
    "status": "W toku",
    "address": "Żegańska 10, 04-713 Warszawa",
    "geolat": 52.2055,
    "geolng": 21.17202
}, {
    "date": "2019-06-29T04:16:59.632Z",
    "contactPerson": "Ellsworth Schaden",
    "description": "Corrupti dolorem consequuntur cumque at illo voluptas rerum dolorem veritatis. Eius in at accusamus eaque pariatur quia nobis.",
    "phone": "1-848-637-6333 x20895",
    "email": "Ayla43@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Stalowa 60/64, 03-429 Warszawa",
    "geolat": 52.2635,
    "geolng": 21.0522
}, {
    "date": "2019-06-28T20:12:39.709Z",
    "contactPerson": "Cydney Metz",
    "description": "Quo odio perferendis tenetur quam quam quidem adipisci aspernatur dignissimos. Dicta necessitatibus impedit. Dignissimos consequatur nobis occaecati voluptas quis cumque doloribus aut.",
    "phone": "(520) 627-6857",
    "email": "Odie.Koss8@gmail.com",
    "status": "Zamknięta",
    "address": "Modlińska 29, 03-199 Warszawa",
    "geolat": 52.30354,
    "geolng": 20.98779
}, {
    "date": "2019-06-29T07:35:22.335Z",
    "contactPerson": "Sarai Bradtke",
    "description": "Quis et sequi. Error in voluptatum sit tenetur. Vero est voluptatum modi officia quia cumque. Qui dicta distinctio accusantium ad est. Sunt distinctio qui. Quia delectus culpa et eos eius.",
    "phone": "301-161-1808",
    "email": "Cassandre39@gmail.com",
    "status": "W toku",
    "address": "Księżycowa 62, 01-934 Warszawa",
    "geolat": 52.2731,
    "geolng": 20.91184
}, {
    "date": "2019-06-29T07:20:12.476Z",
    "contactPerson": "Dennis Stroman",
    "description": "Eius facere occaecati eum nobis quis magni in. Libero eum aspernatur. Aut dicta est quis occaecati ipsa architecto aliquid tenetur.",
    "phone": "(757) 658-3468 x99914",
    "email": "Spencer32@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Bolesławicka 10/12, 03-325 Warszawa",
    "geolat": 52.28345,
    "geolng": 21.03166
}, {
    "date": "2019-06-29T10:11:57.655Z",
    "contactPerson": "Alexie Harvey",
    "description": "Fugit ratione nemo est non reprehenderit recusandae quos dolores tenetur. Reiciendis est veritatis ut aut dignissimos officiis sed. Veniam hic quae consequatur est magnam eligendi minus. Placeat quis quia iure eaque sit maiores ut ullam repudiandae. Consequatur voluptates et nesciunt qui ut amet voluptatem. Impedit eveniet et enim laudantium.",
    "phone": "473.273.9048 x8912",
    "email": "Felipa27@gmail.com",
    "status": "Do weryfikacji",
    "address": "Kuflewska 6, 03-554 Warszawa",
    "geolat": 52.27121,
    "geolng": 21.05785
}, {
    "date": "2019-06-29T15:42:12.442Z",
    "contactPerson": "Torey Kilback",
    "description": "Expedita totam voluptates optio totam excepturi esse in possimus alias. Sapiente voluptatem ea doloremque. Dolorem voluptas et cupiditate a. Repellat molestias deserunt non illum sequi incidunt. Eum assumenda optio est velit.",
    "phone": "1-601-936-3010 x3219",
    "email": "Jayme_Hyatt@yahoo.com",
    "status": "W toku",
    "address": "Grójecka 125, 02-124 Warszawa",
    "geolat": 52.20104,
    "geolng": 20.96852
}, {
    "date": "2019-06-29T01:55:53.272Z",
    "contactPerson": "Ayden Aufderhar",
    "description": "Et culpa perspiciatis dolor. Ut deserunt odio ducimus voluptatibus laborum nihil. Molestiae qui corrupti provident.",
    "phone": "(911) 065-6236",
    "email": "Antone.Effertz45@gmail.com",
    "status": "Zamknięta",
    "address": "Połczyńska 33, 01-377 Warszawa",
    "geolat": 52.21949,
    "geolng": 20.91503
}, {
    "date": "2019-06-29T10:29:46.876Z",
    "contactPerson": "Margie Dietrich",
    "description": "Natus quis tempora perferendis minima. Praesentium tenetur numquam exercitationem dolore adipisci rerum omnis. Omnis eos blanditiis error recusandae repellendus facere. Iste doloribus eum qui voluptatem sint dolorum vitae occaecati dolorem.",
    "phone": "603.041.4765 x5283",
    "email": "Dorris19@yahoo.com",
    "status": "W toku",
    "address": "Łodygowa 29, 03-687 Warszawa",
    "geolat": 52.28653,
    "geolng": 21.09081
}, {
    "date": "2019-06-29T10:47:50.339Z",
    "contactPerson": "Ezra Jacobi",
    "description": "Officiis tempora iste praesentium minima et ut suscipit maxime. Laudantium id corporis.",
    "phone": "473.776.2264",
    "email": "Jarred_Okuneva@hotmail.com",
    "status": "Do podjęcia",
    "address": "Kijowska 20, 03-743 Warszawa",
    "geolat": 52.25217,
    "geolng": 21.05099
}, {
    "date": "2019-06-28T16:48:09.979Z",
    "contactPerson": "Katelynn Casper",
    "description": "Est voluptas doloremque quos inventore accusamus quam. Et ab accusantium laborum illum labore dolorem. Aspernatur ut eveniet saepe. Quo quia et veniam ad iure magnam nobis quidem. Quos eius fuga eaque repellendus odio provident temporibus. Ea deleniti minima quos maxime exercitationem.",
    "phone": "1-057-673-6648 x94188",
    "email": "Clemmie12@hotmail.com",
    "status": "Zamknięta",
    "address": "Odkryta 4, 03-140 Warszawa",
    "geolat": 52.32541,
    "geolng": 20.93779
}, {
    "date": "2019-06-29T11:13:35.258Z",
    "contactPerson": "Blanche Witting",
    "description": "Atque iure minus ipsum provident porro consectetur rerum. Eum dolore asperiores dignissimos sint in dolorum fugiat velit. Sunt aut dolore impedit nisi corporis vero voluptas dolore.",
    "phone": "697-036-0570 x1826",
    "email": "Citlalli_Hammes44@yahoo.com",
    "status": "Zamknięta",
    "address": "Mochtyńska 90, 03-287 Warszawa",
    "geolat": 52.35482,
    "geolng": 21.03806
}, {
    "date": "2019-06-29T14:28:41.914Z",
    "contactPerson": "Gayle Gusikowski",
    "description": "Et facilis quia quam aut impedit. Odit atque ab rerum voluptatum aperiam sint sed a soluta.",
    "phone": "(142) 859-2682 x47805",
    "email": "George.Goodwin@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Sikorskiego 9, 02-758 Warszawa",
    "geolat": 52.18006,
    "geolng": 21.04433
}, {
    "date": "2019-06-28T22:01:52.084Z",
    "contactPerson": "Shayne Spencer",
    "description": "Beatae repellendus itaque harum. Id quasi in. Est cumque consequuntur ipsam voluptatum praesentium ut.",
    "phone": "(146) 067-6533",
    "email": "Ellis37@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Wal Miedzeszyński 646 budynek III, 03-994 Warszawa",
    "geolat": 52.22198,
    "geolng": 21.08369
}, {
    "date": "2019-06-29T08:11:46.393Z",
    "contactPerson": "Cheyenne Cole",
    "description": "Dicta eveniet voluptatem eveniet debitis nobis. Et temporibus id tempora quia nesciunt nobis expedita quas est. Aut quisquam dolorem quos.",
    "phone": "1-796-055-9683",
    "email": "Carley15@yahoo.com",
    "status": "Do podjęcia",
    "address": "Trakt Lubelski 1/3, 04-766 Warszawa",
    "geolat": 52.17371,
    "geolng": 21.15354
}, {
    "date": "2019-06-29T06:06:53.234Z",
    "contactPerson": "Carlo Nienow",
    "description": "Minus inventore fuga ut et. Voluptas similique ut. Molestiae explicabo est quaerat illum esse et in nesciunt.",
    "phone": "1-562-288-6564 x84384",
    "email": "Sigrid.Hilll@gmail.com",
    "status": "W toku",
    "address": "Czarodzieja 26, 03-116 Warszawa",
    "geolat": 52.33535,
    "geolng": 20.96344
}, {
    "date": "2019-06-28T16:20:13.217Z",
    "contactPerson": "Verona Wilkinson",
    "description": "Numquam nesciunt non saepe deleniti perferendis eligendi et rerum quae. Necessitatibus sapiente aliquid minus laborum dolores.",
    "phone": "(733) 365-9948 x843",
    "email": "Irwin.Deckow@gmail.com",
    "status": "Do podjęcia",
    "address": "Skoroszewska 5C, 02-495 Warszawa",
    "geolat": 52.18803,
    "geolng": 20.89861
}, {
    "date": "2019-06-29T12:08:01.795Z",
    "contactPerson": "Monroe Lynch",
    "description": "Ad possimus ut atque deserunt vitae veritatis in. Dicta voluptas itaque. Iure suscipit quisquam blanditiis adipisci enim. Quos maxime dolore et.",
    "phone": "(053) 149-5768 x6619",
    "email": "Neil12@hotmail.com",
    "status": "Zamknięta",
    "address": "Puławska 623, 02-885 Warszawa",
    "geolat": 52.10669,
    "geolng": 21.01963
}, {
    "date": "2019-06-28T23:25:06.477Z",
    "contactPerson": "Adriana Block",
    "description": "Minima quia rerum itaque totam fugit sed totam consequuntur. Fuga optio quis consequatur nobis minima similique molestias. Repellat odio et inventore. Eum facere modi laudantium rerum velit odit consequuntur. Iure sed cum illo sed ut numquam.",
    "phone": "097.881.7952 x0088",
    "email": "Arianna.Dietrich0@yahoo.com",
    "status": "Do weryfikacji",
    "address": "al. Wilanowska 363, 02-675 Warszawa",
    "geolat": 52.17902,
    "geolng": 21.01137
}, {
    "date": "2019-06-28T16:48:13.937Z",
    "contactPerson": "Mariano Ondricka",
    "description": "Accusantium ab tempore aut. Eaque fugit consequuntur distinctio quae architecto. Itaque itaque eveniet nemo ab ea est.",
    "phone": "1-647-955-0280",
    "email": "Beth_Breitenberg@yahoo.com",
    "status": "Zamknięta",
    "address": "Białołęka, Modlinska 339, 03-053 Warszawa",
    "geolat": 52.34683,
    "geolng": 20.94772
}, {
    "date": "2019-06-29T13:08:00.783Z",
    "contactPerson": "Gerson King",
    "description": "Hic nam veniam molestias repellat eos maxime aut distinctio ut. Aut ea ipsam quaerat aliquid. Voluptatibus mollitia dolorum ducimus perferendis. Quia molestias quia ad. Non tempore enim ut sed delectus ea.",
    "phone": "959.156.3365 x81209",
    "email": "Roberta93@hotmail.com",
    "status": "Do podjęcia",
    "address": "Abrahama 14, 03-982 Warszawa",
    "geolat": 52.228,
    "geolng": 21.09067
}, {
    "date": "2019-06-28T19:08:30.649Z",
    "contactPerson": "Jeramy Reynolds",
    "description": "Nihil est odit. Illo dignissimos quia veritatis. Et amet occaecati. Et aut quam quo non.",
    "phone": "134-456-4679",
    "email": "Jordi_Ritchie@hotmail.com",
    "status": "Zamknięta",
    "address": "Wał Miedzeszyński 219, 04-866 Warszawa",
    "geolat": 52.17069,
    "geolng": 21.15486
}, {
    "date": "2019-06-29T05:05:10.242Z",
    "contactPerson": "Cade Gleichner",
    "description": "Commodi ullam sit quibusdam praesentium. Ut et ut corporis iure eos animi autem. Adipisci ad sit. Eius est alias nemo amet est est.",
    "phone": "554-146-3922",
    "email": "Makenzie37@hotmail.com",
    "status": "Zamknięta",
    "address": "Łopuszańska 38B, 02-220 Warszawa",
    "geolat": 52.19478,
    "geolng": 20.94116
}, {
    "date": "2019-06-29T02:41:31.592Z",
    "contactPerson": "Rolando Lebsack",
    "description": "Id atque enim ut odio distinctio dolore maxime optio. Dignissimos aperiam aut aut.",
    "phone": "(177) 135-9838 x156",
    "email": "Eloisa.Sanford@hotmail.com",
    "status": "Zamknięta",
    "address": "Szczęsna 13A, 02-454 Warszawa",
    "geolat": 52.21,
    "geolng": 20.92963
}, {
    "date": "2019-06-29T11:41:17.013Z",
    "contactPerson": "Claudine Kautzer",
    "description": "Corrupti quia deserunt voluptatem recusandae aut libero laboriosam. Sunt sit labore vero. Consectetur provident aut.",
    "phone": "961.133.0116 x08197",
    "email": "Joanny.Mueller@yahoo.com",
    "status": "Do podjęcia",
    "address": "Migdałowa 4, 02-796 Warszawa",
    "geolat": 52.14641,
    "geolng": 21.05814
}, {
    "date": "2019-06-29T10:50:23.470Z",
    "contactPerson": "Ofelia Batz",
    "description": "Voluptates laborum rerum vero molestias tenetur doloremque vel eius. Sit vel ratione ad fugit. Eius placeat sit laborum fuga eius id beatae perspiciatis modi.",
    "phone": "(217) 515-2399",
    "email": "Gardner.Rohan64@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Sokratesa 11, 01-909 Warszawa",
    "geolat": 52.28468,
    "geolng": 20.92775
}, {
    "date": "2019-06-29T03:51:01.293Z",
    "contactPerson": "Eliane Windler",
    "description": "Deserunt nisi velit nihil quam voluptates iste. Est sed nobis similique. Et iusto et.",
    "phone": "619-059-6488 x434",
    "email": "Delphia_Gerhold2@hotmail.com",
    "status": "Do podjęcia",
    "address": "Barcelońska 1, 02-762 Warszawa",
    "geolat": 52.17397,
    "geolng": 21.05497
}, {
    "date": "2019-06-29T04:32:13.055Z",
    "contactPerson": "Darrell Mueller",
    "description": "Tenetur reprehenderit corporis vitae assumenda vel dolorem temporibus et. Soluta qui id dicta labore officiis. Eveniet cumque non dolorem nobis. Ipsum ipsam qui consequatur minima mollitia fugiat quia est dolorem. Perspiciatis ea doloribus blanditiis at optio nobis ipsam eos.",
    "phone": "1-622-071-6630",
    "email": "May_Deckow91@yahoo.com",
    "status": "Zamknięta",
    "address": "Myśliborska 53, 03-185 Warszawa",
    "geolat": 52.31123,
    "geolng": 20.96824
}, {
    "date": "2019-06-29T12:31:06.383Z",
    "contactPerson": "Nia Volkman",
    "description": "Quo sunt magnam earum in velit. Numquam sed eius sit ipsam ipsum. Nam molestias et quis quia aut. Et quisquam id. Id optio et aut atque voluptatem rerum. Beatae nihil ea.",
    "phone": "567.815.9241",
    "email": "Alberto_White28@yahoo.com",
    "status": "Do podjęcia",
    "address": "Surowieckiego 10, 02-785 Warszawa",
    "geolat": 52.15881,
    "geolng": 21.02073
}, {
    "date": "2019-06-29T04:29:21.716Z",
    "contactPerson": "Jayce Cormier",
    "description": "Impedit ut cupiditate. Qui ex quod veritatis rerum eius rerum maiores. Maxime perspiciatis voluptas in voluptatibus a laborum rerum atque. Harum facere quisquam qui velit nobis asperiores.",
    "phone": "1-450-519-0223 x71773",
    "email": "Anita.Zboncak@hotmail.com",
    "status": "W toku",
    "address": "Skarbka z Gór 120, 03-287 Warszawa",
    "geolat": 52.31814,
    "geolng": 21.0587
}, {
    "date": "2019-06-29T11:39:52.790Z",
    "contactPerson": "Astrid Stark",
    "description": "Voluptate est accusamus. Et expedita quo. Nam nam dolorem consequatur quia fugiat.",
    "phone": "126-311-6833 x35379",
    "email": "Ona66@gmail.com",
    "status": "Do podjęcia",
    "address": "Środkowa 2/4, 03-430 Warszawa",
    "geolat": 52.25918,
    "geolng": 21.04181
}, {
    "date": "2019-06-29T14:20:19.731Z",
    "contactPerson": "Juvenal Gleason",
    "description": "Necessitatibus ducimus commodi at ipsa natus et nihil. Est odio eveniet. Rerum molestiae tempore sunt ad. Qui animi ad eaque nobis deleniti commodi suscipit. Non voluptate vero enim mollitia voluptatem officiis deleniti accusantium dolores. Illum et veritatis explicabo architecto dolores temporibus rerum.",
    "phone": "921-423-3773 x464",
    "email": "Samir.Green@gmail.com",
    "status": "Zamknięta",
    "address": "Szkoły Orląt 4/5, 03-984 Warszawa",
    "geolat": 52.22771,
    "geolng": 21.10605
}, {
    "date": "2019-06-29T02:58:59.921Z",
    "contactPerson": "Jammie Brakus",
    "description": "Ipsam nisi mollitia. Quaerat sint nobis maiores. Illum doloribus quidem ea.",
    "phone": "1-249-152-0525 x961",
    "email": "Kristin.Murphy73@gmail.com",
    "status": "Do podjęcia",
    "address": "Zawiszy 16, 01-167 Warszawa",
    "geolat": 52.24366,
    "geolng": 20.95946
}, {
    "date": "2019-06-29T13:54:32.490Z",
    "contactPerson": "Jessy Trantow",
    "description": "Officiis asperiores nam omnis libero corporis eveniet. Quas ullam porro quia rerum voluptatem rerum culpa. Veritatis qui quis eius eos aut.",
    "phone": "810-497-5296 x972",
    "email": "Amos_Jast31@gmail.com",
    "status": "Do podjęcia",
    "address": "Jutrzenki 183, 02-231 Warszawa",
    "geolat": 52.20264,
    "geolng": 20.93965
}, {
    "date": "2019-06-28T17:08:49.635Z",
    "contactPerson": "Rudy Gutkowski",
    "description": "Quia magnam ut ullam eligendi sint beatae quisquam laudantium beatae. Deserunt qui aliquam ipsam ut non at. Eum cum nulla qui et fugiat rerum optio. Voluptatum et voluptatum ut aut odit. Facilis et rerum dolor molestias qui aut.",
    "phone": "(482) 656-2207 x358",
    "email": "Arden74@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Poleczki 21, 02-822 Warszawa",
    "geolat": 52.15358,
    "geolng": 21.00648
}, {
    "date": "2019-06-28T17:35:49.243Z",
    "contactPerson": "Karley Keebler",
    "description": "Veniam adipisci similique nihil et. Excepturi qui asperiores unde voluptatem aperiam corporis. Blanditiis nihil debitis quae totam. Velit saepe quos asperiores non laudantium.",
    "phone": "(599) 473-5203 x988",
    "email": "Jeffery.Romaguera@gmail.com",
    "status": "Do podjęcia",
    "address": "Bronowska 4, 03-995 Warszawa",
    "geolat": 52.19942,
    "geolng": 21.11984
}, {
    "date": "2019-06-28T17:54:11.067Z",
    "contactPerson": "Karli Block",
    "description": "Ipsa magni consequatur eos deleniti. Facilis voluptas modi corrupti in nostrum aut sed.",
    "phone": "923-769-8629",
    "email": "Vicente.Haag@gmail.com",
    "status": "W toku",
    "address": "Jabłonowskiego 3, 02-956 Warszawa",
    "geolat": 52.17201,
    "geolng": 21.07174
}, {
    "date": "2019-06-29T13:29:54.214Z",
    "contactPerson": "Jettie Maggio",
    "description": "Eius non rerum porro id eligendi nam. Accusamus veniam sed expedita quia quaerat et sit. Non harum cumque ipsum.",
    "phone": "323.978.1111 x961",
    "email": "Hailey_DAmore@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Wolska 69, 01-229 Warszawa",
    "geolat": 52.23268,
    "geolng": 20.96403
}, {
    "date": "2019-06-29T09:36:18.718Z",
    "contactPerson": "Davin Kohler",
    "description": "Consectetur consectetur cum possimus vel sapiente accusamus. Dolor nisi velit quia error ex beatae. Placeat dolores velit sit doloremque facere amet. Esse quis neque reprehenderit. Minima ab tempore mollitia asperiores quia quo velit deleniti.",
    "phone": "587.778.5456 x21775",
    "email": "Elaina86@hotmail.com",
    "status": "W toku",
    "address": "Generała Witolda Urbanowicza 37, 01-476 Warszawa",
    "geolat": 52.25956,
    "geolng": 20.89719
}, {
    "date": "2019-06-29T06:16:34.432Z",
    "contactPerson": "Al Beahan",
    "description": "Maxime necessitatibus consequuntur dolore ducimus. Sed facere facilis impedit. Dolorem eos eum animi inventore fuga voluptatibus perferendis blanditiis eum. Similique aliquid debitis. Qui ipsum totam excepturi.",
    "phone": "591-425-6774 x860",
    "email": "Lizeth.Windler41@yahoo.com",
    "status": "Zamknięta",
    "address": "Bacewiczówny 8, 02-786 Warszawa",
    "geolat": 52.15622,
    "geolng": 21.03581
}, {
    "date": "2019-06-29T05:25:02.999Z",
    "contactPerson": "Marcel Boyer",
    "description": "Illo praesentium ab dolores sit minus magnam voluptatem. Architecto aliquam expedita veniam.",
    "phone": "1-769-355-8472 x4956",
    "email": "Kari.Lindgren@yahoo.com",
    "status": "W toku",
    "address": "Postępu 21, 02-676 Warszawa",
    "geolat": 52.1828,
    "geolng": 20.99657
}, {
    "date": "2019-06-28T23:24:42.808Z",
    "contactPerson": "Destin Windler",
    "description": "Aperiam et aperiam voluptatem ea nam molestias non et. Consequatur sit et molestiae et explicabo. Et ea voluptates eaque quia.",
    "phone": "1-023-565-9648 x9576",
    "email": "Cleveland.Heidenreich@hotmail.com",
    "status": "Do podjęcia",
    "address": "Szyszkowa 45, 02-285 Warszawa",
    "geolat": 52.17491,
    "geolng": 20.91903
}, {
    "date": "2019-06-29T00:01:13.437Z",
    "contactPerson": "Daphnee Crooks",
    "description": "Voluptates sapiente ea vitae placeat pariatur eligendi. Sunt eligendi possimus magnam veniam.",
    "phone": "(777) 562-8929 x75551",
    "email": "Danial.Bogisich73@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Białoborska 4, 04-668 Warszawa",
    "geolat": 52.22819,
    "geolng": 21.13912
}, {
    "date": "2019-06-29T01:30:16.148Z",
    "contactPerson": "Richie Hermiston",
    "description": "Distinctio voluptatem culpa molestias molestiae eum repudiandae. Aperiam dignissimos quo totam laboriosam eos vel aspernatur ea consequatur.",
    "phone": "568-739-2412",
    "email": "Tracey_Swaniawski@gmail.com",
    "status": "Zamknięta",
    "address": "Puławska 274, 02-819 Warszawa",
    "geolat": 52.15215,
    "geolng": 21.0166
}, {
    "date": "2019-06-29T12:07:02.286Z",
    "contactPerson": "Carter Gutmann",
    "description": "Atque et fuga voluptas quia nostrum. Sit sit quia. Aut aperiam nisi aliquam.",
    "phone": "(905) 760-2806",
    "email": "Herbert81@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Al. Jerozolimskie 92, 00-807 Warszawa",
    "geolat": 52.22298,
    "geolng": 20.98068
}, {
    "date": "2019-06-29T02:33:41.494Z",
    "contactPerson": "Mireille Swift",
    "description": "Aperiam quia est hic dolorum laborum est. Harum quia est at. Aut beatae et veritatis incidunt maiores ea sed vitae.",
    "phone": "1-176-626-7164 x84883",
    "email": "Lamont30@yahoo.com",
    "status": "Do podjęcia",
    "address": "Żaluzji 22, 02-285 Warszawa",
    "geolat": 52.17408,
    "geolng": 20.92258
}, {
    "date": "2019-06-29T09:40:54.318Z",
    "contactPerson": "Gardner Ullrich",
    "description": "Cum recusandae qui ipsum aut id quod. Harum recusandae velit ab ut maiores qui est. Et molestiae magni. Ducimus nihil facilis et at non.",
    "phone": "346-482-9712 x95738",
    "email": "Seth.Farrell72@gmail.com",
    "status": "Zamknięta",
    "address": "Zwoleńska 59, 04-761 Warszawa",
    "geolat": 52.20135,
    "geolng": 21.14928
}, {
    "date": "2019-06-29T13:23:13.609Z",
    "contactPerson": "Fatima Barrows",
    "description": "Accusantium beatae placeat explicabo. Qui voluptatem reprehenderit quisquam. Molestiae facilis est est molestiae sapiente excepturi. Est quis sit.",
    "phone": "236.135.5242",
    "email": "Alfreda64@yahoo.com",
    "status": "Do podjęcia",
    "address": "Łopuszańska 29, 02-220 Warszawa",
    "geolat": 52.19153,
    "geolng": 20.95009
}, {
    "date": "2019-06-29T08:44:57.073Z",
    "contactPerson": "Milton Collier",
    "description": "Repellendus sit deleniti nam quaerat sunt dolore ducimus voluptatibus. Sequi laborum mollitia fugiat quod quisquam quasi non non culpa. Perferendis nam est non aspernatur. Praesentium molestiae facere qui labore quo et nulla. Harum at omnis placeat voluptatibus ducimus odio dolores odit. Necessitatibus voluptatem deserunt dolores ab odio corporis vel.",
    "phone": "1-480-587-8431",
    "email": "Alisha.Bins59@hotmail.com",
    "status": "W toku",
    "address": "Raczkiewicza 16, 05-075 Warszawa",
    "geolat": 52.25147,
    "geolng": 21.22352
}, {
    "date": "2019-06-29T03:07:05.619Z",
    "contactPerson": "Hassan Ortiz",
    "description": "Corrupti ducimus minima facilis est vitae eos ut suscipit natus. Eum atque cupiditate laborum voluptate distinctio sunt dolores. Dolore omnis molestias id odit accusamus dolorem. Laudantium tempore hic id dolorum voluptatum.",
    "phone": "1-739-885-0375",
    "email": "Earlene.Schinner89@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Kasprowicza 115, 01-949 Warszawa",
    "geolat": 52.28825,
    "geolng": 20.93387
}, {
    "date": "2019-06-29T00:50:43.391Z",
    "contactPerson": "Norris Kuhn",
    "description": "Velit est vel voluptatem. Voluptatem voluptatem eos neque. Unde voluptas maxime quibusdam asperiores hic reprehenderit numquam molestias. Nihil est et explicabo ut dolores. At nulla velit ab.",
    "phone": "1-015-075-6057",
    "email": "Edna_Hauck@yahoo.com",
    "status": "Zamknięta",
    "address": "Bystrzycka 55, 04-921 Warszawa",
    "geolat": 52.16196,
    "geolng": 21.21351
}, {
    "date": "2019-06-29T07:09:16.620Z",
    "contactPerson": "Earnest Spinka",
    "description": "Dolorum ab magnam non nihil dolorem. Adipisci nulla quas ducimus. Est aut sit voluptas corrupti maxime eaque.",
    "phone": "385.474.4482 x0530",
    "email": "Loma3@yahoo.com",
    "status": "Do podjęcia",
    "address": "Towarowa 22, 00-965 Warszawa",
    "geolat": 52.22892,
    "geolng": 20.98733
}, {
    "date": "2019-06-29T11:47:27.349Z",
    "contactPerson": "Dora Herzog",
    "description": "Neque et corrupti explicabo accusamus. Voluptatum quasi possimus consequatur voluptas eveniet. Magni aspernatur sed autem incidunt.",
    "phone": "1-089-926-4533",
    "email": "Buck_Grimes9@yahoo.com",
    "status": "W toku",
    "address": "Regulska 86, 02-495 Warszawa",
    "geolat": 52.18421,
    "geolng": 20.87013
}, {
    "date": "2019-06-28T18:28:58.250Z",
    "contactPerson": "Reymundo Lubowitz",
    "description": "Consequatur molestiae doloribus magnam at voluptatem blanditiis tenetur enim omnis. Porro laudantium accusantium veniam aspernatur amet quam animi. Voluptatem distinctio molestiae quia commodi et doloribus id.",
    "phone": "1-096-969-0887 x26853",
    "email": "Hershel.Stanton@yahoo.com",
    "status": "Do podjęcia",
    "address": "1 Sierpnia 1, 02-134 Warszawa",
    "geolat": 52.19043,
    "geolng": 20.98046
}, {
    "date": "2019-06-29T14:21:01.195Z",
    "contactPerson": "Florine Lemke",
    "description": "Voluptas quasi eos itaque ullam ut non eaque aliquam dignissimos. Dolores voluptatem quia quas aliquam. Nemo iusto necessitatibus error voluptas rerum est. Et sunt voluptatem voluptates aut. Tenetur illum eligendi quia sit ratione.",
    "phone": "(497) 182-4398",
    "email": "Alden.Hickle40@yahoo.com",
    "status": "Do podjęcia",
    "address": "Puławska 543, 02-884 Warszawa",
    "geolat": 52.12354,
    "geolng": 21.01939
}, {
    "date": "2019-06-29T07:15:40.376Z",
    "contactPerson": "Audie Larson",
    "description": "Qui autem qui accusantium magnam exercitationem corrupti accusantium cumque. Omnis et placeat voluptatum ut ad. Eius cum atque. Porro illum quia amet rerum magni. Quas est id nostrum recusandae adipisci.",
    "phone": "1-010-509-7818",
    "email": "Tianna.Shields82@hotmail.com",
    "status": "Zamknięta",
    "address": "Al. Jerozolimskie 54, 00-024 Warszawa",
    "geolat": 52.22906,
    "geolng": 21.00411
}, {
    "date": "2019-06-29T10:32:00.681Z",
    "contactPerson": "Nelson Legros",
    "description": "Aut quam eligendi est adipisci maiores ipsa in corrupti aperiam. Autem quod aut id quo dolore expedita ut dignissimos numquam. Expedita repellendus asperiores doloribus commodi.",
    "phone": "(750) 596-7982 x6520",
    "email": "Pierce93@hotmail.com",
    "status": "W toku",
    "address": "Smocza 14, 01-027 Warszawa",
    "geolat": 52.24546,
    "geolng": 20.98611
}, {
    "date": "2019-06-29T01:22:24.192Z",
    "contactPerson": "Isaac Strosin",
    "description": "Quod sint dolorum pariatur et qui. Et repudiandae quos vitae.",
    "phone": "1-131-507-7144 x4946",
    "email": "Ahmad90@hotmail.com",
    "status": "W toku",
    "address": "Pociskowa 4, 04-471 Warszawa",
    "geolat": 52.25569,
    "geolng": 21.15795
}, {
    "date": "2019-06-28T22:33:43.723Z",
    "contactPerson": "Anahi Fisher",
    "description": "Perferendis neque laboriosam ut ipsa totam qui blanditiis. Et iusto consequatur voluptates nam doloribus eaque voluptate odio.",
    "phone": "329.152.3664",
    "email": "Arnaldo42@yahoo.com",
    "status": "W toku",
    "address": "Cybernetyki 21, 02-677 Warszawa",
    "geolat": 52.1772,
    "geolng": 20.98827
}, {
    "date": "2019-06-29T13:38:51.541Z",
    "contactPerson": "Everette Ankunding",
    "description": "Consequuntur deleniti officiis aut magnam est quis illum. Eaque consequatur error amet amet aut deleniti ullam debitis.",
    "phone": "934.659.1068 x0747",
    "email": "Sheridan60@gmail.com",
    "status": "W toku",
    "address": "pl. Vogla 62, 02-990 Warszawa",
    "geolat": 52.16702,
    "geolng": 21.11123
}, {
    "date": "2019-06-29T04:27:20.852Z",
    "contactPerson": "Kavon Leannon",
    "description": "Eos soluta quibusdam aut. Et minima possimus facilis qui iure ut. Et minus praesentium et provident et sunt. Facilis enim in quisquam sunt neque dicta quos repudiandae sit.",
    "phone": "593-814-3134 x1386",
    "email": "Sage.Kessler41@yahoo.com",
    "status": "Do podjęcia",
    "address": "Wał Miedzeszyński 69, 03-994 Warszawa",
    "geolat": 52.1545,
    "geolng": 21.18392
}, {
    "date": "2019-06-29T00:24:49.911Z",
    "contactPerson": "Deontae Hilpert",
    "description": "Distinctio quia voluptas. Aliquid asperiores architecto a laborum. Perspiciatis sint ab. Sed numquam odio quas. Et expedita omnis reprehenderit molestias fugit. Quos laudantium aut.",
    "phone": "(497) 461-1256",
    "email": "Cletus56@gmail.com",
    "status": "Zamknięta",
    "address": "Wańkowicza 5, 02-796 Warszawa",
    "geolat": 52.13333,
    "geolng": 21.06504
}, {
    "date": "2019-06-29T07:51:22.780Z",
    "contactPerson": "Hilda Bergnaum",
    "description": "Cumque ea illo ut eos aliquid. Incidunt rerum error molestias odio amet non provident. Minima sit veniam et qui voluptas at perferendis. Nisi sequi ut qui aspernatur.",
    "phone": "700-085-5981",
    "email": "Kirk.Adams9@hotmail.com",
    "status": "Zamknięta",
    "address": "Jagiellońska 57/59, 03-301 Warszawa",
    "geolat": 52.2714,
    "geolng": 21.01529
}, {
    "date": "2019-06-29T06:48:06.707Z",
    "contactPerson": "Melba Harris",
    "description": "Veritatis dicta sit omnis aut. Nostrum est hic inventore voluptas est id non vero est. Voluptas aut vero. Molestiae explicabo tempora sed accusamus ipsa delectus repellat consequatur odit. Est possimus accusantium nulla facere. Enim provident vero.",
    "phone": "1-879-490-4292",
    "email": "Crawford5@gmail.com",
    "status": "Do weryfikacji",
    "address": "Skarbka z Gór 116, 03-287 Warszawa",
    "geolat": 52.31666,
    "geolng": 21.05988
}, {
    "date": "2019-06-29T05:27:55.522Z",
    "contactPerson": "Sylvia Hegmann",
    "description": "Necessitatibus adipisci voluptatem possimus dolorem ut sit porro. Quos corrupti necessitatibus illum aut iusto nobis laudantium. Tenetur aliquam saepe. Illum magni sint. Velit beatae sed. Nam illo molestiae omnis in beatae necessitatibus molestiae.",
    "phone": "554-166-0357 x704",
    "email": "Jo54@hotmail.com",
    "status": "Zamknięta",
    "address": "Szafirowa 61, 04-954 Warszawa",
    "geolat": 52.17019,
    "geolng": 21.20019
}, {
    "date": "2019-06-29T09:46:14.755Z",
    "contactPerson": "Stefan Zulauf",
    "description": "Odio sed libero eum aliquid voluptas ut neque est sit. Laborum voluptas sunt deserunt. Eius soluta hic est.",
    "phone": "319.846.0670",
    "email": "Hailey_Kohler45@gmail.com",
    "status": "Do podjęcia",
    "address": "Siedmiogrodzka 11, 01-232 Warszawa",
    "geolat": 52.23107,
    "geolng": 20.96811
}, {
    "date": "2019-06-29T04:26:12.740Z",
    "contactPerson": "Andrew Weissnat",
    "description": "Minima a quia eum nihil voluptas unde est quo debitis. Porro culpa placeat non ut id corporis illo et. Culpa id asperiores atque eaque ipsa omnis et. Qui aliquid aut delectus. Dolor voluptates nemo voluptatem.",
    "phone": "457-564-5068 x978",
    "email": "Jaquan1@gmail.com",
    "status": "W toku",
    "address": "Tokarza 9, 03-379 Warszawa",
    "geolat": 52.29722,
    "geolng": 21.04925
}, {
    "date": "2019-06-28T20:24:54.337Z",
    "contactPerson": "Delmer Bogan",
    "description": "Amet necessitatibus voluptatum porro at consectetur pariatur minus dolor veritatis. Cum error quas impedit culpa. Harum unde accusantium rem illum id assumenda perferendis possimus sit. Aut dolorem suscipit libero adipisci corrupti qui quis. Laboriosam porro non tempore. Nihil quo vel qui repudiandae repellendus saepe minus.",
    "phone": "(519) 596-1240",
    "email": "Darren24@hotmail.com",
    "status": "Zamknięta",
    "address": "Krasińskiego 24, 01-769 Warszawa",
    "geolat": 52.26615,
    "geolng": 20.97498
}, {
    "date": "2019-06-29T03:10:03.466Z",
    "contactPerson": "Valentina Schulist",
    "description": "Deserunt cum aliquid ullam vero velit distinctio aperiam. Nihil consequatur porro voluptates voluptatum in a possimus qui illum. Beatae et dolor commodi.",
    "phone": "1-254-729-0126",
    "email": "Jaida_Pollich52@yahoo.com",
    "status": "Do podjęcia",
    "address": "Lazurowa 75, 01-474 Warszawa",
    "geolat": 52.23165,
    "geolng": 20.89658
}, {
    "date": "2019-06-29T13:12:19.507Z",
    "contactPerson": "Roosevelt Vandervort",
    "description": "Amet sed iure dicta voluptate enim facilis laudantium amet. Minima nihil incidunt velit totam adipisci ab. Vel perferendis magni unde. Asperiores nulla atque aut ad numquam. Saepe occaecati dolorem libero natus aut maxime. Rerum ut tenetur ut molestias sint quo provident.",
    "phone": "1-467-676-1877",
    "email": "Destiney_Larson75@hotmail.com",
    "status": "Zamknięta",
    "address": "Bohaterów 17A, 03-026 Warszawa",
    "geolat": 52.33662,
    "geolng": 20.98941
}, {
    "date": "2019-06-29T03:05:31.190Z",
    "contactPerson": "Annette McCullough",
    "description": "Recusandae quam omnis nihil illo quis ex et nihil ut. Non ea suscipit sit doloremque sunt voluptatem ratione enim doloribus. Cum officiis vero ipsum enim. Qui dolorem eveniet ullam quibusdam qui. Nemo nam magnam hic in omnis consectetur.",
    "phone": "(114) 778-6613",
    "email": "Rosalee.Davis@gmail.com",
    "status": "Do weryfikacji",
    "address": "Braci Załuskich 15, 01-773 Warszawa",
    "geolat": 52.27095,
    "geolng": 20.96696
}, {
    "date": "2019-06-28T18:19:38.929Z",
    "contactPerson": "Hilma Wilderman",
    "description": "Sapiente exercitationem aperiam a reiciendis optio ut esse suscipit unde. Nam voluptatem recusandae delectus sunt quo quaerat qui. Doloremque voluptatibus doloremque beatae et non.",
    "phone": "(825) 561-6567",
    "email": "Cassidy.Borer96@gmail.com",
    "status": "W toku",
    "address": "Książkowa 9F, 03-134 Warszawa",
    "geolat": 52.33232,
    "geolng": 20.94077
}, {
    "date": "2019-06-29T13:08:45.876Z",
    "contactPerson": "Julia Fay",
    "description": "Doloremque similique sit nostrum omnis quidem nulla. Quidem a aliquid culpa ut laboriosam minima consectetur molestiae.",
    "phone": "1-334-060-6671",
    "email": "Delta.Eichmann@gmail.com",
    "status": "W toku",
    "address": "Bohaterów Warszawy 25, 02-495 Warszawa",
    "geolat": 52.19429,
    "geolng": 20.88877
}, {
    "date": "2019-06-28T17:23:32.223Z",
    "contactPerson": "Ottis Bernier",
    "description": "Officia quos est consequuntur architecto et dolorem. Delectus aut autem nostrum. Non alias consequatur voluptas. Quasi et qui dolores quo veritatis nihil totam eos.",
    "phone": "028-405-8943",
    "email": "Mattie4@yahoo.com",
    "status": "Do podjęcia",
    "address": "Wałbrzyska 11, 02-739 Warszawa",
    "geolat": 52.17225,
    "geolng": 21.02471
}, {
    "date": "2019-06-28T22:15:14.010Z",
    "contactPerson": "Wilton Mante",
    "description": "Saepe sunt temporibus est illum odit aut aut dignissimos quis. Sint facilis est sit eum. Excepturi delectus hic earum eaque sint sequi blanditiis. Aut laboriosam quia enim. Autem dolor commodi nisi omnis beatae. Dolore adipisci enim aut animi tempore omnis deserunt ad quia.",
    "phone": "183.546.7487 x8361",
    "email": "Bernhard.Labadie@gmail.com",
    "status": "Zamknięta",
    "address": "Syrokomli 5, 03-335 Warszawa",
    "geolat": 52.28424,
    "geolng": 21.02417
}, {
    "date": "2019-06-29T10:30:06.061Z",
    "contactPerson": "Lavada Armstrong",
    "description": "Quasi qui modi in. Consequatur rerum dolore magni qui natus et a dolorum labore. Tenetur consequatur necessitatibus veritatis. Magnam aspernatur sint provident corrupti vel et in minus. Unde alias blanditiis. Omnis accusamus nulla.",
    "phone": "213.169.7104",
    "email": "Marge.Rippin@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Paderewskiego 130, 04-438 Warszawa",
    "geolat": 52.271,
    "geolng": 21.14997
}, {
    "date": "2019-06-28T20:55:08.987Z",
    "contactPerson": "Kayden Rath",
    "description": "Numquam qui dicta maxime eaque tenetur qui rem. Sunt eum qui qui.",
    "phone": "805.729.8421",
    "email": "Johnathon68@hotmail.com",
    "status": "W toku",
    "address": "Kościeliska 2, 03-614 Warszawa",
    "geolat": 52.2804,
    "geolng": 21.06889
}, {
    "date": "2019-06-29T13:57:28.356Z",
    "contactPerson": "Manuel Stanton",
    "description": "Quisquam repellat qui. Vel voluptates perspiciatis qui.",
    "phone": "213-597-7131 x83959",
    "email": "Jeromy_Cassin46@yahoo.com",
    "status": "Do podjęcia",
    "address": "Wisełki 6, 04-830 Warszawa",
    "geolat": 52.1866,
    "geolng": 21.19075
}, {
    "date": "2019-06-29T04:11:02.864Z",
    "contactPerson": "Malcolm Denesik",
    "description": "Eum aut voluptatem impedit. Est nihil distinctio rerum illum deleniti amet occaecati et est. Dignissimos ad sit.",
    "phone": "118.972.7216 x841",
    "email": "Alysa.Simonis@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Żywnego 18, 02-701 Warszawa",
    "geolat": 52.19235,
    "geolng": 21.02525
}, {
    "date": "2019-06-29T00:44:05.254Z",
    "contactPerson": "Emmitt Hudson",
    "description": "Dicta voluptatum commodi accusamus accusamus cum sed non facilis. Dolor corrupti optio aliquid officia sequi beatae cumque. Quia minima explicabo maxime occaecati molestiae voluptas non. Mollitia nihil laudantium rem repudiandae optio. Et nesciunt repellat assumenda et explicabo.",
    "phone": "167.531.8564 x2447",
    "email": "Russel.Quitzon13@yahoo.com",
    "status": "W toku",
    "address": "Skarbka z Gór 51 A-G, 03-287 Warszawa",
    "geolat": 52.32034,
    "geolng": 21.05718
}, {
    "date": "2019-06-29T08:45:27.907Z",
    "contactPerson": "Naomi Huel",
    "description": "Et et sapiente quibusdam est. Illo molestiae tempore ea omnis. Eaque sit a iste rerum unde architecto praesentium. Modi sed est.",
    "phone": "711-093-6641 x9995",
    "email": "Deshawn_Wolf@yahoo.com",
    "status": "Zamknięta",
    "address": "al. Krakowska 274, 02-210 Warszawa",
    "geolat": 52.19528,
    "geolng": 20.9635
}, {
    "date": "2019-06-29T01:38:32.590Z",
    "contactPerson": "Lane Wisoky",
    "description": "Et eius ipsam molestiae quis omnis. Provident expedita a nisi. Labore et et praesentium reprehenderit debitis quo optio. Consequatur et illum quia.",
    "phone": "1-085-777-8148 x26543",
    "email": "Davin.Langosh68@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Wolska 6, 01-196 Warszawa",
    "geolat": 52.23568,
    "geolng": 20.97953
}, {
    "date": "2019-06-28T21:08:58.570Z",
    "contactPerson": "Lucienne Bednar",
    "description": "Libero aut omnis magni voluptate quaerat neque. Dolorem officiis fugit et eum exercitationem cupiditate in explicabo excepturi. Molestias ut delectus quasi id eos omnis sequi dolorum. Aut ipsum nam accusantium ipsa nihil eligendi. Ut consequatur culpa. Est animi esse ullam.",
    "phone": "1-064-525-2314",
    "email": "Robbie.Rodriguez4@gmail.com",
    "status": "W toku",
    "address": "al. Krakowska 269, 02-133 Warszawa",
    "geolat": 52.19371,
    "geolng": 20.96053
}, {
    "date": "2019-06-29T01:36:17.220Z",
    "contactPerson": "Aida Kertzmann",
    "description": "Qui molestiae quibusdam inventore aliquam voluptas sit officiis. Vel animi dolorem eum asperiores maiores eum. Eos nihil nisi.",
    "phone": "571-671-8555 x3685",
    "email": "Sarah_Sauer@gmail.com",
    "status": "W toku",
    "address": "Kijowska 20, 03-743 Warszawa",
    "geolat": 52.25239,
    "geolng": 21.05101
}, {
    "date": "2019-06-29T05:12:57.229Z",
    "contactPerson": "Weston Vandervort",
    "description": "Temporibus vel quod id placeat voluptatem soluta consequatur aspernatur hic. Dolores iure modi qui quas odit autem. Deserunt incidunt a quibusdam voluptatem aliquid et. Nesciunt eum magni voluptatum. Atque voluptatibus nisi similique unde.",
    "phone": "813.514.8190 x40763",
    "email": "Jonathon_OReilly@hotmail.com",
    "status": "W toku",
    "address": "Romea i Julii 5, 04-349 Warszawa",
    "geolat": 52.24955,
    "geolng": 21.09602
}, {
    "date": "2019-06-28T19:10:06.927Z",
    "contactPerson": "Judd Bahringer",
    "description": "Ratione a perferendis repudiandae sit culpa. Qui id possimus consequatur quo impedit.",
    "phone": "521.481.4705",
    "email": "Else.Quigley@yahoo.com",
    "status": "W toku",
    "address": "Lewandów 48, 03-299 Warszawa",
    "geolat": 52.32086,
    "geolng": 21.07618
}, {
    "date": "2019-06-29T02:58:40.054Z",
    "contactPerson": "Edgar Quitzon",
    "description": "Et impedit sed itaque et voluptas repudiandae. Quia sit et laboriosam deleniti et laborum. Ut occaecati rerum perspiciatis officia aliquid adipisci. Consequatur qui autem sequi fugiat.",
    "phone": "582-643-0846",
    "email": "Tre_Farrell@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Warszawska 58C, 02-496 Warszawa",
    "geolat": 52.19511,
    "geolng": 20.86237
}, {
    "date": "2019-06-29T01:27:25.150Z",
    "contactPerson": "Alisha Heaney",
    "description": "Architecto eius ratione autem. Aperiam saepe minus maxime. Fugiat a quis sit in quibusdam fuga eos facilis. Omnis saepe unde qui cum voluptatum dolor excepturi asperiores cum. Harum consequatur ut numquam. Accusamus iste repellat vero.",
    "phone": "892-908-8033 x4034",
    "email": "Florencio_Runolfsson67@yahoo.com",
    "status": "Do podjęcia",
    "address": "Stanisława Wojciechowskiego 18, 02-495 Warszawa",
    "geolat": 52.19636,
    "geolng": 20.87874
}, {
    "date": "2019-06-29T14:02:51.469Z",
    "contactPerson": "Abbie Corkery",
    "description": "Perspiciatis ab quas laudantium doloribus. Voluptas quos et. Corrupti expedita aliquid ut dolores deserunt aut voluptates sit sunt. Voluptate vitae vel maxime iure at exercitationem. Ut dolor corrupti deleniti consectetur occaecati quas sit et facilis.",
    "phone": "016-597-2436",
    "email": "Jermey32@yahoo.com",
    "status": "Zamknięta",
    "address": "Korkowa 89, 04-519 Warszawa",
    "geolat": 52.23766,
    "geolng": 21.14385
}, {
    "date": "2019-06-28T21:15:56.271Z",
    "contactPerson": "Clemens Ernser",
    "description": "Incidunt id esse et quidem in. Repudiandae quas facere qui. Et sequi earum exercitationem. Odit qui temporibus quisquam quibusdam est sed. Et velit voluptatibus.",
    "phone": "620-557-2322 x885",
    "email": "Alberta.Kunze67@yahoo.com",
    "status": "Do podjęcia",
    "address": "Żeromskiego 27, 01-882 Warszawa",
    "geolat": 52.27657,
    "geolng": 20.94887
}, {
    "date": "2019-06-29T14:24:15.691Z",
    "contactPerson": "Dominic Predovic",
    "description": "Nulla omnis quisquam qui illum veniam ullam reprehenderit. Magnam tenetur explicabo illo. Vel aperiam deserunt quaerat adipisci rem ullam. Totam sint corporis est natus harum placeat.",
    "phone": "(248) 001-7813",
    "email": "Beau_Schamberger@hotmail.com",
    "status": "Zamknięta",
    "address": "Trakt Brzeski 97, 05-077 Warszawa",
    "geolat": 52.22348,
    "geolng": 21.24441
}, {
    "date": "2019-06-29T01:29:19.113Z",
    "contactPerson": "Natalie Barton",
    "description": "Dolor non consequatur consequatur asperiores sunt magni et. Quo deserunt ipsam voluptas sed. Cumque optio suscipit tempore rerum unde impedit.",
    "phone": "(528) 020-0974 x86496",
    "email": "Betsy92@yahoo.com",
    "status": "Zamknięta",
    "address": "Radzymińska 50, 03-751 Warszawa",
    "geolat": 52.2595,
    "geolng": 21.0532
}, {
    "date": "2019-06-29T14:13:26.951Z",
    "contactPerson": "Javonte Goyette",
    "description": "Dolor atque sint maxime odit totam incidunt. Et omnis voluptatem. Temporibus voluptatem aut enim consequatur maxime iure voluptatem.",
    "phone": "1-622-730-6425",
    "email": "Jany_Rohan@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Jurajska 1, 02-699 Warszawa",
    "geolat": 52.16319,
    "geolng": 20.99276
}, {
    "date": "2019-06-28T21:40:02.956Z",
    "contactPerson": "Jovanny Stokes",
    "description": "Itaque et inventore nostrum sed et autem. Iste non nesciunt dolorum et autem delectus consequuntur cupiditate quam. Rerum ea id dolores mollitia ut omnis odio sed. Odit cumque cum voluptas qui quasi commodi. Quas sint doloribus eius.",
    "phone": "504-903-7665 x621",
    "email": "Shannon61@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Pasaż Stokłosy 11, 02-787 Warszawa",
    "geolat": 52.1615,
    "geolng": 21.029
}, {
    "date": "2019-06-29T07:03:49.650Z",
    "contactPerson": "Alexys Conn",
    "description": "Aut excepturi ad. Natus facere sit vel velit reiciendis doloremque. Quod inventore sit ipsam aperiam aut rerum dolorem. Voluptatibus consequatur omnis commodi laboriosam ipsam iusto pariatur quo id. Enim quasi aliquam et laudantium vitae inventore non.",
    "phone": "994.728.6770 x923",
    "email": "Therese12@yahoo.com",
    "status": "Zamknięta",
    "address": "Fioletowa 16, 03-604 Warszawa",
    "geolat": 52.28353,
    "geolng": 21.05585
}, {
    "date": "2019-06-28T22:25:29.845Z",
    "contactPerson": "Verner Yundt",
    "description": "Recusandae autem saepe vel. Eum soluta necessitatibus incidunt sed perferendis officia accusantium vitae. Sed in dolor aut error harum quae ut corporis porro. Amet tempora nisi ea voluptatem rem quis aspernatur. Voluptate nulla velit.",
    "phone": "1-732-170-3744 x67597",
    "email": "Rollin.Emard16@hotmail.com",
    "status": "W toku",
    "address": "Ciszewskiego 15, 02-777 Warszawa",
    "geolat": 52.15253,
    "geolng": 21.0419
}, {
    "date": "2019-06-28T23:03:52.253Z",
    "contactPerson": "Era Daniel",
    "description": "Consequatur cumque veniam. Nulla quas explicabo at libero consequatur sed minima dolores. Aut sunt sunt excepturi veniam perspiciatis. Quo molestiae aliquid aut sit provident omnis possimus eaque illum.",
    "phone": "101-849-8583 x38646",
    "email": "Grayce_Feil39@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Jubilerska 1-3, 04-186 Warszawa",
    "geolat": 52.23456,
    "geolng": 21.11929
}, {
    "date": "2019-06-28T22:06:25.143Z",
    "contactPerson": "Clair Reichert",
    "description": "Quis ut dolor et maxime et et. Et id esse. Minus rerum ea. Nisi dolorem ab consequuntur.",
    "phone": "148.387.9509 x64951",
    "email": "Jaquan.Friesen@gmail.com",
    "status": "W toku",
    "address": "Rozłogi 8, 01-310 Warszawa",
    "geolat": 52.22399,
    "geolng": 20.9009
}, {
    "date": "2019-06-29T07:20:56.007Z",
    "contactPerson": "Yadira Russel",
    "description": "Necessitatibus eum id est. Aut ut ea repellendus. Officiis magni aut et molestias.",
    "phone": "(376) 528-4400",
    "email": "Layla12@gmail.com",
    "status": "Zamknięta",
    "address": "Ćmielowska 2, 03-127 Warszawa",
    "geolat": 52.3169,
    "geolng": 20.95152
}, {
    "date": "2019-06-28T22:15:24.854Z",
    "contactPerson": "Jazmyne Bauch",
    "description": "Est dolores omnis odit quas laudantium natus quia minima nihil. Ex ut aut quia soluta et. Voluptates id dolorem ducimus quaerat itaque tempore officia consequuntur.",
    "phone": "466.211.8183 x215",
    "email": "Vito_Pagac4@hotmail.com",
    "status": "Do podjęcia",
    "address": "Syrokomli 5, 03-335 Warszawa",
    "geolat": 52.28434,
    "geolng": 21.02387
}, {
    "date": "2019-06-29T02:16:54.724Z",
    "contactPerson": "Annalise Cormier",
    "description": "Sapiente porro nam qui voluptas repellat esse accusamus. Ad non quidem. Qui eligendi iure est.",
    "phone": "105-050-0355 x902",
    "email": "Lessie_Aufderhar@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Międzynarodowa 42, 03-938 Warszawa",
    "geolat": 52.23325,
    "geolng": 21.06706
}, {
    "date": "2019-06-29T04:59:04.352Z",
    "contactPerson": "Gudrun Medhurst",
    "description": "Error eum iure eligendi necessitatibus. Autem voluptatibus autem consequatur consequatur iusto. Vel et nemo ab ratione sapiente. Repellendus est ratione nulla eum ducimus rerum.",
    "phone": "373.038.9025",
    "email": "Mackenzie62@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Puławska 427, 02-801 Warszawa",
    "geolat": 52.14179,
    "geolng": 21.0242
}, {
    "date": "2019-06-28T16:42:10.183Z",
    "contactPerson": "Dino Jakubowski",
    "description": "At aut placeat. Ea sint expedita. Quidem sit id sed illum voluptatem. Ipsam quaerat consequatur qui id sit nihil. Quia delectus blanditiis voluptatem praesentium qui inventore fugiat eaque quaerat. Eos in praesentium laudantium et facilis commodi.",
    "phone": "526.399.2050",
    "email": "Santa23@hotmail.com",
    "status": "Do podjęcia",
    "address": "Wólczyńska 299, 01-908 Warszawa",
    "geolat": 52.29789,
    "geolng": 20.88643
}, {
    "date": "2019-06-28T19:07:54.903Z",
    "contactPerson": "Hal Rowe",
    "description": "Quos quos nostrum labore voluptas cumque aperiam vel aut. Velit dolores sit et consequuntur commodi quis neque quisquam consectetur. Tempore doloribus amet eius enim delectus vitae eaque.",
    "phone": "056-875-7080 x7449",
    "email": "David_McClure@yahoo.com",
    "status": "Zamknięta",
    "address": "Skoroszewska 5C, 02-495 Warszawa",
    "geolat": 52.18827,
    "geolng": 20.89821
}, {
    "date": "2019-06-29T11:29:28.049Z",
    "contactPerson": "Raegan Yundt",
    "description": "Illo harum et architecto dignissimos. Voluptatem non vel nam illum quo. Voluptas omnis sapiente sunt iure veritatis soluta voluptatem voluptatum. Et atque ut quaerat ducimus dolorem. Eveniet iusto alias.",
    "phone": "829.133.7051 x996",
    "email": "Lilly.Collins88@yahoo.com",
    "status": "Zamknięta",
    "address": "al. Krakowska 103-105, 02-180 Warszawa",
    "geolat": 52.1766,
    "geolng": 20.94317
}, {
    "date": "2019-06-28T23:57:39.174Z",
    "contactPerson": "Virginie Luettgen",
    "description": "Sapiente iure sed non vero delectus nisi quia placeat. Aspernatur consequuntur perspiciatis qui ea culpa quo sed placeat voluptatum. Fuga est nesciunt aut quia est. Magnam temporibus adipisci distinctio facere. Voluptate vitae ut dicta sit sunt et qui aut.",
    "phone": "826-552-9431 x3502",
    "email": "Neoma.Schoen@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Grójecka 95, 02-101 Warszawa",
    "geolat": 52.2086,
    "geolng": 20.97714
}, {
    "date": "2019-06-28T20:42:54.652Z",
    "contactPerson": "Earline Hodkiewicz",
    "description": "Molestiae earum quia qui et. Odit sint nihil magni et. Ducimus facilis est eum aut rerum id. Quo beatae temporibus. Ut optio est veritatis libero.",
    "phone": "921-100-3078",
    "email": "Minerva.Johns55@yahoo.com",
    "status": "Zamknięta",
    "address": "Modlińska 144, 03-186 Warszawa",
    "geolat": 52.31518,
    "geolng": 20.97752
}, {
    "date": "2019-06-29T10:42:02.646Z",
    "contactPerson": "Freddie Schmidt",
    "description": "Illum exercitationem distinctio beatae ipsa commodi iure pariatur suscipit. Reiciendis assumenda possimus est odit deserunt expedita. Corrupti assumenda sint magnam deserunt voluptatibus voluptatem officia et debitis. Culpa quis molestiae fuga. Et voluptatem quia minus quia sequi porro rerum quasi. In dicta eius ipsa et vero quam animi.",
    "phone": "073-766-5647 x119",
    "email": "Daija_Schaefer@yahoo.com",
    "status": "Zamknięta",
    "address": "Al. Jerozolimskie 144C, 02-305 Warszawa",
    "geolat": 52.21472,
    "geolng": 20.95547
}, {
    "date": "2019-06-29T15:35:04.401Z",
    "contactPerson": "Mittie Purdy",
    "description": "Libero ducimus culpa quisquam. Sequi blanditiis vel. Blanditiis nesciunt quia numquam quo tempore magnam quo qui. Ut aut et nihil qui provident quibusdam dolorum autem et. Adipisci eos aut.",
    "phone": "(641) 377-3650",
    "email": "Alexanne.Hahn96@gmail.com",
    "status": "Do podjęcia",
    "address": "Al. Jerozolimskie 56, 00-803 Warszawa",
    "geolat": 52.22777,
    "geolng": 21.00074
}, {
    "date": "2019-06-28T16:55:29.363Z",
    "contactPerson": "Gretchen Johnston",
    "description": "Sint possimus sint iure vel aut molestiae earum suscipit. Fugiat ad temporibus reiciendis consequatur. Ut vitae sequi quia soluta eius repellat. Neque esse aut et voluptatem accusamus.",
    "phone": "984.113.9515",
    "email": "Genesis.Ernser@hotmail.com",
    "status": "Do podjęcia",
    "address": "Wrocławska 8, 01-493 Warszawa",
    "geolat": 52.24758,
    "geolng": 20.91627
}, {
    "date": "2019-06-29T09:42:42.161Z",
    "contactPerson": "Michel Barrows",
    "description": "Dolore suscipit libero. Aliquam qui animi iure ducimus dolores ea. Velit natus ducimus non. Sunt quia et velit. Illo eos voluptatem esse dignissimos. Maiores atque esse quia libero alias.",
    "phone": "760.623.9216",
    "email": "Alanis46@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Al. Jerozolimskie 136, 02-305 Warszawa",
    "geolat": 52.22077,
    "geolng": 20.97213
}, {
    "date": "2019-06-29T07:12:03.792Z",
    "contactPerson": "Gregorio Schimmel",
    "description": "Autem rem quod. Delectus necessitatibus ipsam ipsam cupiditate cum. Qui sed laudantium illum rem earum minima mollitia. Mollitia eaque ut.",
    "phone": "1-113-132-9910 x49309",
    "email": "Queenie_Von@yahoo.com",
    "status": "Zamknięta",
    "address": "Abrahama 1, 03-982 Warszawa",
    "geolat": 52.22702,
    "geolng": 21.08337
}, {
    "date": "2019-06-28T19:37:44.747Z",
    "contactPerson": "Erika Kris",
    "description": "Distinctio sunt rerum laboriosam. A recusandae vel reprehenderit rem perspiciatis. Facilis ab temporibus velit dolorem officia est veritatis est. Quidem voluptates eligendi provident hic blanditiis iusto.",
    "phone": "1-538-055-1025",
    "email": "Lonny.Sawayn@hotmail.com",
    "status": "Do podjęcia",
    "address": "Augustówka 9, 02-981 Warszawa",
    "geolat": 52.18293,
    "geolng": 21.07729
}, {
    "date": "2019-06-29T01:32:41.552Z",
    "contactPerson": "Cody Deckow",
    "description": "Impedit odit temporibus occaecati. Et magnam est nam facilis et itaque.",
    "phone": "427-169-8042 x24274",
    "email": "Henriette_Schaden44@gmail.com",
    "status": "Do podjęcia",
    "address": "Lazurowa 71, 01-314 Warszawa",
    "geolat": 52.22993,
    "geolng": 20.89593
}, {
    "date": "2019-06-28T16:19:58.897Z",
    "contactPerson": "Tyson McClure",
    "description": "Repudiandae est delectus. Ea consectetur illo asperiores non.",
    "phone": "(866) 304-8429",
    "email": "Christelle_Hettinger37@hotmail.com",
    "status": "Zamknięta",
    "address": "Przedpole 1A, 02-241 Warszawa",
    "geolat": 52.19125,
    "geolng": 20.94
}, {
    "date": "2019-06-29T00:37:44.286Z",
    "contactPerson": "Brice Grimes",
    "description": "Omnis est temporibus fugit tenetur quaerat sit. Delectus similique doloribus eum. Repudiandae nulla tempora deserunt laborum tempore voluptatem a qui.",
    "phone": "1-486-480-6702 x673",
    "email": "Mathew87@yahoo.com",
    "status": "Do podjęcia",
    "address": "Al. Stanów Zjednoczonych 72, 04-036 Warszawa",
    "geolat": 52.24385,
    "geolng": 21.0853
}, {
    "date": "2019-06-29T13:39:12.246Z",
    "contactPerson": "Jackie Abshire",
    "description": "Aspernatur ducimus saepe exercitationem nulla ut assumenda voluptatem molestiae. Unde est accusantium ut velit ut ratione ipsum. Assumenda impedit magni voluptas minima. Molestias iste est architecto voluptate beatae cumque possimus. Sunt facilis quasi omnis ab consequuntur facere suscipit ab. Iusto iusto voluptas aut omnis magni consequatur reiciendis.",
    "phone": "240.732.6060 x624",
    "email": "Jayne.Willms75@gmail.com",
    "status": "Do weryfikacji",
    "address": "Branickiego 18, 02-972 Warszawa",
    "geolat": 52.15578,
    "geolng": 21.07291
}, {
    "date": "2019-06-29T05:27:10.255Z",
    "contactPerson": "Kurt Shanahan",
    "description": "Et soluta aliquam optio et qui dolorum rerum. Minus ab omnis sed iusto ut recusandae. Eveniet necessitatibus enim iste repellat. Assumenda velit quibusdam. Minus quibusdam officia ipsum et autem a nobis consequatur. Aperiam et atque aliquid architecto nihil iste.",
    "phone": "198-198-6124 x597",
    "email": "Jordan.Hand40@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Zaściankowa 6, 02-989 Warszawa",
    "geolat": 52.17001,
    "geolng": 21.1187
}, {
    "date": "2019-06-29T04:08:16.183Z",
    "contactPerson": "Sim MacGyver",
    "description": "Modi ipsum delectus est quidem. Distinctio accusantium praesentium. Officia distinctio eaque consequatur eius reiciendis sequi. Et quaerat voluptas temporibus quia quis. Non est animi tempora assumenda occaecati vel. Ullam nam pariatur ut expedita similique maxime voluptas fuga molestiae.",
    "phone": "(960) 197-3499 x653",
    "email": "Alexandria_Wunsch@gmail.com",
    "status": "Zamknięta",
    "address": "Wrocławska 27, 01-493 Warszawa",
    "geolat": 52.2579,
    "geolng": 20.91791
}, {
    "date": "2019-06-29T16:04:14.546Z",
    "contactPerson": "Antone Johns",
    "description": "Nisi eaque quam sunt dolores. Est ut consequatur numquam nam corporis dolorem possimus. Quia harum id minus. Ad magnam numquam nostrum repudiandae beatae.",
    "phone": "1-225-742-0414 x54195",
    "email": "Jewell.Moore@gmail.com",
    "status": "W toku",
    "address": "Marynarska 12, 02-674 Warszawa",
    "geolat": 52.18068,
    "geolng": 20.9932
}, {
    "date": "2019-06-28T23:30:21.311Z",
    "contactPerson": "Bobby Denesik",
    "description": "Expedita soluta earum facilis. Omnis rerum harum qui voluptatem porro alias vitae perspiciatis. Eum incidunt odio impedit rem totam fugiat. Molestiae et vel placeat sequi sed vel. Culpa officia autem repellat aspernatur sunt et. Quae accusantium optio.",
    "phone": "1-560-024-1166 x591",
    "email": "Kenyatta_Daniel6@gmail.com",
    "status": "Zamknięta",
    "address": "Równoległa 1, 02-235 Warszawa",
    "geolat": 52.2007,
    "geolng": 20.9447
}, {
    "date": "2019-06-29T04:26:46.627Z",
    "contactPerson": "Clair Yost",
    "description": "Vel sint amet. Alias harum quaerat doloremque doloribus maxime odio quaerat perspiciatis hic.",
    "phone": "170-304-4098",
    "email": "Jaime36@yahoo.com",
    "status": "Do podjęcia",
    "address": "Górczewska 69/73, 01-401 Warszawa",
    "geolat": 52.23772,
    "geolng": 20.95331
}, {
    "date": "2019-06-29T04:35:40.323Z",
    "contactPerson": "Eddie Krajcik",
    "description": "Sed vel et sit consequuntur sed. Dolor dolor voluptatem at a sunt. Facilis voluptatum quisquam qui ipsum et quis.",
    "phone": "1-742-468-7292 x784",
    "email": "Stevie63@hotmail.com",
    "status": "W toku",
    "address": "Apartamentowa 2, 02-495 Warszawa",
    "geolat": 52.19383,
    "geolng": 20.90841
}, {
    "date": "2019-06-28T23:02:33.443Z",
    "contactPerson": "Saul Thompson",
    "description": "Eveniet impedit a eum illo aut cum dolores illum quaerat. Ut nostrum excepturi aut nesciunt quis blanditiis reprehenderit. Id sit in vel neque dolor. Dolores officiis aut. Nesciunt et voluptatum eos aut officiis quo voluptatem.",
    "phone": "113.204.5436 x76027",
    "email": "Jillian.Senger88@gmail.com",
    "status": "Zamknięta",
    "address": "Niska 18, 01-041 Warszawa",
    "geolat": 52.2499,
    "geolng": 20.9836
}, {
    "date": "2019-06-28T19:23:53.403Z",
    "contactPerson": "Eli Gusikowski",
    "description": "Nihil voluptatem est autem quisquam minima rerum culpa assumenda consectetur. Amet eos in aut ratione deserunt. Nulla aut est sequi. Unde exercitationem odit a et mollitia nostrum. Unde repudiandae recusandae consequatur.",
    "phone": "1-962-772-9905",
    "email": "Darby44@yahoo.com",
    "status": "W toku",
    "address": "Inflancka 8, 00-189 Warszawa",
    "geolat": 52.25471,
    "geolng": 20.98922
}, {
    "date": "2019-06-28T17:51:33.710Z",
    "contactPerson": "Braeden Huel",
    "description": "Delectus dolorem et vel est quis quasi. Earum tempore ea. Rerum inventore quae hic voluptatem aut consectetur. Nihil cumque qui. At consectetur recusandae.",
    "phone": "(418) 989-5807 x07444",
    "email": "Catherine.Corwin48@hotmail.com",
    "status": "Zamknięta",
    "address": "Wąwozowa 31, 02-798 Warszawa",
    "geolat": 52.13091,
    "geolng": 21.05776
}, {
    "date": "2019-06-29T10:49:35.766Z",
    "contactPerson": "King Morissette",
    "description": "Commodi ducimus voluptatem odio ut architecto quisquam delectus omnis. Eaque alias eveniet cum corrupti inventore non reprehenderit aut sequi. Non sapiente et quae. Necessitatibus dignissimos tempora laborum consequatur amet aut nihil. Dolor veniam sunt est eum tempora nobis rerum placeat.",
    "phone": "(259) 996-7811",
    "email": "Jaqueline64@gmail.com",
    "status": "Zamknięta",
    "address": "Żurawia 47/49, 00-680 Warszawa",
    "geolat": 52.22743,
    "geolng": 21.01075
}, {
    "date": "2019-06-29T13:13:05.387Z",
    "contactPerson": "Jerrold Wisoky",
    "description": "Autem delectus a id soluta et fuga nam minima. Vero laborum facilis quia repellendus.",
    "phone": "980.318.8538",
    "email": "Lyric_Luettgen93@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Dobra 12, 00-384 Warszawa",
    "geolat": 52.23709,
    "geolng": 21.03015
}, {
    "date": "2019-06-28T21:41:24.454Z",
    "contactPerson": "Reggie O'Reilly",
    "description": "Ratione fugit doloribus debitis nostrum libero blanditiis occaecati nam molestias. Id possimus consequatur tempora quo debitis quibusdam harum voluptates ut. Id deserunt ut ratione sint dicta culpa soluta et velit.",
    "phone": "(169) 046-1528 x000",
    "email": "Eldon_Fisher@gmail.com",
    "status": "Do weryfikacji",
    "address": "Szeligowska 3, 01-319 Warszawa",
    "geolat": 52.21763,
    "geolng": 20.89944
}, {
    "date": "2019-06-29T06:33:02.910Z",
    "contactPerson": "Vickie Upton",
    "description": "Qui facilis repudiandae consequuntur laboriosam qui aliquid. Aliquid cumque excepturi ut. Consequatur eos et nisi impedit libero est. Id dicta neque aspernatur iste et at pariatur ut vero. Voluptatibus blanditiis consequuntur illum.",
    "phone": "565-550-7022 x39259",
    "email": "Patricia.Dickens@gmail.com",
    "status": "W toku",
    "address": "Pory 78, 02-757 Warszawa",
    "geolat": 52.1898,
    "geolng": 21.04472
}, {
    "date": "2019-06-28T23:00:18.313Z",
    "contactPerson": "Trudie Dietrich",
    "description": "Est vitae hic architecto quia neque. Nostrum libero iste molestiae aut dolor. Rerum qui commodi ut.",
    "phone": "(034) 776-2160 x435",
    "email": "Carmel93@hotmail.com",
    "status": "Zamknięta",
    "address": "Płochocińska 201, 03-044 Warszawa",
    "geolat": 52.36473,
    "geolng": 21.0273
}, {
    "date": "2019-06-28T22:15:05.271Z",
    "contactPerson": "Federico Weissnat",
    "description": "Fugiat suscipit eos fugiat. Ratione consequatur similique. Rerum optio qui libero libero pariatur esse nostrum modi.",
    "phone": "946.689.6833 x45531",
    "email": "Melissa73@gmail.com",
    "status": "Do podjęcia",
    "address": "17 Stycznia 45, 02-146 Warszawa",
    "geolat": 52.18305,
    "geolng": 20.96539
}, {
    "date": "2019-06-28T18:06:41.877Z",
    "contactPerson": "Oral Hintz",
    "description": "Et harum quas nostrum voluptatem. Dolorem ratione nihil tempora et ipsum aut qui omnis. Repellat omnis fugit omnis. Fuga ut earum. Mollitia possimus quia distinctio deserunt repellat provident nesciunt est.",
    "phone": "(027) 074-5197 x60889",
    "email": "Jordi.Moen8@hotmail.com",
    "status": "Do podjęcia",
    "address": "Meksykańska 5, 03-948 Warszawa",
    "geolat": 52.23081,
    "geolng": 21.05886
}, {
    "date": "2019-06-29T13:36:05.364Z",
    "contactPerson": "Delpha Weber",
    "description": "Dolores eos dolorum commodi explicabo. Odio illum asperiores culpa excepturi nesciunt ut quia et hic. Accusantium laboriosam sed. Quia iste dolorem nulla dolorem iste eaque dolor totam. Minus cumque voluptates qui dolor voluptatibus est necessitatibus dolores odit.",
    "phone": "278.666.0850",
    "email": "Rico92@gmail.com",
    "status": "Do weryfikacji",
    "address": "Bitwy Warszawskiej 1920 19, 02-366 Warszawa",
    "geolat": 52.21467,
    "geolng": 20.96517
}, {
    "date": "2019-06-29T14:32:19.119Z",
    "contactPerson": "Tanya Stroman",
    "description": "Nesciunt et exercitationem itaque vitae qui est sed recusandae deserunt. Est beatae cumque quam praesentium omnis ut. Ut aperiam soluta eum et laborum qui numquam illo quas.",
    "phone": "263.283.3513 x2548",
    "email": "Josianne_Konopelski@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Grójecka 125, 02-124 Warszawa",
    "geolat": 52.20094,
    "geolng": 20.96845
}, {
    "date": "2019-06-29T14:35:52.746Z",
    "contactPerson": "Kathleen Goldner",
    "description": "Mollitia dicta dolore consequuntur impedit iure in. Deserunt excepturi id et mollitia veritatis consectetur et.",
    "phone": "1-637-154-9038 x447",
    "email": "Jamey_Mayer60@hotmail.com",
    "status": "W toku",
    "address": "Wojciechowskiego 41, 02-495 Warszawa",
    "geolat": 52.19416,
    "geolng": 20.86829
}, {
    "date": "2019-06-29T02:30:21.410Z",
    "contactPerson": "Maryam Bailey",
    "description": "Occaecati mollitia similique hic et ea sunt eum iure dolor. Necessitatibus incidunt corporis aperiam et recusandae. Corporis impedit dolorum voluptatem porro tempora eos fuga eligendi. Omnis perferendis a est sed.",
    "phone": "792-704-5256 x3166",
    "email": "Kayla.Roob@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Puławska 86, 02-603 Warszawa",
    "geolat": 52.19851,
    "geolng": 21.02327
}, {
    "date": "2019-06-29T02:19:07.471Z",
    "contactPerson": "Hector Kub",
    "description": "Magni consequatur nisi repellendus tenetur vero. Sunt nisi architecto. Eum sed rem et laborum pariatur quibusdam architecto aliquam. Rem et omnis. Reprehenderit est dolore officia dolores.",
    "phone": "(618) 969-3478 x69793",
    "email": "Burnice_Heaney@yahoo.com",
    "status": "W toku",
    "address": "Kleszczowa 18, 02-485 Warszawa",
    "geolat": 52.19873,
    "geolng": 20.91812
}, {
    "date": "2019-06-29T12:31:20.296Z",
    "contactPerson": "Judah Moore",
    "description": "Qui dolore optio aut cupiditate officiis voluptas. Enim laudantium optio sint. Distinctio delectus in beatae corporis rerum. Quis ipsam et itaque consequatur natus.",
    "phone": "812.034.7923 x7190",
    "email": "Gilberto.Kunde@hotmail.com",
    "status": "Do podjęcia",
    "address": "Woronicza 19, 02-560 Warszawa",
    "geolat": 52.18781,
    "geolng": 21.00632
}, {
    "date": "2019-06-28T21:31:43.862Z",
    "contactPerson": "Hillary Shanahan",
    "description": "Aut rerum ut laboriosam numquam qui iure. Nisi voluptas suscipit. Voluptas aut molestiae minima commodi in ex voluptatem expedita ratione. Aut natus animi libero consequatur omnis.",
    "phone": "1-006-956-6298 x1837",
    "email": "Orion.Wisoky@hotmail.com",
    "status": "Do podjęcia",
    "address": "Ostródzka 119, 03-289 Warszawa",
    "geolat": 52.31764,
    "geolng": 21.05028
}, {
    "date": "2019-06-29T07:49:27.651Z",
    "contactPerson": "Izaiah Walker",
    "description": "Perferendis perferendis id accusantium veritatis explicabo dicta. Tempore fugit numquam eos molestias. Qui tempora cum. Aut optio qui eum sit aut.",
    "phone": "(302) 312-6762 x351",
    "email": "Lavonne_Thompson@gmail.com",
    "status": "W toku",
    "address": "Gwiaździsta 29, 01-651 Warszawa",
    "geolat": 52.28536,
    "geolng": 20.97822
}, {
    "date": "2019-06-29T14:37:52.906Z",
    "contactPerson": "Samara Bradtke",
    "description": "Aspernatur vel quas corrupti dignissimos adipisci tempora corrupti ut ea. Molestias cumque rem rerum. Quia quos est ut. Eaque voluptatibus distinctio veniam saepe qui. Inventore occaecati qui eos illo distinctio omnis dolores dolorem. Odit officiis in esse.",
    "phone": "765-168-2509",
    "email": "Isabell.Hegmann@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Migdałowa 4, 02-796 Warszawa",
    "geolat": 52.1465,
    "geolng": 21.05808
}, {
    "date": "2019-06-29T08:04:55.369Z",
    "contactPerson": "Angela Bergnaum",
    "description": "Expedita animi possimus. Velit corporis ea voluptatem veniam autem minima numquam est. Tenetur consequatur voluptatem nostrum eos blanditiis. Fugit qui aut dicta vel autem. Id facilis assumenda. Labore ea reiciendis vitae nostrum quo.",
    "phone": "576.838.3767 x521",
    "email": "Leonel.Hauck33@gmail.com",
    "status": "Zamknięta",
    "address": "Wrzeciono 14A, 01-961 Warszawa",
    "geolat": 52.29055,
    "geolng": 20.93748
}, {
    "date": "2019-06-29T05:07:09.020Z",
    "contactPerson": "Federico Senger",
    "description": "Asperiores eaque minima rem. Quisquam vel qui sed dolore. Ab et sint rerum nemo voluptas. Repellat consectetur et blanditiis animi omnis atque repudiandae fuga harum.",
    "phone": "1-555-872-2954 x76909",
    "email": "Jackson.Rippin58@hotmail.com",
    "status": "Zamknięta",
    "address": "Światowida 18, 03-144 Warszawa",
    "geolat": 52.31966,
    "geolng": 20.96591
}, {
    "date": "2019-06-28T22:00:39.320Z",
    "contactPerson": "Salvador Vandervort",
    "description": "In eos quisquam. Ratione vitae minima.",
    "phone": "1-158-256-8688 x56845",
    "email": "Barry_Hagenes93@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Patriotów 172, 04-832 Warszawa",
    "geolat": 52.18569,
    "geolng": 21.18854
}, {
    "date": "2019-06-29T06:14:06.313Z",
    "contactPerson": "Reta Moore",
    "description": "Sit eum dicta nemo molestiae dolores quos. Rem perspiciatis iste et dolorum architecto unde rem nihil mollitia.",
    "phone": "607.588.2727 x14691",
    "email": "Reyna.Schmitt@hotmail.com",
    "status": "Do podjęcia",
    "address": "Cybernetyki 10, 02-677 Warszawa",
    "geolat": 52.17756,
    "geolng": 20.99071
}, {
    "date": "2019-06-29T14:37:02.044Z",
    "contactPerson": "Laney Osinski",
    "description": "Dicta repellat est odio quas quia laboriosam accusamus voluptates ipsa. Quia aliquid voluptatibus nobis et architecto occaecati minima et.",
    "phone": "591-565-3709 x243",
    "email": "Alison_Herzog35@yahoo.com",
    "status": "Do podjęcia",
    "address": "Siodlarska 5, 01-461 Warszawa",
    "geolat": 52.24287,
    "geolng": 20.91783
}, {
    "date": "2019-06-29T14:15:58.865Z",
    "contactPerson": "Karlie Schneider",
    "description": "Velit architecto mollitia vitae fugiat. Corrupti aut nulla. Qui quia autem et autem recusandae dolore cum velit voluptatem. Et recusandae sint deserunt voluptatibus.",
    "phone": "333-015-5392",
    "email": "Graham2@yahoo.com",
    "status": "Zamknięta",
    "address": "Szmaragdowa 16, 03-683 Warszawa",
    "geolat": 52.28113,
    "geolng": 21.07865
}, {
    "date": "2019-06-28T23:08:08.213Z",
    "contactPerson": "Macie Blanda",
    "description": "Dolores pariatur nisi. Minima vel aliquid nesciunt porro neque maxime. Voluptas porro aperiam dignissimos iusto aut labore. Ex atque quod esse officiis nesciunt commodi eum soluta. Voluptas aut omnis vero exercitationem occaecati. Ut eum sit iste pariatur.",
    "phone": "(996) 727-4496",
    "email": "Oma.Friesen97@yahoo.com",
    "status": "W toku",
    "address": "pl. Europejski 1, 00-844 Warszawa",
    "geolat": 52.23226,
    "geolng": 20.98427
}, {
    "date": "2019-06-29T00:40:16.377Z",
    "contactPerson": "Katrina Hodkiewicz",
    "description": "Dolor et adipisci ea ullam velit. In dicta suscipit. Quia reiciendis nisi vel dolores quas assumenda. Delectus itaque autem sapiente ab consequuntur. Rerum in hic.",
    "phone": "1-378-271-8626 x322",
    "email": "Axel.Olson@yahoo.com",
    "status": "Zamknięta",
    "address": "Włodarzewska 58 C, 02-384 Warszawa",
    "geolat": 52.20239,
    "geolng": 20.9552
}, {
    "date": "2019-06-29T11:45:58.204Z",
    "contactPerson": "Stewart Harris",
    "description": "Repellat consequatur deleniti. Culpa commodi velit soluta qui aut. Exercitationem velit dolores autem facere natus atque. Deleniti sit et et vel laborum vero qui saepe cum.",
    "phone": "(255) 283-4734 x87634",
    "email": "Percy20@gmail.com",
    "status": "Do podjęcia",
    "address": "Wileńska 14, 03-414 Warszawa",
    "geolat": 52.25877,
    "geolng": 21.04237
}, {
    "date": "2019-06-29T11:06:34.488Z",
    "contactPerson": "Brennon Bashirian",
    "description": "Dolorum illum harum amet omnis dicta perspiciatis tenetur. Consequuntur maxime dolores voluptas quo eum non natus voluptatem amet. Quasi aperiam distinctio deserunt numquam. Ab explicabo ratione.",
    "phone": "(971) 569-6087",
    "email": "Wilson.Kovacek@hotmail.com",
    "status": "Do podjęcia",
    "address": "Al. Jerozolimskie 185, 02-222 Warszawa",
    "geolat": 52.20932,
    "geolng": 20.95057
}, {
    "date": "2019-06-29T12:39:29.980Z",
    "contactPerson": "Rosalia Hilll",
    "description": "Necessitatibus et distinctio fugiat ducimus et qui commodi soluta. Sint ducimus quis voluptates laboriosam. Aspernatur officia et necessitatibus. Voluptatem impedit et autem repellendus non.",
    "phone": "1-337-216-9557",
    "email": "Vincenzo51@yahoo.com",
    "status": "Do podjęcia",
    "address": "Rzymowskiego 47, 02-697 Warszawa",
    "geolat": 52.17365,
    "geolng": 21.00193
}, {
    "date": "2019-06-28T17:19:36.263Z",
    "contactPerson": "Sedrick Schuppe",
    "description": "Corporis ullam in earum. Aut dolorem nam. Omnis et qui aut repudiandae est optio earum illo. Et molestiae mollitia quasi.",
    "phone": "1-059-142-0307",
    "email": "Jan18@yahoo.com",
    "status": "W toku",
    "address": "Księcia Bolesława 1A, 01-494 Warszawa",
    "geolat": 52.25123,
    "geolng": 20.93848
}, {
    "date": "2019-06-29T01:15:36.093Z",
    "contactPerson": "Jamison Hayes",
    "description": "Molestias est voluptatem eum eligendi esse saepe. Excepturi dolor qui omnis fugiat cumque. Dolor vitae assumenda quis at modi quod cumque ratione nam.",
    "phone": "805.429.8771 x9764",
    "email": "Harold1@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Fieldorfa 41, 04-125 Warszawa",
    "geolat": 52.23266,
    "geolng": 21.09504
}, {
    "date": "2019-06-28T22:25:35.761Z",
    "contactPerson": "Norberto Hills",
    "description": "Maxime dolor et. Possimus ad et. Rem iste consequuntur culpa iste quasi non ut. Quia dolorem excepturi animi blanditiis. Nulla sequi accusamus sed eaque.",
    "phone": "355-071-9265 x648",
    "email": "Joaquin_Prosacco@yahoo.com",
    "status": "W toku",
    "address": "Smocza 21, 01-051 Warszawa",
    "geolat": 52.2483,
    "geolng": 20.98341
}, {
    "date": "2019-06-28T18:13:44.174Z",
    "contactPerson": "Presley Wuckert",
    "description": "Ut aliquid placeat inventore illum ab nam. Iure tempore ipsum. Id qui et et quis qui veniam totam incidunt excepturi.",
    "phone": "876.196.6669 x9018",
    "email": "Adriana35@yahoo.com",
    "status": "W toku",
    "address": "Rotmistrza Witolda Pileckiego 103, 02-781 Warszawa",
    "geolat": 52.14402,
    "geolng": 21.03716
}, {
    "date": "2019-06-28T18:24:40.086Z",
    "contactPerson": "Alberta Rempel",
    "description": "Et quis sint hic adipisci iusto magnam voluptatem. Nesciunt quaerat dolore. Consequuntur ut officiis deserunt vero rem repellendus exercitationem quasi.",
    "phone": "571-118-2622",
    "email": "Mathilde_Kessler@gmail.com",
    "status": "Do weryfikacji",
    "address": "Patriotów 29, 04-839 Warszawa",
    "geolat": 52.15739,
    "geolng": 21.21466
}, {
    "date": "2019-06-29T09:02:58.124Z",
    "contactPerson": "Cassie Stoltenberg",
    "description": "Culpa sit magnam deserunt ipsam. Autem veniam doloremque ducimus consequatur dolores. Quaerat dolores non aut. Harum voluptas eum molestiae adipisci molestiae officiis inventore.",
    "phone": "988-688-0995",
    "email": "Catharine54@gmail.com",
    "status": "Zamknięta",
    "address": "Kajki 69, 04-621 Warszawa",
    "geolat": 52.21979,
    "geolng": 21.16307
}, {
    "date": "2019-06-28T16:20:21.468Z",
    "contactPerson": "Dudley Harber",
    "description": "Nobis facilis dignissimos veritatis et tempore deleniti. Illum qui sapiente qui ut. Provident tenetur aliquam est necessitatibus. Est itaque voluptas explicabo vero esse. Sit porro non nisi corrupti. Quibusdam dolorem consectetur quidem nulla autem.",
    "phone": "444-962-2768 x1613",
    "email": "Coby_Marks@gmail.com",
    "status": "W toku",
    "address": "Ciepła 3, 00-854 Warszawa",
    "geolat": 52.2338,
    "geolng": 20.99702
}, {
    "date": "2019-06-28T17:58:46.927Z",
    "contactPerson": "Humberto Goldner",
    "description": "Vitae ex consequatur ut eius veniam rerum. Excepturi eos consequatur eaque dignissimos officiis tempore quaerat.",
    "phone": "163-093-1455 x438",
    "email": "Kacie33@hotmail.com",
    "status": "Zamknięta",
    "address": "Włodarzewska 69A, 02-384 Warszawa",
    "geolat": 52.20209,
    "geolng": 20.95217
}, {
    "date": "2019-06-29T00:54:02.800Z",
    "contactPerson": "Shawna Terry",
    "description": "Fugit est et qui occaecati. Ex ea itaque impedit repudiandae odio fugiat. Perferendis et maiores neque voluptas et velit voluptas nobis voluptates. Consectetur sequi officiis aut dolores tempora voluptates explicabo. Saepe sunt harum quis provident recusandae quae optio sequi.",
    "phone": "(176) 032-9168",
    "email": "Joel38@yahoo.com",
    "status": "W toku",
    "address": "Jagiellońska 4, 03-721 Warszawa",
    "geolat": 52.24929,
    "geolng": 21.03846
}, {
    "date": "2019-06-29T06:31:06.067Z",
    "contactPerson": "Justyn Dach",
    "description": "Et fuga ut in optio quia laboriosam. Suscipit aliquid in soluta aliquid quisquam. Aut odit recusandae facilis ad quas dolor dicta voluptatem. Eveniet voluptatem eveniet quia dolores tempore qui. Voluptatem maxime adipisci consequuntur ut omnis dolor. Omnis et delectus qui.",
    "phone": "670.211.9425 x107",
    "email": "Lew61@yahoo.com",
    "status": "Do podjęcia",
    "address": "Grochowska 249/251, 04-001 Warszawa",
    "geolat": 52.2455,
    "geolng": 21.0761
}, {
    "date": "2019-06-29T02:18:30.929Z",
    "contactPerson": "Janessa Beer",
    "description": "Expedita rerum sint repellat. Voluptas in ipsa. Sunt ab adipisci explicabo odio soluta libero. Necessitatibus occaecati aut sunt eius autem magnam.",
    "phone": "1-875-279-5969",
    "email": "Barbara88@hotmail.com",
    "status": "Zamknięta",
    "address": "Widoczna 73, 04-647 Warszawa",
    "geolat": 52.22307,
    "geolng": 21.14851
}, {
    "date": "2019-06-28T17:21:34.937Z",
    "contactPerson": "Jarrett Ledner",
    "description": "Facere labore nobis earum enim. Neque architecto eos error libero similique. Et et quis aspernatur sunt dolor autem corrupti. Asperiores atque sit dolorem rerum. Atque ut corrupti consectetur sed. Quos sint laborum ea occaecati.",
    "phone": "(358) 336-6707",
    "email": "Leann.Walker@hotmail.com",
    "status": "W toku",
    "address": "Bazyliańska 4, 03-203 Warszawa",
    "geolat": 52.2914,
    "geolng": 21.02018
}, {
    "date": "2019-06-29T11:49:17.876Z",
    "contactPerson": "Jabari Bartoletti",
    "description": "Ut quibusdam fuga occaecati amet qui ea qui fuga qui. Natus rem porro neque perferendis et nemo perferendis aut. Dolore et totam quo rem. Animi voluptatem aut id atque et repellat libero atque. Sit qui eos. Odit enim ex quibusdam eveniet aut aut.",
    "phone": "(670) 036-6177 x5417",
    "email": "Grayson83@gmail.com",
    "status": "Do weryfikacji",
    "address": "Fieldorfa 1, 03-984 Warszawa",
    "geolat": 52.22107,
    "geolng": 21.08973
}, {
    "date": "2019-06-29T02:53:00.878Z",
    "contactPerson": "Amalia Donnelly",
    "description": "Dolorem dolor consequatur debitis nesciunt non aut nam soluta et. Commodi eligendi labore nostrum a. Et eum quidem consequuntur asperiores voluptatem repellat. Pariatur omnis qui. Ab esse excepturi. Consequatur natus earum quo qui odio quo molestias.",
    "phone": "1-767-755-0370 x71083",
    "email": "Archibald_Kassulke@gmail.com",
    "status": "Zamknięta",
    "address": "al. Krakowska 244, 02-219 Warszawa",
    "geolat": 52.18949,
    "geolng": 20.95813
}, {
    "date": "2019-06-28T21:01:49.668Z",
    "contactPerson": "Randy Sauer",
    "description": "Reiciendis vitae et est ut nemo voluptas velit delectus sint. Voluptas soluta tempore in eum cum nemo. Et vero eligendi nihil voluptatem fugiat consectetur eos perferendis repudiandae. Labore corporis autem est eveniet et delectus nam sunt autem.",
    "phone": "818.682.3609 x9395",
    "email": "Marilie42@hotmail.com",
    "status": "Do podjęcia",
    "address": "Armii Ludowej 14, 00-638 Warszawa",
    "geolat": 52.21793,
    "geolng": 21.01326
}, {
    "date": "2019-06-28T16:25:52.543Z",
    "contactPerson": "Leanna Kuvalis",
    "description": "Commodi aut itaque voluptate vero est rerum est. Ut officiis similique quae repellat nihil sequi eveniet. Nihil quae animi quos sit. Ducimus sequi sint aut vero asperiores aliquam. Dolor natus non quaerat sunt earum cum amet inventore. Est debitis voluptate voluptate velit voluptas eveniet non nulla.",
    "phone": "(195) 943-6495 x6145",
    "email": "Ivory95@hotmail.com",
    "status": "Do podjęcia",
    "address": "Broniewskiego 37A, 01-716 Warszawa",
    "geolat": 52.26798,
    "geolng": 20.95701
}, {
    "date": "2019-06-28T23:13:31.468Z",
    "contactPerson": "Germaine Considine",
    "description": "Sapiente qui voluptatem repellendus maxime dolores aperiam qui. Repudiandae quidem molestiae quia voluptatem perspiciatis sed exercitationem. Quaerat a deserunt veritatis qui et. Architecto ut quae vel enim ea quibusdam qui quam. Quae magni excepturi et et labore deserunt commodi neque et. Dolore quibusdam qui cumque quo adipisci magni eos autem sed.",
    "phone": "1-451-506-0804 x77144",
    "email": "Alec.Wintheiser43@hotmail.com",
    "status": "Zamknięta",
    "address": "Powstańców Śląskich 126, 01-466 Warszawa",
    "geolat": 52.26444,
    "geolng": 20.93119
}, {
    "date": "2019-06-28T22:30:19.513Z",
    "contactPerson": "Nona Wiegand",
    "description": "Ex libero cupiditate excepturi qui nam doloremque ducimus ut. Ipsum dolores sapiente repellendus dolore est ut eum. Fugit veritatis recusandae eveniet inventore libero.",
    "phone": "(749) 723-1875 x263",
    "email": "Jermaine_Raynor24@yahoo.com",
    "status": "W toku",
    "address": "29 Listopada / Czerniakowska 155 155, 00-456 Warszawa",
    "geolat": 52.21467,
    "geolng": 21.04563
}, {
    "date": "2019-06-29T11:16:11.429Z",
    "contactPerson": "Alexander Bartoletti",
    "description": "Saepe et hic aut molestias dolores numquam error ipsum omnis. Quas consequatur architecto. Quia sit laudantium non. Et vel iste. Neque aut praesentium eveniet possimus minima voluptas in nobis eveniet.",
    "phone": "256.607.2144 x7254",
    "email": "Margarete65@gmail.com",
    "status": "Zamknięta",
    "address": "Geodezyjna 76, 03-290 Warszawa",
    "geolat": 52.30994,
    "geolng": 21.07956
}, {
    "date": "2019-06-29T13:16:23.925Z",
    "contactPerson": "Gage Haag",
    "description": "Sequi sint qui dolorem sunt aut. Temporibus velit ea. Et autem aut ipsum asperiores perspiciatis corporis suscipit. Voluptatem ut corrupti ab nam et doloremque.",
    "phone": "(262) 728-7751 x837",
    "email": "Earnestine.Price@yahoo.com",
    "status": "Do podjęcia",
    "address": "Młodzieńcza 1, 03-655 Warszawa",
    "geolat": 52.28669,
    "geolng": 21.07478
}, {
    "date": "2019-06-28T20:10:24.073Z",
    "contactPerson": "Arlie Bartoletti",
    "description": "Ea et doloribus cumque necessitatibus odio et quos dicta sunt. Veritatis modi qui aperiam. Eveniet veniam molestias aut laborum voluptates quia et sequi. Omnis consequatur cumque ut labore aut reiciendis. Aliquid eos et ipsum laboriosam ducimus. Ut distinctio rerum perferendis qui quos.",
    "phone": "276.318.1074",
    "email": "Reynold_Braun@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Broniewskiego 26, 01-771 Warszawa",
    "geolat": 52.26657,
    "geolng": 20.96482
}, {
    "date": "2019-06-28T21:24:58.716Z",
    "contactPerson": "Johan Wolf",
    "description": "Est nam ipsa laborum eveniet dignissimos. Rerum laudantium dolores omnis quo quia omnis. Debitis molestiae tempora velit non adipisci. Commodi ducimus cum praesentium hic quisquam quo consequatur. Est quae esse aperiam sint. Id ut vitae aut dolores.",
    "phone": "1-826-697-0508 x260",
    "email": "Abraham.Mertz@gmail.com",
    "status": "Zamknięta",
    "address": "Grochowska 249/251, 04-001 Warszawa",
    "geolat": 52.24553,
    "geolng": 21.07586
}, {
    "date": "2019-06-29T05:20:14.536Z",
    "contactPerson": "Margarete Bernhard",
    "description": "Voluptatem natus mollitia eos fuga natus nisi nisi modi officia. Excepturi asperiores voluptas aspernatur.",
    "phone": "561.665.9798 x88391",
    "email": "Lucienne90@hotmail.com",
    "status": "Do podjęcia",
    "address": "Marszałkowska 115, 00-102 Warszawa",
    "geolat": 52.24144,
    "geolng": 21.00266
}, {
    "date": "2019-06-28T21:02:42.696Z",
    "contactPerson": "Darrel Friesen",
    "description": "Rerum expedita voluptas soluta quia. Est nihil blanditiis tempora cupiditate ipsum unde.",
    "phone": "1-986-087-3447",
    "email": "Oswaldo_Crist@yahoo.com",
    "status": "Zamknięta",
    "address": "Grzymały 4, 02-324 Warszawa",
    "geolat": 52.21855,
    "geolng": 20.97541
}, {
    "date": "2019-06-29T11:41:08.861Z",
    "contactPerson": "Laverne Williamson",
    "description": "Velit est molestias hic. Quasi iure aperiam modi non tenetur modi id fuga.",
    "phone": "425-342-8849 x3962",
    "email": "Alexzander82@gmail.com",
    "status": "Do weryfikacji",
    "address": "Modlińska 8, 03-216 Warszawa",
    "geolat": 52.29437,
    "geolng": 21.00042
}, {
    "date": "2019-06-28T23:40:31.067Z",
    "contactPerson": "Tabitha Ward",
    "description": "Et assumenda id vero voluptatibus. Et aut quae enim veniam iusto quasi repudiandae qui. Aut voluptatibus minus consectetur accusamus eum porro quaerat et facilis. Natus voluptatem necessitatibus ipsam saepe laborum impedit vel omnis enim. Nemo harum velit est error officia.",
    "phone": "841.719.5074 x6510",
    "email": "Flossie_Hodkiewicz66@yahoo.com",
    "status": "Zamknięta",
    "address": "Ciołka 10A, 01-402 Warszawa",
    "geolat": 52.24192,
    "geolng": 20.946
}, {
    "date": "2019-06-29T10:12:59.241Z",
    "contactPerson": "Nova Glover",
    "description": "Voluptatem magni repudiandae praesentium autem similique repudiandae deleniti aut. Qui aut necessitatibus harum ea molestiae. Deleniti nulla et aliquam possimus molestiae aut molestiae.",
    "phone": "354.692.3500 x65116",
    "email": "Lionel1@gmail.com",
    "status": "Do weryfikacji",
    "address": "Marynarska 15, 02-674 Warszawa",
    "geolat": 52.17774,
    "geolng": 20.9982
}, {
    "date": "2019-06-28T19:54:38.333Z",
    "contactPerson": "Federico Borer",
    "description": "Odio velit itaque suscipit deleniti. Commodi id quos debitis aut.",
    "phone": "(100) 439-5735 x311",
    "email": "Gavin_Dickinson16@yahoo.com",
    "status": "W toku",
    "address": "Barkocińska 6, 03-543 Warszawa",
    "geolat": 52.26869,
    "geolng": 21.05736
}, {
    "date": "2019-06-28T20:06:56.814Z",
    "contactPerson": "Elian Schmidt",
    "description": "Qui aspernatur ut error ipsum laborum accusamus provident non. Officiis repudiandae minima dolores quas cum. Eveniet sint fugit et autem iste dolore nam quia.",
    "phone": "989-156-3607 x059",
    "email": "Brisa8@gmail.com",
    "status": "Do weryfikacji",
    "address": "Górczewska 216/226, 01-460 Warszawa",
    "geolat": 52.24055,
    "geolng": 20.90614
}, {
    "date": "2019-06-29T16:07:40.201Z",
    "contactPerson": "Helen Kuphal",
    "description": "Reprehenderit ratione vel voluptas qui. Facilis eligendi dolores sint id in. Maiores officia aliquam ut recusandae consequatur itaque ut esse qui. Est temporibus quisquam expedita unde maiores. Et sint accusamus qui ut non non. Et ad distinctio aspernatur harum non quasi aut voluptatum.",
    "phone": "145-672-4367 x0723",
    "email": "Constantin_Keebler@gmail.com",
    "status": "Do podjęcia",
    "address": "Włodarzewska 58 R, 02-384 Warszawa",
    "geolat": 52.2025,
    "geolng": 20.95486
}, {
    "date": "2019-06-28T20:36:43.852Z",
    "contactPerson": "Anastacio Veum",
    "description": "Eum dicta molestias odit eum iste quia non. Sapiente eligendi veniam et nemo quod. Eveniet minima voluptas et dolorem et cumque.",
    "phone": "696-963-2101",
    "email": "Marcelo29@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Domaniewska 30, 02-672 Warszawa",
    "geolat": 52.18409,
    "geolng": 21.01205
}, {
    "date": "2019-06-29T09:25:57.667Z",
    "contactPerson": "Kale Anderson",
    "description": "Et fuga tempora sed enim voluptas. Rem aspernatur voluptatem exercitationem rem ea. Et enim saepe vel dignissimos dolore est fuga officiis. Ipsum unde aspernatur numquam sit nihil ea. Quasi delectus quaerat ducimus et alias dolorem. Corporis perspiciatis accusantium id libero omnis odit voluptatum libero.",
    "phone": "(205) 426-9394 x3120",
    "email": "Mazie.Lehner@gmail.com",
    "status": "Do podjęcia",
    "address": "Lucerny 87, 04-687 Warszawa",
    "geolat": 52.21418,
    "geolng": 21.1492
}, {
    "date": "2019-06-29T02:05:14.370Z",
    "contactPerson": "Margarete Parker",
    "description": "Rerum ratione eos provident ab est similique rerum. Eaque nulla tempora libero dicta doloremque voluptatem. Ea fugiat non ipsum et vitae sunt quia error nostrum. Commodi pariatur aperiam iusto ea et et.",
    "phone": "1-300-935-0903 x69617",
    "email": "Jaycee5@yahoo.com",
    "status": "Zamknięta",
    "address": "Magiczna 4, 03-287 Warszawa",
    "geolat": 52.312,
    "geolng": 21.06377
}, {
    "date": "2019-06-29T06:42:50.815Z",
    "contactPerson": "Avis Hauck",
    "description": "Eaque nulla sed dolorem rerum adipisci nam totam sit. Assumenda corrupti harum esse exercitationem et ut voluptatem. Blanditiis tempora qui. Rerum sapiente ea ut eos deserunt. Earum voluptate commodi.",
    "phone": "(108) 419-3359 x3954",
    "email": "Herbert.Waters@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Mroczna 33, 01-456 Warszawa",
    "geolat": 52.23934,
    "geolng": 20.93471
}, {
    "date": "2019-06-29T13:28:28.182Z",
    "contactPerson": "Laura Tromp",
    "description": "Asperiores similique doloribus mollitia incidunt veniam porro et et. Quibusdam doloremque dolorem quisquam et recusandae quas. Distinctio voluptatem iure provident praesentium est possimus consequatur. Minima et quia nihil optio. Et et ipsam sapiente fuga perspiciatis unde natus. Repellendus esse ex quisquam laborum quidem eaque odit repudiandae architecto.",
    "phone": "555.958.8899",
    "email": "Tyreek_Quitzon93@hotmail.com",
    "status": "Do podjęcia",
    "address": "Chełmżynska 41, 04-247 Warszawa",
    "geolat": 52.24727,
    "geolng": 21.13251
}, {
    "date": "2019-06-29T11:16:45.577Z",
    "contactPerson": "Donald Bergnaum",
    "description": "Repellendus recusandae sed reiciendis adipisci veniam. Officiis dicta eos qui sed nihil ullam et ut.",
    "phone": "1-173-967-7131 x287",
    "email": "Zaria_Gutmann@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Koszycka 10A, 01-446 Warszawa",
    "geolat": 52.24298,
    "geolng": 20.94393
}, {
    "date": "2019-06-28T17:11:54.331Z",
    "contactPerson": "Dudley Prosacco",
    "description": "Commodi velit inventore earum aut consequatur dolorum quasi. Commodi fugiat earum deserunt. Et molestiae architecto tempore sed occaecati ut. Excepturi non qui libero minima molestiae veniam qui.",
    "phone": "(479) 080-4814 x654",
    "email": "Katrina.Farrell@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Krańcowa 50, 02-494 Warszawa",
    "geolat": 52.19747,
    "geolng": 20.92391
}, {
    "date": "2019-06-29T06:23:06.637Z",
    "contactPerson": "Brandyn Gibson",
    "description": "Est aut et recusandae asperiores nesciunt animi qui. Consequatur aperiam sapiente possimus rerum a quo in. Consequatur facere ut itaque illum in aperiam. Corporis nulla sunt ullam necessitatibus soluta a et. Molestiae atque at culpa sed recusandae. Ad officia magni accusantium ab ratione in voluptas.",
    "phone": "304-770-4421",
    "email": "Nadia70@hotmail.com",
    "status": "W toku",
    "address": "Nicejska 2, 02-764 Warszawa",
    "geolat": 52.175,
    "geolng": 21.0504
}, {
    "date": "2019-06-29T11:18:33.092Z",
    "contactPerson": "Beth Wolff",
    "description": "Autem tenetur quaerat vero aliquid id est est dolorum eos. Ut nisi culpa placeat illum aut. Commodi quis a in consequatur possimus quas soluta. Aspernatur et perferendis enim doloribus blanditiis.",
    "phone": "(030) 429-0613 x30089",
    "email": "Elijah.Tremblay74@yahoo.com",
    "status": "Do podjęcia",
    "address": "św. Bonifacego 70, 02-936 Warszawa",
    "geolat": 52.1809,
    "geolng": 21.05597
}, {
    "date": "2019-06-28T18:04:31.767Z",
    "contactPerson": "Brandyn Lubowitz",
    "description": "Possimus magni architecto omnis illo. Et voluptas rerum ab ut voluptatibus voluptas error. Omnis unde facere impedit dolor. Maxime nesciunt nobis animi repellendus. Suscipit impedit minus. Saepe quia qui excepturi fugiat animi quis consectetur quae.",
    "phone": "1-636-486-7293 x671",
    "email": "Jordi31@yahoo.com",
    "status": "W toku",
    "address": "Broniewskiego 26, 01-771 Warszawa",
    "geolat": 52.26658,
    "geolng": 20.96478
}, {
    "date": "2019-06-28T23:57:50.255Z",
    "contactPerson": "Otis Farrell",
    "description": "Aut officiis consequatur quia. Similique reiciendis cum. Est sint ducimus amet praesentium laboriosam est.",
    "phone": "541.923.5744",
    "email": "Skyla21@hotmail.com",
    "status": "Zamknięta",
    "address": "Pańska 96, 00-837 Warszawa",
    "geolat": 52.23106,
    "geolng": 20.99077
}, {
    "date": "2019-06-29T01:24:54.319Z",
    "contactPerson": "Veronica Cole",
    "description": "Unde velit adipisci quia eveniet illo qui odit aut. Enim facilis neque omnis vero. Saepe sit quo earum non explicabo in ut excepturi voluptas. Similique officia assumenda natus asperiores incidunt. Unde quia aspernatur nostrum voluptas amet quasi.",
    "phone": "220-033-2237",
    "email": "Alford.Lockman49@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Myśliborska 115, 03-185 Warszawa",
    "geolat": 52.32219,
    "geolng": 20.95101
}, {
    "date": "2019-06-29T10:56:24.731Z",
    "contactPerson": "Hal Collins",
    "description": "Natus quo eum libero ut earum. Suscipit nostrum cumque sit non perspiciatis quam consequatur.",
    "phone": "(007) 983-0505 x1370",
    "email": "Conner2@hotmail.com",
    "status": "Zamknięta",
    "address": "Szpotańskiego 4, 04-760 Warszawa",
    "geolat": 52.20604,
    "geolng": 21.1684
}, {
    "date": "2019-06-29T02:40:33.761Z",
    "contactPerson": "Greta Boehm",
    "description": "Et ut magni suscipit exercitationem eos. Molestias numquam sint nihil impedit. Fugit deserunt velit. Ut eum a consequatur est fugit non saepe quia dolor.",
    "phone": "1-575-126-0314",
    "email": "Dell65@gmail.com",
    "status": "Do weryfikacji",
    "address": "Odkryta 62, 03-140 Warszawa",
    "geolat": 52.33637,
    "geolng": 20.93748
}, {
    "date": "2019-06-29T14:13:36.900Z",
    "contactPerson": "Maci Bayer",
    "description": "Quo facilis error quas qui. Eaque dignissimos et corrupti quo qui molestias numquam quos totam.",
    "phone": "125-666-4341 x363",
    "email": "Heidi97@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Portofino 8, 02-764 Warszawa",
    "geolat": 52.17597,
    "geolng": 21.06053
}, {
    "date": "2019-06-29T03:20:54.243Z",
    "contactPerson": "Onie Bradtke",
    "description": "Rem error rem veritatis nostrum ex est consequatur. Et et ratione. Natus alias est. Vel aliquam natus et molestias corporis.",
    "phone": "431-196-9726",
    "email": "Joey.Price85@yahoo.com",
    "status": "W toku",
    "address": "Powstańców Śląskich 45, 01-355 Warszawa",
    "geolat": 52.22943,
    "geolng": 20.91446
}, {
    "date": "2019-06-29T12:25:11.795Z",
    "contactPerson": "Maxie Bednar",
    "description": "Ad maiores minus omnis itaque. Eum soluta dolorum qui occaecati quo dolorem quis et minima.",
    "phone": "1-842-289-8774 x399",
    "email": "Dan.OReilly@hotmail.com",
    "status": "Zamknięta",
    "address": "Rybałtów 18, 02-886 Warszawa",
    "geolat": 52.13022,
    "geolng": 21.05604
}, {
    "date": "2019-06-28T18:22:05.920Z",
    "contactPerson": "Lois Runte",
    "description": "Sapiente maxime reiciendis architecto non minus sed. Ut facere debitis. Quibusdam aliquam sunt corrupti ipsam alias ut. Quod sequi provident. Quibusdam est suscipit delectus magni aspernatur et sunt sed. Exercitationem mollitia sit occaecati.",
    "phone": "(760) 943-3358 x12062",
    "email": "Idella.Heaney16@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Klaudyny 18A, 01-684 Warszawa",
    "geolat": 52.28109,
    "geolng": 20.97659
}, {
    "date": "2019-06-29T04:32:49.206Z",
    "contactPerson": "Hillard Aufderhar",
    "description": "Temporibus sint natus dolores autem consectetur exercitationem. Aut ad omnis architecto alias fuga exercitationem et. Neque atque eligendi doloremque facilis voluptatem pariatur. Saepe perspiciatis modi quasi vel hic. Fugit repudiandae eveniet adipisci aut minus quos sunt dolore.",
    "phone": "1-618-910-7501 x45089",
    "email": "Art.Nicolas72@gmail.com",
    "status": "Zamknięta",
    "address": "Vogla 28, 02-963 Warszawa",
    "geolat": 52.16011,
    "geolng": 21.09164
}, {
    "date": "2019-06-29T03:30:22.510Z",
    "contactPerson": "Sebastian Lesch",
    "description": "Accusamus dolorum eligendi odio sequi iure totam eos eveniet cupiditate. Ut vel consequuntur tempore dolore ratione dolorem consequatur iure. Omnis et consectetur aut earum est eligendi est. Ut sed recusandae labore commodi voluptatibus qui hic qui reiciendis. Fugit at blanditiis perferendis.",
    "phone": "270-811-3280",
    "email": "Casimer_Welch@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Belgradzka 8-10, 02-793 Warszawa",
    "geolat": 52.14158,
    "geolng": 21.06252
}, {
    "date": "2019-06-29T10:32:52.169Z",
    "contactPerson": "Alden Morissette",
    "description": "Voluptas ut harum omnis neque dolorum. Blanditiis iure voluptatem aut voluptatibus. Nobis accusamus ut ea omnis aut dolores. Et magni consequatur. Enim debitis rem fuga cum minima.",
    "phone": "301.763.6323",
    "email": "Mason23@gmail.com",
    "status": "Do weryfikacji",
    "address": "Czerska 8/10, 00-732 Warszawa",
    "geolat": 52.20348,
    "geolng": 21.0481
}, {
    "date": "2019-06-29T08:03:59.351Z",
    "contactPerson": "Carlos Casper",
    "description": "Voluptate voluptatum vel unde est cum odit. Dolore culpa autem ut dolor et vel vitae. Non ratione libero asperiores voluptatem animi aliquid amet aperiam. Quibusdam illo odit et quia eos tempore sunt autem dolores. Dignissimos a possimus eligendi.",
    "phone": "765-418-4884 x6201",
    "email": "Eleanore60@gmail.com",
    "status": "Do weryfikacji",
    "address": "Skarbka z Gór 17, 03-287 Warszawa",
    "geolat": 52.31544,
    "geolng": 21.06001
}, {
    "date": "2019-06-28T21:31:28.262Z",
    "contactPerson": "Mathilde McLaughlin",
    "description": "Voluptate id et. Dolor porro aut ipsa odit animi autem quia expedita.",
    "phone": "093.067.1213",
    "email": "Lee.Hudson55@gmail.com",
    "status": "Do podjęcia",
    "address": "Puławska 87/89, 02-595 Warszawa",
    "geolat": 52.20037,
    "geolng": 21.02406
}, {
    "date": "2019-06-28T19:46:06.181Z",
    "contactPerson": "Al Beatty",
    "description": "Amet aspernatur soluta. In vel vel ipsa ullam. Sed aut sit ratione et voluptatem dolor et qui rerum. Nobis dolor sed quidem delectus autem id. Animi eveniet assumenda atque voluptates temporibus corporis ab.",
    "phone": "(325) 040-0490 x216",
    "email": "Elouise_Zieme@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Witolińska 7, 04-185 Warszawa",
    "geolat": 52.23896,
    "geolng": 21.10892
}, {
    "date": "2019-06-28T19:12:34.922Z",
    "contactPerson": "Elsie Senger",
    "description": "Eos ut quos eos fugiat animi. Nisi fugit voluptas. Accusamus itaque eos facilis voluptas. Eos officia amet est fugit aut tempore molestiae et consequatur.",
    "phone": "(112) 219-5627 x0030",
    "email": "Laisha_Shields36@gmail.com",
    "status": "Do weryfikacji",
    "address": "Sardyńska 8A, 02-761 Warszawa",
    "geolat": 52.17872,
    "geolng": 21.05305
}, {
    "date": "2019-06-28T18:14:26.350Z",
    "contactPerson": "Kamren Farrell",
    "description": "Doloremque nihil quia quaerat sint voluptatem. Ex est asperiores et quia omnis tempore enim aperiam odio.",
    "phone": "1-113-183-5942",
    "email": "Jessyca93@gmail.com",
    "status": "Zamknięta",
    "address": "Gołkowska 20, 02-905 Warszawa",
    "geolat": 52.19325,
    "geolng": 21.058
}, {
    "date": "2019-06-29T01:11:52.426Z",
    "contactPerson": "Tierra Gottlieb",
    "description": "Nobis aut eos porro distinctio est magni officiis. Aperiam nisi optio. Id dignissimos quod. Vero dolores corrupti perferendis laboriosam quia ad architecto. Quis eaque aliquid voluptas dolores quia est ipsum qui itaque.",
    "phone": "787-513-0930 x1036",
    "email": "Aisha.Douglas53@yahoo.com",
    "status": "W toku",
    "address": "Radarowa 4B, 02-137 Warszawa",
    "geolat": 52.19272,
    "geolng": 20.96697
}, {
    "date": "2019-06-28T18:09:22.414Z",
    "contactPerson": "Lurline MacGyver",
    "description": "Modi sapiente qui sequi voluptates assumenda voluptatem cupiditate. Nihil inventore et sed eum maxime neque repellendus illo laudantium. Sit pariatur possimus dignissimos ut corporis. Nihil fugiat ut fugit laboriosam sequi rem nisi ea. Fugit sunt iure ut aut aut ullam blanditiis eius. Expedita sint voluptas inventore reprehenderit sapiente omnis.",
    "phone": "1-932-202-1095",
    "email": "Jerad_Schulist88@gmail.com",
    "status": "Do weryfikacji",
    "address": "Tołwińskiego 18A, 01-711 Warszawa",
    "geolat": 52.26933,
    "geolng": 20.96723
}, {
    "date": "2019-06-29T01:01:05.337Z",
    "contactPerson": "Kareem Hammes",
    "description": "Commodi enim velit atque fuga provident quos commodi. Repellat ex atque. Et accusantium ut ratione.",
    "phone": "(088) 917-9105 x624",
    "email": "Jaiden67@gmail.com",
    "status": "Do podjęcia",
    "address": "Erazma z Zakroczymia 20, 03-185 Warszawa",
    "geolat": 52.32359,
    "geolng": 20.94638
}, {
    "date": "2019-06-29T04:49:05.413Z",
    "contactPerson": "Parker Bosco",
    "description": "Et rem quia provident. Quia ea ullam quaerat unde ab aliquam. Omnis occaecati sapiente in non consectetur rem. Quod dignissimos vero est consequatur fugiat consequatur quos. Excepturi quia maxime nam eius et quisquam est.",
    "phone": "458-613-3212 x081",
    "email": "Marianne.Fritsch72@hotmail.com",
    "status": "Zamknięta",
    "address": "Krakowska 6/7, 50-425 Wrocław",
    "geolat": 51.0953,
    "geolng": 17.05672
}, {
    "date": "2019-06-29T00:02:42.983Z",
    "contactPerson": "Jerel Goyette",
    "description": "Sed ad iste. Autem aut labore quisquam ab qui ducimus.",
    "phone": "1-530-181-0097 x633",
    "email": "Gabriella.Upton78@gmail.com",
    "status": "Do weryfikacji",
    "address": "Armii Krajowej 49, 50-541 Wrocław",
    "geolat": 51.0828,
    "geolng": 17.0596
}, {
    "date": "2019-06-28T23:10:59.495Z",
    "contactPerson": "Whitney Goldner",
    "description": "Pariatur qui voluptatum maxime assumenda quia sequi qui quisquam. Ut provident possimus illo in officia asperiores eos quasi. Quidem odit ducimus laudantium ducimus deleniti quia sit.",
    "phone": "368-337-8776 x9866",
    "email": "Jayce_Corkery@gmail.com",
    "status": "Do podjęcia",
    "address": "Ślężna 144, 53-111 Wrocław",
    "geolat": 51.07949,
    "geolng": 17.02101
}, {
    "date": "2019-06-28T22:00:53.694Z",
    "contactPerson": "Micaela Weber",
    "description": "Vel recusandae est. Est eveniet quia distinctio necessitatibus sit eius repellat possimus voluptatem. Laboriosam blanditiis aperiam praesentium. Voluptas qui qui vero eligendi consequatur quia ut accusantium harum. Molestiae nulla dolor dignissimos quibusdam ab.",
    "phone": "1-091-145-3265",
    "email": "Dahlia17@gmail.com",
    "status": "Zamknięta",
    "address": "Toruńska 73, 51-414 Wrocław",
    "geolat": 51.13063,
    "geolng": 17.07807
}, {
    "date": "2019-06-29T12:49:32.799Z",
    "contactPerson": "Dean Kessler",
    "description": "Natus ut itaque iure. Fugit asperiores molestiae debitis. Dolorem laborum modi est delectus eaque quae. Dolorem distinctio sed possimus quae facere sed ex ratione aut. Eos officia quaerat. Quis minus aut rerum id voluptate.",
    "phone": "(077) 954-8961 x87466",
    "email": "Tressa_Tremblay13@hotmail.com",
    "status": "Do podjęcia",
    "address": "Brucknera 53-55, 51-411 Wrocław",
    "geolat": 51.13825,
    "geolng": 17.08227
}, {
    "date": "2019-06-29T02:49:52.447Z",
    "contactPerson": "Nola Borer",
    "description": "At odit corporis in est voluptatum delectus odio. Hic repudiandae est. Accusamus ipsa id quia et.",
    "phone": "111-767-8189",
    "email": "Philip96@yahoo.com",
    "status": "W toku",
    "address": "Żółta 1, 54-043 Wrocław",
    "geolat": 51.14447,
    "geolng": 16.8824
}, {
    "date": "2019-06-28T21:11:49.691Z",
    "contactPerson": "Ashtyn Hickle",
    "description": "Architecto alias itaque et suscipit iure assumenda ipsam ipsa. Iusto laborum nesciunt reiciendis. Eos veniam fugiat molestiae rerum. Ratione facere quasi sed quae quisquam at ex quam possimus.",
    "phone": "916-484-8082 x25832",
    "email": "Micheal.Upton95@yahoo.com",
    "status": "Zamknięta",
    "address": "Pilczycka 140, 54-150 Wrocław",
    "geolat": 51.14064,
    "geolng": 16.95771
}, {
    "date": "2019-06-28T18:25:08.158Z",
    "contactPerson": "Zander Metz",
    "description": "Mollitia tenetur molestias. Omnis quo accusamus voluptatibus quas vero amet qui.",
    "phone": "1-927-224-0387",
    "email": "Zion_Flatley6@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Obornicka 64, 51-114 Wrocław",
    "geolat": 51.1387,
    "geolng": 17.02821
}, {
    "date": "2019-06-29T00:45:22.004Z",
    "contactPerson": "Tianna Rowe",
    "description": "Voluptates delectus nemo. Sed sunt eum voluptatum libero perferendis. Aut esse distinctio possimus. Rem in quia tempore ad similique. Suscipit ratione et incidunt est architecto iste sint corporis. Nostrum qui earum iusto.",
    "phone": "(546) 750-6563 x0656",
    "email": "Dora13@yahoo.com",
    "status": "Do weryfikacji",
    "address": "al. Karkonoska 63, 53-015 Wrocław",
    "geolat": 51.06093,
    "geolng": 16.99374
}, {
    "date": "2019-06-29T07:38:24.894Z",
    "contactPerson": "Alan Conn",
    "description": "Molestias aut ab hic non iusto voluptatem minus. Officia et aut expedita laudantium.",
    "phone": "1-257-457-9899 x35821",
    "email": "Ewell.Bashirian17@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Żmigrodzka 105/117, 51-130 Wrocław",
    "geolat": 51.14376,
    "geolng": 17.03223
}, {
    "date": "2019-06-29T09:03:25.862Z",
    "contactPerson": "Pedro Hudson",
    "description": "Est sed doloribus iure incidunt nisi. Aut vel et aliquid et voluptas blanditiis totam sit est. Natus totam aut deleniti. Omnis quo suscipit sint nesciunt.",
    "phone": "1-291-847-0312 x9899",
    "email": "Sanford.Schuppe@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Energetyczna 13A, 53-330 Wrocław",
    "geolat": 51.09168,
    "geolng": 17.0141
}, {
    "date": "2019-06-29T06:39:19.700Z",
    "contactPerson": "Mae Berge",
    "description": "Soluta et iure culpa sint repudiandae. Omnis in aperiam ea et et nulla repellendus tempore. Sint vel ipsam excepturi expedita doloribus quo.",
    "phone": "(593) 240-0066 x0998",
    "email": "Felicia_Wolff@hotmail.com",
    "status": "W toku",
    "address": "Gajowicka 177, 53-150 Wrocław",
    "geolat": 51.0861,
    "geolng": 17.00457
}, {
    "date": "2019-06-28T23:19:37.189Z",
    "contactPerson": "Monserrat Pouros",
    "description": "Et dicta quae cupiditate aspernatur dolore molestias. Earum dolorem beatae saepe adipisci nobis eum occaecati. Voluptas aut blanditiis ut delectus neque exercitationem quae laborum est. Necessitatibus ut ratione hic. Veritatis unde nostrum modi delectus optio eaque et necessitatibus voluptatem. Rerum ipsam qui expedita vitae laborum id.",
    "phone": "771-805-8786",
    "email": "Beaulah9@gmail.com",
    "status": "Do weryfikacji",
    "address": "Wałbrzyska 2, 52-314 Wrocław",
    "geolat": 51.06426,
    "geolng": 16.98412
}, {
    "date": "2019-06-29T07:16:50.797Z",
    "contactPerson": "Therese Purdy",
    "description": "Rem veniam amet ullam mollitia rem repudiandae. Voluptatibus temporibus ut autem quis provident. Nulla fugit molestias. Molestiae blanditiis quia. Ut nihil nesciunt illo reprehenderit est doloribus qui vitae.",
    "phone": "1-522-257-9630",
    "email": "Pearline_Monahan20@gmail.com",
    "status": "Do weryfikacji",
    "address": "Gubińska 6, 54-434 Wrocław",
    "geolat": 51.1135,
    "geolng": 16.95844
}, {
    "date": "2019-06-29T10:18:15.632Z",
    "contactPerson": "Ike Shields",
    "description": "Non doloribus exercitationem corrupti. Culpa nam modi id expedita est quia. Sequi ut voluptas autem. Fuga ad modi ipsa et provident cum et.",
    "phone": "698-557-3299 x43167",
    "email": "Hyman24@hotmail.com",
    "status": "Zamknięta",
    "address": "al. Armii Krajowej 47, 50-541 Wrocław",
    "geolat": 51.0823,
    "geolng": 17.05479
}, {
    "date": "2019-06-29T03:56:06.062Z",
    "contactPerson": "Anya Schinner",
    "description": "Fugit quia inventore. Omnis soluta non eum delectus ipsum.",
    "phone": "(745) 482-3903",
    "email": "Phyllis.Sauer64@gmail.com",
    "status": "Do weryfikacji",
    "address": "Trzebnicka 39, 50-231 Wrocław",
    "geolat": 51.13029,
    "geolng": 17.03781
}, {
    "date": "2019-06-29T15:46:22.077Z",
    "contactPerson": "Kassandra Boehm",
    "description": "Ipsam consequatur ab itaque esse quisquam qui. Repudiandae placeat dolor omnis et. Maxime dolorem dolorem consequatur deserunt harum voluptatem. Omnis est rerum. Laudantium autem in. Qui ratione aut qui.",
    "phone": "100-525-0788 x7313",
    "email": "Israel55@hotmail.com",
    "status": "Do podjęcia",
    "address": "Sokola 49, 53-150 Wrocław",
    "geolat": 51.08252,
    "geolng": 17.0076
}, {
    "date": "2019-06-28T20:06:02.184Z",
    "contactPerson": "Hulda Carroll",
    "description": "Officia et in ut laborum occaecati asperiores labore voluptatem. Nam optio dolores doloribus enim minus et inventore consequuntur. Quia magnam sit nisi debitis rerum. Rerum dolores sunt consectetur ut itaque quia dicta. Vel quae maxime maxime a placeat illo voluptas voluptatem ea.",
    "phone": "164.302.1494 x7166",
    "email": "Darren32@gmail.com",
    "status": "Do weryfikacji",
    "address": "Osobowicka 133, 51-004 Wrocław",
    "geolat": 51.14388,
    "geolng": 16.98787
}, {
    "date": "2019-06-29T06:05:15.541Z",
    "contactPerson": "Millie DuBuque",
    "description": "Occaecati atque et cumque unde. Nam consequatur nihil. Nemo harum eius qui. Cum officia velit ipsam officia voluptatem amet iste unde.",
    "phone": "1-684-882-9470 x9804",
    "email": "Eugenia_Auer@gmail.com",
    "status": "Zamknięta",
    "address": "Wiśniowa 87, 53-126 Wrocław",
    "geolat": 51.08342,
    "geolng": 17.02375
}, {
    "date": "2019-06-29T10:47:46.069Z",
    "contactPerson": "Timmy Kub",
    "description": "A sit fugiat sunt et. Incidunt molestiae dolores explicabo ut. Aut recusandae et quia placeat eum corporis.",
    "phone": "780.336.7591",
    "email": "Jacques_Lindgren39@gmail.com",
    "status": "Zamknięta",
    "address": "Małopanewska 13, 54-217 Wrocław",
    "geolat": 51.12193,
    "geolng": 16.98589
}, {
    "date": "2019-06-29T01:07:02.504Z",
    "contactPerson": "Sheridan Kuhlman",
    "description": "Exercitationem et delectus et illum aliquam totam. Praesentium rerum deserunt dolor eos.",
    "phone": "052-060-0296 x454",
    "email": "Devante_Thiel@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Ślężna 44/46, 53-302 Wrocław",
    "geolat": 51.09266,
    "geolng": 17.03166
}, {
    "date": "2019-06-28T19:15:26.926Z",
    "contactPerson": "Kali White",
    "description": "Et assumenda error dolor nisi dolore voluptatem dolorum quae nihil. Sed ut similique quaerat. Impedit itaque est rerum perferendis cumque praesentium est saepe.",
    "phone": "522.495.2356 x45168",
    "email": "Michaela.Trantow23@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kiełczowska 60, 51-315 Wrocław",
    "geolat": 51.14655,
    "geolng": 17.13353
}, {
    "date": "2019-06-29T10:55:26.302Z",
    "contactPerson": "Kayla Heathcote",
    "description": "Atque necessitatibus officiis laudantium. Saepe et ab eum eligendi eos qui. Molestiae dolorum porro quasi necessitatibus et voluptatem expedita in. Et est nihil quasi sed ut qui quia deserunt eum. Laudantium quibusdam quam nam eos et consequatur. Ad autem commodi quibusdam error ipsam nihil maiores.",
    "phone": "929-609-4437 x16462",
    "email": "Kristopher89@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kraszewskiego 21, 50-229 Wrocław",
    "geolat": 51.12891,
    "geolng": 17.03292
}, {
    "date": "2019-06-28T20:27:57.847Z",
    "contactPerson": "Coleman Auer",
    "description": "Aperiam inventore quisquam qui et. Quia enim nobis. Magnam placeat fugit. Officiis eaque hic perspiciatis enim neque. Qui nostrum et repellendus impedit voluptas aut. Illo eaque tempore nostrum.",
    "phone": "435-550-0708",
    "email": "Alford.Schultz@yahoo.com",
    "status": "W toku",
    "address": "Borowska 114, 50-566 Wrocław",
    "geolat": 51.08538,
    "geolng": 17.03611
}, {
    "date": "2019-06-29T06:14:32.822Z",
    "contactPerson": "Frederick Oberbrunner",
    "description": "Vel quibusdam voluptates nihil voluptatem dolorum. Enim sed ducimus explicabo repellat et veniam ab amet eligendi. Totam aut cum illo cum porro fugiat. Quis possimus non qui velit. Repudiandae eos repellendus alias officiis.",
    "phone": "920-388-0474 x506",
    "email": "Imelda.Kunze25@gmail.com",
    "status": "Zamknięta",
    "address": "Fromborska 47, 54-111 Wrocław",
    "geolat": 51.1497,
    "geolng": 16.943
}, {
    "date": "2019-06-28T18:59:50.061Z",
    "contactPerson": "Elza Pagac",
    "description": "Possimus vitae ab ullam et voluptas atque. Nam dolorem nihil. Illo beatae omnis sed.",
    "phone": "881-834-8242 x799",
    "email": "Otho.Mills74@gmail.com",
    "status": "Do weryfikacji",
    "address": "Komandorska 66, 53-343 Wrocław",
    "geolat": 51.09471,
    "geolng": 17.02822
}, {
    "date": "2019-06-28T23:36:24.226Z",
    "contactPerson": "Jeanette Crona",
    "description": "Esse consequuntur perspiciatis eveniet eveniet illo et sit. Optio facilis exercitationem est vitae inventore atque quod molestiae repellat.",
    "phone": "592.418.5832",
    "email": "Ayden.Rosenbaum3@yahoo.com",
    "status": "Zamknięta",
    "address": "Krakowska 70/80, 50-426 Wrocław",
    "geolat": 51.09196,
    "geolng": 17.06287
}, {
    "date": "2019-06-29T09:46:21.580Z",
    "contactPerson": "Maximus O'Conner",
    "description": "Omnis asperiores minima sed enim laudantium velit vel inventore. Eum ullam voluptas itaque eos nisi nam. Odit voluptatem odit animi voluptas quia placeat neque.",
    "phone": "172.927.0375 x531",
    "email": "Elmira_Bergstrom9@gmail.com",
    "status": "Do podjęcia",
    "address": "Świętego Wincentego 1, 50-253 Wrocław",
    "geolat": 51.12256,
    "geolng": 17.03171
}, {
    "date": "2019-06-28T19:54:26.733Z",
    "contactPerson": "Hulda Rempel",
    "description": "Eveniet dolorem sapiente voluptatem minus sed. Et non explicabo deleniti dolores minima harum asperiores cumque. Magni quaerat minus asperiores qui excepturi et deserunt hic dolores.",
    "phone": "(839) 131-5898 x582",
    "email": "Garnett59@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Widna 17, 50-543 Wrocław",
    "geolat": 51.08535,
    "geolng": 17.04497
}, {
    "date": "2019-06-29T14:44:35.927Z",
    "contactPerson": "Kareem Price",
    "description": "Quibusdam non eum aut. Eligendi iure et fugit dolorem.",
    "phone": "113.526.1353",
    "email": "Jody.Dibbert@yahoo.com",
    "status": "W toku",
    "address": "Syrokomli 46, 51-141 Wrocław",
    "geolat": 51.14105,
    "geolng": 17.04706
}, {
    "date": "2019-06-29T07:35:09.833Z",
    "contactPerson": "Isom Ferry",
    "description": "Est at neque qui ea fugit voluptatem beatae vero. Aut eligendi quae et quia aut blanditiis aliquam sint. Quibusdam est delectus temporibus aliquam error et. Veritatis aut autem.",
    "phone": "924-365-7977",
    "email": "Keith.Moore@yahoo.com",
    "status": "Zamknięta",
    "address": "Krynicka 4, 50-555 Wrocław",
    "geolat": 51.08219,
    "geolng": 17.04619
}, {
    "date": "2019-06-29T07:50:10.921Z",
    "contactPerson": "Natalia Russel",
    "description": "Officiis est occaecati nesciunt rerum. Quo maxime maiores nemo voluptatem. Hic labore est adipisci et aut ipsa quos. Molestiae et praesentium.",
    "phone": "606.749.8213 x69323",
    "email": "Dianna_Kertzmann@gmail.com",
    "status": "W toku",
    "address": "Sielska 3, 54-144 Wrocław",
    "geolat": 51.1402,
    "geolng": 16.96276
}, {
    "date": "2019-06-29T05:37:28.743Z",
    "contactPerson": "Caden Hane",
    "description": "Tempora quaerat non ut consectetur ad et tempora. Possimus voluptatem aut molestiae deserunt.",
    "phone": "1-382-250-5945 x051",
    "email": "Xzavier_Nitzsche89@hotmail.com",
    "status": "Do podjęcia",
    "address": "Braniborska 14, 53-680 Wrocław",
    "geolat": 51.11022,
    "geolng": 17.01526
}, {
    "date": "2019-06-29T06:42:05.787Z",
    "contactPerson": "Lillian Stanton",
    "description": "Omnis nemo minima tempora voluptatem veniam. Harum eum dolorum. Rerum ut nihil. Optio mollitia repellat nostrum autem illum.",
    "phone": "922.726.7502 x10956",
    "email": "Carlee.Schmitt@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Okulickiego 19, 51-216 Wrocław",
    "geolat": 51.16267,
    "geolng": 17.12523
}, {
    "date": "2019-06-29T00:39:22.673Z",
    "contactPerson": "Teagan Rutherford",
    "description": "Et occaecati ut. Itaque qui quis quo fugiat nam sit laboriosam et. Repellat dolorum quis qui ut labore illo occaecati libero. Dolor sunt et. Error modi ea totam. Voluptatibus est dignissimos.",
    "phone": "(597) 955-8831 x65834",
    "email": "Delta_Harber@hotmail.com",
    "status": "Do podjęcia",
    "address": "Grota-Roweckiego 76, 52-232 Wrocław",
    "geolat": 51.0622,
    "geolng": 17.03276
}, {
    "date": "2019-06-28T16:49:25.402Z",
    "contactPerson": "Brisa Braun",
    "description": "Optio minima porro molestias enim fugit tempora. Nulla non consectetur dolor inventore placeat sint architecto itaque.",
    "phone": "(233) 686-3836 x631",
    "email": "Amelia61@yahoo.com",
    "status": "Zamknięta",
    "address": "al. Hallera 52, 53-324 Wrocław",
    "geolat": 51.08842,
    "geolng": 16.9988
}, {
    "date": "2019-06-28T22:26:44.446Z",
    "contactPerson": "Jayda Beatty",
    "description": "Consectetur et quia quo. Magnam quam perferendis quaerat aspernatur dignissimos corrupti. Asperiores magnam consequatur eum quia aut at dolor. Quia repellat et illo dolores officiis ut inventore iusto ut. Aut itaque libero fugit expedita et.",
    "phone": "989.566.1229 x92036",
    "email": "Prudence_Huel@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Kamienna 145, 50-545 Wrocław",
    "geolat": 51.08568,
    "geolng": 17.04593
}, {
    "date": "2019-06-29T03:07:10.364Z",
    "contactPerson": "Narciso Rowe",
    "description": "Et nihil odio accusamus eaque delectus nulla repudiandae nulla magnam. Architecto harum nostrum molestiae blanditiis nostrum.",
    "phone": "181-622-4889 x653",
    "email": "Gladyce_Wintheiser@hotmail.com",
    "status": "W toku",
    "address": "Mrągowska 4, 54-107 Wrocław",
    "geolat": 51.15105,
    "geolng": 16.94066
}, {
    "date": "2019-06-28T17:17:39.996Z",
    "contactPerson": "Fabiola Kshlerin",
    "description": "Nihil voluptas quia nihil atque repellendus. Provident reprehenderit unde sunt aliquid voluptate. Possimus itaque consectetur repudiandae. Inventore voluptatem voluptatem qui adipisci. Quasi sunt quos rerum aut laborum debitis et id.",
    "phone": "1-967-937-3344",
    "email": "Kailyn.Wiza99@gmail.com",
    "status": "Do podjęcia",
    "address": "Braniborska 84, 53-680 Wrocław",
    "geolat": 51.11184,
    "geolng": 17.00613
}, {
    "date": "2019-06-29T12:40:06.949Z",
    "contactPerson": "Ignacio Kassulke",
    "description": "Et quibusdam eos dolor suscipit et eos officiis eaque. Quod sequi numquam id in corporis. Eveniet sed libero et commodi fugiat voluptatum cumque. Molestiae enim dolor cupiditate nobis id incidunt. Optio cum commodi. Assumenda quo cum sequi officia facilis rem beatae ut.",
    "phone": "560.161.8137 x055",
    "email": "Ruben_Kling@hotmail.com",
    "status": "Do podjęcia",
    "address": "Tarnogórska 1, 52-021 Wrocław",
    "geolat": 51.0754,
    "geolng": 17.08635
}, {
    "date": "2019-06-29T09:03:52.300Z",
    "contactPerson": "Arlie Maggio",
    "description": "Aliquam blanditiis autem illo quibusdam. Omnis totam molestias velit tempore fugit delectus. Minus quae beatae vel illum nobis.",
    "phone": "718.072.0000 x5963",
    "email": "Helga.Brakus47@yahoo.com",
    "status": "Do podjęcia",
    "address": "Mińska 41, 54-610 Wrocław",
    "geolat": 51.10596,
    "geolng": 16.95048
}, {
    "date": "2019-06-29T11:58:35.572Z",
    "contactPerson": "Tyrese VonRueden",
    "description": "Nesciunt ipsa ut. Quasi laudantium cupiditate ducimus occaecati numquam ex alias.",
    "phone": "883-198-5447",
    "email": "Roosevelt_Legros@gmail.com",
    "status": "Do weryfikacji",
    "address": "Grota-Roweckiego 168, 52-214 Wrocław",
    "geolat": 51.05219,
    "geolng": 17.0318
}, {
    "date": "2019-06-29T00:26:53.537Z",
    "contactPerson": "Russ Heidenreich",
    "description": "Est beatae rerum impedit beatae quo reprehenderit in natus optio. Sit magnam porro ea assumenda iure. Sed delectus tenetur aspernatur. Rerum fugit iure. Repellat enim aut quaerat sit voluptatem dolorum culpa et voluptas. Quasi qui porro ut repudiandae.",
    "phone": "010-331-1400",
    "email": "Destiney74@yahoo.com",
    "status": "Do podjęcia",
    "address": "Horbaczewskiego 4-6, 54-160 Wrocław",
    "geolat": 51.12721,
    "geolng": 16.97522
}, {
    "date": "2019-06-29T11:41:09.878Z",
    "contactPerson": "Brendon Bauch",
    "description": "Sit doloremque omnis impedit. Non optio sequi in aut. Aut voluptatem velit eum aliquam nam rem natus repellat. Similique tempore numquam est dolorem et itaque culpa. Laboriosam ipsum qui et dolores.",
    "phone": "(068) 563-8732 x045",
    "email": "Hulda.Williamson@gmail.com",
    "status": "W toku",
    "address": "Kiełczowska 70, 51-315 Wrocław",
    "geolat": 51.14631,
    "geolng": 17.13454
}, {
    "date": "2019-06-29T00:53:35.302Z",
    "contactPerson": "Wilson Ryan",
    "description": "Ex eligendi debitis ducimus blanditiis perspiciatis repellendus. Veniam dolor eos rerum quis eos mollitia dignissimos aut. Non quia veritatis est a optio. Consectetur sit quis animi tenetur porro neque quidem et id. Et harum fuga explicabo animi porro corporis repellat et. Et ut consequatur perspiciatis necessitatibus incidunt perferendis saepe sit dignissimos.",
    "phone": "851-579-3851 x7630",
    "email": "Kaylee_Dickens@gmail.com",
    "status": "W toku",
    "address": "Swobodna 60, 50-088 Wrocław",
    "geolat": 51.09898,
    "geolng": 17.02519
}, {
    "date": "2019-06-28T23:02:17.987Z",
    "contactPerson": "Adrien Mitchell",
    "description": "Est et expedita voluptatem dolorem modi consectetur reiciendis eum totam. Ullam repudiandae mollitia saepe non rem ipsa odio officia. Perferendis natus et aut inventore. Ratione dignissimos dolorem repellat numquam et. Facere aliquam eum doloremque qui impedit et eligendi ut.",
    "phone": "567-384-6037",
    "email": "Anibal.Abshire@gmail.com",
    "status": "Do podjęcia",
    "address": "Olszewskiego 17A, 51-631 Wrocław",
    "geolat": 51.10291,
    "geolng": 17.09492
}, {
    "date": "2019-06-29T11:29:43.116Z",
    "contactPerson": "Jaron Braun",
    "description": "Ex et iusto voluptatibus. Occaecati numquam perferendis dignissimos quasi iure error. Officia voluptatem rerum autem.",
    "phone": "(779) 538-8239",
    "email": "Abagail_Ernser48@gmail.com",
    "status": "W toku",
    "address": "Czekoladowa 9, 52-326 Wrocław",
    "geolat": 51.0486,
    "geolng": 16.9627
}, {
    "date": "2019-06-29T15:14:27.884Z",
    "contactPerson": "Therese Doyle",
    "description": "Quos et et aperiam amet similique tempora id mollitia. Minima voluptatem facilis nulla necessitatibus quis ut aut vero nesciunt. Sunt rerum inventore libero facere. Nihil perferendis quasi qui natus. Labore nisi itaque laboriosam non cupiditate. Iusto consequatur natus amet.",
    "phone": "421-138-9087",
    "email": "Verla_Mertz84@hotmail.com",
    "status": "Zamknięta",
    "address": "pl. Grunwaldzki 34, 50-337 Wrocław",
    "geolat": 51.11444,
    "geolng": 17.06922
}, {
    "date": "2019-06-29T04:00:59.557Z",
    "contactPerson": "Valentin Stroman",
    "description": "Similique consequatur est sed nobis. Quis doloribus deleniti. Voluptas vero deserunt neque est tempore. Quis rerum commodi quo consectetur dolor qui sint.",
    "phone": "(680) 983-7143",
    "email": "Kade21@gmail.com",
    "status": "Do podjęcia",
    "address": "Oleska 5, 51-200 Wrocław",
    "geolat": 51.15947,
    "geolng": 17.13396
}, {
    "date": "2019-06-28T20:18:45.990Z",
    "contactPerson": "Ross Frami",
    "description": "Error commodi fuga quia eveniet natus sint tempora. Et totam est accusantium et nemo sed. Repudiandae id eveniet et aliquam quas qui.",
    "phone": "105.191.4686 x0455",
    "email": "Hadley.Hauck@yahoo.com",
    "status": "Zamknięta",
    "address": "Grunwaldzka 67, 50-357 Wrocław",
    "geolat": 51.11451,
    "geolng": 17.06655
}, {
    "date": "2019-06-29T14:33:02.610Z",
    "contactPerson": "Roosevelt Huel",
    "description": "Ut neque deserunt. In cupiditate nisi et expedita adipisci nobis minus.",
    "phone": "529-042-0897 x79305",
    "email": "Vergie.Macejkovic@hotmail.com",
    "status": "W toku",
    "address": "Królewiecka 68, 54-117 Wrocław",
    "geolat": 51.15725,
    "geolng": 16.92255
}, {
    "date": "2019-06-29T08:27:06.891Z",
    "contactPerson": "Alden Harvey",
    "description": "Quam perspiciatis sit cum voluptas. Error dolores aliquam non explicabo temporibus illum voluptas. Iusto voluptatem voluptas blanditiis. Nemo aut facere quos maiores velit consequatur. Nisi soluta at. Ut provident enim qui ea ullam exercitationem quae.",
    "phone": "360-797-6945 x09937",
    "email": "Colton_Larkin@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Swobodna 37, 50-088 Wrocław",
    "geolat": 51.10058,
    "geolng": 17.02419
}, {
    "date": "2019-06-29T07:51:12.248Z",
    "contactPerson": "Landen O'Conner",
    "description": "Placeat sed earum non voluptate voluptatem aut est. Enim illum non recusandae unde porro qui consequatur fugit. Sit repudiandae in. Beatae dignissimos non quos voluptatum vitae animi suscipit et beatae.",
    "phone": "1-563-916-5264",
    "email": "Mozell_Bins90@hotmail.com",
    "status": "W toku",
    "address": "Białowieska 13A, 54-234 Wrocław",
    "geolat": 51.12378,
    "geolng": 16.9931
}, {
    "date": "2019-06-29T14:34:30.356Z",
    "contactPerson": "Kristy Corkery",
    "description": "Debitis id et consequatur. Veritatis aspernatur deserunt qui ad tempora sed eos quisquam nesciunt.",
    "phone": "(579) 899-3061 x5620",
    "email": "Darrion.Medhurst2@gmail.com",
    "status": "Zamknięta",
    "address": "Budziszyńska 107, 54-438 Wrocław",
    "geolat": 51.11313,
    "geolng": 16.95406
}, {
    "date": "2019-06-28T22:43:23.362Z",
    "contactPerson": "Erika Fay",
    "description": "Fugiat temporibus iure omnis quia ut provident nesciunt. Ducimus pariatur corrupti voluptatem reiciendis in id rerum ab. Doloribus vitae laborum. Excepturi corrupti eligendi corrupti aut qui et. Voluptas vero praesentium officiis saepe nostrum voluptates numquam.",
    "phone": "538.943.5558",
    "email": "Ignatius_Upton34@hotmail.com",
    "status": "Zamknięta",
    "address": "Honoriusza Balzaka 85, 52-437 Wrocław",
    "geolat": 51.07827,
    "geolng": 16.95867
}, {
    "date": "2019-06-28T17:57:57.682Z",
    "contactPerson": "Effie Trantow",
    "description": "Aut consequatur reprehenderit molestiae reiciendis dolorem facere doloribus. Accusamus quasi omnis possimus iusto est ad.",
    "phone": "839-004-6254 x444",
    "email": "Laverne38@hotmail.com",
    "status": "Zamknięta",
    "address": "Wapienna 35, 50-518 Wrocław",
    "geolat": 51.08759,
    "geolng": 17.0418
}, {
    "date": "2019-06-28T17:52:03.716Z",
    "contactPerson": "Jordy Haley",
    "description": "Sed quisquam dolorem. Dolores nostrum vitae ipsa totam deserunt. Error nostrum sed sapiente est et dolore. Suscipit qui explicabo illo et qui quasi corporis et. Qui esse quam et porro.",
    "phone": "154.255.1941",
    "email": "Eric27@hotmail.com",
    "status": "Do podjęcia",
    "address": "Krępicka 44, 54-018 Wrocław",
    "geolat": 51.15034,
    "geolng": 16.86185
}, {
    "date": "2019-06-29T10:17:41.886Z",
    "contactPerson": "Jason Doyle",
    "description": "Qui esse iure occaecati ratione. Qui provident nisi et numquam corrupti animi omnis. Illo vel itaque maiores occaecati.",
    "phone": "(624) 085-9690",
    "email": "Nash.Zulauf@gmail.com",
    "status": "Do weryfikacji",
    "address": "Słubicka 18, 53-615 Wrocław",
    "geolat": 51.11788,
    "geolng": 17.00109
}, {
    "date": "2019-06-29T15:04:21.511Z",
    "contactPerson": "Jaleel Davis",
    "description": "Rem eos minima nesciunt. Illo recusandae vero eos. Rerum debitis sint. Illo voluptatem vero minima laboriosam dolor officiis aspernatur excepturi hic. Quibusdam autem alias.",
    "phone": "(383) 455-7777",
    "email": "Bud_Ritchie@yahoo.com",
    "status": "Do podjęcia",
    "address": "Adama Mickiewicza 98, 51-684 Wrocław",
    "geolat": 51.11429,
    "geolng": 17.10428
}, {
    "date": "2019-06-28T16:37:24.195Z",
    "contactPerson": "Alfred Dickens",
    "description": "Est dolorum qui voluptatum natus aliquam ut. Voluptate consectetur aut dicta quo consequatur at. Et ut maxime fuga ut voluptas. Magni placeat accusamus. Corporis quis sed quo fugiat vel rerum sapiente.",
    "phone": "(496) 141-8740 x1114",
    "email": "Harry53@yahoo.com",
    "status": "Do podjęcia",
    "address": "Legnicka 67, 54-205 Wrocław",
    "geolat": 51.1271,
    "geolng": 16.98111
}, {
    "date": "2019-06-28T22:10:23.653Z",
    "contactPerson": "Veronica Hermiston",
    "description": "Voluptatum velit deleniti unde. Optio sapiente distinctio eaque et voluptatem sed. Tempora sed fugiat. Expedita cum et et quisquam. Nihil repellat recusandae.",
    "phone": "771-309-7067 x9508",
    "email": "Alexzander_Breitenberg15@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Boguszowska 82, 54-046 Wrocław",
    "geolat": 51.15037,
    "geolng": 16.89215
}, {
    "date": "2019-06-29T15:50:23.179Z",
    "contactPerson": "Rusty Stokes",
    "description": "Quod fuga ipsum quod illum aperiam. Tempore illo optio totam iure quia harum quaerat aperiam sunt. Nemo consequatur quas in voluptas rerum voluptas animi.",
    "phone": "132.022.9860 x72209",
    "email": "Xander.Reichert@yahoo.com",
    "status": "W toku",
    "address": "Strachocińska 166, 51-518 Wrocław",
    "geolat": 51.10284,
    "geolng": 17.1558
}, {
    "date": "2019-06-29T12:12:43.447Z",
    "contactPerson": "Bernadette Howell",
    "description": "Atque ut autem et dolorem corporis veritatis deserunt. Omnis tempora dolorum velit ab aut excepturi perspiciatis illo. Ipsa labore a magni dolores totam esse.",
    "phone": "945.251.3654",
    "email": "Misty.Bechtelar@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Promień 4, 51-659 Wrocław",
    "geolat": 51.10309,
    "geolng": 17.1009
}, {
    "date": "2019-06-29T14:40:55.736Z",
    "contactPerson": "Summer Keebler",
    "description": "Est voluptatibus velit sed. Velit ipsum officiis quo harum distinctio deserunt fugiat.",
    "phone": "116.621.6470 x92700",
    "email": "Tessie_Toy87@hotmail.com",
    "status": "Zamknięta",
    "address": "Strachocińska 53, 51-518 Wrocław",
    "geolat": 51.10896,
    "geolng": 17.13927
}, {
    "date": "2019-06-29T07:17:36.380Z",
    "contactPerson": "Elda Kutch",
    "description": "In cupiditate numquam laudantium officiis expedita possimus laudantium magnam exercitationem. Quia natus sed nihil impedit consequatur qui in vel ipsa. Sed reprehenderit praesentium officiis deleniti facilis id natus et.",
    "phone": "1-437-535-1759 x1725",
    "email": "Armando.Brown@yahoo.com",
    "status": "W toku",
    "address": "al. Karkonoska 83A, 53-015 Wrocław",
    "geolat": 51.0546,
    "geolng": 16.97701
}, {
    "date": "2019-06-28T23:45:14.250Z",
    "contactPerson": "Valentina Quitzon",
    "description": "Corporis est dicta nemo qui porro id quia laborum. Aut quia magni quibusdam suscipit voluptatem sit accusamus qui asperiores. Est id quia omnis dolorem est veniam perspiciatis reprehenderit. Laboriosam eos ipsum eveniet sapiente in in quibusdam vero. Sequi quisquam dolor ratione rem sapiente et iure est sunt. Libero doloribus dolorum dolorem sed eaque exercitationem velit laudantium voluptates.",
    "phone": "268-975-6959 x235",
    "email": "Maximillian_Waters@yahoo.com",
    "status": "Do podjęcia",
    "address": "Poleska 50, 51-354 Wrocław",
    "geolat": 51.1424,
    "geolng": 17.12779
}, {
    "date": "2019-06-29T11:05:48.395Z",
    "contactPerson": "Brock Dare",
    "description": "Occaecati blanditiis quaerat iusto autem assumenda. Molestiae est excepturi reprehenderit sed animi aperiam rerum.",
    "phone": "673-387-1916 x74170",
    "email": "Marcel90@yahoo.com",
    "status": "Do podjęcia",
    "address": "Długa 37, 53-633 Wrocław",
    "geolat": 51.12133,
    "geolng": 17.01561
}, {
    "date": "2019-06-29T06:14:04.134Z",
    "contactPerson": "Florence Konopelski",
    "description": "Numquam voluptatibus atque alias ratione. Deleniti quia et omnis et deserunt modi. Amet quis eum.",
    "phone": "(870) 899-0133 x58601",
    "email": "Nickolas.Schulist34@yahoo.com",
    "status": "Zamknięta",
    "address": "Racławicka 37, 53-149 Wrocław",
    "geolat": 51.08331,
    "geolng": 17.00491
}, {
    "date": "2019-06-29T05:07:25.267Z",
    "contactPerson": "Greg Crooks",
    "description": "Alias reprehenderit veritatis voluptate reiciendis voluptatum vitae voluptas ex excepturi. Molestiae ut sint non veritatis odio. Non deserunt laborum illum ut dolores nisi est. Ratione sunt quibusdam veritatis. Laboriosam voluptatibus ad quisquam libero modi deserunt omnis totam.",
    "phone": "(034) 925-5060 x745",
    "email": "Genevieve_Bauch@yahoo.com",
    "status": "Zamknięta",
    "address": "Bardzka 1C, 50-517 Wrocław",
    "geolat": 51.08468,
    "geolng": 17.04674
}, {
    "date": "2019-06-29T15:35:40.274Z",
    "contactPerson": "Derek Hilpert",
    "description": "Porro ratione aspernatur sed est alias tempora. Dicta perferendis sed sequi enim est perferendis. Quasi quod dolorem dolorem ducimus dolor distinctio. Doloribus distinctio sapiente temporibus qui. Temporibus ea corrupti. Accusantium dolor ducimus.",
    "phone": "780-426-9057",
    "email": "Kristin_Powlowski81@hotmail.com",
    "status": "Zamknięta",
    "address": "Gajowicka 138, 53-323 Wrocław",
    "geolat": 51.08924,
    "geolng": 17.00725
}, {
    "date": "2019-06-29T03:48:50.602Z",
    "contactPerson": "Damion Lemke",
    "description": "Suscipit blanditiis ut aut non doloremque voluptas voluptatem rem. Doloribus sequi pariatur sit illo qui architecto magni eius.",
    "phone": "(727) 568-6649",
    "email": "Simone45@gmail.com",
    "status": "W toku",
    "address": "Świeradowska 70, 50-559 Wrocław",
    "geolat": 51.0774,
    "geolng": 17.04711
}, {
    "date": "2019-06-29T05:41:07.420Z",
    "contactPerson": "Alessandra Franecki",
    "description": "Accusantium libero commodi repellat et adipisci sunt sint non deleniti. Sint et qui beatae nam laborum ullam voluptatibus. Est saepe alias animi sunt ut necessitatibus. Excepturi ullam velit non beatae.",
    "phone": "(183) 944-4270",
    "email": "Wilson55@yahoo.com",
    "status": "Zamknięta",
    "address": "Jantarowa 18, 53-330 Wrocław",
    "geolat": 51.09265,
    "geolng": 17.01292
}, {
    "date": "2019-06-29T13:35:16.218Z",
    "contactPerson": "Nina Rolfson",
    "description": "Non accusantium natus quia voluptatem dolore ea. Eos quidem sit doloremque harum. Provident deserunt ea debitis eligendi expedita commodi enim. Amet rem voluptas labore ullam recusandae fuga quas ducimus earum. Eius debitis facere corporis non quasi placeat sequi nisi commodi. Dignissimos voluptates qui.",
    "phone": "493-870-0552",
    "email": "Abdullah_Sauer6@hotmail.com",
    "status": "W toku",
    "address": "Jerzego Bajana 1, 54-129 Wrocław",
    "geolat": 51.13026,
    "geolng": 16.96514
}, {
    "date": "2019-06-28T23:17:27.406Z",
    "contactPerson": "Jordane Gerlach",
    "description": "Rerum modi omnis doloremque nisi quaerat saepe dolor. Ex iusto voluptas dolor vel iure vitae at. Vitae tenetur voluptas numquam dignissimos cum. Doloremque dolor veritatis aperiam magni minus veritatis eum aut.",
    "phone": "100.524.1246 x275",
    "email": "Dayne_Bernhard@gmail.com",
    "status": "W toku",
    "address": "Na Ostatnim Groszu 24/26, 54-207 Wrocław",
    "geolat": 51.12138,
    "geolng": 16.97534
}, {
    "date": "2019-06-29T03:05:13.643Z",
    "contactPerson": "Sid Rath",
    "description": "Illo minima dolores tempore quia labore. Ipsa quae et. Qui autem quo culpa et aut recusandae quasi numquam.",
    "phone": "1-989-283-8200",
    "email": "Colby.Schmitt70@yahoo.com",
    "status": "W toku",
    "address": "Inżynierska 19, 53-228 Wrocław",
    "geolat": 51.09488,
    "geolng": 16.99037
}, {
    "date": "2019-06-28T18:24:33.709Z",
    "contactPerson": "Effie Keebler",
    "description": "Expedita voluptatum et temporibus. Et assumenda doloremque velit. Quia quo iusto blanditiis. Et vel quo placeat eum voluptate voluptas. In blanditiis est ea voluptatem incidunt dolores.",
    "phone": "133-894-9049",
    "email": "Eileen.Jacobson@hotmail.com",
    "status": "W toku",
    "address": "Gazowa 3, 50-513 Wrocław",
    "geolat": 51.0777,
    "geolng": 17.06953
}, {
    "date": "2019-06-28T17:22:10.969Z",
    "contactPerson": "Amos Little",
    "description": "Velit quasi numquam rem aut. Dolores provident ut quod animi ut voluptas. Omnis similique voluptas autem temporibus numquam omnis laudantium. Doloribus accusantium sit eius. Deserunt ullam iure ipsam.",
    "phone": "551.587.3658 x1292",
    "email": "Makayla_Lemke@hotmail.com",
    "status": "Do podjęcia",
    "address": "Wełniana 31, 54-059 Wrocław",
    "geolat": 51.1585,
    "geolng": 16.89723
}, {
    "date": "2019-06-28T16:48:27.441Z",
    "contactPerson": "Rosie Lowe",
    "description": "Sunt vel dicta. Ullam est nesciunt fuga quis earum quis. Minima blanditiis dolores iste sed veritatis. Laboriosam id autem dolorum assumenda et quidem ipsum alias.",
    "phone": "877-020-3890 x496",
    "email": "Wallace_Okuneva90@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Gagarina 27, 54-620 Wrocław",
    "geolat": 51.09477,
    "geolng": 16.93294
}, {
    "date": "2019-06-29T13:27:07.286Z",
    "contactPerson": "Vaughn Effertz",
    "description": "Ea id eligendi ea ut eos ipsum facilis. Voluptate nostrum dicta aut ex reiciendis qui. Officiis voluptatem quisquam id eveniet magni rerum illo error. Quod sunt quisquam blanditiis at itaque molestias eaque. Itaque voluptatem aperiam temporibus distinctio dicta odit aspernatur mollitia labore.",
    "phone": "(078) 828-6109",
    "email": "Alberto.Bruen94@gmail.com",
    "status": "Do podjęcia",
    "address": "Skłodowskiej-Curie 12, 50-381 Wrocław",
    "geolat": 51.11292,
    "geolng": 17.05696
}, {
    "date": "2019-06-28T22:40:56.148Z",
    "contactPerson": "Ben Swift",
    "description": "Repellat eum sed debitis. Nisi numquam voluptate molestiae neque qui.",
    "phone": "169.292.3926",
    "email": "Katherine_Halvorson@gmail.com",
    "status": "Zamknięta",
    "address": "Romana Dmowskiego 5, 50-203 Wrocław",
    "geolat": 51.11738,
    "geolng": 17.02146
}, {
    "date": "2019-06-29T08:26:01.005Z",
    "contactPerson": "Nayeli Satterfield",
    "description": "Consequatur aut voluptas beatae id voluptatem voluptate. Ut qui aut et. Libero quod quos dicta harum et. Nihil nulla atque quia nemo labore qui. Et dolore eum enim dignissimos animi.",
    "phone": "1-573-657-8530",
    "email": "Chanel_Kunde51@yahoo.com",
    "status": "Do podjęcia",
    "address": "Paprotna 7, 51-117 Wrocław",
    "geolat": 51.15319,
    "geolng": 17.02738
}, {
    "date": "2019-06-29T12:13:43.104Z",
    "contactPerson": "Wellington Abernathy",
    "description": "Eos voluptatum perspiciatis odit quos. Quibusdam sequi eligendi aliquid.",
    "phone": "585-798-1333 x594",
    "email": "Irma.White65@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Solskiego 50, 52-416 Wrocław",
    "geolat": 51.08289,
    "geolng": 16.96965
}, {
    "date": "2019-06-29T13:58:56.643Z",
    "contactPerson": "Brandt Hamill",
    "description": "Sed eius accusamus rerum hic optio consectetur modi non a. Sed pariatur voluptatibus odio sit. Et quia quia asperiores. Minima voluptate voluptatem ad dolorum et ex quam quibusdam nemo.",
    "phone": "141.278.0375 x865",
    "email": "Stone.Bednar@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Armii Krajowej 1, 50-541 Wrocław",
    "geolat": 51.08267,
    "geolng": 17.03611
}, {
    "date": "2019-06-29T15:08:19.862Z",
    "contactPerson": "Yolanda Corwin",
    "description": "Quo dolorem ullam. Doloribus distinctio qui exercitationem corrupti aperiam iusto.",
    "phone": "(957) 266-8215",
    "email": "Cade96@gmail.com",
    "status": "W toku",
    "address": "Borowska 214, 50-558 Wrocław",
    "geolat": 51.07468,
    "geolng": 17.03295
}, {
    "date": "2019-06-29T12:32:51.665Z",
    "contactPerson": "Marlin Cole",
    "description": "Distinctio aperiam non ut rerum. Non asperiores aspernatur dolor non dolor. Suscipit et dolor. Deleniti at voluptatum neque et molestias. Nihil quidem et dolorem et in vel nisi harum fuga. Harum assumenda vero vero dolore animi eos.",
    "phone": "675.367.7446",
    "email": "Dee36@hotmail.com",
    "status": "W toku",
    "address": "Sołtysowicka 17, 51-168 Wrocław",
    "geolat": 51.14046,
    "geolng": 17.07053
}, {
    "date": "2019-06-29T09:48:06.113Z",
    "contactPerson": "Milo Batz",
    "description": "Sapiente eum quia nihil. Ut fugit voluptatem. Ea magni eum dolores. Qui atque et. Natus rem culpa commodi omnis nulla ea. Debitis laboriosam qui velit odio minus.",
    "phone": "220-531-3229",
    "email": "Noe28@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Zakładowa 2/4, 50-231 Wrocław",
    "geolat": 51.13035,
    "geolng": 17.04082
}, {
    "date": "2019-06-28T23:38:25.665Z",
    "contactPerson": "Matteo Schowalter",
    "description": "Facilis adipisci explicabo doloribus. Minima nisi sint. Autem quasi dignissimos.",
    "phone": "(633) 874-8811 x0203",
    "email": "Osbaldo_Feest@gmail.com",
    "status": "Do podjęcia",
    "address": "Hermanowska 43, 54-314 Wrocław",
    "geolat": 51.1234,
    "geolng": 16.95272
}, {
    "date": "2019-06-28T23:17:17.591Z",
    "contactPerson": "Nickolas Bergnaum",
    "description": "Doloremque ut et. Officiis dolorem rerum quos autem sequi quia exercitationem.",
    "phone": "965-132-9130",
    "email": "Noah95@yahoo.com",
    "status": "Do podjęcia",
    "address": "Kiełczowska 42, 51-315 Wrocław",
    "geolat": 51.14725,
    "geolng": 17.12328
}, {
    "date": "2019-06-29T02:05:38.531Z",
    "contactPerson": "Trisha Ritchie",
    "description": "Nihil ut ducimus vero et fugit nemo qui dolor consequuntur. Qui adipisci nihil modi est et. Est cupiditate praesentium delectus voluptas facilis nesciunt porro ad doloribus.",
    "phone": "296-610-3052",
    "email": "Lesly.Ruecker@gmail.com",
    "status": "W toku",
    "address": "Żernicka 211-213, 54-510 Wrocław",
    "geolat": 51.12336,
    "geolng": 16.92479
}, {
    "date": "2019-06-28T22:39:10.307Z",
    "contactPerson": "Leone Murazik",
    "description": "Quis laudantium assumenda est vitae ut. Quam et velit facilis eligendi nobis culpa adipisci. Voluptas vel doloribus quas alias porro ratione. Quia expedita optio. Occaecati qui quibusdam et.",
    "phone": "1-854-430-0243",
    "email": "Moriah77@hotmail.com",
    "status": "Zamknięta",
    "address": "Legnicka 62A, 54-204 Wrocław",
    "geolat": 51.12249,
    "geolng": 16.98976
}, {
    "date": "2019-06-28T17:04:31.574Z",
    "contactPerson": "Shanon Heaney",
    "description": "Minima corporis nostrum. Sunt voluptatem dignissimos. Non eos est magni.",
    "phone": "032-277-8255",
    "email": "Velma_Sanford35@hotmail.com",
    "status": "Zamknięta",
    "address": "Sucha 1, 50-525 Wrocław",
    "geolat": 51.09642,
    "geolng": 17.03438
}, {
    "date": "2019-06-29T01:08:52.358Z",
    "contactPerson": "Troy Wilkinson",
    "description": "Rerum qui voluptatem odio. Quibusdam iure rerum perspiciatis. Quo consectetur inventore ut quidem ut iusto quis voluptas nihil.",
    "phone": "(509) 113-4225 x6180",
    "email": "Kaley.Friesen38@gmail.com",
    "status": "W toku",
    "address": "Królewska 40, 51-210 Wrocław",
    "geolat": 51.15997,
    "geolng": 17.13343
}, {
    "date": "2019-06-29T00:07:16.179Z",
    "contactPerson": "Kitty Mante",
    "description": "Sint ratione qui vero animi ut deserunt. Laudantium ipsum cum sint iure sequi enim possimus. Soluta ut ipsum inventore est vitae qui reiciendis aut. Ipsam in vel molestiae optio ab voluptatem veniam. Blanditiis similique unde ad dolorum fugiat. A aperiam et dolores dolorem aut illo quia.",
    "phone": "(470) 946-6184 x594",
    "email": "Hans.Boehm@hotmail.com",
    "status": "W toku",
    "address": "Jemiołowa 50/54, 53-426 Wrocław",
    "geolat": 51.09543,
    "geolng": 17.00896
}, {
    "date": "2019-06-29T02:42:29.585Z",
    "contactPerson": "Karianne Denesik",
    "description": "Dignissimos omnis ut neque. Dolores maxime suscipit quia sint et adipisci pariatur qui eaque. Accusamus mollitia reprehenderit impedit et ratione et porro. Aut dolorem molestias. Rerum commodi tenetur labore mollitia quis ullam ea. Maxime est in quia harum dolore.",
    "phone": "617.239.5522 x368",
    "email": "Loma_Leffler@gmail.com",
    "status": "Do weryfikacji",
    "address": "Legnicka 48, 54-202 Wrocław",
    "geolat": 51.11785,
    "geolng": 16.99632
}, {
    "date": "2019-06-29T12:11:26.786Z",
    "contactPerson": "Dennis Dach",
    "description": "Distinctio odit saepe praesentium dolorem consequuntur aut. Velit nostrum vitae rerum. Sint aut autem voluptas reprehenderit neque sit voluptatem placeat. Excepturi est voluptatibus sint reprehenderit minus ab nobis aspernatur. Sequi facere et voluptas id. Sed eum voluptatibus nisi minima earum fugiat atque omnis.",
    "phone": "1-517-644-5576",
    "email": "Randal.Hilpert29@gmail.com",
    "status": "Zamknięta",
    "address": "Mysłowicka 47, 51-506 Wrocław",
    "geolat": 51.1099,
    "geolng": 17.13804
}, {
    "date": "2019-06-29T07:35:04.317Z",
    "contactPerson": "Bret Wehner",
    "description": "Provident in sed vitae. Provident alias itaque distinctio commodi. Tempore iste vero dolores atque aut placeat totam incidunt ut. Iure explicabo illo.",
    "phone": "(730) 926-4518 x357",
    "email": "Marlee62@gmail.com",
    "status": "Zamknięta",
    "address": "Bacciarellego 6, 51-663 Wrocław",
    "geolat": 51.1057,
    "geolng": 17.11146
}, {
    "date": "2019-06-29T12:08:17.898Z",
    "contactPerson": "Berniece Mante",
    "description": "Architecto quasi ullam dicta earum. Nesciunt quis magnam dolores. Deserunt qui iusto iure rerum veniam. Quod et adipisci fugit repellendus ab cupiditate neque. Quia vitae rerum cum. Et dolores eum eligendi laboriosam eum.",
    "phone": "210-359-9639",
    "email": "Zachary69@hotmail.com",
    "status": "Do weryfikacji",
    "address": "Stalowa 70, 53-425 Wrocław",
    "geolat": 51.1009,
    "geolng": 17.00029
}, {
    "date": "2019-06-28T23:02:35.969Z",
    "contactPerson": "Jaylan Zemlak",
    "description": "Eligendi ullam praesentium. Magni dolor aspernatur officiis sed. Dolores eum dicta ut ad dolor et voluptas. Dolorem labore doloribus et voluptatem debitis sint consequatur quae et. Qui laboriosam soluta quis numquam. Quis in quo laboriosam eius incidunt eius reprehenderit deleniti.",
    "phone": "162-801-8461",
    "email": "Rhoda_Ryan@gmail.com",
    "status": "W toku",
    "address": "Sycowska 70, 51-319 Wrocław",
    "geolat": 51.14656,
    "geolng": 17.10603
}, {
    "date": "2019-06-29T04:37:26.948Z",
    "contactPerson": "Jany Armstrong",
    "description": "Ipsam qui quo et fugit sint nihil esse. Optio eum esse inventore corrupti ab ipsum nulla ab in. At porro aut.",
    "phone": "661-207-3407",
    "email": "Rubie.Murray@gmail.com",
    "status": "Do weryfikacji",
    "address": "Semaforowa 26, 52-115 Wrocław",
    "geolat": 51.0606,
    "geolng": 17.0798
}, {
    "date": "2019-06-29T10:38:58.364Z",
    "contactPerson": "Kira Stanton",
    "description": "Quia porro ea a ea corrupti velit sapiente quae. Voluptatem debitis exercitationem possimus molestiae recusandae nostrum omnis. Eum repellat cumque commodi deleniti dolor dolores. Quasi voluptatum fuga ut exercitationem repellat ad illo voluptatum et.",
    "phone": "660-754-4767 x505",
    "email": "Justice_Kautzer18@yahoo.com",
    "status": "Zamknięta",
    "address": "Swojczycka 82, 51-502 Wrocław",
    "geolat": 51.11363,
    "geolng": 17.12156
}, {
    "date": "2019-06-29T03:16:17.574Z",
    "contactPerson": "Aisha Schuppe",
    "description": "Est quisquam voluptas voluptas quam voluptatem vel praesentium doloremque. Eos qui ipsum. Quia ut aut facilis est consectetur.",
    "phone": "1-124-300-3767 x4662",
    "email": "Enola91@yahoo.com",
    "status": "W toku",
    "address": "Nenckiego 138, 52-212 Wrocław",
    "geolat": 51.05638,
    "geolng": 17.02473
}, {
    "date": "2019-06-29T13:54:38.812Z",
    "contactPerson": "Roel Gaylord",
    "description": "Voluptas architecto accusantium quas commodi quasi aut autem similique. Quo optio consequatur ad. Earum sit aut. Dolor commodi sed natus molestias. Ut nam blanditiis vero aut.",
    "phone": "366.146.4122",
    "email": "Janis_Fisher91@hotmail.com",
    "status": "Do podjęcia",
    "address": "Nowodworska 17A, 54-433 Wrocław",
    "geolat": 51.11517,
    "geolng": 16.96556
}, {
    "date": "2019-06-29T00:49:16.752Z",
    "contactPerson": "Seth Corwin",
    "description": "Ex labore ad recusandae maiores praesentium numquam. Et ab autem et adipisci.",
    "phone": "509-823-5903",
    "email": "Gregory_Kessler@gmail.com",
    "status": "Do podjęcia",
    "address": "Grabiszyńska 238-240, 53-235 Wrocław",
    "geolat": 51.09408,
    "geolng": 16.98156
}, {
    "date": "2019-06-29T11:56:49.448Z",
    "contactPerson": "Lenore Turner",
    "description": "Quos eligendi reprehenderit ut. Labore ut dolores odio et non voluptatem quasi magni repudiandae. Culpa veniam qui incidunt molestiae est dolorem excepturi laboriosam magni.",
    "phone": "(045) 425-0699 x36509",
    "email": "Gideon_Flatley53@gmail.com",
    "status": "Do podjęcia",
    "address": "Górnicza 51A, 54-136 Wrocław",
    "geolat": 51.13689,
    "geolng": 16.95793
}, {
    "date": "2019-06-28T19:24:11.919Z",
    "contactPerson": "Gay Leffler",
    "description": "Sunt sunt nam non molestiae ipsam ea. Cumque animi eum praesentium fugit sed nisi est minima. Perspiciatis nesciunt quibusdam accusantium quos qui cum et. Pariatur iste velit velit magnam sit eum velit nulla. Nemo fugiat similique magnam omnis dolores veritatis sequi qui ipsa. Assumenda odio sunt ut fuga nihil sit.",
    "phone": "451-901-5988",
    "email": "Kareem.McDermott@gmail.com",
    "status": "W toku",
    "address": "Krzemieniecka 46A, 54-001 Wrocław",
    "geolat": 51.09549,
    "geolng": 16.9621
}, {
    "date": "2019-06-29T11:33:51.794Z",
    "contactPerson": "Tyrique Tromp",
    "description": "Odio esse aut. Provident nobis aspernatur. Qui soluta ipsa velit quia. Dolor quibusdam voluptatem reiciendis ratione molestiae.",
    "phone": "346-551-4660",
    "email": "Arielle.Douglas98@hotmail.com",
    "status": "Zamknięta",
    "address": "Karkonoska 52, 53-015 Wrocław",
    "geolat": 51.06131,
    "geolng": 16.99617
}, {
    "date": "2019-06-29T13:50:49.595Z",
    "contactPerson": "Gonzalo Kunde",
    "description": "Eos voluptatem dolores voluptas deserunt. Molestiae voluptatibus ut. Numquam non vel unde. Molestiae et dolore. Non ut autem. Qui possimus molestiae qui alias.",
    "phone": "625.441.2302 x49266",
    "email": "Sonia5@hotmail.com",
    "status": "W toku",
    "address": "Jana Długosza 74, 51-117 Wrocław",
    "geolat": 51.13684,
    "geolng": 17.06711
}, {
    "date": "2019-06-29T05:21:17.332Z",
    "contactPerson": "Marcos Bergstrom",
    "description": "Omnis sapiente dolor magni soluta eligendi nisi et. Impedit et aliquid. Impedit unde quod dolores occaecati illum velit ea. Aspernatur ex accusamus dolor sint atque error dolor aut nobis. Sed eum dolores inventore. Error tenetur quia fugiat accusamus eaque reprehenderit quidem.",
    "phone": "1-711-715-7976",
    "email": "Libbie.Conn@hotmail.com",
    "status": "Do podjęcia",
    "address": "Graniczna 2, 54-610 Wrocław",
    "geolat": 51.10578,
    "geolng": 16.94417
}, {
    "date": "2019-06-28T23:28:22.170Z",
    "contactPerson": "Oscar Lueilwitz",
    "description": "Sed dolor quia. Consequatur eos voluptates et sit.",
    "phone": "979-018-5311 x39918",
    "email": "Felix.Murazik12@hotmail.com",
    "status": "Zamknięta",
    "address": "Gliniana 44, 50-525 Wrocław",
    "geolat": 51.09185,
    "geolng": 17.04003
}, {
    "date": "2019-06-28T20:52:18.310Z",
    "contactPerson": "Darrick Rogahn",
    "description": "Quos eveniet natus quia quis. Sunt vel occaecati sed exercitationem sit.",
    "phone": "1-953-056-6878",
    "email": "Iva73@yahoo.com",
    "status": "Do weryfikacji",
    "address": "Zielińskiego 22A, 53-534 Wrocław",
    "geolat": 51.09984,
    "geolng": 17.02295
}, {
    "date": "2019-06-29T15:13:01.585Z",
    "contactPerson": "Tania Lakin",
    "description": "Consequatur quia aut id voluptates dolores magnam ipsum. Quibusdam explicabo neque.",
    "phone": "855-818-7583",
    "email": "Sydney23@yahoo.com",
    "status": "Zamknięta",
    "address": "Krzywoustego 110, 51-421 Wrocław",
    "geolat": 51.13965,
    "geolng": 17.08194
}];

export function getFakeData(page: number = 1) {
    const pageStart = (page - 1) * 10;
    const pageEnd = page * 10;
    // return FAKE_DATA.slice(pageStart, pageEnd).map(transformKeys);
    return FAKE_DATA.map(transformKeys);
}

function transformKeys(entry: any): RawServerIntervention {
    return {
        'id': String(Math.floor(Math.random() * 10000)),
        'creationDate': entry['date'],
        'fullName': entry['contactPerson'],
        'address': entry['address'],
        'description': entry['description'],
        'status': entry['status'],
        'phoneNumber': entry['phone'],
        'email': entry['email'],
        'geoLat': entry['geolat'],
        'geoLng': entry['geolng'],
    }
}