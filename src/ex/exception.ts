export default  class ValidationException extends Error {
  
    array ;
    constructor(msg) {
        super("ms");
        this.array = msg;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ValidationException.prototype);
    }

    sayHello() {
        return this.array;
    }
  }