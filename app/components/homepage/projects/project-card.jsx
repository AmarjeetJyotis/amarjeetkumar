// @flow strict
import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      
      {/* Top colored dots line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Top section: header and dots */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-white"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500"></div>
        </div>

        {/* Centered project name with GitHub link */}
        <div className="flex justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#16f2b3] text-base lg:text-xl hover:underline"
          >
            {project.name}
          </a>
        </div>
      </div>

      {/* Main content (code-style project info) */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {i < project.tools.length - 1 && <span className="text-gray-400">{`', '`}</span>}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"'],"}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-gray-400">{'};'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
