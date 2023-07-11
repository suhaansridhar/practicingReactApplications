import React from 'react';

function StopWatch(){
    const [seconds, setSeconds] = React.useState(0);
    const [flag, setFlag] = React.useState(false);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);

    React.useEffect(() => {
        if(seconds === 60){
            setMinutes(prevCount => prevCount + 1);
            setSeconds(0);
        }
        if(minutes===60){
            setHours(prevCount => prevCount + 1);
            setMinutes(0);
        }
        let interval;
        if(flag){
            interval = setInterval(() => { //mounting the state to the reference interval
                setSeconds(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => { //Unmounting of the reference. 
            clearInterval(interval);
        }
    }, [seconds, flag])

    function startFunction(){
        setFlag(true);
    }
    function stopFunction(){
        setFlag(false)
    }
    function resetFunction(){
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setFlag(false);
    }
    return(
        <div className="stopwatch--container">
            <div className="stopwatch--timers">
                <h3><span className='stopwatch--timers--hours'>{hours}</span>{hours > 1 ? "hrs": "hr"}</h3>
                <h3><span className='stopwatch--timers--minutes'>{minutes}</span>{minutes > 1 ? "mins" : "min"} </h3>
                <h3><span className='stopwatch--timers--seconds'>{seconds}</span>{seconds > 1? "secs" : "sec"} </h3>
            </div>
            <div className="stopwatch--timers--button">
                <button onClick={startFunction}>Start</button>
                <button onClick={stopFunction}>Stop</button>
                <button onClick={resetFunction}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;