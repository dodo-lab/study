export default function Training() {
  console.log('[練習問題]');

  type Shoe = {
    purpose: string;
  };

  class BalletFlat implements Shoe {
    purpose = 'dancing';
  }

  class Boot implements Shoe {
    purpose = 'woodcutting';
  }

  class Sneaker implements Shoe {
    purpose = 'walking';
  }

  type ShoeCreator = {
    create(type: 'balletFlat'): BalletFlat;
    create(type: 'boot'): Boot;
    create(type: 'sneaker'): Sneaker;
  };

  const Shoe: ShoeCreator = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
      switch (type) {
        case 'balletFlat':
          return new BalletFlat();
        case 'boot':
          return new Boot();
        case 'sneaker':
          return new Sneaker();
      }
    },
  };

  const shoes = [
    Shoe.create('balletFlat'),
    Shoe.create('boot'),
    Shoe.create('sneaker'),
  ];
  for (const shoe of shoes) {
    console.log(shoe.purpose);
  }

  interface BuildableRequest {
    data?: object;
    method: 'get' | 'post';
    url: string;
  }

  class RequestBuilder {
    data?: object;
    method?: 'get' | 'post';
    url?: string;

    setURL(url: string): this & Pick<BuildableRequest, 'url'> {
      return Object.assign(this, { url });
    }

    setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
      return Object.assign(this, { method });
    }

    setData(data: object): this & Pick<BuildableRequest, 'data'> {
      return Object.assign(this, { data });
    }

    send(this: BuildableRequest) {
      console.log('url', this.url);
      console.log('method', this.method);
      console.log('data', this.data);
    }
  }

  new RequestBuilder()
    .setData({ firstName: 'Anna' })
    .setURL('/users')
    .setMethod('get')
    .send();
}
