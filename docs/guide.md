# class ByteDatabase
- [new ByteDatabase](#new-bytedatabasepath-props)
- [ByteDatabase#insert()](#insertkey-value-table)
- [ByteDatabase#find()](#findkey-table)
- [ByteDatabase#all()](#alltable)
- [ByteDatabase#wipe()](#wipetable)
- [ByteDatabase#delete()](#deletekey-table)
- [ByteDatabase#createTable()](#.createTable())

### new ByteDatabase([*path*, *props*])
Creates a new Database connection, in case the file is not created; a file is created for you*.
You can create an in-memory database by passing `:memory:` as the first argument.
The default for the database is named `DEFAULT_BYTE_TABLE`.

<b>Path</b>: The pathway for the database file, defaulting to the memory of the project. \*If the file provided in the parameter, a new file under the name will be created/<br>
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
```ts
bytedb.insert("helloworld", "byeworld")
```

### .find(*key*, [*table*]) or .get(*key*, [*table*])
Finds an item in a specified table.<br>
```ts
bytedb.find("helloworld")
// byeworld
```

### .all([*table*])
Finds every row in a specified table.<br>
```ts
bytedb.all() 
// [ { ID: "helloworld", JSON: '{"helloworld":"byeworld"}', TABLE: "DEFAULT_BYTE_TABLE" } ]
```

### .wipe([*table*])
Wipes/deletes every row in a specified table.<br>
```ts
bytedb.wipe() 
// { changes: 0, lastInsertRowid: 0 }
```

### .delete(*key*, [*table*])
Deletes an item from a specified table
```ts
bytedb.delete("helloworld")
// { changes: 0, lastInsertRowid: 0 }
```

## .createTable(*table*)
Creates a new table under the given table name.
```ts
bytedb.createTable("worlds")
// { changes: 0, lastInsertRowid: 0 }
```
```

