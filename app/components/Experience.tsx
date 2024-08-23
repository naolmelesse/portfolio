import ExperienceCard from './experienceCard';

export default function Experience() {
  return (
    <>
      <h3 className='md:text-3xl my-5'>Experience</h3>

      <ExperienceCard
        position='UI Developer Intern'
        company='Asite'
        location='India'
        date='Jan - Apr, 2023'
        technicalSkills={['Angular', 'Typescript', 'Git', 'Bitbucket', 'Jira']}
        softSkills={[
          'Team work',
          'Communication',
          'Code Structuring',
          'Problem-solving',
          'Time Management',
        ]}
      />

      <ExperienceCard
        position='Junior QA Engineer'
        company='Auditorium'
        location='Remote (London, UK)'
        date='Mar, 2023 - Current'
        technicalSkills={[
          'Cypress',
          'Git',
          'Jira',
          'Playwright',
          'React',
          'Typescript',
        ]}
        softSkills={[
          'Attention to detail',
          'Code Standards',
          'Communication',
          'Problem-solving',
          'Team work',
        ]}
      />
    </>
  );
}
