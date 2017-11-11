import RequestUtil from '../utils/RequestUtil'
import HostUtil from '../utils/HostUtil'

function getVrGiftUrl(){
    return HostUtil.getVRApiAninomoto()+'vr-gift/';
}

export function getTotalCount(liveCode) {
    const url = getVrGiftUrl() + 'live/totalCount';
    const requestData = {
        params: {
            liveCode
        }
    }
    return RequestUtil.doGet(url, requestData);
}

export function getListCount(liveCode) {
    const url = getVrGiftUrl() + 'live/listCount';
    const requestData = {
        params: {
            liveCode
        }
    }
    return RequestUtil.doGet(url, requestData);
}

export function getMemberCount(liveCode) {
    const url = getVrGiftUrl() + 'live/memberCount';
    const requestData = {
        params: {
            liveCode
        }
    }
    return RequestUtil.doGet(url, requestData);
}

export function getMyGiftCount(uid) {
    const url = getVrGiftUrl() + 'user/myGiftCount';
    const requestData = {
        params: {
            uid
        }
    }
    return RequestUtil.doGet(url, requestData);
}