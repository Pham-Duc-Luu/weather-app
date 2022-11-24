import HeaderPage from './HeaderPage';
import MoreInfo from './MoreInfo';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import DailyPage from './DailyPage';
import HourlyPage from './HourlyPage';
import { pageContext } from '~/data/pageShow';

import className from 'classnames/bind';
import styles from './Page.module.scss';
import { useContext } from 'react';

const cx = className.bind(styles);
function Page() {
    const { mainPage } = useContext(pageContext);

    const render = () => {
        switch (mainPage) {
            case 1:
                return (
                    <>
                        {' '}
                        <HeaderPage />
                        <MoreInfo />
                        <HourlyForecast />
                        <DailyForecast />
                    </>
                );
                break;
            case 2:
                return <HourlyPage />;
                break;

            case 3:
                return <DailyPage />;
                break;
            default:
                break;
        }
    };

    return <div className={cx('wrapper')}>{render()}</div>;
}

export default Page;
