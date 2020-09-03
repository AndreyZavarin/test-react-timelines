import React, { Component } from 'react';
import Timeline from 'react-timelines';
import 'react-timelines/lib/css/style.css'

import { START_YEAR, NUM_OF_YEARS, NUM_OF_TRACKS, dataTrack } from './constants'


import {buildTimebar, buildTrack, parseDataTracks} from './builders'
const MIN_ZOOM = 2
const MAX_ZOOM = 20
const fill = n => {
    const arr = []
    for (let i = 0; i < n; i += 1) {
        arr.push(i)
    }
    return arr
}

// const clickElement = element => alert(`Clicked element\n${JSON.stringify(element, null, 2)}`)

// const now = new Date('2021-01-01')
const timebar = buildTimebar()

export default class ReactTimelines extends Component {
    constructor(props) {
        super(props)
        const tracksById = parseDataTracks(dataTrack)

        this.state = {
            open: false,
            zoom: 2,
            tracksById,
            tracks: Object.values(tracksById),
        }
    }

    handleToggleOpen = () => {
        this.setState(({ open }) => ({ open: !open }))
    }

    handleZoomIn = () => {
        this.setState(({ zoom }) => ({ zoom: Math.min(zoom + 1, MAX_ZOOM) }))
    }

    handleZoomOut = () => {
        this.setState(({ zoom }) => ({ zoom: Math.max(zoom - 1, MIN_ZOOM) }))
    }

    handleToggleTrackOpen = track => {
        this.setState(state => {
            const tracksById = {
                ...state.tracksById,
                [track.id]: {
                    ...track,
                    isOpen: !track.isOpen,
                },
            }

            return {
                tracksById,
                tracks: Object.values(tracksById),
            }
        })
    }

    render() {
        const { open, zoom, tracks } = this.state
        const start = new Date(`${START_YEAR}`)
        const end = new Date(`${START_YEAR + NUM_OF_YEARS}`)
        return (
            <div className="app-container">
                <h1 className="title">React Timelines</h1>
                <Timeline
                    scale={{
                        start,
                        end,
                        zoom,
                        zoomMin: MIN_ZOOM,
                        zoomMax: MAX_ZOOM,
                    }}
                    // scale = {this.props.scale}
                    isOpen={open}
                    toggleOpen={this.handleToggleOpen}
                    zoomIn={this.handleZoomIn}
                    zoomOut={this.handleZoomOut}
                    clickElement={this.props.clickElement}
                    clickTrackButton={track => {
                        console.log("clickTrackButton")
                        // eslint-disable-next-line no-alert
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
