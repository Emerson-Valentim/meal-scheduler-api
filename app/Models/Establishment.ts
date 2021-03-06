import { Collection, Entity, OneToMany, Property, PrimaryKey, OneToOne, Enum } from '@mikro-orm/core'
import Environment from './Environment'
import MenuItem from './MenuItem'
import Reservation from './Reservation'
import Schedule from './Schedule'
import User from './User'

export enum Segmentation {
  PUB = 'pub',
  RESTAURANT = 'restaurant',
  BAKERY = 'bakery',
  CANDY_STORE = 'candy_store',
  OTHERS = 'others'
}

@Entity()
export default class Establishment {

  @PrimaryKey()
  public id: number

  @Property()
  public name: string

  @Property()
  public description: string

  @Enum(() => Segmentation)
  public category: Segmentation

  @OneToOne({ mappedBy: 'establishment' })
  public schedule: Schedule

  @OneToOne({ mappedBy: 'establishment', entity: () => User })
  public user: User

  @OneToMany('MenuItem', 'establishment')
  public menu_items = new Collection<MenuItem>(this)

  @OneToMany('Environment', 'establishment')
  public environments = new Collection<Environment>(this)

  @OneToMany('Reservation', 'establishment')
  public reservations = new Collection<Reservation>(this)

}