import React from 'react'
import { NavLink } from 'react-router-dom'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {FiYoutube} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='end-footer'>
        <span className='end-footer__copiryght'>&#64; Kenny Causo 2022</span>
        <ul className='end-footer__social'>
            <li className='end-footer__social-link'>
            <NavLink to=''><SiLinkedin className='end-footer__icon'/></NavLink>
            </li>
            <li className='end-footer__social-link'>
            <NavLink to=''><BsGithub className='end-footer__icon'/></NavLink>
            </li>
            <li className='end-footer__social-link'>
            <NavLink to=''><FiYoutube className='end-footer__icon'/></NavLink>
            </li>
        </ul>
    </footer>
  )
}

export default Footer