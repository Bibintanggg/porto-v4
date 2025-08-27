import React from "react"

interface AvatarProps {
    id: number
    avatar?: React.ReactNode
    label?: string
}

interface AvatarGroup {
    items: AvatarProps[]
}

export default function AvatarIcon({ items }: AvatarGroup) {
    return (
        <div className="flex items-center">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`relative w-10 h-10 rounded-full border flex items-center justify-center bg-gray-800 
          text-white ${index !== 0 ? "-ml-3" : ""} group`}
                >
                    {item.avatar}
                    {item.label && (
                        <span
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 
              group-hover:opacity-100 transition bg-black/70 text-white text-xs px-2 py-1 
              rounded-md whitespace-nowrap pointer-events-none"
                        >
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}
