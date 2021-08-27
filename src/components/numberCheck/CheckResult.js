import React from 'react';

export default class CheckResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (props.value == null) {
            return <></>;
        } else {
            return(
            <>
            </>
        )
        }  
    }
}
