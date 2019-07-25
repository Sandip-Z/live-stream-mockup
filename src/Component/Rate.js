import React from 'react'


const Rate = ()=>{
    return(
        <div>
            <div className="row">
                <div className="col s4 green">
                    <p>Go ahead! <span className="right">x%</span></p>
                </div>
                <div className="col s4 yellow">
                    <p>Slow please <span className="right">y%</span></p>
                </div>
                <div className="col s4 red">
                    <p>Stop please <span className="right">z%</span></p>
                </div>
            </div>
        </div>
    )
}

export default Rate