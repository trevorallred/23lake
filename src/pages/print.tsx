import Image from 'next/image'

function PrintPage() {
  const width = 513
  return (
    <div className="p-4 flex flex-col space-y-4">
      <Image src="/qr.png" alt="QR Code" width={width} height={width} />
    </div>
  )
}

export default PrintPage
