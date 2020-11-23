import React, { Component } from 'react'


class Icon extends Component {
    render() {
        return (
            <div>
                {this.props.code===1 && <img src="/Icons/tratamiento-facial.png" />}
            </div>
        )
    }
}
export default Icon
