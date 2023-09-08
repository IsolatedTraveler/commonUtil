import { appId, client } from "./init";
import { getToken, token } from "./token";
import AgoraRTC from 'agora-rtc-sdk-ng'
let localAudioTrack, localVideoTrack
export function join({ channel, uid }) {
  getToken(channel)
  getVideo()
  getMicrophone()
  return Promise.all([
    getVideo(),
    getMicrophone(),
    client.join(appId, channel, token, uid)
  ]).then(() => {
    return client.publish([localAudioTrack, localVideoTrack])
  })
}
function getVideo() {
  return AgoraRTC.createCameraVideoTrack().then(() => {
    // 本地展示
  })
}
function getMicrophone() {
  return AgoraRTC.createMicrophoneAudioTrack().then(() => {
    // 本地展示
  })
}