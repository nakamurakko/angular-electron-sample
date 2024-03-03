import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { GreetingApiService } from './services/greeting-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = 'angular-electron-sample';

  public greetingTo: string = 'Everyone';
  public greeting: string = '';

  public constructor(private greetingApiService: GreetingApiService) { }

  public onGreetingClick(): void {
    this.greeting = '';

    this.greetingApiService.greeting(this.greetingTo)
      .subscribe(value => {
        this.greeting = value;
      });
  }

}
