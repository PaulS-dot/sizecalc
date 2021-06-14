import React, { createContext, useState, useRef } from 'react'

export const CardContext = createContext()

const cards = ['Gender', 'Categories', 'Measures']
const cardsAmount = cards.length

const CardContextProvider = (props) => {
    const [currentCard, setCurrentCard] = useState('Gender')
    const currentCardIndex = useRef(0)
    // const [currentCardIndex, setCurrentCardIndex] = useState(0)

    const setCard = (isNext = true) => {
        const currentIndex = cards.indexOf(currentCard)
        const nextCardIndex = (isNext ? 1 : -1)+currentIndex
        currentCardIndex.current = nextCardIndex
        // if(nextCardIndex >= cardsAmount){
        //     console.log('go to dashboard');
        // } else
        setCurrentCard(cards[nextCardIndex])
    }

    const setNextCard = () => { setCard() }

    const setPrevCard = () => { setCard(false) }

    return (
        <CardContext.Provider value={
            {currentCard, currentCardIndex: currentCardIndex.current, setNextCard, setPrevCard}
        }>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider