export async function getLighthouseMetrics () {
  const response = await fetch('https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      replace: true,
      save: true,
      url: 'https://grabarzundpartner.de'
    })
  })
  return response.json()
}
