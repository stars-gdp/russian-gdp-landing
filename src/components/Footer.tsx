import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <p>© {new Date().getFullYear()} b:hip. Все права защищены.</p>
        <small>
          Информация на сайте носит ознакомительный характер и не является медицинской рекомендацией. 
          Продукция, названия и товарные знаки могут отличаться в зависимости от региона.
        </small>
      </div>
    </footer>
  )
}
