
import {wozllaEngineBootstrap} from './NGWozlla/application';
import {Inject, Component, View, NgIf, NgFor} from 'angular2/angular2';
import {LifeCycle} from 'angular2/angular2';
var lifeCycle: LifeCycle = null;
import Application = require('./components/application/Application')

console.log('BOOTSTRAPPING...');
    wozllaEngineBootstrap(Application, []).then((appRef) => {
        console.log('ANGULAR BOOTSTRAP DONE.');
        console.log(appRef);
    }, (err) =>{
        console.log('ERROR BOOTSTRAPPING ANGULAR');
        let errorMessage = err.message + "\n\n" + err.stack;
        console.log(errorMessage);

    });
