import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    id: 1,
    img: "data:image/png;base64,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",
    name: "Shirley Fultz",
    title: "Designer",
    description: 
      "It's freeing to be able to open a social media element on the\
      same site",
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/1057/1057231.png?w=360",
    name: "Daniel Keystone",
    title: "Designer",
    description:
      "The simple and intuitive design makes it easy for me use."
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvtVlsblb6Rk9_ZXQ3Gb5hFODRSMUSMgrQHssfa8yRRojSyypcaXy8O326ZFjqSNOp3g&usqp=CAU",
    name: "Theo Sorel",
    title: "Designer",
    description:
    "I enjoy catching up laptop, or on my phone when I'm on the go!",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="testimonial__container">
        <div className="Testimonial__MainHeading">
          <h1>What our Clients say.</h1>
        </div>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          swipeable={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3100}
          className="Testimonial__container"
        >
          {testimonials.map((testimonial) => (
            <div className="testimonial__card" key={testimonial.id}>
              <div className="testimonial__cardContainer">
                <div className="testimonial__cardImage">
                  <img src={testimonial.img} alt="testimonial" /> 
                </div>
                <div className="testimonial__cardContent" style={{padding: "1.5rem"}}>
                  <h3>{testimonial.name}</h3> 
                  <h4>{testimonial.title}</h4>
                  <h4 style={{color: "black"}}>{testimonial.description}</h4>
                </div>
              </div>
            </div>
          ))}
          {/* <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABdFBMVEX9wRH///8QL0HxyaXktpImJCEjHyD9vgD9wADrwJz9vQDvxqIhHR8lISH2zajpupX/xhBIPjj+46D+35TxyakAJ0H9yTr5vzr+670NDhX+02r//vn/+er9xi3/89T+24Shh3HitZaafGX+5az+13j90V79zEb9xSD/9dz/+ej+78kAKj8AIkL+5Kj/9N/+6rkADSIWGRkABg0AGTSxiRgVGSFKPR/XrIqOd2T3xWXb2s6VdBs9NR9eTB4OFSLUoxWifhmwlHrpuHsAAArBmn3yyJn1v1DpuoYAH0LJysE1Rkego5oAICt4f3VcZ2IAGzAADyyyta7o6OEQLCtbY1dLWWCjqauRlpJFUUknPUBwWR3irRPElxctKSCKbBt2ZVRlVEZoUx26lGI+NTFQRjtmVkrtummPeGX4xV/1x3/zx4rdsE7brTfEnziGdD4gO0pwaWejiT9jXkN9b0mznIaxkDp9cGaNeThYVUIADjualXpud3pC3BqWAAAP10lEQVR4nN2de0PayBqHw0USUSG1giIXQUVsg9VglW4vWo62tbSKtrXV0lb3qLvbXS1Wt5dz9sufmZBACJnceCfA+f1ZKJnH9zqTZIbx0FY8Pj8xs3BzNjsXTSZzDMPkksnoXHb25sLMxHw8Tv36DMXfTtxZnJqc44NBFovjmKY4Tvq3YJCfm5xavJOgOApahPOLs3M5LZeeJNbc3OziPKWR0CCcX8gyGM6ErYUTfZ/JLtCghCZMLM7yQVtwaswgP7sI7bGghLdmslyQdUSniA1y2ZlbkIOCI4wjPIfG05oSQcLlWCjC1KS9wDODZCdTQCMDIUyMRjt0znaxwegoSEgCEM5PMYDma4pjmSmA5NoxYSrLQpuvKZbNduysHRKm5sDdU8MYnOuQsSPCVDZIwz1bxQU7s2MHhPM0/VMt5KsdxKNjwvisS3x1xlnHBdIhYXyUc49PYuRGHTI6I7wddZdPYozedo0QOSj9BNMuzpmrOiCccNlBm2K5CRcIE5PBLvFhBSdtd3J2CW/numXAutic3Wi0STjVlQhUi2OnKBLe6UIKbRcbvUOLcMJ0WckdcbYSjg3Cm71gwLrYmxQI49neAUSIWcul0SphItlLgAgxabVsWCRM5XojBJvichbnVNYIeyXHqGU131giXOhmG0NWcAGKcLQ3ARHiKAxhD1UJraxUDXPCqV61IJaFFs6UsKcBkaOaIpoR9rCL1mXqqCaEo70OiBBN0o0xYY+WiVaZFA1Dwol+AESIhqXfiDDVe42MvjijBs6AMNFzvShJXM6gDScTxpP9AogQk+TJFJmwp+aDZmKz9gl7vhC2ilwWSYQT/QWIEEkJlUB4q39iUBFHWIEjEEb7kDBqh3Cq33wUizDP0CW83Y+ACFF3wV+PsH9Kfav0C78e4WR/mhAZcdIaYZ/023rS68HbCeP96aJ1ce3dWzvhbL/6KBY7a07Yp3lUUXs+1RLG+7DWq8VFtX6qJeyDhRljtS3baAj7Os3UpU02GsK+TjN1aZNNK+F8/wMixHkDwr6a15Okme+3EKb+HwARYopISNmEvEo0r9NqRDXhbYoNKWJav/vg/aPVh6uP3j+4u47+hd7FgikC4RytUsHz1cfvB5bWVoaHAyOB4eGVtaWVRw/WqUFyc/qEKUom5PkPvw6vDQ+0CmGuPs5RYlQbUUVIJwoR38M2vLoCa2uf6NhRHYlNQjq1kF9fXRrR5ZO0Ij6mwqiqiU1CGqtPPPNpRd9+ikbWVtcpIKpWpRqECfjLMHz14ZohXz0gH9OwYqKNkMKkgv9gYkBZS+/BL62aYjQI4eeF/N01gwhUa20V+tqq9WGFEL5U8HeXrPEhrcAjNgqGQgi+gogsaBkQIT4CvnxzZVEmjIMDfrADiBB/BR4Aw8ZbCGegCasDFmNQ0dID4IzKzrQQZoHzDL9qKYu2IALXRS6rJoS+Xcg/sOejWCMfYcfAcLdUhMBOyldXbAOiUPwEa0TZTRkqTvrIto9KiLB+KrupRJiABeQ/WK+Eag0/Ao7ERINwEbbc86sBR4TQySa42CCEXSXFJgzYZhSxEX8FJayvnEqEsM6BKoV4dCbaAyzcO0Z/lLUq7EgUwnlYJ62uDYjp0FHBjgE/boaPRPB0GpyXCRdgnfTByoBYCoXSlq0oikf+cHgafX/kIeRIGHZBJgSuFQ9HBgrFkC+0OWCNsXC6Gfb7JcKBNdBcI9ULTAj4m0jrqJ0pDPp8vtDgsQVPFQdKYQToD5cwIXTVrxPCLkFhJx34OOTDCpXMzCieTPsxH9Im/nMEYCeKeEEKES7Ctmyonwkch3x1xMF7ATKjqOJDkgwOm03ZRYkQ+J4hMqF4TyZEjJkjUZ9RLByXVHz+sPSvax8g3RRXRAZ6MX8ddWwolfoaCg2mT2JiawcgiuLpdDGs4kOEx/iTFdBpIl7eZzyJHOBP1hcvxKKKEDGGMunjk5FCTKxr4PSopMHzK8kUuK3JJRDhHQqJZtCnUSjkyxQ300ilzU1Ep8XDhJuxAVwRYRu3O4gQ9mlgHiWakdOQlrBOiTXYziarKMXrEizhIiKEfaCbR/Ue9Wx6hHWRCeuBuASbTKcQIew6Ih9oC0PLhFIgLq1DDoebRISgqZTj8eSXzGdEWHdT2DkiSqZMHDKVcuOfNwYCZwYmNCIMnyIHiP17HPJPzscZ0LXgz2ODhdZqaIsQT0fEUuYZ4Ns6wTgDODnMPRnzIcJCxqGX+v24GUijSgJnxuA8A1csuD/HfJjwY0guDO1SCMME3RORDfFUCix02AkGbKmU+2UMAxRwU5o+DYy06cZRETEOIrzNoxvtHwduTPv9MmHmX1BGZGcYsAl+UnLCoY1CceikMKyn2MZZcXCwuHm8EdP//MQ/LYp4OuzPQPkpu8BAFXzuN2xCX2jjNHQWCxAkbgyfDBdE0sex4/CNwqYUkVBGZG8yUHMn7olkw5CYzhSGSQhIhp/FipuFokSYgRkVmj8xUIs0ybE64clgiWhCU8XS4WOZ8CnMuLgsA9TScE9lwnQobUAY2xiOEZ0UfTwdLsqEvwGNa46JgvyQnElxqjEijB0VUaIx+Hy6Ma2CCsQok4T5ITnRSFYkEsTuodkTqnrkLzQJn0FFDxjhL+aEw4GQVPHDI6R0Q8GGSQaoe7BCKJ7JhMekUKRACNYdKZnGiDD2u0xIdNMmIVSmAVTOAuE9G4RA1QJQcsUHI4QbGZSfNgIRhhCs9c5B5dJGU+MLEXuaWFomnCZ+oxSGdlKwaoGM+FlGzJDGv1GUCTc3SIRFpRpCjQrxAfU0SDklEI8K+sM/U2bAYUJbEztSTAg3yY9C9aWMqmAMnelMAGMbp4ONVYziqe43juFLBepLAW8AN5NN6d4NrY7k9alBedHpSOcbigXB0ow0t4C8t8b9oTgqYZGmuRKlu0xDodij+SHooj43/qdS+B2ttWG+Z6C1Hs3xYR/E4LinTzoifPaUAW1m2AW4tTZZzRbcCSF4s8bOAK6X1sWNd0LoH4cdDV4vBX4gqlkWHRFCzXsbCs7D3rfA4owD0ZgQsE7UFYzD3nvCaq5n2CeEnzPxceD7h4xpIBoTgv+558DvAeNfde6l4GEo3QMG35itMcmwTZj5BZpQuo8PvjObsZsaEgKPRH4WA/Z5GizDbGpAmPkMvjYjPU8D+0wUlmFbY0QIegdfkvRMFIWX1JPObAieZ+Tn2ijsZ2KUa8iEFBYQ5WcTgZ8vxTIwIpkQ3oTK86UUXlM3MCKRkEIUKs8IAz/nXZdtQsili6boPKuPxf1BQiTaEGxZUzWKLJX3LeQfJy1nEAip3KdovG8BPkXEIiUbfUIKxZ5RvTMD/N5TXc3bbRYIM3Br3GrxlN5dk0UIRV1CuKe81FK9uwb8/qEs/eZNl5DO1uGq9w+B3yFVpIvYTpgJU9oRVvUOKY16IV3iqQVCFIOUrq56Dxh+wwHlIuNPtGbUEtK7Yd/yLje17bs57rexMQPCTJhCr6ZcW/0+Pi03xdfJfSYThv+gd1RW654K1NxUulRLZVQT0mi2G9LsiwG+LqzW+NDQEIGQ4lU1e5tQ3eF63DckyTfkIqF2fxpq29FhKYSS3CJs22OI5lkB4z6f64Tt+0TR3EAYEfrcJtTZ64vGfm2yMKHPbS9t36+N4okPEqHPVUK9Pfco7iE8LhcKNwn19k2ktwPteKMYukWov/clvYLRJHSrHhL2L6W1By2XJBPSaUtJe9DSMCLP8+d/fSYR+p/9dU5j12TiPsLQkYjGfvGltnUZIhKGL7dq1xc54E1ayXtBQ+7nzfO56terSD7iFfYNCPcFbySf//m1mgQ0pcF+3lBG5PnkxfVBPi94sWpDRMJMTfqGkM+Xry+gII32ZAepiSiwLq5q+UgdDynyd4hAGE5HlC8Jkbz36gIkKA331e985ZTPXVxv5RsDlwa/TyTcF9RfjOS3UFDyHaZX47MROjzfgufXUWZpwWszooowXGr/6pb3y3lnhjQ536KTKQaf+/Yz0jZmbMQawYY1QefbkfzBt6RzRrMzSpyfM8NXvwh5vRFjxJ2QDmH4kvT1vPCl6tBZzc+ZcXhWEL9+3e6dKrt8D7URhr8b/Yet63NHjOZnBTlKNvz5Vd5guHjEl0Oa57wzlyb/I391bt9XrZz3ZD/Z8MlrEz484Nrf9WfZ5R0HSroxqGG8HrfLaOnMLpvnrvHMV930opWwvP/3UEh6hzTsL5UjpoAS4w97DZ21c9fsrSzy5+W8hbFKjBHh8ns6/fv3S8ESH1a+bMdVrZ6dZ+f8Q/4HKX8SIJEEW/8j/8MyovXzD63nU/7KqgGdK39lFdH6GZaWV6VyB1YisFNFDqzdA7dzDqnV9eErNwAR4k8rg7F3lqylG4ooBl0BRI76xYKj2jwP2MqTw+dbLgF6vVvnpn9xu2c6WziXm//hjo9iRa7NjGj/XG7z+T5/aCfrd6i8GaCDs9U9cZOHXJLuOSkivDA0Ipds79bMCU0KP3/hVp7BEn4aEeqXenNCT8qQ8It7YYhltJ0ilzKgMCI07MH5sothiNz0G9mIev22RULPAhmx6iqgVyD3bsEFQwZjQvKyjbthiEVy07aFGXuExLLIX7sbht4tQjYlF0KLhJ4pfUfNHbjrpd6IfucW1G+37RASEKtuO6lQ07WgKaAFQl1H5b+5Tejd0glEUxe1RugZbbei29XQq1svgiZJxjKhXtGouQ3oFd5oCU3KhB1Cz4T2bnTVzaZUVqR1CBxnWOhtEnpSrT1qF8IQuWnLJJHLGbVq9gk9iaQ633QhDDWByCYNmm1HhJ64er7o6txQUUTVuLFZ8nTJKWFL1ah2wYReodxYc7NSJRwQNvON+02ppMi6vRxjn9BzK1o3I/+1GzZUApGN3rIzaFuEeKkYm5H/2YUwlFtTzkKj1gmh53YOmTF52A1Ar/ATGTCnu3QPSOhJTAa59a6EIVKSnbRaJJwTooTTlXqP9Z+qnRTjnNAT/+9yN+JQqGxbLoIdEno8z8vLrgMul587GqszQk/8xUt3C0bk5QsnBnRO6PG82nbRVYXl7VdOB+qY0OO5v1Nxh1Go7Nx3PswOCFE47uzSZxR2d5wFIAQhYjygzCjsHnTE1zGh5Kv0ck6kI/8EIkSM2y+pJB1h+eV2x3wghCivviiDO6uwW37hOH+qBULowYasAGZWoVKBMJ8kKELUBOztwHgr8s6dPYflXUdwhEivMGRneSeC8UC8UxEooQdDbr/edeivQmX39TYsngeeEOv+2ze1yrK9B/SE5UrtzVuo2FOLBiHW/b3t/cPKsvmDiIIQWa4c7m/v0aDDokWI9erV3rt/Dl7v7i5XKghVaOESIpXK8u7u64N/3u29gvZMtWgSSkJJ8f7zvbfvtt8clMuHhzVv7fCwXD54s/3u7d7z+9LndPU/E3o9ZTnaULEAAAAASUVORK5CYII=" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to open a social media element on the
                same site
              </p>
            </div>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1057/1057231.png?w=360" />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>The simple and intuitive design makes it easy for me use.</p>
            </div>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvtVlsblb6Rk9_ZXQ3Gb5hFODRSMUSMgrQHssfa8yRRojSyypcaXy8O326ZFjqSNOp3g&usqp=CAU" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up laptop, or on my phone when I'm on the go!
              </p>
            </div>
          </div> */}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
