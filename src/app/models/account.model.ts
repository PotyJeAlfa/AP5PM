export interface GetDetails {
    avatar: {
    gravatar: {
      hash: "c9e9fc152ee756a900db85757c29815d"
    }
  },
  id: 548,
  iso_639_1: "en",
  iso_3166_1: "CA",
  name: "Travis Bell",
  include_adult: true,
  username: "travisbell"
};

export interface GetCreate {
    page: 1,
    results: [
      {
        description: "Name pretty much says it all, here's the top 50 grossing films of all time.",
        favorite_count: 0,
        id: 10,
        item_count: 0,
        iso_639_1: "en",
        list_type: "movie",
        name: "Top 50 Grossing Films of All Time (Worldwide)",
        poster_path: null
      }
    ],
    total_pages: 4,
    total_results: 61
};

export interface GetFavoritesM {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          16
        ],
        id: 9806,
        original_language: "en",
        original_title: "The Incredibles",
        overview: "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
        release_date: "2004-11-04",
        poster_path: null,
        popularity: 0.167525,
        title: "The Incredibles",
        video: false,
        vote_average: 6.8,
        vote_count: 1584
      }
    ],
    total_pages: 4,
    total_results: 77
};

export interface GetFavoritesS {
    page: 1,
    results: [
      {
        backdrop_path: null,
        first_air_date: "2007-09-24",
        genre_ids: [
          10759
        ],
        id: 1404,
        original_language: "en",
        original_name: "Chuck",
        overview: "Chuck is an American action-comedy/spy-drama television series created by Josh Schwartz and Chris Fedak. The series is about an \"average computer-whiz-next-door\" named Chuck, played by Zachary Levi, who receives an encoded e-mail from an old college friend now working for the Central Intelligence Agency; the message embeds the only remaining copy of a software program containing the United States' greatest spy secrets into Chuck's brain.",
        origin_country: [
          "US"
        ],
        poster_path: null,
        popularity: 0.125125,
        name: "Chuck",
        vote_average: 8.2,
        vote_count: 37
      }
    ],
    total_pages: 3,
    total_results: 52
};