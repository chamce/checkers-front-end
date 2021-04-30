import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  return (
    <>
      <div className='row text-center'>
        <div className='col'>
          <h1>Dashboard</h1>
          <Link to='/' type="button" className="btn btn-primary">Log Out</Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;