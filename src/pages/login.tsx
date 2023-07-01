/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from 'react'
import { Navigate } from 'react-router-dom'
import s from './login.module.css'
const { useState, useEffect } = React

export const LoginPage = (): JSX.Element => {
  const md5 = require('md5')

  const [isLogin, setLogin] = useState(false)
  const [isSignup, setSignup] = useState(false)

  const logIn = (e: React.MouseEvent): void => {
    e.preventDefault()
    const login = md5((document.querySelector('#login') as HTMLInputElement).value)
    const pass = md5((document.querySelector('#pass') as HTMLInputElement).value)
    const btns = document.querySelectorAll('button')
    enable(btns, true)
    fetch(`${window.location.origin}/req/userdata.json`).then(async res => await res.json()).then(res => {
      // console.log(res.pass, pass, res.login, login)
      if (res.pass === pass && res.login === login) {
        hasher(res.login, res.pass)
        setLogin(true)
      } else enable(btns, false)
    })
  }

  const signUp = (e: React.MouseEvent): void => {
    e.preventDefault()
    if (!isSignup) {
      setSignup(true)
      return
    }
    const login = (document.querySelector('#login') as HTMLInputElement).value
    const pass = (document.querySelector('#pass') as HTMLInputElement).value
    const rPass = (document.querySelector('#repeat_pass') as HTMLInputElement).value
    if (login && (pass === rPass)) {
      hasher(login, pass)
      setLogin(true)
    }
  }

  function cleanString (input: string): string {
    let output = ''
    for (let i = 0; i < input.length; i++) {
      if (input.charCodeAt(i) <= 127) {
        output += input.charAt(i)
      }
    }
    return output
  }
  function enable (arr: NodeListOf<HTMLButtonElement>, isE: boolean): void {
    if (isE) {
      arr.forEach(el => {
        el.setAttribute('disabled', '')
        el.classList.add('loading')
      })
    } else {
      arr.forEach(el => {
        el.removeAttribute('disabled')
        el.classList.remove('loading')
      })
    }
  }
  function hasher (log: string, pass: string): void {
    const token = md5([md5(log), md5(pass), String(Date.now() + Math.floor(Math.random() * (10000000 - 1)))].join(''))
    localStorage.setItem('token', token)
  }

  useEffect(() => {
    const passInputFields = document.querySelectorAll('input')
    const regExp = /^[a-zA-Z]+$/
    passInputFields.forEach(el => {
      el.addEventListener('input', (e: any) => {
        if (e.data) {
          if (!e.data.match(regExp)) {
            el.value = cleanString(el.value)
          }
        }
      })
    })
  })

  return (
    <div className={s.main}>
        {isLogin ? <Navigate to='/' replace={true}/> : ''}
        {localStorage.getItem('token') ? <Navigate to='/' replace={true}/> : ''}
        <section className={s.wrapper}>
          <img src="/img/logo_dark.svg" alt="logo" />
          <form className={s.form}>
            <div className={s.inputs}>
              <input className={s.input} id='login' type="text" placeholder='Логин'/>
              <input className={s.input} id='pass' type="password" placeholder='Пароль'/>
              {isSignup ? <input className={s.input} id='repeat_pass' type='password' placeholder='Повторите пароль'></input> : ''}
            </div>
            <div className={s.btns}>
              {isSignup ? <></> : <button onClick={logIn} className={`${s.btnLogin} ${s.button}`}>Войти</button>}
              <button onClick={signUp} className={isSignup ? `${s.btnSignup} ${s.button} ${s.fiolet}` : `${s.btnSignup} ${s.button}`}>Зарегистрироваться</button>
            </div>
          </form>
        </section>
    </div>
  )
}
