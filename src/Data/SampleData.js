import { faChartLine, faUser, faCartPlus, faChartArea, faMessage, faBoxOpen, faExclamationCircle, faGear } from '@fortawesome/free-solid-svg-icons'

const Data = {
  menuList: [
    {
      icon: faChartLine,
      title: 'Dashboard'
    },
    {
      icon: faUser,
      title: 'Customers'
    },
    {
      icon: faCartPlus,
      title: 'Orders'
    },
    {
      icon: faBoxOpen,
      title: 'Products'
    },
    {
      icon: faChartArea,
      title: 'Analytics'
    },
    {
      icon: faMessage,
      title: 'Messages'
    },
    {
      icon: faExclamationCircle,
      title: 'Reports'
    },
    {
      icon: faGear,
      title: 'Settings'
    },
    
  ],
  dashboard: {
    chart: [
      {
        title: 'Total Orders',
        count: 25034,
        percentage: 44,
      },
      {
        title: 'Total Sales',
        count: 45034,
        percentage: 54,
      },
      {
        title: 'Total Revenue',
        count: 35034,
        percentage: 24,
      },
      {
        title: 'New Customers',
        count: 15400,
        percentage: 10,
      },
      
    ]
  }
}

export default Data;