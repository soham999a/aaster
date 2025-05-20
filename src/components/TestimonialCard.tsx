
interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  image?: string;
}

const TestimonialCard = ({ name, location, testimonial, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-dusty-lavender flex items-center justify-center text-white font-bold text-lg mr-4">
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover rounded-full" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-medium text-lg">{name}</h4>
          <p className="text-cool-gray text-sm">{location}</p>
        </div>
      </div>
      <p className="text-cool-gray italic">{testimonial}</p>
      <div className="flex mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 text-mystic-gold"
          >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
