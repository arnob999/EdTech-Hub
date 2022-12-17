Live Website:

Server Side Repo:
https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-Buggy-ARNOB

Client Side Repo:
https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-Buggy-ARNOB



Steps:

1. I make a route,using React Router Dom
2. I create Main.js where i take Header & Footer as fixed element and Other children as outline
3. I Use Nested Children Here
4. I use a left side navbar
5. Here is a protected route
6. I install Firebase,React Hot Roast,Bootstrap etc..
7. I integrated my project with google,email password & Github sign in with firebase
8. I use navigation,loader for better user experience
9. I do commit after a certain amount of work had been done
10. I make a categorized course filtering option for customer
11. I make pdf download option in it
12. I use vercel for server side and firebase for client side hosting



<div className='d-flex justify-content-center flex-column'>
            <img className='imgDetailed my-5 mx-auto' src={pic} alt="" />

            <h2 className='my-4 mx-auto'>{title}</h2>

            <h4 className='my-4 mx-auto'>{intro}</h4>

            <p className='my-4 w-50 mx-auto'>{details}</p>

            <Link className='mx-auto w-50' to={`/checkout/${course_id}`}>
                <Button className='my-4 w-100' variant="primary">Get This Premium Course
                </Button>{' '}
            </Link>

        </div>





        import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import "./styles.css";
const ref = React.createRef();

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
