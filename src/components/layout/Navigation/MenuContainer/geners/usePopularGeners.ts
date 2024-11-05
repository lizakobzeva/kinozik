import { useQuery } from '@tanstack/react-query'
import { GenreService } from 'services/genres.service'
import { IMenuItem } from '../menu.type'

export const usePopularGenres = () => {
	const queryData = useQuery({
		queryKey: ['popular genres menu'],
		queryFn: () => GenreService.getAll(),
		select: ({ data }) =>
			data
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: `genre/${genre.slug}`,
							title: genre.name,
						} as IMenuItem)
				)
				.splice(0, 4),
	})

	return queryData
}
