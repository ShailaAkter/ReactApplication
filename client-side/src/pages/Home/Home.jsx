import ContainerBox from "../../components/containers/ContainerBox"
import { motion, useScroll} from "framer-motion"
import { useAuth } from "../../hooks/auth";
import Hero from "./Hero";


const Home = () => 
{
  const {scrollYProgress} = useScroll();
  const [auth, setAuth] = useAuth();

  return (
    <ContainerBox title= "TIMEZEN - A Reliable Watch Store">
      <Hero/>
    </ContainerBox>
  )
}

export default Home