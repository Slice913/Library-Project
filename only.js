// TODO * finish styling add movie section
// * styling movie list section(touch ups)
// TODO * javascript section 3: loop through list of movies and display

let myMovies = [
  {
    title: "Test Title 1",
    date: "Test release date 1",
    genre: "Test Genre 1",
  },
  {
    title: "Test Title 2",
    date: "Test release date 2",
    genre: "Test Genre 2",
  },
  {
    title: "Test Title 3",
    date: "Test release date 3",
    genre: "Test Genre 3",
  },
];

currentMovies = () => {
  let showBooks = document.querySelector("#list"); // Where the books will be displayed.

  //   for (const bookList of myLibrary) {
  //     return (showBooks.innerText = bookList);
  //   }

  // working on getter full list of books
  // const bookList = myLibrary.map((e) => {
  //   return (showBooks.textContent = e);
  // });
  // console.log(bookList);
};

currentMovies();

function Movie() {
  // the constructor...
}

// take user’s input and store the new movie objects into an array.

function addMovieToList() {
  // do stuff here
  //  * take in: the user text (title, date, genre)
  const submitButton = document.querySelector(".button-64");
  const movieTitle = document.querySelector("#movie-title").value;
  const movieDate = document.querySelector("#release-date").value;
  const movieGenre = document.querySelector("#genre").value;

  let movieData = {
    title: movieTitle,
    date: movieDate,
    genre: movieGenre,
  };

  submitButton.addEventListener("click", () => {
    myMovies.push(movieData);
  });
  console.log(myMovies);
}

//
function displayMovies() {
  // list of movies (myMovies)
}

/**
 * * finish styling
 * * get whole lost to show on page( dont spend much time on this as the books are showing up in console)
 *
 *
 */
