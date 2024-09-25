import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, MatMenuModule, MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent  {
  btnActive: number = 1;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  changeBtnActive(btnNumber: number) {
    this.btnActive = btnNumber;
  }
}
