import React, { Component } from 'react';

class Description extends Component {
    render() {
        const { locale } = this.props;
        const descriptionRu = "Почти все имена/ники в карточках кликабельны, ссылки ведут непосредственно на профили.";
        const descriptionEn = "Almost all usernames in cards is clickable, links go to the profiles.";

        const desc = locale === "ru" ? descriptionRu : descriptionEn;
        return (
            <div className="panel panel-default">
                {desc}
            </div>
        )
    }
}

export default Description;