import {AbstractModel, newAbstractModel} from "./abstract";

export type Foo = AbstractModel & {
    name: string;
    age: number;
}

export const newFoo = (spec: {name: string, age: number}): Foo => {
    const model = newAbstractModel();
    return {...model, ...spec};
}

