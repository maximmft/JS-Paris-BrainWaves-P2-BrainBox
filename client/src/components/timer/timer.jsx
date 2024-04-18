import PropTypes from 'prop-types';


function Timer({time}){
    return (
        <div id="countdown">
            <h1>
                {time}
            </h1>
        </div>
    )
}


Timer.propTypes = {
    time: PropTypes.number.isRequired
};
export default Timer