import "../styles/index.css";
import { motion } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }) {
  return (
  <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
    pageInitial:{
      opacity: 0,
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.2
      },
    }
  }}>
    <Component {...pageProps} />
  </motion.div>
  )
}