import { Container } from './components/styled/Container'
import { Scene } from './components/scene/Scene'
import { Navigation } from './components/navigation/Navigation'

export const App = () => {
    return (
        <Container style={{ height: window.innerHeight, width: '100%' }}>
            <Navigation />
            <Scene />
        </Container>
    )
}
