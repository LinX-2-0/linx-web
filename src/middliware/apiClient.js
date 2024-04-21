
import superagent from 'superagent';
import apiConfig from './api'
import appConfig from '../config/appConfig';
const HOSTNAME = apiConfig.hostname;
const ENDPOINTS = apiConfig.endpoints;

const methods = ['get', 'post', 'put', 'del', 'patch']

function Intercept() {
    let callbacks = Array.prototype.slice.call(arguments);
    return function (req) {
      let callback = req.callback;
      req.callback = (err, res) => {
        callbacks.forEach(function (e) {
          e.call(req, err, res);
        });
        callback.call(req, err, res);
      };
    };
  }
  

let AuthIntercept = Intercept((err, res) => {
    if ((res && (res.status == 401 || res.status == 10006)) || (err && err.message.includes('terminated') && !(res || {}).status)) {
        // route to login
        if (window.location.pathname !== `${appConfig.BASE_URL}/login`) {
            const ssoAccessToken = window.localStorage.ssoAccessToken;
            window.localStorage.clear();
            window.localStorage.setItem('showLogoutNoty', true);
            if (typeof ssoAccessToken !== 'undefined') {
                // sso logout
                window.location.href = appConfig.SSO_LOGOUT;
            } else {
                window.location.href = `${appConfig.BASE_URL}/login`;
            }
        }
    }
});

function formatUrl(path) {
    console.log("format url path", path);
    let apiPath = path;
    let apiPathArray = [];

    if (apiPath.indexOf('?') != -1) {
        apiPathArray = apiPath.split('?');
        apiPath = apiPathArray[0];
        apiPathArray.shift();
    }

    let mappedEndpoint = ENDPOINTS[apiPath];

    if (apiPath.indexOf('/') !== -1) {
        mappedEndpoint = '';
        let splitPathArray = apiPath.split('/');
        mappedEndpoint += ENDPOINTS[splitPathArray[0]] + '/';
        splitPathArray.shift();
        mappedEndpoint += splitPathArray.join('/');
    }
    let adjustedPath =
        mappedEndpoint[0] !== '/'
            ? HOSTNAME + '/' + mappedEndpoint
            : HOSTNAME + mappedEndpoint + (apiPathArray.length != 0 ? `?${apiPathArray.join('')}` : '');

    return adjustedPath;

}

const IsJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (err) {
        return false;
    }
    return true;
}

export default class ApiClient {
    constructor(req) {
        methods.forEach(method => {
            this[method] = (path, data,  params, headers = {}, files, fields ) =>
                new Promise((resolve, reject) => {
                    headers['Accept'] = 'application/json;charset=utf-8';
                    let request = superagent[method](formatUrl(path))
                        // .withCredentials(true)
                        // .use(AuthIntercept)
                        .set(headers);
                    // .set('Cookie','cookie_info')
                    // DEFAULT_PARAMS.lang = window.localStorage.getItem('selectedLanguage') || 'EN';

                    console.log("Entering into the api client------------------", )
                    if (params) {
                        request.query(params);
                    }


                    // if (request.url && window.localStorage.getItem('access_token') && window.localStorage.getItem('access_token') !== null && (request.url.indexOf('/account') == -1 || request.url.indexOf('/contactus') == -1 || request.url.indexOf('/faq') == -1)) {
                    //     headers['Authorization'] = `Bearer ${window.localStorage.getItem('access_token')}`;
                    // }

                    //user login time for event
                    // const userLoginTime = (path === 'logout' && window.localStorage.getItem('userLoginTime')) ? { 'loginTime': window.localStorage.getItem('userLoginTime') } : '';

                    // userAdditionalInfo
                    // if (request.url && window.localStorage.getItem('userData') && window.localStorage.getItem('userData') !== null && JSON.parse(window.localStorage.getItem('userData')).endUserDetails && JSON.parse(window.localStorage.getItem('userData')).endUserDetails !== null) {
                    //     const endUserDetails = JSON.parse(window.localStorage.getItem('userData')).endUserDetails;
                    //     headers['userAdditionalInfo'] = JSON.stringify({ 'orgId': endUserDetails.orgId === null ? '' : JSON.stringify(endUserDetails.orgId), 'orgName': endUserDetails.orgName === null ? '' : endUserDetails.orgName, 'roleId': endUserDetails.roleId === null ? 0 : endUserDetails.roleId, 'siteId': endUserDetails.siteId === null ? 0 : endUserDetails.siteId, 'userName': endUserDetails.userName === null ? '' : endUserDetails.userName, 'surrogateOrgId': endUserDetails.surrogateOrgId === null ? '' : endUserDetails.surrogateOrgId, ...userLoginTime });
                    // }
                    if (headers) {
                        request.set(headers);
                    }

                    if (this.token) {
                        request.set('Authorization', `Bearer ${this.token}`);
                    }

                    if (files) {
                        request.send(files);
                        //files.forEach(file => request.attach(file.key, file.value));
                    }

                    if (fields) {
                        fields.forEach(item => request.field(item.key, item.value));
                        //  request.send(data);
                    }
                    // const requrl = request.url.split('?');
                    // if (requrl[0].indexOf('download') != -1) {
                    //     request.responseType('arraybuffer');
                    // }
                    if (data) {
                        // if (path.indexOf('loginAuth') !== -1) {
                        //     headers['Content-Type'] = 'application/x-www-form-urlencoded';
                        // } else {
                        //     headers['Content-Type'] = 'application/json';
                        // }
                        request.set(headers);
                        request.send(data);
                    }

                    request.end((err, response = {}) => {
                        if (err) {
                            reject(response.body || err);
                        } else {
                            const requrl = request.url.split('?');
                            if (requrl[0].indexOf('download') != -1) {
                                resolve(response);
                            } else if (response.text != '') {
                                // if (IsJsonString(decodeURIComponent(response.text.replace(/\+/g, '%20')))) {
                                //   resolve(JSON.parse(decodeURIComponent(response.text.replace(/\+/g, '%20'))));
                                // }
                                try {
                                    if (IsJsonString(decodeURIComponent(response.text.replace(/\+/g, '%20')))) {
                                        resolve(JSON.parse(decodeURIComponent(response.text.replace(/\+/g, '%20'))));
                                    }
                                    else {
                                        resolve(response.text);
                                    }
                                } catch (error) {
                                    console.error('Error parsing JSON or decoding URI component:', error);
                                    reject(error); // Reject the promise or handle the error appropriately
                                }
                            } else {
                                resolve();
                            }
                        }
                    });
                });
        });
    }

    empty() { }
}