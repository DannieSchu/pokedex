import React, { Component } from 'react';

export default class Select extends Component {
    render() {
            return (
                <select name="type_1" onChange={this.props.handleChangeCallback}>
                    <option value="fire">Fire</option>
                    <option value="grass">Grass</option>
                    <option value="bug">Bug</option>
                    <option value="water">Water</option>
                    <option value="normal">Normal</option>
                </select>

            )
        }

    }
