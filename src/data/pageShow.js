import { createContext, useState } from 'react';

const pageContext = createContext();

function PageShow({ children }) {
    const [mainPage, setMainPage] = useState(1);
    return <pageContext.Provider value={{ mainPage, setMainPage }}>{children}</pageContext.Provider>;
}

export { PageShow, pageContext };
