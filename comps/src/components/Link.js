import classNames from 'classnames'; 
import useNavigation from '../hooks/use-navigation';

function Link({ to, children }) {
  const { navigate } = useNavigation();

  const classes = classNames('text-blue-500')

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    
    window.open(to, '_blank');
  };

  return (
    <a className={classes} href={to} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Link;
