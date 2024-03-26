import { useState } from "react";
import { MediaStream, RTCPeerConnection } from "react-native-webrtc";

const [roomId, setRoomId] = useState('')
const [localStream, setLocalStream] = useState<MediaStream | undefined>()
const [userName, setUserName] = useState('')
const [screen, setScreen] = useState(Screen.CreateRoom)
const[remoteMedias, setRemoteMedias, remoteMediaRef] = useStateRef <{ [key: string] : MediaControl }>({})
const[remoteStreams, setRemoteStreams, remoteStreamsRef] = useStateRef <{ [key: string] : MediaStream }>({})
const[peerConnection, setPeerConnection] = useStateRef <{ [key: string] : RTCPeerConnection }>({})

const [totalParticipants, setTotalPartcipants] = useState(0)
const [localMediaControl, setLocalMediaControl] = useState<MediaControl>({
  mic:microphonePermsiionGranted,
  camera: cameraPermissionGranted,
})