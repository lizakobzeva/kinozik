import { IMenu } from './menu.type'
import style from './Menu.module.scss'
import MenuItem from './MenuItem'
import AuthItems from './auth/AuthItems'

const Menu = ({ menu }: { menu: IMenu }) => {
	return (
		<div className={style.menu}>
			<div className={style.heading}>{menu.title}</div>
			<ul className={style.ul}>
				{menu.items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{menu.title === 'General' && <AuthItems />}
			</ul>
		</div>
	)
}

export default Menu
