
const Nav = ({ toggleMenu, showMenu }) => (
  <nav id="navbar" className={showMenu === 'active' ? 'bg-active' : ''}>
    <div className="nav-wrapper" style={{ position: 'relative' }}>
      <p className="brand">
        <span>Port</span>
        <strong>folio</strong>
      </p>
      <button
        className={`menu-button${showMenu === 'active' ? ' active' : ''}`}
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <span></span>
      </button>
    </div>
  </nav>
);

export default Nav;