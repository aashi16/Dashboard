import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import '../style/Menubar.css'
import { useState } from 'react';
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons';

const Menubar = (props) => {
  const  { menulist, selectedItem } = props;
  const [activeItem, setActiveItem] = useState(true);
  const clickedItem = (item) => {
    selectedItem(item);
    setActiveItem(item)
  }
  return <div className='menubar'>
        <h1 className="logo">
        <FontAwesomeIcon icon={faPiedPiper}></FontAwesomeIcon>
        </h1>
    {menulist.map((item,index) => {
      return (
          <Link to={item.title} className={`menuitem ${activeItem === item.title ? 'active' : ''}`} key={index} onClick={()=> clickedItem(item.title)}>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.title}</span>
          </Link>
      )
    })}
  </div>
}
export default Menubar;