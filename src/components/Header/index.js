import Search from './search';
import Setting from './setting';
import weatherApp from '~/img/weather-app.png';
import ExtraCountry from './ExtraCountry';
import ExtraMode from './ExtraMode';

import className from 'classnames/bind';
import styles from './Header.module.scss';

const cx = className.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-brand')}>
                    <img src={weatherApp} />
                </div>

                <Search />
                <Setting />
            </div>
            <ExtraCountry />
            <ExtraMode />
        </div>
    );
}

export default Header;
