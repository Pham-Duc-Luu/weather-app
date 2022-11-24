import className from 'classnames/bind';
import styles from './Mode.module.scss';

const cx = className.bind(styles);

function Mode({ name }) {
    return <div className={cx('wrapper')}>{name}</div>;
}

export default Mode;
