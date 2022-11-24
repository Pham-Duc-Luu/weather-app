import NavbarSetting from './NavbarSetting';
import LanguageSetting from './LanguageSetting';
import className from 'classnames/bind';
import styles from './Setting.module.scss';

const cx = className.bind(styles);

function Setting() {
    return (
        <div className={cx('wrapper')}>
            <LanguageSetting />
            <NavbarSetting />
        </div>
    );
}

export default Setting;
