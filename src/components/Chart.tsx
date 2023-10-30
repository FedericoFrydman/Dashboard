import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { uv: '4', name: 0 },
  { uv: '3', name: 4 },
  { uv: '2', name: 5 },
  { uv: '6', name: 6 },
  { uv: '8', name: 7 },
  { uv: '9', name: 8 },
  { uv: '10', name: 9 },
  { uv: '9', name: 10 },
  { uv: '10', name: 11 },
  { uv: '12', name: 12 },
  { uv: '12', name: 13 },
];

const CustomTooltip = () => {
  return (
    <div className="custom-tooltip">
      <p className="intro">12 new followers</p>
    </div>
  );
};
export default class Example extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#908bdb"
              fill="#908bdb"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
