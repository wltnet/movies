## Tool used

ChatGPT

## Rough prompts

Rating Chart: Given moviesStore from Pinia which return { movies, loading, error, getMovies },
getMovies is an action to call api and movies dataset are [{
id: number;
title: string;
genre: string;
description: string;
rating: number;
}],
add a chart to show average rating by genre using chart.js and typescript in vue3

At frist it gave me the result using vue-chart-3 as a wrapper with chart.js version 3, then I look up those package online and found they are outdated and suggested to use vue-chartjs as a wrapper with chart js version 5. Then I prompted Chatgpt to use vue-chartjs with chart.js version 5
