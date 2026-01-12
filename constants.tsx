
import { User, UserRole, Post, Story, Reel, Bot } from './types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'cybersam',
    email: 'sam@cyberbook.com',
    displayName: 'Sam Vercetti',
    bio: 'Architecting the future of social interaction.',
    profilePic: 'https://picsum.photos/seed/user1/200',
    coverPic: 'https://picsum.photos/seed/cover1/800/300',
    role: UserRole.PREMIUM,
    isVerified: true,
    isPremium: true,
    friends: ['2', '3'],
    followers: ['2', '3', '4'],
    following: ['2'],
    lastSeen: new Date().toISOString(),
    isOnline: true,
  },
  {
    id: '2',
    username: 'neon_dream',
    email: 'neon@cyberbook.com',
    displayName: 'Neon Dreamer',
    bio: 'Living in the digital vapor.',
    profilePic: 'https://picsum.photos/seed/user2/200',
    coverPic: 'https://picsum.photos/seed/cover2/800/300',
    role: UserRole.USER,
    isVerified: false,
    isPremium: false,
    friends: ['1'],
    followers: ['1'],
    following: ['1'],
    lastSeen: new Date().toISOString(),
    isOnline: false,
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    userId: '1',
    content: 'The dawn of CYBER BOOK is here. Welcome to the future. 🚀 #CyberBook #NextGen',
    media: [{ type: 'image', url: 'https://picsum.photos/seed/post1/600/400' }],
    likes: ['2'],
    comments: [],
    shares: 5,
    createdAt: new Date().toISOString(),
    visibility: 'public',
  },
  {
    id: 'p2',
    userId: '2',
    content: 'Just vibing in the meta-verse. Who is joining me tonight?',
    media: [{ type: 'image', url: 'https://picsum.photos/seed/post2/600/400' }],
    likes: ['1'],
    comments: [],
    shares: 2,
    createdAt: new Date().toISOString(),
    visibility: 'public',
  }
];

export const MOCK_STORIES: Story[] = [
  {
    id: 's1',
    userId: '1',
    mediaUrl: 'https://picsum.photos/seed/story1/400/700',
    mediaType: 'image',
    expiresAt: new Date(Date.now() + 86400000).toISOString(),
    createdAt: new Date().toISOString(),
    viewers: ['2']
  }
];

export const MOCK_REELS: Reel[] = [
  {
    id: 'r1',
    userId: '1',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    caption: 'Testing the new reels system! #smooth',
    likes: ['2'],
    comments: 12,
    createdAt: new Date().toISOString()
  }
];

export const MOCK_BOTS: Bot[] = [
  {
    id: 'b1',
    ownerId: '1',
    name: 'Cyber Assistant',
    username: 'assistant_bot',
    avatar: 'https://picsum.photos/seed/bot1/100',
    commands: [
      { command: '/help', response: 'I am here to help you navigate CYBER BOOK.' },
      { command: '/status', response: 'All systems are functional.' }
    ],
    isActive: true
  }
];
