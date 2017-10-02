import {InjectionToken} from '@angular/core';

export const RAND_STR = new InjectionToken<string>('Random String');

export function randomStringFactory(len: number) {
    return (): string => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';
        for (let i = 0; i < len; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };


}
