interface ScheduleType {
  time: string,
  days: string[],
}

interface RatingType {
  average: number,
}

interface CountryType {
  name: string,
  code: string,
  timezone: string,
}

interface NetworkType {
  id: number,
  name: string,
  country: CountryType,
  officialSite: string,
}

interface ExternalsType {
  tvrage: number,
  thetvdb: number,
  imdb: string,
}

interface ImageType {
  medium: string,
  original: string,
}

interface SelfType {
  href: string,
}

interface PrevEpisodeType {
  href: string,
}

interface LinksType {
  self: SelfType,
  previousepisode: PrevEpisodeType,
}

export type ShowType = {
  id: number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres: string[],
  status: string,
  runtime: number,
  averageRuntime: number,
  premiered: string,
  ended: string,
  officialSite: string,
  schedule: ScheduleType,
  rating: RatingType,
  weight: number,
  network: NetworkType,
  webChannel: null,
  dvdCountry: null,
  externals: ExternalsType,
  image: ImageType,
  summary: string,
  updated: number,
  '_links': LinksType,
}