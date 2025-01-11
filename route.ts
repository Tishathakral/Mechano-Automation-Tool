export async function GET() {
  const data = await getData()
  return NextResponse.json(data)  // Single response
} 