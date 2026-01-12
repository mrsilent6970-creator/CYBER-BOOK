
export enum UserRole {
  USER = 'USER',
  VERIFIED = 'VERIFIED',
  PREMIUM = 'PREMIUM',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  bio: string;
  profilePic: string;
  coverPic: string;
  role: UserRole;
  isVerified: boolean;
  isPremium: boolean;
  friends: string[];
  followers: string[];
  following: string[];
  lastSeen: string;
  isOnline: boolean;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  media: {
    type: 'image' | 'video';
    url: string;
  }[];
  likes: string[];
  comments: Comment[];
  shares: number;
  createdAt: string;
  visibility: 'public' | 'friends' | 'private';
}

export interface Comment {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
}

export interface Story {
  id: string;
  userId: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  expiresAt: string;
  createdAt: string;
  viewers: string[];
}

export interface Reel {
  id: string;
  userId: string;
  videoUrl: string;
  caption: string;
  likes: string[];
  comments: number;
  createdAt: string;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  media?: string;
  type: 'text' | 'voice' | 'image' | 'video';
  status: 'sent' | 'delivered' | 'seen';
  createdAt: string;
}

export interface Bot {
  id: string;
  ownerId: string;
  name: string;
  username: string;
  avatar: string;
  commands: { command: string; response: string }[];
  isActive: boolean;
}
