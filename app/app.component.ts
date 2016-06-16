import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    //template: '<h1>My second ng2 app</h1><h2>{{name}}</h2>'
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    name: string = 'David';

    sayHello() {
        this.name = "Hello from client";
    }
}
