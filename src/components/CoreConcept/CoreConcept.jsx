import './CoreConcept.css'
export default function CoreConcept({image, title, description}){ // destructuring props object with { } into its properties. They must hold the same names in order to work
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
