/* Core */
import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET() {
  const sortConfigFile = path.join(process.cwd(), 'app' , 'data', 'sortConfig.json');
  const sortConfig = fs.readFileSync(sortConfigFile, 'utf8');

  return NextResponse.json(JSON.parse(sortConfig))
}
