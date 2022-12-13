import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
        <div className='mt-lg-5 m-3'>

            <div className='blog'>
                <h3>
                    How does the private route work?
                </h3>
                <p>
                    Often times when building a web app, you'll need to protect certain routes in your application from users who don't have the proper authentication. Protected routes let us choose which routes users can visit based on whether they are logged in.
                </p>
            </div>
            <div className='blog'>
                <h3>
                    What Is Cors?
                </h3>
                <p>
                    Web browsers prevent unknown websites from accessing your application programming interfaces and services. This way, your server shares its resources only with clients that are on the same domain. However, there are situations where you want to lift this guard or get more fine-grained control over which websites access your server's resources. In such cases, you implement CORS (cross-origin resource sharing) on your server.
                </p>
            </div>
            <div className='blog'>
                <h3>
                    What is Node? How does it work?
                </h3>
                <p>
                    Whenever a client requests something from the client side of the application what happens is , the request is first sent to the server and then in that server some processing or calculations goes on for the validation of the client side request and after doing all such validation a response is sent to the client side. Basically for doing all such calculations and processing , this NodeJs framework of JavaScript is used.
                </p>
            </div>
            <div className='blog'>
                <h3>
                    Why are you using firebase?
                </h3>
                <p>
                    The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                </p>
            </div>
            <div className='blog'>
                <h3>
                    What other options do you have to implement authentication?
                </h3>
                <p>
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through app sign-in(google,github,facebook,tweeter etc..) cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
        </div>
    );
};

export default Blog;