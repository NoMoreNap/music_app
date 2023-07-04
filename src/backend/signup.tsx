export const signUpApi = (formData: FormData): void => {
  const API = 'https://bayonetta.ru/user/signup.php'
  fetch(API, {
    method: 'POST',
    body: formData
  }).then(async res => await res.json()).then(res => {
    if (res.res) {
      localStorage.setItem('token', res.token)
      window.location.href = window.location.origin
    } else {
      alert('Такой пользователь уже существует!')
    }
  })
}
