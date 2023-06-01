import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {

      'header-generate': 'Generate',
      'header-privacy':'Privacy & Policy',
      'header-pricing':'Pricing',
      'header-blog':'Blog',
      'header-logIn':'Log in',
      'header-signUp': 'Sign Up',
      'account-open' : 'Account',
      'generate-tutorial-text': 'The smartest, fastest way to Legal Aggrements',
      'streamline-name':'Streamline Your Purpose with AI',
      'streamline-more':'Streamline cost-effective solutions for your business. Generate legally compliant documents seamlessly with customizable agreements and policies for your website or mobile app anytime, anywhere with iTerms.',
      'streamline-firstPoint':'Unlimited downloads for 9.95 a one-time fee',
      'streamline-secondPoint':'All legal agreements confirmed by a practicing lawyer',
      'streamline-thirdPoint':'EU/US and main privacy laws covered',
      'streamline-fourthPoint':'Automatic legal updates powered by AI',
      'streamline-fifthPoint':'Industry-leading competitive pricing ',
      'streamline-sixthPoint':'Securely host your policies on our platform',
      'streamline-seventhPoint':'Easy embed policy on your domain',
      'streamline-eigthPoint':'Suitable for most Web/Mobile apps',
      'generate-forfree':'Generate for free',
      'generate':'Generate',
      'learn':'Learn more',
      'streamline_small_description_title':'AI + ITerms to do better',
      'streamline_small_description_more':'Create a seamless payment experience for your customers while using leading technology that adapts to any business, industry, platform, or shopper journey. You&apos;ll be up and running quickly, able to add payment methods easily and increase your conversion rates. Enjoy flexible features to fit your business with a single integration:',
      'streamline_small_description_first':'Confirmed by a lawyer',
      'streamline_small_description_second':'Legal updates with AI',
      'streamline_small_description_third':'The cheapest among competitors',
      'streamline_small_description_fourth':'Clear and understandable',
      'streamline_small_description_fifth':'We host it for you',
      'post-title_large-h3':'Keep up with the latest',
      'post-title_large-p':'Discover What\'s News',
      'post-title_large-h4':'Learn from the experts at iTerms to ensure you stay on top of industry legalities and changing legal landscapes at all times.',
      'read-more':'Read more',
      'read':'Read',
      'cardpricing-detail_p':'Validate your credibility',
      'cardpricing-detail-h2':'Compare Industry Competitors',
      'cardpricing-detail-h4':'iTerms offers industry-leading solutions for businesses for a fraction of the price, with no hidden fees.',
      'cardPricing_acsess-h2':'Unlimited access',
      'cardPricing_acsess-h5':'for any documents',
      'safeguards_small_h3':'Can trust',
      'safeguards_small_h1':'Legal Protection You',
      'safeguards_small_h4':'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app',
      'safeguards_large_h3':'Trusted Provisions',
      'safeguards_large_h1':'Secure Legal Safeguards',
      'safeguards_large_h4':'Attorney-certified compliance solutions for your convenience and protection.',
      'swiperPost_title-h5':'Your protection is your success',
      'swiperPost_title-h2':'Our customers are saying',
      'swiperPost_title-p':'Ensured Compliance, guaranteed, ',
      'swiperPost_title-span':'customer satisfaction.',
      'latest-blog':'Latest blog articles',
      'blog-news':'What\'s New',
      'blog-more':'More than 140,000 businesses use iTerms. Join our community of amazing companies!',
      
      'latest':'Keep Up With the Latest',
      'discover_new':'Discover What’s New',
      'learn_from_experts': 'Learn from the experts at iTerms to ensure you stay on top of industry legalities and changing legal landscapes at all times.',
      'loading': 'Loading...',
      'error': 'Error:',
      'read_more': 'Read more', 
      
      'categories': 'Categories',
      
      'post_not_found':'Post not found',
      'back': 'Back',
      'share':'Share:',
      'contents':'Contents',
      'post_detail': 'Post detail',
      'related_posts': 'Related Posts',
      
      'popup_create': 'You need create account',
      'popup_incorrect': 'Or the data is incorrect',
      'sign_in': 'Sign in', 
      'or': 'Or',
      'email': 'Email', 
      'enter_email': 'Enter the Email', 
      'password': 'Password', 
      'enter_password': 'At least 8 characters long', 
      'sign_in_with': 'Sign in with', 
      'have_not_account':'Don\'t have an account?',
      'sign_up': 'Sign up', 
      
      'your_name': 'Your Name',
      'forgot_name': 'You forgot to enter your name',
      'invalid_email': 'Invalid Email',
      'forgot_email': 'You forgot to enter Email',
      'forgot_password': 'You forgot to enter Password',
      'i_agree': 'By proceeding, I agree with the',
      'terms_of_service': 'Terms of Service',
      'privacy_policy': 'Privacy & Policy',
      'create_account': 'Create account',
      'have_account': 'Already have an account?',
      
      'oops': 'Oops! Page Nod Found',
      'p_oops': 'Numerous legal agreements accessible at the touch of your fingerprints for your website or mobile app.',
      'back_to_home': 'Back to Home',
      
      'content_of_legal': 'Content of Legal Policies',
      'any_rem_tools': 'Any Remarketing Tools',
      'any_ads_tools': 'Any Ads Tools',
      'any_analytics_tools': 'Any Analytics Tools',
      'any_payment_processors': 'Any Payment Processors',
      'integrate_to_website': 'Integrate to Website',
      'hosted_policies': 'Hosted Policies',
      'embed_site': 'Embed On Your Site',
      'regular_doc_updates': 'Regular Doc Updates',
      'customize_&_download': 'Customize & Download',
      'TXT': 'TXT Format',
      'HTML': 'HTML File (.html)',
      'DOCX': 'DOCX File (.doc)',
      'unlimited_downloads': 'Unlimited downloads',
      'custom_logo': 'Custom Logo on Document',
      'custom_font': 'Custom Font on Document',
      'for_startups': 'For startups',
      'for_month': '/month',
      'choose_plan': 'Choose Plan',
      'for_businesses': 'For businesses',
      'for_one_time': '/one-time',
      'continue_free': 'Continue Free',
      'flexible_pricing': 'flexible pricing',
      'simple_pricing': 'Simple, transparent Pricing',
      'noc_nos': 'No contracts. No surprise fees.',
      'first_month': 'First month',
      'following_months': 'Following months',
      'most_popular': 'Most popular',
      'see_all_features': 'See all features',
      
      'article_medium': 'Latest blog articles',
      'article_large': 'Get Started Within Minutes',
      'business_medium': 'Ready to protect your business?',
      'business_large': 'Are You Ready to Protect Your Business?',
      'text_medium': 'More than 140,000 businesses use iTerms. Join our community of amazing companies!',
      'text_large': 'Sign up for our account packages and start generating legal agreements suited to your business needs.',
      'footer_sign': 'Sign me Up!',
      'footer_start': 'Get started for free',
      'footer_learn': 'Learn more',
      'footer_text': 'More than 140,000 businesses use iTerms. Join our community.',
      'footer_terms': 'Terms & Conditions',
      'footer_policy': 'Privacy Policy',
      'footer_disclaimer': 'Disclaimer',
      'footer_version': 'English version',
      'footer_company': 'Company',
      'footer_work': 'How It Works',
      'footer_reviews': 'Reviews',
      'footer_contact': 'Contact us',
      'footer_blog': 'Blog',
      'footer_products': 'Products',
      'footer_solutions': 'Solutions',
      'footer_trust': 'Trust & Safety',
      'footer_payment': 'Payment',
      'footer_help': 'Help',
      'footer_support': 'Support',
      'footer_pricing': 'Pricing',
      
      'privacy_flexible': 'flexible pricing',
      'privacy_terms': 'Terms & Conditions',
      'privacy_create': 'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app',
      'privacy_seamlessly': 'Seamlessly generate and administer professional Terms & Conditions that are compliant with international legislation',
      'privacy_home': 'Back to Home',
      'privacy_generate': 'Generate',
      'privacy_learn': 'Learn more',

      'privacy_conditions_conditions': 'Online Terms and Conditions Generator Features',
      'privacy_conditions_explore': 'Explore Advanced Features',
      'privacy_conditions_made': 'Made for Your Business',
      'privacy_conditions_tailor': 'Tailor-Made For Your Business',
      'privacy_conditions_designed': 'Generate terms and conditions designed for your blog, website, app, SaaS, or ecommerce site. Establish guidelines and rights for your platform.',
      'privacy_conditions_safeguard': 'Safeguard the interests of your content. Generate precision Terms & Conditions policies designed especially for your website, app, blog, SaaS, or eCommerce site.',
      'privacy_conditions_customizable': 'Customizable',
      'privacy_conditions_fully': 'Fully Customizable',
      'privacy_conditions_settle': 'Don’t settle for generic terms and conditions when you can customize the look and feel of your terms to match the unique style of your website or app.',
      'privacy_conditions_generic': 'Dont settle for generic Terms & Conditions. With iTerms, fully customize your requirements appearance to compliment your website or mobile app design aesthetics to enhance your credibility.',
      'privacy_conditions_free': 'Free Web Hosting',
      'privacy_conditions_hosting': 'Web Hosting',
      'privacy_conditions_termly': 'Termly will host your terms and conditions for free! Just place a link on your site to make your terms and conditions page available to users.',
      'privacy_conditions_dedicated': 'iTerms is dedicated to providing you with seamless business solutions, which is why were hosting your Legal Agreement on our servers.',
      
      'privacy_online_best': 'The Best Free Terms and Conditions Generator Online',
      'privacy_online_online': 'Online Terms & Conditions Generator You Can Trust',
      'privacy_online_about': 'About Our Terms and Conditions Agreement Generator',
      'privacy_online_numerous': 'Numerous Terms & Conditions Agreements',
      'privacy_online_create': 'Not sure how to create terms and conditions for your business? With our generator, you can easily make terms and conditions online. In minutes, generate terms that protect your:',
      'privacy_online_regardless': 'Regardless of the industry you operate in, iTerms has Terms & Conditions solutions made just for you:',
      'privacy_online_blog': 'Blog',
      'privacy_online_website': 'Website',
      'privacy_online_mobile': 'Mobile App',
      'privacy_online_ecommerce': 'Ecommerce site',
      'privacy_online_shop': 'Online shop/store',
      'privacy_online_trusted': 'Trusted by thousands of companies worldwide, Termly’s intuitive software generates terms and conditions for any business in minutes. Don’t put your business at risk when protection is free.',
      'privacy_online_protect': 'Protect Your Business with Terms and Conditions',
      'privacy_online_safeguard': 'Safeguard Your Business Interests With Terms & Conditions',
      'privacy_online_take': 'Take advantage of our website terms and conditions generatorto help your business limit liability, combat legal disputes, andestablish jurisdiction. Make terms that include:',
      'privacy_online_operate': 'Operate your business without having to question whether your interests are protected. With iTerms, limit your liability and protect your livelihood against potential legal action.',
      'privacy_online_terms': 'Terms of use',
      'privacy_online_intellectual': 'Intellectual property rights',
      'privacy_online_digital': 'Digital Millennium Copyright Act notice and policy',
      'privacy_online_prohibited': 'Prohibited activities',
      'privacy_online_termination': 'Termination clause',
      'privacy_online_governing': 'Governing law',
      'privacy_online_conditions': 'Our free terms and conditions generator is your one-stop solution to better protecting your blog, app, or website — generate one today for FREE!',
      'privacy_online_protected': 'Protect your content and try the iTerms Terms & Conditions generator today!',
      'privacy_online_generate': 'Generate',

      'privacy_swiper_privacy': 'Privacy Policy',
      'privacy_swiper_statement': 'Statement or legal document that discloses some or all of the ways a party gathers, discloses a customer or clients data.',
      'privacy_swiper_generate': 'Generate',
      'privacy_swiper_learn': 'Learn more',
      'privacy_swiper_terms': 'Terms & Conditions',
      'privacy_swiper_legal': 'Are the legal agreements between a service provider and a person who wants to use that service.',
      'privacy_swiper_cookie': 'Cookie Policy',
      'privacy_swiper_disclaimer': 'Disclaimer',
      'privacy_swiper_refund': 'Refund Policy',
      'privacy_swiper_business': 'for your business',
      'privacy_swiper_made': 'Intuitively Made For Your Business',
      'privacy_swiper_full': 'Our Full Suite of Compliance Solutions',
      'privacy_swiper_explore': 'Explore iTerms Solutions',
      'privacy_swiper_create': 'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app.',
      'privacy_swiper_regardless': 'Regardless of your requirements, iTerms has a solution ready for you to utilize.',
      
      'privacy_protection_trust': 'Can Trust',
      'privacy_protection_provisions': 'Trusted Provisions',
      'privacy_protection_legal': 'Legal Protection You',
      'privacy_protection_secure': 'Secure Legal Safeguards',
      'privacy_protection_create': 'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app',
      'privacy_protection_attorney': 'Attorney-certified compliance solutions for your convenience and protection.',
      'privacy_protection_policies': 'Policies Created',
      'privacy_protection_businesses': 'Businesses',
      'privacy_protection_compliant': 'Compliant Pageview',

      'privacy_blog_blog': 'Latest blog articles',
      'privacy_blog_solutions': 'Solutions to Your Problems',
      'privacy_blog_questions': 'Questions? Look here',
      'privacy_blog_do': 'Do You Have any Questions?',
      'privacy_blog_more': 'More than 140,000 businesses use iTerms. Join our community of amazing companies!',
      'privacy_blog_take': 'Take a look through our answers! Still, have questions? Please dont be afraid to contact our team at any time.',
      'privacy_blog_table': 'Table of Contents',
      'privacy_blog_general': 'General',
      'privacy_blog_trust': 'Trust & Safety',
      'privacy_blog_payment': 'Payment',
      'privacy_blog_help': 'Help',
      'privacy_blog_contacts': 'Contacts',

      'What is a Privacy Policy?': 'What is a Privacy Policy?',
      'There are two main reasons why you need a Privacy Policy:': 'There are two main reasons why you need a Privacy Policy:',
      'They\'re legally required': 'They\'re legally required',
      'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.': 'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.',
      'Consumers expect to see them': 'Consumers expect to see them',
      'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.': 'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.',
      'What is Personal Information?': 'What is Personal Information?',
      'Why do I need a Privacy Policy?': 'Why do I need a Privacy Policy?',
      'Can I request an email address without a Privacy Policy?': 'Can I request an email address without a Privacy Policy?',
      'How should I write my Privacy Policy?': 'How should I write my Privacy Policy?',
    },
  },
  ua: {
    translation: {
      'header-generate': 'Головна',
      'header-privacy':'Політика безпеки',
      'header-pricing':'Ціна',
      'header-blog':'Блог',
      'header-logIn':'Увійти',
      'header-signUp': 'Зареєструватися',
      'account-open' : 'Аккаунт',
      'generate-tutorial-text': 'Швидший шлях до юридичних угод',
      'streamline-name':'Оптимізуй мету за допомогою ШІ',
      'streamline-more':'Оптимізуйте економічно ефективні рішення для вашого бізнесу. Створюйте документи, що відповідають вимогам законодавства, за допомогою настроюваних угод і політик для вашого веб-сайту чи мобільного додатка в будь-який час і в будь-якому місці за допомогою iTerms.',
      'streamline-firstPoint':'Необмежені завантаження за 9,95 одноразово',
      'streamline-secondPoint':'Усі юридичні угоди підтверджені практикуючим юристом',
      'streamline-thirdPoint':'Охоплює закони ЄС/США та основні закони про конфіденційність',
      'streamline-fourthPoint':'Автоматичні юридичні оновлення на основі ШІ',
      'streamline-fifthPoint':'Конкурентні ціни в провідній галузі ',
      'streamline-sixthPoint':'Безпечно зберігайте свою політику на нашій платформі',
      'streamline-seventhPoint':'Політика легкого вставлення у ваш домен',
      'streamline-eigthPoint':'Підходить для більшості веб-/мобільних програм',
      'generate-forfree':'Генерувати',
      'generate':'Генерувати',
      'learn':'Детальніше',
      'streamline_small_description_title':'AI + ITerms працюють краще',
      'streamline_small_description_more':'Створіть бездоганний досвід оплати для своїх клієнтів, використовуючи провідні технології, які адаптуються до будь-якого бізнесу, галузі, платформи чи шляху покупця. Ви швидко почнете працювати, зможете легко додавати методи оплати та підвищувати коефіцієнт конверсії. Насолоджуйтеся гнучкими функціями, які адаптуються до вашого бізнесу за допомогою однієї інтеграції:',
      'streamline_small_description_first':'Підтверджено юристом',
      'streamline_small_description_second':'Юридичні оновлення ШІ',
      'streamline_small_description_third':'Найдешевший серед конкурентів',
      'streamline_small_description_fourth':'Доступно i зрозуміло',
      'streamline_small_description_fifth':'Ми розміщуємо його для вас',
      'post-title_large-h3':'Будьте в курсі останніх новин',
      'post-title_large-p':'Дізнайся про новини',
      'post-title_large-h4':'Навчайтеся у експертів iTerms, щоб завжди бути в курсі галузевих законів і мінливих правових ландшафтів.',
      'read-more':'Детальніше',
      'read':'Читати',
      'cardpricing-detail_p':'Підтвердьте свою довіру',
      'cardpricing-detail-h2':'Порівняйте конкурентів галузі',
      'cardPricing_acsess-h2':'Необмежений доступ',
      'cardPricing_acsess-h5':'на будь який документ',
      'cardpricing-detail-h4':'iTerms пропонує провідні в галузі рішення для бізнесу за незначну ціну та без прихованих комісій.',
      'safeguards_small_h3':'Можеш довіряти',
      'safeguards_small_h1':'Юридичний захист',
      'safeguards_small_h4':'Створіть безкоштовну угоду про положення та умови (так звані умови використання або умови обслуговування) для свого веб-сайту чи програми',
      'safeguards_large_h3':'Довірені положення',
      'safeguards_large_h1':'Надійні правові гарантії',
      'safeguards_large_h4':'Сертифіковані юристами рішення щодо відповідності для вашої зручності та захисту.',
      'swiperPost_title-h5':'Ваш захист – ваш успіх',
      'swiperPost_title-h2':'Наші клієнти говорять',
      'swiperPost_title-p':'Забезпечена відповідність, гарантія, ',
      'swiperPost_title-span':'задоволені клієнти.',
      'latest-blog':'Останні статті блогу',
      'blog-news':'Що нового',
      'blog-more':'Понад 140 000 компаній використовують iTerms. Приєднуйтесь до нашої спільноти чудових компаній!',
      
      'latest': 'Будьте в курсі останніх новин',
      'discover_new':'Дізнайтеся про новинки',
      'learn_from_experts':'Навчайтеся у експертів iTerms, щоб залишатися на висоті галузеві законності та правовий ландшафт, що постійно змінюється.',
      'loading': 'Завантаження...',
      'error': 'Помилка:',
      'read_more': 'Детальніше',
      
      'categories': 'Категорії',
      
      'post_not_found': 'Пост не знайдено',
      'back':'Назад',
      'share': 'Поділитися:',
      'contents': 'Зміст',
      'post_detail':'Деталі публікації',
      'related_posts': 'Схожі Пости',
      
      'popup_create': 'Вам потрібно створити обліковий запис',
      'popup_incorrect': 'Або дані неправильні',
      'sign_in': 'Увійти',
      'or': 'Або',
      'email': 'Електронна пошта',
      'enter_email': 'Введіть Електронну пошту',
      'password': 'Пароль',
      'enter_password': 'Мінімум 8 символів',
      'sign_in_with': 'Увійти за допомогою',
      'have_not_account':'Немає облікового запису?',
      'sign_up': 'Зареєструватися',
      
      'your_name': 'Твоє ім\'я',
      'forgot_name': 'Ви забули ввести своє ім\'я',
      'invalid_email': 'Адреса Недійсна ',
      'forgot_email': 'Ви забули ввести пошту',
      'forgot_password': 'Ви забули ввести пароль',
      'i_agree': 'Продовжуючи, я погоджуюся з',
      'terms_of_service': 'Умови використання',
      'privacy_policy': 'Політика конфіденційності',
      'create_account': 'Створити акаунт',
      'have_account': 'Вже є аккаунт?',
      
      'oops': 'Ой! Сторінку Не Знайдено',
      'p_oops': 'Численні юридичні угоди, доступні одним дотиком відбитків пальців для вашого веб-сайту чи мобільного додатка.',
      'back_to_home': 'Назад додому',
      
      'content_of_legal': 'Зміст юридичної політики',
      'any_rem_tools': 'Інструменти Ремаркетингу',
      'any_ads_tools': 'Рекламні Інструменти',
      'any_analytics_tools': 'Інструменти Аналітики',
      'any_payment_processors': 'Платіжні Процесори',
      'integrate_to_website': 'Інтеграція з Веб-сайтом',
      'hosted_policies': 'Правила розміщення',
      'embed_site': 'Вставити На Свій Сайт',
      'regular_doc_updates': 'Регулярне Оновлення Документів',
      'customize_&_download': 'Налаштування Та Завантаження',
      'TXT': 'TXT Формат',
      'HTML': 'HTML Файл (.html)',
      'DOCX': 'DOCX Файл (.doc)',
      'unlimited_downloads': 'Необмежене Завантаження',
      'custom_logo': 'Спеціальний Лого на Документі',
      'custom_font': 'Спеціальний Шрифт на Документі',
      'for_startups': 'Для стартапів',
      'for_month': '/місяць',
      'choose_plan': 'Виберіть План',
      'for_businesses': 'Для підприємств',
      'for_one_time': '/один раз',
      'continue_free': 'Безкоштовно',
      'flexible_pricing': 'гнучка ціна',
      'simple_pricing': 'Просте, прозоре ціноутворення',
      'noc_nos': 'Жодних контрактів. Без несподіваних зборів.',
      'first_month': 'Перший місяць',
      'following_months': 'Наступні місяці',
      'most_popular': 'Найбільш популярний',
      'see_all_features': 'Переглянути всі функції',
      
      'article_medium': 'Останні статті блогу',
      'article_large': 'Почніть роботу за лічені хвилини',
      'business_medium': 'Готові захистити свій бізнес?',
      'business_large': 'Чи готові ви захистити свій бізнес?',
      'text_medium': 'Понад 140 000 компаній використовують iTerms. Приєднуйтесь до нашої спільноти чудових компаній!',
      'text_large': 'Підпишіться на наші пакети облікових записів і почніть створювати юридичні угоди, які відповідають потребам вашого бізнесу.',
      'footer_sign': 'Зареєструйтесь!',
      'footer_start': 'Почніть роботу безкоштовно',
      'footer_learn': 'Вивчайте більше',
      'footer_text': 'Понад 140 000 компаній використовують iTerms. Приєднуйтесь до нашої спільноти.',
      'footer_terms': 'Правила та умови',
      'footer_policy': 'Політика конфіденційності',
      'footer_disclaimer': 'Застереження',
      'footer_version': 'Англійська версія',
      'footer_company': 'Компанія',
      'footer_work': 'Як це працює',
      'footer_reviews': 'Відгуки',
      'footer_contact': 'Зв\'яжіться з нами',
      'footer_blog': 'Блог',
      'footer_products': 'Продукти',
      'footer_solutions': 'Рішення',
      'footer_trust': 'Довіра та безпека',
      'footer_payment': 'Оплата',
      'footer_help': 'Довідка',
      'footer_support': 'Підтримка',
      'footer_pricing': 'Ціноутворення',
      
      'privacy_flexible': 'гнучка цінова політика',
      'privacy_terms': 'Правила та умови',
      'privacy_create': 'Створіть безкоштовну угоду про положення та умови (так звані умови використання або умови обслуговування) для свого веб-сайту чи програми',
      'privacy_seamlessly': 'Легко створюйте та адмініструйте професійні положення та умови, які відповідають міжнародному законодавству',
      'privacy_home': 'Назад додому',
      'privacy_generate': 'Генерувати',
      'privacy_learn': 'Вивчайте більше',

      'privacy_conditions_conditions': 'Функції онлайн-генератора положень та умов',
      'privacy_conditions_explore': 'Досліджуйте додаткові функції',
      'privacy_conditions_made': 'Створено для вашого бізнесу',
      'privacy_conditions_tailor': 'Спеціально для вашого бізнесу',
      'privacy_conditions_designed': 'Створіть умови використання для вашого блогу, веб-сайту, програми, SaaS або сайту електронної комерції. Встановіть правила та права для вашої платформи.',
      'privacy_conditions_safeguard': 'Захистіть інтереси свого вмісту. Створіть точні правила та умови, розроблені спеціально для вашого веб-сайту, програми, блогу, SaaS або сайту електронної комерції.',
      'privacy_conditions_customizable': 'Можливість налаштування',
      'privacy_conditions_fully': 'Повністю настроюється',
      'privacy_conditions_settle': 'Не погоджуйтеся на загальні положення та умови, коли ви можете налаштувати зовнішній вигляд своїх умов відповідно до унікального стилю вашого веб-сайту чи програми.',
      'privacy_conditions_generic': 'Не погоджуйтеся на загальні положення та умови. За допомогою iTerms повністю налаштуйте зовнішній вигляд своїх вимог, щоб доповнити естетику дизайну веб-сайту чи мобільного додатка, щоб підвищити довіру до себе.',
      'privacy_conditions_free': 'Безкоштовний веб-хостинг',
      'privacy_conditions_hosting': 'Веб хостинг',
      'privacy_conditions_termly': 'Termly розмістить ваші умови безкоштовно! Просто розмістіть посилання на своєму сайті, щоб ваша сторінка з умовами була доступна для користувачів.',
      'privacy_conditions_dedicated': 'iTerms прагне надавати вам безперебійні бізнес-рішення, тому ми розмістили вашу юридичну угоду на наших серверах.',
      
      'privacy_online_best': 'Найкращий безкоштовний онлайн-генератор положень та умов',
      'privacy_online_online': 'Онлайн-генератор положень і умов, якому можна довіряти',
      'privacy_online_about': 'Про наш Генератор угод про положення та умови',
      'privacy_online_numerous': 'Численні угоди про положення та умови',
      'privacy_online_create': 'Не знаєте, як створити умови для свого бізнесу? За допомогою нашого генератора ви можете легко створити умови онлайн. За лічені хвилини створіть умови, які захистять ваші:',
      'privacy_online_regardless': 'Незалежно від галузі, в якій ви працюєте, iTerms пропонує рішення щодо положень та умов, розроблені спеціально для вас:',
      'privacy_online_blog': 'Блог',
      'privacy_online_website': 'Веб-сайт',
      'privacy_online_mobile': 'Мобільний додаток',
      'privacy_online_ecommerce': 'Сайт електронної комерції',
      'privacy_online_shop': 'Інтернет-магазин',
      'privacy_online_trusted': 'Інтуїтивно зрозуміле програмне забезпечення Termly, якому довіряють тисячі компаній у всьому світі, створює умови для будь-якого бізнесу за лічені хвилини. Не піддавайте свій бізнес ризику, коли захист безкоштовний.',
      'privacy_online_protect': 'Захистіть свій бізнес за допомогою положень та умов',
      'privacy_online_safeguard': 'Захистіть свої бізнес-інтереси за допомогою положень і умов',
      'privacy_online_take': 'Скористайтеся нашим генератором умов та положень веб-сайту, щоб допомогти вашому бізнесу обмежити відповідальність, боротися з судовими спорами та встановити юрисдикцію. Складіть терміни, які включають:',
      'privacy_online_operate': 'Керуйте своїм бізнесом, не сумніваючись у тому, чи захищені ваші інтереси. За допомогою iTerms обмежте свою відповідальність і захистіть свої засоби до існування від потенційних судових позовів.',
      'privacy_online_terms': 'Умови використання',
      'privacy_online_intellectual': 'Право інтелектуальної власності',
      'privacy_online_digital': 'Повідомлення та політика Закону про захист авторських прав у цифрову епоху',
      'privacy_online_prohibited': 'Заборонена діяльність',
      'privacy_online_termination': 'Застереження про розірвання',
      'privacy_online_governing': 'Правом, що регулює',
      'privacy_online_conditions': 'Наш безкоштовний генератор умов і положень — це універсальне рішення для кращого захисту вашого блогу, програми чи веб-сайту — створіть його сьогодні БЕЗКОШТОВНО!',
      'privacy_online_protected': 'Захистіть свій вміст і спробуйте генератор положень і умов iTerms сьогодні!',
      'privacy_online_generate': 'Генерувати',

      'privacy_swiper_privacy': 'Політика конфіденційності',
      'privacy_swiper_statement': 'Заява або юридичний документ, який розкриває деякі або всі способи збирання стороною, розкриття даних клієнта чи клієнтів.',
      'privacy_swiper_generate': 'Генерувати',
      'privacy_swiper_learn': 'Вивчайте більше',
      'privacy_swiper_terms': 'Правила та умови',
      'privacy_swiper_legal': 'Це юридичні угоди між постачальником послуг і особою, яка хоче скористатися цією послугою.',
      'privacy_swiper_cookie': 'Політика cookie',
      'privacy_swiper_disclaimer': 'Застереження',
      'privacy_swiper_refund': 'Політика відшкодування',
      'privacy_swiper_business': 'для вашого бізнесу',
      'privacy_swiper_made': 'Інтуїтивно зрозуміло для вашого бізнесу',
      'privacy_swiper_full': 'Наш повний набір рішень для відповідності',
      'privacy_swiper_explore': 'Ознайомтеся з рішеннями iTerms',
      'privacy_swiper_create': 'Створіть безкоштовну угоду про положення та умови (так звані умови використання або умови обслуговування) для свого веб-сайту чи програми.',
      'privacy_swiper_regardless': 'Незалежно від ваших вимог, iTerms має готове рішення для використання.',
      
      'privacy_protection_trust': 'Можна довіряти',
      'privacy_protection_provisions': 'Довірені положення',
      'privacy_protection_legal': 'Юридичний захист Вас',
      'privacy_protection_secure': 'Надійні правові гарантії',
      'privacy_protection_create': 'Створіть безкоштовну угоду про положення та умови (так звані умови використання або умови обслуговування) для свого веб-сайту чи програми',
      'privacy_protection_attorney': 'Сертифіковані юристами рішення щодо відповідності для вашої зручності та захисту.',
      'privacy_protection_policies': 'Політики створено',
      'privacy_protection_businesses': 'Компанії',
      'privacy_protection_compliant': 'Відповідний перегляд сторінки',

      'privacy_blog_blog': 'Останні статті блогу',
      'privacy_blog_solutions': 'Рішення ваших проблем',
      'privacy_blog_questions': 'Запитання? Послухайте',
      'privacy_blog_do': 'У вас є які-небудь питання?',
      'privacy_blog_more': 'Понад 140 000 компаній використовують iTerms. Приєднуйтесь до нашої спільноти чудових компаній!',
      'privacy_blog_take': 'Перегляньте наші відповіді! Є запитання? Будь ласка, не бійтеся звертатися до нашої команди в будь-який час.',
      'privacy_blog_table': 'Зміст',
      'privacy_blog_general': 'Загальне',
      'privacy_blog_trust': 'Довіра та безпека',
      'privacy_blog_payment': 'Оплата',
      'privacy_blog_help': 'Довідка',
      'privacy_blog_contacts': 'Контакти',
      
      'What is a Privacy Policy?': 'Що таке Політика конфіденційності?',
      'There are two main reasons why you need a Privacy Policy:': 'Є дві основні причини, чому вам потрібна Політика конфіденційності:',
      'They\'re legally required': 'Вони є обов\'язковими з точки зору законодавства',
      'If you collect or use personal information, you\'ll have to comply with privacy laws put in place around the world to protect consumer privacy. These laws will apply regardless of where your business itself is located, as they work to protect consumers in specific regions. For example, if your business is located in the U.S. but you have users in the EU, the EU\'s GDPR will still apply to you.': 'Якщо ви збираєте або використовуєте персональну інформацію, вам потрібно дотримуватися законів про конфіденційність, які діють по всьому світу, щоб захистити конфіденційність споживачів. Ці закони будуть застосовуватися незалежно від місця розташування вашого бізнесу, оскільки вони працюють на захист споживачів у певних регіонах. Наприклад, якщо ваш бізнес знаходиться в США, але у вас є користувачі в ЄС, Загальний регламент збору, обробки та зберігання персональних даних (GDPR) ЄС все одно застосовуватиметься до вас.',
      'Consumers expect to see them': 'Споживачі очікують їх бачити',
      'In a world where consumer privacy is more important than ever and consumers are starting to take their privacy more seriously, not having a Privacy Policy can mean you may lose customers. People expect to see a Privacy Policy that they can easily access whenever they want. Not having one will make you seem untrustworthy.': 'У світі, де конфіденційність споживачів набуває все більшого значення, і споживачі починають ставити свою конфіденційність серйозніше, відсутність Політики конфіденційності може означати втрату клієнтів. Люди очікують бачити Політику конфіденційності, до якої вони можуть легко отримати доступ в будь-який момент. Відсутність такої політики може створювати враження ненадійності.',
      'What is Personal Information?': 'Що таке персональна інформація?',
      'Why do I need a Privacy Policy?': 'Навіщо мені Політика конфіденційності?',
      'Can I request an email address without a Privacy Policy?': 'Чи можу я запитати електронну адресу без Політики конфіденційності?',
      'How should I write my Privacy Policy?': 'Як мені написати мою Політику конфіденційності?',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
