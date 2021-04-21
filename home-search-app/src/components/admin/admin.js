import React from "react";
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import './admin.scss';

export default class admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      city: [],
      count: [],
      soldPropCount: 0

    }
    this.getData = this.getData.bind(this);
    this.prepareDataForChart = this.prepareDataForChart.bind(this);

  }
  componentWillMount() {
    if (localStorage.getItem('username') != 'admin') {
      alert('You do not have permission to view this page');
      window.location.assign('/');
    }
    this.getData();
    this.prepareDataForChart();
  }

  prepareDataForChart() {
    const tmpArray = [];
    fetch('http://localhost:3000/homeSreachAggregation', {
      'Cache-Control': 'no-cache'
    })
      .then(response => response.json())
      .then(response => {
        const CityArr = [];
        const countArr = [];
        for (let i = 0; i < response.length; i++) {

          CityArr.push(response[i]._id);
          countArr.push(response[i].total);

        }

        this.setState({
          city: CityArr,
          count: countArr
        })

      })
  }

  uploadImage(e) {
    alert("uploaded");
  }
  getData() {
    const tmpArray = [];
    fetch('http://localhost:3000/homeSearch', {
      'Cache-Control': 'no-cache'
    })
      .then(response => response.json())
      .then(response => {
        for (let i = 0; i < response.length; i++) {
          if (response[i].seller) {
            this.setState({
              tmpsell: response[i].seller.emailId.substring(0, response[i].seller.emailId.lastIndexOf('@'))
            })
          }
          if (response[i].buyer) {
            this.setState({
              tempbuy: JSON.parse(response[i].buyer).emailId.substring(0, JSON.parse(response[i].buyer).emailId.lastIndexOf('@'))
              , soldPropCount: this.state.soldPropCount + 1
            })
          }
          else {
            this.setState({
              tempbuy: ''
            })
          }
          tmpArray.push({
            property: response[i].propertyName,
            seller: this.state.tmpsell
            , buyer: this.state.tempbuy
            //,buyer : response[i].buyer.emailId.substring(0,response[i].buyer.emailId.lastIndexOf('@')) 
          })
        }

        this.setState({
          properties: tmpArray
        })

      })
      .catch(error => this.setState({ error }));
  }



  render() {

    //for chart
    const chartData = {
      labels: this.state.city,
      datasets: [{
        borderWidth: 1,
        space: 10,
        label: 'Number',
        data: this.state.count,
        backgroundColor: ['rgbs(123,231,232,1)',
          'rgbs(232,123,231,1)',
          'rgbs(231,232,123,1)'
        ]
      }],
    }

    //for pie 

    const soldPercentage = (100 * this.state.soldPropCount) / (this.state.properties.length);
    const options = {
      labels: [
        'Property Sold',
        'Property Not Sold'
      ],
      datasets: [{
        data: [
          soldPercentage, (100 - soldPercentage)],
        backgroundColor: [
          '#FF6384',
          '#36A2EB'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB'
        ]
      }]
    };
    return (
      <div>
        <p className="stats">Statistics of the Easy Homes Properties</p>
        <div className="bar">
          <Bar
            data={chartData}
            options={{
              title: {
                display: true,
                text: 'Total number of properties per city',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              },
              scales: {
                yAxes: [
                  {

                    display: true,
                    ticks: {
                      suggestedMin: 0
                    }
                  }
                ]
              }
            }}
          />
        </div>
        <div>
          <h2 className="pie">Total Properties Sold/Not Sold by Easy Homes</h2>
          <Doughnut data={options} />
        </div>
      </div>
    )
  }
}