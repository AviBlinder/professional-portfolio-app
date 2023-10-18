'use client';
import { useEffect, useState } from 'react';
import GlobalConifg from '../app.config';

const Projects = () => {
  const client = GlobalConifg.client;
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchRecords = async () => {
      const response = await client.fetch(`*[_type == "project"]`);
      console.log(response);
      setProjects(response);
    };

    fetchRecords();
    //
  }, []);

  return (
    <section>
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
    </section>
  );
};

export default Projects;
