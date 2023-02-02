import { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';

function App() {
    const [catFact, setCatFact] = useState('');
    const [query, setQuery] = useState('');
    const [gif, setGif] = useState('');

    const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=FrY4lxSQNx8eNGBRnqpwIHd4dI7TMYZr&q=${query}&limit=1`;
    const catUrl = `https://catfact.ninja/fact`;

    const getCatFact = async () => {
        const response = await fetch(catUrl);
        const { fact } = await response.json();
        setCatFact(fact);
        setQuery(fact.split(' ').slice(0, 3).flat().join(' '));
    };

    const getGif = async () => {
        const response = await fetch(gifUrl);
        const { data } = await response.json();
        setGif(data[0].images.downsized.url);
    };

    useEffect(() => {
        getCatFact();
    }, []);

    useEffect(() => {
        getGif();
    }, [query]);

    return (
        <div className='text-center'>
            <h1>GifCat Test</h1>
            <div className='d-flex flex-row justify-content-center'>
                <div>
                    <img src={gif} />
                </div>
                <div className='d-flex align-items-center'>
                    <p>{catFact}</p>
                </div>
            </div>
            <button onClick={() => getCatFact()} className='btn btn-primary mt-2'>Next</button>
        </div>
    );
}

export default App;
