export class ByteError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = `[ByteError: ${name}]`;
  }
}
