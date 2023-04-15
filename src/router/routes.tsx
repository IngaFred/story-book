import React from 'react';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Home = lazy(() => import('../views/home'));
const Book = lazy(() => import('../views/books'));
const CharactersDetails = lazy(
	() => import('../views/characters/charactersDetails')
);
const CharactersSelection = lazy(
	() => import('../views/characters/charactersSelection')
);
const Chapters = lazy(() => import('../views/story/chapters'));
const Storyline = lazy(() => import('../views/story/storyline'));
const ItemBars = lazy(() => import('../views/item/itemBars'));
const ItemDetails = lazy(() => import('../views/item/itemDetails'));
const Chat = lazy(() => import('../views/chat'));

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/home" />,
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
		path: '/storyline',
		element: <Storyline />,
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
];

export default routes;
