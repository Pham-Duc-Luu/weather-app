import storm from '~/img/backgroud/storm.jpg';
import { tempContext } from '~/data/temp';
import handleDate from '~/handleDate';
import { languageContext } from '~/data/LanguageSetting';

import className from 'classnames/bind';
import styles from './HeaderPage.module.scss';

import { MainCity, CityContext } from '~/data/MainCity';
import { useContext, useEffect } from 'react';

const cx = className.bind(styles);

function HeaderPage() {
    const { data } = useContext(CityContext);
    const { temp } = useContext(tempContext);
    const { language } = useContext(languageContext);
    let dateTime;

    if (data) {
        var myIcon = data?.current?.condition?.icon?.replace('//cdn.weatherapi.com/weather/64x64', '');
        dateTime = handleDate(data?.current?.last_updated, language, true);
    }

    return (
        data && (
            <div
                className={cx('wrapper')}
                style={{
                    backgroundImage: 'url(' + storm + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className={cx('name')}>{data?.location?.name + ', ' + data?.location?.country}</div>

                <div className={cx('main')}>
                    <div>
                        <div className={cx('content')}>
                            {temp === 'c' ? data?.current?.temp_c : data?.current?.temp_f}{' '}
                            <div className={cx('temp')}>°C</div>
                        </div>
                        <div className={cx('describe')}>{data?.current?.condition.text}</div>
                        <div className={cx('date')}>
                            {language === 'VI'
                                ? `${dateTime.day} ,ngày ${dateTime.date}, ${dateTime.month}`
                                : `${dateTime.day},  ${dateTime.month} ${dateTime.date}th`}
                        </div>
                    </div>
                    <img className={cx('icon')} src={require(`../../../img/main_icon/weather/64x64${myIcon}`)}></img>
                </div>
            </div>
        )
    );
}

export default HeaderPage;
