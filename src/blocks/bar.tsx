
import * as React from 'react'
import bar from './styles/bar.module.css'
import player from './styles/player.module.css'

function BarContent (): JSX.Element {
  return (
    <div className={bar.content}>
        <div className={bar.progress}>
        </div>
            <div className={bar.block}>
                        <div className={bar.player}>
                            <div className={player.controls}>
                                <div className={player.btnPrev}>
                                    <svg className={player.prevSvg}>
                                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                    </svg>
                                </div>
                                <div className={player.btnPlay}>
                                    <svg className={player.playSvg}>
                                        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                                    </svg>
                                </div>
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
                                    <div className="track-play__image loading">
                                        <svg className="track-play__svg">
                                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                        </svg>
                                    </div>
                                    <div className="track-play__author loading">
                                        <a className="track-play__author-link" href="http://">Ты та..</a>
                                    </div>
                                    <div className="track-play__album loading">
                                        <a className="track-play__album-link" href="http://">Баста</a>
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
                                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                                    </svg>
                                </div>
                                <div className="volume__progress _btn">
                                    <input className="volume__progress-line _btn" type="range" name="range"/>
                                </div>
                           </div>
                        </div>
            </div>
    </div>
  )
}

export default BarContent
