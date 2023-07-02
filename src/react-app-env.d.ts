// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react-scripts" />

declare module '*.svg' {
  const content: any
  export default content
}

interface responceTrack { text: string, author: string, album: string, time: string, trackTitle: string }

type track = responceTrack[]

declare interface Window {
  res: track
  loading: boolean
  play: any
}
