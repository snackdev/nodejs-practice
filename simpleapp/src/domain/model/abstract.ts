import { v4 as uuidv4 } from 'uuid';

export type AbstractModel = {
    id: string;
}

export const newAbstractModel = (): AbstractModel => {
    const id = uuidv4();
    return {id};
}



