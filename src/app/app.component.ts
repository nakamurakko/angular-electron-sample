import { defer } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'angular-electron-sample';

  public greetingTo: string = 'Everyone';
  public greeting: string = '';

  public onGreetingClick(): void {
    defer(() => window.GreetingsAPI.greeting(this.greetingTo))
      .subscribe(value => {
        this.greeting = value;
      });
  }
}
