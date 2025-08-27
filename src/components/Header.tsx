import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container navbar" role="navigation" aria-label="Основная навигация">
        <a className="logo" href="#top" aria-label="На главную">
          <span className="logo-badge">b:</span>
          <span>b:hip</span>
        </a>
        <nav className="nav-links" aria-label="Ссылки по разделам">
          <a href="#products">Продукция</a>
          <a href="#video">Видео</a>
        </nav>
      </div>
    </header>
  )
}
