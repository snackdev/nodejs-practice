import {Foo} from "../domain/model";

export interface FooStore {
    create: (foo: Foo) => string;
    retrieve: (id: string) => Foo | null;
    retrieveByNameLike: (nameLike: string) => Foo[];
    update: (foo: Foo) => Foo | null;
    delete: (id: string) => Foo | null;
}