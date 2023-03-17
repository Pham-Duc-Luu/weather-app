import Country from './Country';
import weather from '~/img/main_icon/weather/64x64/day/113.png';

import className from 'classnames/bind';
import styles from './ExtraCountry.module.scss';
import { useEffect, useState } from 'react';

const cx = className.bind(styles);
var countries = [];
function ExtraCountry() {
    const [render, setRender] = useState(false);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append('X-Api-Key', 'MK3ApXUCLfOeReI8WRIpRw==1RPkYxHW2qJVHihJ');

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        fetch('https://api.api-ninjas.com/v1/city?name=a&limit=30', requestOptions)
            .then((response) => response.json())
            .then((result) => {
                countries = result.splice(1, 8);
                setRender(true);
            })
            .catch((error) => console.log('error', error));
    }, [render]);

    return (
        <div className={cx('wrapper')}>
            {countries.map((country, index) => {
                return <Country name={country.name} key={index} />;
            })}
        </div>
    );
}

export default ExtraCountry;
