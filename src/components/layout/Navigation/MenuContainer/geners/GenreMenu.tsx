'use client'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGeners'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={4} className="h-7 mb-5" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu
