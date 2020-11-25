import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <div>
        {this.props.code === 1 && <img src="/Icons/babysitters.png" alt="babysitters"/>}
        {this.props.code === 2 && <img src="/Icons/pareja.png" alt="elderly"/>}
        {this.props.code === 3 && <img src="/Icons/health-service.png" alt="healt-service"/>}
        {this.props.code === 4 && <img src="/Icons/home-duties.png" alt="home-duties"/>}
        {this.props.code === 5 && <img src="/Icons/language-classes.png" alt="language-classes"/>}
        {this.props.code === 6 && <img src="/Icons/move.png" alt="move"/>}
        {this.props.code === 7 && <img src="/Icons/personal-trainer.png" alt="personal-trainer"/>}
        {this.props.code === 8 && <img src="/Icons/repairs.png" alt="repairs"/>}
        {this.props.code === 9 && <img src="/Icons/school-support.png" alt="school-support"/>}
        {this.props.code === 10 && <img src="/Icons/transport.png" alt="transport"/>}
        {this.props.code === 11 && <img src="/Icons/others.png" alt="others"/>}
      </div>
    );
  }
}
export default Icon;
