import classNames from 'classnames'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = ({ className, ...props }: SkeletonProps) => {
	return (
		<Skeleton
			baseColor="#1f2125"
			highlightColor="#292A2E"
			className={classNames('rounded-lg', className)}
			{...props}
		/>
	)
}

export default SkeletonLoader
