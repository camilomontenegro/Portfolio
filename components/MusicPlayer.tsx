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
    <div className="fixed top-14 right-6 z-40 w-80 window-border bg-retro-blue-50 blue-glow">
      <div className="window-titlebar">
        <span className="pixel-text text-xs text-white">♪ RETRO PLAYER</span>
        <div className="ml-auto flex space-x-1">
          <button
            onClick={onClose}
            className="window-control-btn"
          >
            ×
          </button>
        </div>
      </div>
      
      <div className="p-4 window-content-blue">
        {/* CRT Screen showing music visualization */}
        <div className="crt-effect bg-black h-40 mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="retro-blue-text pixel-text text-xs absolute top-3 left-3">MUSIC.VIS</div>
          <div className="retro-blue-text text-center">
            <div className="pixel-text text-xs mb-2">♪ ♫ ♪ AUDIO VIS ♪ ♫ ♪</div>
            <div className="text-sm">████▓▓▓░░░██▓▓░</div>
            <div className="text-xs mt-2">FREQ: 44.1kHz • STEREO</div>
            <div className="text-xs text-retro-cyan">
              {isPlaying ? '🎵 PLAYING 🎵' : '⏸ PAUSED'}
            </div>
          </div>
        </div>
        
        {/* Track info card */}
        <div className="window-border bg-retro-blue-100 p-3 mb-4 border-retro-blue-400">
          <div className="pixel-text text-xs text-retro-blue-800 mb-1">NOW PLAYING:</div>
          <div className="pixel-text text-xs text-retro-blue-700">{musicTracks[currentTrack]}</div>
          <div className="pixel-text text-xs text-retro-cyan mt-1">TRACK {currentTrack + 1} / {musicTracks.length}</div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={onTogglePlay}
            className="button-3d w-16 h-12 flex items-center justify-center blue-glow"
          >
            <span className="pixel-text text-sm">{isPlaying ? '❚❚' : '▶'}</span>
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
          <span className="pixel-text text-xs text-retro-blue-800">VOL:</span>
          <div className="flex-1 bg-retro-blue-800 h-4 window-border">
            <div 
              className="h-full bg-retro-gradient transition-all duration-300"
              style={{ width: isPlaying ? '70%' : '40%' }}
            ></div>
          </div>
          <span className="pixel-text text-xs text-retro-blue-700">{isPlaying ? '70' : '40'}%</span>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer