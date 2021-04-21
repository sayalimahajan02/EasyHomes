import React from "react";
import Input from "react-validation/build/input";
import '../faq/faq.scss';
export default class faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filtered: [],
      showDiv: false,
      newquestion: '',
      newanswer: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.openNewFaq = this.openNewFaq.bind(this);
    this.onChangeOfQuestion = this.onChangeOfQuestion.bind(this);
    this.onChangeOfAnswer = this.onChangeOfAnswer.bind(this);
    this.addNewFaq = this.addNewFaq.bind(this);
    this.deleteFaq = this.deleteFaq.bind(this);


  }
  componentWillMount() {
    this.getData()
  }
  
  //get faq data
  getData() {
    const tmpArray = [];
    fetch('http://localhost:3000/faq/', {
      'Cache-Control': 'no-cache'
    })
      .then(response => response.json())
      .then(response => {
        for (let i = 0; i < response.length; i++) {
          tmpArray.push(response[i])
        }

        this.setState({
          users: tmpArray,
          filtered: tmpArray
        })

      })
      .catch(error => this.setState({ error }));
  }

  openNewFaq() {
    this.setState({
      showDiv: !this.state.showDiv
    })
  }

  onChangeOfQuestion(e) {
    this.setState({ newquestion: e.target.value });
  }
  onChangeOfAnswer(e) {
    this.setState({ newanswer: e.target.value });
  }

  deleteFaq(e) {


    const apiurl = "http://localhost:3000/faq/" + e.target.id;
    fetch(apiurl, {

      method: 'DELETE',

      headers: {

        Accept: 'application/json',

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({

        question: this.state.newquestion,
        answer: this.state.newanswer

      })
    })

    this.getData();
    window.location.reload();

  }

  //add new faq

  addNewFaq() {

    if (this.state.newquestion.trim() == "" || this.state.newanswer.trim() == "") {
      alert('Please enter Question and answer properly');
      return;
    }
    //actual post call
    const tempArray = [];
    const apiurl = "http://localhost:3000/faq";
    fetch(apiurl, {

      method: 'POST',

      headers: {

        Accept: 'application/json',

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({

        question: this.state.newquestion,
        answer: this.state.newanswer

      })
    })

    this.setState({
      showDiv: !this.state.showDiv
    })
    this.getData();
    window.location.reload();
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

  render() {
    return (
      <div className="faq-wrapper">
        <div>
          <input type="text" className="input" placeholder="Search..." onChange={this.handleChange} />
          <br></br><br></br>
          {localStorage.getItem('username') == "admin"
            ? <button onClick={this.openNewFaq}>Add more FAQs</button>
            : null}
          {this.state.showDiv ? <div className="border-div">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              name="question"
              value={this.state.newquestion}
              onChange={this.onChangeOfQuestion}
            />
            <br></br><br></br>
            <label htmlFor="answer">Answer</label>
            <input
              type="text"
              name="answer"
              value={this.state.newanswer}
              onChange={this.onChangeOfAnswer}
            />
            <br></br><br></br>
            <button onClick={this.addNewFaq}>Add new FAQ</button>
          </div> : null}
        </div>
        <br></br>
        <div className="QA">
          <p>Find answers to your questions here : </p>
          <div>

            <ul>
              {this.state.filtered.map(item => (
                <li key={item}>
                  <p className="bold">{item.question}
                    {localStorage.getItem('username') == "admin" ?
                      <button class="buttonClass" id={item._id} onClick={this.deleteFaq}>Delete</button> : null} </p>
                  <br></br>
                  <p>{item.answer}</p>
                  <br></br><br></br>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}