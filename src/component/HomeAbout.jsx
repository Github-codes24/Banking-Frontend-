import React, { useState } from "react";
import { Link } from "react-router-dom"
const WelcomeSection = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo odit ea, sit, quae eum deleniti odio quo vero eos dolorem totam dignissimos ratione mollitia ducimus. Fugiat, adipisci? Quasi recusandae modi doloremque enim reprehenderit necessitatibus. Harum sint in sapiente fugit accusantium cumque nam ex! Beatae, iure officiis....";
  const fullText =
    "Quibusdam ab eligendi tempore est facilis itaque neque voluptate vitae exercitationem? Labore cum, odit eaque nisi quam sint! Nemo tenetur eius minus? Necessitatibus sunt quasi mollitia, consequuntur molestias unde aspernatur facilis tempora fugit incidunt illum alias rerum modi maiores obcaecati iusto. Eius et cum saepe voluptas quibusdam. Rem aspernatur consequatur, voluptas, officiis magnam sequi reiciendis enim saepe nulla delectus quae quas quasi dicta dolorem voluptatum! Iusto enim fugiat debitis commodi saepe dolore ut adipisci atque quidem ad doloremque mollitia dicta, odit explicabo ducimus deserunt non facere ipsa quos. Ea ut, veniam consequuntur sequi excepturi impedit est ad saepe quos commodi omnis vero rerum nesciunt voluptatibus, voluptas placeat consequatur dignissimos libero corrupti officia. Animi, ex voluptatem dicta repudiandae sequi placeat sit eveniet eius aspernatur quidem distinctio ipsa eaque eligendi minus beatae, assumenda similique excepturi natus asperiores minima! Voluptate, voluptatibus magni et nam animi, quisquam ipsa reiciendis tempore cum aliquid tenetur aut illo omnis error blanditiis?";

  return (
    <div className="max-w-4xl mx-auto px-10 py-10 text-center  ">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
        Welcome To Maa Anusaya Urban
      </h2>
      <p className="block text-lg md:text-xl font-semibold text-gray-700 mt-2">
        माँ अनुसया अर्बन को-ऑपरेटिव्ह बैंक  आपले हार्दिक स्वागत आहे!
      </p>
      <p className="text-gray-700 leading-relaxed mt-3 text-justify">
       माँ अनुसर्या अर्बन क्रेडिट को-ऑपरेटिव सोसायटी लिमिटेड (नोंदणी क्र. J.J.T.C.) आणि आम्ही R.C.R/119/2024 ची सुरूवात जिल्ह्याच्या ग्रामीण आणि शहरी भागातील मेहनती, निम्न-मध्यम वर्गीय, महिला आणि शेतकऱ्यांना सुलभ व सुरक्षित बँकिंग सेवा प्रदान करण्याच्या उद्देशाने करत आहोत. आमचा मुख्य उद्देश म्हणजे लोकांना त्यांच्या गरजांनुसार विविध ऑफर आणि वित्तीय योजनांच्या माध्यमातून आर्थिक आणि सामाजिक विकासात सहाय्य करणे. मी, अनुसर्या अर्बन क्रेडिट को-ऑपरेटिव्ह सोसायटी, नेहमीच आपल्या ग्राहकांच्या वित्तीय आणि उद्दिष्टांच्या सुधारण्यासाठी तत्पर आहे. आपण सर्वजण एकत्र येऊन आपल्या समुदायासाठी उत्कृष्ट भविष्य घडविण्यासाठी काम करू.
      </p>
      <Link
        to="/about-us"
        className="mt-6 px-6 py-2 bg-red-600 text-white text-sm rounded-full shadow-md hover:bg-red-700 transition"
      >
        Read More
      </Link>
    </div>
  );
};

export default WelcomeSection;
