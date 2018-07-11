var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000,
    isVerbose: true,
    print: function () {}
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },
  baseUrl: 'http://10.0.2.2:8000',
  // Configurações
  capabilities: {
    browserName: 'android',
    platformName: 'Android',
    platformVersion: '8.1.0',
    deviceName: 'emulator-554',
    app: 'APK_ROOT_FOLDER',
    autoWebview: true,
    autoWebviewTimeout: 30000,
    autoAcceptAlerts: true
  },

  specs: [
    'e2e-tests/tests/TutorialNavegacaoTest.js',
    'e2e-tests/tests/LoginTest.js',
    'e2e-tests/tests/ReportarIncidenteTest.js',
    'e2e-tests/tests/MeusIncidentesTest.js',
    'e2e-tests/tests/TelefonesEmergenciaTest.js',
    'e2e-tests/tests/EstabelecimentosSaudeTest.js',
    'e2e-tests/tests/ReportarIncidenteTest2.js'

  ],

};