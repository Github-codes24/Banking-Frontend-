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
        माँ अनुसर्या अर्बन क्रेडिट को-ऑपरेटिव सोसायटी लिमिटेड (रजि. नं. J.J.T.C.) और हम R.C.R/119/2024 की शुरुआत जिले के ग्रामीण व शहरी क्षेत्र के मेहनती, निम्न मध्यम वर्ग, महिलाओं और किसानों के सुविधा जनक व सुरक्षित बैंकिंग सेवाएं प्रदान करने के उद्देश्य से कर रहे हैं।

        हमारे प्रयास का मुख्य उद्देश्य लोगों को उनकी जरूरतों के अनुसार विभिन्न पेशकशों और वित्तीय योजनाओं के माध्यम से समान के आर्थिक और सामाजिक विकास में सहयोग देना है।

        मैं अनुसर्या अर्बन क्रेडिट को-ऑपरेटिव सोसायटी अपने ग्राहकों की वित्तीय और लक्ष्यों की बेहतरी हेतु हमेशा तत्पर है। हम मिलकर अपने समुदाय के उत्कृष्ट भविष्य के लिए काम करेंगे।
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
