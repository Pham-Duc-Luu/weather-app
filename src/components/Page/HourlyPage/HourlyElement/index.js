import icon from '~/img/main_icon/weather/64x64/day/113.png';
import handleDate from '~/handleDate';
import { languageContext } from '~/data/LanguageSetting';
import { tempContext } from '~/data/temp';

import className from 'classnames/bind';
import styles from './HourlyElement.module.scss';
import { useContext, useRef, useState } from 'react';

const cx = className.bind(styles);
function HourlyElement({ input }) {
    const [show, setShow] = useState(false);
    const extraRef = useRef();
    const { language } = useContext(languageContext);
    const { temp } = useContext(tempContext);
    return temp === 'c' ? (
        language === 'VI' ? (
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('hour')}>{handleDate(input.time).hour}:00</div>
                    <div className={cx('temp')}>{input.temp_c}°</div>
                    <div className={cx('icon')}>
                        <img
                            src={require(`../../../../img/main_icon/weather/64x64${input.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64',
                                '',
                            )}`)}
                        />
                        <div className={cx('context')}>{input.condition.text}</div>
                    </div>
                    <div className={cx('humidity')}>
                        <i className="fa-solid fa-droplet"></i>
                        <div className={cx('humidity-parameter')}>{input.humidity}%</div>
                    </div>
                    <div className={cx('wind')}>
                        <i className="fa-solid fa-wind"></i>
                        <div className={cx('wind-parameter')}>{input.wind_kph} km/giờ</div>
                    </div>
                    {show ? (
                        <div
                            className={cx('up')}
                            onClick={() => {
                                setShow(!show);
                                extraRef.current.style.opacity = 0;
                                extraRef.current.style.marginBottom = 0 + 'px';

                                extraRef.current.style.height = 0 + 'px';
                            }}
                        >
                            <i className="fa-solid fa-chevron-up unable"></i>
                        </div>
                    ) : (
                        <div
                            className={cx('down')}
                            onClick={() => {
                                setShow(!show);

                                extraRef.current.style.height = 139 + 'px';
                                extraRef.current.style.opacity = 1;
                                extraRef.current.style.marginBottom = 20 + 'px';
                            }}
                        >
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    )}
                </div>
                <div className={cx('extra')} ref={extraRef}>
                    <div className={cx('top')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-temperature-low"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Cảm giác như</div>
                                <div className={cx('content-parameter')}>{input.feelslike_c}°</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-wind"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Gió</div>
                                <div className={cx('content-parameter')}>{input.wind_kph} km/giờ</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-eye"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>tầm nhìn</div>
                                <div className={cx('content-parameter')}>{input.vis_km} km</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-sun"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Chỉ số UV</div>
                                <div className={cx('content-parameter')}>{input.uv} / 10</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-cloud"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Mây che phủ</div>
                                <div className={cx('content-parameter')}>{input.cloud}%</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-cloud-showers-heavy"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Lượng mưa</div>
                                <div className={cx('content-parameter')}>{input.precip_mm} mm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('hour')}>{handleDate(input.time).hour}:00</div>
                    <div className={cx('temp')}>{input.temp_c}°</div>
                    <div className={cx('icon')}>
                        <img
                            src={require(`../../../../img/main_icon/weather/64x64${input.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64',
                                '',
                            )}`)}
                        />
                        <div className={cx('context')}>{input.condition.text}</div>
                    </div>
                    <div className={cx('humidity')}>
                        <i className="fa-solid fa-droplet"></i>
                        <div className={cx('humidity-parameter')}>{input.humidity}%</div>
                    </div>
                    <div className={cx('wind')}>
                        <i className="fa-solid fa-wind"></i>
                        <div className={cx('wind-parameter')}>{input.wind_kph} km/hour</div>
                    </div>
                    {show ? (
                        <div
                            className={cx('up')}
                            onClick={() => {
                                setShow(!show);
                                extraRef.current.style.opacity = 0;
                                extraRef.current.style.marginBottom = 0 + 'px';

                                extraRef.current.style.height = 0 + 'px';
                            }}
                        >
                            <i className="fa-solid fa-chevron-up unable"></i>
                        </div>
                    ) : (
                        <div
                            className={cx('down')}
                            onClick={() => {
                                setShow(!show);

                                extraRef.current.style.height = 139 + 'px';
                                extraRef.current.style.opacity = 1;
                                extraRef.current.style.marginBottom = 20 + 'px';
                            }}
                        >
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    )}
                </div>
                <div className={cx('extra')} ref={extraRef}>
                    <div className={cx('top')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-temperature-low"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Feel like</div>
                                <div className={cx('content-parameter')}>{input.feelslike_c}°</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-wind"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Wind</div>
                                <div className={cx('content-parameter')}>{input.wind_kph} km/giờ</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-eye"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Visibility</div>
                                <div className={cx('content-parameter')}>{input.vis_km} km</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-sun"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>UV index</div>
                                <div className={cx('content-parameter')}>{input.uv} / 10</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-cloud"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Cloud</div>
                                <div className={cx('content-parameter')}>{input.cloud}%</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-cloud-showers-heavy"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>rain amount</div>
                                <div className={cx('content-parameter')}>{input.precip_mm} mm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : language === 'VI' ? (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('hour')}>{handleDate(input.time).hour}:00</div>
                <div className={cx('temp')}>{input.temp_f}°</div>
                <div className={cx('icon')}>
                    <img
                        src={require(`../../../../img/main_icon/weather/64x64${input.condition.icon.replace(
                            '//cdn.weatherapi.com/weather/64x64',
                            '',
                        )}`)}
                    />
                    <div className={cx('context')}>{input.condition.text}</div>
                </div>
                <div className={cx('humidity')}>
                    <i className="fa-solid fa-droplet"></i>
                    <div className={cx('humidity-parameter')}>{input.humidity}%</div>
                </div>
                <div className={cx('wind')}>
                    <i className="fa-solid fa-wind"></i>
                    <div className={cx('wind-parameter')}>{input.wind_mph} miles/giờ</div>
                </div>
                {show ? (
                    <div
                        className={cx('up')}
                        onClick={() => {
                            setShow(!show);
                            extraRef.current.style.opacity = 0;
                            extraRef.current.style.marginBottom = 0 + 'px';

                            extraRef.current.style.height = 0 + 'px';
                        }}
                    >
                        <i className="fa-solid fa-chevron-up unable"></i>
                    </div>
                ) : (
                    <div
                        className={cx('down')}
                        onClick={() => {
                            setShow(!show);

                            extraRef.current.style.height = 139 + 'px';
                            extraRef.current.style.opacity = 1;
                            extraRef.current.style.marginBottom = 20 + 'px';
                        }}
                    >
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                )}
            </div>
            <div className={cx('extra')} ref={extraRef}>
                <div className={cx('top')}>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-temperature-low"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Cảm giác như</div>
                            <div className={cx('content-parameter')}>{input.feelslike_f}°</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-wind"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Gió</div>
                            <div className={cx('content-parameter')}>{input.wind_mph} km/giờ</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-eye"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>tầm nhìn</div>
                            <div className={cx('content-parameter')}>{input.vis_miles} miles</div>
                        </div>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-sun"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Chỉ số UV</div>
                            <div className={cx('content-parameter')}>{input.uv} / 10</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-cloud"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Mây che phủ</div>
                            <div className={cx('content-parameter')}>{input.cloud}%</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-cloud-showers-heavy"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Lượng mưa</div>
                            <div className={cx('content-parameter')}>{input.precip_in} in</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('hour')}>{handleDate(input.time).hour}:00</div>
                <div className={cx('temp')}>{input.temp_f}°</div>
                <div className={cx('icon')}>
                    <img
                        src={require(`../../../../img/main_icon/weather/64x64${input.condition.icon.replace(
                            '//cdn.weatherapi.com/weather/64x64',
                            '',
                        )}`)}
                    />
                    <div className={cx('context')}>{input.condition.text}</div>
                </div>
                <div className={cx('humidity')}>
                    <i className="fa-solid fa-droplet"></i>
                    <div className={cx('humidity-parameter')}>{input.humidity}%</div>
                </div>
                <div className={cx('wind')}>
                    <i className="fa-solid fa-wind"></i>
                    <div className={cx('wind-parameter')}>{input.wind_mph} miles/hour</div>
                </div>
                {show ? (
                    <div
                        className={cx('up')}
                        onClick={() => {
                            setShow(!show);
                            extraRef.current.style.opacity = 0;
                            extraRef.current.style.marginBottom = 0 + 'px';

                            extraRef.current.style.height = 0 + 'px';
                        }}
                    >
                        <i className="fa-solid fa-chevron-up unable"></i>
                    </div>
                ) : (
                    <div
                        className={cx('down')}
                        onClick={() => {
                            setShow(!show);

                            extraRef.current.style.height = 139 + 'px';
                            extraRef.current.style.opacity = 1;
                            extraRef.current.style.marginBottom = 20 + 'px';
                        }}
                    >
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                )}
            </div>
            <div className={cx('extra')} ref={extraRef}>
                <div className={cx('top')}>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-temperature-low"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Feel like</div>
                            <div className={cx('content-parameter')}>{input.feelslike_f}°</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-wind"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Wind</div>
                            <div className={cx('content-parameter')}>{input.wind_mph} km/giờ</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-eye"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Visibility</div>
                            <div className={cx('content-parameter')}>{input.vis_miles} miles</div>
                        </div>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-sun"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>UV index</div>
                            <div className={cx('content-parameter')}>{input.uv} / 10</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-cloud"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>Cloud</div>
                            <div className={cx('content-parameter')}>{input.cloud}%</div>
                        </div>
                    </div>
                    <div className={cx('feellike-temp')}>
                        <i className="fa-solid fa-cloud-showers-heavy"></i>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>rain amount</div>
                            <div className={cx('content-parameter')}>{input.precip_in} in</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HourlyElement;
