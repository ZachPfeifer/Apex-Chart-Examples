import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class popchart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          height: 450,
          width: "100%",
          type: "bar",
          background: "#f4f4f4",
          foreColor: "#333"
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        series: [
          {
            name: "Population",
            data: [
              8550405,
              3971883,
              2720546,
              2296224,
              1567442,
              1563025,
              1469845,
              1394928,
              1300092,
              1026908
            ]
          }
        ],
        xaxis: {
          categories: [
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Philadelphia",
            "Phoenix",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"
          ]
        },
        fill: {
          colors: ["#F44336"]
        },
        dataLabels: {
          enabled: false
        },

        title: {
          text: "Largest US Cities By Population",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px"
          }
        }
      }

    }
  }

  //Button Onclick  
  Horizonal = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizonal: !this.state.option.plotOptions.bar.horizonal
          }
        }
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.Horizonal}>Change View</button>
      </React.Fragment>
    )
  }
}
