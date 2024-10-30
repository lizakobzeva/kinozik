import Link from 'next/link'
import Image from 'next/image'
import logoImage from 'assets/images/logo.svg'

const Logo = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image
				src={logoImage}
				width={50}
				height={50}
				alt="Online cinemf"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
