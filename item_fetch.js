// --------------------- API Fetch & Excel ---------------------
const categoriesData = {
    "result": [{
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Around the World",
            "categType": "General",
            "createdAt": "2022-06-22T12:17:57.531Z",
            "updatedAt": "2025-10-24T22:21:58.927Z",
            "localizedTitle": {
                "ar": "منتجات من حول العالم",
                "ar_EG": "منتجات من حول العالم",
                "el": "Διεθνή",
                "ru": "Вокруг света"
            },
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/819ce8b2feb85ee4ccfbdaa07a6b6667_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "819ce8b2feb85ee4ccfbdaa07a6b6667_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/819ce8b2feb85ee4ccfbdaa07a6b6667_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "XE7kc3ZoS8",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2015-05-11T12:26:54.867Z",
            "updatedAt": "2025-10-24T22:21:01.775Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e9b914ac4e308e3d2e65b925ff4e7bd4_SupermarketNew_babycare.jpg",
            "title": "Baby Care",
            "localizedTitle": {
                "ar": "العناية بالطفل",
                "el": "Φροντίδα Μωρού",
                "ru": "Для младенцев"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "e3a8a148-cacf-4d37-a193-842ead2a4247_tfss-19bbf10a-037d-4a2f-8bc8-3e37066994ec-babycare2.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e3a8a148-cacf-4d37-a193-842ead2a4247_tfss-19bbf10a-037d-4a2f-8bc8-3e37066994ec-babycare2.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "Q1KSfIRQar",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Baby Essentials",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-10T13:21:33.304Z",
            "updatedAt": "2025-10-24T22:21:29.070Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/c5c3675f3d33ecb5d987478b88f70069_CatImage.jpg",
            "localizedTitle": {
                "ar": "لوازم الطفل",
                "ar_EG": "مستلزمات الأطفال",
                "ru": "Предметы первой необходимости для детей"
            },
            "thumbnail": {
                "__type": "File",
                "name": "c5c3675f3d33ecb5d987478b88f70069_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/c5c3675f3d33ecb5d987478b88f70069_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "6t7iySKMFG",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Back 2 School",
            "categType": "General",
            "createdAt": "2025-07-31T05:57:14.097Z",
            "updatedAt": "2025-10-24T22:21:48.439Z",
            "localizedTitle": {
                "ar": "العودة إلى المدرسة",
                "ar_EG": "الرجوع للمدرسة"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2c9a4aac981adbef1f05c70df342dabb_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "2c9a4aac981adbef1f05c70df342dabb_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2c9a4aac981adbef1f05c70df342dabb_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "MG9RsviAqZ",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2016-06-07T09:10:06.852Z",
            "updatedAt": "2025-10-24T22:21:35.042Z",
            "title": "Back to School",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/7500610780d1746ad3d9432a216a3f6a_CatImage.jpg",
            "localizedTitle": {
                "ar": "العودة إلى المدرسة",
                "ar_EG": "الرجوع للمدرسة"
            },
            "categType": "General",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "thumbnail": {
                "__type": "File",
                "name": "7500610780d1746ad3d9432a216a3f6a_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/7500610780d1746ad3d9432a216a3f6a_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "CoZgo10bX7",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Back to School with tMart",
            "categType": "General",
            "createdAt": "2025-08-21T08:18:13.845Z",
            "updatedAt": "2025-10-24T22:22:17.963Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/22d01008d4cd6a3f7c1e3b06e29c1ccc_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "22d01008d4cd6a3f7c1e3b06e29c1ccc_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/22d01008d4cd6a3f7c1e3b06e29c1ccc_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "العودة إلى المدرسة مع تي مارت",
                "ar_EG": "الرجوع للمدرسة مع تي مارت"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "pqYOjgD3Wc",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "categType": "General",
            "createdAt": "2020-10-17T16:43:12.601Z",
            "updatedAt": "2025-10-24T22:22:07.194Z",
            "title": "Bags",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/48e2807e9574eb5e0803868312f4767e_bags_shopping_categ.jpg",
            "localizedTitle": {
                "ar": "حقائب",
                "ru": "Сумки"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "dKfvbXqFE6",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2015-04-24T22:08:06.567Z",
            "updatedAt": "2025-10-24T22:20:57.662Z",
            "title": "Bakery",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2626413af473ffb45d4c0294773fa4c4_SupermarketNew_Bakery.jpg",
            "localizedTitle": {
                "ar": "مخبوزات",
                "el": "Αρτοζαχαροπλαστείο",
                "ru": "Пекарня",
                "ar_EG": "المخبوزات"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "45ddec7e-a2f9-454a-b7d9-5fae4b439e90_tfss-0ffa521a-b86b-48fb-83a1-cedd128c47c8-bakery.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/45ddec7e-a2f9-454a-b7d9-5fae4b439e90_tfss-0ffa521a-b86b-48fb-83a1-cedd128c47c8-bakery.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "5ld8EPImRf",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Beverages",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-10T13:26:59.656Z",
            "updatedAt": "2025-10-24T22:22:27.817Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/4e592a4c08b2f6ca261539e6330f8337_CatImage.jpg",
            "localizedTitle": {
                "ar": "مشروبات",
                "ru": "Напитки",
                "ar_EG": "المشروبات"
            },
            "thumbnail": {
                "__type": "File",
                "name": "4e592a4c08b2f6ca261539e6330f8337_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/4e592a4c08b2f6ca261539e6330f8337_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "wSLGUDRndg",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Body Care",
            "thumbnail": {
                "__type": "File",
                "name": "f57bbb001218089dfa03882323cacec4_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/f57bbb001218089dfa03882323cacec4_CatImage.jpg"
            },
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/f57bbb001218089dfa03882323cacec4_CatImage.jpg",
            "categType": "General",
            "createdAt": "2021-02-10T14:57:24.596Z",
            "updatedAt": "2025-10-24T22:21:02.355Z",
            "localizedTitle": {
                "el": "Περιποίηση Σώματος",
                "ar": "العناية بالجسم",
                "ru": "Уход за телом"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "6hsKy2ropb",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Camping & BBQ Essentials",
            "categType": "General",
            "createdAt": "2022-11-24T09:26:06.252Z",
            "updatedAt": "2025-10-24T22:21:59.019Z",
            "localizedTitle": {
                "ar": "لوازم التخييم والشواء",
                "ar_EG": " مستلزمات التخييم والشواء",
                "ru": "Товары первой необходимости для кемпинга и барбекю",
                "el": "Είδη Μπάρμπεκιου & Κάμπινγκ"
            },
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/f8f9d3c8c1309249fd7afbd94e6147c3_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "f8f9d3c8c1309249fd7afbd94e6147c3_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/f8f9d3c8c1309249fd7afbd94e6147c3_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "XGF1eFhVzD",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/c6576b26c28e453b8bd60b7e0620ee57_CatImage.jpg",
            "title": "Cans & Jars",
            "createdAt": "2015-05-11T12:28:39.549Z",
            "updatedAt": "2025-10-24T22:21:50.356Z",
            "localizedTitle": {
                "ar": "معلبات ومرطبانات",
                "el": "Τυποποιημένα Τρόφιμα",
                "ru": "Консервы и банки",
                "ar_EG": "المعلبات والبرطمانات"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "c6576b26c28e453b8bd60b7e0620ee57_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/c6576b26c28e453b8bd60b7e0620ee57_CatImage.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "R1jHuh3PWL",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/1aa9b08b98ff0a1992473d80420f3134_SupermarketNew_Cerealspacket.jpg",
            "title": "Cereals & Packets",
            "createdAt": "2015-05-11T12:31:52.177Z",
            "updatedAt": "2025-10-24T22:20:32.341Z",
            "localizedTitle": {
                "ar": "حبوب الفطور والمعلبات",
                "el": "Δημητριακά & Άλλα",
                "ar_EG": "حبوب الإفطار والعبوات",
                "ru": "Хлопья и пакеты"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "80e8a4ed-58b4-4439-9ea4-f6c5e7416601_tfss-1da0d541-e038-4958-8a5a-28ae95e47222-cereals.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/80e8a4ed-58b4-4439-9ea4-f6c5e7416601_tfss-1da0d541-e038-4958-8a5a-28ae95e47222-cereals.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "2art2w05CL",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Chips & Candies",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-10T13:40:18.988Z",
            "updatedAt": "2025-10-24T22:21:32.785Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/6d768b51fc6198108ddd753b900989a3_CatImage.jpg",
            "localizedTitle": {
                "ar": "رقائق بطاطس وسكاكر",
                "ar_EG": "شيبس وحلوى",
                "ru": "Чипсы и конфеты"
            },
            "thumbnail": {
                "__type": "File",
                "name": "6d768b51fc6198108ddd753b900989a3_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/6d768b51fc6198108ddd753b900989a3_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "AgIXfaWH1e",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2015-05-11T12:32:41.290Z",
            "updatedAt": "2025-10-24T22:21:27.564Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2166bf7bc2d20f8c3bb3097d6ef7eb9f_SupermarketNew_Chips_Snacks.jpg",
            "title": "Chips & Snacks",
            "localizedTitle": {
                "ar": "رقائق بطاطس ووجبات خفيفة",
                "el": "Πατατάκια & Σνακ",
                "ar_EG": "شيبس وسناكس",
                "ru": "Чипсы и закуски"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "954e2c6f-64b7-42de-9846-1aa253fe70c7_tfss-ea06623d-91cb-47af-925d-7d98c86d832b-candies-snacks.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/954e2c6f-64b7-42de-9846-1aa253fe70c7_tfss-ea06623d-91cb-47af-925d-7d98c86d832b-candies-snacks.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "4ztHHjZalf",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Chocolates & Candies",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2020-01-16T11:24:53.810Z",
            "updatedAt": "2025-10-24T22:21:00.558Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e1ecc119826441fd0f94edda53f5cb3b_SupermarketNew_Chocolatecandies.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "99dfdea0e1258a5effc2610fa3b6a371_ChocolatesCandies-final.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/99dfdea0e1258a5effc2610fa3b6a371_ChocolatesCandies-final.jpg"
            },
            "localizedTitle": {
                "el": "Σοκολάτες & Γλυκίσματα",
                "ar": "شوكولاته وسكاكر",
                "ar_EG": "الشوكولاتة والحلوى",
                "ru": "Шоколад и конфеты"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "fJpd1nGn5m",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Christmas",
            "categType": "General",
            "createdAt": "2021-11-18T05:17:34.721Z",
            "updatedAt": "2025-10-24T22:21:33.884Z",
            "localizedTitle": {
                "ar": "كريسماس",
                "ar_EG": "الكريسماس",
                "el": "Χριστούγεννα",
                "ru": "Рождество"
            },
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/4db919ec4d996ecce10ceb2839cd050d_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "4db919ec4d996ecce10ceb2839cd050d_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/4db919ec4d996ecce10ceb2839cd050d_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "AygDH3173k",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/6fdf52d51a4321751a25b5697382e2ca_CatImage.jpg",
            "createdAt": "2015-05-18T14:17:11.655Z",
            "updatedAt": "2025-10-24T22:21:00.933Z",
            "title": "Coffee & Tea",
            "localizedTitle": {
                "ar": "القهوة والشاي",
                "el": "Καφές & Τσάι",
                "ru": "Кофе и чай"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "6fdf52d51a4321751a25b5697382e2ca_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/6fdf52d51a4321751a25b5697382e2ca_CatImage.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "gp5IFnJ4YP",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Cosmetics",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2020-10-29T08:38:47.901Z",
            "updatedAt": "2025-10-24T22:21:52.016Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b472112566543dd4549d0d1507f72733_Supermarket_Cosmetics.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "b472112566543dd4549d0d1507f72733_Supermarket_Cosmetics.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b472112566543dd4549d0d1507f72733_Supermarket_Cosmetics.jpg"
            },
            "localizedTitle": {
                "el": "Καλλυντικά",
                "ar": "مستحضرات تجميل",
                "ru": "Косметика",
                "ar_EG": "مستحضرات التجميل"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "SNr1z5qkWu",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "updatedAt": "2025-10-24T22:20:37.666Z",
            "title": "Dairy & Eggs",
            "createdAt": "2015-05-01T16:46:42.788Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/fc6e1ea42e1d92021e32183ca32103d5_supermarketNew_CheeseMilkEggs.jpg",
            "localizedTitle": {
                "ar": "ألبان وبيض",
                "el": "Γαλακτοκομικά & Αυγά",
                "ru": "Яйца и молоко",
                "ar_EG": "منتجات الألبان والبيض"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "fa8739cc-cb77-40bf-bb4f-3a5533306c49_tfss-730ba8fe-6a0b-44d9-bcbf-2760daad2b79-dairy-eggs.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/fa8739cc-cb77-40bf-bb4f-3a5533306c49_tfss-730ba8fe-6a0b-44d9-bcbf-2760daad2b79-dairy-eggs.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "Z4odXef58R",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Diwali",
            "categType": "General",
            "createdAt": "2022-10-11T06:39:22.960Z",
            "updatedAt": "2025-10-24T22:22:15.686Z",
            "localizedTitle": {
                "ar": "عيد دِوالي",
                "ru": "Дивали"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/34830f3e8371dc392dd78e73ca91c459_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "34830f3e8371dc392dd78e73ca91c459_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/34830f3e8371dc392dd78e73ca91c459_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "n0Zd5BGBaA",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Easter",
            "thumbnail": {
                "__type": "File",
                "name": "923df07e70f2a49b16a557039454355f_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/923df07e70f2a49b16a557039454355f_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/923df07e70f2a49b16a557039454355f_CatImage.jpg",
            "categType": "General",
            "createdAt": "2022-03-10T09:33:13.736Z",
            "updatedAt": "2025-10-24T22:21:56.727Z",
            "localizedTitle": {
                "el": "Πασχαλινά",
                "ru": "Пасха",
                "ar_EG": "شم النسيم"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "VCi0pFMVOG",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Eid Al Fitr",
            "thumbnail": {
                "__type": "File",
                "name": "51b980ee129bda751fc8471df8988f3c_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/51b980ee129bda751fc8471df8988f3c_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/51b980ee129bda751fc8471df8988f3c_CatImage.jpg",
            "categType": "General",
            "createdAt": "2021-05-09T08:41:37.223Z",
            "updatedAt": "2025-10-24T22:22:17.755Z",
            "localizedTitle": {
                "ar": "عيد الفطر",
                "ru": "Ураза-байрам"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "pW2FpGeUnX",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "El Moulid Sweets",
            "thumbnail": {
                "__type": "File",
                "name": "e27a2b663c0fb571c32978f1697f829e_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e27a2b663c0fb571c32978f1697f829e_CatImage.jpg"
            },
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e27a2b663c0fb571c32978f1697f829e_CatImage.jpg",
            "categType": "General",
            "createdAt": "2021-10-24T09:34:55.918Z",
            "updatedAt": "2025-10-24T22:21:32.058Z",
            "localizedTitle": {
                "ar": "حلويات عيد المولد النبوي الشريف",
                "ar_EG": "حلويات المولد النبوي"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "9syZj7VP0X",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Electronics",
            "categType": "General",
            "createdAt": "2022-07-12T11:35:44.180Z",
            "updatedAt": "2025-10-24T22:20:34.949Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/0bef7783195d367544941a0e98100dc9_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "0bef7783195d367544941a0e98100dc9_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/0bef7783195d367544941a0e98100dc9_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "أجهزة إلكترونية",
                "ar_EG": "أجهزة إلكترونية",
                "el": "Ηλεκτρικά & Ηλεκτρονικά Είδη",
                "ru": "Электроника"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "aTAC3Za6lR",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "EveryHealth",
            "thumbnail": {
                "__type": "File",
                "name": "2775b327df0beaec7bd9eb77328e2f30_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2775b327df0beaec7bd9eb77328e2f30_CatImage.jpg"
            },
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2775b327df0beaec7bd9eb77328e2f30_CatImage.jpg",
            "categType": "General",
            "createdAt": "2023-03-27T08:42:35.446Z",
            "updatedAt": "2025-10-24T22:21:47.588Z",
            "localizedTitle": {
                "ar": "صحة أفضل",
                "ar_EG": "صحة أفضل",
                "ru": "EveryHealth"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "KU4VnLXBk2",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Evian & Volvic",
            "thumbnail": {
                "__type": "File",
                "name": "042423f1b3e99b5f9f61970890b7414a_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/042423f1b3e99b5f9f61970890b7414a_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/042423f1b3e99b5f9f61970890b7414a_CatImage.jpg",
            "categType": "General",
            "createdAt": "2024-07-02T09:13:01.150Z",
            "updatedAt": "2025-10-24T22:21:35.155Z",
            "localizedTitle": {
                "ar": "إفيان وفولفيك",
                "ar_EG": "إفيان وفولفيك"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "CgD4pgFU6F",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Facial Care",
            "thumbnail": {
                "__type": "File",
                "name": "b99ac60c7c325ba2737b0eaa13530866_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b99ac60c7c325ba2737b0eaa13530866_CatImage.jpg"
            },
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b99ac60c7c325ba2737b0eaa13530866_CatImage.jpg",
            "categType": "General",
            "createdAt": "2021-02-10T15:02:10.931Z",
            "updatedAt": "2025-10-24T22:21:45.726Z",
            "localizedTitle": {
                "el": "Περιποίηση Προσώπου",
                "ar": "العناية بالوجه",
                "ru": "Уход за лицом"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "JNvFCFAbWp",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Flash Sale",
            "thumbnail": {
                "__type": "File",
                "name": "e7796daf187a2c4737f9cf1c0d9dd93a_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e7796daf187a2c4737f9cf1c0d9dd93a_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e7796daf187a2c4737f9cf1c0d9dd93a_CatImage.jpg",
            "categType": "General",
            "createdAt": "2025-09-24T13:49:56.105Z",
            "updatedAt": "2025-10-24T22:22:14.254Z",
            "localizedTitle": {
                "ar": "تخفيضات كبرى",
                "ar_EG": "تخفيضات كبرى"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "lFgRQpgLBE",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Flowers & Plants",
            "categType": "General",
            "createdAt": "2023-03-29T11:57:24.354Z",
            "updatedAt": "2025-10-24T22:22:29.726Z",
            "localizedTitle": {
                "ar": "أزهار ونباتات",
                "ar_EG": "أزهار ونباتات",
                "el": "Άνθη & Φυτά",
                "ru": "Цветы и растения"
            },
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d690d9144404e60abe27f87c8aa74f77_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "d690d9144404e60abe27f87c8aa74f77_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d690d9144404e60abe27f87c8aa74f77_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "x5IFXBZIEv",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Food Cupboard",
            "categType": "General",
            "createdAt": "2022-03-25T10:01:00.263Z",
            "updatedAt": "2025-10-24T22:21:31.854Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2d8e3e5b8916712fcd6e59e167360bff_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "2d8e3e5b8916712fcd6e59e167360bff_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2d8e3e5b8916712fcd6e59e167360bff_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "طعام معلّب",
                "ru": "Буфет",
                "ar_EG": "أكل معلب"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "8pFPOKtLRW",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/3d4598ee203d2d2866069af6f2d40baf_CatImage.jpg",
            "title": "Frozen",
            "createdAt": "2015-05-11T12:30:49.539Z",
            "updatedAt": "2025-10-24T22:20:56.635Z",
            "localizedTitle": {
                "ar": "منتجات مجمّدة",
                "el": "Κατεψυγμένα",
                "ru": "Замороженная пища",
                "ar_EG": "منتجات مجمّدة"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "3d4598ee203d2d2866069af6f2d40baf_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/3d4598ee203d2d2866069af6f2d40baf_CatImage.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "BRDEJn9ODW",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/1236850acb077d611908a4f01b2a84ad_SupermarketNew_FruitsVegetables.jpg",
            "title": "Fruits & Vegetables",
            "createdAt": "2015-05-05T18:09:55.587Z",
            "updatedAt": "2025-10-24T22:20:56.344Z",
            "localizedTitle": {
                "ar": "خضار وفواكه",
                "el": "Φρούτα & Λαχανικά",
                "ru": "Овощи и фрукты",
                "ar_EG": "خضار وفاكهة"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "ff1d57fc-e092-46f6-a02a-b950bc220a0c_tfss-b3b5c42e-e021-4e68-b815-9b2999520dbf-vegies.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/ff1d57fc-e092-46f6-a02a-b950bc220a0c_tfss-b3b5c42e-e021-4e68-b815-9b2999520dbf-vegies.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "p6VJ5xGtWs",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "General Health",
            "categType": "General",
            "createdAt": "2022-06-28T13:47:16.395Z",
            "updatedAt": "2025-10-24T22:20:30.292Z",
            "localizedTitle": {
                "ar": "صحة عامة",
                "ar_EG": "صحة عامة",
                "el": "Γενική Υγεία",
                "ru": "Общее состояние здоровья"
            },
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/0c0bb6548ca894fef95468ae8e2cbfad_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "0c0bb6548ca894fef95468ae8e2cbfad_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/0c0bb6548ca894fef95468ae8e2cbfad_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "mYNG2DTWth",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Giving Back",
            "categType": "General",
            "createdAt": "2022-09-07T06:41:40.060Z",
            "updatedAt": "2025-10-24T22:22:04.364Z",
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/a8effa5bd0a26c5087ef6e2cbcec3eca_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "a8effa5bd0a26c5087ef6e2cbcec3eca_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/a8effa5bd0a26c5087ef6e2cbcec3eca_CatImage.jpg"
            },
            "localizedTitle": {
                "ru": "Возврат",
                "ar": "تبرعات",
                "ar_EG": "التبرعات"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "bbTZp9JDUr",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "updatedAt": "2025-10-24T22:21:01.387Z",
            "title": "Grab & Go",
            "createdAt": "2016-02-13T18:25:23.998Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d380945ad345d207697940df2c537b5e_CatImage.jpg",
            "localizedTitle": {
                "ar": "منتجات جاهزة وسريعة",
                "el": "Καφές & Γεύματα",
                "ru": "Еда на вынос",
                "ar_EG": "جاهز وسريع"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "d380945ad345d207697940df2c537b5e_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d380945ad345d207697940df2c537b5e_CatImage.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "hyxXtiOlYV",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Grandiose Exclusives",
            "categType": "General",
            "createdAt": "2025-10-24T10:06:57.064Z",
            "updatedAt": "2025-10-24T22:21:44.012Z",
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "II3HSWFpt2",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Halloween",
            "categType": "General",
            "createdAt": "2021-10-10T14:25:38.863Z",
            "updatedAt": "2025-10-24T22:22:11.737Z",
            "localizedTitle": {
                "ar": "عيد هالوين",
                "ru": "Хеллоуин",
                "ar_EG": "الهالوين"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/157110ceb6af088d8b44de36e74aaabc_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "157110ceb6af088d8b44de36e74aaabc_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/157110ceb6af088d8b44de36e74aaabc_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "hubxTgwjzw",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/3d41f37d267a028101577967997c876a_SupermarketNew_HealthyOrganic.jpg",
            "localizedTitle": {
                "ar": "صحي وعضوي",
                "el": "Υγιεινά & Βιολογικά",
                "ar_EG": "صحي وأورجانيك",
                "ru": "Здоровое питание и органические продукты"
            },
            "title": "Healthy & Organic",
            "createdAt": "2015-07-23T18:25:48.948Z",
            "updatedAt": "2025-10-24T22:21:51.255Z",
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "c17be207-8ba1-4cf3-b304-80c5c6a63446_tfss-7bf85c65-3ab2-454f-b435-d885c2b8a606-health-organic.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/c17be207-8ba1-4cf3-b304-80c5c6a63446_tfss-7bf85c65-3ab2-454f-b435-d885c2b8a606-health-organic.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "R8autwzpDw",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Herbs & Spices",
            "createdAt": "2015-06-01T14:13:16.525Z",
            "updatedAt": "2025-10-24T22:20:34.202Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/550e267733504b53ac25c44336f80eaf_SupermarketNew_Spices.jpg",
            "localizedTitle": {
                "ar": "أعشاب وبهارات",
                "el": "Μπαχαρικά & Βότανα",
                "ru": "Травы и специи",
                "ar_EG": "أعشاب وتوابل"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "72e2a33d-cb11-4415-92a1-3cc5216c93cb_tfss-765da22f-b15b-4d9a-959b-4921214d5559-herbs-spices.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/72e2a33d-cb11-4415-92a1-3cc5216c93cb_tfss-765da22f-b15b-4d9a-959b-4921214d5559-herbs-spices.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "hIAldcKsTZ",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Home Baking",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-20T12:50:22.558Z",
            "updatedAt": "2025-10-24T22:20:33.301Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/26f946bf8bf4e9e8ac948adae2e984c0_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "26f946bf8bf4e9e8ac948adae2e984c0_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/26f946bf8bf4e9e8ac948adae2e984c0_CatImage.jpg"
            },
            "localizedTitle": {
                "el": "Μαγειρική & Ζαχαροπλαστική",
                "ar": "الخَبز في المنزل",
                "ru": "Домашняя выпечка",
                "ar_EG": "الخبز في البيت"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "qodA8KkFGL",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Household Basket",
            "categType": "General",
            "createdAt": "2025-01-28T13:39:17.133Z",
            "updatedAt": "2025-10-24T22:21:58.061Z",
            "localizedTitle": {
                "el": "Καλάθι του Νοικοκυριού"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/de68641c30b98967e601fc9d27990480_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "de68641c30b98967e601fc9d27990480_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/de68641c30b98967e601fc9d27990480_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "WECuGXXPaM",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2015-05-11T12:35:34.304Z",
            "updatedAt": "2025-10-24T22:20:47.691Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/82a8fc5a063a99a13565b53be51404ca_SupermarketNew_HouseholdCare.jpg",
            "title": "Household Care",
            "localizedTitle": {
                "ar": "العناية المنزلية",
                "el": "Οικιακή Φροντίδα",
                "ar_EG": "العناية بالمنزل",
                "ru": "Бытовые товары"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "0759c81e-9c2a-463e-880b-5e743a686912_tfss-7f8bdbc2-cb3b-4839-9097-acf27dcc0e1a-household.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/0759c81e-9c2a-463e-880b-5e743a686912_tfss-7f8bdbc2-cb3b-4839-9097-acf27dcc0e1a-household.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "Snlqw1gMS0",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Household Essentials",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-10T13:45:08.921Z",
            "updatedAt": "2025-10-24T22:21:31.226Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b3e91fe953302d09b26e1941e65720f2_CatImage.jpg",
            "localizedTitle": {
                "ar": "لوازم منزليّة",
                "ar_EG": "مستلزمات المنزل",
                "ru": "Предметы домашнего обихода"
            },
            "thumbnail": {
                "__type": "File",
                "name": "b3e91fe953302d09b26e1941e65720f2_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b3e91fe953302d09b26e1941e65720f2_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "8bdJ5PUFhp",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Hygiene & General Health",
            "categType": "General",
            "createdAt": "2024-04-30T13:42:58.335Z",
            "updatedAt": "2025-10-24T22:21:59.233Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/6309f0a62b1e96db7fdd51e37ffd4a0d_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "6309f0a62b1e96db7fdd51e37ffd4a0d_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/6309f0a62b1e96db7fdd51e37ffd4a0d_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "النظافة الشخصية والصحة العامة",
                "ar_EG": "النظافة الشخصية والصحة العامة",
                "ru": "Гигиена и общий уход"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "Xutz7b4q9y",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/97adeb3d799fbb6ec325beec43168d9d_SupermarketNew_Beauty_Hygiene.jpg",
            "title": "Hygiene & Personal Care",
            "createdAt": "2015-05-11T12:39:30.494Z",
            "updatedAt": "2025-10-24T22:20:59.117Z",
            "localizedTitle": {
                "ar": "النظافة والعناية الشخصية",
                "el": "Προσωπική Υγιεινή",
                "ru": "Личная гигиена"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "616f3591-d47c-46c6-a1c5-117d48c961f3_tfss-3af970f9-c6ea-44c7-b227-c431699cfd77-beauty.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/616f3591-d47c-46c6-a1c5-117d48c961f3_tfss-3af970f9-c6ea-44c7-b227-c431699cfd77-beauty.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "50FfIMDMdU",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "updatedAt": "2025-10-24T22:20:37.304Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/4d8a1cc2188962e9815247c0a1a6ca5d_SupermarketNew_IceCream.jpg",
            "localizedTitle": {
                "ar": "آيس كريم",
                "el": "Παγωτά",
                "ru": "Мороженое"
            },
            "title": "Ice Creams",
            "createdAt": "2015-07-21T18:13:13.438Z",
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "9c464d7f-1baf-440b-bf3a-8de78920d284_tfss-a7d55c20-f18c-41f0-a303-a3068de2b31e-ice-creeams.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/9c464d7f-1baf-440b-bf3a-8de78920d284_tfss-a7d55c20-f18c-41f0-a303-a3068de2b31e-ice-creeams.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "0dZOMS6nTO",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "K-Food Pavilion",
            "categType": "General",
            "createdAt": "2024-10-09T14:30:41.820Z",
            "updatedAt": "2025-10-24T22:21:26.136Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/0192727acf16c576dd71868202bb8477_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "0192727acf16c576dd71868202bb8477_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/0192727acf16c576dd71868202bb8477_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "جناح الأكل الكوري",
                "ar_EG": "جناح الأكل الكوري"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "4cGofcZDo8",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Kitchen & Pantry",
            "categType": "General",
            "createdAt": "2023-08-18T07:40:55.721Z",
            "updatedAt": "2025-10-24T22:21:45.856Z",
            "localizedTitle": {
                "el": "Είδη Κουζίνας",
                "ar": "لوازم المطبخ والمائدة",
                "ar_EG": "المطبخ ومستلزماته",
                "ru": "Кухня и Кладовая"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d1b0d3a296c3e16ae5a4329693d0a8c4_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "d1b0d3a296c3e16ae5a4329693d0a8c4_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d1b0d3a296c3e16ae5a4329693d0a8c4_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "JWnTzOsurN",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Kitchen Cleaning & Essentials",
            "categType": "General",
            "createdAt": "2024-04-30T13:44:58.192Z",
            "updatedAt": "2025-10-24T22:22:23.531Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/907254a7dc290bbefd39c199d00671e7_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "907254a7dc290bbefd39c199d00671e7_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/907254a7dc290bbefd39c199d00671e7_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "تنظيف المطبخ وأساسياته",
                "ar_EG": "تنظيف المطبخ وأساسياته",
                "ru": "Чистка Кухни и основы"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "uiN0FFZWA9",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Laundry Essentials",
            "categType": "General",
            "createdAt": "2024-04-30T13:46:14.213Z",
            "updatedAt": "2025-10-24T22:21:50.463Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d4960d0201eb8cb904ba057b0674b8db_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "d4960d0201eb8cb904ba057b0674b8db_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d4960d0201eb8cb904ba057b0674b8db_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "أساسيات غسيل الملابس",
                "ar_EG": "أساسيات غسيل الملابس",
                "ru": "Предметы первой необходимости для стирки"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "QJuDEIglus",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Lent",
            "categType": "General",
            "createdAt": "2023-02-23T13:55:37.397Z",
            "updatedAt": "2025-10-24T22:21:31.884Z",
            "localizedTitle": {
                "el": "Σαρακοστή",
                "ru": "Великий пост"
            },
            "imageUrl": "https://data-jobs.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/ef06c9fcbe1b6f5ed5b984885a89f96b_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "ef06c9fcbe1b6f5ed5b984885a89f96b_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/ef06c9fcbe1b6f5ed5b984885a89f96b_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "95yFz5sVol",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Lifco Exclusives",
            "categType": "General",
            "createdAt": "2025-08-26T10:21:20.133Z",
            "updatedAt": "2025-10-24T22:20:42.825Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/631ec63cd98b5eb585e7c34052f3a759_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "631ec63cd98b5eb585e7c34052f3a759_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/631ec63cd98b5eb585e7c34052f3a759_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "عروض ليفكو الحصرية",
                "ar_EG": "عروض ليفكو الحصرية"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "bVWnV1AzdE",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Mango Madness",
            "categType": "General",
            "createdAt": "2025-05-07T06:26:01.804Z",
            "updatedAt": "2025-10-24T22:21:49.251Z",
            "localizedTitle": {
                "ar": "جنون المانغا",
                "ar_EG": "جنون المانجو"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e055ab7df6447a321a4d897b19c294a8_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "e055ab7df6447a321a4d897b19c294a8_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e055ab7df6447a321a4d897b19c294a8_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "OfsKYyAZpW",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Maya's Exclusives",
            "categType": "General",
            "createdAt": "2025-01-08T09:42:20.685Z",
            "updatedAt": "2025-10-24T22:21:36.499Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/7de51c5c6885c4e506b37d604b11e2ba_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "7de51c5c6885c4e506b37d604b11e2ba_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/7de51c5c6885c4e506b37d604b11e2ba_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "منتجات ماياس الحصرية",
                "ar_EG": "عروض ماياس الحصرية"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "D0yPL7SyUL",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "updatedAt": "2025-10-24T22:20:57.331Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/a34a13c9fb33861bdb9e801ee3c2bce6_SupermarketNew_meatfish.jpg",
            "title": "Meat & Fish",
            "createdAt": "2015-05-11T12:29:56.635Z",
            "localizedTitle": {
                "ar": "لحوم وأسماك",
                "el": "Κρέας, Αλλαντικά & Ψάρι",
                "ru": "Мясо и рыба",
                "ar_EG": "لحمة وسمك"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "653bd491-4c88-4e4b-99fd-846a833f9fff_tfss-ae813179-8f4f-4826-866b-98e7e5315870-meatfish2.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/653bd491-4c88-4e4b-99fd-846a833f9fff_tfss-ae813179-8f4f-4826-866b-98e7e5315870-meatfish2.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "rRi1XjnUt7",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "More",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/ccd97d17fcb0fe04af83678d9fc97da0_CatImage.jpg",
            "createdAt": "2015-05-31T14:07:17.834Z",
            "updatedAt": "2025-10-24T22:22:02.368Z",
            "localizedTitle": {
                "ar": "المزيد",
                "el": "Περισσότερα",
                "ru": "Больше"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "ccd97d17fcb0fe04af83678d9fc97da0_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/ccd97d17fcb0fe04af83678d9fc97da0_CatImage.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "aCveizcQi5",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Nespresso",
            "categType": "General",
            "createdAt": "2025-05-14T07:27:35.370Z",
            "updatedAt": "2025-10-24T22:22:11.148Z",
            "localizedTitle": {
                "ar": "نسبريسو",
                "ar_EG": "نسبريسو"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/87a3f1b20b81491bbfc36bb93d3ae8a1_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "87a3f1b20b81491bbfc36bb93d3ae8a1_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/87a3f1b20b81491bbfc36bb93d3ae8a1_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "h5MfGOoonj",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "New",
            "categType": "General",
            "createdAt": "2025-02-24T07:44:48.010Z",
            "updatedAt": "2025-10-24T22:21:41.490Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/3302764d4c72433bc3d8cb0b0737a849_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "3302764d4c72433bc3d8cb0b0737a849_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/3302764d4c72433bc3d8cb0b0737a849_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "H552Rv200J",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Non Muslim Section",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2019-11-13T09:07:20.472Z",
            "updatedAt": "2025-10-24T22:21:38.545Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/9de402fbc5a4a1a05f03e2910e6d822d_non-muslim.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "9de402fbc5a4a1a05f03e2910e6d822d_non-muslim.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/9de402fbc5a4a1a05f03e2910e6d822d_non-muslim.jpg"
            },
            "localizedTitle": {
                "el": "Μη Μουσουλμανική ενότητα",
                "ar": "منتجات لغير المسلمين",
                "ru": "Немусульманская секция",
                "ar_EG": "قسم غير المسلمين"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "EYlaPh83z8",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Nordico",
            "thumbnail": {
                "__type": "File",
                "name": "08213a8da49280e4199b039831a116dd_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/08213a8da49280e4199b039831a116dd_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/08213a8da49280e4199b039831a116dd_CatImage.jpg",
            "categType": "General",
            "createdAt": "2025-03-04T07:01:32.598Z",
            "updatedAt": "2025-10-24T22:21:29.046Z",
            "localizedTitle": {
                "ar": "نورديكو",
                "ar_EG": "نورديكو"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "6EzMVYKVqv",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2015-05-19T22:28:27.764Z",
            "updatedAt": "2025-10-24T22:20:56.984Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/e6168349efe4eaeb5d98a2398608a7d1_SupermarketNew_NutsSeeds.jpg",
            "title": "Nuts & Seeds",
            "localizedTitle": {
                "ar": "المكسرات والبذور",
                "el": "Ξηροί Καρποί & Σπόροι",
                "ru": "Орехи и зерна",
                "ar_EG": "المكسرات واللب والبذور"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "fd8a8214-cdeb-4b11-adf7-ed25505d5f54_tfss-61927d5e-1f05-440e-9cae-ab66b81ede4b-nuts.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/fd8a8214-cdeb-4b11-adf7-ed25505d5f54_tfss-61927d5e-1f05-440e-9cae-ab66b81ede4b-nuts.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "kJL2EBTZSS",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Offers",
            "thumbnail": {
                "__type": "File",
                "name": "c6f6678f4b5ff11c10e2d3c7b590e9f6_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/c6f6678f4b5ff11c10e2d3c7b590e9f6_CatImage.jpg"
            },
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/c6f6678f4b5ff11c10e2d3c7b590e9f6_CatImage.jpg",
            "categType": "General",
            "createdAt": "2021-05-26T14:35:19.031Z",
            "updatedAt": "2025-10-24T22:21:36.311Z",
            "localizedTitle": {
                "ar": "عروض",
                "el": "Προσφορές",
                "ru": "Выгодные Скидки"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "DkJopath6M",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Office Supplies",
            "thumbnail": {
                "__type": "File",
                "name": "1addd93e2001163bb794e1057846560b_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/1addd93e2001163bb794e1057846560b_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/1addd93e2001163bb794e1057846560b_CatImage.jpg",
            "categType": "General",
            "createdAt": "2021-06-27T13:54:12.914Z",
            "updatedAt": "2025-10-24T22:21:35.216Z",
            "localizedTitle": {
                "ar": "مستلزمات المكتب",
                "ar_EG": "المستلزمات المكتبية",
                "ru": "Офисные принадлежности"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "CV0oaUTDPW",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Pasta, Rice & More",
            "createdAt": "2015-05-11T12:40:28.793Z",
            "updatedAt": "2025-10-24T22:20:33.823Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/740ccfb9791f4501fb0b4717c8759425_SupermarketNew_pasta.jpg",
            "localizedTitle": {
                "ar": "معكرونة وأرز وغيرهما",
                "el": "Ζυμαρικά, Ρύζι & Άλλα",
                "ar_EG": "المكرونة والأرز وغيرهما",
                "ru": "Макароны, рис и другие товары"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "2f7bd97a-071f-4e41-a7ad-11cdc6d42c71_tfss-050c259e-5829-4562-8de8-be04a8c4f109-pasta2.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2f7bd97a-071f-4e41-a7ad-11cdc6d42c71_tfss-050c259e-5829-4562-8de8-be04a8c4f109-pasta2.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "OmVoyP5E5R",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Personal Care",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-10T13:31:29.255Z",
            "updatedAt": "2025-10-24T22:20:42.406Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/47db1627b79cf1fcd58a62137e7007a0_CatImage.jpg",
            "localizedTitle": {
                "ar": "العناية الشخصية",
                "ru": "Личный уход",
                "ar_EG": "العناية الشخصية"
            },
            "thumbnail": {
                "__type": "File",
                "name": "47db1627b79cf1fcd58a62137e7007a0_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/47db1627b79cf1fcd58a62137e7007a0_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "udCLAyHEed",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2015-05-28T17:58:37.330Z",
            "updatedAt": "2025-10-24T22:20:33.620Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d6301b49771ce8f7f89b8140474c8fd9_SupermarketNew_PetCare.jpg",
            "title": "Pet Care",
            "localizedTitle": {
                "ar": "العناية بالحيوانات الأليفة",
                "el": "Είδη Κατοικιδίου",
                "ru": "Уход за питомцами"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "1b31a500-8a14-4b0d-b263-840abfc57d70_tfss-fb51588e-6da9-4ca1-8b75-9c654568aef7-petcare.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/1b31a500-8a14-4b0d-b263-840abfc57d70_tfss-fb51588e-6da9-4ca1-8b75-9c654568aef7-petcare.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "BgyfzEbp2Y",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Pet Essentials",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-10T13:52:55.620Z",
            "updatedAt": "2025-10-24T22:21:20.371Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/261a21ec26fefaba88c393d7dadf72f3_CatImage.jpg",
            "localizedTitle": {
                "ar": "لوازم الحيوانات",
                "ar_EG": "مستلزمات الحيوانات الأليفة",
                "ru": "Товары первой необходимости для домашних животных"
            },
            "thumbnail": {
                "__type": "File",
                "name": "261a21ec26fefaba88c393d7dadf72f3_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/261a21ec26fefaba88c393d7dadf72f3_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "18pj3tIAsW",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "createdAt": "2015-05-19T07:55:14.997Z",
            "updatedAt": "2025-10-24T22:21:44.955Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/dd9dd223c8cc4560e23b2298fd8b1f67_Prepaid_Supermarket.jpg",
            "title": "Prepaid Cards & Vouchers",
            "localizedTitle": {
                "ar": "بطاقات مسبقة الدفع وقسائم شرائية",
                "el": "Προπληρωμένες Κάρτες",
                "ru": "Предоплаченные карты и ваучеры",
                "ar_EG": "كروت الشحن والقسائم"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "dd9dd223c8cc4560e23b2298fd8b1f67_Prepaid_Supermarket.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/dd9dd223c8cc4560e23b2298fd8b1f67_Prepaid_Supermarket.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "IZGhVKE3ux",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Prepaid Cards & Vouchers",
            "thumbnail": {
                "__type": "File",
                "name": "08e54aab5f8dd4c70866382ff670f97e_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/08e54aab5f8dd4c70866382ff670f97e_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/08e54aab5f8dd4c70866382ff670f97e_CatImage.jpg",
            "categType": "General",
            "createdAt": "2022-04-15T06:20:33.838Z",
            "updatedAt": "2025-10-24T22:21:38.353Z",
            "localizedTitle": {
                "ar": "بطاقات مسبقة الدفع وقسائم شرائية",
                "ar_EG": "كروت الشحن والقسائم",
                "ru": "Предоплаченные карты и ваучеры"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "Ef2enSZVrC",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Ramadan",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2020-04-20T10:47:38.671Z",
            "updatedAt": "2025-10-24T22:21:46.137Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/dc170dc6728b830e43ba9864294fcf90_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "dc170dc6728b830e43ba9864294fcf90_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/dc170dc6728b830e43ba9864294fcf90_CatImage.jpg"
            },
            "localizedTitle": {
                "el": "Ραμαζάνι",
                "ar": "رمضان",
                "ru": "Рамадан"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "JkKS88EdVb",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Salary Saver",
            "categType": "General",
            "createdAt": "2025-02-20T13:58:02.169Z",
            "updatedAt": "2025-10-24T22:20:42.242Z",
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "5GGQIJjEIX",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Sensual Care",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-31T08:35:03.744Z",
            "updatedAt": "2025-10-24T22:21:56.880Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/66b03dc1e4fb38c43feeef6a05e585e1_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "66b03dc1e4fb38c43feeef6a05e585e1_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/66b03dc1e4fb38c43feeef6a05e585e1_CatImage.jpg"
            },
            "localizedTitle": {
                "el": "Σεξουαλική Φροντίδα",
                "ar": "العناية الحسية",
                "ru": "Интимный уход"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "VDi7N7Z4IN",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Shampoos & Hair Care",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2021-01-31T08:34:21.049Z",
            "updatedAt": "2025-10-24T22:20:47.215Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d8a273439c3267f44464d7c7ff4bbdc0_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "d8a273439c3267f44464d7c7ff4bbdc0_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d8a273439c3267f44464d7c7ff4bbdc0_CatImage.jpg"
            },
            "localizedTitle": {
                "el": "Φροντίδα Μαλλιών",
                "ar": "الشامبو والعناية بالشعر ",
                "ru": "Шампуни и средства по уходу за волосами"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "ud1ziENF4d",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Smoking Devices & Accessories",
            "categType": "General",
            "createdAt": "2024-02-08T06:24:23.054Z",
            "updatedAt": "2025-10-24T22:22:20.554Z",
            "localizedTitle": {
                "ar": "أدوات وأكسسوارات التدخين",
                "ar_EG": "أجهزة وإكسسوارات التدخين",
                "ru": "Устройства для Курения и аксессуары"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/f05d79d38fb5fbd6430a3e3eb1639068_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "f05d79d38fb5fbd6430a3e3eb1639068_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/f05d79d38fb5fbd6430a3e3eb1639068_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "rQF2QdOGXT",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Soft Drinks & Juices",
            "createdAt": "2015-04-24T22:06:37.593Z",
            "updatedAt": "2025-10-24T22:20:40.581Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b98bb151ecb4d4518d86905fdee30591_SupermarketNew_SoftDrinksJuices.jpg",
            "localizedTitle": {
                "ar": "مشروبات غازية وعصائر",
                "el": "Αναψυκτικά & Χυμοί",
                "ru": "Напитки и соки",
                "ar_EG": "المشروبات الغازية والعصائر"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "475e1fe5-6e3a-4ed7-af8a-4c6b5786a400_tfss-ecf6f442-114c-4d09-9e77-285a312471a5-softDrinks.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/475e1fe5-6e3a-4ed7-af8a-4c6b5786a400_tfss-ecf6f442-114c-4d09-9e77-285a312471a5-softDrinks.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "3oRTuE6svd",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Spinneys Meals to Go",
            "thumbnail": {
                "__type": "File",
                "name": "237d715f5fe11a4939908595bf132918_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/237d715f5fe11a4939908595bf132918_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/237d715f5fe11a4939908595bf132918_CatImage.jpg",
            "categType": "General",
            "createdAt": "2024-07-15T13:14:17.598Z",
            "updatedAt": "2025-10-24T22:21:31.935Z",
            "localizedTitle": {
                "ar": "وجبات سبينيس الجاهزة",
                "ar_EG": "وجبات سبينيس الجاهزة"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "8ndEpdMOCh",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Stationery",
            "categType": "General",
            "createdAt": "2022-08-09T08:20:29.241Z",
            "updatedAt": "2025-10-24T22:22:21.585Z",
            "localizedTitle": {
                "ar": "قرطاسية",
                "ar_EG": "أدوات مكتبية",
                "el": "Γραφική Ύλη & Χαρτικά"
            },
            "imageUrl": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d861a7084eda65442831cbd40667fc49_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "d861a7084eda65442831cbd40667fc49_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d861a7084eda65442831cbd40667fc49_CatImage.jpg"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "sofbctJ9XU",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "The Grocer Exclusive",
            "categType": "General",
            "createdAt": "2025-09-18T07:04:28.612Z",
            "updatedAt": "2025-10-24T22:21:45.096Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/470a52accd78d8a8781d8998b32e9b81_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "470a52accd78d8a8781d8998b32e9b81_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/470a52accd78d8a8781d8998b32e9b81_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "منتجات ذا جروسر الحصرية",
                "ar_EG": "عروض ذا جروسر الحصرية"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "IbTl1lqOIe",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/b5b71e5c36284e8864e6e491eb53fa06_SupermarketNEW_Tobacco.jpg",
            "title": "Tobacco",
            "createdAt": "2015-05-11T12:41:20.538Z",
            "updatedAt": "2025-10-24T22:21:40.570Z",
            "localizedTitle": {
                "ar": "تبغ",
                "el": "Είδη Καπνιστού",
                "ru": "Табачные изделия",
                "ar_EG": "التبغ"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "7caf153c-610c-44d8-ac37-83eb883a6d78_tfss-84d195fc-89fb-4796-8a54-cd21e2d5faca-cigaretets.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/7caf153c-610c-44d8-ac37-83eb883a6d78_tfss-84d195fc-89fb-4796-8a54-cd21e2d5faca-cigaretets.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "G2fSV6eOTS",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Valentine's Day",
            "thumbnail": {
                "__type": "File",
                "name": "d74439b51805502dd5cb8cd716f9957d_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d74439b51805502dd5cb8cd716f9957d_CatImage.jpg"
            },
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/d74439b51805502dd5cb8cd716f9957d_CatImage.jpg",
            "categType": "General",
            "createdAt": "2022-02-03T11:54:57.703Z",
            "updatedAt": "2025-10-24T22:21:44.054Z",
            "localizedTitle": {
                "ar": "فالنتاين",
                "ar_EG": "فالنتاين",
                "ru": "День Валентина"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "Hfe9cEV4E4",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "title": "Vegan & Vegetarian",
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "categType": "General",
            "createdAt": "2020-10-06T10:27:01.716Z",
            "updatedAt": "2025-10-24T22:22:16.251Z",
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/2fdfb3ba7cb57b93c9877c195127d187_SupermarketNew_VeganVeggie.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "240103b935851474b76bd583281fa505_Supermarket_VeganVeggie.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/240103b935851474b76bd583281fa505_Supermarket_VeganVeggie.jpg"
            },
            "localizedTitle": {
                "ar": "نباتي ونباتي صرف",
                "ru": "Веганские и вегетарианские продукты",
                "ar_EG": "المنتجات النباتية"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "nOmuEJKXHT",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "title": "Waitrose Meals to Go",
            "categType": "General",
            "createdAt": "2024-10-10T07:13:28.911Z",
            "updatedAt": "2025-10-24T22:21:40.305Z",
            "imageUrl": "https://data4.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/57ffb80116b2198a5900a842135b9a94_CatImage.jpg",
            "thumbnail": {
                "__type": "File",
                "name": "57ffb80116b2198a5900a842135b9a94_CatImage.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/57ffb80116b2198a5900a842135b9a94_CatImage.jpg"
            },
            "localizedTitle": {
                "ar": "وجبات ويتروز الجاهزة",
                "ar_EG": "وجبات ويتروز الجاهزة"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "FdhdsztnOL",
            "__type": "Object",
            "className": "Categories"
        },
        {
            "imageUrl": "https://data.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/5af16bee05b6cff7591bf76940326616_SupermarketNew_Water.jpg",
            "title": "Water",
            "createdAt": "2015-05-13T08:55:58.508Z",
            "updatedAt": "2025-10-24T22:22:21.393Z",
            "localizedTitle": {
                "ar": "مياه",
                "el": "Νερό",
                "ru": "Вода",
                "ar_EG": "المياه"
            },
            "categType": "General",
            "thumbnail": {
                "__type": "File",
                "name": "1f65bb18-99d0-4853-bc91-efcef3325235_tfss-b71d6217-8b53-4ef7-bacd-89abc762a0d0-water.jpg",
                "url": "https://data3.instashop.ae/parse/files/Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6/1f65bb18-99d0-4853-bc91-efcef3325235_tfss-b71d6217-8b53-4ef7-bacd-89abc762a0d0-water.jpg"
            },
            "businessType": {
                "__type": "Pointer",
                "className": "BusinessType",
                "objectId": "hJqhTfUKxl"
            },
            "subcategories": {
                "__type": "Relation",
                "className": "Subcategories"
            },
            "objectId": "s2gxeag6rL",
            "__type": "Object",
            "className": "Categories"
        }
    ]
};

const url = "https://data3.instashop.ae/parse/functions/searchClientProductsV4";
const headers = {
    "x-is-installation": "0c68954b-ac81-46b4-a028-9236709ecd5a",
    "x-is-user": "emOiLQa7l3",
    "x-parse-application-id": "Q8p0cZi0Es6POXNb4tNqqP7NdzXsqKd9Mzzdkdq6",
    "x-parse-client-id": "H9oyqPv3UO",
    "x-parse-rest-api-key": "UCOGUXAS6gqQRy3p184T0TI7M8UDWOoR1AQ5JF7y",
    "x-parse-session-token": "r:baf4298b70b0c1935fbe5e2613df6c90",
    "Content-Type": "application/json",
};

const bodyTemplate = {
    queryObject: {
        size: 60,
        page: 0,
        q: "",
        active: false,
        inactive: false,
        hasprice: false,
        noprice: false,
        nostatus: false,
        "Out of stock": false,
        "In stock": false,
        "Permanently removed": false
    },
    clientId: "H9oyqPv3UO",
    businessType: { grocery: true },
    clientCategoriesIds: [
        "XE7kc3ZoS8", "Q1KSfIRQar", "6t7iySKMFG", "MG9RsviAqZ", "CoZgo10bX7", "pqYOjgD3Wc",
        "dKfvbXqFE6", "5ld8EPImRf", "wSLGUDRndg", "6hsKy2ropb", "XGF1eFhVzD", "R1jHuh3PWL",
        "2art2w05CL", "AgIXfaWH1e", "4ztHHjZalf", "fJpd1nGn5m", "AygDH3173k", "gp5IFnJ4YP",
        "SNr1z5qkWu", "Z4odXef58R", "n0Zd5BGBaA", "VCi0pFMVOG", "pW2FpGeUnX", "9syZj7VP0X",
        "aTAC3Za6lR", "KU4VnLXBk2", "CgD4pgFU6F", "JNvFCFAbWp", "lFgRQpgLBE", "x5IFXBZIEv",
        "8pFPOKtLRW", "BRDEJn9ODW", "p6VJ5xGtWs", "mYNG2DTWth", "bbTZp9JDUr", "hyxXtiOlYV",
        "II3HSWFpt2", "hubxTgwjzw", "R8autwzpDw", "hIAldcKsTZ", "qodA8KkFGL", "WECuGXXPaM",
        "Snlqw1gMS0", "8bdJ5PUFhp", "Xutz7b4q9y", "50FfIMDMdU", "0dZOMS6nTO", "4cGofcZDo8",
        "JWnTzOsurN", "uiN0FFZWA9", "QJuDEIglus", "95yFz5sVol", "bVWnV1AzdE", "OfsKYyAZpW",
        "D0yPL7SyUL", "rRi1XjnUt7", "aCveizcQi5", "h5MfGOoonj", "H552Rv200J", "EYlaPh83z8",
        "6EzMVYKVqv", "kJL2EBTZSS", "DkJopath6M", "CV0oaUTDPW", "OmVoyP5E5R", "udCLAyHEed",
        "BgyfzEbp2Y", "18pj3tIAsW", "IZGhVKE3ux", "Ef2enSZVrC", "JkKS88EdVb", "5GGQIJjEIX",
        "VDi7N7Z4IN", "ud1ziENF4d", "rQF2QdOGXT", "3oRTuE6svd", "8ndEpdMOCh", "sofbctJ9XU",
        "IbTl1lqOIe", "G2fSV6eOTS", "Hfe9cEV4E4", "nOmuEJKXHT", "FdhdsztnOL", "s2gxeag6rL"
    ],
    hiddenCategoriesIds: ["aNAk1YWyaQ", "GebFyT9vXz", "uJNullXvaX", "E83lN5h9LJ"],
    systemInfo: { countryId: "ryFmc6ACd1" }
};

const allBarcodes = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
}

function bindBarcodesFromInput() {
    const textarea = document.getElementById("barcodeInput");

    allBarcodes.length = 0; // clear existing

    textarea.value
        .split(/\r?\n/) // split by new line
        .map(b => b.trim()) // remove spaces
        .filter(b => b) // remove empty lines
        .forEach(b => allBarcodes.push(b));
}

async function fetchAndExportChunks() {
    const output = document.getElementById("output");
    const allData = [];

    bindBarcodesFromInput();

    if (allBarcodes.length === 0) {
        output.textContent = "⚠️ No barcodes provided. Please enter barcodes in the input box.";
        return;
    }

    const barcodeChunks = chunkArray(allBarcodes, 50); // split into 50 each
    let batchNumber = 1;

    try {
        for (const chunk of barcodeChunks) {
            const qString = chunk.join(","); // comma-separated barcodes
            output.textContent += `🔹 Fetching batch ${batchNumber} (${chunk.length} barcodes)...\n`;

            const body = {...bodyTemplate, queryObject: {...bodyTemplate.queryObject, q: qString } };

            const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
            const json = await res.json();

            const records = (json && json.result) ? json.result : [];
            output.textContent += `✅ Received ${records.length} records in batch ${batchNumber}\n`;

            // Create category map
            const categoryMap = {};
            categoriesData.result.forEach(cat => {
                categoryMap[cat.objectId] = cat.title;
            });

            // Map current records
            const mapped = records.map(item => ({
                ID: item.objectId || "",
                Title: item.title || "",
                ArabicTitle: item.localizedTitle && item.localizedTitle.ar ? item.localizedTitle.ar : "",
                Packaging: item.packagingString || "",
                Barcode: item.barcode && item.barcode.value ? item.barcode.value : "",
                Price: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    item.productObject.clients["H9oyqPv3UO"].price &&
                    item.productObject.clients["H9oyqPv3UO"].price.retail ?
                    item.productObject.clients["H9oyqPv3UO"].price.retail : "",
                WithMargin: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    item.productObject.clients["H9oyqPv3UO"].price &&
                    item.productObject.clients["H9oyqPv3UO"].price.withMargin ?
                    item.productObject.clients["H9oyqPv3UO"].price.withMargin : "",
                OriginalPrice: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    item.productObject.clients["H9oyqPv3UO"].originalPrice ?
                    item.productObject.clients["H9oyqPv3UO"].originalPrice : "",
                Status: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    typeof item.productObject.clients["H9oyqPv3UO"].status !== "undefined" ?
                    item.productObject.clients["H9oyqPv3UO"].status : "",
                Active: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    typeof item.productObject.clients["H9oyqPv3UO"].active !== "undefined" ?
                    item.productObject.clients["H9oyqPv3UO"].active : "",
                Image: item.imageUrl || "",
                OrignalImage: item.originalUrl || "",
                altBarcodes: item.barcode && item.barcode.alt && Array.isArray(item.barcode.alt) ?
                    item.barcode.alt.map(a => a.value).join(", ") : "",
                CategoryName: item.category && item.category.objectId ?
                    (categoryMap[item.category.objectId] || "Unknown Category") : "No Category",
                HasSubtitles: item.hasSubstitutes || "",
                IsForWeighing: item.isForWeighing || "",
                BusinessTypes: item.categoriesPerBusinessType ?
                    Object.keys(item.categoriesPerBusinessType).join(", ") : "",
                CreatedAt: item.createdAt || "",
                UpdatedAt: item.updatedAt || "",
                Type: "" // ← FIXED here
            }));

            const expanded = mapped.flatMap(row => {
                // Split altBarcodes by comma
                const altList = row.altBarcodes ?
                    row.altBarcodes.split(",").map(b => b.trim()).filter(b => b.length > 0) : [];

                // Always include the original row first
                const rows = [
                    {...row } // original barcode
                ];

                // Then add a row for each alt barcode
                altList.forEach(b => {
                    rows.push({
                        ...row,
                        Barcode: b
                    });
                });

                return rows;
            }).map(r => ({
                ...r,
                Type: chunk.includes(r.Barcode) ? "GM Barcode" : r.Type
            }));

            allData.push(...expanded);

            const delay = Math.floor(Math.random() * 4000) + 3000; // 3–7s delay
            output.textContent += `⏳ Waiting ${delay / 1000}s before next batch...\n`;
            await sleep(delay);

            batchNumber++;
        }

        // Export all data to Excel
        const ws = XLSX.utils.json_to_sheet(allData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Products");
        XLSX.writeFile(wb, "instashop_barcodes.xlsx");

        output.textContent += `🎉 Done! Total records: ${allData.length}\n`;

    } catch (err) {
        output.textContent += `❌ Error: ${err}\n`;
        console.error(err);
    }
}


async function fetchAndExport() {
    const output = document.getElementById("output");

    const startPage = parseInt(document.getElementById("startPage").value, 10);
    const totalPages = parseInt(document.getElementById("maxPage").value, 10);

    const allData = [];
    const recordsPerPage = 60;
    const saveInterval = 50; // save every 50 pages
    let batchNumber = 1;

    try {
        for (let page = startPage; page <= totalPages; page++) {
            output.textContent += `🔹 Fetching page ${page}...\n`;

            const body = {
                ...bodyTemplate,
                queryObject: {
                    ...bodyTemplate.queryObject,
                    size: recordsPerPage,
                    page: page
                }
            };

            const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
            const json = await res.json();

            const records = (json && json.result) ? json.result : [];
            output.textContent += `✅ Received ${records.length} records on page ${page}\n`;

            // Create category map
            const categoryMap = {};
            categoriesData.result.forEach(cat => {
                categoryMap[cat.objectId] = cat.title;
            });

            // Map current records
            const mapped = records.map(item => ({
                ID: item.objectId || "",
                Title: item.title || "",
                ArabicTitle: item.localizedTitle && item.localizedTitle.ar ? item.localizedTitle.ar : "",
                Packaging: item.packagingString || "",
                Barcode: item.barcode && item.barcode.value ? item.barcode.value : "",
                Price: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    item.productObject.clients["H9oyqPv3UO"].price &&
                    item.productObject.clients["H9oyqPv3UO"].price.retail ?
                    item.productObject.clients["H9oyqPv3UO"].price.retail : "",
                WithMargin: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    item.productObject.clients["H9oyqPv3UO"].price &&
                    item.productObject.clients["H9oyqPv3UO"].price.withMargin ?
                    item.productObject.clients["H9oyqPv3UO"].price.withMargin : "",
                OriginalPrice: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    item.productObject.clients["H9oyqPv3UO"].originalPrice ?
                    item.productObject.clients["H9oyqPv3UO"].originalPrice : "",
                Status: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    typeof item.productObject.clients["H9oyqPv3UO"].status !== "undefined" ?
                    item.productObject.clients["H9oyqPv3UO"].status : "",
                Active: item.productObject &&
                    item.productObject.clients &&
                    item.productObject.clients["H9oyqPv3UO"] &&
                    typeof item.productObject.clients["H9oyqPv3UO"].active !== "undefined" ?
                    item.productObject.clients["H9oyqPv3UO"].active : "",
                Image: item.imageUrl || "",
                OrignalImage: item.originalUrl || "",
                altBarcodes: item.barcode && item.barcode.alt && Array.isArray(item.barcode.alt) ?
                    item.barcode.alt.map(a => a.value).join(", ") : "",
                CategoryName: item.category && item.category.objectId ?
                    (categoryMap[item.category.objectId] || "Unknown Category") : "No Category",
                HasSubtitles: item.hasSubstitutes || "",
                IsForWeighing: item.isForWeighing || "",
                BusinessTypes: item.categoriesPerBusinessType ?
                    Object.keys(item.categoriesPerBusinessType).join(", ") : "",
                CreatedAt: item.createdAt || "",
                UpdatedAt: item.updatedAt || "",
                Type: ""
            }));

            // Expand and flatten
            const expanded = mapped.flatMap(row => {
                const altList = row.altBarcodes ?
                    row.altBarcodes.split(",").map(b => b.trim()).filter(b => b.length > 0) : [];

                const rows = [{...row }];

                altList.forEach(b => {
                    rows.push({
                        ...row,
                        Barcode: b
                    });
                });

                return rows;
            });

            allData.push(...expanded);

            // Save every 50 pages
            if ((page + 1) % saveInterval === 0 || page === totalPages) {
                const ws = XLSX.utils.json_to_sheet(allData);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Products");

                const partNum = Math.ceil((page + 1) / saveInterval);
                const fileName = `instashop_products_part_${partNum}.xlsx`;

                XLSX.writeFile(wb, fileName);
                output.textContent += `💾 Saved ${fileName} with ${allData.length} records (up to page ${page})\n`;

                // Clear after saving to reduce memory
                allData.length = 0;
            }


            // Random delay between 3–7 seconds
            const delay = Math.floor(Math.random() * 4000) + 3000;
            output.textContent += `⏳ Waiting ${delay / 1000}s before next page...\n`;
            await sleep(delay);

            batchNumber++;
        }

        output.textContent += `🎉 Done! All ${totalPages} pages fetched and saved.\n`;

    } catch (err) {
        output.textContent += `❌ Error: ${err}\n`;
        console.error(err);
    }
}