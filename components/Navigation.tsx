import React from 'react'
import { Music } from 'lucide-react'
import { socialLinks } from '@/data'

interface NavigationProps {
  onMusicPlayerToggle: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onMusicPlayerToggle }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blue h-10 flex items-center justify-between px-4">
      {/* Menu Bar */}
      <div className="flex items-center space-x-4">
        <button className="button-3d px-3 py-1 text-xs pixel-text">File</button>
        <button className="button-3d px-3 py-1 text-xs pixel-text">Edit</button>
        <button className="button-3d px-3 py-1 text-xs pixel-text">View</button>
        <button className="button-3d px-3 py-1 text-xs pixel-text">Settings</button>
        <button 
          onClick={onMusicPlayerToggle}
          className="button-3d px-3 py-1 text-xs pixel-text blue-glow"
        >
          ♪ Player
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button-3d w-8 h-7 flex items-center justify-center hover:blue-glow transition-all"
            title={social.url}
          >
            <social.icon size={12} className="text-white" />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navigation