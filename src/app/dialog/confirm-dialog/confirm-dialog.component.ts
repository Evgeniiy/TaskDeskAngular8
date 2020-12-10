import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})

// диалоговое окно подтверждения действия
export class ConfirmDialogComponent implements OnInit {
  dialogTitle: string;
  message: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { dialogTitle: string; message: string }
  ) {
    this.dialogTitle = data.dialogTitle;
    this.message = data.message;
  }

  ngOnInit() {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
