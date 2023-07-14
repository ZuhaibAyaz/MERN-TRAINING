import React from 'react'

function Footer() {
  return (
    <div>
        <section >

<footer className="footer">
    <div className="container">

        <div className="about">
            <h3>About</h3>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </p>
        </div>


        <div className="f-links">
            <h3>Links</h3>
            <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Home</a></li>
            <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">About</a></li>
            <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Contact</a></li>
            <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Services</a></li>
            <li><ion-icon name="arrow-forward-outline"></ion-icon><a href="#">Reviews</a></li>
        </div>

        <div className="address"> 
            <h3>Have a Question?</h3>
            <address>
                <div>
                    <p>
                        <span><ion-icon name="location-outline"></ion-icon></span>
                        Lucknow,India
                    </p>
                </div>

                <div>
                    <p>
                        <span><ion-icon name="call-outline"></ion-icon></span>
                        <a href="">+91 9876543210</a>
                    </p>
                </div>

                <div>
                    <p>
                        <span><ion-icon name="mail-outline"></ion-icon></span>
                       <a href="">practice1@gmail.com</a>
                    </p>
                </div>
            </address>
        </div>
    </div>

</footer>



</section>
    </div>
  )
}

export default Footer