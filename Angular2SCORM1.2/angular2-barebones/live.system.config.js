var angularVersion = '2.0.0-rc.1';
System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});



System.import('app/main').then(null, console.error.bind(console));