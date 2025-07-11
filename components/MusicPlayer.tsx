import React from 'react'
import { Play, Pause } from 'lucide-react'
import { musicTracks } from '@/data'

interface MusicPlayerProps {
  showMusicPlayer: boolean
  isPlaying: boolean
  currentTrack: number
  onClose: () => void
  onTogglePlay: () => void
  onNextTrack: () => void
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  showMusicPlayer,
  isPlaying,
  currentTrack,
  onClose,
  onTogglePlay,
  onNextTrack
}) => {
  if (!showMusicPlayer) return null

  return (
    <div className="fixed top-12 right-6 z-40 w-72 window-border bg-white">
      <div className="window-titlebar">
        <span className="pixel-text text-xs">♪ PLAYER</span>
        <div className="ml-auto flex space-x-1">
          <button
            onClick={onClose}
            className="w-5 h-5 bg-gray-400 button-3d flex items-center justify-center text-xs"
          >
            ×
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {/* CRT Screen showing beach scene */}
        <div className="crt-effect bg-black h-36 mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="text-green-400 pixel-text text-xs absolute top-3 left-3">BEACH.AVI</div>
          <div className="text-green-400 text-center">
            <div className="pixel-text text-xs mb-1">▓▓▓▓▓ LOADING ▓▓▓▓▓</div>
            <div className="text-xs">████████████</div>
            <div className="text-xs mt-1">320x240 • 16 colors</div>
          </div>
        </div>
        
        {/* Track info card */}
        <div className="window-border bg-white p-3 mb-4">
          <div className="pixel-text text-xs mb-1">NOW PLAYING:</div>
          <div className="pixel-text text-xs text-black">{musicTracks[currentTrack]}</div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <button
            onClick={onTogglePlay}
            className="button-3d w-18 h-12 flex items-center justify-center"
          >
            <span className="pixel-text text-xs">{isPlaying ? '❚❚' : '▶'}</span>
          </button>
          <button
            onClick={onNextTrack}
            className="button-3d w-12 h-12 flex items-center justify-center"
          >
            <span className="pixel-text text-xs">⏭</span>
          </button>
        </div>
        
        {/* Volume slider */}
        <div className="flex items-center space-x-3">
          <span className="pixel-text text-xs">VOL:</span>
          <div className="flex-1 bg-gray-400 h-3 border border-gray-600">
            <div 
              className="h-full bg-black transition-all duration-300"
              style={{ width: isPlaying ? '60%' : '30%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer