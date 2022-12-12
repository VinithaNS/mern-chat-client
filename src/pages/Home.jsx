import React from 'react'
import {Link} from 'react-router-dom'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-row">
          <div className="home-col">
            <h1>Chat with friends</h1>
            <p>Join a free online chat and find new friends around the world. It's 100% free chat and completely safe. Start free chatting now.</p>
            <Link to="/chat">
              <button>Get Started <ChatBubbleOutlinedIcon /> </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home
