"use client"
const page = ({ params }) => {
  console.log(params)

  return (
    <>
      <h1>{params.lectures[0]}</h1>
      <h1>{params.lectures[1]}</h1>
    </>
  )
}

export default page
