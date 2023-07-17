fetch('http://127.0.0.1:3000/garage?_page=2&_limit=1')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
