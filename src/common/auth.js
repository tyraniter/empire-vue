/*import {doLogin} from '../api/admin'

export default {
    isAuthenticated: false,
    login(host, port, username, password, cb) {
        //do ajax login and get token
        doLogin(host, port, username, password).then(response => {
            //console.log(response)
        }).catch(function (error) {
            //console.log(error);
        });
        localStorage.token = 'XXX'
        this.isAuthenticated = true;
        setTimeout(cb, 100)
        return localStorage.token
    },
    getToken() {
        return localStorage.token
    },
    logout(cb) {
        delete localStorage.token
        this.isAuthenticated = false;
        setTimeout(cb, 100)
    }
}*/