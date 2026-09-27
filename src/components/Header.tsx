function Header() {
  return (
    <header className="app-header">
      <a className="app-header__brand" href="/" aria-label="Vite React Starter home">
        Vite React Starter
      </a>
      <nav className="app-header__nav" aria-label="Primary navigation">
        <a href="https://vite.dev/" target="_blank" rel="noreferrer">
          Vite
        </a>
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          TypeScript
        </a>
      </nav>
    </header>
  )
}

export default Header
