import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

interface IHeaderProps {
  city?: string
}

function Header({city}: IHeaderProps) {
  return (
    <header className='header'>
      <MainHeader />
      <SubHeader city={city}/>
    </header>
  );
}

export default Header;
