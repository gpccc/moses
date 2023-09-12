import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Cookies from 'js-cookie';

// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LANG_COOKIE_KEY, COOKIE_EXPIRATION_DAYS } from './constants/service-constants';

// check out https://locize.com/blog/gatsby-i18n/

const detectionOptions = {
    // ?lng=LANGUAGE
    // cookie i18next=LANGUAGE
    // navigator.language
    order: ['querystring', 'cookie', 'navigator'],
}

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            en: {
            translation: {
                'GP full name': 'Greater Phoenix Chinese Christian Church',
                'GP short name': 'GPCCC',
            }
            },
            // zf = traditional script,  Cantonese
            zf: {
            translation: {
                'GP full name': '凰城華人基督教會',
                'GP short name': '凰城華人基督教會',
            }
            },
            // zh = simplified script, Mandarin
            zh: {
            translation: {
                'GP full name': '凰城华人基督教会',
                'GP short name': '凰城华人基督教会',
            }
            },
        },
        detection: detectionOptions,
        fallbackLng: 'en',
        debug: true,
        keySeparator: false,
        nsSeparator: '|',

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

let lng = i18n.language;
if (lng === 'zf' || lng === 'zh-CN') {
    lng = 'zf';
} else if (lng === 'zh' || lng.startsWith('zh-')) {
    lng = 'zh';
} else {
    lng = 'en';
}
i18n.changeLanguage(lng);
Cookies.set(LANG_COOKIE_KEY, lng, { expires: COOKIE_EXPIRATION_DAYS });

export default i18n;