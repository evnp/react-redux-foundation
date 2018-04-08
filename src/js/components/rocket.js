import React from 'react';

import PureRenderComponent from './pure_render';

import '../../style/components/rocket.styl';

export default class Rocket extends PureRenderComponent {
    render = () =>
        <div
         className="rocket-component"
         onClick={this.launch}
         style={{marginTop: -this.props.state.payload * 10}}>
            Payload: {this.props.state.payload}
        </div>

    launch = () => this.props.dispatch.launch(this.props.state.payload + 1)
}
