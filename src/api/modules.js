import axios from 'axios'
import store from '../store/index'

export function getCurrentModules() {
    const url = store.state.domain + '/api/modules?token=' + store.state.token
    return axios.get(url)
}

export function getModule(moduleName) {
    const url = store.state.domain + '/api/modules/' + moduleName + '?token=' + store.state.token
    return axios.get(url)
}

export function searchForModule(term) {
    const url = store.state.domain + '/api/modules/search?token=' + store.state.token
    return axios.post(url, { term: term })
}

export function executeModule(moduleName,params) {
    const url = store.state.domain + '/api/modules/' + moduleName + '?token=' + store.state.token
    return axios.post(url,params)
}