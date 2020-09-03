import {
    START_YEAR,
    NUM_OF_YEARS,
    MONTH_NAMES,
    MONTHS_PER_YEAR,
    QUARTERS_PER_YEAR,
    MONTHS_PER_QUARTER
} from './constants'

import {addMonthsToYear, addMonthsToYearAsDate} from './utils'

export const buildQuarterCells = () => {
    const v = []
    for (let i = 0; i < QUARTERS_PER_YEAR * NUM_OF_YEARS; i += 1) {
        const quarter = (i % 4) + 1;
        const startMonth = i * MONTHS_PER_QUARTER;
        const s = addMonthsToYear(START_YEAR, startMonth);
        const e = addMonthsToYear(START_YEAR, startMonth + MONTHS_PER_QUARTER);
        v.push({
            id: `${s.year}-q${quarter}`,
            title: `${quarter} квартал ${s.year} г.`,
            start: new Date(`${s.year}-${s.month}-01`),
            end: new Date(`${e.year}-${e.month}-01`),
        })
    }
    return v
}

export const buildMonthCells = () => {
    const v = [];
    for (let i = 0; i < MONTHS_PER_YEAR * NUM_OF_YEARS; i += 1) {
        const startMonth = i;
        const start = addMonthsToYearAsDate(START_YEAR, startMonth);
        const end = addMonthsToYearAsDate(START_YEAR, startMonth + 1);
        v.push({
            id: `m${startMonth}`,
            title: MONTH_NAMES[i % 12],
            start,
            end,
        })
    }
    return v
}

// export const buildDaysCells = () => {
//     const v = [];
//     for (let i = 0; i < MONTHS_PER_YEAR * NUM_OF_YEARS; i += 1) {
//         const startMonth = i;
//         const start = addMonthsToYearAsDate(START_YEAR, startMonth);
//         const end = addMonthsToYearAsDate(START_YEAR, startMonth + 1);
//         v.push({
//             id: `m${startMonth}`,
//             title: MONTH_NAMES[i % 12],
//             start,
//             end,
//         })
//     }
//     return v
// }
export const buildTimebar = () => [
    {
        id: 'quarters',
        title: 'Кварталы',
        cells: buildQuarterCells(),
        style: {},
    },
    {
        id: 'months',
        title: 'Месяцы',
        cells: buildMonthCells(),
        useAsGrid: true,
        style: {},
    },
    // {
    //     id: 'days',
    //     title: 'Дни',
    //     cells: buildDaysCells(),
    //     useAsGrid: true,
    //     style: {},
    // },
]

export const parseDataTracks = dataTrack => {
    if(!dataTrack || dataTrack.length === 0) {
        return {}
    }
    let mapDataTrack = {};
    dataTrack.forEach(track => {
        mapDataTrack[track.id.toString()] = newBuildTrack(track);
    });
    if(Object.keys(mapDataTrack).length === 0) {
        return {}
    }
    return mapDataTrack;
}

export const newBuildTrack = track => {
    const tracks = track.childs.map((subtrack, idx) => newBuildSubtrack(track.id, idx + 1, subtrack));
    return {
        id: track.id,
        title: track.title,
        elements: newBuildElements(track.id, track.elements),
        tracks,
        isOpen: false,
    }
}

export const newBuildElements = (trackId, elements) => {
    return elements.map((el, idx) => {
        return newBuildElement(trackId, el, idx)
    })
}

export const newBuildElement = (trackId, el, idx) => {
    let start = new Date(el.dateFrom);
    let end = new Date(el.dateTo);

    return {
        id: `${trackId}-el-${idx}`,
        title: el.title,
        start: start,
        end: end,
        style: {
            backgroundColor: el.backgroundColor,
            color: el.color,
            borderRadius: '4px',
            boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
            textTransform: 'capitalize',
        },
    }
}

export const newBuildSubtrack = (trackId, subtrackId, subtrack) => ({
    id: subtrackId,
    title: subtrack.title,
    elements: newBuildElements(trackId, subtrack.elements),
})