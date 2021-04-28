import Vue from 'vue';
import getRandomInt from '../util/helpers'

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
    }, getRandomInt(500, 3000)))
}

const fetchUser2 = () => {
    return new Promise(    (resolve) => setTimeout(() => {
        resolve( {
            firstName: 'Phil'
        })
    }, getRandomInt(500, 3000)))
}

const fetchUser = () => {
    fetchUser1()
        .then(user => {
            store.user = user;
        });
    fetchUser2()
        .then(user => {
            store.user = user;
        });
}

export const actions = {
    fetchUser
}