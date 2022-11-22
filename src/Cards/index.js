import React from 'react'
import culture from "../assets/culture.jpg"
import local from "../assets/local.jpg"
import cruise from "../assets/cruise.jpg"
import water from "../assets/water.jpg"
import clubbing from "../assets/clubbing.jpg"
import baga from "../assets/baga.jpg"


const Cards = () => {
  return (
    <>
      <h2 className="my-3">Visit Goa</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">

        <div class="col">
          <div class="card h-100">
            <h5 class="card-title">Cultural Exploration</h5>
            <img src={culture} class="card-img-top zoom" alt="..." />
            <div class="card-body">

              <p class="card-text">Goans have a particular fondness for performing arts. A beautiful blend of Indian and western dance forms, Goan dances include Fugdi, Dhalo, and the Kunbi that date back to the Portuguese era in Goa.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <h5 class="card-title">Local market visit  </h5>
            <img src={local} class="card-img-top zoom" alt="..." />
            <div class="card-body">

              <p class="card-text"> Goa is one of the top tourist destinations in India that is full of beaches, seafood, late night parties, and even places for shopping.

                You can have an amazing shopping experience across Goa as its flea market and other local shops offer you everything at reasonable price. So, if you are planning to travel Goa and wondering which place you should go for shopping,</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <h5 class="card-title">Mandovi River  cruise</h5>
            <img src={cruise} class="card-img-top zoom" alt="..." />
            <div class="card-body">

              <p class="card-text">The cruise trips are usually accompanied with Goan cultural activities like Music, Dance, etc. The activities also include tourists joining the dance at end of the program.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <h5 class="card-title">Water sports at Grand island </h5>
            <img src={water} class="card-img-top zoom" alt="..." />
            <div class="card-body">

              <p class="card-text">When the idea of a Goa trip comes to your mind involving the sea and beaches, you might be crazy about taking long walks, watching sunsets, laze around and read a book, and even enjoying the thrill of water sports. The adventurous feel of seawater activities will make you feel energized and bold throughout. </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <h5 class="card-title">Clubbing at Tito's lane</h5>
            <img src={clubbing} class="card-img-top zoom" alt="..." />
            <div class="card-body">

              <p class="card-text">Titos nightclub is one of the top things to do in Goa for most tourists. Located in Calangute, Tito's is one of the most famous nightclubs in Goa. Founded in 1971 by Tito Henry de Souza, the pub is synonymous with Goa's nightlife. The entire lane in Baga, where the pub is located is popularly called Tito lane.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <h5 class="card-title">A day at Baga Beach  </h5>
            <img src={baga} class="card-img-top zoom" alt="..." />
            <div class="card-body">

              <p class="card-text">Situated in North Goa, Baga Beach is bordered by Calangute and Anjuna Beaches. Watersports are the major attraction of Baga Beach. Parasailing, wakeboarding, windsurfing, kite surfing, jet skiing are some of the top watersports activities to enjoy in Baga Beach.</p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Cards