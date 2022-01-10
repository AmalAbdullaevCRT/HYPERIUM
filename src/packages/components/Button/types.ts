import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { TColor } from '../../types'

export type TVariant = 'filled'
export type Size = 'large' | 'medium' | 'small'
export type BorderType = 'full' | 'corners' | 'off'

export interface IButton
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'> {
  variant?: TVariant
  color?: TColor
  flex?: boolean
  size: Size
  border: BorderType
  backgroundColored?: boolean
}

type AnchorButtonProps = IButton & AnchorHTMLAttributes<HTMLAnchorElement>
type NativeButtonProps = IButton & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>
