import {FooStore} from "../foo";

export const FooMysqlStore: FooStore = {
    create: foo => {
        console.log("FooMysqlStore...", foo);
        return foo.id;
    },
    retrieve: id => {
        console.log("FooMysqlStore...", id);
        return null;
    },
    retrieveByNameLike: nameLike => {
        console.log("FooMysqlStore...", nameLike);
        return [];
    },
    update: foo => {
        console.log("FooMysqlStore...", foo);
        return null;
    },
    delete: id => {
        console.log("FooMysqlStore...", id);
        return null;
    }
}