import React, {Component} from 'react';
import {NUM_OF_YEARS, START_YEAR} from './constants';
import ReactTimelines from './ReactTimelines';

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
        const { zoom } = this.state;
        const start = new Date(`${START_YEAR}`);
        const end = new Date(`${START_YEAR + NUM_OF_YEARS}`);
        return (
            <ReactTimelines
                scale={{
                    start,
                    end,
                    zoom,
                    zoomMin: MIN_ZOOM,
                    zoomMax: MAX_ZOOM,
                }}
                clickElement={(element) => alert(`Clicked element\n${JSON.stringify(element, null, 2)}`)}
                now={new Date('2021-01-01')}
                track={this.props.track}
            />
        );
    }
}
