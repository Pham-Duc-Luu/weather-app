import { tempContext } from '~/data/temp';

import className from 'classnames/bind';
import { useContext, useState } from 'react';
import styles from './NavbarSetting.module.scss';

const cx = className.bind(styles);

function NavbarSetting() {
    const { setTemp } = useContext(tempContext);

    const [show, setShow] = useState(false);
    const [activeC, setActiveactiveC] = useState(true);
    const [activeF, setActiveactiveF] = useState(!activeC);

    document.querySelector('body').onclick = (e) => {
        if (!e.target.closest('div[name="NavbarSetting"]')) {
            setShow(false);
        }
    };

    return (
        <div className={cx('wrapper')} name="NavbarSetting">
            <h4>{activeC ? 'C' : 'F'}</h4>
            <i
                className="fa-solid fa-sliders"
                onClick={() => {
                    setShow(!show);
                }}
            ></i>
            {show && (
                <div className={cx('setting-box')}>
                    <div
                        className={cx('setting-f', activeF && 'active')}
                        onClick={() => {
                            setActiveactiveC(false);
                            setActiveactiveF(true);
                            setTemp('f');
                        }}
                    >
                        °F
                    </div>
                    <div
                        className={cx('setting-c', activeC && 'active')}
                        onClick={() => {
                            setActiveactiveC(true);
                            setActiveactiveF(false);
                            setTemp('c');
                        }}
                    >
                        °C
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavbarSetting;
