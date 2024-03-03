import React from 'react'

const projects = [
    {
        "id": 1,
        "src": "/Projects/line follower robot.jpg",
        "title": "Line Following Robot",
        "description": "",
    },
    {
        "id": 2,
        "src": "/Projects/Robotic Arm.jpg",
        "title": "Robotic Arm",
        "description": "",
    },
    {
        "id": 3,
        "src": "/Projects/Smart House.jpg",
        "title": "Smart House",
        "description": "",
    }
]

function Project({ id }) {
    const project = projects.find(project => project.id === id); //black magic pog

    return (
        <img src={project.src} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    )
}

export default Project