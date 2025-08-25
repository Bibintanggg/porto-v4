import React from "react"

interface AvatarProps {
    id: number
    avatar?: React.ReactNode
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
                    className={`w-10 h-10 rounded-full border-1 flex items-center justify-center  bg-gray-800 text-white ${index !== 0 ? "-ml-3" : ""
                        }`}
                >
                    {item.avatar}
                </div>
            ))}
        </div>
    )
}