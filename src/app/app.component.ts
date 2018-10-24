import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Fibonacci';
  fibNum = 10;
  result;
  choice = 'forloop';

  fibr(n: number): number {
    if (n <= 0) { return 0; }
    if (n === 1) { return 1; }
    return this.fibr(n - 1) + this.fibr(n - 2);
  }

  fib4(n: number) {
    let last = 0, current = 1, next = 1, i;
    if (n <= 0) {return 0; }
    for (i = 1; i < n; i++) {
      last = current;
      current = next;
      next = last + current;
    }
    return current;
  }

  onSubmit() {
    if (this.choice === 'recursive') {
      this.result = `fibonacci(${this.fibNum}) = ${this.fibr(this.fibNum)} (using recursive)`;
    } else {
      this.result = `fibonacci(${this.fibNum}) = ${this.fib4(this.fibNum)} (using for loop)`;
    }

  }
}
