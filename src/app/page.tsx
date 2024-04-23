import withAuth from "@/lib/hoc/withAuth";

function HomePage() {
  return <div>Hello world....</div>;
}

export default withAuth(HomePage);
