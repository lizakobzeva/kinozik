'use client'
import GenreMenu from './geners/GenreMenu'
import Menu from './Menu'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer = () => {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<Menu menu={firstMenu} />
				<GenreMenu />
				<Menu menu={userMenu} />
			</div>
		</QueryClientProvider>
	)
}

export default MenuContainer
