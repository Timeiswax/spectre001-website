import '../styles/app.css'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import BlogContext from './contexts/blogContextProvider'

const dirs = ['swipe-u','swipe-d','swipe-l','swipe-r']
//const dirs = ['swipe-l', 'swipe-r']
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const len = dirs.length
console.log(dirs[getRandomInt(len)])

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <TransitionGroup>
      <CSSTransition
      appear={true}
      key={router.pathname}
      timeout={1000}
      classNames={dirs[getRandomInt(len)]}
      >
        <BlogContext>
          <Component {...pageProps} />
        </BlogContext>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default MyApp
