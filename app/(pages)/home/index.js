// app/page.js (or wherever your Home component is)
import { gql } from "@apollo/client";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/apollo-client";

export default async function Home() {
  // Run your GraphQL query on the server
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        posts {
          nodes {
            title
          }
        }
      }
    `,
  });

  return (
    <main className="p-6">
      <Button className="mb-4">sami</Button>

      <h1 className="text-2xl font-semibold mb-3">Posts:</h1>

      <ul className="space-y-2">
        {data.posts.nodes.map((post, i) => (
          <li key={i} className="border-b border-gray-300 pb-1">
            {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
