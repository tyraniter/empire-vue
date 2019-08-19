import axios from 'axios'
import store from '../store/index'

export function getCurrentAgents() {
    const url = store.state.domain + '/api/agents?token=' + store.state.token
    return axios.get(url)
}

export function getStaleAgents() {
    const url = store.state.domain + '/api/agents/stale?token=' + store.state.token
    return axios.get(url)
}

export function getAgent(agentName) {
    const url = store.state.domain + '/api/agents/' + agentName + '?token=' + store.state.token
    return axios.get(url)
}

export function removeStaleAgents() {
    const url = store.state.domain + '/api/agents/stale?token=' + store.state.token
    return axios.delete(url)
}

export function removeAgent(agentName) {
    const url = store.state.domain + '/api/agents/' + agentName + '?token=' + store.state.token
    return axios.delete(url)
}

export function runShellCommand(agentName, command) {
    const url = store.state.domain + '/api/agents/' + agentName + '/shell?token=' + store.state.token
    return axios.post(url, { command: command })
}

export function getAgentResults(agentName) {
    const url = store.state.domain + '/api/agents/' + agentName + '/results?token=' + store.state.token
    return axios.get(url)
}

export function deleteAgentResults(agentName) {
    const url = store.state.domain + '/api/agents/' + agentName + '/results?token=' + store.state.token
    return axios.delete(url)
}

export function deleteAllAgentResults() {
    const url = store.state.domain + '/api/agents/all/results?token=' + store.state.token
    return axios.delete(url)
}

export function clearQueuedAgentTasking(agentName) {
    const url = store.state.domain + '/api/agents/' + agentName + '/clear?token=' + store.state.token
    return axios.get(url)
}

export function killAgent(agentName) {
    const url = store.state.domain + '/api/agents/' + agentName + '/kill?token=' + store.state.token
    return axios.get(url)
}

export function killAllAgents() {
    const url = store.state.domain + '/api/agents/all/kill?token=' + store.state.token
    return axios.get(url)
}
