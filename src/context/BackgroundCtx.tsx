import { createContext } from 'react'
import { ICurrentBackgroundCtx } from '../../types'

const CurrentBackgroundCtx = createContext<ICurrentBackgroundCtx | null>(null);

export default CurrentBackgroundCtx;