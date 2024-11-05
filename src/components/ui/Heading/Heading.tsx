import classNames from 'classnames'

interface HeadingProps {
	title: string
	className?: string
}
const Heading = ({ title, className }: HeadingProps) => {
	return (
		<h1 className={classNames('text-gray-300 font-semibold', className)}>
			{title}
		</h1>
	)
}

export default Heading
