import React from 'react';

export const TeamScreen = () => {
  return (
    <div className="team d-flex flex-column align-items-center">
      <h1 className="text-center">Your team</h1>
      <div className="card-group gap-5 col-10 mt-4">
        <div className="card rounded">
          <div className="card-img-top" style={{ width: '300px', height: '200px', background: '#212124' }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card rounded">
          <div className="card-img-top" style={{ width: '300px', height: '200px', background: '#212124' }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card rounded">
          <div className="card-img-top" style={{ width: '300px', height: '200px', background: '#212124' }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}
