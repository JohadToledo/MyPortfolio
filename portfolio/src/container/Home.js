import React from 'react'
import "../assets/css/style.css";


export default function Home() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h1>Hey! I am Johad</h1>
                <h2>
                    A <b className="underline">Web developer</b> building
                    <b className="underline">creative</b> things.
                </h2>
            </div>
        </div>
        <div className="row space ">
            <div className="col-md-6 offset-md-3">A Junior Web Developer, who is starting his journey so eagerly</div>
            <div className="button center mediumspace">
                <button type="" className="btn btn-lg"><a href="contact.html"><strong>Contact</strong></a></button>       
            </div> 
        </div>
  </div>
  )
}
