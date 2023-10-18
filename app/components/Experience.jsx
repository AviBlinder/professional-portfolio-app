'use client';
import { useEffect, useState } from 'react';
import GlobalConifg from '../app.config';

const Experience = () => {
  const client = GlobalConifg.client;
  const [Experience, setExperience] = useState([]);
  useEffect(() => {
    const fetchRecords = async () => {
      const response = await client.fetch(`*[_type == "experience"]`);
      console.log(response);
      setExperience(response);
    };

    fetchRecords();
    //
  }, []);

  return (
    <section>
      <h2>Experience</h2>
      {Experience.length > 0 && (
        <ul>
          {Experience.map((project) => (
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
      {!Experience.length > 0 && <p>No Experience to show</p>}
    </section>
  );
};

export default Experience;
