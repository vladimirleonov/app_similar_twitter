import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

// class WhyAmI extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          years: 26
//       }
//       this.nextYears = this.nextYears.bind(this);
//    }
//    nextYears() {
//       this.setState(state => ({
//          years: ++state.years
//       }))                                                                
//    }
//    render () {
//       const { name, surname, link } = this.props;
//       const { years } = this.state;
//       return (
//          <>
//             <h1>my name is {name}, surname - {surname}, years = {years}</h1>
//             <a href={link}>my profile</a>
//             <button onClick = {this.nextYears}>++</button>
//          </>
//       )
//    }   
// }

// const App = () => {
//    return (
//       <>
//          <WhyAmI name="Ivan" surname="Valyev" link="https://www.youtube.com/" />
//          <WhyAmI name="Evgeniy" surname="Malcey" link="https://www.youtube.com/" />
//          <WhyAmI name = "Nikolay" surname = "Olha" link = "https://www.youtube.com/"/>
//       </>
//    )
// }

ReactDOM.render(<App/>, document.getElementById('root'));