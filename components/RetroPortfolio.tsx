'use client'

import React, { useState, useRef, useEffect } from 'react'
import Navigation from './Navigation'
import MusicPlayer from './MusicPlayer'
import ProjectWindow from './ProjectWindow'
import { projects, musicTracks } from '@/data'
import { WindowPositions } from '@/types'

const RetroPortfolio: React.FC = () => {
  const [draggedWindow, setDraggedWindow] = useState<number | null>(null)
  const [windowPositions, setWindowPositions] = useState<WindowPositions>({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [showMusicPlayer, setShowMusicPlayer] = useState(false)
  
  const dragRef = useRef<{ startX: number; startY: number }>({ startX: 0, startY: 0 })

  const handleMouseDown = (e: React.MouseEvent, windowId: number) => {
    const target = e.target as HTMLElement
    if (target.closest('.window-content')) return
    
    setDraggedWindow(windowId)
    const rect = e.currentTarget.getBoundingClientRect()
    dragRef.current = {
      startX: e.clientX - rect.left,
      startY: e.clientY - rect.top,
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggedWindow) return
    
    const newX = e.clientX - dragRef.current.startX
    const newY = e.clientY - dragRef.current.startY
    
    setWindowPositions(prev => ({
      ...prev,
      [draggedWindow]: { x: newX, y: newY }
    }))
  }

  const handleMouseUp = () => {
    setDraggedWindow(null)
  }

  useEffect(() => {
    if (draggedWindow) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [draggedWindow])

  const getWindowPosition = (index: number) => {
    const baseX = 100 + index * 250
    const baseY = 150
    const position = windowPositions[projects[index].id]
    return position || { x: baseX, y: baseY }
  }

  const openProject = (url: string) => {
    window.open(url, '_blank')
  }

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % musicTracks.length)
  }

  const toggleMusicPlayer = () => {
    setShowMusicPlayer(!showMusicPlayer)
  }

  return (
    <div className="min-h-screen desktop-pattern relative overflow-hidden">
      <Navigation onMusicPlayerToggle={toggleMusicPlayer} />

      <MusicPlayer
        showMusicPlayer={showMusicPlayer}
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        onClose={() => setShowMusicPlayer(false)}
        onTogglePlay={toggleMusic}
        onNextTrack={nextTrack}
      />

      {/* Main Content */}
      <div className="pt-14 p-6 relative z-10">
        <div className="text-center mb-12">
          <div className="window-border bg-retro-blue-50 inline-block p-8 mb-6 blue-glow">
            <div className="window-titlebar mb-4">
              <span className="pixel-text text-xs text-white">WELCOME.EXE</span>
              <div className="ml-auto flex space-x-1">
                <div className="window-control-btn">_</div>
                <div className="window-control-btn">□</div>
                <div className="window-control-btn">×</div>
              </div>
            </div>
            <h1 className="pixel-text text-retro-blue-800 text-lg mb-4">
              PORTFOLIO OS v2.0
            </h1>
            <div className="retro-blue-text text-sm mb-2">█████████████████████</div>
            <p className="pixel-text text-retro-blue-700 text-xs">Double-click windows to open • Use ♪ Player for music</p>
          </div>
        </div>

        {/* Project Windows */}
        {projects.map((project, index) => (
          <ProjectWindow
            key={project.id}
            project={project}
            position={getWindowPosition(index)}
            isDragging={draggedWindow === project.id}
            onMouseDown={handleMouseDown}
            onOpenProject={openProject}
          />
        ))}
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-12 taskbar-blue flex items-center px-4 z-50">
        <button className="button-3d mr-4 px-4 py-1 blue-glow">
          <span className="pixel-text text-xs">⊞ Start</span>
        </button>
        <div className="flex-1 flex space-x-2">
          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} className="button-3d px-3 py-1">
              <span className="pixel-text text-xs">{project.title}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="window-border bg-retro-blue-900 px-3 py-1">
            <span className="pixel-text text-xs text-white">
              {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RetroPortfolio