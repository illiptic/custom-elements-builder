require('es6-shim');

exports.banner = [
    '//',
    '//     <%= pkg.name %> <%= nextVersion %> http://tmorin.github.io/custom-elements-builder',
    '//     <%= pkg.description %>',
    '//     Buil date: <%= grunt.template.today("yyyy-mm-dd") %>',
    '//     Copyright 2015-2015 Thibault Morin',
    '//     Available under MIT license',
    '//',
    ''
 ].join('\n');

var customLaunchers = {
    slChrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: ''
    },
    slFirefox: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: ''
    },
    slIe11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '11'
    },
    slIe10: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '10'
    },
    slIe9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '9'
    },
    slAndroid4: {
        base: 'SauceLabs',
        browserName: 'android',
        version: '4.4'
    },
    slAndroid5: {
        base: 'SauceLabs',
        browserName: 'android',
        version: '5.0'
    },
    slSafari7: {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '7',
    },
    slSafari8: {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '8',
    },
    slIPhone: {
        base: 'SauceLabs',
        browserName: 'iphone',
        deviceName: 'iPhone',
        version: '7.1',
        platform: 'OS X 10.10',
        'device-orientation': 'portrait'
    },
    slIPad: {
        base: 'SauceLabs',
        browserName: 'ipad',
        deviceName: 'iPad',
        version: '7.1',
        platform: 'OS X 10.10',
        'device-orientation': 'portrait'
    }
};

var base = {
    sauceLabs: {
        testName: 'Custom Elements Builder Test',
        recordVideo: false,
        recordScreenshots: false
    },
    captureTimeout: 3 * 60 * 1000,
    customLaunchers: customLaunchers,
    reporters: ['dots', 'saucelabs', 'coverage'],
    singleRun: true,
    autoWatch: false
};

exports.gruntKarmaTargetFactory = function (browsers) {
    return Object.assign({}, base, {
        browsers: browsers
    });
};
