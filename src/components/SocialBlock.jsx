import React, { Component } from 'react';
import Card from './Card';

class SocialBlock extends Component {
    render() {
        const { contacts, title } = this.props;
        return (
            <div className="social">
                <h1>{title}</h1>
                <div className="row">
                    {contacts.map((card) => {
                        return <Card key={card.name} card={card} />;
                    })}
                </div>
            </div>
        )
    }
}

export default SocialBlock;