import '../style/ProgressBar.css'
const ProgressBar = (props) => {
  const { percentage } = props;
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{'--value':`${percentage}`}}></div>
  )
}
export default ProgressBar;