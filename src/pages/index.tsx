import React from 'react'

import Button from '../components/elements/Button'

import HomeContainer from '../styles/pages/Home'

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <main>
                <h1>Next - Twin.Macro - Tailwind - Styled-components</h1>
                <Button btnBlue>Liked?</Button>
            </main>
        </HomeContainer>
    )
}

export default Home
