import React from 'react';

function Title({name}){
    return (
            <div className="row">
                <div className="col-12 mx-auto-my-5 text-title">
                    <h1 className="text-capitalize font-weight-bold">
                        {name}
                    </h1>
                </div>
                
            </div>
        );
}

export default Title;