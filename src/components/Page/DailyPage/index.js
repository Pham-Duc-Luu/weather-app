import DailyElement from './DailyElement';
import { CityContext } from '~/data/MainCity';

import className from 'classnames/bind';
import styles from './DailyPage.module.scss';
import { useContext } from 'react';

const cx = className.bind(styles);
function DailyPage() {
    const { data } = useContext(CityContext);

    return (
        data && (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('main')}> Thời tiết hàng giờ</div>
                    <div className={cx('place')}>Hà Nội</div>
                </div>
                <div className={cx('time')}>Kể từ 23:27</div>
                <div className={cx('Daily')}>
                    {data.forecast.forecastday.map((value, index) => {
                        return <DailyElement key={index} input={value} />;
                    })}
                </div>
            </div>
        )
    );
}

export default DailyPage;
