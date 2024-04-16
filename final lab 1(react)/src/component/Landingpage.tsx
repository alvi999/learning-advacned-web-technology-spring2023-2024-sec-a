
import React from 'react';
import Info from './Info';
 
const LandingPage: React.FC = () => {
    const info = ['Musaruf']
  return (
    <>
    <div>
        {
            info.map((item)=>(
              <Info key={item} name={item} id={1} email="ALVI@aiub.edu">        
                </Info>
            ))
        }
 
    </div>
      
      <nav style={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>Oneline Edu Platform
          
        </h1>
        <ul style={{
          listStyleType: 'none',
          display: 'flex',
          gap: '20px'
        }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      
      <section style={{
        backgroundImage: 'url(https://img.freepik.com/premium-photo/abstract-creative-background-using-your-project-ui-ux-design_155807-1085.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698537600&semt=ais)',  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Welcome to Oneline Edu Platform</h1>
        <p style={{ fontSize: '1.2em' }}>The best platform for online education.</p>
        <input type="text" placeholder="Enter your Name" style={{ padding: '10px', marginRight: '10px' }} />
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Get Started</button>
      </section>

      
      <section style={{
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <h2>What Our Students Say</h2>
        <p>"We are the Best " - Musaruf Hossain</p>
      </section>

    
      <footer style={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center'
      }}>
        <p>&copy; 2024 Oneline Edu Platform. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;
