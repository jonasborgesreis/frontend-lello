import fetch from 'cross-fetch'

export async function getAllUsers (url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
}
