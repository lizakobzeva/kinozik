import { TypeMaterialIconName } from '../../shared/types/icons.types'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon = ({ name }: { name: TypeMaterialIconName }) => {
	const IconComponent = MaterialIcons[name]
	return IconComponent ? <IconComponent /> : <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
