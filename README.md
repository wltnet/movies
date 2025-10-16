# Movies Data

## Project Overview:

The app displays a list of movies and allows users to view detailed information for each movie.
On the movie detail page, it also provides recommendations of similar movies based on genre.

Additionally, the app includes a chart showing the average rating per genre for all movies, implemented using Chart.js.

### Motivation:

I chose this project because I enjoy watching movies, and it was a challenge for me to create my first chart using Chart.js. This project helped me practice Vue 3 with TypeScript, reactive state management, and data visualization.

## Project Setup

### In root (for frontend)

```sh
npm install
```

### Then in /server (for backend)

```sh
cd server
npm install
```

### Compile and Hot-Reload for Development in root

In root directory

```sh
npm run dev
```

### Viewing in browser

In browser visit http://localhost:5173/

## Data source

The movie dataset used in this project was manually created, the movies names are from the one I have watched or heard of. Descriptions and genres are summarised based on sources from IMDB, Wikipedia or Netflix.

## Trade-off

- No pagination or lazy loading yet - at current all movies data load at once, for a large data set would affect performace.
- recommendation logic only base on genre to keep it simple, in real world it should include other factors.
- currently the app fetch movies data inside onMounted() if the store is empty to keep simple, but it doesn't persist across page reload.

## Future improvements

- Paddgination with control navigation.
- Filtering - add filter, user can filter movies by genre, rating ..etc
- Sorting - add sorting by movie's name.
- Liking feature - liking movies which can also added for a factor of the recommendation logic
- Caching - use Map to cach data to improve performance

## Git History

- vue and express server initial setup
- add movies data and movies api
- load movie data with pinia and display movies list
- setup route for movies list page
- create movie card and apply to MoviesList
- add movie details page and route
- make correction of the v-else in MovieDetails component
- move script into the top for consistency
- add recommendation widget
- add movies rating chart page
- add navigation
- add lang en in html tag
