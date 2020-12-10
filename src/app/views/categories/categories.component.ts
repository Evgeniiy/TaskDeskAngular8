import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';
import { Category } from '../../model/Category';
import { EditCategoryDialogComponent } from '../../dialog/edit-category-dialog/edit-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { OperType } from '../../dialog/OperType';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Input()
  selectedCategory: Category;

  categoryMap: Map<Category, number>;

  @Input()
  uncompletedTotal: number;

  @Output()
  selectCategory = new EventEmitter<Category>();

  @Output()
  deleteCategory = new EventEmitter<Category>();

  @Output()
  updateCategory = new EventEmitter<Category>();

  @Output()
  addCategory = new EventEmitter<string>();

  @Output()
  searchCategory = new EventEmitter<string>(); // передаем строку для поиска

  isMobile: boolean;

  indexMouseMove: number;
  searchCategoryTitle: string;
  isTablet: boolean;

  constructor(private dialog: MatDialog, deviceService: DeviceDetectorService) {
    this.isMobile = deviceService.isMobile();
    this.isTablet = deviceService.isTablet();
  }

  @Input('categoryMap')
  set setCategoryMap(categoryMap: Map<Category, number>) {
    this.categoryMap = categoryMap;
  }

  ngOnInit() {}

  showTasksByCategory(category: Category): void {
    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category;

    this.selectCategory.emit(this.selectedCategory);
  }

  showEditIcon(index: number): void {
    this.indexMouseMove = index;
  }

  openEditDialog(category: Category): void {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: [category.title, 'Редактирование категории', OperType.EDIT],
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.deleteCategory.emit(category);

        return;
      }

      if (result as string) {
        category.title = result as string;

        this.updateCategory.emit(category);
        return;
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: ['', 'Добавление категории', OperType.ADD],
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCategory.emit(result as string);
      }
    });
  }

  search(): void {
    if (this.searchCategoryTitle == null) {
      return;
    }
    this.searchCategory.emit(this.searchCategoryTitle);
  }
}
