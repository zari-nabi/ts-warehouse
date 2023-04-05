import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
   .use(initReactI18next)
  
  .init({
    fallbackLng: 'fa',
    debug: true,

    interpolation: {
      escapeValue: false, 
      formatSeparator: ",",
    },
    lng:"fa",
    ns: [
        "common",
      ],
      defaultNS: "common",
  });


export default i18n;

// import { useTranslation } from 'react-i18next';

// function MyComponent() {
//   const { t, i18n } = useTranslation();

//   return <h1>{t('Welcome to React')}</h1>