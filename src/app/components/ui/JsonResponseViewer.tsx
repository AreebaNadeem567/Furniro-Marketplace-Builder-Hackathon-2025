'use client'

import { useState } from 'react'
import { Download, Package, Truck, DollarSign, MapPin } from 'lucide-react'
import { Button } from './button'
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from '@radix-ui/react-alert-dialog'

interface ShipmentResponse {
  label_id: string
  status: string
  shipment_id: string
  tracking_number: string
  ship_date: string
  shipment_cost: {
    currency: string
    amount: number
  }
  carrier_code: string
  tracking_status: string
  label_download: {
    pdf: string
    png: string
    zpl: string
    href: string
  }
  packages: Array<{
    weight: {
      value: number
      unit: string
    }
    dimensions: {
      unit: string
      length: number
      width: number
      height: number
    }
  }>
  ship_to: {
    name: string
    address_line1: string
    city_locality: string
    state_province: string
    postal_code: string
    country_code: string
  }
}

interface JsonResponseViewerProps {
  data: ShipmentResponse
}

export default function JsonResponseViewer({ data }: JsonResponseViewerProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDownload = () => {
    const pdfUrl = data.label_download.pdf;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'shipment_label.pdf'; // Name the file to be downloaded
    link.click(); // Trigger the download
  }

  return (
    <div className="container mx-auto p-4">
      <Button 
        className="bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => setIsDialogOpen(true)}
      >
        View Shipment Details
      </Button>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <div className="flex justify-between items-center mb-4">
            <AlertDialogTitle className="text-2xl font-bold">Shipment Details</AlertDialogTitle>
          </div>
          <div className="grid gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <Package className="text-blue-500" />
              <span className="font-semibold">Shipment ID:</span>
              <span>{data.shipment_id}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Package className="text-blue-500" />
              <span className="font-semibold">Tracking ID:</span>
              <span>{data.tracking_number}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Truck className="text-green-500" />
              <span className="font-semibold">Status:</span>
              <span className="capitalize">{data.status}</span>
            </div>

            <div className="flex items-center space-x-2">
              <DollarSign className="text-yellow-500" />
              <span className="font-semibold">Cost:</span>
              <span>{`${data.shipment_cost.currency.toUpperCase()} ${data.shipment_cost.amount.toFixed(2)}`}</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="text-red-500" />
              <span className="font-semibold">Ship To:</span>
              <span>{`${data.ship_to.name}, ${data.ship_to.address_line1}, ${data.ship_to.city_locality}, ${data.ship_to.state_province} ${data.ship_to.postal_code}, ${data.ship_to.country_code}`}</span>
            </div>
          </div>
          {/* <AlertDialogFooter>
            <Button 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Label
            </Button>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </AlertDialogFooter> */}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
