export const START_YEAR = 2020
export const NUM_OF_YEARS = 3
export const MONTH_NAMES = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
export const MONTHS_PER_YEAR = 12
export const QUARTERS_PER_YEAR = 4
export const MONTHS_PER_QUARTER = 3
export const NUM_OF_MONTHS = NUM_OF_YEARS * MONTHS_PER_YEAR
export const MAX_TRACK_START_GAP = 4
export const MAX_ELEMENT_GAP = 8
export const MAX_MONTH_SPAN = 8
export const MIN_MONTH_SPAN = 2
export const NUM_OF_TRACKS = 20
export const MAX_NUM_OF_SUBTRACKS = 5
export const dataTrack = [{
    'id': '1',
    'title': 'task1',
    'elements': [{
        'title': 'elem1',
        'dateFrom': {
            'calendar': {
                'year': 2020,
                'month': 8,
                'dayOfMonth': 2,
                'hourOfDay': 15,
                'minute': 34,
                'second': 30
            }
        },
        'dateTo': {
            'calendar': {
                'year': 2020,
                'month': 8,
                'dayOfMonth': 4,
                'hourOfDay': 15,
                'minute': 34,
                'second': 30
            }
        },
        'color': '#ffb2b2',
        'backgroundColor': '#ffb2b2'
    }, {
        'title': 'elem2',
        'dateFrom': {
            'calendar': {
                'year': 2020,
                'month': 8,
                'dayOfMonth': 7,
                'hourOfDay': 15,
                'minute': 34,
                'second': 30
            }
        },
        'dateTo': {
            'calendar': {
                'year': 2020,
                'month': 8,
                'dayOfMonth': 22,
                'hourOfDay': 15,
                'minute': 34,
                'second': 30
            }
        },
        'color': '#ffb2b2',
        'backgroundColor': '#ffb2b2'
    }],
    'childs': [{
        'id': '1_1',
        'title': 'child task1',
        'elements': [{
            'title': 'elem3',
            'dateFrom': {
                'calendar': {
                    'year': 2020,
                    'month': 8,
                    'dayOfMonth': 3,
                    'hourOfDay': 15,
                    'minute': 34,
                    'second': 30
                }
            },
            'dateTo': {
                'calendar': {
                    'year': 2021,
                    'month': 2,
                    'dayOfMonth': 11,
                    'hourOfDay': 15,
                    'minute': 34,
                    'second': 30
                }
            },
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
        'dateFrom': {
            'calendar': {
                'year': 2020,
                'month': 8,
                'dayOfMonth': 3,
                'hourOfDay': 15,
                'minute': 34,
                'second': 30
            }
        },
        'dateTo': {
            'calendar': {
                'year': 2021,
                'month': 2,
                'dayOfMonth': 11,
                'hourOfDay': 15,
                'minute': 34,
                'second': 30
            }
        },
        'color': '#ffb2b2',
        'backgroundColor': '#ffb2b2'
    }],
    'childs': []
}]
