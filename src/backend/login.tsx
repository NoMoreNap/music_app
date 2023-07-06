export const loginApi = (formData: FormData): void => {
  const API = 'https://bayonetta.ru/user/login.php'
  const btns = document.querySelectorAll('button')
  enable(btns, true)
  fetch(API, {
    method: 'POST',
    body: formData
  }).then(async res => await res.json()).then(res => {
    // console.log(res.pass, pass, res.login, login)
    if (res.res) {
      localStorage.setItem('token', res.token)
      window.location.href = window.location.origin
    } else {
      enable(btns, false)
      alert('Неверный логин или пароль!')
    }
  })
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
