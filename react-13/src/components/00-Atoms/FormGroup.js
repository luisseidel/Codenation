import React from 'react';
import './FormGroup.css';

export function FormGroup(props) {
    return(
        <div className="form-group">{props.children}</div>
    );
}