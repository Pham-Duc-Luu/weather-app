import { MainCity, CityContext } from '~/data/MainCity';
import { languageContext } from '~/data/LanguageSetting';
import { tempContext } from '~/data/temp';
import { pageContext } from '~/data/pageShow';

import icon from '~/img/main_icon/sun.png';

import className from 'classnames/bind';
import styles from './DailyForecast.module.scss';
import { useContext } from 'react';

const cx = className.bind(styles);

function DailyForecast() {
    const { data } = useContext(CityContext);
    const { temp } = useContext(tempContext);
    const { language } = useContext(languageContext);
    const { setMainPage } = useContext(pageContext);

    return (
        data && (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>{language === 'VI' ? 'Dự báo hàng ngày' : 'Daily forecast'}</div>
                <ul className={cx('main')}>
                    <li>
                        <div className={cx('time')}>{language === 'VI' ? 'Hôm nay' : 'Today'}</div>
                        <div className={cx('temp')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[0]?.day?.maxtemp_c
                                : data?.forecast?.forecastday[0]?.day?.maxtemp_f}
                            °
                        </div>
                        <div className={cx('temp-min')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[0]?.day?.mintemp_c
                                : data?.forecast?.forecastday[0]?.day?.mintemp_f}
                            °
                        </div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data?.forecast?.forecastday[0]?.day?.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>0%</div>
                    </li>
                    <li>
                        <div className={cx('time')}>
                            {data?.forecast?.forecastday[1]?.date?.split('-')[2]}
                            {' Th'}
                            {data?.forecast?.forecastday[1]?.date?.split('-')[1]}
                        </div>
                        <div className={cx('temp')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[1]?.day?.maxtemp_c
                                : data?.forecast?.forecastday[1]?.day?.maxtemp_f}
                            °
                        </div>
                        <div className={cx('temp-min')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[1]?.day?.mintemp_c
                                : data?.forecast?.forecastday[1]?.day?.mintemp_f}
                            °
                        </div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data?.forecast?.forecastday[1]?.day?.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>0%</div>
                    </li>
                    <li>
                        <div className={cx('time')}>
                            {data?.forecast?.forecastday[2]?.date?.split('-')[2]}
                            {' Th'}
                            {data?.forecast?.forecastday[2]?.date?.split('-')[1]}
                        </div>
                        <div className={cx('temp')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[2]?.day?.maxtemp_c
                                : data?.forecast?.forecastday[2]?.day?.maxtemp_f}
                            °
                        </div>
                        <div className={cx('temp-min')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[2]?.day?.mintemp_c
                                : data?.forecast?.forecastday[2]?.day?.mintemp_f}
                            °
                        </div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data?.forecast?.forecastday[2]?.day?.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>0%</div>
                    </li>
                    <li>
                        <div className={cx('time')}>
                            {data?.forecast?.forecastday[3]?.date?.split('-')[2]}
                            {' Th'}
                            {data?.forecast?.forecastday[3]?.date?.split('-')[1]}
                        </div>
                        <div className={cx('temp')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[3]?.day?.maxtemp_c
                                : data?.forecast?.forecastday[3]?.day?.maxtemp_f}
                            °
                        </div>
                        <div className={cx('temp-min')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[3]?.day?.mintemp_c
                                : data?.forecast?.forecastday[3]?.day?.mintemp_f}
                            °
                        </div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data?.forecast?.forecastday[3]?.day?.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>0%</div>
                    </li>
                    <li>
                        <div className={cx('time')}>
                            {data?.forecast?.forecastday[4]?.date?.split('-')[2]}
                            {' Th'}
                            {data?.forecast?.forecastday[4]?.date?.split('-')[1]}
                        </div>
                        <div className={cx('temp')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[4]?.day?.maxtemp_c
                                : data?.forecast?.forecastday[4]?.day?.maxtemp_f}
                            °
                        </div>
                        <div className={cx('temp-min')}>
                            {temp === 'c'
                                ? data?.forecast?.forecastday[4]?.day?.mintemp_c
                                : data?.forecast?.forecastday[4]?.day?.mintemp_f}
                            °
                        </div>
                        <img
                            className={cx('icon')}
                            src={require(`../../../img/main_icon/weather/64x64/${data?.forecast?.forecastday[4]?.day?.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64/',
                                '',
                            )}`)}
                        />
                        <div className={cx('rain')}>0%</div>
                    </li>
                </ul>
                <button
                    className={cx('footer')}
                    onClick={() => {
                        setMainPage(3);
                        window.scrollTo(0, 0);
                    }}
                >
                    {language === 'VI' ? '10 ngày tới' : 'Next 10 days'}
                </button>
            </div>
        )
    );
}

export default DailyForecast;
