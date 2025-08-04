import React from 'react'

const stadiums = [
    "https://media.gettyimages.com/id/2155302964/photo/aerial-view-of-nassau-county-international-cricket-stadium-in-east-meadow-new-york.jpg?s=2048x2048&w=gi&k=20&c=FKakqHHVHn6KDYiHXLJTozzFcojthH7QPdSCq8DYVbs=",
    "https://media.gettyimages.com/id/2156215956/photo/india-v-ireland-icc-mens-t20-cricket-world-cup-west-indies-usa-2024.jpg?s=2048x2048&w=gi&k=20&c=MDMQaN5YrLSdDQBlPu2qui5Zt0WWSoKzb2rEyCt8nlw=",
    "https://media.gettyimages.com/id/2155898092/photo/sri-lanka-v-south-africa-icc-mens-t20-cricket-world-cup-west-indies-usa-2024.jpg?s=2048x2048&w=gi&k=20&c=s6pLjKmnzA7jmtZLcZZVbFOPcP_caAklzRkfK33xWPc="
]

const Showcase = () => {
    return (
        <div className="showcase-list">
            {stadiums.map((stadium) => (
                <div className="showcase-card" key={stadium}>
                    <img src={stadium} alt="Stadium" className="showcase-img" />
                </div>
            ))}
        </div>
    )
}

export default Showcase