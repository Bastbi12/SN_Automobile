import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

const dataFile = path.resolve('./data/customers.json')

export async function GET() {
  const data = JSON.parse(readFileSync(dataFile, 'utf-8'))
  return NextResponse.json(data)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  if (!id) return NextResponse.error()

  const customers: any[] = JSON.parse(readFileSync(dataFile, 'utf-8'))
  const filtered = customers.filter(c => c.id !== id)
  writeFileSync(dataFile, JSON.stringify(filtered, null, 2))

  return NextResponse.json({ success: true })
}
