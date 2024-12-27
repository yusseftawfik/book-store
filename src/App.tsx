import { useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

import './App.css';

import arMessage from './locales/ar.json';
import enMessage from './locales/en.json';

const messages = {
    en: enMessage,
    ar: arMessage,
};

function App() {
    const [locale, setLocale] = useState(navigator.language.split(`-`)[0] || `en`);

    const toggleLocale = () => {
        setLocale((prevLocale) => (prevLocale === `en` ? `ar` : `en`));
    };

    return (
        <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale as keyof typeof messages]}>
            <div>
                <button onClick={toggleLocale}>{locale === `en` ? `Switch to Arabic` : `Switch to English`}</button>
                <h1>
                    <FormattedMessage id="welcomeMessage" />
                </h1>
            </div>
        </IntlProvider>
    );
}

export default App;
