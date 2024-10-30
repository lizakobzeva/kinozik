'use client'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGeners'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div className="mx-11 mb-6">Loading...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu
