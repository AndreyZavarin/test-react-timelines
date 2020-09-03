import React, {Component} from 'react';
import Timeline from 'react-timelines';
import 'react-timelines/lib/css/style.css';
import './app.css';
import {buildTimebar, parseDataTracks} from './builders';

const MIN_ZOOM = 2;
const MAX_ZOOM = 20;

const timebar = buildTimebar();

export default class ReactTimelines extends Component {
    constructor(props) {
        super(props);
        const tracksById = parseDataTracks(this.props.tracks);

        this.state = {
            open: false,
            zoom: 2,
            tracksById,
            tracks: Object.values(tracksById),
        }
    }

    handleToggleOpen = () => {
        this.setState(({open}) => ({open: !open}));
    }

    handleZoomIn = () => {
        this.setState(({zoom}) => ({zoom: Math.min(zoom + 1, MAX_ZOOM)}));
    }

    handleZoomOut = () => {
        this.setState(({zoom}) => ({zoom: Math.max(zoom - 1, MIN_ZOOM)}));
    }

    handleToggleTrackOpen = track => {
        this.setState(state => {
            const tracksById = {
                ...state.tracksById,
                [track.id]: {
                    ...track,
                    isOpen: !track.isOpen,
                },
            };

            return {
                tracksById,
                tracks: Object.values(tracksById),
            }
        })
    }

    render() {
        const {open, tracks} = this.state;
        const {scale} = this.props;
        const objScale = {
            start: new Date(scale.start),
            end: new Date(scale.end),
            zoom: scale.zoom,
            zoomMin: scale.zoomMin,
            zoomMax: scale.zoomMax,
        };

        return <div className="time-line-wrapper">
            <Timeline
            scale={objScale}
            isOpen={open}
            toggleOpen={this.handleToggleOpen}
            zoomIn={this.handleZoomIn}
            zoomOut={this.handleZoomOut}
            clickElement={this.props.clickElement}
            clickTrackButton={track => {
                alert(JSON.stringify(track))
            }}
            timebar={timebar}
            tracks={tracks}
            now={new Date(this.props.now)}
            toggleTrackOpen={this.handleToggleTrackOpen}
            enableSticky
            scrollToNow
        />
        </div>
    }
}
