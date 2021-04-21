import React from "react";
import { Bar } from 'react-chartjs-2';

export default class admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      city: [],
      count: [],

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
        for (var i = 0; i < response.length; i++) {
          if (response[i].seller && response[i].buyer) {
            tmpArray.push({
              property: response[i].propertyName,
              seller: response[i].seller.emailId.substring(0, response[i].seller.emailId.lastIndexOf('@'))
              , buyer: JSON.parse(response[i].buyer).emailId.substring(0, JSON.parse(response[i].buyer).emailId.lastIndexOf('@'))
              //,buyer : response[i].buyer.emailId.substring(0,response[i].buyer.emailId.lastIndexOf('@')) 
            })
          }
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
        label: 'Population',
        data: this.state.count,
        backgroundColor: ['rgbs(123,231,232,1)',
          'rgbs(232,123,231,1)',
          'rgbs(231,232,123,1)'
        ]

      }],

    }
    return (
      <div>

        <div>

          <ul>
            {this.state.properties.map(item => (
              <li key={item}>
                <p>Property Name : {item.property}</p>

                <p>Seller Name : {item.seller}</p>
                <p>Buyer Name : {item.buyer}</p>
              </li>
            ))}
          </ul>
        </div>

        <p>------- Some Statistics ------</p>
        <div>
          {/* <Bar
        data={this.state.chartData}
        // width={100}
        // height={50}
        options={{ maintainAspectRatio: false }}
        /> */}
          <Bar
            data={chartData}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
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
      </div>
    )
  }
}