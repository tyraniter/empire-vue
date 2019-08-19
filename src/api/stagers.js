import axios from 'axios'
import store from '../store/index'

export function getCurrentStagers() {
    const url = store.state.domain + '/api/stagers?token=' + store.state.token
    return axios.get(url)
}

export function getStager(stagerName) {
    const url = store.state.domain + '/api/stagers/'+stagerName+'?token=' + store.state.token
    return axios.get(url)
}

export function generateStager(params) {
    const url = store.state.domain + '/api/stagers?token=' + store.state.token
    return axios.post(url,params)
}