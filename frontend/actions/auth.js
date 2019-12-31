import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { API } from '../config';

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const signout = (next) => {
    removeCookie('token');
    removeLocalStorage('user');
    removeSessionStorage('user');
    next();

    return fetch(`${API}/signout`, {
        method: 'GET'
    }).then(response => {
        console.log('%c%s', 'color: #00a3cc', 'Signout Sucess');
    }).catch((err) => console.log('%c%s', 'color: #00e600', err));
}

// set cookie
// is more reliable to store sensitive data in a cookie.
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
}

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
}

// get cookie
export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }
}

// localstorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value)); // always stringify value when setting localstorage.
    }
}

export const removeLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
}

// sessionStorage
export const setSessionStorage = (key, value) => {
    if (process.browser) {
        sessionStorage.setItem(key, JSON.stringify(value)); // always stringify value when setting localstorage.
    }
}

export const removeSessionStorage = (key, value) => {
    if (process.browser) {
        sessionStorage.removeItem(key);
    }
}

// Authenticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    setSessionStorage('user', data.user);
    next();
}

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            const User = (localStorage.getItem('user') ? localStorage.getItem('user') : sessionStorage.getItem('user'));
            if (User) {
                return JSON.parse(User);
            } else {
                return false;
            }
        }
    }
}
