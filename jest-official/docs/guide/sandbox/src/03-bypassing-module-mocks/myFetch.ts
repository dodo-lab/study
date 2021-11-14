export class Response {
  constructor(private data: string) {}

  async text() {
    return this.data;
  }
}

export default function myFetch(url: string): Promise<Response> {
  return fetch(url)
    .then((data) => data.text())
    .then((text) => new Response(text));
}
