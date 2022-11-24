import { languageContext } from '~/data/LanguageSetting';
import img from '~/img/react.png';
import LearnReactjs from '~/img/Learn-Reactjs.jpeg';

import className from 'classnames/bind';
import styles from './Footer.module.scss';
import { useContext } from 'react';

const cx = className.bind(styles);

function Footer() {
    const { language } = useContext(languageContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('link')}>
                    <span>{language === 'VI' ? 'Kết nối với chúng tôi' : 'Connect with us'}</span>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100054196254333" target="_blank">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100054196254333" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100054196254333" target="_blank">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100054196254333" target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('company')} style={{ backgroundImage: 'url(' + img + ')' }}></div>
            </div>
            <div className={cx('feedback')}>
                <a href="https://www.facebook.com/profile.php?id=100054196254333" target="_blank">
                    {language === 'VI' ? 'Phản hồi' : 'Feedback'}
                </a>
                <a href="https://www.weatherapi.com/" target="_blank">
                    {language === 'VI' ? 'Api thời tiết' : 'Weather API'}
                </a>
                <a href="https://reactjs.org/" target="_blank">
                    {language === 'VI' ? 'Công nghệ sự dụng' : 'Technology used'}
                </a>
            </div>

            <div className={cx('license')}>
                {language === 'VI' ? '© Bản quyền thuộc về Phạm Đức Lưu' : '© Copyright Pham Duc Luu'}
            </div>
            <div className={cx('povided')}>
                <div>{language === 'VI' ? 'Cung cấp bởi' : 'Provided by'}</div>
                <img src={LearnReactjs} />
            </div>
        </div>
    );
}

export default Footer;
