import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader ({ params }) {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)

    // Lanzar error si no se encuentra la guitarra se hace uso de la funcion de errores en "/app/root.jsx"
    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: "Guitarra no encontrada"
        })
    }

    return guitarra
}

export function meta ({ data }) {
    if (!data) {
        return ([
            {
                title: "GuitarLA - Guitarra no encontrada"
            },
            {
                description: `Guitarra, venta de guitarras, guitarra no encontrada`
            } 
        ])
    }

    return ([
        {
            title: `GuitarLA - ${data.data[0].attributes.nombre}`
        },
        {
            description: `Guitarra, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
        }
    ])
}

const Guitarra = () => {
  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <div className="guitarra">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="texto">{descripcion}</p>
            <p className="precio">{precio}</p>
        </div>
    </div>
  )
}

export default Guitarra