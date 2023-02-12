import React from 'react'
import "./home.css"

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://twitter.com/AnshMinchekar" className="home__social-icon" target="_blank">
            <i class="uil uil-twitter-alt"></i>
        </a>

        <a href="https://www.lensfrens.xyz/anshminchekar.lens" className="home__social-icon" target="_blank">
            <i class="uil uil-pagelines"></i>
        </a>

        <a href="https://github.com/AnshMinchekar" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social