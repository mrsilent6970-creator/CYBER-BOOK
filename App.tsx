
import React, { useState, useEffect } from 'react';
import { User, Post, Story, Reel, Bot } from './types';
import { MOCK_USERS, MOCK_POSTS, MOCK_STORIES, MOCK_REELS, MOCK_BOTS } from './constants';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import StoriesBar from './components/StoriesBar';
import ReelsView from './components/ReelsView';
import ChatWindow from './components/ChatWindow';
import ProfileView from './components/ProfileView';
import AuthView from './components/AuthView';
import BotDashboard from './components/BotDashboard';
import RightPanel from './components/RightPanel';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [stories, setStories] = useState<Story[]>(MOCK_STORIES);
  const [reels, setReels] = useState<Reel[]>(MOCK_REELS);
  const [bots, setBots] = useState<Bot[]>(MOCK_BOTS);
  const [activeTab, setActiveTab] = useState<'feed' | 'reels' | 'chat' | 'profile' | 'bots'>('feed');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Persistence simulation (JSON storage)
  useEffect(() => {
    const savedUser = localStorage.getItem('cyber_user');
    if (savedUser) setCurrentUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('cyber_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('cyber_user');
  };

  if (!currentUser) {
    return <AuthView onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0c]' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar 
        user={currentUser} 
        onLogout={handleLogout} 
        setActiveTab={setActiveTab} 
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <div className="max-w-[1440px] mx-auto pt-20 px-4 md:px-6 flex gap-6">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-72 sticky top-24 h-[calc(100vh-120px)]">
          <Sidebar user={currentUser} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 pb-10">
          {activeTab === 'feed' && (
            <div className="space-y-6">
              <StoriesBar stories={stories} users={MOCK_USERS} />
              <Feed posts={posts} users={MOCK_USERS} currentUser={currentUser} />
            </div>
          )}
          {activeTab === 'reels' && <ReelsView reels={reels} users={MOCK_USERS} />}
          {activeTab === 'chat' && <ChatWindow currentUser={currentUser} users={MOCK_USERS} bots={bots} />}
          {activeTab === 'profile' && <ProfileView user={currentUser} posts={posts.filter(p => p.userId === currentUser.id)} />}
          {activeTab === 'bots' && <BotDashboard currentUser={currentUser} bots={bots} onBotCreate={(b) => setBots([...bots, b])} />}
        </main>

        {/* Right Panel */}
        <div className="hidden xl:block w-80 sticky top-24 h-[calc(100vh-120px)]">
          <RightPanel users={MOCK_USERS} />
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 lg:hidden flex justify-around py-3 z-50">
        <button onClick={() => setActiveTab('feed')} className={activeTab === 'feed' ? 'neon-text' : 'text-gray-400'}><i className="fas fa-home text-xl"></i></button>
        <button onClick={() => setActiveTab('reels')} className={activeTab === 'reels' ? 'neon-text' : 'text-gray-400'}><i className="fas fa-play text-xl"></i></button>
        <button onClick={() => setActiveTab('chat')} className={activeTab === 'chat' ? 'neon-text' : 'text-gray-400'}><i className="fas fa-comment text-xl"></i></button>
        <button onClick={() => setActiveTab('bots')} className={activeTab === 'bots' ? 'neon-text' : 'text-gray-400'}><i className="fas fa-robot text-xl"></i></button>
        <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'neon-text' : 'text-gray-400'}><i className="fas fa-user text-xl"></i></button>
      </div>
    </div>
  );
};

export default App;
