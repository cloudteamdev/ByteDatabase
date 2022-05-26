import { ByteDatabase } from "../lib/index";

var a = new ByteDatabase("./test.db");
a.connect()

console.log(a.find("test"))
