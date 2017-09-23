import events from "events";

export const EventEmitter = events.EventEmitter;
const Emitter = new EventEmitter();

export default Emitter;