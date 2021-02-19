import { Button } from '../src/components/commons/Button'
import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer' 
import Text from '../src/components/foundations/Text'

const Home = () => {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Menu />

      <div>
        <Text 
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign={{
            xs: 'center',
            sm: 'left'
          }}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text 
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign={{
            xs: 'center',
            sm: 'left'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Text>
        
        <Button 
          variant="primary.main"
          display="block"
          margin={{
            xs: 'auto',
            sm: 'initial'
          }}
        >
          Cadastrar
        </Button>
      </div>

      <Footer />
    </div>
  )
}

export default Home