import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      path: './template/basics'
    },
    {
      text: 'Dynamics',
      path: './template/dynamics'
    },
    {
      text: 'Switches',
      path: './template/switches'
    }
  ];
  
  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      path: './reactive/basics'
    },
    {
      text: 'Dynamics',
      path: './reactive/dynamics'
    },
    {
      text: 'Switches',
      path: './reactive/switches'
    }
  ];

  authMenu: MenuItem[] = [
    {
      text: 'Register',
      path: './auth/register'
    },
    {
      text: 'Login',
      path: './auth/login'
    }
  ];


}
