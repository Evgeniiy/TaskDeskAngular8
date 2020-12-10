import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutDialogComponent } from '../../dialog/about/about-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: Date;
  developer = 'Tilha Evgeniy';
  siteName = 'Desk Task';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.year = new Date();
  }

  openAboutDialog() {
    this.dialog.open(AboutDialogComponent, {
      autoFocus: false,
      data: {
        dialogTitle: 'О программе',
        message: 'Данное приложение: "Доска задач" разработана на Angular 8',
      },
      width: '400px',
    });
  }
  prreventDefault(event) {
    event.PreventDefault();
  }
}
