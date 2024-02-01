import { Title } from './components/Title';
import { CharactersCards } from './components/CharactersCards';

function App() {
    return (
        <div
            className="parallax-bg bg-fixed bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage:
                    'url(https://static.vecteezy.com/system/resources/thumbnails/021/413/707/original/space-background-animation-white-particles-overlay-stars-backdrop-video.jpg)',
            }}
        >
            <Title></Title>
            <CharactersCards />
        </div>
    );
}

export default App;
