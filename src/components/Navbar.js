import React, { Component } from 'react'
import { motion } from 'framer-motion'

export class Navbar extends Component {
  render() {
    return (
      <motion.div className="flex w-full h-19 shadow-2xl z-[100] bg-slate-200">
        Navbar
      </motion.div>
    );
  }
}

export default Navbar