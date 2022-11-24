import Mode from './Mode';
import { pageContext } from '~/data/pageShow';
import { languageContext } from '~/data/LanguageSetting';

import className from 'classnames/bind';
import styles from './ExtraMode.module.scss';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';

const cx = className.bind(styles);

const modes = [
    {
        id: 1,
        name_vi: 'Hôm nay',
        name_en: 'Today',
    },
    {
        id: 2,
        name_vi: '48 giờ tới',
        name_en: 'Next 48 hours',
    },
    {
        id: 3,
        name_vi: '10 ngày tới',
        name_en: 'Next 10 days',
    },
];

function ExtraMode() {
    const { setMainPage, mainPage } = useContext(pageContext);
    const { language } = useContext(languageContext);

    return (
        <div className={cx('wrapper')}>
            {modes.map((mode) => {
                return (
                    <div
                        key={mode.id}
                        className={cx('wrapper-mode', mainPage === mode.id && 'active')}
                        onClick={() => {
                            setMainPage(mode.id);
                        }}
                    >
                        <Mode name={language === 'VI' ? mode.name_vi : mode.name_en} />
                    </div>
                );
            })}
        </div>
    );
}

export default ExtraMode;
