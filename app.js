document.querySelector('#next').addEventListener('click', getData);
document.querySelector('#prev').addEventListener('click', getPrev)
var i = 1;
fetch(`https://rickandmortyapi.com/api/character/${i}`)
  .then(data => data.json())
  .then(function (data) {
    let res = '';
    res += `
        <ul class="list-group">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">Gender: ${data.gender}</li>
          <li class="list-group-item">Location: ${data.location.name}</li>
          <li class="list-group-item">Species: ${data.species}</li>
          <li class="list-group-item">Origin: ${data.origin.name}</li>
        </ul>
      `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${data.image}">`;
    //console.log(res);
    document.getElementById('profileDisplay').innerHTML = res;
    console.log(data);

  })
  .catch(err => console.log(err))

function getData() {
  i = i + 1;
  fetch(`https://rickandmortyapi.com/api/character/${i}`)
    .then(data => data.json())
    .then(function (data) {
      let res = '';
      res += `
        <ul class="list-group">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">Gender: ${data.gender}</li>
          <li class="list-group-item">Location: ${data.location.name}</li>
          <li class="list-group-item">Species: ${data.species}</li>
          <li class="list-group-item">Origin: ${data.origin.name}</li>
        </ul>
      `;
      document.getElementById('imageDisplay').innerHTML = `<img src="${data.image}">`;
      //console.log(res);
      document.getElementById('profileDisplay').innerHTML = res;
      //console.log(data);

    })
    .catch(err => console.log(err))
}

function getPrev() {
  fetch(`https://rickandmortyapi.com/api/character/${i}`)
    .then(data => data.json())
    .then(function (data) {
      let res = '';
      res += `
        <ul class="list-group">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">Gender: ${data.gender}</li>
          <li class="list-group-item">Location: ${data.location.name}</li>
          <li class="list-group-item">Species: ${data.species}</li>
          <li class="list-group-item">Origin: ${data.origin.name}</li>
        </ul>
      `;
      document.getElementById('imageDisplay').innerHTML = `<img src="${data.image}">`;
      //console.log(res);
      document.getElementById('profileDisplay').innerHTML = res;
      //console.log(data);

    })
    .catch(err => console.log(err));
}
// let counter = 0;
// let iterator = document.querySelector('.counter');
// let play = document.querySelector('#i').addEventListener('click', countNumbers);

// function countNumbers() {
//   let start = setInterval(() => {
//     counter += 1;
//     iterator.textContent = counter;
//     if (counter === 5) {
//       clearInterval(start);
//     }
//   }, 1000)

// }