import React from 'react';
import { lazy } from 'react';
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
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const routes: RouteObject[] = [
	{
		path: '/',
		// element: <Navigate to="/home" />,
		element: React.createElement(Navigate, {to: '/home'}),
	},
	{
		path: '/home',
		// element: <Home />,
		element: React.createElement(Home),
	},
	{
		path: '/book',
		// element: <Book />,
		element: React.createElement(Book),
	},
	{
		path: '/charactersDetails',
		// element: <CharactersDetails />,
		element: React.createElement(CharactersDetails),
	},
	{
		path: '/charactersSelection',
		// element: <CharactersSelection />,
		element: React.createElement(CharactersSelection),
	},
	{
		path: '/chapters',
		// element: <Chapters />,
		element: React.createElement(Chapters),
	},
	{
		path: '/storyline',
		// element: <Storyline />,
		element: React.createElement(Storyline),
	},
	{
		path: '/itemBars',
		// element: <ItemBars />,
		element: React.createElement(ItemBars),
	},
	{
		path: '/itemDetails',
		// element: <ItemDetails />,
		element: React.createElement(ItemDetails),
	},
	{
		path: '/chat',
		// element: <Chat />,
		element: React.createElement(Chat),
	},
];

export default routes;
