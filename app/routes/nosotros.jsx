import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta () {
  return ([
    {
      title: "GuitarLA - Nosotros"
    },
    {
      description: "Venta de guitarras, blog de música"
    }
  ])
}

export function links () {
  return ([
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ])
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img  src={imagen} alt="imagen sobre nosotros" />

        <div className="">
          <p>Etiam vel magna nisi. Suspendisse elementum gravida finibus. Morbi venenatis eleifend posuere. Nulla varius finibus justo, at pulvinar mi pretium molestie. Nulla in tellus quis mauris posuere imperdiet. Proin luctus lacus lorem, sed aliquet ipsum dignissim eget. Mauris ipsum nisl, fermentum venenatis justo a, lacinia tristique magna.</p>
          <p>Etiam vel magna nisi. Suspendisse elementum gravida finibus. Morbi venenatis eleifend posuere. Nulla varius finibus justo, at pulvinar mi pretium molestie. Nulla in tellus quis mauris posuere imperdiet. Proin luctus lacus lorem, sed aliquet ipsum dignissim eget. Mauris ipsum nisl, fermentum venenatis justo a, lacinia tristique magna.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros