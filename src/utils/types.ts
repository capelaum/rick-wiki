export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Result = {
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
};

export interface Data {
  info: Info;
  results: Result[];
}
