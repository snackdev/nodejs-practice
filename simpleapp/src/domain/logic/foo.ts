import {Foo, newFoo} from "../model";
import {FooMysqlStore, FooStore} from "../../store";
import {DB} from "../../server/config";
import {FooMongoStore} from "../../store/mongo/foo";


const _DB = process.env.DB;
const store: FooStore = _DB === DB.MONGO ? FooMongoStore : FooMysqlStore;

const register = (spec: {name: string, age: number}): Foo => {
    const foo = newFoo(spec);
    console.log('register foo..', foo);

    store.create(foo);
    return foo;
}

const find = (id: string): Foo | null => {
    console.log('find foo..', id);
    return store.retrieve(id);
}

const findByNameLike = (nameLike: string): Foo[] => {
    return store.retrieveByNameLike(nameLike);
}

const modify = (foo: Foo): Foo => {
    if (find(foo.id)) {
        return store.update(foo) as Foo;
    } else {
        throw new Error(`Foo not exists with id : ${foo.id}`);
    }
}

const remove = (id: string): Foo => {
    return store.delete(id) as Foo;
}


export const fooLogic = {
    register,
    find
}

