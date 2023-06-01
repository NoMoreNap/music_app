/* eslint-disable @typescript-eslint/no-floating-promises */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
// import playlist from './static/tracks'

interface track { text: string, author: string, album: string, time: string, trackTitle: string }
function Nav (): JSX.Element {
  return (
        <nav className='main__nav nav'>
            <div className='nav__logo logo'>
                <img className="logo__image" src="img/logo.png" alt="logo"/>
            </div>
            <div className="nav__burger burger">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            <div className="nav__menu menu">
                <ul className="menu__list">
                    <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                    <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                    <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
                </ul>
            </div>
        </nav>
  )
}
function RenderTrack (props: track): JSX.Element {
  const { text, author, album, time, trackTitle } = props
  return (
            <div className="playlist__item">
                <div className="playlist__track track">
                    <div className="track__title">
                        <div className="track__title-image">
                            <svg className="track__title-svg" >
                                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                            </svg>
                        </div>
                        <div className="track__title-text">
                            <a className="track__title-link" href="http://">{text} <span className="track__title-span">{trackTitle}</span></a>
                        </div>
                    </div>
                    <div className="track__author">
                        <a className="track__author-link" href="http://">{author}</a>
                    </div>
                    <div className="track__album">
                        <a className="track__album-link" href="http://">{album}</a>
                    </div>
                    <div className="track__time">
                        <svg className="track__time-svg" >
                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </svg>
                    <span className="track__time-text">{time}</span>
                    </div>
                </div>
            </div>
  )
}
function CenterBlock (): JSX.Element {
  return (
        <div className='main__centerblock centerblock'>
            <div className="centerblock__search search">
                <svg className="search__svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </svg>
                <input className="search__text" type="search" placeholder="Поиск" name="search"/>
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
                <div className="filter__title">Искать по:</div>
                <div className="filter__button button-author _btn-text">исполнителю</div>
                <div className="filter__button button-year _btn-text">году выпуска</div>
                <div className="filter__button button-genre _btn-text">жанру</div>
            </div>
            <div className="centerblock__content">
                <div className="content__title playlist-title">
                    <div className="playlist-title__col col01">Трек</div>
                    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                    <div className="playlist-title__col col03">АЛЬБОМ</div>
                    <div className="playlist-title__col col04">
                        <svg className="playlist-title__svg">
                            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                        </svg>
                    </div>
                </div>
                <div className="content__playlist playlist">
                    {
                        window.res.map((item: track) => {
                          return (
                            RenderTrack(item)
                          )
                        })
                    }
                </div>
            </div>
        </div>
  )
}
function SlideBar (props: { name: string, avatar: string }): JSX.Element {
  const avatar = {
    backgroundImage: `url(${props.avatar})`
  }
  return (
        <div className='main__sidebar sidebar'>
            <div className="sidebar__personal">
                        <p className="sidebar__personal-name">{props.name}</p>
                        <div className="sidebar__avatar" style={avatar}>
                        </div>
                    </div>
                    <div className="sidebar__block">
                        <div className="sidebar__list">
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist01.png" alt="day's playlist"/>
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist02.png" alt="day's playlist"/>
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist03.png" alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                    </div>
        </div>
  )
}

function CompalationMain (): JSX.Element {
  return (
        <React.Fragment>
            <Nav />
            <CenterBlock />
            <SlideBar name='Tony Bayonetta' avatar={'https://sun9-13.userapi.com/impg/h217leEu2Df1jLI5L54SXZeTmwuN967bIoWomA/VqOlKH8uCwY.jpg?size=735x511&quality=95&sign=a806fb8e069ff2859474492fc3fc70a1&type=album'}/>
        </React.Fragment>
  )
}

export default CompalationMain
