import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-about-dialog',
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.css'],
})
export class AboutDialogComponent implements OnInit {
  dialogTitle: string;
  message: string;

  constructor(
    private dialogRef: MatDialogRef<AboutDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: { dialogTitle: string; message: string }
  ) {
    this.dialogTitle = data.dialogTitle;
    this.message = data.message;
  }

  ngOnInit() {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
