import React from 'react'
import './Header.scss'
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.div whileHover={{ scale: 1.01 }}
    transition={{ type: "spring", stiffness: 800, damping: 10 }} className='header'>
        <motion.p  className='logo'>CARL HAMMARLING</motion.p>
        <p className='logo2'>FRONTEND DEVELOPER</p>
    </motion.div>
  )
}

export default Header