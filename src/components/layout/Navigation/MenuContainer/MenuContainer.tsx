import GenreMenu from './geners/GenreMenu'
import Menu from './Menu'

import { firstMenu, userMenu } from './menu.data'

const MenuContainer = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
