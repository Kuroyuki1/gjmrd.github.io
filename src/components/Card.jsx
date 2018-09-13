import React, { Component } from 'react';

class Card extends Component {
  render() {

    const { name, link, label, logo, activity, comment } = this.props.card;
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-title">
            {name}
          </div>
          <div className="card-body">
            <div className="card-logo">
              <img src={logo} alt="" />
            </div>
            <div className="card-content">
              <div className="card-label">
                <a href={link}>{label}</a>
              </div>
              <div className="card-activity">
                {activity}
              </div>
              <div className="card-comment">
                {comment}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;