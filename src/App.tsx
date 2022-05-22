import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('Rick');
  const char2 = useCharacter('Paty');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
        char.moveLeft();
      break;

      case 'KeyW':
        char.moveUp();
      break;

      case 'KeyD':
        char.moveRight();
      break;

      case 'KeyS':
        char.moveDown();
      break;


      case 'ArrowLeft':
        char2.moveLeft();
      break;

      case 'ArrowUp':
        char2.moveUp();
      break;

      case 'ArrowRight':
        char2.moveRight();
      break;

      case 'ArrowDown':
        char2.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />

      </C.Map>
    </C.Container>
  );
}

export default App;