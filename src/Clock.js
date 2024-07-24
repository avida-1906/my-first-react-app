export default function Clock({ time }) {
    let hours = time.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
        // document.getElementById('time').className = 'night';  //直接修改DOM是不行的
        className = 'night';
    } else {
        // document.getElementById('time').className = 'day';  //直接修改DOM是不行的
        className = 'day';
    }
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  