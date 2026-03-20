import React from 'react';
import CardState from '../../components/CardState'
import Diagram from '../../components/Diagram'
import DiagramDonut from '../../components/DiagramDonut';

// icons
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";

// images
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';




const DashboardHome = () => {
  const trendingProducts = [
    { id: 1, name: 'Salmon Avocado Salad', orders: 124, price: '$18.50', image: p1 },
    { id: 2, name: 'Margherita Pizza', orders: 98, price: '$14.20', image: p2 },
    { id: 3, name: 'Double Beef Burger', orders: 82, price: '$16.00', image: p3 },
  ];

  const bestClients = [
    { id: 1, name: 'James Wilson', visits: 42, points: '2,450', avatar: 'JW' },
    { id: 2, name: 'Sarah Jenkins', visits: 38, points: '2,120', avatar: 'SJ' },
    { id: 3, name: 'Michael Chen', visits: 31, points: '1,850', avatar: 'MC' },
  ];

  const comparisonData = [
    { day: 'Mon', current: 4000, last: 3200 },
    { day: 'Tue', current: 3000, last: 3800 },
    { day: 'Wed', current: 5000, last: 4200 },
    { day: 'Thu', current: 2780, last: 3908 },
    { day: 'Fri', current: 6890, last: 4800 },
    { day: 'Sat', current: 7390, last: 6100 },
    { day: 'Sun', current: 8490, last: 7200 },
  ];

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header the page */}
      <div>
        <h1 className="text-2xl font-bold text-text">Dashboard Overview</h1>
        <p className="text-sm text-text-secondary mt-1">Welcome back! Here's a summary of today's performance.</p>
      </div>

      {/* State Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue) */}
        <CardState name="Revenue" icon={<GiTakeMyMoney className='h-full w-full'/>} value="$840.50" color="text-[#1FBD88]"/>
        
        {/* Orders*/}
        <CardState name="Orders" icon={<GiHotMeal className='h-full w-full'/>} value="350" color="text-[#F59F0A]"/>
        
        {/* Tables*/}
        <CardState name="Tables" icon={<MdOutlineTableRestaurant  className='h-full w-full'/>} value="12/16" color="text-[#EF4444]"/>

        {/* Customers*/}
        <CardState name="Customers" icon={<TbUsersGroup className='h-full w-full'/>} value="120" color="text-[#591513]"/>
      </div>

      {/* Diagrams */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface rounded-xl p-6 border border-border shadow-custom">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">Daily Sales</h3>
            <p className="text-xs text-text-secondary">Revenue performance over the last 7 days</p>
          </div>
          <Diagram comparisonData={comparisonData} />
        </div>
          <DiagramDonut/>
      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Trending Products */}
        <div className="bg-surface rounded-xl p-6 border border-border shadow-custom">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-text">Trending Products</h3>
            <a href="#" className="text-sm font-bold text-primary hover:text-primary-hover">View All</a>
          </div>
          <div className="space-y-4">
            {trendingProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-2 hover:bg-background rounded-lg transition-colors cursor-pointer border border-transparent hover:border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 p-0.5 rounded-lg bg-background border border-border flex items-center justify-center text-2xl shadow-sm">
                    <img src={product.image} className="w-full h-full object-cover rounded-lg" alt={product.name} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">{product.name}</h4>
                    <p className="text-xs text-text-secondary">Ordered {product.orders} times today</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{product.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best Clients */}
        <div className="bg-surface rounded-xl p-6 border border-border shadow-custom">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-text">Best Clients</h3>
            <a href="#" className="text-sm font-bold text-primary hover:text-primary-hover">View All</a>
          </div>
          <div className="space-y-4">
            {bestClients.map((client) => (
              <div key={client.id} className="flex items-center justify-between p-2 hover:bg-background rounded-lg transition-colors cursor-pointer border border-transparent hover:border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shadow-sm">
                    {client.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text">{client.name}</h4>
                    <p className="text-xs text-text-secondary">{client.visits} Visits</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{client.points} points</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default DashboardHome;