import React from 'react';
import { Link } from 'react-router-dom';

import '../css/error.css'

export default function Error(){
    return(
        <section className='error'>
            <div className="error__content">
                <span className='error__content__header'>
                    404
                </span>
                <p className="error__content__text">
                    Page not found
                </p>
                <Link className='error__content__link' to='/'>
                    <span className='error__content__button'>
                        Back to Home
                    </span>
                </Link>
            </div>
        </section>

    )
}