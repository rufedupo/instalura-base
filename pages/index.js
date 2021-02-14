import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer' 

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
      <Footer />
    </div>
  )
}

export default Home