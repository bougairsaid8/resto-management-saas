import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function Diagram({ comparisonData }) {
  return (
   <div className="h-72 w-full mt-4  ">
    {/* زدنا className باش نحيدو الـ outline */}
    <ResponsiveContainer width="100%" height="100%" className="no-outline" >
        <LineChart 
        data={comparisonData} 
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
        <XAxis dataKey="day" stroke="var(--color-text-secondary)" fontSize={12} tickLine={false} axisLine={false} dy={10} />
        <YAxis stroke="var(--color-text-secondary)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
        
        {/* إعدادات النافذة (Tooltip) والخط العمودي بحال الصورة */}
        <Tooltip 
            cursor={{ stroke: 'var(--color-border)', strokeWidth: 1.5 }} // الخط العمودي الرمادي
            contentStyle={{ 
            backgroundColor: 'var(--color-surface)', 
            borderColor: 'var(--color-border)', 
            borderRadius: '12px', 
            boxShadow: 'var(--color-shadow-custom)',
            padding: '12px 16px',
            fontSize: '12px',
            }}
            labelStyle={{ fontWeight: 'normal', fontSize: '12px', color: 'var(--color-text)', marginBottom: '8px' }}
            itemStyle={{ fontWeight: '500', paddingBottom: '4px' }}
        />
        
        <Legend verticalAlign="top" align="right" iconType="line" wrapperStyle={{ paddingBottom: '10px', fontSize: '12px', fontWeight: '500' }} />

        {/* Last Week (أحمر، متقطع) */}
        <Line 
            name="Last Week" 
            type="monotone" 
            dataKey="last" 
            stroke="var(--color-primary)" // لون أحمر
            strokeWidth={2} 
            strokeDasharray="5 5" 
            dot={false} 
            activeDot={{ r: 5, fill: 'var(--color-primary)'}} // نقطة حمراء بإطار كحل
        />

        {/* This Week (أخضر، متصل) */}
        <Line 
            name="This Week" 
            type="monotone" 
            dataKey="current" 
            stroke="var(--color-success)" // لون أخضر
            strokeWidth={3} 
            dot={false} 
            activeDot={{ r: 6, fill: 'var(--color-success)' }} // نقطة خضراء بإطار كحل غليظ
        />
        </LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Diagram