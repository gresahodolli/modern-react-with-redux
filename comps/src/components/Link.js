import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    
    window.open(to, '_blank');
  };

  return (
    <a href={to} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Link;
