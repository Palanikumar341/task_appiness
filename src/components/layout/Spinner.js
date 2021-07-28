import React from 'react';
import spinner from '../../Assets/img/spinner.gif';



let Spinner = () => {
    return (
        <React.Fragment>
            <div>
                <img src={spinner} alt="" className="d-flex m-auto"/>
            </div>
        </React.Fragment>
    );
};
export default Spinner;