
function doRequest(url, requestData) {
    return fetch(url, requestData)
        .then((response) => {
            console.log(requestData);
            console.log(response);
            if (requestData.checkStatus(response.status)) {
                console.log(response._bodyText);
                return JSON.parse(response._bodyText);
            }
            throw formatError(-1000, 'respose status error', response);
        })
        .catch((error) => {
            console.log(error);
            throw formatError(-2000, 'request error', error);
        });
}


function formatError(code, msg, data) {
    const errorMessage = JSON.stringify({ code, msg, data });
    console.log(errorMessage);
    return new Error(errorMessage);
}

export function getErrorObj(error) {
    const errorMessage = error.message;
    const errorObj = JSON.parse(errorMessage);
    if (errorObj.data instanceof Error) {
        return errorObj.data;
    }
    return errorObj;
}

export function doGet(url, requestData = { headers: {}, params: {} }) {
    const getRequestData = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        checkStatus: function (status) {
            return status === 200;
        }
    }
    requestData = Object.assign(getRequestData, requestData);
    const paramArray = [];
    Object.keys(requestData.params).forEach(key => paramArray.push(key + '=' + requestData.params[key]));
    if (url.search(/\?/) === -1) {
        url += '?' + paramArray.join('&');
    } else {
        url += '&' + paramArray.join('&');
    }
    return doRequest(url, requestData);
}

export default {
    doGet,
    getErrorObj
}

