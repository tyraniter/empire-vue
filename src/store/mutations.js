import * as types from './mutations-types'

const mutations = {
    [types.SET_TOKEN](state, token) {
        state.token = token
    },

    [types.SET_DOMAIN](state, domain) {
        state.domain = domain
    },
    /*
    [types.SET_HOST](state, host) {
        state.host = host
    },
    [types.SET_PORT](state, port) {
        state.port = port
    },
    */
    [types.SET_AUTHENTICATED](state) {
        state.isAuthenticated = true
    },
    [types.SET_UNAUTHENTICATED](state) {
        state.isAuthenticated = false
    },
    [types.GET_AGENTS](state, agents) {
        state.agents = agents
    },
    [types.GET_LISTENERS](state, listeners) {
        state.listeners = listeners
    },
    [types.SET_TABS](state, tabs) {
        state.tabs = tabs
    },
    [types.SET_ACTIVE_TAB](state, tabId) {
        state.activeTab = tabId
    },
    [types.SET_RESULTS](state, results) {
        state.results = results
    },
    [types.SET_STAGERS](state, stagers) {
        state.stagers = stagers
    },
    [types.SET_MODULES](state, modules) {
        state.modules = modules
    },
}

export default mutations