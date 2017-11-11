import {
    findNodeHandle,
    UIManager
} from 'react-native';

export function checkComponentLayout(component) {
    const handle = findNodeHandle(component);

    return new Promise((resolve) => {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
            resolve({
                x,
                y,
                width,
                height,
                pageX,
                pageY
            });
        });
    });
}