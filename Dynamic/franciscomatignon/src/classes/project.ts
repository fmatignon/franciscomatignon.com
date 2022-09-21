import { Client } from './Client'
import { Loc } from './Loc'

export interface Project { 
  "name": string,
  "clients": Client[],
  "year": number,
  "location": Loc,
  "text": string,
  "link": string,
  "images": string[]
}