import React, { useEffect, useRef } from 'react';
import { Chart, RadarController, LinearScale, Title, Tooltip } from 'chart.js/auto';

const TemperatureChart = ({ temperatures }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: temperatures.map((_, index) => `Hour ${index + 1}`),
          datasets: [{
            label: 'Temperature (°C)',
            data: temperatures,
            borderColor: ['red', 'yellow', 'green', 'blue', 'withe'],
            backgroundColor: ['red', 'blue', 'green', 'black', 'yellow',],
            borderWidth: 1,
            fill: false,
          }],
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [temperatures]);

  return <canvas ref={chartRef} />;
};

export default TemperatureChart;
