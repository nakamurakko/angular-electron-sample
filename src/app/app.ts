import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { GreetingApiService } from './services/greeting-api.service';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private greetingApiService = inject(GreetingApiService);

  protected readonly title = signal<string>('angular-electron-sample');

  public greetingTo = model<string>('Everyone');
  public greeting = signal<string>('');

  public onGreetingClick(): void {
    this.greeting.set('');

    this.greetingApiService.greeting(this.greetingTo())
      .subscribe(value => {
        this.greeting.set(value);
      });
  }

}
