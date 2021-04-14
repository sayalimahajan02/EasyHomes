import React from "react";

export default class faq extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          users:[],
          filtered: []
      }
      this.handleChange = this.handleChange.bind(this);
      
    }
    componentWillMount(){
	this.getData()
}
getData(){
	const tmpArray = [];
	fetch('http://localhost:3000/faq/')
	 .then(response => response.json())
	.then(response => {
		for (var i = 0; i < response.length; i++) {
			tmpArray.push(response[i])
		}
	
		this.setState({
			users: tmpArray,
            filtered : tmpArray
		})

	})
	.catch(error => this.setState({ error }));
  }

  handleChange(e) {
    
let newList = [];

if (e.target.value !== "") {
  newList = this.state.users.filter(item => {
    const lc = item.question.toLowerCase();
    const filter = e.target.value.toLowerCase();
    return lc.includes(filter);
  });
} else {
  newList = this.state.users
}
this.setState({
  filtered: newList
});
}

  render(){
    return(
        <div>
            <div>
            <input type="text" className="input" placeholder="Search..." onChange={this.handleChange}/>
            </div>
            <div>
            <ul>
          {this.state.filtered.map(item => (
            <li key={item}>
    <p>Question : {item.question}</p>
      <p>Answer : {item.answer}</p>
            </li>
          ))}
        </ul>
        </div>
        </div>
    )
  }
}