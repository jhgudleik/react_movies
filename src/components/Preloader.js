import './Preloader.css';
import React from 'react';

class Preloader extends React.Component
{
    render()
    {
        return(
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        )
    }
}
export default Preloader;