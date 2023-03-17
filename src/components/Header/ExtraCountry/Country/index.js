import sun from '~/img/main_icon/sun.png';
import icon_113 from '~/img/main_icon/weather/64x64/day/113.png';
import className from 'classnames/bind';
import styles from './Country.module.scss';
import { useEffect, useState } from 'react';

const cx = className.bind(styles);
var src;
var path;
function Country({ name }) {
    const [render, setRender] = useState(false);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${name}aqi=no`,
            requestOptions,
        )
            .then((response) => response.json())
            .then((result) => {
                src = result.current.condition.icon.replace('//cdn.weatherapi.com/weather/64x64/', '');
                path = require(`../../../../img/main_icon/weather/64x64/${src}`);
                setRender(true);
            })
            .catch((error) => console.log('error', error));
    }, [render]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                <img src={path} />
            </div>
            <span className={cx('context')}>{name}</span>
        </div>
    );
}

export default Country;
