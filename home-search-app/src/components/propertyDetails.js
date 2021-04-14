import React from 'react';
import './propertyDetails.scss';
import img1 from './images/property.jpeg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";


class propertyDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "propertyName":"",
            "propertyDesc":"",
            "propertyType":"",
            "propertySqftArea":"",
            "propertyPrice":0,
            "propertyStreet":"",
            "propertyCity":"",
            "propertyState":"",
            "propertyZipcode":0,
            "propertyBuildDate":"",
            "seller":[],
            "buyer":[],
            "data":[]
          }
        //   this.submitForm = this.submitForm.bind(this);
          this.handleChange = this.handleChange.bind(this);
        //   this.checkBox = this.checkBox.bind(this);
    }

 

    //to set state
    handleChange=(event,field)=>{ 
        this.setState({[field]:event.target.value})
      }

    // Form Submit Function
    // submitForm(e){
    //     e.preventDefault();
    //     this.getData();
    //     console.log(this.state)
    
    //     console.log("Form Saved");
    // }



    componentWillMount(){
      this.getData()
    }
    // Get Data 
    getData(){
      const tmpArray =[];
      fetch('http://localhost:3000/homeSearch/6071d5af87b776a16c935681')
      .then(response => response.json())
     .then(responseList => {
                this.setState({
                    data: responseList
                })
              console.log("hey  "+ this.state.data.propertyDesc)
            })
            .catch(error => {
                console.log("error:" + error)
            });
          }


    render(){
        return(
          
          <> 
          {/* <div class = "item-grid"> */}
            <div>
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={img1} className="sliderimg"/>
                    <img src={img1} className="sliderimg"/>
                    <img src={img1} className="sliderimg"/>
                    <img src={img1} className="sliderimg"/>

                </AliceCarousel>
              </div> 
              
              <div class = "prop-det">{this.state.data.propertyDesc}</div>
          {/* </div> */}
            
          </>
        )
    }
}

export default propertyDetails;
