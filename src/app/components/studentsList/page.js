const { default: Link } = require("next/link")

const page = () => {
  return (
    <div>
      <h1>Students List</h1>
      <ul>
      <li><Link href="/components/studentsList/1">ehtisham</Link></li>
      <li><Link href="/components/studentsList/2">sam</Link></li>
      <li><Link href="/components/studentsList/3">Ali</Link></li>
      <li><Link href="/components/studentsList/4">rafay</Link></li>
      </ul>
    </div>
  )
}

export default page
