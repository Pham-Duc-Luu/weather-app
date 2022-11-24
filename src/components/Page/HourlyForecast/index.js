import { MainCity, CityContext } from '~/data/MainCity';
import { languageContext } from '~/data/LanguageSetting';
import { tempContext } from '~/data/temp';
import { pageContext } from '~/data/pageShow';

import icon from '~/img/main_icon/sun.png';

import className from 'classnames/bind';
import styles from './HourlyForecast.module.scss';
import { useContext } from 'react';

const cx = className.bind(styles);

function HourlyForecast() {
    const { data } = useContext(CityContext);
    const { language } = useContext(languageContext);
    const { temp } = useContext(tempContext);
    const { setMainPage } = useContext(pageContext);
    return (
        data && (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>{language === 'VI' ? 'Dự báo từng giờ' : 'Hourly forecast'}</div>
                <ul className={cx('main')}>
                    <li>
                        <div className={cx('time')}>1h</div>
                        <div className={cx('temp')}>{data.forecast.forecastday[0].hour[1].time.split(' ')[1]}</div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data.forecast.forecastday[0].hour[1].condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>
                            {temp === 'c'
                                ? `${data.forecast.forecastday[0].hour[1].temp_c} °C`
                                : `${data.forecast.forecastday[0].hour[1].temp_f} °F`}
                        </div>
                    </li>
                    <li>
                        <div className={cx('time')}>6h</div>
                        <div className={cx('temp')}>{data.forecast.forecastday[0].hour[6].time.split(' ')[1]}</div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data.forecast.forecastday[0].hour[6].condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>
                            {temp === 'c'
                                ? `${data.forecast.forecastday[0].hour[6].temp_c} °C`
                                : `${data.forecast.forecastday[0].hour[6].temp_f} °F`}
                        </div>
                    </li>
                    <li>
                        <div className={cx('time')}>11h</div>
                        <div className={cx('temp')}>{data.forecast.forecastday[0].hour[11].time.split(' ')[1]}</div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data.forecast.forecastday[0].hour[11].condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>
                            {temp === 'c'
                                ? `${data.forecast.forecastday[0].hour[11].temp_c} °C`
                                : `${data.forecast.forecastday[0].hour[11].temp_f} °F`}
                        </div>
                    </li>
                    <li>
                        <div className={cx('time')}>16h</div>
                        <div className={cx('temp')}>{data.forecast.forecastday[0].hour[16].time.split(' ')[1]}</div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data.forecast.forecastday[0].hour[16].condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>
                            {temp === 'c'
                                ? `${data.forecast.forecastday[0].hour[16].temp_c} °C`
                                : `${data.forecast.forecastday[0].hour[16].temp_f} °F`}
                        </div>
                    </li>
                    <li>
                        <div className={cx('time')}>21h</div>
                        <div className={cx('temp')}>{data.forecast.forecastday[0].hour[21].time.split(' ')[1]}</div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data.forecast.forecastday[0].hour[21].condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>
                            {temp === 'c'
                                ? `${data.forecast.forecastday[0].hour[21].temp_c} °C`
                                : `${data.forecast.forecastday[0].hour[21].temp_f} °F`}
                        </div>
                    </li>
                </ul>
                <button
                    className={cx('footer')}
                    onClick={() => {
                        setMainPage(2);
                        window.scrollTo(0, 0);
                    }}
                >
                    {language === 'VI' ? '48 giờ tới' : 'Next 48 hours'}
                </button>
            </div>
        )
    );
}

export default HourlyForecast;
