import * as React from 'react'
import playlist from '../static/tracks'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { AuthorList, GenreList, YearList } from './suggests'
import { useThemeContext } from '../effects/theme'
const { useState } = React

interface track { text: string, author: string, album: string, time: string, trackTitle: string }

function Nav (): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const { theme, toggle } = useThemeContext()

  const handleToOpen = (): void => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const loginBtn = (): void => {
    if (isLogin) {
      localStorage.removeItem('token')
      setIsLogin(false)
      location.reload()
    } else {
      window.location.href = `${window.location.origin}/login`
    }
  }

  return (
        <nav className={`main__nav nav ${theme === 'light' ? 'light_nav' : ''}`}>
            <div className='nav__logo logo'>
                <img className="logo__image" src={`${theme === 'light' ? 'img/logo_dark.svg' : 'img/logo.png'}`} alt="logo"/>
            </div>
            <div className='nav__burger burger' onClick={handleToOpen}>
                <span className={`burger__line ${theme === 'light' ? 'light_burger' : ''}`}></span>
                <span className={`burger__line ${theme === 'light' ? 'light_burger' : ''}`}></span>
                <span className={`burger__line ${theme === 'light' ? 'light_burger' : ''}`}></span>
            </div>
            <div className="nav__menu menu">
                <ul className={isOpen ? 'menu__list active' : 'menu__list'}>
                    <li className="menu__item"><a href="http://" className={`menu__link ${theme === 'light' ? 'light_text' : ''}`}>Главное</a></li>
                    <li className="menu__item"><a href="http://" className={`menu__link ${theme === 'light' ? 'light_text' : ''}`}>Мой плейлист</a></li>
                    <li className="menu__item"><a onClick={loginBtn} className={`menu__link ${theme === 'light' ? 'light_text' : ''}`}>{isLogin ? 'Выйти' : 'Войти'}</a></li>
                    <li className="menu__item"><span onClick={toggle} className="menu__link">
                        <svg className="menu__item-theme" >
                            <use xlinkHref={`img/icon/sprite.svg#icon-${theme === 'dark' ? 'moon' : 'sun'}`}></use>
                        </svg></span>
                        </li>
                </ul>
            </div>
        </nav>
  )
}
function RenderTrack (props: track): JSX.Element {
  const { text, author, album, time, trackTitle } = props
  const { theme } = useThemeContext()

  return (
            <div className="playlist__item ">
                <div className="playlist__track track ">
                    <div className="track__title">
                        <div className={`track__title-image ${theme === 'light' ? 'light_note' : ''}`}>
                            <svg className="track__title-svg" >
                                <use xlinkHref={`img/icon/sprite.svg#icon-note${theme === 'light' ? '_light' : ''}`}></use>
                            </svg>
                        </div>
                        <div className="track__title-text loading">
                            <a className={`track__title-link ${theme === 'light' ? 'light_text' : ''}`} href="http://">{text} <span className="track__title-span">{trackTitle}</span></a>
                        </div>
                    </div>
                    <div className="track__author loading">
                        <a className={`track__author-link ${theme === 'light' ? 'light_text' : ''}`} href="http://">{author}</a>
                    </div>
                    <div className="track__album loading">
                        <a className={`track__album-link ${theme === 'light' ? 'light_text' : ''}`} href="http://">{album}</a>
                    </div>
                    <div className="track__time loading">
                        <svg className="track__time-svg" >
                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </svg>
                    <span className={`track__time-text ${theme === 'light' ? 'light_text' : ''}`}>{time}</span>
                    </div>
                </div>
            </div>
  )
}
function CenterBlock (): JSX.Element {
  const [categoryName, setCategory] = useState('')
  const [opennedId, setIsOpen] = useState(0)
  const { theme } = useThemeContext()

  const suggest = (event: React.MouseEvent): void => {
    const target = event.target as HTMLElement
    if (opennedId.toString() === target.id) {
      setIsOpen(0)
      setCategory('')
      return
    }
    setCategory(Object.keys(target.dataset)[0])
    setIsOpen(Number(target.id))
    target.classList.add('active')
  }
  const toOpenCategory = (categoryName: string): JSX.Element => {
    switch (categoryName) {
      case 'author':
        return <AuthorList/>
      case 'genre':
        return <GenreList />
      default:
        return <YearList />
    }
  }
  console.log(theme)
  return (
        <div className={`main__centerblock centerblock ${theme === 'light' ? 'light_center' : ''}`}>
            <div className="centerblock__search search">
                <svg className="search__svg">
                    <use xlinkHref={`img/icon/sprite.svg#icon-search${theme === 'light' ? '_black' : ''}`}></use>
                </svg>
                <input className="search__text" type="search" placeholder="Поиск" name="search"/>
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
                <div className="filter__title">Искать по:</div>
                <div className='filter__wrapper'>
                    { opennedId !== 0 ? toOpenCategory(categoryName) : null }
                    <div className={`filter__button button-author _btn-text ${categoryName === 'author' ? 'active' : ''} ${theme === 'light' ? 'filter_button-light' : ''}`} data-author='' id='1' onClick={suggest}>исполнителю</div>
                    <div className={`filter__button button-year _btn-text ${categoryName === 'year' ? 'active' : ''} ${theme === 'light' ? 'filter_button-light' : ''}`} data-year='' id='2' onClick={suggest}>году выпуска</div>
                    <div className={`filter__button button-genre _btn-text ${categoryName === 'genre' ? 'active' : ''} ${theme === 'light' ? 'filter_button-light' : ''}`} data-genre='' id='3' onClick={suggest}>жанру</div>
                </div>
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
                <SimpleBar style={{ maxHeight: '100%' } } scrollbarMaxSize={0} classNames={{ track: 'hidden', scrollbar: 'hidden', mask: 'hidden' }}>
                    {
                        playlist.map((item: track) => {
                          return (
                            RenderTrack(item)
                          )
                        })
                    }
                </SimpleBar>
                </div>
            </div>
        </div>
  )
}
function SlideBar (props: { name: string, avatar: string }): JSX.Element {
  const { theme } = useThemeContext()
  const avatar = {
    backgroundImage: `url(${props.avatar})`
  }
  return (
        <div className={`main__sidebar sidebar ${theme === 'light' ? 'light_slidebar' : ''}`}>
            <div className="sidebar__personal">
                        <p className={`sidebar__personal-name ${theme === 'light' ? 'light_text' : ''}`}>{props.name}</p>
                        <div className="sidebar__avatar loading" style={avatar}>
                        </div>
                    </div>
                    <div className="sidebar__block">
                        <div className="sidebar__list">
                            <div className="sidebar__item loading">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist01.png" alt="day's playlist"/>
                                </a>
                            </div>
                            <div className="sidebar__item loading">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src="img/playlist02.png" alt="day's playlist"/>
                                </a>
                            </div>
                            <div className="sidebar__item loading">
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
