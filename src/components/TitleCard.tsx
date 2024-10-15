import Image from 'next/image';

interface TitleCardProps {
  title: {
    id: number;
    title_name: string;
    description: string;
    type: string;
    status: string;
    cover_image_url: string;
    release_date: string;
  };
}

export default function TitleCard({ title }: TitleCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={title.cover_image_url}
        alt={title.title_name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title.title_name}</h2>
        <p className="text-gray-600">{title.description}</p>
        <p className="text-sm text-gray-500">Type: {title.type}</p>
        <p className="text-sm text-gray-500">Status: {title.status}</p>
        <p className="text-sm text-gray-500">
          Release Date: {new Date(title.release_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}