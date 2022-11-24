import { languageContext } from '~/data/LanguageSetting';

import className from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import styles from './LanguageSetting.module.scss';

const cx = className.bind(styles);

function LanguageSetting() {
    const { language, setLanguage } = useContext(languageContext);

    const [show, setShow] = useState(false);
    const [activeEN, setActiveEN] = useState(false);
    const [activeVI, setActiveVI] = useState(true);

    document.querySelector('body').onclick = (e) => {
        // console.log(e.target.closest('div[name="language"]'));
        if (e.target !== document.querySelector('div[name="language"]')) {
            if (!e.target.closest('div[name="language"]')) {
                setShow(false);
            }
        }
    };

    // useEffect(() => {}, []);

    return (
        <div className={cx('wrapper')} name="language">
            <i
                onClick={() => {
                    setShow(!show);
                }}
                className="fa-solid fa-earth-asia"
                value="Show"
            ></i>
            <h4>{language}</h4>
            {show && (
                <div className={cx('language-box')} name="language-box">
                    <div
                        className={cx('language-eng', activeEN && 'active')}
                        name="language-eng"
                        onClick={() => {
                            setActiveEN(true);
                            setActiveVI(false);
                            setLanguage('EN');
                        }}
                    >
                        EN
                    </div>
                    <div
                        className={cx('language-vie', activeVI && 'active')}
                        name="language-vie"
                        onClick={() => {
                            setActiveEN(false);
                            setActiveVI(true);
                            setLanguage('VI');
                        }}
                    >
                        VI
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSetting;
