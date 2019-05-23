import React from 'react';

export function Input(props) {
    return (
        <div className='form-group'>
            <input className='form-control' {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className='form-group'>
            <textarea className='form-control' rows='10' {...props}/>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button className='btn btn-light' style={{ float: 'right', marginBottom: 10 }} {...props}>
            {props.children}
        </button>
    );
}

export function Container(props) {
    return(
        <div className='container' style={{ width: '600px', paddingTop: '25px', textAlign: "center" }} {...props} />
    )
}