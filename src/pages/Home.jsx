import Beef from "../components/Beef";
import Veggie from "../components/Veggie";
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div>
        <Veggie/>
        <Beef/>
    </motion.div>
  )
}
