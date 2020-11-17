import tw, { styled } from 'twin.macro'

const DefaultLayout = styled.div`
    background: #fbfbfb;
    font: 400 16px Roboto, sans-serif;
    ${tw`text-gray-700`}
    ${tw`h-screen flex flex-col items-center justify-center`}

    main {
        text-align: -webkit-center;
    }
`

export default DefaultLayout
