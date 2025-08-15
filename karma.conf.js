// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    //basePath '' karma menganggap direktori root projek sebagai basePath 
    basePath: '',
    //framework test dan adapter yang digunakan
    //jasmine (framework untuk menulis test)
    //@angular-devkit/build-angular (adaptor khusus Angular CLI yang mengintegrasikan Karma dengan proses build Angular)
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    //plugin yang digunakan
    plugins: [
      require('karma-jasmine'), //plugin untuk menjalankan tes
      require('karma-chrome-launcher'), //plugin yang bikin karma bisa meluncurkan browser google chrome
      require('karma-jasmine-html-reporter'), //plugin yang menampilkan hasil tes dalam format html di browser
      require('karma-coverage'), //plugin yang menghasilkan laporan code coverage (seberapa banyak kode yang diuji)
      require('@angular-devkit/build-angular/plugins/karma'), //plugin khusus angular cli untuk berinteraksi dengan proses build dan testing angular
      require('karma-junit-reporter'),
      require('karma-htmlfile-reporter')

    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/app'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
        /*
        =============================== Coverage summary ===============================
        Statements   : 100% ( 3/3 ) ((misalnya, deklarasi variabel, pemanggilan fungsi, atau pernyataan if))
        Branches     : 100% ( 0/0 ) ((if/else, switch, dll.) yang sudah diuji. )
        Functions    : 100% ( 0/0 ) (fungsi yang sudah dipanggil oleh tes)
        Lines        : 100% ( 2/2 ) (baris kode yang dieksekusi)
        ================================================================================
        */
      ]
    },
    junitReporter: { // Tambahkan blok konfigurasi ini
      outputDir: require('path').join(__dirname, './junit/'), // Direktori untuk laporan
      outputFile: 'junit-report.xml', // Nama file laporan
      useBrowserName: false,
      suite: '',
    },
    htmlReporter: {
      outputFile: 'test-reports/html/unit-test-report.html',
      pageTitle: 'Unit Test Results'
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    browsers: ['Chrome'],
    restartOnFileChange: true
  });
};
