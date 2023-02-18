
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Home() {
    const [trackImage, setTrackImage] = useState([])
    const [check, setCheck] = useState(true)
    
    
    useEffect(() =>{
        if(check) {
        setTrackImage(["catering-y1.jpeg","catering-y.jpeg", "houseboat.jpg", "laundry.jpg", "mazuka-ago.jpg","marine-consumables.jpg","catering-y2.jpeg"])
    }
    

    },[])

    

  return (
    <div style={{width:"100%"}}>
        
            <div className='carousal'>
                <div className='description'>
                <p>Mazuka Nigeria Limited is a Catering and Housekeeping company registered in Nigeria. Mazuka is also a leading support service company offering a broad range of services particularly marine logistics, chandelling, material sourcing, and procurement on request as well as supply of AGO and other marine equipment and consummables.</p>
            </div>
            <div className="carousal-content">
                <Carousel autoPlay>
            
            <div className='caro-div'>
                    <img src={`/images/${trackImage[0]}`} alt=""/>
                    <p>Catering Services</p>
                </div>
                <div className='caro-div'>
                    <img src={`/images/${trackImage[1]}`} alt=""/>
                    <p>Catering Services</p>
                </div>
                <div className='caro-div'>
                    <img src={`/images/${trackImage[2]}`} alt=""/>
                    <p>House boat leasing/support services</p>
                </div>
                
                <div className='caro-div'>
                    <img src={`/images/${trackImage[3]}`} alt=""/>
                    <p>House keeping Services</p>
                </div>
                <div className='caro-div'>
                    <img src={`/images/${trackImage[4]}`} alt=""/>
                    <p>Ago supplies</p>
                </div>
                <div className='caro-div'>
                    <img src={`/images/${trackImage[5]}`} alt=""/>
                    <p>Marine consumable</p>
                </div>
                <div className='caro-div'>
                    <img src={`/images/${trackImage[6]}`} alt=""/>
                    <p>Catering Services</p>
                </div>
                
            </Carousel>
            </div>
            
            
        </div>
        
          <div className='ourservices'>
            <h2>Check out our services below</h2>
            <div className='ourservice-container'>
                <div className='ourservice-div'>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/catering1.jpeg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
            Catering
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
            Our clients do not run out of groceries as we make provisions for between two to four weeks window for an uninterrupted operations in the event of disruption in supply runs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    {/* <h3>Catering</h3>
                    <img src="/images/catering1.jpeg" alt="" />
                    <p>Our clients do not run out of groceries as we make provisions for between two to four weeks window for an uninterrupted operations in the event of disruption in supply runs.</p> */}
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/housekeeping.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
           Housekeeping
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
            Our team is well positioned to cater for both national and expatriate workers to accomodate all shades of nationalities to make them feel at home while at work.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    {/* <h3>Housekeeping</h3>
                    <img src="/images/housekeeping.jpg" alt="" />
                    <p>Our team is well positioned to cater for both national and expatriate workers to accomodate all shades of nationalities to make them feel at home while at work.</p> */}
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/ship-chandlers.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
           chandelling
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
           Our clients expressed satisfaction with our services including but not limited to Wrightlinks Logistic Service Limited, Ocean Marine and Tankers Nigeria Limited, Dreging International Service (Nig,) and World Carrier Corporation. 

          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
                    {/* <h3>chandelling</h3>
                    <img src="/images/ship-chandlers.jpg" alt="" />
                    <p>Our clients expressed satisfaction with our services including but not limited to Wrightlinks Logistic Service Limited, Ocean Marine and Tankers Nigeria Limited, Dreging International Service (Nig,) and World Carrier Corporation. </p> */}

                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/marine-support.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
           Marine Support Service
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
            On request, we source and lease to our clients House boats, Sport barge, security boats etc
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
                    {/* <h3>Marine Support Service</h3>
                    <img src="/images/marine-support.jpg" alt="" />
                    <p>On request, we source and lease to our clients House boats, Sport barge, security boats etc</p> */}
                </div>
                
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="AGO"
        height="140"
        image="/images/mazuka-ago.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
          AGO (Diesel) supply
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", color:"#4a4a4a", textAlign:"justify"}}>
          We supply AGO to our numerous clients whenever they are needed.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
            
            </div>
        </div> 

        {/* experience will come in here */}
        <div className='experience-container'>
            <div className='experience'>
            <h2 style={{textAlign:"center"}}>Our Experince</h2>
            <p style={{textAlign:"center", fontSize:"14px", color:'#4a4a4a'}}>We have gained vast and unquantifiable experience in the industry. We are still in the business of satisfying our clients. Some of our clients include:</p>
            <div className='clients'>
                <div>
                    <img src="/images/chevron1.png" alt=""/>
                </div>
                <div>
                    <img src="/images/agip1.png" alt=""/>
                </div>
                <div>
                    <img src="/images/deme-logo.png" alt=""/>
                </div>
                <div>
                    <img src="/images/shell1.png" alt=""/>
                </div>
                <div>
                    <img src="/images/tecon-logo.png" alt=""/>
                </div>
                <div>
                    <img src="/images/nnpc-logo.png" alt=""/>
                </div>
                <div>
                    <img src="/images/zil-log.png" alt=""/>
                </div>
            </div>
        </div>
        <div className='policy'>
            <h2 style={{textAlign:"center"}}>Our HSE Policy</h2>
            <p>Our HSE policy forms an integral part of our business plan and it is central to our strategy for the future.</p> 
            <p>We recognize that great health safety and environmental practices contribute to great people delivering great services. Hence, our simple aim is to achieve good health, no harm to people, no damage to environment, no accident or work-related ill health, enhancement of the communities in which we work and continuous improvement beyound compliance.</p>
            <p>Everyone who works for or on behalf of Mazuka Nigeria Limited: staff, sub-contractor, supplier and visitor is responsible for ensuring that his or her actions is consistent with these aims. Getting HSE right is crucial to the well-being and warefare of our people and to the success of our business as well as that of our clients.</p>
            
        </div>
        </div> 
        
    </div>
    
  )
}

export default Home