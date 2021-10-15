// keyof演算子
// オブジェクトのすべてのキーを文字列リテラルの合併型として取得できる
export default function KeyOf() {
  console.log('[keyof演算子]');

  type Get = {
    <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
      o: O,
      k1: K1,
      k2: K2
    ): O[K1][K2];
    <
      O extends object,
      K1 extends keyof O,
      K2 extends keyof O[K1],
      K3 extends keyof O[K1][K2]
    >(
      o: O,
      k1: K1,
      k2: K2,
      k3: K3
    ): O[K1][K2][K3];
  };

  const get: Get = (obj: any, ...keys: string[]) => {
    let result = obj;
    keys.forEach((k) => (result = result[k]));
    return result;
  };

  type ActivityLog = {
    lastEvent: Date;
    events: {
      id: string;
      timestamp: Date;
      type: 'Read' | 'Write';
    }[];
  };

  const activityLog: ActivityLog = {
    lastEvent: new Date(),
    events: [{ id: 'event-001', timestamp: new Date(), type: 'Read' }],
  };

  const lastEvent = get(activityLog, 'lastEvent'); // Date型
  const event = get(activityLog, 'events', 0);
  const type = get(activityLog, 'events', 0, 'type');
  console.log(lastEvent);
  console.log(event);
  console.log(type);
}
