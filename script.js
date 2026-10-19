const article = document.getElementById("main")
const darkMode = document.getElementById("dark-mode")
const languageSelect = document.getElementById("language-select")
let dark = false

const translations = {
    es: {
        documentTitle: "Lo de Gyazo es SALVAJE",
        darkMode: "Modo claro/oscuro",
        title: "Gyazo sufre una brecha de seguridad, millones de imagenes filtradas",
        titleImageAlt: "Imagen principal del artículo",
        whatIsGyazo: "¿Qué es Gyazo?",
        gyazoImageAlt: "Capturas y herramientas de Gyazo",
        whatIsGyazoText: "Gyazo es mayormente conocido por ser tanto un software para capturas de pantalla, GIFs y grabaciones cortas, como por ser un servicio para compartir imágenes junto a otros usuarios mediante un enlace. Muchas organizaciones y empresas lo utilzan para poner enlaces a imágenes en documentación, tickets de soporte, etc...",
        whatHappened: "¿Qué ha ocurrido con Gyazo?",
        whatHappenedText: "El 11 de septiembre de 2026, un atacante se aprovechó de una vulnerabilidad en el servidor de subida de imagenes y consiguió acceder a los sistemas de la empresa, el propio servidor de imágenes e incluso datos personales de clientes.",
        breachImageAlt: "Ilustración de una filtración de datos",
        affected: "¿Qué o quién se vió afectado?",
        extractedIntro: "La empresa confirmó que se habían extraido aproximadamente:",
        extractedUsers: "23,62 millones de registros de usuarios, con datos como correos, nombres, identificadores, hashes de contraseñas, sesiones y algunos tokens de integración.",
        extractedImages: "Cerca de 490 millones de registros de metadatos de imágenes, incluyendo identificadores, y direcciones IP de subida.",
        extractedPrivate: "También se obtuvo una lista de imágenes privadas; la empresa no puede descartar que algunas fueran consultadas.",
        imagesImageAlt: "Imagen de una colección de imágenes digitales",
        impactText: "Según la empresa, no se expusieron datos de tarjetas bancarias. Como consecuencia, Gyazo detuvo temporalmente parte de sus servidores de entrega: algunas capturas antiguas pueden mostrar errores o no abrir, aunque la empresa afirma que los archivos no se han borrado y que las imágenes nuevas vuelven a funcionar normalmente.",
        adviceText: "Si usabas Gyazo, cambia cuanto antes tu contraseña de Gyazo y cualquier otra cuenta donde reutilizaras una contraseña igual o parecida. También conviene revisar cuentas vinculadas mediante Google o X y desconfiar de correos que pidan iniciar sesión o restablecer credenciales. La investigación sigue abierta y las cifras podrían actualizarse.",
        gyazoPlatformAlt: "Plataformas compatibles con Gyazo",
        sources: "Fuentes de este artículo:"
    },
    en: {
        documentTitle: "Gyazo's data breach is WILD",
        darkMode: "Light/dark mode",
        title: "Gyazo suffers a security breach, millions of images leaked",
        titleImageAlt: "Article header image",
        whatIsGyazo: "What is Gyazo?",
        gyazoImageAlt: "Gyazo screenshots and tools",
        whatIsGyazoText: "Gyazo is best known as software for taking screenshots, GIFs, and short recordings, as well as a service for sharing images with other users via a link. Many organizations and companies use it to link to images in documentation, support tickets, and more...",
        whatHappened: "What happened to Gyazo?",
        whatHappenedText: "On September 11, 2026, an attacker exploited a vulnerability in the image-upload server and gained access to the company's systems, the image server itself, and even customers' personal data.",
        breachImageAlt: "Illustration of a data breach",
        affected: "Who or what was affected?",
        extractedIntro: "The company confirmed that approximately the following data had been extracted:",
        extractedUsers: "23.62 million user records, including data such as email addresses, names, identifiers, password hashes, sessions, and some integration tokens.",
        extractedImages: "Nearly 490 million image metadata records, including identifiers and upload IP addresses.",
        extractedPrivate: "A list of private images was also obtained; the company cannot rule out that some of them were viewed.",
        imagesImageAlt: "Image of a collection of digital images",
        impactText: "According to the company, no bank card data was exposed. As a result, Gyazo temporarily shut down some of its content-delivery servers: some older captures may show errors or fail to open, although the company says the files have not been deleted and new images are working normally again.",
        adviceText: "If you used Gyazo, change your Gyazo password as soon as possible, along with the password for any other account where you reused the same or a similar password. You should also review accounts linked through Google or X and be wary of emails asking you to sign in or reset your credentials. The investigation is ongoing, and the figures may be updated.",
        gyazoPlatformAlt: "Platforms supported by Gyazo",
        sources: "Sources for this article:"
    }
}

function changeLanguage() {
    const language = translations[languageSelect.value]

    document.documentElement.lang = languageSelect.value
    document.title = language.documentTitle
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = language[element.dataset.i18n]
    })
    document.querySelectorAll("[data-i18n-alt]").forEach((image) => {
        image.alt = language[image.dataset.i18nAlt]
    })
}

function changeMode() {
    if (dark === false) {
        article.style.backgroundColor = "#1d1d1d"
        article.style.color = "#f5f2eb"
        dark = true
    } else {
        article.style.backgroundColor = "#f5f2eb"
        article.style.color = "#1d1d1d"
        dark = false
    }
}

languageSelect.addEventListener("change", changeLanguage)
darkMode.addEventListener('click', changeMode)
