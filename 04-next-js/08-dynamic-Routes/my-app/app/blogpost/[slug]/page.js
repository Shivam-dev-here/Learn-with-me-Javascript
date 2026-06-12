export default async function Page({ params }) {
  const { slug } = await params;

  // throw new Error("Error: Who creates error on error free sitr, Seriously?")

  let languages = ["python", "cpp", "javascript", "dsa"];

  if (languages.includes(slug)) {
    return <div>My Post: {slug}</div>;
  } else {
    return <div>404: Does not exist</div>;
  }
}