const html = `
  <h1>
    A Home page
  </h1>
  <p>
    This is some sample content for a home page
  </p>
`

addEventListener('DOMContentLoaded', (e) => {
  console.log(e)
  document.getElementById('root').innerHTML = html
})