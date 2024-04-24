export async function GET() {
  const url =
    "https://d14eb5sje6oeoy.cloudfront.net/views/apex-legends/global-series-season-4/round-robin-pl/viewer-match?structureID=65a9cdd07485506f0fb9c753&roundNumber=4&matchNumber=4&disableSnapshot=false";
  const res = await fetch(url);
  const result = await res.json();
  return Response.json(result);
}
