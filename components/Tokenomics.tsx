import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', iq: 100, price: 0.00 },
  { name: 'Feb', iq: 85, price: 0.05 },
  { name: 'Mar', iq: 70, price: 0.20 },
  { name: 'Apr', iq: 50, price: 0.80 },
  { name: 'May', iq: 30, price: 5.00 },
  { name: 'Jun', iq: 10, price: 100.00 },
];

const Tokenomics: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 rounded-3xl border-4 border-learing-teal shadow-xl">
      <h2 className="text-3xl font-comic font-bold text-learing-brown mb-6 text-center">
        Stonks vs Spellign Ability
      </h2>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" stroke="#5C3A21" tick={{fontFamily: 'Comic Neue', fontSize: 14}} />
            <YAxis yAxisId="left" stroke="#A8C64E" label={{ value: 'Coin Price', angle: -90, position: 'insideLeft', fill: '#A8C64E' }} />
            <YAxis yAxisId="right" orientation="right" stroke="#FF6B6B" label={{ value: 'Avg IQ', angle: 90, position: 'insideRight', fill: '#FF6B6B' }} />
            <Tooltip 
              contentStyle={{ borderRadius: '10px', border: '2px solid #5C3A21', fontFamily: 'Comic Neue' }}
              itemStyle={{ fontWeight: 'bold' }}
            />
            <Line yAxisId="left" type="monotone" dataKey="price" stroke="#A8C64E" strokeWidth={4} name="$LEARING Price" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="iq" stroke="#FF6B6B" strokeWidth={4} name="Literacy Rate" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-learing-yellow/30 p-4 rounded-xl border-2 border-learing-brown text-center">
          <div className="text-2xl font-bold text-learing-brown">100 Trilion</div>
          <div className="font-comic text-gray-600">Total Suply</div>
        </div>
        <div className="bg-learing-yellow/30 p-4 rounded-xl border-2 border-learing-brown text-center">
          <div className="text-2xl font-bold text-learing-brown">0%</div>
          <div className="font-comic text-gray-600">Tax on Typos</div>
        </div>
        <div className="bg-learing-yellow/30 p-4 rounded-xl border-2 border-learing-brown text-center">
          <div className="text-2xl font-bold text-learing-brown">Elon</div>
          <div className="font-comic text-gray-600">Marketing CMO</div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;