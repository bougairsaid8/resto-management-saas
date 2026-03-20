import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const DiagramDonut = () => {
  // البيانات ديالنا
  const data = [
    { name: 'Food', value: 60, color: 'var(--color-success)' },
    { name: 'Drink', value: 30, color: 'var(--color-primary)' },
    { name: 'Others', value: 10, color: '#F59E0B' },
  ];

  return (
    <div className="bg-surface rounded-xl p-6 border border-border shadow-custom h-full flex flex-col">
      {/* العنوان */}
      <div className="mb-2">
        <h3 className="text-lg font-bold text-text tracking-tight">Best Categories</h3>
        <p className="text-xs text-text-secondary">Sales distribution for today</p>
      </div>
      
      {/* منطقة المبيان */}
      <div className="relative flex-1 flex items-center justify-center min-h-[240px]">
        
        {/* النص اللي في الوسط (حطيناه بوحدو باش يبقى تابث ونقي) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <span className="text-2xl font-black text-text leading-none">100%</span>
          <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-1">Total</span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="70%"   // باش تجي الدائرة رقيقة ونقية
              outerRadius="90%"
              paddingAngle={5}     // الفراغ بين الأطراف كيعطي منظر عصري
              dataKey="value"
              stroke="none"
              // إعدادات الحركة (Animation)
              isAnimationActive={true}
              animationBegin={200}
              animationDuration={1200}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  className="cursor-pointer outline-none transition-opacity hover:opacity-80"
                />
              ))}
            </Pie>
            
            {/* Tooltip بسيط كيبان ملي كدوز السوري */}
            <Tooltip 
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-text text-surface text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                      {`${payload[0].name}: ${payload[0].value}%`}
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* المفتاح (Legend) */}
      <div className="grid grid-cols-1 gap-2 mt-4 px-2">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-sm group cursor-default">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></span>
              <span className="font-medium text-text-secondary group-hover:text-text transition-colors">{item.name}</span>
            </div>
            <span className="font-bold text-text">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagramDonut;