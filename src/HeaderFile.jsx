import React, {Component} from 'react';

class HeaderFile extends Component {
  render() {
  return (
    <div>
      <center>
        <img src="pics/t_welcome.gif" border="0" usemap="#toolbar" ismap/>
        <map name="toolbar">
          <area coords="15,20,89,38" shape="rect" href="contact/contact.html"/>
          <area coords="10,55,107,71" shape="rect" href="index.html"/>
          <area coords="108,55,208,71" shape="rect" href="about/about.html"/>
          <area coords="209,55,311,71" shape="rect" href="depsta/depsta.html"/>
          <area coords="312,55,412,71" shape="rect" href="kpeople/kpeople.html"/>
          <area coords="10,72,108,88" shape="rect" href="online/online.html"/>
          <area coords="109,72,208,88" shape="rect" href="services/services.html"/>
          <area coords="209,72,311,88" shape="rect" href="teares/teares.html"/>
          <area coords="312,72,412,88" shape="rect" href="coming/coming.html"/>
        </map>
      </center>
    </div>
    )
  }
}
export default HeaderFile;
