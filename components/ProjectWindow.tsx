import React from 'react'
import { Play, Volume2 } from 'lucide-react'
import { Project, WindowPosition } from '@/types'

interface ProjectWindowProps {
  project: Project
  position: WindowPosition
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent, projectId: number) => void
  onOpenProject: (url: string) => void
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({
  project,
  position,
  isDragging,
  onMouseDown,
  onOpenProject
}) => {
  return (
    <div
      className="absolute w-72 window-border bg-white cursor-move"
      style={{
        left: position.x,
        top: position.y,
        zIndex: isDragging ? 1000 : 100
      }}
      onMouseDown={(e) => onMouseDown(e, project.id)}
    >
      {/* Window Title Bar */}
      <div className="window-titlebar">
        <span className="pixel-text text-xs">{project.title.toUpperCase()}.EXE</span>
        <div className="ml-auto flex space-x-1">
          <div className="w-5 h-5 bg-gray-400 button-3d"></div>
          <div className="w-5 h-5 bg-gray-400 button-3d"></div>
          <div className="w-5 h-5 bg-gray-400 button-3d"></div>
        </div>
      </div>

      {/* Window Content */}
      <div className="window-content p-4">
        {/* Preview Screen - Isometric style */}
        <div className="bg-black window-border h-36 mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="text-white text-4xl transform scale-y-75 -skew-x-12">{project.preview}</div>
          <div className="absolute top-1 left-1 pixel-text text-green-400 text-xs">
            {project.title.toUpperCase()}.APP
          </div>
        </div>

        {/* Project Info */}
        <div className="mb-4">
          <div className="window-border bg-gray-100 p-3 mb-3">
            <div className="pixel-text text-xs text-black mb-1">DESCRIPTION:</div>
            <p className="pixel-text text-xs text-black">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, i) => (
              <div key={i} className="button-3d px-1 py-0">
                <span className="pixel-text text-xs">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="window-border bg-gray-100 p-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onOpenProject(project.url)}
              className="button-3d flex-1 py-1 px-3 flex items-center justify-center space-x-1"
            >
              <span className="pixel-text text-xs">▶</span>
              <span className="pixel-text text-xs">RUN</span>
            </button>
            <div className="button-3d w-9 h-9 ml-3 flex items-center justify-center">
              <span className="pixel-text text-xs">?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectWindow