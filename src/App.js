import { useDispatch, useSelector } from 'react-redux';
import { getRandomCard } from './store/cards';

function App() {
    const cards = useSelector((state) => state.cards);
    const dispatch = useDispatch();

    return (
        <div className='main'>
            <h2>Pick a card, any card</h2>
            {cards.map((card) => (
                <img
                    alt='random'
                    src={
                        card.image ||
                        'https://deckofcardsapi.com/static/img/AH.png'
                    }
                />
            ))}

            <button onClick={() => dispatch(getRandomCard())}>
                Get Random Card
            </button>
        </div>
    );
}

export default App;
