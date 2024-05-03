export class MensajeDTO<T> {
    constructor(
        public error: boolean,
        public respuesta: T
    ) { }
}
