import axios from 'axios'
import store from '../store/index'

export function getVersion() {
    const url = store.state.domain + '/api/version?token=' + store.state.token
    return axios.get(url)
}

export function getConfig() {
    const url = store.state.domain + '/api/config?token=' + store.state.token
    return axios.get(url)
}

export function getSessionToken(username, password) {
    const url = store.state.domain + '/api/admin/login'
    return axios.post(url, { username: username, password: password })
}

export function getPermanentSessionToken(username, password) {
    const url = store.state.domain + '/api/admin/permanenttoken?token' + store.state.token
    return axios.get(url)
}

export function restartApiServer() {
    const url = store.state.domain + '/api/admin/restart?token=' + store.state.token
    return axios.get(url)
}

export function shutdownApiServer() {
    const url = store.state.domain + '/api/admin/shutdown?token=' + store.state.token
    return axios.get(url)
}
