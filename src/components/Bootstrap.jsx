import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

class BootstrapComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        {

        }
    }

    render()
    {
        return (
            <div className="container-sm container-md container-lg container-xl container-xxl  border">
                <div className="row">
                    <div className="col border m-2 p-5 bg-info">
                        <div className="row">
                            <div className="col bg-warning m-2">col1</div>
                            <div className="col bg-warning m-2">col2</div>
                            <div className="col bg-warning m-2">col3</div>
                        </div>
                    </div>
                    <div className="col border m-2 p-5 bg-info">col2</div>
                    <div className="col border m-2 p-5 bg-info">col3</div>
                    <div className="col border m-2 p-5 bg-info">col4</div>
                    
                </div>
            </div>
        )
    }
}

export default BootstrapComponent