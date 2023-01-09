import React from "react";
import Media from "./Media";

const Contact = () => {
    return (
        <div className="ui raised very padded text container segment">
            <h3 className="ui header">
                Contact Me
            </h3>
            <p>Hello everyone here is my contact information.</p><br/>
            <Media/>
            <br/>
            <p>I generally only respond via email, I get too many vehicle warranty calls, 
                thus I stopped answering the calls that I don't recognize hehe.
            </p><br/>
        </div>
    )
}

export default Contact;