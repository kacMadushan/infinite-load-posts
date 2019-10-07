import React from 'react';

const Wrapper = props => (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            {props.children}
        </div>
    </div>
);

export default Wrapper;