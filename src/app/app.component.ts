import { Component } from '@angular/core';

import { GreetingApiService } from './services/greeting-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'angular-electron-sample';

  public greetingTo: string = 'Everyone';
  public greeting: string = '';

  public constructor(private greetingApiService: GreetingApiService) {
  }

  public onGreetingClick(): void {
    this.greetingApiService.greeting(this.greetingTo)
      .subscribe(value => {
        this.greeting = value;
      });
  }
}
