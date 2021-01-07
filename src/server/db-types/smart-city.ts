// Automatically generated. Don't change this file manually.

export type SmartCityId = number & { __flavor?: 'smart_cities' }

export default interface SmartCity {
  /** Primary key. Index: smart_cities_pkey */
  id: SmartCityId

  data: string | null
}

export interface SmartCityInitializer {
  /** Primary key. Index: smart_cities_pkey */
  id: SmartCityId

  data?: string | null
}
