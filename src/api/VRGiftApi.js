import RequestUtil from '../utils/RequestUtil'
import HostUtil from '../utils/HostUtil'

function getVrGiftUrl(){
    return HostUtil.getVRApiAninomoto()+'vr-gift/';
}

/**
 * 获得该直播总送礼
 * @param {*} liveCode 
 */
export function getTotalCount(liveCode) {
    const url = getVrGiftUrl() + 'live/totalCount';
    const requestData = {
        params: {
            liveCode
        }
    }
    return RequestUtil.doGet(url, requestData);
}

/**
 * 获得贡献榜数据
 * @param {*} liveCode 
 */
export function getListCount(liveCode) {
    const url = getVrGiftUrl() + 'live/listCount';
    const requestData = {
        params: {
            liveCode
        }
    }
    return RequestUtil.doGet(url, requestData);
}

/**
 * 获得成员贡献榜数据
 * @param {*} liveCode 
 */
export function getMemberCount(liveCode) {
    const url = getVrGiftUrl() + 'live/memberCount';
    const requestData = {
        params: {
            liveCode
        }
    }
    return RequestUtil.doGet(url, requestData);
}

/**
 * 获得某 uid 用户的贡献数据
 * @param {*} uid 
 */
export function getMyGiftCount(uid) {
    const url = getVrGiftUrl() + 'user/myGiftCount';
    const requestData = {
        params: {
            uid
        }
    }
    return RequestUtil.doGet(url, requestData);
}