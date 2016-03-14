import React from 'react';

import PureRenderComponent from './pure_render';
import Rocket from './rocket';

import '../../styles/components/root.styl';

export default class Root extends PureRenderComponent {
    render = () =>
        <div className="root-component">
            <Rocket {...this.props} />
        </div>
}
