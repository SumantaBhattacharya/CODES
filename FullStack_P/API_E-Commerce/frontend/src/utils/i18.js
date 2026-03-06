import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Setup and initialize i18next
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // This will log debug messages to the console. Set to false in production.
    lng: "en", // Default language. Can be overridden by user preference.
    fallbackLng: "en", // Fallback language if user's preferred language is not available.
    resources: {
      en: {
        translation: {
          // navbar
          logo: "SCATCH",
          home: "Home",
          cart: "Cart",
          cartItems: "CART ITEMS",
          menuLabel: "MENU",
          closeLabel: "CLOSE",

          // search
          searchPlaceholder: "Search products...",
          loadingProducts: "Loading Products...",

          // products
          productsPageHeading: "OUR PRODUCTS",
          productsPagePara: "Discover amazing products with great quality and prices",

          // products-category
          all: "All Products",
          women: "Women's Clothing",
          men: "Men's Clothing",
          jewelery: "Jewelry",
          electronics: "Electronics",

          // products-sort
          default: "Default",
          priceLow: "Price: Low to High",
          priceHigh: "Price: High to Low",
          rating: "Highest Rated",

          // products-list
          products: "products",
          showing: "Showing",

          // footer
          Copyright: "© Copyright 2025. All Rights Reserved.",
          company: "COMPANY",
          features: "Features",
          aboutUs: "About Us",
          socialLinks: "Social Links",
          customerTestimonials: "Customer Testimonials",
          
          support: "SUPPORT",
          account: "Account",
          help: "Help",
          contact: "Contact Us",
          customerSupport: "Customer Support",

          legals: "LEGALS",
          terms: "Terms & Conditions",
          policy: "Privacy Policy",
          license: "Licensing",

          // about page translations
          aboutPageHeading: "ABOUT US",
          aboutPageSubHeading: "Your Premier Shopping Destination",
          aboutPageSecPara: "With over 5 years of experience in offline stores, we've mastered the art of delivering quality products and exceptional shopping experiences. Our curated collection brings you the best products from around the world, carefully selected to meet your everyday needs and desires.",
          productsDelevered: "Products Delivered",
          happyCustomers: "Happy Customers",
          yearsInEcommerce: "Years in E-commerce",
          brandPartners: "Brand Partners",

          // social page translations
          socialLink_LinkedIn: "LINKEDIN",
          socialLink_Twitter: "TWITTER",
          socialLink_Facebook: "FACEBOOK",
          socialLink_Instagram: "INSTAGRAM",

          // Customer Testimonials
          customerTestimonialsHeading: "CUSTOMER TESTIMONIALS",
          customerTestimonialsPara: "Hear what our users say about us.",
          customerTestimonialsReview_One: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
          customerTestimonialsReview_Two: "I'm truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
          customerTestimonialsReview_Three: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results.",

          // Page not found
          pageNotFoundHeading: "Page Not Found",
          pageNotFoundPara: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",

          // privacy_Policy
          privacyPolicyHeading: "PRIVACY POLICY",
          privacyPolicyPara: "At our e-commerce store, we are committed to protecting your privacy and providing a safe and secure user experience.",
          privacyPolicy_One: "Information Collection",
          privacyPolicy_One_Desc: "We collect information from you when you register on our site, place an order, or fill out a form. When ordering, you may be asked to enter your name, email address, or shipping details. However, you may visit our site anonymously at any time.",
          privacyPolicy_Two: "Information Usage",
          privacyPolicy_Two_Desc: "Any information we collect may be used to personalize your shopping experience, improve our website, and process transactions. Your information helps us better respond to your individual needs and customer service requests.",
          privacyPolicy_Three: "Cookies",
          privacyPolicy_Three_Desc: "We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic so that we can offer better tools in the future.",
          privacyPolicy_Four: "Data Security",
          privacyPolicy_Four_Desc: "We implement a variety of security measures, including 256-bit SSL encryption, to maintain the safety of your personal information when you enter, submit, or access your personal data during checkout.",
          privacyPolicy_Five: "Third-Party Disclosure",
          privacyPolicy_Five_Desc: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.",
        },
      },
      
      fr: {
        translation: {
          // navbar
          logo: "SCATCH",
          home: "Accueil",
          cart: "Panier",
          cartItems: "ARTICLES DU PANIER",
          menuLabel: "MENU",
          closeLabel: "FERMER",

          // search
          searchPlaceholder: "Rechercher des produits...",
          loadingProducts: "Chargement des produits...",

          // products
          productsPageHeading: "NOS PRODUITS",
          productsPagePara: "Découvrez des produits incroyables avec une qualité et des prix exceptionnels",

          // products-category
          all: "Tous les produits",
          women: "Vêtements Femme",
          men: "Vêtements Homme",
          jewelery: "Bijoux",
          electronics: "Électronique",

          // products-sort
          default: "Par défaut",
          priceLow: "Prix: Croissant",
          priceHigh: "Prix: Décroissant",
          rating: "Mieux notés",

          // products-list
          products: "produits",
          showing: "Affichage de",

          // footer
          Copyright: "© Copyright 2025. Tous droits réservés.",
          company: "ENTREPRISE",
          features: "Caractéristiques",
          aboutUs: "À propos de nous",
          socialLinks: "Réseaux sociaux",
          customerTestimonials: "Témoignages clients",
          
          support: "ASSISTANCE",
          account: "Compte",
          help: "Aide",
          contact: "Contactez-nous",
          customerSupport: "Service client",

          legals: "MENTIONS LÉGALES",
          terms: "Conditions générales",
          policy: "Politique de confidentialité",
          license: "Licence",

          // about page translations
          aboutPageHeading: "À PROPOS DE NOUS",
          aboutPageSubHeading: "Votre destination shopping premium",
          aboutPageSecPara: "Avec plus de 5 ans d'expérience dans les magasins physiques, nous avons maîtrisé l'art de livrer des produits de qualité et des expériences shopping exceptionnelles. Notre collection sélectionnée vous apporte les meilleurs produits du monde entier, soigneusement choisis pour répondre à vos besoins et désirs quotidiens.",
          productsDelevered: "Produits livrés",
          happyCustomers: "Clients satisfaits",
          yearsInEcommerce: "Années en e-commerce",
          brandPartners: "Partenaires de marque",

          // social page translations
          socialLink_LinkedIn: "LINKEDIN",
          socialLink_Twitter: "TWITTER",
          socialLink_Facebook: "FACEBOOK",
          socialLink_Instagram: "INSTAGRAM",

          // Customer Testimonials
          customerTestimonialsHeading: "TÉMOIGNAGES CLIENTS",
          customerTestimonialsPara: "Découvrez ce que nos utilisateurs disent de nous.",
          customerTestimonialsReview_One: "Service exceptionnel et attention aux détails. Tout a été traité professionnellement et efficacement du début à la fin. Hautement recommandé !",
          customerTestimonialsReview_Two: "Je suis vraiment impressionné par la qualité et la cohérence. Tout le processus s'est déroulé sans problème et les résultats ont dépassé toutes les attentes. Merci !",
          customerTestimonialsReview_Three: "Expérience fantastique ! Du début à la fin, l'équipe a été professionnelle, réactive et soucieuse de fournir d'excellents résultats.",

          // Page not found
          pageNotFoundHeading: "Page non trouvée",
          pageNotFoundPara: "La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.",

          // privacy_Policy
          privacyPolicyHeading: "POLITIQUE DE CONFIDENTIALITÉ",
          privacyPolicyPara: "Dans notre boutique en ligne, nous nous engageons à protéger votre vie privée et à offrir une expérience utilisateur sûre et sécurisée.",
          privacyPolicy_One: "Collecte d'informations",
          privacyPolicy_One_Desc: "Nous collectons des informations lorsque vous vous inscrivez sur notre site, passez une commande ou remplissez un formulaire. Lors de la commande, vous pouvez être invité à saisir votre nom, votre adresse e-mail ou vos coordonnées de livraison. Cependant, vous pouvez visiter notre site anonymement à tout moment.",
          privacyPolicy_Two: "Utilisation des informations",
          privacyPolicy_Two_Desc: "Toute information que nous collectons peut être utilisée pour personnaliser votre expérience d'achat, améliorer notre site Web et traiter les transactions. Vos informations nous aident à mieux répondre à vos besoins individuels et aux demandes de service client.",
          privacyPolicy_Three: "Cookies",
          privacyPolicy_Three_Desc: "Nous utilisons des cookies pour nous aider à mémoriser et traiter les articles dans votre panier, comprendre et enregistrer vos préférences pour les visites futures, et compiler des données agrégées sur le trafic du site afin de pouvoir offrir de meilleurs outils à l'avenir.",
          privacyPolicy_Four: "Sécurité des données",
          privacyPolicy_Four_Desc: "Nous mettons en œuvre diverses mesures de sécurité, y compris le cryptage SSL 256 bits, pour maintenir la sécurité de vos informations personnelles lorsque vous entrez, soumettez ou accédez à vos données personnelles lors du paiement.",
          privacyPolicy_Five: "Divulgation à des tiers",
          privacyPolicy_Five_Desc: "Nous ne vendons, n'échangeons ni ne transférons à des parties extérieures vos informations personnellement identifiables. Cela n'inclut pas les tiers de confiance qui nous aident à exploiter notre site Web ou à mener nos activités, tant que ces parties acceptent de garder ces informations confidentielles.",
        },
      },
      
      hi: {
        translation: {
          // navbar
          logo: "स्कैच",
          home: "होम",
          cart: "कार्ट",
          cartItems: "कार्ट आइटम",
          menuLabel: "मेनू",
          closeLabel: "बंद करें",

          // search
          searchPlaceholder: "उत्पाद खोजें...",
          loadingProducts: "उत्पाद लोड हो रहे हैं...",

          // products
          productsPageHeading: "हमारे उत्पाद",
          productsPagePara: "बेहतरीन गुणवत्ता और कीमतों के साथ अद्भुत उत्पाद खोजें",

          // products-category
          all: "सभी उत्पाद",
          women: "महिलाओं के कपड़े",
          men: "पुरुषों के कपड़े",
          jewelery: "आभूषण",
          electronics: "इलेक्ट्रॉनिक्स",

          // products-sort
          default: "डिफ़ॉल्ट",
          priceLow: "कीमत: कम से अधिक",
          priceHigh: "कीमत: अधिक से कम",
          rating: "सर्वोच्च रेटेड",

          // products-list
          products: "उत्पाद",
          showing: "दिखा रहा है",

          // footer
          Copyright: "© कॉपीराइट 2025. सर्वाधिकार सुरक्षित।",
          company: "कंपनी",
          features: "विशेषताएँ",
          aboutUs: "हमारे बारे में",
          socialLinks: "सोशल लिंक्स",
          customerTestimonials: "ग्राहक प्रशंसापत्र",
          
          support: "सहायता",
          account: "खाता",
          help: "मदद",
          contact: "संपर्क करें",
          customerSupport: "ग्राहक सहायता",

          legals: "कानूनी",
          terms: "नियम एवं शर्तें",
          policy: "गोपनीयता नीति",
          license: "लाइसेंसिंग",

          // about page translations
          aboutPageHeading: "हमारे बारे में",
          aboutPageSubHeading: "आपका प्रीमियर शॉपिंग गंतव्य",
          aboutPageSecPara: "ऑफलाइन स्टोर में 5 वर्षों से अधिक के अनुभव के साथ, हमने गुणवत्तापूर्ण उत्पाद और असाधारण शॉपिंग अनुभव प्रदान करने की कला में महारत हासिल की है। हमारा संग्रह आपके लिए दुनिया भर के सर्वोत्तम उत्पाद लाता है, जिन्हें आपकी दैनिक आवश्यकताओं और इच्छाओं को पूरा करने के लिए सावधानीपूर्वक चुना गया है।",
          productsDelevered: "उत्पाद वितरित",
          happyCustomers: "संतुष्ट ग्राहक",
          yearsInEcommerce: "ई-कॉमर्स में वर्ष",
          brandPartners: "ब्रांड पार्टनर",

          // social page translations
          socialLink_LinkedIn: "LINKEDIN",
          socialLink_Twitter: "TWITTER",
          socialLink_Facebook: "FACEBOOK",
          socialLink_Instagram: "INSTAGRAM",

          // Customer Testimonials
          customerTestimonialsHeading: "ग्राहक प्रशंसापत्र",
          customerTestimonialsPara: "सुनें हमारे उपयोगकर्ता हमारे बारे में क्या कहते हैं।",
          customerTestimonialsReview_One: "असाधारण सेवा और विस्तार पर ध्यान। शुरू से अंत तक सब कुछ पेशेवर और कुशलता से संभाला गया। अत्यधिक अनुशंसित!",
          customerTestimonialsReview_Two: "मैं गुणवत्ता और स्थिरता से वास्तव में प्रभावित हूं। पूरी प्रक्रिया सुचारू थी, और परिणाम सभी अपेक्षाओं से अधिक थे। धन्यवाद!",
          customerTestimonialsReview_Three: "शानदार अनुभव! शुरू से अंत तक, टीम पेशेवर, उत्तरदायी और वास्तव में बेहतरीन परिणाम देने के लिए चिंतित थी।",

          // Page not found
          pageNotFoundHeading: "पेज नहीं मिला",
          pageNotFoundPara: "आपके द्वारा खोजा जा रहा पृष्ठ हटा दिया गया हो सकता है, उसका नाम बदल दिया गया हो सकता है, या अस्थायी रूप से अनुपलब्ध हो सकता है।",

          // privacy_Policy
          privacyPolicyHeading: "गोपनीयता नीति",
          privacyPolicyPara: "हमारे ई-कॉमर्स स्टोर में, हम आपकी गोपनीयता की रक्षा करने और एक सुरक्षित उपयोगकर्ता अनुभव प्रदान करने के लिए प्रतिबद्ध हैं।",
          privacyPolicy_One: "सूचना संग्रह",
          privacyPolicy_One_Desc: "जब आप हमारी साइट पर पंजीकरण करते हैं, ऑर्डर देते हैं या फॉर्म भरते हैं तो हम आपसे जानकारी एकत्र करते हैं। ऑर्डर करते समय, आपको अपना नाम, ईमेल पता या शिपिंग विवरण दर्ज करने के लिए कहा जा सकता है। हालाँकि, आप किसी भी समय अनाम रूप से हमारी साइट पर आ सकते हैं।",
          privacyPolicy_Two: "सूचना का उपयोग",
          privacyPolicy_Two_Desc: "हमारे द्वारा एकत्रित की गई कोई भी जानकारी आपके शॉपिंग अनुभव को निजीकृत करने, हमारी वेबसाइट को बेहतर बनाने और लेनदेन को संसाधित करने के लिए उपयोग की जा सकती है। आपकी जानकारी हमें आपकी व्यक्तिगत आवश्यकताओं और ग्राहक सेवा अनुरोधों का बेहतर जवाब देने में मदद करती है।",
          privacyPolicy_Three: "कुकीज़",
          privacyPolicy_Three_Desc: "हम कुकीज़ का उपयोग आपके शॉपिंग कार्ट में आइटम याद रखने और संसाधित करने, भविष्य की यात्राओं के लिए आपकी प्राथमिकताओं को समझने और सहेजने, और साइट ट्रैफ़िक के बारे में समग्र डेटा संकलित करने के लिए करते हैं ताकि हम भविष्य में बेहतर उपकरण प्रदान कर सकें।",
          privacyPolicy_Four: "डेटा सुरक्षा",
          privacyPolicy_Four_Desc: "हम आपकी व्यक्तिगत जानकारी की सुरक्षा बनाए रखने के लिए विभिन्न सुरक्षा उपायों को लागू करते हैं, जिसमें 256-बिट एसएसएल एन्क्रिप्शन भी शामिल है, जब आप चेकआउट के दौरान अपना व्यक्तिगत डेटा दर्ज करते हैं, सबमिट करते हैं या एक्सेस करते हैं।",
          privacyPolicy_Five: "तृतीय-पक्ष प्रकटीकरण",
          privacyPolicy_Five_Desc: "हम आपकी व्यक्तिगत रूप से पहचान योग्य जानकारी को बाहरी पार्टियों को नहीं बेचते, व्यापार नहीं करते या अन्यथा हस्तांतरित नहीं करते हैं। इसमें विश्वसनीय तृतीय पक्ष शामिल नहीं हैं जो हमारी वेबसाइट संचालित करने या हमारा व्यवसाय संचालित करने में हमारी सहायता करते हैं, जब तक कि वे पार्टियां इस जानकारी को गोपनीय रखने के लिए सहमत हों।",
        },
      },
    },
  });

export default i18next;