import { Tour } from './tour'

export interface City {
  id: number
  name: string
  tours: Tour[]
}
