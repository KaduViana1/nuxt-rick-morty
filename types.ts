export type EpisodeTypes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type EpisodesPageTypes = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: [
    {
      id: number;
      name: string;
      air_date: string;
      episode: string;
      characters: string[];
      url: string;
      created: string;
    }
  ];
};

export type CharacterTypes = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharactersPageTypes = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: {
        name: string;
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
      url: string;
      created: string;
    }
  ];
};

export type CommentType = {
  data: {
    id: string;
    content: string;
    createdAt: Date;
    episde: string;
    authorId: string;
  }[];
  count: number;
};
