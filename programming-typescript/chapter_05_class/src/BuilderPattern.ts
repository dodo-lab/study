export default function BuilderPattern() {
  console.log('[ビルダーパターン]');

  class RequestBuilder {
    private data: object | null = null;
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setURL(url: string): this {
      this.url = url;
      return this;
    }

    setMethod(method: 'get' | 'post'): this {
      this.method = method;
      return this;
    }

    setData(data: object): this {
      this.data = data;
      return this;
    }

    send() {
      console.log('url', this.url);
      console.log('method', this.method);
      console.log('data', this.data);
    }
  }

  new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();
}
