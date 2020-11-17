import React from 'react'
import tw, { styled, css } from 'twin.macro'

import { ButtonProps } from '../../types/ElementProps'

const Button = styled('button')<ButtonProps>`
    ${({ disabled }) => disabled && tw`bg-gray-500 text-gray-600`}

    ${({ btnBlue, theme }) =>
        btnBlue &&
        css`
            background: ${theme.colors.blue};
            color: ${theme.colors.white};
            &:hover {
                background: ${theme.colors.blue_1};
            }
        `}

    ${tw`h-12 cursor-pointer text-lg rounded text-center flex items-center justify-center font-medium tracking-widest px-4`}
`

const Component: React.FC<ButtonProps> = ({ btnBlue, disabled, children }) => {
    return (
        <Button btnBlue={btnBlue} disabled={disabled}>
            {children}
        </Button>
    )
}

export default Component
