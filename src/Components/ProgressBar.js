import React from 'react';

function ProgressBar(){
    
    const [percent, setPercent] = React.useState(0);
    const percent_bar = {
        width: `${percent}%`,
        backgroundColor: "green"
    }
    return(
        <div className="progress--bar--container">
            <div className="progress--container">
                <input type="number" onChange={(e) => setPercent(e.target.value)} value={percent} name="percent" min={0} max={100}/>

                <div className="percent--bar--main--container">
                    <div style={percent_bar}>{percent}%</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;