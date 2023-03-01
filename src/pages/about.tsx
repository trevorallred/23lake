import Link from 'next/link'

function AboutPage() {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <p>This map was created initially by Trevor Allred.</p>
      <p>If you have suggestions or change requests, then please reach out to him through the church directory.</p>
      <p>
        If you are a software developer and are interested in contributing to this project or are interested in learning
        how it was build, please check out this project on Github.
      </p>
      <p>
        <a href="https://github.com/trevorallred/23lake">https://github.com/trevorallred/23lake</a>
      </p>
      <p>
        <Link href="/print">Print This Map</Link>
      </p>
    </div>
  )
}

export default AboutPage
