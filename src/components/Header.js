import React from 'react';

class Header extends React.Component{
    render(){
        return (
          <header>
            <h1 className="logo">Weathernado</h1>
            <h3 className="tagline">[Should I worry?]</h3>
          </header>
        )
    }
}

export default Header;