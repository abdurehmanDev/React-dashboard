import React from 'react';
import Container from 'react-bootstrap/Container';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Styles/chart.css';

const Chart = () => {
  const data = [
    { date: "7 Jun", value: 120 },
    { date: "8 Jun", value: 130 },
    { date: "9 Jun", value: 100 },
    { date: "10 Jun", value: 340 },
    { date: "11 Jun", value: 240 },
    { date: "12 Jun", value: 60 },
    { date: "13 Jun", value: 400 },
    { date: "14 Jun", value: 190 }
  ]

  return (

    <Container className='contains'>
      <div className='chart-header'>
        <header>
          <div className='row-header chart-head'>Appointments growth</div>
        </header>
      
          <select name="appointment" id="appoint" className='chart-select'>
            <option value="byDate">by days</option>
            <option value="byMonth">by months</option>
            <option value="byYear">by years</option>
          </select>
      
      </div>
      <div className=''>
        <div>
          <ResponsiveContainer width="100%" height={300} viewBox="8 0">
            <BarChart data={data} className="chart-style">
              <CartesianGrid strokeDasharray="2" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4ad9c2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

    </Container>

  )
}

export default Chart;