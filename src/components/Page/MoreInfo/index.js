import { CityContext } from '~/data/MainCity';
import { languageContext } from '~/data/LanguageSetting';
import { tempContext } from '~/data/temp';

import { useContext } from 'react';

import className from 'classnames/bind';
import styles from './MoreInfo.module.scss';

const cx = className.bind(styles);

function MoreInfo() {
    let { data } = useContext(CityContext);
    let { temp } = useContext(tempContext);
    let { language } = useContext(languageContext);

    return (
        data &&
        (temp === 'c' ? (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    {' '}
                    {language === 'VI' ? 'Thời tiết hôm may tại' : "Today's weather in"} {data?.location?.name}
                </div>

                <div className={cx('main-temp')}>{data?.current?.temp_c}°</div>
                <div className={cx('feel-like')}>
                    {language === 'VI' ? 'cảm giác như' : 'Feel like'} {data?.current?.feelslike_c}°
                </div>

                <div className={cx('more-info')}>
                    <ul className={cx('left')}>
                        <li>
                            <i className="fa-solid fa-temperature-three-quarters"></i>
                            <div className={cx('context')}>{language === 'VI' ? 'Cao/Thấp' : 'high/low'}</div>
                            <div>
                                {data?.forecast?.forecastday[0]?.day?.maxtemp_c}° /{' '}
                                {data?.forecast?.forecastday[0]?.day?.mintemp_c}°
                            </div>
                        </li>
                        <li>
                            <i className="fa-solid fa-droplet"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Độ ẩm' : 'Humidity'}</div>
                            <div>{data?.current?.humidity}%</div>
                        </li>
                        <li>
                            <i className="fa-solid fa-arrows-down-to-line"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Áp suất' : 'Pressure'}</div>
                            <div>{data?.current?.pressure_mb} mb</div>
                        </li>
                    </ul>

                    <ul className={cx('right')}>
                        <li>
                            <i className="fa-solid fa-wind"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Gió' : 'Wind'}</div>
                            <div>{data?.current?.wind_kph} km/giờ</div>
                        </li>

                        <li>
                            <i className="fa-solid fa-sun"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Chỉ số UV' : 'UV index'}</div>
                            <div>{data?.current?.uv} / 10</div>
                        </li>
                        <li>
                            <i className="fa-solid fa-eye"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Tầm nhìn' : 'Visibility '}</div>
                            <div>{data?.current?.vis_km} km</div>
                        </li>
                    </ul>
                </div>
            </div>
        ) : (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    {' '}
                    {language === 'VI' ? 'Thời tiết hôm may tại' : "Today's weather in"} {data?.location?.name}
                </div>

                <div className={cx('main-temp')}>{data?.current?.temp_f}°</div>
                <div className={cx('feel-like')}>
                    {language === 'VI' ? 'cảm giác như' : 'Feel like'} {data?.current?.feelslike_f}°
                </div>

                <div className={cx('more-info')}>
                    <ul className={cx('left')}>
                        <li>
                            <i className="fa-solid fa-temperature-three-quarters"></i>
                            <div className={cx('context')}>
                                {language === 'VI' ? 'cảm giác như' : 'Feel like'}Cao/Thấp
                            </div>
                            <div>
                                {data?.forecast?.forecastday[0]?.day?.maxtemp_f}° /{' '}
                                {data?.forecast?.forecastday[0]?.day?.mintemp_f}°
                            </div>
                        </li>
                        <li>
                            <i className="fa-solid fa-droplet"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Độ ẩm' : 'Humidity'}</div>
                            <div>{data?.current?.humidity}%</div>
                        </li>
                        <li>
                            <i className="fa-solid fa-arrows-down-to-line"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Áp suất' : 'Pressure'}</div>
                            <div>{data?.current?.pressure_in} in</div>
                        </li>
                    </ul>

                    <ul className={cx('right')}>
                        <li>
                            <i className="fa-solid fa-wind"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Gió' : 'Wind'}</div>
                            <div>{data?.current?.wind_mph} miles/giờ</div>
                        </li>

                        <li>
                            <i className="fa-solid fa-sun"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Chỉ số UV' : 'UV index'}</div>
                            <div>{data?.current?.uv} / 10</div>
                        </li>
                        <li>
                            <i className="fa-solid fa-eye"></i>

                            <div className={cx('context')}>{language === 'VI' ? 'Tầm nhìn' : 'Visibility '}</div>
                            <div>{data?.current?.vis_miles} miles</div>
                        </li>
                    </ul>
                </div>
            </div>
        ))
    );
}

export default MoreInfo;
