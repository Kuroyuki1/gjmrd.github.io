import React, { Component } from 'react';
import Card from './Card';

class SocialBlock extends Component {
    render() {
        const social = this.props.social;
        const title = this.props.title;
        return (
            <div className="social">
                <h1>{title}</h1>
                <div className="row">
                    {social.map((card) => {
                        return <Card key={card.name} card={card} />;
                    })}
                </div>
            </div>
        )
    }
}

export default SocialBlock;