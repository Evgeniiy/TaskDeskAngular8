// тестовые данные в виде массивов (заменяют таблицы БД)

import { Category } from '../model/Category';
import { Priority } from '../model/Priority';
import { Task } from '../model/Task';

export class TestData {
  static categories: Category[] = [
    { id: 1, title: 'Работа' },
    { id: 2, title: 'Семья' },
    { id: 3, title: 'Учеба' },
    { id: 4, title: 'Отдых' },
    { id: 5, title: 'Спорт' },
    { id: 6, title: 'Еда' },
    { id: 7, title: 'Финансы' },
    { id: 8, title: 'Гаджеты' },
    { id: 9, title: 'Здоровье' },
    { id: 10, title: 'Автомобиль' },
    { id: 11, title: 'Ремонт' },
  ];

  static priorities: Priority[] = [
    { id: 1, title: 'Низкий', color: '#e5e5e5' },
    { id: 2, title: 'Средний', color: '#85D1B2' },
    { id: 3, title: 'Высокий', color: '#F1828D' },
    { id: 4, title: 'Очень срочно!!', color: '#F1128D' },
  ];

  // не забывать - индексация приоритетов и категорий начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Заправить автомобиль',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2020-02-01'),
    },

    {
      id: 2,
      title: 'Залить  код на GitHub',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2020-02-10'),
    },

    {
      id: 3,
      title: 'Убраться  в квартире',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
    },

    {
      id: 4,
      title: 'Сходить в парк с семьей, пожарить шашлык',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2020-03-01'),
    },
    {
      id: 5,
      title: 'Разобраться с Redux',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[2],
    },
    {
      id: 6,
      title: 'Сходить на воркшоп js',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2020-02-07'),
    },

    {
      id: 7,
      title: 'Посмотреть билеты в Египет, выбрать отель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3],
    },
    {
      id: 8,
      title: 'Приготовить ужин для всей семьи (стэйк)',
      completed: false,
      category: TestData.categories[5],
    },
    {
      id: 9,
      title: 'Подтянуться 10 раз',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-03-12'),
    },
    {
      id: 10,
      title: 'Пробежать 1км',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[3],
    },

    {
      id: 11,
      title: 'Сходить в Мак',
      completed: false,
    },

    {
      id: 12,
      title: 'Сходить на семинар "Как работать с NgRx"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
    },
    {
      id: 13,
      title: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2020-02-04'),
    },

    {
      id: 14,
      title: 'Провести спринт ',
      completed: true,
      category: TestData.categories[0],
    },

    {
      id: 15,
      title: 'Закончить модуль корзины',
      priority: TestData.priorities[3],
      completed: true,
    },

    {
      id: 16,
      title: 'Положить 1000 грн на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[1],
    },

    {
      id: 17,
      title: 'Взять недельный отпуск',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6],
    },

    {
      id: 18,
      title: 'Сдать анализы, проверить гемоглобин',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-02-02'),
    },

    {
      id: 19,
      title: 'Сравнить новый айпад с самсунгом',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2020-02-06'),
    },

    {
      id: 20,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-03-01'),
    },
    {
      id: 21,
      title: 'code review',
      priority: TestData.priorities[3],
      completed: true,
      category: TestData.categories[0],
      date: new Date('2020-02-10'),
    },
    {
      id: 22,
      title: 'Купить зарядку на айфон',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2020-02-06'),
    },
    {
      id: 23,
      title: 'Поменять банковскую карту',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6],
    },
    {
      id: 24,
      title: 'Получить зарплату',
      priority: TestData.priorities[4],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2020-02-06'),
    },
  ];
}
