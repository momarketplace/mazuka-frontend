import React, { useState } from 'react'
import './Catering.css'
//import bg from '../photos/special-background3.jpg';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Catering() {
  

  return (
    <div>
        <div className='catering'>
            <h3 className='catering-item'>Mazuka Catering Service</h3>
        <p className='catering-item'>Do not worry about food for your team. Mazuka is here for you.</p>
        <div className='catering-image-container'>
            <div>
                <img src="/images/catering/catering1.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/okro-soup1.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/tea-and-bread.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/catering3.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/catering5.jpg" alt="" />
            </div>
            <div>
                <img src="/images/catering/fried-rice1.jpg" alt="" />
            </div>
             <div>
                <img src="/images/catering/yam4.jpg" alt="" />
            </div> 
            <div><img src="/images/catering/catering2.jpg" alt="" /></div>
            {/* <div>
                 <img src="/images/catering/egg3.jpg" alt="" />
            </div> */}
        </div>
        </div>

        {/* mazuka estimator */}
        <div className='take-action'>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/catering/offshore2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          Onshore and Offshore
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We cater for your workers both onshore and offshore.
        </Typography>
        
      </CardContent>
    </Card>
            
            </div>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/catering/onshore1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          People on Board (POBs)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We provide a flexible catering service that suits the number of workers you have on board. Whether they are 10 people, 100 people, 500 people or 1000 people on board and above, Mazuka will provide their daily food supply.
        </Typography>
        
      </CardContent>
    </Card>
            </div>
            <div>
              <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt=""
        height="140"
        image="/images/catering/offshore1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          Location
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          Whether far or near, we are positioned to render services at any project site of our clients.
        </Typography>
        
      </CardContent>
    </Card>
            </div>
              
        </div>
    </div>
  )
}

export default Catering