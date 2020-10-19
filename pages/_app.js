import '../styles/app.css'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import BlogContext from './contexts/blogContextProvider'

const dirs1 = ['swipe-u','swipe-d']
const dirs2 = ['swipe-l','swipe-r']
const dirs = [dirs1, dirs2]
//const dirs = ['swipe-l', 'swipe-r']
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const len1 = dirs.length
const len2 = dirs1.length
const the_int = getRandomInt(len1)

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <TransitionGroup>
      <CSSTransition
      appear={true}
      key={router.pathname}
      timeout={1000}
      classNames={dirs[getRandomInt(the_int)][getRandomInt(len2)]}
      >
        <BlogContext>
          <Component {...pageProps} />
        </BlogContext>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default MyApp
