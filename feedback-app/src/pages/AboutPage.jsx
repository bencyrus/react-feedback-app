import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p><Link to={{pathname: "/"}}>Back to Home</Link></p>
      </div>
    </Card>
  )
}

export default AboutPage