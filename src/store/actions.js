import * as types from './mutations-types'
import * as adminApi from '../api/admin'
import * as agentsApi from "../api/agents";
import * as stagersApi from '../api/stagers'
import * as modulesApi from "../api/modules";

const actions = {
    login({ commit }, { host, port, username, password }) {
        commit(types.SET_DOMAIN, 'https://' + host + ':' + port)
        //commit(types.SET_PORT, port)
        return new Promise((resolve, reject) => {
            adminApi.getSessionToken(username, password).then(response => {
                commit(types.SET_TOKEN, response.data.token)
                commit(types.SET_AUTHENTICATED)
            }).catch((error) => {
                reject(error);
            }).finally(() => { resolve() })
        })
    },
    logout({ commit }) {
        commit(types.SET_UNAUTHENTICATED)
    },
    getAgents({ commit, state }) {
        return new Promise((resolve, reject) => {
            agentsApi.getCurrentAgents().then(response => {
                //console.log(response.data.agents)
                commit(types.GET_AGENTS, response.data.agents);
            }).catch((error) => {
                reject(error);
            }).finally(() => { resolve() });
        })
    },
    addTab({ commit, state }, { id, title, type, props }) {
        var count = 0;
        state.tabs.filter(t => {
            if (t.title !== title) {
                return true;
            }
            count += 1;
            return false;
        });
        if (count === 0) {
            commit(types.SET_TABS, state.tabs.concat([{ id: id, title: title, type: type, props: props }]));
        }
    },
    removeTab({ commit, state }, { id }) {
        //var index = 0;
        //console.log(id)
        var afterTab = state.tabs.filter((t) => {
            if (t.id !== id) {
                return true;
            }
            //index = i;
            return false;
        });
        //console.log(afterTab)
        //var activeKey = this.state.activeKey;
        //if (activeKey === title) {
        //if (index) {
        //index--;
        //}
        //activeKey = afterTab[index].title;
        //}
        commit(types.SET_TABS, afterTab);
    },
    insertResult({ commit, state }, { id }) {
        //var index = 0;
        //console.log(id)
        var afterTab = state.tabs.filter((t) => {
            if (t.id !== id) {
                return true;
            }
            //index = i;
            return false;
        });
        //console.log(afterTab)
        //var activeKey = this.state.activeKey;
        //if (activeKey === title) {
        //if (index) {
        //index--;
        //}
        //activeKey = afterTab[index].title;
        //}
        commit(types.SET_TABS, afterTab);
    },
    getStagers({ commit, state }) {
        return new Promise((resolve, reject) => {
            stagersApi.getCurrentStagers(
                state.token
            ).then(response => {
                //console.log(response.data.agents)
                commit(types.SET_STAGERS, response.data.stagers);
            }).catch((error) => {
                reject(error);
            }).finally(() => { resolve() });
        })
    },
    getModules({ commit, state }) {
        return new Promise((resolve, reject) => {
            modulesApi.getCurrentModules(
                state.token
            ).then(response => {
                //console.log(response.data.agents)
                commit(types.SET_MODULES, response.data.modules);
            }).catch((error) => {
                reject(error);
            }).finally(() => { resolve() });
        })
    },
}

export default actions