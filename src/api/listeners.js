import axios from 'axios'
import store from '../store/index'

export function getCurrentListeners() {
    const url = store.state.domain + '/api/listeners?token=' + store.state.token
    return axios.get(url)
}

export function getListener(listenerName) {
    const url = store.state.domain + '/api/listeners/' + listenerName + '?token=' + store.state.token
    return axios.get(url)
}

export function getCurrentListenerOptions(listenerType) {
    const url = store.state.domain + '/api/listeners/options/'+listenerType+'?token=' + store.state.token
    return axios.get(url)
}

export function createListener(listenerType,params) {
    const url = store.state.domain + '/api/listeners/'+listenerType+'?token=' + store.state.token
    return axios.post(url,params)
}

export function killListener(listenerName) {
    const url = store.state.domain + '/api/listeners/'+listenerName+'?token=' + store.state.token
    return axios.delete(url)
}

export function killListeners() {
    const url = store.state.domain + '/api/listeners/all?token=' + store.state.token
    return axios.delete(url)
}