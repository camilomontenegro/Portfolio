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
    const baseX = 100 + (index % 2) * 320
    const baseY = 150 + Math.floor(index / 2) * 280
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
      <div className="pt-8 p-4 relative z-10">
        <div className="text-center mb-8">
          <div className="window-border bg-white inline-block p-4 mb-4">
            <div className="window-titlebar mb-2">
              <span className="pixel-text text-xs">WELCOME.EXE</span>
              <div className="ml-auto flex space-x-1">
                <div className="w-3 h-3 bg-gray-400 button-3d"></div>
                <div className="w-3 h-3 bg-gray-400 button-3d"></div>
                <div className="w-3 h-3 bg-gray-400 button-3d"></div>
              </div>
            </div>
            <h1 className="pixel-text text-black text-lg mb-2">
              PORTFOLIO OS v1.0
            </h1>
            <p className="pixel-text text-black text-xs">Double-click windows to open • Use Player for music</p>
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
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-gray-300 border-t-2 border-gray-400 flex items-center px-2 z-50">
        <button className="button-3d mr-2 px-2">Start</button>
        <div className="flex-1"></div>
        <div className="pixel-text text-xs text-black">
          {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>
    </div>
  )
}

export default RetroPortfolio