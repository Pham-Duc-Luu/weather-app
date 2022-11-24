import { createContext, useState } from 'react';

const tempContext = createContext();

function Temp({ children }) {
    const [temp, setTemp] = useState('c');

    return <tempContext.Provider value={{ temp, setTemp }}>{children}</tempContext.Provider>;
}

export { Temp, tempContext };
