import '../style/CountContent.css'
import ProgressBar from  './ProgressBar'
const CountContent = (props) => {
  const { count, percentage } = props;
  return (
    <div className="count-content">
        <div className="count">${count}</div>
       <ProgressBar percentage={percentage}/>
    </div>
  )
}
export default CountContent;