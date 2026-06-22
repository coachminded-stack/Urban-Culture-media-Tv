import { ShowCard } from './ShowCard';

interface Show {
  id: number;
  title: string;
  creator: string;
  thumbnail: string;
  views: string;
  duration: string;
}

interface CategoryRowProps {
  title: string;
  shows: Show[];
}

export function CategoryRow({ title, shows }: CategoryRowProps) {
  return (
    <section>
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}
