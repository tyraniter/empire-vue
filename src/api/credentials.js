import axios from 'axios'
import store from '../store/index'

export function getStoredCredentials() {
    const url = store.state.domain + '/api/creds?token=' + store.state.token
    return axios.get(url)
}