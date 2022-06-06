import {AbstractModel, newAbstractModel} from "./abstract";

export type Bar = AbstractModel & {
    position: string;
    pay: number;
}

export const newBar = (spec: {position: string, pay: number}): Bar => {
    const model = newAbstractModel();
    return {...model, ...spec};
}

