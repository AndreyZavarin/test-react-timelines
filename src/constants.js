export const START_YEAR = 2020;
export const NUM_OF_YEARS = 3;
export const MONTH_NAMES = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
export const MONTHS_PER_YEAR = 12;
export const QUARTERS_PER_YEAR = 4;
export const MONTHS_PER_QUARTER = 3;
export const dataTrack = [{
    'id': '1',
    'title': 'task1',
    'elements': [{
        'title': 'elem1',
        'dateFrom': '02/08/2020',
        'dateTo': '04/08/2020',
        'color': '#ffb2b2',
        'backgroundColor': '#ffb2b2'
    }, {
        'title': 'elem2',
        'dateFrom': '07/08/2020',
        'dateTo': '12/08/2020',
        'color': '#ffb2b2',
        'backgroundColor': '#ffb2b2'
    }],
    'childs': [{
        'id': '1_1',
        'title': 'child task1',
        'elements': [{
            'title': 'elem3',
            'dateFrom': '03/08/2020',
            'dateTo': '11/02/2020',
            'color': '#ffb2b2',
            'backgroundColor': '#ffb2b2'
        }],
        'childs': []
    }]
}, {
    'id': '2',
    'title': 'task2',
    'elements': [{
        'title': 'elem4',
        'dateFrom': '03/08/2020',
        'dateTo': '11/02/2020',
        'color': '#ffb2b2',
        'backgroundColor': '#ffb2b2'
    }],
    'childs': []
}];
