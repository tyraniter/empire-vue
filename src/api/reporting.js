import axios from 'axios'
import store from '../store/index'

export function getAllLoggedEvents() {
    const url = store.state.domain + '/api/reporting?token=' + store.state.token
    return axios.get(url)
}

export function getAgentLoggedEvents(agentName) {
    const url = store.state.domain + '/api/reporting/agent/' + agentName + '?token=' + store.state.token
    return axios.get(url)
}

export function getLoggedEventsOfType(msgType) {
    const url = store.state.domain + '/api/reporting/type/' + msgType + '?token=' + store.state.token
    return axios.get(url)
}

export function getLoggedEventsOfMsg(msg) {
    const url = store.state.domain + '/api/reporting/msg/' + msg + '?token=' + store.state.token
    return axios.get(url)
}
