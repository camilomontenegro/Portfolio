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
        <span className="pixel-text text-xs text-white">{project.title.toUpperCase()}.EXE</span>
        <div className="ml-auto flex space-x-1">
          <div className="window-control-btn">_</div>
          <div className="window-control-btn">□</div>
          <div className="window-control-btn">×</div>
        </div>
      </div>

      {/* Window Content */}
      <div className="window-content p-4 window-content-blue">
        {/* Preview Screen - Isometric style */}
        <div className="bg-black window-border h-36 mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="retro-blue-text text-4xl transform scale-y-75 -skew-x-12">{project.preview}</div>
          <div className="absolute top-1 left-1 pixel-text retro-blue-text text-xs">
            {project.title.toUpperCase()}.APP
          </div>
          <div className="absolute bottom-1 right-1 text-retro-cyan text-xs">
            ████░░
          </div>
        </div>

        {/* Project Info */}
        <div className="mb-4">
          <div className="window-border bg-retro-blue-50 p-3 mb-3 border-retro-blue-400">
            <div className="pixel-text text-xs text-retro-blue-800 mb-1">DESCRIPTION:</div>
            <p className="pixel-text text-xs text-retro-blue-700">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, i) => (
              <div key={i} className="button-3d px-2 py-1">
                <span className="pixel-text text-xs">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="window-border bg-retro-blue-50 p-3 border-retro-blue-400">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onOpenProject(project.url)}
              className="button-3d flex-1 py-2 px-4 flex items-center justify-center space-x-2 blue-glow"
            >
              <span className="pixel-text text-xs">▶</span>
              <span className="pixel-text text-xs">RUN</span>
            </button>
            <div className="button-3d w-10 h-10 ml-3 flex items-center justify-center">
              <span className="pixel-text text-xs">?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectWindow