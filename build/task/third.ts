import path from 'path'
import { outMl, ml } from "../var/third"
import { getCode } from '../fun'
import { dbdq } from '../../public'



export async function buildThird(version: string, gn: string) {
  const len = dbdq.length
  for (let i = 0; i < len; i++) {
    await getCode(dbdq[i], path.resolve(ml, gn), version, outMl.map(it => path.resolve(it, gn)), 'third', { reName: 'hlyy' })
  }
}