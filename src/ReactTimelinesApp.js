import React, {Component} from 'react';
import {NUM_OF_YEARS, START_YEAR} from './constants';
import ReactTimelines from './ReactTimelines';
import {dataTrack} from './constants'

const MIN_ZOOM = 2;
const MAX_ZOOM = 20;
export default class ReactTimelinesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 2
        }
    }

    render() {
        const {zoom} = this.state;
        return (
            <div className="app-container">
                <h1 className="title">React Timelines</h1>
                <ReactTimelines
                    scale={{
                        start: '2020',
                        end: '2023',
                        zoom,
                        zoomMin: MIN_ZOOM,
                        zoomMax: MAX_ZOOM,
                    }}
                    clickElement={(element) => alert(`Clicked element\n${JSON.stringify(element, null, 2)}`)}
                    now={'01/01/2021'}
                    tracks={dataTrack}
                />
            </div>
        );
    }
}
