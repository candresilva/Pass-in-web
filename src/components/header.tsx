import nlwicon from '../assets/images/nlw-icon.svg';
import NavLink from '../components/navlink.js';

function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwicon} />
      <NavLink texto="Eventos" href="#" />
      <NavLink texto="Participantes" href="#" />
    </div>
  );
}

export default Header;
