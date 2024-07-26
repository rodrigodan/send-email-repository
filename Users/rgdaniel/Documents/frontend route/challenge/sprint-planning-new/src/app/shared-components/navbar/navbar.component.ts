import { Component, Input } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() menuItens: Array<any> = [];

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    console.log('ngAfterViewChecked');
  }

  //   https://www.alura.com.br/artigos/novidades-angular-17

  //   https://www.alura.com.br/artigos/novidades-angular-17

  //   https://www.interviewbit.com/technical-interview-questions/?text_search=Angular
}
