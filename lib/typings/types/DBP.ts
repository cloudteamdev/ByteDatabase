// just fyi, this is not very useful, you can just call "Options" whenever you need them, unless you plan to add more stuff to this this is not needed

import { Options } from 'better-sqlite3';

export type DefaultByteProperties =  {
    readonly: Options['readonly'] 
    fileMustExist: Options['fileMustExist']
    timeout: Options['timeout']
    verbose: Options['verbose']
    nativeBinding: Options['nativeBinding']
}
