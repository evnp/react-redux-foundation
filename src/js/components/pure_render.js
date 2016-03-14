import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class PureRenderComponent extends React.Component {
    shouldComponentUpdate = (props, state) => shallowCompare(this, props, state);
}
