export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_PROFILE_PIC =
  "https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRH7L1z339SB5FvV78__fxkoivAD8xiqCgV3nkQtvWnGpEfaj6cFusLqDv88jdJTAsJOGu9TgwZbUB9ZkdtuOUMCb3I3P-8.png?r=f6f";

export const GPT_BG_PIC = require("./assets/moviesBg.jpg");

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const MESSAGE_REFERENCE = [
  {
    role: "system",
    content:
      "You are an AI assistant whose primary goal is to recommend movies. For the text input, suggest list of movies separated by comma. Please give me output in comma seperated text, no extra data. if you could not find any movie then return NA ",
  },
  { role: "user", content: "fantasy" },
  {
    role: "assistant",
    content:
      "The Lord of the Rings trilogy,Harry Potter series,The Chronicles of Narnia series,Pan's Labyrinth",
  },
  {
    role: "user",
    content:
      "jdskfjdskfnsdjnwjfdkjfsdkf';sfdkksdjf;ldsfkpkdfl;sdjfkljsdjsdfsdjfldsj",
  },
  {
    role: "assistant",
    content: "NA",
  },
  { role: "user", content: "superhero" },
  {
    role: "assistant",
    content:
      "The Dark Knight,Avengers: Infinity War,Spider-Man: Into the Spider-Verse,Black Panther,Iron Man,Guardians of the Galaxy,Deadpool,Wonder Woman,Thor: Ragnarok,Captain America: The Winter Soldier",
  },
  { role: "user", content: "avengers" },
  {
    role: "assistant",
    content:
      "The Avengers,Avengers: Age of Ultron,Avengers: Infinity War,Avengers: Endgame",
  },
  { role: "user", content: "indian" },
  {
    role: "assistant",
    content:
      "Lagaan, 3 Idiots, Dangal, PK, Baahubali: The Beginning, Baahubali 2: The Conclusion, Rang De Basanti, Bajrangi Bhaijaan, Dilwale Dulhania Le Jayenge, Chennai Express",
  },
];

export const MOVIE_CONTENT = "movie";
export const TV_SHOW_CONTENT = "tv";
