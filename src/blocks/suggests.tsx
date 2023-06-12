/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import playlist from '../static/tracks'

function AuthorList (): JSX.Element {
  const authors = playlist.map(item => item.author)
  const cooseItem = (event: React.MouseEvent): void => {
    const target = event.target as HTMLElement
    const anyTargets = document.querySelectorAll('.filter__annotation-item')
    anyTargets.forEach(el => {
      if (el.classList.contains('active')) { el.classList.remove('active') }
    })
    target.classList.add('active')
  }
  return (<div className='filter__annotation' style={{
    position: 'absolute',
    top: 'calc(100% + 10px)'
  }}>
    <SimpleBar style={{ maxHeight: '100%' } } scrollbarMaxSize={65} autoHide={false} classNames={{ track: 'simplebar-track', scrollbar: 'simplebar-scrollbar' }}>
     <ul className='filter__annotation-list' onClick={cooseItem}>
        {authors.map((item: string) => {
          return (<li key={item} className='filter__annotation-item'>{item}</li>)
        })}
     </ul>
    </SimpleBar>
  </div>)
}

function GenreList (): JSX.Element {
  const geners = [
    'Rock',
    'Pop',
    'Rap & Hip-Hop',
    'Easy Listening',
    'Dance & House',
    'Instrumental',
    'Metal',
    'Alternative',
    'Dubstep',
    'Jazz & Blues',
    'Drum & Bass',
    'Trance',
    'Chanson',
    'Ethnic',
    'Acoustic & Vocal',
    'Reggae',
    'Classical',
    'Indie Pop',
    'Speech',
    'Electropop & Disco',
    'Other'
  ]
  const cooseItem = (event: React.MouseEvent): void => {
    const target = event.target as HTMLElement
    const anyTargets = document.querySelectorAll('.filter__annotation-item')
    anyTargets.forEach(el => {
      if (el.classList.contains('active')) { el.classList.remove('active') }
    })
    target.classList.add('active')
  }
  return (<div className='filter__annotation' style={{
    position: 'absolute',
    top: 'calc(100% + 10px)'
  }}>
    <SimpleBar style={{ maxHeight: '100%' } } scrollbarMaxSize={65} autoHide={false} classNames={{ track: 'simplebar-track', scrollbar: 'simplebar-scrollbar' }}>
     <ul className='filter__annotation-list' onClick={cooseItem}>
        {geners.map((item: string) => {
          return (<li key={item} className='filter__annotation-item'>{item}</li>)
        })}
     </ul>
    </SimpleBar>
  </div>

  )
}

function YearList (): JSX.Element {
  return (<div className='filter__annotation year' style={{
    position: 'absolute',
    top: 'calc(100% + 10px)'
  }}>
    <div className="year-wrapper">
      <input id='year-newer' name='radio' type="radio" />
      <label htmlFor="year-newer">Более новые</label>
    </div>
    <div className="year-wrapper">
      <input id='year-oldest' name='radio' type="radio" />
      <label htmlFor="year-oldest">Более старые</label>
    </div>
  </div>

  )
}

export { AuthorList, GenreList, YearList }
