import React, { Component } from 'react'

export default class ShapesMenu extends Component {
    render() {
        return (
            <div className = "shapes-menu">
                <label>Filter by shape: </label>
                <select name="shape" input="shapesInput" onChange={this.props.handleChange}>
                    <option value="all">All Types</option>
                    <option value="armor">Armor</option>
                    <option value="arms">Arms</option>
                    <option value="ball">Blob</option>
                    <option value="bug-wings">Bug Wings</option>
                    <option value="fish">Fish</option>
                    <option value="heads">Heads</option>
                    <option value="humanoid">Humanoid</option>
                    <option value="legs">Legs</option>
                    <option value="quadruped">Quadruped</option>
                    <option value="squiggle">Squiggle</option>
                    <option value="tentacles">Tentacles</option>
                    <option value="upright">Upright</option>
                    <option value="wings">Wings</option>
                </select>
            </div>
        )
    }
}
