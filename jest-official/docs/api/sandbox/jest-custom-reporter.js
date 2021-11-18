class JestCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.outputLog = options.outputLog ?? false;
  }

  log(...args) {
    this.outputLog && console.log(...args);
  }

  // jest起動直後、テスト開始前に実行される
  onRunStart(results, options) {
    this.log('onRunStart');
  }

  // すべてのテスト完了後に実行される
  onRunComplete(contexts, results) {
    this.log('onRunComplete');
  }

  // １つのテストファイルのテスト開始ごとに実行される
  onTestFileStart(test) {
    this.log('onTestFileStart', test.path);
  }

  // １つのテストファイルのテスト完了ごとに実行される
  onTestFileResult(test, testResult, aggregatedResult) {
    this.log('onTestFileResult', test.path);
  }

  // １つのテストケース完了ごとに実行される
  onTestCaseResult(test, testCaseResult) {
    this.log('onTestCaseResult', testCaseResult.title, test.path);
  }

  // 以降は、いつ実行されるか不明
  onTestStart(test) {
    this.log('onTestStart', test);
  }
  onTestResult(test, testResult, aggregatedResult) {
    this.log('onTestResult', test);
    this.log('onTestResult', testResult);
    this.log('onTestResult', aggregatedResult);
  }
}

module.exports = JestCustomReporter;
