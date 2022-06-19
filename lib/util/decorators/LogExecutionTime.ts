import { performance } from 'node:perf_hooks';
import { ByteDatabase } from '../../core';
import { UnknownMethod } from '../../typings';
import ansi_colors from 'ansi-colors';

export function LogExecutionTime() {
  return function (
    target: any,
    property: string,
    descriptor: PropertyDescriptor,
  ) {
    const fn = descriptor.value! as UnknownMethod;

    descriptor.value = function (this: ByteDatabase, ...args: unknown[]) {
      if (!this.options.colorizeLoggedMessages) return;
      if (!this.options.logExecutionTime) return;
      else {
        const constructor =
          this === null
            ? null
            : this?.constructor.name === 'Function'
            ? null
            : this?.constructor.name ?? null;

        const start = performance.now();
        const val = fn.call(this, ...args);
        const end = `${performance.now() - start}`;
        console.log(
          `${ansi_colors.bold.green('[ByteDatabase]')} => ${
            constructor ? ansi_colors.bold.blue(`${constructor}#`) : ''
          }${ansi_colors.bold.magenta(
            property,
          )} executed within ${ansi_colors.bold.red(end)}ms.`,
        );
        return val;
      }
    };
  };
}
