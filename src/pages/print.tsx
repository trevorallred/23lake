import { Building } from '@/components'
import Image from 'next/image'

function PrintPage(): JSX.Element {
  return (
    <div className="flex flex-col space-y-4">
      <PrintMap />
      <PrintMap />
    </div>
  )
}

function PrintMap(): JSX.Element {
  return (
    <div className="print:break-inside-avoid" style={{ height: 730 }}>
      <div className="relative pl-20 h-full">
        <Building />
        <div className="absolute bottom-0 left-3 z-50" style={{ width: 190 }}>
          <Image src="/arrow.png" alt="arrow" width={100} height={100} className="rotate-90" />
          <QrCode />
          <div className="">
            <p className="text-xl">Scan for more info!</p>
            <div className="flex flex-wrap space-x-3">
              <p className="text-xl">扫描</p>
              <p className="text-xl">Сканировать</p>
              <p className="text-xl">주사</p>
              <p className="text-xl">اسکن کنید</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function QrCode(): JSX.Element {
  const width = 130
  return <Image src="/qr.png" alt="QR Code" width={width} height={width} />
}

export default PrintPage
