let ClockTime = () => {

  let time = new Date();

  return <p className="lead">The Current Time in Bharat is : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
} 

export default ClockTime;