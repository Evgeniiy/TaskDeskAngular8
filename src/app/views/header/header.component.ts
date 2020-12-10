import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SettingsDialogComponent } from '../../dialog/settings-dialog/settings-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IntroService } from '../../service/intro.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  categoryName: string;

  @Input()
  showStat: boolean;

  @Output()
  toggleStat = new EventEmitter<boolean>();

  @Output()
  toggleMenu = new EventEmitter();

  isMobile: boolean;

  constructor(
    private dialog: MatDialog,
    private introService: IntroService,
    deviceDetector: DeviceDetectorService
  ) {
    this.isMobile = deviceDetector.isMobile();
  }

  ngOnInit() {}

  onToggleStat(): void {
    this.toggleStat.emit(!this.showStat);
  }

  showSettings(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      autoFocus: false,
      width: '500px',
    });
  }

  showIntroHelp() {
    this.introService.startIntroJS(false);
  }

  onToggleMenu() {
    this.toggleMenu.emit();
  }
}
