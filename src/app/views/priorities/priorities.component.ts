import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority } from '../../model/Priority';
import { EditCategoryDialogComponent } from '../../dialog/edit-category-dialog/edit-category-dialog.component';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';
import { EditPriorityDialogComponent } from '../../dialog/edit-priority-dialog/edit-priority-dialog.component';
import { OperType } from '../../dialog/OperType';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css'],
})
export class PrioritiesComponent implements OnInit {
  static defaultColor = '#fff';

  @Output()
  deletePriority = new EventEmitter<Priority>();

  @Output()
  updatePriority = new EventEmitter<Priority>();

  @Output()
  addPriority = new EventEmitter<Priority>();

  @Input()
  priorities: [Priority];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  delete(priority: Priority): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Подтвердите действие',
        message: `Вы действительно хотите удалить категорию: "${priority.title}"? (задачам проставится значение 'Без приоритета')`,
      },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePriority.emit(priority);
      }
    });
  }

  onAddPriority(): void {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: ['', 'Добавление приоритета', OperType.ADD],
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newPriority = new Priority(
          null,
          result as string,
          PrioritiesComponent.defaultColor
        );
        this.addPriority.emit(newPriority);
      }
    });
  }

  onEditPriority(priority: Priority): void {
    const dialogRef = this.dialog.open(EditPriorityDialogComponent, {
      data: [priority.title, 'Редактирование приоритета', OperType.EDIT],
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.deletePriority.emit(priority);
        return;
      }

      if (result) {
        priority.title = result as string;
        this.updatePriority.emit(priority);
        return;
      }
    });
  }
}