import React from 'react'
import Card from './Card'

class List extends React.Component{
    render() {

        let Cards = this.props.cards.map((card, i) => { 
            return <Card key={i} message={card.message} />
        })
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {Cards}
                </div>
            </section>
        )}
}

export default List;