export enum Screen {
  createRoom, //create or join room
  InRoomCall, // participate in room call
}

export type MediaControl = {
  mic: boolean
  camera: boolean
}