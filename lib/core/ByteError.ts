export class ByteError extends Error {
  static create(name: string, message: string): ByteError {
    return new ByteError(name, message);
  }
  constructor(name: string, message: string) {
    super(message);
    this.name = `[ByteError: ${name}]`;
  }
  print() {
    console.log(this);
  }
  getMessage() {
    return this.message;
  }
}
