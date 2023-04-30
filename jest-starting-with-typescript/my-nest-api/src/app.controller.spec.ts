import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    // テスト用のNestJSアプリケーションを作成する
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // アプリケーションからAppControllerを取得する
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // getHello() メソッドが'Hello from NestJS API!'を返すことを確認する
      expect(appController.getHello()).toBe('Hello from NestJS API!');
    });
  });
});
