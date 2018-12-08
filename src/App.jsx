import React, {Component} from 'react';
import HeaderFile from './HeaderFile.jsx';
import MyBody from './MyBody.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
    <div>
      <HeaderFile />
      <MyBody />
      <Footer />
    </div>
    );
  }
}
export default App;
