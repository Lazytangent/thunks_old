import { useDispatch, useSelector } from 'react-redux';
import { setRandomCard } from './store/card';
import { cards } from './cards.json';

function App() {
    const card = useSelector(({ card }) => card);
    const dispatch = useDispatch();

    const randInt = () => Math.floor(Math.random() * cards.length);

    return (
        <div className='main'>
            <h2>Pick a card, any card</h2>
            <img alt='random' src={card.image} />
            <button onClick={() => dispatch(setRandomCard(cards[randInt()]))}>
                Get Random Card
            </button>
        </div>
    );
}

export default App;
