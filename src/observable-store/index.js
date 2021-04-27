import Vue from 'vue';

const defaultState = {
    user: {
        firstName: ''
    }
}

export const store = Vue.observable({ ...defaultState })

// GETTERS
const getUser = () => store.user;

export const getters = {
    getUser
}

// ACTIONS
const fetchUser1 = () => {
    return new Promise(    (resolve) => setTimeout(() => {
        resolve( {
            firstName: 'Bob'
        })
    }, 2000))
}

const fetchUser2 = () => {
    return new Promise(    (resolve) => setTimeout(() => {
        resolve( {
            firstName: 'Phil'
        })
    }, 2000))
}

const fetchUser = async () => {
    store.user = await fetchUser1();
    store.user = await fetchUser2();
}

export const actions = {
    fetchUser
}