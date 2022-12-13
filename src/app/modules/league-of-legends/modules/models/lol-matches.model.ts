// Generated by https://quicktype.io

export interface LolDataGameDetails {
  data: LolData;
}

export interface LolData {
  event: LolEvent;
}

export interface LolEvent {
  id: string;
  type: string;
  tournament: LolTournament;
  league: LolLeague;
  match: LolMatch;
  streams: any[];
}

export interface LolLeague {
  id: string;
  slug: string;
  image: string;
  name: string;
}

export interface LolMatch {
  strategy: LolStrategy;
  teams: LolMatchTeam[];
  games: LolGame[];
}

export interface LolGame {
  number: number;
  id: string;
  state: string;
  teams: LolGameTeam[];
  vods: LolVOD[];
}

export interface LolGameTeam {
  id: string;
  side: LolSide;
}

export enum LolSide {
  Blue = 'blue',
  Red = 'red',
}

export interface LolVOD {
  id: string;
  parameter: string;
  locale: string;
  mediaLocale: LolMediaLocale;
  provider: LolProvider;
  offset: number;
  firstFrameTime: null | string;
  startMillis: null;
  endMillis: null;
}

export interface LolMediaLocale {
  locale: string;
  englishName: string;
  translatedName: string;
}

export enum LolProvider {
  Youtube = 'youtube',
}

export interface LolStrategy {
  count: number;
}

export interface LolMatchTeam {
  id: string;
  name: string;
  code: string;
  image: string;
  result: LolResult;
}

export interface LolResult {
  gameWins: number;
}

export interface LolTournament {
  id: string;
}
