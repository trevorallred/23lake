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
        <Link
          href="/print"
          className="space-x-2
        
        inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50
             "
        >
          <IconPrinter />
          <p>Print This Map</p>
        </Link>
      </p>
    </div>
  )
}

export default AboutPage

function IconPrinter(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
      />
    </svg>
  )
}
