import React, { Component } from 'react';
import Timeline from 'react-timelines';
import 'react-timelines/lib/css/style.css'
import {dataTrack } from './constants'
import {buildTimebar, parseDataTracks} from './builders'
const MIN_ZOOM = 2
const MAX_ZOOM = 20

const timebar = buildTimebar()

export default class ReactTimelines extends Component {
    constructor(props) {
        super(props);
        const tracksById = parseDataTracks(dataTrack);

        this.state = {
            open: false,
            zoom: 2,
            tracksById,
            tracks: Object.values(tracksById),
        }
    }

    handleToggleOpen = () => {
        this.setState(({ open }) => ({ open: !open }));
    }

    handleZoomIn = () => {
        this.setState(({ zoom }) => ({ zoom: Math.min(zoom + 1, MAX_ZOOM) }));
    }

    handleZoomOut = () => {
        this.setState(({ zoom }) => ({ zoom: Math.max(zoom - 1, MIN_ZOOM) }));
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
        const { open, tracks } = this.state;
        return (
            <div className="app-container">
                <h1 className="title">React Timelines</h1>
                <Timeline
                    scale = {this.props.scale}
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
                    now={this.props.now}
                    toggleTrackOpen={this.handleToggleTrackOpen}
                    enableSticky
                    scrollToNow
                />
            </div>
        );
    }
}
