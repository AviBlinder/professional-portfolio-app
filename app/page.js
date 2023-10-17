'use client';
import { createClient } from 'next-sanity';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-10-14',
    useCdn: false,
  });

  // const projects = await client.fetch(`*[_type == "project"]`);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.fetch(`*[_type == "project"]`);
      console.log(response);
      setProjects(response);
    };

    fetchPosts();
    //
  }, []);

  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>projects</h2>
        {projects.length > 0 && (
          <ul>
            {projects.map((project) => (
              <li key={project._id}>
                Created At:{' '}
                {new Date(project?._createdAt)
                  .toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                  .replace(',', '')}{' '}
                Updated At: {project?._updatedAt} -{project?.name}
                {project?.description}
              </li>
            ))}
          </ul>
        )}
        {!projects.length > 0 && <p>No projects to show</p>}
      </main>
    </>
  );
}
