export default async function Page({ params }) {
  const { val } = await params;

  console.log(val);

  return <div>Also at Console &nbsp; {JSON.stringify(val)}</div>;
}