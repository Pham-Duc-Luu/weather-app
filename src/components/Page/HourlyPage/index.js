import { CityContext } from '~/data/MainCity';
import { useContext } from 'react';
import { languageContext } from '~/data/LanguageSetting';

import handleDate from '~/handleDate';

import HourlyElement from './HourlyElement';

import className from 'classnames/bind';
import styles from './HourlyPage.module.scss';

const cx = className.bind(styles);
function HourlyPage() {
    const { data } = useContext(CityContext);
    const { language } = useContext(languageContext);
    const dateTime = handleDate(data && data.location.localtime, language, true);
    const tomorrow = handleDate(data && data.forecast.forecastday[1].date, language, true);

    return (
        data &&
        (language === 'VI' ? (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('main')}> Thời tiết hàng giờ</div>
                    <div className={cx('place')}>{data.location.name}</div>
                </div>
                <div className={cx('time')}>
                    Kể từ {`${dateTime.hour}:${dateTime.minute <= 10 ? '0' : ''}${dateTime.minute}`}
                </div>
                <div className={cx('date-today')}>{`${dateTime.day},  ${dateTime.date} ${dateTime.month} `}</div>
                <div className={cx('hourly')}>
                    {data.forecast.forecastday[0].hour.map((value, index) => {
                        return index >= dateTime.hour && <HourlyElement key={index} input={value} />;
                    })}
                </div>
                <div className={cx('date-today')}>{`${tomorrow.day},  ${tomorrow.date} ${tomorrow.month} `}</div>
                <div className={cx('hourly')}>
                    {data.forecast.forecastday[1].hour.map((value, index) => {
                        return <HourlyElement key={index} input={value} />;
                    })}
                </div>
            </div>
        ) : (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('main')}> Hourly forecast</div>
                    <div className={cx('place')}>{data.location.name}</div>
                </div>
                <div className={cx('time')}>
                    As of {`${dateTime.hour}:${dateTime.minute <= 10 ? '0' : ''}${dateTime.minute}`}
                </div>
                <div className={cx('date-today')}>{`${dateTime.day},  ${dateTime.date} ${dateTime.month} `}</div>
                <div className={cx('hourly')}>
                    {data.forecast.forecastday[0].hour.map((value, index) => {
                        return index >= dateTime.hour && <HourlyElement key={index} input={value} />;
                    })}
                </div>
                <div className={cx('date-today')}>{`${tomorrow.day},  ${tomorrow.date} ${tomorrow.month} `}</div>
                <div className={cx('hourly')}>
                    {data.forecast.forecastday[1].hour.map((value, index) => {
                        return <HourlyElement key={index} input={value} />;
                    })}
                </div>
            </div>
        ))
    );
}

export default HourlyPage;
