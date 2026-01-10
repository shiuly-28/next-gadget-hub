"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div>
      <div className="lg:hidden">
        <Button onClick={toggleMenu} variant={"outline"}>
          {
            isMenuOpen ? <IoMdClose size={24}/> : <IoMdMenu size={24} />
          }
          
        </Button>
       </div>
    </div>
  )
}

export default MobileMenu
