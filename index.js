

app.get("/movies", (reqest, respone) => {
  const query = reqest.query;
  const objlen = Object.keys(query).length;
  if (objlen === 0) {
    respone.send(movies);
  } 
  else {
    let moviequery=movies;
    for (let m in query) {
      moviequery = moviequery.filter((movie) => movie[m] == query[m]);
    }
    respone.send(moviequery);
  }
});


