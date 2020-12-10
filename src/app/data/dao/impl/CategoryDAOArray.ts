import { CategoryDAO } from '../interface/CategoryDAO';
import { TestData } from '../../TestData';
import { Category } from '../../../model/Category';
import { Observable, of } from 'rxjs';

export class CategoryDAOArray implements CategoryDAO {
  get(id: number): Observable<Category> {
    return of(TestData.categories.find(category => category.id === id));
  }

  getAll(): Observable<Category[]> {
    TestData.categories.sort((c1, c2) => c1.title.localeCompare(c2.title));
    return of(TestData.categories);
  }

  add(category: Category): Observable<Category> {
    if (category.id === null || category.id === 0) {
      category.id = this.getLastIdCategory();
    }

    TestData.categories.push(category);

    return of(category);
  }

  delete(id: number): Observable<Category> {
    TestData.tasks.forEach(task => {
      if (task.category && task.category.id === id) {
        task.category = null;
      }
    });

    const tmpCategory = TestData.categories.find(t => t.id === id);
    TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1);

    return of(tmpCategory);
  }

  update(category: Category): Observable<Category> {
    const tmpCategory = TestData.categories.find(t => t.id === category.id);
    TestData.categories.splice(
      TestData.categories.indexOf(tmpCategory),
      1,
      category
    );

    return of(tmpCategory);
  }

  getLastIdCategory(): number {
    return (
      Math.max.apply(
        Math,
        TestData.categories.map(c => c.id)
      ) + 1
    );
  }

  search(title: string): Observable<Category[]> {
    return of(
      TestData.categories
        .filter(cat => cat.title.toUpperCase().includes(title.toUpperCase()))
        .sort((c1, c2) => c1.title.localeCompare(c2.title))
    );
  }
}
