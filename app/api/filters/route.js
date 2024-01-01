/* Core */
import fs from 'fs';
import { NextResponse } from 'next/server'
import path from 'path';

export async function GET() {
  const filterConfigFile = path.join(process.cwd(), 'app' , 'data', 'filterConfig.json');
  const filterConfig = fs.readFileSync(filterConfigFile, 'utf8');

  return NextResponse.json(JSON.parse(filterConfig))
}
