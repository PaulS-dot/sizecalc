import icons from './CategoriesIcons'
import { measuresFields } from './measuresFields'

const options = [
  {
    name: 'trousers',
    label: 'spodnie',
    iconPath: icons.trousers,
    fields: [measuresFields.LEG_LENGTH, measuresFields.WAIST_CIRCUMFERENCE],
  },
  { name: 'shirts', label: 'koszulki', iconPath: icons.shirt },
  { name: 'hoodies', label: 'bluzy', iconPath: icons.blouse },
]

export default options
