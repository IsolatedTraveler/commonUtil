import AgoraRTC from 'agora-rtc-sdk-ng'
export let client,
  appId = 'a377b1eed7c24cd69a907cfb46a5d81e',
  // 证书
  appCertificate = '96883e5a99474ede89f4d0d970b5364d'
export function init() {
  client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
  client.on('user-published', getMidia)
  return client
}
function getMidia(user, mediaType) {
  return client.subscribe(user, mediaType).then(() => {
    if (mediaType === 'audio') {
      user.audioTrack.play()
    } else {

    }
  })
}