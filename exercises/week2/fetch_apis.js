import fetch from "node-fetch"

// fetch('https://pokeapi.co/api/v2/pokemon/ditto/').then(response => {
//         if(response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error("error with request")
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// fetch('https://goweather.herokuapp.com/weather/houston')
//   .then(response => response.json())
//   .then(weather => {console.log('The weather in Houston is currently ', weather)})
//   .catch(err => {console.log('There was an error in the URL')})

fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
  .then(response => response.json())
  .then(posts => { // posts is a json object
    let userPostIds = [];
    // create a loop to store each JSON object's id: ## (key: value)
    posts.forEach(element => userPostIds.push(element.id));

    for (let post in userPostIds) {
      fetch('https://jsonplaceholder.typicode.com/posts/' + userPostIds[post], {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'Archived',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then(response => response.json())
        .then(result => {
          console.log(`\nSuccess for post: ${userPostIds[post]}`, result);
        })
        .catch(error => {
          console.error('\nError:', error);
        });
    }
  })
