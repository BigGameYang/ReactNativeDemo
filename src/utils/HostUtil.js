const build = require('../../res/values/build.json');
const hosts = require('../../res/values/Hosts.json');

function checkTest() {
    return build.isTest === 1;
}

function getVRApiAninomoto() {
    return checkTest() ? hosts.vr_api_aginomoto_test : hosts.vr_api_aginomoto;
}

export default {
    getVRApiAninomoto
}

