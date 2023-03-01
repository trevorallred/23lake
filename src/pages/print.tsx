import { Building } from '@/components'
import Image from 'next/image'

function PrintPage(): JSX.Element {
  return (
    <div className="relative print:break-inside-avoid">
      <Building />
      <div className="absolute bottom-4 left-3">
        <QrCode />
      </div>
    </div>
  )
}

function QrCode(): JSX.Element {
  const width = 130
  return <Image src="/qr.png" alt="QR Code" width={width} height={width} />
}

export default PrintPage
