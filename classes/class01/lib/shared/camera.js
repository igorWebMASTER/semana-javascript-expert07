export default class Camera{
  constructor(){
    this.video = document.createElement('video');
  }

  static async init() {
    if(!navigator?.mediaDevices || !navigator?.mediaDevices.getUserMedia){
        throw new Error(
          'Browser not supported: navigator.mediaDevices.getUserMedia'
        )
    }

    const videoConfig = {
      audio: false,
      video: {
        width: self.screen.availWidth,
        height: self.screen.availHeight,
        frameRate: {
          ideal: 60
        }
      }
    }

    const stream = await navigator.mediaDevices.getUserMedia(videoConfig)
    const camera  = new Camera()

    camera.video.srcObject = stream

    camera.video.height = 640
    camera.video.width = 620

    document.body.append(camera.video)


    await new Promise(resolve => {
      camera.video.onloadedmetadata = () => {
        resolve(camera.video)
      }
    })

    camera.video.play()


    return camera
 }
} 