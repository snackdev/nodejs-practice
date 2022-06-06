import {Bar, newBar} from "../model";

const register = (spec: {position: string, pay: number}): Bar => {
    const bar = newBar(spec);
    console.log('register bar..', bar);
    return bar;
}

const find = (id: string): Bar => {
    console.log('find bar..', id);
    return register({position: 'bar', pay: 6000});
}

export const barLogic = {
    register,
    find
}