# class ByteDatabase
- [new ByteDatabase](#new-byte-database)
- [ByteDatabase#insert()](#.insert())
- [ByteDatabase#find()](#.find())
- [ByteDatabase#all()](#.all())
- [ByteDatabase#wipe()](#.wipe())
- [ByteDatabase#delete()](#.delete())
- [ByteDatabase#createTable()](#.createTable())

### new ByteDatabase([*path*, *props*])
Creates a new Database connection, in case the file is not created; a file is created for you*.
You can create an in-memory database by passing `:memory:` as the first argument.

<b>Path</b>: The pathway for the database file, defaulting to the memory of the project <br>
<b>Props</b>: Properties of the extended Database. <br>
- `props.readonly`: open the database in readonly mode, defaulting to `false`.
- `props.fileMustExist`: ensure that the file should exist for the database to work, defaulting to `false`.
- `props.timeout`: the number of milliseconds to wait when executing queries on a locked database before throwing a SQLITE_BUSY error, defaulting to `5000`.
- `props.verbose`: a function that gets called with every SQL string executed by the database connection, defaulting to `null`.
```ts
const bytedb = new ByteDatabase("helloworld.db", { verbose: console.log, timeout: 10000 })
```
### .insert(*key*, *value*, [*table*])
Insert an item with the specified value to a table.<br>
The table is defaulted to `DEFAULT_BYTE_TABLE`.
```ts
bytedb.insert("helloworld", "byeworld")
```

### .find(*key*, [table])
Find an item in a specified table.<br>
The table is defaulted to `DEFAULT_BYTE_TABLE`.
```ts
bytedb.find("helloworld")
// byeworld
```

### .all([*table*])
Find every row in a specified table.<br>
The table is defaulted to `DEFAULT_BYTE_TABLE`.
```ts
bytedb.all() // [ { ID: "helloworld", JSON: '{"helloworld":"byeworld"}', TABLE: "DEFAULT_BYTE_TABLE" } ]
```
