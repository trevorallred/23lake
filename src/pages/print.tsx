import { Building } from '@/components'
import Image from 'next/image'

function PrintPage(): JSX.Element {
  return (
    <div className="print:break-inside-avoid">
      <div className="relative">
        <Building direction={'up'} zoom={1} />
        <div className="absolute bottom-4 left-3 z-50">
          <QrCode />
        </div>
      </div>
      <div>
        <p className="pl-4 text-lg">Scan QR Code above for a mobile version of this map and a calendar of events.</p>
      </div>
    </div>
  )
}

function QrCode(): JSX.Element {
  const width = 130
  return <Image src="/qr.png" alt="QR Code" width={width} height={width} />
}

export default PrintPage
