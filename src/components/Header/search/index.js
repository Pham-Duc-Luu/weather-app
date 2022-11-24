import className from 'classnames/bind';
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';

import { MainCity, CityContext } from '~/data/MainCity';
const cx = className.bind(styles);

function Search() {
    const { setCountryInput } = useContext(CityContext);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    // console.log(data);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append('X-Api-Key', 'MK3ApXUCLfOeReI8WRIpRw==1RPkYxHW2qJVHihJ');

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        fetch('https://api.api-ninjas.com/v1/city?name=' + name + '&limit=5', requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result);
                setCountry(result);
            })
            .catch((error) => console.log('error', error));
    }, [name]);

    // useEffect

    document.querySelector('body').onclick = (e) => {
        if (!e.target.closest('div[name="search"]')) {
            setShow(false);
        }
    };

    return (
        <div className={cx('search')} name="search">
            <div className={cx('wrapper', show && 'wrapper-outline')}>
                <input
                    ref={inputRef}
                    placeholder="Tìm thành phố hoặc mã zip"
                    onFocus={() => {
                        setShow(true);
                    }}
                    // onBlur={() => {
                    //     setShow(false);
                    // }}
                    onInput={(e) => {
                        setName(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            // setCountryInput(value.name);
                            // inputRef.current.value = '';
                            // setShow(false);
                        }
                    }}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {show && (
                <ul className={cx('list')} name="search">
                    {!country.error &&
                        (country.length === 0 ? (
                            <li>không có kết quả phù hợp</li>
                        ) : (
                            country.map((value, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setCountryInput(value.name);
                                            inputRef.current.value = '';
                                            setShow(false);
                                        }}
                                    >
                                        {value.name}{' '}
                                    </li>
                                );
                            })
                        ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
