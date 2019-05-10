import {Component} from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector("body").classList.add('front')
  }

  componentWillUnmount() {
    document.querySelector("body").classList.remove('front')
  }

  render() {
    return (
        <div>
          Home
        </div>
    )
  }
};

export default Home;
