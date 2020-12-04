<h1 align="center">🎥 The movie expert - Frontend🎥</h1>

<h2 align="center">🎞️ An app to search for and rate movies 🎞️</h2>

---
![](preview.gif)

## Description
---
This app lets you enter a movie title and it will return every movie that matches your query. Then if you click on a movie, you can:

* View the movie synopsis
* View movie metadata like release year and director.
* Upvote or downvote the movie. A global "5-star" score is then generated based on the upvote/downvote ratio. 

The votes are saved to the database, so even if you click away from the movie, you can always come back to it and it will display the saved score.

# Running on your computer:
1. You first need to get the backend, so check [the backend repo first](https://github.com/ThatJohn/movie-expert-backend) and then come back for step 2.
2. Go to [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) and sign up for an API key.
3. Edit your `~/.bashrc`, `~/.zshrc` or similar and add `export REACT_APP_TMDB_API_KEY='your_new_api_key'`.
4. Clone this respository and cd into it:
```
git clone git@github.com:ThatJohn/movie-expert-frontend.git
cd movie-expert-frontend
```
5. Run `npm install`.
6. Run `npm start` and then visit `http://localhost:3001` on your browser.
7. Enjoy!