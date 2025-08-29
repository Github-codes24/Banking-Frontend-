import React, { useState } from "react";

const WelcomeSection = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo odit ea, sit, quae eum deleniti odio quo vero eos dolorem totam dignissimos ratione mollitia ducimus. Fugiat, adipisci? Quasi recusandae modi doloremque enim reprehenderit necessitatibus. Harum sint in sapiente fugit accusantium cumque nam ex! Beatae, iure officiis....";
  const fullText =
    "Quibusdam ab eligendi tempore est facilis itaque neque voluptate vitae exercitationem? Labore cum, odit eaque nisi quam sint! Nemo tenetur eius minus? Necessitatibus sunt quasi mollitia, consequuntur molestias unde aspernatur facilis tempora fugit incidunt illum alias rerum modi maiores obcaecati iusto. Eius et cum saepe voluptas quibusdam. Rem aspernatur consequatur, voluptas, officiis magnam sequi reiciendis enim saepe nulla delectus quae quas quasi dicta dolorem voluptatum! Iusto enim fugiat debitis commodi saepe dolore ut adipisci atque quidem ad doloremque mollitia dicta, odit explicabo ducimus deserunt non facere ipsa quos. Ea ut, veniam consequuntur sequi excepturi impedit est ad saepe quos commodi omnis vero rerum nesciunt voluptatibus, voluptas placeat consequatur dignissimos libero corrupti officia. Animi, ex voluptatem dicta repudiandae sequi placeat sit eveniet eius aspernatur quidem distinctio ipsa eaque eligendi minus beatae, assumenda similique excepturi natus asperiores minima! Voluptate, voluptatibus magni et nam animi, quisquam ipsa reiciendis tempore cum aliquid tenetur aut illo omnis error blanditiis?";

  return (
    <div className="max-w-4xl mx-auto px-10 py-10 text-center  ">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
        Welcome To Maa Anusaya Urban
      </h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        {expanded ? fullText : shortText}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 px-6 py-2 bg-red-600 text-white text-sm rounded-full shadow-md hover:bg-red-700 transition"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default WelcomeSection;
