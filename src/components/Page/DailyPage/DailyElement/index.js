// import icon from '~/img/main_icon/weather/64x64/day/113.png';
import handleDate from '~/handleDate';
import { languageContext } from '~/data/LanguageSetting';
import { tempContext } from '~/data/temp';
import className from 'classnames/bind';
import styles from './DailyElement.module.scss';
import { useRef, useState, useContext } from 'react';

const cx = className.bind(styles);
function DailyElement({ input }) {
    const [show, setShow] = useState(false);

    const extraRef = useRef();

    const { language } = useContext(languageContext);
    const { temp } = useContext(tempContext);
    return temp === 'c' ? (
        language === 'VI' ? (
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('date')}>
                        {handleDate(input.date, language, false).day} {handleDate(input.date, language).date < 10 && 0}
                        {handleDate(input.date, language).date}
                    </div>
                    <div className={cx('temp')}>{input.day.avgtemp_c}°</div>
                    <div className={cx('icon')}>
                        <img
                            src={require(`../../../../img/main_icon/weather/64x64${input.day.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64',
                                '',
                            )}`)}
                        />
                        <div className={cx('context')}>{input.day.condition.text}</div>
                    </div>
                    <div className={cx('humidity')}>
                        <i className="fa-solid fa-droplet"></i>
                        <div className={cx('humidity-parameter')}>{input.day.avghumidity}%</div>
                    </div>
                    <div className={cx('wind')}>
                        <i className="fa-solid fa-wind"></i>
                        <div className={cx('wind-parameter')}>{input.day.maxwind_kph} km/giờ</div>
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
                    <div className={cx('left')}>
                        <div className={cx('top')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-wind"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Gió</div>
                                    <div className={cx('content-parameter')}>{input.day.maxwind_kph} km/giờ</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-eye"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>tầm nhìn</div>
                                    <div className={cx('content-parameter')}>{input.day.avgvis_km}</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-sun"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Chỉ số UV</div>
                                    <div className={cx('content-parameter')}>{input.day.uv} / 10</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-regular fa-moon"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Độ sáng mặt trăng</div>
                                    <div className={cx('content-parameter')}>{input.astro.moon_illumination}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('top')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-cloud-showers-heavy"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Lượng mưa</div>
                                    <div className={cx('content-parameter')}> {input.day.totalprecip_mm} mm</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-temperature-high"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Nhiệt độ cao nhất</div>
                                    <div className={cx('content-parameter')}>{input.day.maxtemp_c}°</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-regular fa-snowflake"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Khả năng có tuyết</div>
                                    <div className={cx('content-parameter')}>{input.day.daily_chance_of_snow} %</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-temperature-low"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Nhiệt độ thấp nhất</div>
                                    <div className={cx('content-parameter')}>{input.day.mintemp_c}°</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <div className={cx('date')}>
                        {handleDate(input.date, language, false).day} {handleDate(input.date, language).date < 10 && 0}
                        {handleDate(input.date, language).date}
                    </div>
                    <div className={cx('temp')}>{input.day.avgtemp_c}°</div>
                    <div className={cx('icon')}>
                        <img
                            src={require(`../../../../img/main_icon/weather/64x64${input.day.condition.icon.replace(
                                '//cdn.weatherapi.com/weather/64x64',
                                '',
                            )}`)}
                        />
                        <div className={cx('context')}>{input.day.condition.text}</div>
                    </div>
                    <div className={cx('humidity')}>
                        <i className="fa-solid fa-droplet"></i>
                        <div className={cx('humidity-parameter')}>{input.day.avghumidity}%</div>
                    </div>
                    <div className={cx('wind')}>
                        <i className="fa-solid fa-wind"></i>
                        <div className={cx('wind-parameter')}>{input.day.maxwind_kph} km/hour</div>
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
                    <div className={cx('left')}>
                        <div className={cx('top')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-wind"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Wind</div>
                                    <div className={cx('content-parameter')}>{input.day.maxwind_kph} km/hour</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-eye"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Visibility</div>
                                    <div className={cx('content-parameter')}>{input.day.avgvis_km} km</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-sun"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>UV index</div>
                                    <div className={cx('content-parameter')}>{input.day.uv} / 10</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-regular fa-moon"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>moon illumination</div>
                                    <div className={cx('content-parameter')}>{input.astro.moon_illumination}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('top')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-cloud-showers-heavy"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Rain amount</div>
                                    <div className={cx('content-parameter')}> {input.day.totalprecip_mm} mm</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-temperature-high"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Maximum temperature</div>
                                    <div className={cx('content-parameter')}>{input.day.maxtemp_c}°</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-regular fa-snowflake"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Chance of snow</div>
                                    <div className={cx('content-parameter')}>{input.day.daily_chance_of_snow} %</div>
                                </div>
                            </div>
                            <div className={cx('feellike-temp')}>
                                <i className="fa-solid fa-temperature-low"></i>
                                <div className={cx('content')}>
                                    <div className={cx('content-header')}>Lowest temperature</div>
                                    <div className={cx('content-parameter')}>{input.day.mintemp_c}°</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : language === 'VI' ? (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('date')}>
                    {handleDate(input.date, language, false).day} {handleDate(input.date, language).date < 10 && 0}
                    {handleDate(input.date, language).date}
                </div>
                <div className={cx('temp')}>{input.day.avgtemp_c}°</div>
                <div className={cx('icon')}>
                    <img
                        src={require(`../../../../img/main_icon/weather/64x64${input.day.condition.icon.replace(
                            '//cdn.weatherapi.com/weather/64x64',
                            '',
                        )}`)}
                    />
                    <div className={cx('context')}>{input.day.condition.text}</div>
                </div>
                <div className={cx('humidity')}>
                    <i className="fa-solid fa-droplet"></i>
                    <div className={cx('humidity-parameter')}>{input.day.avghumidity}%</div>
                </div>
                <div className={cx('wind')}>
                    <i className="fa-solid fa-wind"></i>
                    <div className={cx('wind-parameter')}>{input.day.maxwind_mph} miles/giờ</div>
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
                <div className={cx('left')}>
                    <div className={cx('top')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-wind"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Gió</div>
                                <div className={cx('content-parameter')}>{input.day.maxwind_mph} miles/giờ</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-eye"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>tầm nhìn</div>
                                <div className={cx('content-parameter')}>{input.day.avgvis_miles} miles</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-sun"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Chỉ số UV</div>
                                <div className={cx('content-parameter')}>{input.day.uv} / 10</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-regular fa-moon"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Độ sáng mặt trăng</div>
                                <div className={cx('content-parameter')}>{input.astro.moon_illumination}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('top')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-cloud-showers-heavy"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Lượng mưa</div>
                                <div className={cx('content-parameter')}> {input.day.totalprecip_in} in</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-temperature-high"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Nhiệt độ cao nhất</div>
                                <div className={cx('content-parameter')}>{input.day.maxtemp_f}°</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-regular fa-snowflake"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Khả năng có tuyết</div>
                                <div className={cx('content-parameter')}>{input.day.daily_chance_of_snow} %</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-temperature-low"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Nhiệt độ thấp nhất</div>
                                <div className={cx('content-parameter')}>{input.day.mintemp_f}°</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('date')}>
                    {handleDate(input.date, language, false).day} {handleDate(input.date, language).date < 10 && 0}
                    {handleDate(input.date, language).date}
                </div>
                <div className={cx('temp')}>{input.day.avgtemp_c}°</div>
                <div className={cx('icon')}>
                    <img
                        src={require(`../../../../img/main_icon/weather/64x64${input.day.condition.icon.replace(
                            '//cdn.weatherapi.com/weather/64x64',
                            '',
                        )}`)}
                    />
                    <div className={cx('context')}>{input.day.condition.text}</div>
                </div>
                <div className={cx('humidity')}>
                    <i className="fa-solid fa-droplet"></i>
                    <div className={cx('humidity-parameter')}>{input.day.avghumidity}%</div>
                </div>
                <div className={cx('wind')}>
                    <i className="fa-solid fa-wind"></i>
                    <div className={cx('wind-parameter')}>{input.day.maxwind_mph} miles/hour</div>
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
                <div className={cx('left')}>
                    <div className={cx('top')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-wind"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Wind</div>
                                <div className={cx('content-parameter')}>{input.day.maxwind_mph} miles/hour</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-eye"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Visibility</div>
                                <div className={cx('content-parameter')}>{input.day.avgvis_miles} miles</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-sun"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>UV index</div>
                                <div className={cx('content-parameter')}>{input.day.uv} / 10</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-regular fa-moon"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Moon illumination</div>
                                <div className={cx('content-parameter')}>{input.astro.moon_illumination}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('top')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-cloud-showers-heavy"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Rain amount</div>
                                <div className={cx('content-parameter')}> {input.day.totalprecip_in} in</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-temperature-high"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Maximum temperature</div>
                                <div className={cx('content-parameter')}>{input.day.maxtemp_f}°</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-regular fa-snowflake"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Chance of snow</div>
                                <div className={cx('content-parameter')}>{input.day.daily_chance_of_snow} %</div>
                            </div>
                        </div>
                        <div className={cx('feellike-temp')}>
                            <i className="fa-solid fa-temperature-low"></i>
                            <div className={cx('content')}>
                                <div className={cx('content-header')}>Lowest temperature</div>
                                <div className={cx('content-parameter')}>{input.day.mintemp_f}°</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyElement;
