interface Urls {
  raw: string,
  full: string,
  small: string,
  regular: string,
  thumb: string
}

export class Foto {
  constructor(
    public id: string,
    public width: number,
    public height: number,
    public urls: Urls,
    public description: string
  ) {}
}

export class FotosResponse {
  constructor(
    public total: number,
    public results: Array<Foto>
  ) {}
}
