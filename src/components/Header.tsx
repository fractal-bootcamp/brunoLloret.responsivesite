import React from "react"
import imageToAdd from "../images-website/nancy-p1-616x800-1.webp"

export default function Header() {

    return (

        <header>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <nav>
                <div>
                    <div className='m-10'>
                        <h2 className="color caret-black bg-white font-mono size-full text-center text-lg" >How much wood would a woodchuck chuck</h2>
                    </div>

                    <img className="m-auto flex w-16 md:w-32 lg:w-48" src={imageToAdd} alt='page of Nancy' />

                </div>
            </nav>
            <div className=''>
                <p className="m-10 font-mono size-full text-xs" >
                    I am Bruno — a writer, researcher, teacher, and into CS stuff.
                </p>
                <ul>
                    <div className=''>
                        <li>
                            <a href=''>
                                Current projects
                            </a>
                            {/* <li><a href='/EqualZero/'><EqualZero /></a></li>
                  <li><a href='/BabylonianTalmud/'><BabylonianTalmud /></a></li>
                  <li><a href='/TheNewestTestament/'><TheNewestTestament /></a></li>
                  <li><a href='LearningToLearn/'><LearningToLearn /></a></li> */}
                        </li>
                    </div>
                    <li>
                        <a>
                            You can find me on
                        </a>
                        <ul>
                            <a href='https://x.com/brunolloret'> X</a>
                        </ul>
                        <ul>
                            <a href='https://www.instagram.com/lloret.bruno/'>IG @lloret.bruno</a>
                        </ul>
                        <ul>
                            <a href='https://www.linkedin.com/in/bruno-lloret-b8793b289/'>LinkedIn </a>
                        </ul>
                        <ul>
                            <a href='https://www.youtube.com/channel/UCk7Np9w0LQDpKRNmyoPr9mQ'>YT</a>
                        </ul>
                    </li>

                    <li>
                        <a href=''>
                            More about me
                        </a>
                    </li>
                </ul>
            </div>
        </header>

    )


}