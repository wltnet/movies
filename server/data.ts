export interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  rating: number;
}

export type Movies = Movie[];

export const movies: Movies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    description:
      'A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his past crimes.',
    rating: 8.8,
  },
  {
    id: 2,
    title: 'Interstellar',
    genre: 'Sci-Fi',
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    rating: 8.6,
  },
  {
    id: 3,
    title: 'The Dark Knight',
    genre: 'Action',
    description: 'Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.',
    rating: 9.0,
  },
  {
    id: 4,
    title: 'The Prestige',
    genre: 'Drama',
    description:
      'Two rival magicians engage in a bitter competition that leads to tragedy and obsession.',
    rating: 8.5,
  },
  {
    id: 5,
    title: 'Titanic',
    genre: 'Romance',
    description:
      'A young couple from different social classes fall in love aboard the ill-fated RMS Titanic.',
    rating: 7.8,
  },
  {
    id: 6,
    title: 'Avatar',
    genre: 'Sci-Fi',
    description:
      'A paraplegic Marine is sent to the moon Pandora on a unique mission and becomes torn between duty and conscience.',
    rating: 7.9,
  },
  {
    id: 7,
    title: 'The Notebook',
    genre: 'Romance',
    description:
      'A poor young man and a rich young woman fall in love in the 1940s, but their relationship faces many challenges.',
    rating: 7.9,
  },
  {
    id: 8,
    title: 'Gladiator',
    genre: 'Action',
    description:
      'A betrayed Roman general fights his way back as a gladiator to seek revenge against the corrupt emperor.',
    rating: 8.5,
  },
  {
    id: 9,
    title: 'Parasite',
    genre: 'Thriller',
    description:
      'A poor family schemes to become employed by a wealthy household, leading to unexpected consequences.',
    rating: 8.6,
  },
  {
    id: 10,
    title: 'La La Land',
    genre: 'Musical',
    description:
      'A jazz musician and an aspiring actress fall in love, but their ambitions threaten to tear them apart.',
    rating: 8.0,
  },
  {
    id: 11,
    title: 'The Godfather',
    genre: 'Crime',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.',
    rating: 9.2,
  },
  {
    id: 12,
    title: 'Pulp Fiction',
    genre: 'Crime',
    description:
      'The lives of two mob hitmen, a boxer, and others intertwine in tales of violence and redemption.',
    rating: 8.9,
  },
  {
    id: 13,
    title: 'Forrest Gump',
    genre: 'Drama',
    description:
      'The life story of a simple man with a big heart, witnessing key moments in 20th-century American history.',
    rating: 8.8,
  },
  {
    id: 14,
    title: 'Mad Max: Fury Road',
    genre: 'Action',
    description:
      'In a post-apocalyptic wasteland, a woman rebels against a tyrant with the help of a drifter named Max.',
    rating: 8.1,
  },
  {
    id: 15,
    title: 'Whiplash',
    genre: 'Drama',
    description:
      'A young drummer enrolls in a cutthroat music conservatory where his instructor pushes him past his limits.',
    rating: 8.5,
  },
  {
    id: 16,
    title: 'Her',
    genre: 'Romance',
    description:
      'A lonely writer develops an unlikely relationship with an intelligent operating system.',
    rating: 8.0,
  },
  {
    id: 17,
    title: 'The Matrix',
    genre: 'Sci-Fi',
    description:
      'A computer hacker learns that reality is a simulation and joins a rebellion against the machines.',
    rating: 8.7,
  },
  {
    id: 18,
    title: 'Joker',
    genre: 'Thriller',
    description:
      'A mentally troubled comedian descends into madness and becomes the infamous criminal mastermind Joker.',
    rating: 8.4,
  },
  {
    id: 19,
    title: 'Up',
    genre: 'Animation',
    description:
      'An old man and a young boy embark on an adventure to South America in a floating house lifted by balloons.',
    rating: 8.2,
  },
  {
    id: 20,
    title: 'Finding Nemo',
    genre: 'Animation',
    description: 'A clownfish sets out on a journey to find his missing son across the ocean.',
    rating: 8.1,
  },
];
