import { Entity, Property, PrimaryKey, OneToOne } from '@mikro-orm/core'
import Establishment from './Establishment'

export enum WeekDays {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export type HourInterval = {
  start: string
  end: string
}

export type Week = {
  [key in WeekDays]?: HourInterval
}

@Entity()
export default class Schedule {

  @PrimaryKey()
  public id: number

  @Property({ columnType: 'jsonb' })
  public definition: Week

  @OneToOne(() => Establishment, establishment => establishment.schedule, {
    owner: true,
    fieldName: 'establishment_id'
  })
  public establishment: Establishment
}