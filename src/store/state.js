const state = {
    domain: '',
    token: '',
    isAuthenticated: false,
    agents: [],
    listeners: [],
    tabs: [{ id: 'eventLog', title: 'EventLog', type: 'EventLogPane' }],
    activeTab: '',
    results: [],
    modules: [],
    stagers: [],
}

export default state