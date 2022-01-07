import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  createElement,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import classes from './Button.module.scss'
import { ButtonProps } from './types'

type ButtonType = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      variant = '',
      color = '',
      href,
      target,
      flex,
      children,
      size = 'large',
      className,
      ...props
    },
    ref,
  ) => {
    const btnProps = {
      className: clsx(
        'button',
        className,
        classes.button,
        classes[size],
        classes[color],
        classes[variant],
        {
          [classes.flex]: flex,
        },
      ),
      ...(href && {
        href,
        target: target || '_blank',
      }),
      ...props,
    } as ButtonType

    const btnContent = (
      <>
        {children && (
         <span>{children}</span>
        )}
      </>
    )

    return createElement(
      href ? 'a' : 'button',
      { ...btnProps, ref },
      btnContent,
    )
  },
)

Button.displayName = 'Button'

export default Button
