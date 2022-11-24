// import {}

import { createContext, useState } from 'react';

const languageContext = createContext();

function LanguageSetting({ children }) {
    const [language, setLanguage] = useState('VI');

    return <languageContext.Provider value={{ language, setLanguage }}>{children}</languageContext.Provider>;
}

export { LanguageSetting, languageContext };
