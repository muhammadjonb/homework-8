import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar_logo">
            <img
              src="https://olcha.uz/_nuxt/logo-red.46354f18.png"
              alt="logo"
            />
          </div>
          <button className="navbar_katalog">
            <ion-icon name="menu-outline"></ion-icon>
            Katalog
          </button>
          <div className="navbar_search">
            <input type="text" placeholder="Katalog bo'ycha qidirish" />
            <button>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <div className="navbar_pages">
            <div className="navbar_pages_link">
              <ion-icon name="stats-chart"></ion-icon>
              <p>Taqqoslash</p>
            </div>
            <div className="navbar_pages_link">
              <ion-icon name="heart-outline"></ion-icon>
              <p>Sevimlilar</p>
            </div>
            <div className="navbar_pages_link">
              <ion-icon name="cart-outline"></ion-icon>
              <p>Savatcha</p>
            </div>
            <div className="navbar_pages_link">
              <ion-icon name="person-outline"></ion-icon>
              <p>Kirish</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header