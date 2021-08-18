var angularVersion = '2.0.0-rc.1';

System.config({
    baseUrl: '/',
    paths: {
        'npmcdn:*': 'https://npmcdn.com/*'
    }
});

System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },

    meta: {
        '*': {
            deps: [ 'zone.js', 'reflect-metadata' ]
        }
    }
});

System.config({
    packageConfigPaths: [
        "npmcdn:@*/*/package.json"
    ],

    map: {
        
        'angular2/core': 'npmcdn:@angular/core@'+angularVersion,
        'angular2/router': 'npmcdn:@angular/router@'+angularVersion,
        'angular2/http': 'npmcdn:@angular/http@'+angularVersion,
        'angular2/compiler': 'npmcdn:@angular/compiler@'+angularVersion,
        'angular2/common': 'npmcdn:@angular/common@'+angularVersion,
        'angular2/platform/browser': 'npmcdn:@angular/platform-browser@'+angularVersion,
        'angular2/platform-browser-dynamic': 'npmcdn:@angular/platform-browser-dynamic@'+angularVersion,
        '@angular2/core': 'npmcdn:@angular/core@'+angularVersion,
        '@angular2/router': 'npmcdn:@angular/router@'+angularVersion,
        '@angular2/http': 'npmcdn:@angular/http@'+angularVersion,
        '@angular2/compiler': 'npmcdn:@angular/compiler@'+angularVersion,
        '@angular2/common': 'npmcdn:@angular/common@'+angularVersion,
        '@angular2/platform/browser': 'npmcdn:@angular/platform-browser@'+angularVersion,
        '@angular2/platform-browser-dynamic': 'npmcdn:@angular/platform-browser-dynamic@'+angularVersion,
        'rxjs': 'npmcdn:rxjs@5.0.0-beta.6',
        'zone.js': 'npmcdn:zone.js@0.6.12',
        'reflect-metadata': 'npmcdn:reflect-metadata@0.1.3',
        "crypto": "@empty",
       
    },

    packages: {
        'app': {
            defaultExtension: 'ts',
            main: 'main.ts'
        }
    }
});

System.import('app');