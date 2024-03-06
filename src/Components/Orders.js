import { BarChart } from '@mui/x-charts/BarChart';
import '../style/Orders.css'
const Orders = () => {
  const chartSetting = {
    xAxis: [
      {
        label: 'Orders (%)',
      },
    ],
    width: 800,
    height: 600,
  };
  const dataset = [
    {
      Clothing: 20,
      Footwears: 10,
      Accessories: 15,
      Electronic: 21,
      month: 'Jan',
    },
    {
      Clothing: 20,
      Footwears: 5,
      Accessories: 2,
      Electronic: 5,
      month: 'Feb',
    },
    {
      Clothing: 10,
      Footwears: 5,
      Accessories: 10,
      Electronic: 11,
      month: 'Mar',
    },
    {
      Clothing: 4,
      Footwears: 6,
      Accessories: 9,
      Electronic: 73,
      month: 'Apr',
    },
    {
      Clothing: 17,
      Footwears: 9,
      Accessories: 10,
      Electronic: 30,
      month: 'May',
    },
    {
      Clothing: 17,
      Footwears: 8,
      Accessories: 10,
      Electronic: 44,
      month: 'June',
    },
    {
      Clothing: 29,
      Footwears: 6,
      Accessories: 10,
      Electronic: 20,
      month: 'July',
    },
    {
      Clothing: 25,
      Footwears: 6,
      Accessories: 10,
      Electronic: 30,
      month: 'Aug',
    },
    {
      Clothing: 50,
      Footwears: 11,
      Accessories: 5,
      Electronic: 31,
      month: 'Sept',
    },
    {
      Clothing: 60,
      Footwears: 15,
      Accessories: 37,
      Electronic: 55,
      month: 'Oct',
    },
    {
      Clothing: 47,
      Footwears: 34,
      Accessories: 16,
      Electronic: 48,
      month: 'Nov',
    },
    {
      Clothing: 31,
      Footwears: 7,
      Accessories: 15,
      Electronic: 85,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value}%`;
  return(
    <div className="Orders">
      <div className='Orders-title'>Orders</div>
      <div className="Orders-chart">
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'Electronic', label: 'Electronic Orders', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
    </div>
    </div>
  )
}
export default Orders;