import React from 'react'
import { Music } from 'lucide-react'
import { socialLinks } from '@/data'

interface NavigationProps {
  onMusicPlayerToggle: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onMusicPlayerToggle }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-300 border-b-2 border-gray-600 h-6 flex items-center justify-between px-2">
      {/* Menu Bar */}
      <div className="flex items-center space-x-4">
        <button className="button-3d px-2 py-0 text-xs pixel-text">File</button>
        <button className="button-3d px-2 py-0 text-xs pixel-text">Edit</button>
        <button className="button-3d px-2 py-0 text-xs pixel-text">View</button>
        <button className="button-3d px-2 py-0 text-xs pixel-text">Settings</button>
        <button 
          onClick={onMusicPlayerToggle}
          className="button-3d px-2 py-0 text-xs pixel-text"
        >
          Player
        </button>
      </div>
      
      <div className="flex items-center space-x-1">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button-3d w-6 h-4 flex items-center justify-center"
            title={social.url}
          >
            <social.icon size={8} className="text-black" />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navigation