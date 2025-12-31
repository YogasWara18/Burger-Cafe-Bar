import React from 'react'
import './appBtn.css';

export default function AppBtn({name}: {name: string}) {

    const handleScrollTo = (section: string) => {
        
    }
  return (
    <a 
    className="app-btn scrollto d-none d-lg-flex" onClick={() => handleScrollTo('book-a-table')}
    >
        {name}
    </a>
  )
}
