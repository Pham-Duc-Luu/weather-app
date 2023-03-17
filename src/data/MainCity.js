import { Fragment, createContext, useEffect, useState, useLayoutEffect } from 'react';

const CityContext = createContext();
// let data;

function MainCity({ children }) {
    const [countryInput, setCountryInput] = useState('hanoi');
    const [data, setData] = useState();
    useEffect(() => {
        // setRender(false);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        console.log(process.env.REACT_APP_WEATHER_KEY);

        fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${countryInput}&days=10&aqi=no&alerts=no`,
            requestOptions,
        )
            .then((response) => response.json())
            .then((result) => {
                // data = result;
                setData(result);
            })
            .catch((error) => console.log('error', error));
    }, [countryInput]);

    return <CityContext.Provider value={{ data, countryInput, setCountryInput }}>{children}</CityContext.Provider>;
}

export { MainCity, CityContext };
