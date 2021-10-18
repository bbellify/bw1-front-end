// import React, { useEffect } from 'react';
import { useEffect } from 'react'
import Class from './class'

export default function Browse({classes, error, isLoading }) {
    useEffect(() => {
 //do a fetch here fetchClasses?
    }, [])

    return (
        <div className="browser-container">
          <div className="search-container">
            <div>dropdown1</div>
            <div>dropdown2</div>
            <div>dropdown3</div>
            <div>dropdown4</div>
            <div>dropdown5</div>
          </div>
          <section className="results">
            <div className="results-container">
              <div className="results-card-container">
                <div className="card-container">
                  {isLoading ? (<p>Loading Classes...</p>) 
                  : (classes.map((c) => {
                      return <Class key={c.id} details={c} />;
                    })
                  )}
                  {error ? <p>{error.message}</p> : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
    

    
