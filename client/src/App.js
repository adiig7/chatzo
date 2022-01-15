import './App.css';
import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { ChannelListContainer, ChannelContainer } from './components';
import Cookies from 'universal-cookie';

const apiKey = "yhj9qt7zvveb";

const client = StreamChat.getInstance(apiKey);
function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
