import React, { createContext, useState, useRef } from 'react'

export const CardContext = createContext()

const cards = ['Gender', 'Categories', 'Measures']

const CardContextProvider = (props) => {
    const [currentCard, setCurrentCard] = useState('Gender')
    const currentCardIndex = useRef(0)

    const cardsAmount = cards.length
    const setNextCard = () => {
        currentCardIndex.current = cards.indexOf(currentCard)
        const nextCardIndex = ++currentCardIndex.current
        if(nextCardIndex >= cardsAmount){
            console.log('go to dashboard');
        } else
            setCurrentCard(cards[nextCardIndex])
    }

    return (
        <CardContext.Provider value={
            {currentCard, currentCardIndex: currentCardIndex.current, setNextCard}
        }>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider