import {FooStore} from "../foo";
import {MongoClient} from "mongodb";

const conn = new MongoClient()


export const FooMongoStore: FooStore = {
    create: foo => {
        console.log("FooMongoStore...", foo);
        return foo.id;
    },
    retrieve: id => {
        console.log("FooMongoStore...", id);
        return null;
    },
    retrieveByNameLike: nameLike => {
        console.log("FooMongoStore...", nameLike);
        return [];
    },
    update: foo => {
        console.log("FooMongoStore...", foo);
        return null;
    },
    delete: id => {
        console.log("FooMongoStore...", id);
        return null;
    }
}