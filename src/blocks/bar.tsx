
import * as React from 'react'
import { useThemeContext } from '../effects/theme'
import bar from './styles/bar.module.css'
import player from './styles/player.module.css'
const { useRef, useState, useEffect } = React

function BarContent (): React.ReactElement {
  const track = useRef<HTMLAudioElement>(null)
  const progressLine = useRef<HTMLLabelElement>(null)
  const inviseLine = useRef<HTMLInputElement>(null)
  const annotation = useRef<HTMLDivElement>(null)
  const [isPlay, setPlay] = useState(false)
  const [isHoverProgress, setHover] = useState('')
  const [left, setLeft] = useState(0)
  const { theme } = useThemeContext()

  function playClickHandler (): void {
    if (isPlay) {
      track.current?.pause()
      setPlay(false)
    } else {
      track.current?.play()
      setPlay(true)
    }
  }
  function PlayBtn (): React.ReactElement {
    return (
          <div onClick={playClickHandler} className={player.btnPlay}>
              <svg className={player.playSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
              </svg>
          </div>
    )
  }
  function StopBtn (): React.ReactElement {
    return (
              <div onClick={playClickHandler} className={player.btnPlay}>
                  <svg className={player.playSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-stop">
                      </use>
                  </svg>
              </div>
    )
  }
  function volumeChange (e: any): void {
    if (track.current) {
      const volume = Number(e.target.value) / 100
      track.current.volume = volume
    }
  }

  function progressBarClick (e: React.MouseEvent): void {
    if (progressLine.current && inviseLine.current && track.current) {
      const promptValue = Number(inviseLine.current.value)
      track.current.currentTime = Number(track.current.duration) * (promptValue / 100)
      progressLine.current.style.width = `${promptValue}%`
    }
  }
  function SvgUnion (prop: { text: string }): React.ReactElement {
    const { text } = prop
    useEffect(() => {
      if (annotation.current) {
        annotation.current.style.left = `${String(left - annotation.current.offsetWidth * 0.63)}px`
      }
    })
    return (
      <div ref={annotation} className={bar.annotation}>
        <h1 className={bar.annotationText}>{text}</h1>
        <svg className={bar.svg}>
            <use xlinkHref="img/icon/sprite.svg#icon-ann"></use>
        </svg>
  </div>
    )
  }
  useEffect(() => {
    const allTime = Number(track.current?.duration) * 1000
    if (isPlay) {
      window.play = setInterval(() => {
        const curTime = Number(track.current?.currentTime) * 1000
        if (curTime === allTime) {
          setPlay(false)
          clearInterval(window.play)
          return
        }
        const procent = (curTime / allTime) * 100
        if (progressLine.current) progressLine.current.style.width = `${procent}%`
      }, 10)
    } else {
      clearInterval(window.play)
    }
  })
  useEffect(() => {
    if (inviseLine.current) {
      inviseLine.current.addEventListener('mousemove', (e: any) => {
        const valueHover = (e.offsetX / e.target.clientWidth) * parseInt(e.target.getAttribute('max'), 10)
        const trackTime = track.current ? Math.floor(track.current.duration * (valueHover / 100)) : NaN
        const str = `${(trackTime / 60) >> 0}:${trackTime % 60 >= 10 ? trackTime % 60 : `0${trackTime % 60}`}`
        setHover(str)
        setLeft(e.offsetX)
      })
      inviseLine.current.addEventListener('mouseout', (e: any) => {
        setHover('')
      })
    }
  })
  return (
    <div className={`${bar.content}  ${theme === 'light' ? bar.blockLight : ''}`}>
            {isHoverProgress ? <SvgUnion text={isHoverProgress}/> : ''}
            <div className={bar.wrapper}>
                <input id='progress' type='range' min='0' max='100' ref={inviseLine} onClick={progressBarClick} className={`${bar.progress} ${theme === 'light' ? bar.progressLight : ''}`}/>
                <label htmlFor='progress' ref={progressLine} className={bar.active}></label>
            </div>
            <div className={bar.block}>
                        <div className={bar.player}>
                            <div className={player.controls}>
                                <div className={player.btnPrev}>
                                    <svg className={player.prevSvg}>
                                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                    </svg>
                                </div>
                                {isPlay ? <StopBtn /> : <PlayBtn />}
                                <div className={player.btnNext}>
                                    <svg className={player.nextSvg}>
                                        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                    </svg>
                                </div>
                                <div className={`${player.btnRepeat} _btn-icon`}>
                                    <svg className={player.repeatSvg}>
                                        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                                    </svg>
                                </div>
                                <div className={`${player.btnShuffle} _btn-icon`}>
                                    <svg className={player.shuffleSvg}>
                                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                                    </svg>
                                </div>
                            </div>
                            <div className={`${player.trackPlay} track-play`}>
                                <div className="track-play__contain">
                                    <div className={`track-play__image ${theme === 'light' ? 'light_note' : ''}`}>
                                        <svg className="track-play__svg">
                                            <use xlinkHref={`img/icon/sprite.svg#icon-note${theme === 'light' ? '_light' : ''}`}></use>
                                        </svg>
                                    </div>

                                    <div className="track-play__author loading">
                                        <a className={`track-play__author-link ${theme === 'light' ? 'light_text' : ''}`} href="http://">Ты та</a>
                                    </div>
                                    <div className="track-play__album loading">
                                        <a className={`track-play__album-link ${theme === 'light' ? 'light_text' : ''}`} href="http://">Баста</a>
                                    </div>
                                </div>

                                <div className="track-play__like-dis">
                                    <div className="track-play__like _btn-icon">
                                        <svg className="track-play__like-svg">
                                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                        </svg>
                                    </div>
                                    <div className="track-play__dislike _btn-icon">
                                        <svg className="track-play__dislike-svg">
                                            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${bar.volume} volume`}>
                           <div className="volume__content">
                                <div className="volume__image">
                                    <svg className="volume__svg">
                                        <use xlinkHref={`img/icon/sprite.svg#icon-volume${theme === 'light' ? '_light' : ''}`}></use>
                                    </svg>
                                </div>
                                <div className="volume__progress _btn">
                                    <input onInput={volumeChange} className="volume__progress-line _btn" type="range" name="range"/>
                                </div>
                           </div>
                        </div>
            </div>
            <figure>
                <audio ref={track} src="music/basta.mp3"></audio>
            </figure>
    </div>
  )
}

export default BarContent
