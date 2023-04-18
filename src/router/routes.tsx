import React from 'react';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Home = lazy(() => import('@/views/home'));
const Book = lazy(() => import('@/views/books'));
const CharactersDetails = lazy(
  () => import('@/views/characters/charactersDetails')
);
const CharactersSelection = lazy(
  () => import('@/views/characters/charactersSelection')
);
const Chapters = lazy(() => import('@/views/story/chapters'));
const StoryBack = lazy(() => import('@/views/story/storyBack'));
const ItemBars = lazy(() => import('@/views/item/itemBars'));
const ItemDetails = lazy(() => import('@/views/item/itemDetails'));
const Chat = lazy(() => import('@/views/chat'));
const Myself = lazy(() => import('@/views/myself'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/book" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/book',
    element: <Book />,
  },
  {
    path: 'charactersDetails',
    element: <CharactersDetails />,
  },
  {
    path: '/charactersSelection',
    element: <CharactersSelection />,
  },
  {
    path: '/chapters',
    element: <Chapters />,
  },
  {
    path: '/storyBack',
    element: <StoryBack />,
  },
  {
    path: '/itemBars',
    element: <ItemBars />,
  },
  {
    path: '/itemDetails',
    element: <ItemDetails />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/myself',
    element: <Myself />,
  },
];

export default routes;
