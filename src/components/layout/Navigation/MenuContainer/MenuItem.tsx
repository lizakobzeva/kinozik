'use client'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import Link from 'next/link'
import style from './Menu.module.scss'
import { IMenuItem } from './menu.type'
import MaterialIcon from '../../../ui/MaterialIcon'

const MenuItem = ({ item }: { item: IMenuItem }) => {
	const path = usePathname()
	return (
		<li className={cn({ [style.active]: path === item.link })}>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
