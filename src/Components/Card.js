import '../style/Card.css'
const Card = (props) => {
  const { title, content } = props;
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      {content}
    </div>
  )
}
export default Card;