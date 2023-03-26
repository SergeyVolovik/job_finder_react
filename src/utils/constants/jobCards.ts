import { appleLogo, googleLogo, netflixLogo } from '@/assets';

const positions = ['UX Designer', 'Frontend Developer', 'Backend Developer'];
const locations = ['Cupertino, California', 'San Francisco, California'];
const logos = [appleLogo, googleLogo, netflixLogo];

const card = {
  jobDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

export const mockCards = Array(9)
  .fill(card)
  .map((obj, i) => {
    return {
      id: i + 1,
      position: positions[Math.floor(Math.random() * positions.length)],
      createdDate: new Date(Date.now()).toLocaleDateString(),
      location: locations[Math.floor(Math.random() * locations.length)],
      logo: logos[Math.floor(Math.random() * logos.length)],
      ...obj
    };
  });
